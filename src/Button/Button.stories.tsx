import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { withGlobalStyles } from '../../.storybook/decorators';

import Button from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Overqwil/Button',
  component: Button,
  decorators: [withGlobalStyles],
  args: {},
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: 'Button',
  color: 'secondary',
};
