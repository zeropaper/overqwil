import * as React from 'react';
import {
  AppShell as MAppShell,
  AppShellProps as MAppShellProps,
} from '@mantine/core';

import Header from './Header';

export { Header };

export interface PropTypes extends MAppShellProps {}

export function AppShell(props: PropTypes) {
  return (
    <MAppShell
      {...props}
      header={props.header ? <Header>{props.header}</Header> : undefined}
    />
  );
}

export default AppShell;
