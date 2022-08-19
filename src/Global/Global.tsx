import * as React from 'react';
import { Global as MGlobal, keyframes } from '@mantine/core';

import '@fontsource/titillium-web';

export interface PropTypes {
  noScreenEffect?: boolean;
}

export default function Global({ noScreenEffect }: PropTypes) {
  const screen = keyframes({
    from: {
      backgroundPositionY: '34vh',
    },
    to: {
      backgroundPositionY: '134vh',
    },
  });
  return (
    <MGlobal
      styles={({ fontFamily, colors, primaryColor, fn }) => {
        const primary = fn.primaryColor();
        const dimmedPrimary = fn.rgba(colors[primaryColor][9], 0.1);
        return [
          {
            '*, *::before, *::after': { boxSizing: 'border-box' },
            body: {
              fontFamily,
            },
          },
          noScreenEffect
            ? {}
            : {
                'body::before,body::after': {
                  content: '""',
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  pointerEvents: 'none',
                },
                'body::before': {
                  zIndex: 99999,
                  background: `repeating-linear-gradient(0deg, ${dimmedPrimary}, transparent 3px), radial-gradient(transparent, ${dimmedPrimary})`,
                  backdropFilter: 'blur(0.75px)',
                },
                'body::after': {
                  zIndex: 99998,
                  background: `linear-gradient(0deg, ${fn.rgba(
                    primary,
                    0.05
                  )}, transparent 25px, transparent 66vh)`,
                  animation: `${screen} 30s infinite linear`,
                },
              },
        ];
      }}
    />
  );
}
