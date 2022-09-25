/* eslint-disable spaced-comment, import/no-unresolved, import/no-extraneous-dependencies */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import * as Overqwil from '.';

import { AppContextProvider } from './src/AppContext/AppContext';
import withDemo from './demos/withDemo';

import { demos } from './demos/index';
import { Layout } from './demos/Layout';

const { Box, Text, TextWriter, Title } = Overqwil;

function Intro() {
  return (
    <Box
      sx={{
        maxWidth: 800,
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <Title pb="xl" mb="lg">
        Overqwil UI
      </Title>

      <TextWriter size="lg" mb="lg">
        I was browsing the Internet when I saw a truly amazing futuristic button
        design and decided to take it to the next level.
      </TextWriter>

      <Text size="lg">
        This project is aimed at providing a futuristic theming system based on{' '}
        <a href="https://mantine.dev">Mantine UI</a> components for React.
      </Text>

      <Text size="lg">
        It is also aimed as an example on how to customize a UI system like
        Mantine UI or Material UI (since they are similar) with a company
        branding.
      </Text>
    </Box>
  );
}

function WithApp({
  component: Component,
  ...props
}: {
  component: React.ComponentType;
}) {
  return (
    <AppContextProvider>
      <Layout>
        <Component {...props} />
      </Layout>
    </AppContextProvider>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <WithApp component={Intro} />,
  },
  ...Object.entries(demos).map(([name, Component]) => ({
    path: `/${name.toLowerCase()}`,
    element: <WithApp component={withDemo(name, Component)} />,
  })),
]);

function App() {
  return <RouterProvider router={router} />;
}

ReactDOM.render(<App />, document.getElementById('root'));
