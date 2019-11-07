//
// Copyright 2019 AppRExp
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// SPDX-Short-Identifier: Apache-2.0
//

import {inject} from '@loopback/core';
import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
  Response, // For custom response when retrieving shortAlias
  RestBindings,
} from '@loopback/rest';
import {Link} from '../models';
import {LinkRepository} from '../repositories';

export class LinkController {
  constructor(
    @repository(LinkRepository)
    public linkRepository: LinkRepository,

    // Inject for custom shortAlias retrieval below
    @inject(RestBindings.Http.RESPONSE)
    protected response: Response,
  ) {}

  @get('/{shortAlias}', {
    responses: {
      '301': {
        description: 'Shortlink redirect',
      },
    },
  })
  async redirect(
    @param.path.string('shortAlias') shortAlias: string,
  ): Promise<Response | undefined> {
    const link = await this.linkRepository.findOne({
      where: {
        ShortAlias: shortAlias,
      },
    });

    if (link == null) {
      return this.response.status(404).send();
    }

    this.response.redirect(link.RedirectURL);
  }

  @post('/links', {
    responses: {
      '200': {
        description: 'Link model instance',
        content: {'application/json': {schema: getModelSchemaRef(Link)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Link, {
            title: 'NewLink',
            exclude: ['LinkID'],
          }),
        },
      },
    })
    link: Omit<Link, 'LinkID'>,
  ): Promise<Link> {
    return this.linkRepository.create(link);
  }

  @get('/links/count', {
    responses: {
      '200': {
        description: 'Link model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Link)) where?: Where<Link>,
  ): Promise<Count> {
    return this.linkRepository.count(where);
  }

  @get('/links', {
    responses: {
      '200': {
        description: 'Array of Link model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Link)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Link))
    filter?: Filter<Link>,
  ): Promise<Link[]> {
    return this.linkRepository.find(filter);
  }

  @patch('/links', {
    responses: {
      '200': {
        description: 'Link PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Link, {partial: true}),
        },
      },
    })
    link: Link,
    @param.query.object('where', getWhereSchemaFor(Link)) where?: Where<Link>,
  ): Promise<Count> {
    return this.linkRepository.updateAll(link, where);
  }

  @get('/links/{id}', {
    responses: {
      '200': {
        description: 'Link model instance',
        content: {'application/json': {schema: getModelSchemaRef(Link)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Link> {
    return this.linkRepository.findById(id);
  }

  @patch('/links/{id}', {
    responses: {
      '204': {
        description: 'Link PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Link, {partial: true}),
        },
      },
    })
    link: Link,
  ): Promise<void> {
    await this.linkRepository.updateById(id, link);
  }

  @put('/links/{id}', {
    responses: {
      '204': {
        description: 'Link PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() link: Link,
  ): Promise<void> {
    await this.linkRepository.replaceById(id, link);
  }

  @del('/links/{id}', {
    responses: {
      '204': {
        description: 'Link DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.linkRepository.deleteById(id);
  }
}
