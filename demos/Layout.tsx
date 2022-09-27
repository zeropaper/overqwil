import * as React from 'react';

import { useAppContext } from '../src/AppContext/AppContext';

import AppHeader from './Header';
import { AppControls } from './AppControls';
import { DemosNav } from './DemosNav';
import {
  useMantineTheme,
  MediaQuery,
  Burger,
  Title,
  Navbar,
  AppShell,
  Global,
  OverqwilProvider,
} from '..';

export function Layout({ children }: { children: React.ReactElement }) {
  const { colorScheme, screenEffect, primaryColor, primaryShade } =
    useAppContext();
  const theme = useMantineTheme();
  const [opened, setOpened] = React.useState(false);
  const header = (
    <AppHeader>
      <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
        <Burger
          opened={opened}
          onClick={() => setOpened((o) => !o)}
          size="sm"
          color={theme.colors.gray[6]}
          mr="xl"
        />
      </MediaQuery>

      <Title>Overqwil</Title>

      <AppControls />
    </AppHeader>
  );

  const navbar = (
    <Navbar hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
      <Navbar.Section>
        <DemosNav />
      </Navbar.Section>
    </Navbar>
  );

  return (
    <OverqwilProvider
      theme={{
        colorScheme,
        primaryColor,
        primaryShade,
      }}
      withNormalizeCSS
      withGlobalStyles
    >
      <Global noScreenEffect={!screenEffect} />

      <AppShell header={header} navbarOffsetBreakpoint="sm" navbar={navbar}>
        {children}
      </AppShell>
    </OverqwilProvider>
  );
}

export default Layout;
