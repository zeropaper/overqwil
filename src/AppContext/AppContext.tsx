import * as React from 'react';
import type { ColorScheme, MantineColor, MantineTheme } from '..';

export interface AppContextInterface {
  colorScheme: ColorScheme;
  setColorScheme: (colorScheme: ColorScheme) => void;
  screenEffect: boolean;
  setScreenEffect: (screenEffect: boolean) => void;
  primaryColor: MantineColor;
  setPrimaryColor: (color: MantineColor) => void;
  primaryShade: MantineTheme['primaryShade'];
  setPrimaryShade: (shade: MantineTheme['primaryShade']) => void;
}

const defaultAppContextValue: AppContextInterface = {
  colorScheme: 'dark',
  setColorScheme: () => {},
  screenEffect: false,
  setScreenEffect: () => {},
  primaryColor: 'indigo',
  setPrimaryColor: () => {},
  primaryShade: 6,
  setPrimaryShade: () => {},
};

const AppContext = React.createContext(defaultAppContextValue);

function AppContextProvider({ children }: { children: React.ReactNode }) {
  const [colorScheme, setColorScheme] = React.useState<ColorScheme>('dark');
  const [screenEffect, setScreenEffect] = React.useState(false);
  const [primaryColor, setPrimaryColor] =
    React.useState<MantineColor>('indigo');
  const [primaryShade, setPrimaryShade] =
    React.useState<MantineTheme['primaryShade']>(6);
  const value = React.useMemo(
    () => ({
      colorScheme,
      setColorScheme,
      screenEffect,
      setScreenEffect,
      primaryColor,
      setPrimaryColor,
      primaryShade,
      setPrimaryShade,
    }),
    [colorScheme, screenEffect, primaryColor, primaryShade]
  );
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

const useAppContext = () => React.useContext(AppContext);

export { AppContextProvider, useAppContext };
