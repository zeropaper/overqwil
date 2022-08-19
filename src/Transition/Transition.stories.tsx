import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { withGlobalStyles } from '../../.storybook/utils';

import { Transition } from './Transition';

export default {
  title: 'ComponentsTransition',
  component: Transition,
  parameters: {
    layout: 'centered',
  },
  args: {},
  argTypes: {},
  decorators: [withGlobalStyles],
} as ComponentMeta<typeof Transition>;

const Template: ComponentStory<typeof Transition> = (args) => (
  <Transition {...args} />
);

export const Default = Template.bind({});
Default.args = {};
