import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { withGlobalStyles } from '../../.storybook/utils';
import { Text } from '../..';

import { Title } from './Title';

export default {
  title: 'Overqwil/Title',
  component: Title,
  parameters: {
    layout: 'centered',
  },
  args: {
    type: 'button',
    noDecoration: false,
    mb: 'lg',
  },
  argTypes: {
    noDecoration: {
      table: {
        disable: true,
      },
    },
    type: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [withGlobalStyles],
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Change me',
};

const TemplateWithText: ComponentStory<typeof Title> = (args) => (
  <div style={{ width: 'clamp(200px, 80%, 650px)', margin: 'auto' }}>
    <Text>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </Text>
    <Title {...args} />
    <Text>
      It is a long established fact that a reader will be distracted by the
      readable content of a page when looking at its layout. The point of using
      Lorem Ipsum is that it has a more-or-less normal distribution of letters,
      as opposed to using 'Content here, content here', making it look like
      readable English. Many desktop publishing packages and web page editors
      now use Lorem Ipsum as their default model text, and a search for 'lorem
      ipsum' will uncover many web sites still in their infancy. Various
      versions have evolved over the years, sometimes by accident, sometimes on
      purpose (injected humour and the like).
    </Text>
  </div>
);
export const WithText = TemplateWithText.bind({});
WithText.args = {
  children: 'Change me',
};

export const NoDecoration = Template.bind({});
NoDecoration.args = {
  children: 'Change me',
  noDecoration: true,
};
