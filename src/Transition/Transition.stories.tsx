import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { withGlobalStyles } from '../../.storybook/utils';

import { Transition } from '..';

export default {
  title: 'Components/Transition',
  component: Transition,
  parameters: {
    layout: 'centered',
  },
  decorators: [withGlobalStyles],
} as ComponentMeta<typeof Transition>;

const Template: ComponentStory<typeof Transition> = (args) => (
  <Transition {...args} />
);

export const Default = Template.bind({});
Default.args = {};
