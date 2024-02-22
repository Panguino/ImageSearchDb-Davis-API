import type { Schema, Attribute } from '@strapi/strapi';

export interface ListComments extends Schema.Component {
  collectionName: 'components_list_comments';
  info: {
    displayName: 'Comments';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    CommentText: Attribute.Text;
    author: Attribute.Relation<
      'list.comments',
      'oneToOne',
      'api::author.author'
    >;
    Images: Attribute.Media;
    Rating: Attribute.Enumeration<['Positive', 'Neutral', 'Negative']>;
    PrintedPageID: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'list.comments': ListComments;
    }
  }
}
