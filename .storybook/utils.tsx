import * as React from 'react';

import { OverqwilProvider, MantineSize, DefaultMantineColor } from '../index';
import Global from '../src/Global/Global';

export const withOverqwilProvider = (storyFn: () => React.ReactNode) => {
  return <OverqwilProvider withCSSVariables>{storyFn()}</OverqwilProvider>;
};

export const withGlobalStyles = (storyFn: () => React.ReactNode) => {
  return (
    <OverqwilProvider withCSSVariables>
      <Global noScreenEffect />
      {storyFn()}
    </OverqwilProvider>
  );
};

export const spacings: MantineSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];

export const colorNames: DefaultMantineColor[] = [
  'dark',
  'gray',
  'red',
  'pink',
  'grape',
  'violet',
  'indigo',
  'blue',
  'cyan',
  'green',
  'lime',
  'yellow',
  'orange',
  'teal',
];

export const shadeIndexes: [
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number
] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
