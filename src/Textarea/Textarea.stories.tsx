import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { withGlobalStyles } from '../../.storybook/utils';

import { Textarea } from './Textarea';

export default {
  title: 'ComponentsTextarea',
  component: Textarea,
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
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => (
  <Textarea {...args} />
);

export const Default = Template.bind({});
Default.args = {};
