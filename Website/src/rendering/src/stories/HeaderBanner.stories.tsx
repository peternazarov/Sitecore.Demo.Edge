import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import HeaderBanner, { HeaderBannerProps } from '../components/HeaderBanner';

export default {
  title: 'Components/HeaderBanner',
  component: HeaderBanner,
} as ComponentMeta<typeof HeaderBanner>;

const Template: ComponentStory<typeof HeaderBanner> = (args: HeaderBannerProps) => (
  <HeaderBanner {...args} />
);

const fieldsWithoutImage = {
  eyebrow: {
    value: 'Eyebrow text',
  },
  title: {
    value: 'Title text',
  },
  subtitle: {
    value: 'Subtitle text',
  },
  backgroundImage: {
    value: {},
  },
};

const fieldsWithImage = {
  ...fieldsWithoutImage,
  ...{
    backgroundImage: {
      value: {
        src: '/assets/img/tickets/come-play.jpg',
      },
    },
  },
};

export const WithImage = Template.bind({});
WithImage.args = {
  fields: fieldsWithImage,
};

export const WithoutImage = Template.bind({});
WithoutImage.args = {
  fields: fieldsWithoutImage,
};
