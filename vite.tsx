import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
  AppShell,
  OverqwilProvider,
  Global,
  TypographyStylesProvider,
  Button,
  Title,
} from './index';

function App() {
  return (
    <OverqwilProvider withCSSVariables>
      <>
        <Global />
        <AppShell header={<Title>Overqwil</Title>}>
          <TypographyStylesProvider>Hello World</TypographyStylesProvider>

          <div>
            <Button type="button">Aknowledge</Button>
          </div>
        </AppShell>
      </>
    </OverqwilProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
