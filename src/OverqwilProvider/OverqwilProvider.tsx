import * as React from 'react';
import {
  MantineProvider,
  MantineProviderProps,
  createEmotionCache,
  MantineColor,
  MantineTheme,
  MantineThemeColors,
  MantineThemeOverride,
  ColorScheme,
} from '@mantine/core';

declare module '@mantine/core' {
  export interface MantineThemeOther {
    accentColor: MantineColor;
    accentShade: MantineTheme['primaryShade'];
    effectColor: (
      colors: MantineThemeColors,
      colorScheme?: ColorScheme
    ) => string;
  }
}

const emotionCache = createEmotionCache({ key: 'overqwil' });

export type PropTypes = Omit<
  MantineProviderProps,
  | 'theme'
  // | 'withNormalizeCSS'
  // | 'withGlobalStyles'
  // | 'withCSSVariables'
  | 'emotionCache'
>;

export function createTheme(): MantineThemeOverride {
  const accentColor: MantineColor = 'cyan';
  const accentShade: MantineTheme['primaryShade'] = { light: 2, dark: 2 };
  return {
    fontFamily: '"Titillium Web"',
    fontFamilyMonospace: 'Consolas, "Courier New", Courier, monospace',
    headings: {
      fontFamily: '"Titillium Web"',
      fontWeight: 'bold',
    },
    primaryColor: 'indigo',
    primaryShade: 6,
    other: {
      accentColor,
      accentShade,
      effectColor: (colors, colorScheme) =>
        colors[accentColor][
        typeof accentShade === 'number'
          ? accentShade
          : accentShade[colorScheme || 'light']
        ],
    },
  };
}

export function OverqwilProvider(props: PropTypes) {
  return (
    <MantineProvider
      {...props}
      theme={createTheme()}
      emotionCache={emotionCache}
      withNormalizeCSS
    // withGlobalStyles
    // withCSSVariables
    />
  );
}

export default OverqwilProvider;
