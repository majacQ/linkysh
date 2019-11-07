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

import {
  createStubInstance,
  // expect,
  // sinon,
  StubbedInstanceWithSinonAccessor,
  // stubExpressContext,
} from '@loopback/testlab';
// import { Response } from '@loopback/rest';
import {Link} from '../../../models';
// import { LinkController } from '../../../controllers';
import {LinkRepository} from '../../../repositories';
import {givenLinkData} from '../../helpers/database.helpers';

describe('LinkController (unit)', () => {
  let repository: StubbedInstanceWithSinonAccessor<LinkRepository>;
  // let response: Response;
  // let findStub: sinon.SinonStub;
  beforeEach(givenStubbedRepository);
  beforeEach(setupResponseMock);

  describe('createLink', () => {
    it('creates a link', async () => {
      const aLinkWithId: Link = givenLinkData({LinkID: 1});
      const create = repository.stubs.create;
      create.resolves(aLinkWithId);
    });
  });

  // describe('getDetails()', () => {
  //     it('retrieves details of a link by id', async () => {
  //         const controller = new LinkController(repository, response);

  //         const details = await controller.findById(1);

  //         repository.stubs.findById(1);

  //         expect(details).containEql({
  //             RedirectURL: 'a-redirect-url',
  //             ShortAlias: 'a-short-alias',
  //         });

  //         sinon.assert.calledWithMatch(findStub, {
  //             where: {
  //                 id: 1,
  //                 RedirectURL: 'a-redirect-url',
  //                 ShortAlias: 'a-short-alias',
  //             }
  //         });
  //     });
  // });

  function givenStubbedRepository() {
    repository = createStubInstance(LinkRepository);
    // findStub = repository.find as sinon.SinonStub;
    // findStub.resolves({
    //     RedirectURL: 'a-redirect-url',
    //     ShortAlias: 'a-short-alias',
    // });
  }

  function setupResponseMock() {
    // const responseMock =  stubExpressContext();
    // response = responseMock.response;
  }
});
