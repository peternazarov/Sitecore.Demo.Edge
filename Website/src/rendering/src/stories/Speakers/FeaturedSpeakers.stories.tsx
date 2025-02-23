import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import FeaturedSpeakers, { Speaker } from '../../components/FeaturedSpeakers';

export default {
  title: 'Components/Speakers/FeaturedSpeakers',
  component: FeaturedSpeakers,
} as ComponentMeta<typeof FeaturedSpeakers>;

const Template: ComponentStory<typeof FeaturedSpeakers> = (args) => <FeaturedSpeakers {...args} />;

const speaker = {
  itemName: 'First Speaker Name',
  name: {
    value: 'First Speaker Name',
  },
  picture: {
    jsonValue: {
      value: {
        src: '/assets/img/shop/man-biker.jpg',
        alt: '',
      },
    },
  },
  featured: {
    value: true,
  },
} as Speaker;

const speaker1 = {
  itemName: 'Second Speaker',
  name: {
    value: 'Second Speaker',
  },
  picture: {
    jsonValue: {
      value: {
        src: '/assets/img/shop/man-biker.jpg',
        alt: '',
      },
    },
  },
  featured: {
    value: true,
  },
} as Speaker;

const speaker2 = {
  itemName: 'Third Speaker',
  name: {
    value: 'Third Speaker',
  },
  picture: {
    jsonValue: {
      value: {
        src: '/assets/img/shop/man-biker.jpg',
        alt: '',
      },
    },
  },
  featured: {
    value: true,
  },
} as Speaker;

const speaker3 = {
  itemName: 'Another Speaker',
  name: {
    value: 'Another Speaker',
  },
  picture: {
    jsonValue: {
      value: {
        src: '/assets/img/shop/man-biker.jpg',
        alt: '',
      },
    },
  },
  featured: {
    value: true,
  },
} as Speaker;

const speaker4 = {
  itemName: 'Last Speaker',
  name: {
    value: 'Last Speaker',
  },
  picture: {
    jsonValue: {
      value: {
        src: '/assets/img/shop/man-biker.jpg',
        alt: '',
      },
    },
  },
  featured: {
    value: true,
  },
} as Speaker;

export const Default = Template.bind({});
Default.args = {
  fields: {
    data: {
      item: {
        children: {
          results: [speaker, speaker1, speaker2, speaker3, speaker4],
        },
      },
    },
  },
  params: {
    NumberOfSpeakers: '4',
  },
};
