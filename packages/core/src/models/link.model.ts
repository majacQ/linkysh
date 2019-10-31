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
