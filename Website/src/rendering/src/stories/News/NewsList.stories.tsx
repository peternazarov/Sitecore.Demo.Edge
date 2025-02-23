import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import NewsList, { News } from '../../components/NewsList';

export default {
  title: 'Components/News/NewsList',
  component: NewsList,
} as ComponentMeta<typeof NewsList>;

const Template: ComponentStory<typeof NewsList> = (args) => <NewsList {...args} />;

const news1 = {
  name: {
    value: 'PLAY Summit Goes Live',
  },
  fields: {
    Title: {
      value: 'PLAY! Summit Goes Live',
    },
    Excerpt: {
      value:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan posuere orci, placerat tristique quam vulputate non. Aliquam erat volutpat. Vestibulum ante ipsum primis in orci luctus et posuere cubilia curae; Sed mollis tincidunt magna eu blandit.',
    },
    PublishDate: {
      value: '2021-07-29T06:00:00Z',
    },
    Image: {
      value: {
        src: '/assets/img/tickets/Banner2.jpg',
      },
    },
  },
} as News;

const news2 = {
  name: {
    value: 'Sample News',
  },
  fields: {
    Title: {
      value: 'Sample News',
    },
    Excerpt: {
      value:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan posuere orci, placerat tristique quam vulputate non. Aliquam erat volutpat. Vestibulum ante ipsum primis in orci',
    },
    PublishDate: {
      value: '2021-07-29T06:00:00Z',
    },
    Image: {
      value: {
        src: '/assets/img/tickets/Banner2.jpg',
      },
    },
  },
} as News;

const news3 = {
  name: {
    value: 'Tomorrow News',
  },
  fields: {
    Title: {
      value: 'Tomorrow News',
    },
    Excerpt: {
      value:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan posuere orci, placerat tristique quam vulputate non.',
    },
    PublishDate: {
      value: '2021-07-29T06:00:00Z',
    },
    Image: {
      value: {
        src: '/assets/img/tickets/Banner2.jpg',
      },
    },
  },
} as News;

export const Default = Template.bind({});
Default.args = {
  fields: {
    items: [news1, news2, news3],
  },
};
