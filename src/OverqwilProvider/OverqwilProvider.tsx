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

import components from './Overqwil.components';

declare module '@mantine/core' {
  export interface OverqwilColorGetter {
    (colors: MantineThemeColors, colorScheme?: ColorScheme): string;
  }

  export interface MantineThemeOther {
    accentColor: MantineColor;
    accentShade: MantineTheme['primaryShade'];
    effectColor: OverqwilColorGetter;
  }
}

const emotionCache = createEmotionCache({ key: 'overqwil' });

export type PropTypes = Omit<MantineProviderProps, 'theme' | 'emotionCache'> & {
  theme: {
    // screenEffect?: boolean;
    colorScheme?: ColorScheme;
    primaryColor?: MantineColor;
    primaryShade?: MantineTheme['primaryShade'];
    accentColor?: MantineColor;
    accentShade?: MantineTheme['primaryShade'];
  };
};

export function createTheme({
  // screenEffect = false,
  colorScheme = 'dark',
  primaryColor = 'indigo',
  primaryShade = 6,
  accentColor = 'lime',
  accentShade = 6,
}: PropTypes['theme']): MantineThemeOverride {
  return {
    fontFamily: '"Titillium Web"',
    fontFamilyMonospace: 'Consolas, "Courier New", Courier, monospace',
    headings: {
      fontFamily: '"Titillium Web"',
      fontWeight: 'bold',
    },
    primaryColor,
    primaryShade,
    colorScheme,
    components,
    other: {
      accentColor,
      accentShade,
      effectColor: (colors, cScheme) =>
        colors[accentColor][
          typeof accentShade === 'number'
            ? accentShade
            : accentShade[cScheme || 'light']
        ],
    },
  };
}

export function OverqwilProvider({ theme: themeProp, ...props }: PropTypes) {
  return (
    <MantineProvider
      {...props}
      theme={createTheme(themeProp)}
      emotionCache={emotionCache}
    />
  );
}

export default OverqwilProvider;
