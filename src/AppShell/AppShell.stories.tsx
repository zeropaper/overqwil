import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { withGlobalStyles } from '../../.storybook/utils';
import { Title } from '../..';

import AppShell from './AppShell';

export default {
  title: 'Overqwil/AppShell',
  component: AppShell,
  decorators: [withGlobalStyles],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
} as ComponentMeta<typeof AppShell>;

const FullTemplate: ComponentStory<typeof AppShell> = (args) => {
  const headerContent = <Title>Overqwil</Title>;
  return <AppShell {...args} header={headerContent} />;
};
export const Full = FullTemplate.bind({});
Full.args = {
  children: 'AppShell',
};

const EmptyTemplate: ComponentStory<typeof AppShell> = (args) => (
  <AppShell {...args} />
);
export const Empty = EmptyTemplate.bind({});
Empty.args = {
  children: 'AppShell',
};
