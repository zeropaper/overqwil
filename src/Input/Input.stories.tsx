import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { withGlobalStyles } from '../../.storybook/utils';

import { Input } from './Input';

export default {
  title: 'ComponentsInput',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  args: {
    type: 'button',
  },
  argTypes: {
    type: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [withGlobalStyles],
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {};
