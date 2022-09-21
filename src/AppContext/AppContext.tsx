import { useLocalStorage } from '@mantine/hooks';
import * as React from 'react';
import type { ColorScheme, MantineColor, MantineTheme } from '..';

interface AppContextValues {
  colorScheme: ColorScheme;
  screenEffect: boolean;
  primaryColor: MantineColor;
  primaryShade: MantineTheme['primaryShade'];
}

export interface AppContextInterface extends AppContextValues {
  setColorScheme: (colorScheme: ColorScheme) => void;
  setScreenEffect: (screenEffect: boolean) => void;
  setPrimaryColor: (color: MantineColor) => void;
  setPrimaryShade: (shade: MantineTheme['primaryShade']) => void;
}

const defaultAppContextValue: AppContextInterface = {
  colorScheme: 'dark',
  screenEffect: false,
  primaryColor: 'indigo',
  primaryShade: 6,
  setColorScheme: () => {},
  setScreenEffect: () => {},
  setPrimaryColor: () => {},
  setPrimaryShade: () => {},
};

const AppContext = React.createContext(defaultAppContextValue);

function AppContextProvider({ children }: { children: React.ReactNode }) {
  const [values, setValues] = useLocalStorage<AppContextValues>({
    key: 'app-context',
    defaultValue: {
      colorScheme: defaultAppContextValue.colorScheme,
      screenEffect: defaultAppContextValue.screenEffect,
      primaryColor: defaultAppContextValue.primaryColor,
      primaryShade: defaultAppContextValue.primaryShade,
    },
  });
  const value: typeof defaultAppContextValue = React.useMemo(
    () => ({
      ...values,
      setColorScheme: (val: AppContextValues['colorScheme']) =>
        setValues((current) => ({
          ...current,
          colorScheme: val,
        })),
      setScreenEffect: (val: AppContextValues['screenEffect']) =>
        setValues((current) => ({
          ...current,
          screenEffect: val,
        })),
      setPrimaryColor: (val: AppContextValues['primaryColor']) =>
        setValues((current) => ({
          ...current,
          primaryColor: val,
        })),
      setPrimaryShade: (val: AppContextValues['primaryShade']) =>
        setValues((current) => ({
          ...current,
          primaryShade: val,
        })),
    }),
    [values]
  );
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

const useAppContext = () => React.useContext(AppContext);

export { AppContextProvider, useAppContext };
