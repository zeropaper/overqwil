import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { withGlobalStyles } from '../../.storybook/utils';

import { OverqwilLogo } from './OverqwilLogo';

export default {
  title: 'Overqwil/OverqwilLogo',
  component: OverqwilLogo,
  parameters: {
    layout: 'centered',
  },
  decorators: [withGlobalStyles],
} as ComponentMeta<typeof OverqwilLogo>;

const Template: ComponentStory<typeof OverqwilLogo> = (args) => (
  <OverqwilLogo {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 400,
};
