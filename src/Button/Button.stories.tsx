import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { withGlobalStyles } from '../../.storybook/utils';

import { Button } from '..';

export default {
  title: 'Components/Button',
  component: Button,
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
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
  decoSymbol: '#',
  decoCode: 's01',
};
