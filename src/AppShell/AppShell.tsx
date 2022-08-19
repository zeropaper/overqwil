import * as React from 'react';
import {
  AppShell as MAppShell,
  AppShellProps as MAppShellProps,
} from '@mantine/core';

import Header from './Header';

export { Header };

export interface PropTypes extends MAppShellProps {
  onToggleScreenEffect?: () => void;
}

export function AppShell({ onToggleScreenEffect, ...props }: PropTypes) {
  return (
    <MAppShell
      {...props}
      header={
        props.header ? (
          <Header onToggleScreenEffect={onToggleScreenEffect}>
            {props.header}
          </Header>
        ) : undefined
      }
    />
  );
}

export default AppShell;
