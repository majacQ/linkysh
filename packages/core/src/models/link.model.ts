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

import {Entity, model, property} from '@loopback/repository';

@model()
export class Link extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  LinkID?: number;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {
      maxLength: 1024
    }
  })
  RedirectURL: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {
      maxLength: 255
    }
  })
  ShortAlias: string;

  constructor(data?: Partial<Link>) {
    super(data);
  }
}

export interface LinkRelations {
  // describe navigational properties here
}

export type LinkWithRelations = Link & LinkRelations;
