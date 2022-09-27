/* eslint-disable no-underscore-dangle */
/* eslint-disable spaced-comment, import/no-unresolved, import/no-extraneous-dependencies */
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  useRouteError,
} from 'react-router-dom';
import { Prism } from '@mantine/prism';

import * as Overqwil from '.';

import { AppContextProvider } from './src/AppContext/AppContext';
import withDemo from './demos/withDemo';

import { demos } from './demos/index';
import { Layout } from './demos/Layout';

const {
  Box,
  Text,
  // TextWriter,
  Title,
  Anchor,
} = Overqwil;

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
        A futuristic take on the Mantine UI library.
      </Title>

      {/*
      <TextWriter size="lg" mb="lg">
        I was browsing the Internet when I saw a truly amazing futuristic button
        design and decided to take it to the next level.
      </TextWriter>
      */}

      <Text size="lg">
        This project is aimed at providing a futuristic theming system based on{' '}
        <Anchor href="https://mantine.dev">Mantine UI</Anchor> components for
        React.
      </Text>

      <Text size="lg">
        It is also aimed as an example on how to customize a UI system like
        Mantine UI or <Anchor href="https://mui.com/">Material UI</Anchor>{' '}
        (since they are similar) with a company branding.
        <br />
        The project is still in its early stages, but you can already see it in
        action.
      </Text>

      <Title order={2} mt="xl" mb="lg">
        Usage
      </Title>
      <Text size="lg">
        Overqwil is aimed at being used the same way as Mantine UI, but with a
        different theme.
      </Text>

      <Title order={3} mt="xl" mb="lg">
        Add the provider
      </Title>
      <Prism language="tsx">
        {`import { OverqwilProvider } from '@zeropaper/overqwil';

function App() {
  return (
    <OverqwilProvider theme={/* optional customization */}>
      {/* Your app content */}
    </OverqwilProvider>
  );
}`}
      </Prism>

      <Title order={3} mt="xl" mb="lg">
        Use the components
      </Title>
      <Prism language="tsx">
        {`import { Button } from '@zeropaper/overqwil';

function SomeComponent() {
  return <Button>Click me</Button>;
}`}
      </Prism>

      <Title order={2} mt="xl" mb="lg">
        Technique used
      </Title>
      <Text size="lg">
        In order to customize the theme is a combination of SVG images
        generation, style overrides and CSS variables.
      </Text>
    </Box>
  );
}

function WithApp({
  component: Component,
  ...props
}: {
  component: React.FunctionComponent<any>;
}) {
  return (
    <AppContextProvider>
      <Layout>
        <Component {...props} />
      </Layout>
    </AppContextProvider>
  );
}

function ErrorBoundary() {
  const error = useRouteError();
  // eslint-disable-next-line no-console
  console.error(error);
  return <div>Dang!</div>;
}

const errorElement = <WithApp component={ErrorBoundary} />;

const router = createBrowserRouter([
  {
    path: '/',
    element: <WithApp component={Intro} />,
    errorElement,
  },
  ...Object.entries(demos).map(([name, Component]) => ({
    path: `/${name.toLowerCase()}`,
    element: <WithApp component={withDemo(name, Component as any)} />,
    errorElement,
  })),
]);

function App() {
  return <RouterProvider router={router} />;
}

declare global {
  interface Window {
    _appContainer: any;
  }
}

function getRoot() {
  if (typeof window !== 'undefined' && window._appContainer) {
    return window._appContainer;
  }
  window._appContainer = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  return window._appContainer;
}

getRoot().render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
