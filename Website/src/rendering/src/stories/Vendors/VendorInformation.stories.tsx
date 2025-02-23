import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import VendorInformation, { VendorInformationProps } from '../../components/VendorInformation';

export default {
  title: 'Components/Vendors/VendorInformation',
  component: VendorInformation,
} as ComponentMeta<typeof VendorInformation>;

const Template: ComponentStory<typeof VendorInformation> = (args: VendorInformationProps) => (
  <VendorInformation {...args} />
);

const fieldsWithoutSocialLinks = {
  Name: {
    value: 'Fitbit',
  },
  Level: {
    value: 'Platinum',
  },
  Logo: {
    value: {
      src: '/assets/img/sponsors/sponsors-fitbit.svg',
    },
  },
  Description: {
    value:
      '<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.&nbsp;</p><p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et justo.</p><ul><li>Lorem ipsum dolor sit amet</li><li>consetetur sadipscing elitr</li><li>sed diam nonumy eirmod tempor</li><li>invidunt ut labore et dolore</li><li>magna aliquyam erat</li><li>sed diam voluptua</li></ul><p>ad fas dasd asasdf asd fasd fasd fas dfasd f sdfasdfda sd as sdgf sdfg sdfg sdfbghtyurty urty urtyu rtyur tasdasqwqwrt wert wert wert wert sdfg sgd. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et justo.</p>',
  },
};

const fieldsWithSocialLinks = {
  ...fieldsWithoutSocialLinks,
  ...{
    FacebookProfileLink: {
      value: 'https://facebook.com/asada',
    },
    TwitterProfileLink: {
      value: 'https://twitter.com/asada',
    },
    InstagramProfileLink: {
      value: 'https://instagram.com/asada',
    },
    LinkedinProfileLink: {
      value: 'https://linkedin.com/asada',
    },
  },
};

export const WithoutSocialLinks = Template.bind({});
WithoutSocialLinks.args = {
  fields: fieldsWithoutSocialLinks,
};

export const WithSocialLinks = Template.bind({});
WithSocialLinks.args = {
  fields: fieldsWithSocialLinks,
};
