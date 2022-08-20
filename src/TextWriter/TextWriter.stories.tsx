import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { withGlobalStyles } from '../../.storybook/utils';

import { TextWriter, Text } from '..';

export default {
  title: 'Components/TextWriter',
  component: TextWriter,
  parameters: {
    layout: 'centered',
  },
  args: {
    msPerChar: 300,
    noEffect: false,
    children:
      "Some lorem ipsum or similar would be ideal... but right now I'm too lazy to search for some.",
  },
  decorators: [withGlobalStyles],
} as ComponentMeta<typeof TextWriter>;

const Template: ComponentStory<typeof TextWriter> = (args) => (
  <>
    <Text>
      https://www.loremipsums.nl/lorem-ipsum-origineel/samuel-l-jackson-ipsum/
    </Text>
    <TextWriter {...args} />
    <Text>That shouldn't move</Text>
  </>
);

export const Default = Template.bind({});
Default.args = {
  msPerChar: 200,
};

export const NoEfeect = Template.bind({});
NoEfeect.args = {
  noEffect: true,
};
