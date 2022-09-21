import * as React from 'react';
import { IconSettings } from '@tabler/icons';
import type { MantineTheme } from '..';
import {
  useMantineTheme,
  ColorSwatch,
  ActionIcon,
  Modal,
  Box,
  Text,
  Slider,
  Switch,
  Group,
} from '..';
import { useAppContext } from '../src/AppContext/AppContext';

export function AppControls() {
  const {
    colorScheme,
    setColorScheme,
    screenEffect,
    setScreenEffect,
    setPrimaryColor,
    primaryShade,
    setPrimaryShade,
  } = useAppContext();
  const [open, setOpen] = React.useState(false);
  const theme = useMantineTheme();
  const swatches = Object.keys(theme.colors).map((color) => (
    <ColorSwatch
      key={color}
      title={color}
      sx={
        color === theme.primaryColor ? { border: '2px solid currentColor' } : {}
      }
      size={theme.spacing.lg}
      onClick={() => setPrimaryColor(color)}
      color={theme.fn.themeColor(
        color,
        theme.fn.primaryShade(
          typeof primaryShade[colorScheme] === 'number'
            ? primaryShade[colorScheme]
            : primaryShade
        )
      )}
    />
  ));
  return (
    <>
      <ActionIcon
        title="Settings"
        className="end"
        onClick={() => setOpen(true)}
      >
        <IconSettings />
      </ActionIcon>

      <Modal
        opened={open}
        onClose={() => setOpen(false)}
        overlayColor={
          colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]
        }
        overlayOpacity={0.25}
        overlayBlur={3}
      >
        <Group mb="md" position="apart">
          <Switch
            label="Screen Effect"
            checked={screenEffect}
            onChange={() => setScreenEffect(!screenEffect)}
          />

          <Switch
            label="Dark Mode"
            checked={colorScheme === 'dark'}
            onChange={() =>
              setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')
            }
          />
        </Group>

        <Box mb="md">
          <Text component="label">Primary Color</Text>
          <Group position="center" my="sm" spacing="xs" noWrap>
            {swatches}
          </Group>
        </Box>

        <Slider
          sx={{ width: '100%' }}
          label="Primary Shade"
          value={theme.fn.primaryShade()}
          onChange={(num: number) =>
            setPrimaryShade(num as MantineTheme['primaryShade'])
          }
          min={0}
          max={9}
        />
      </Modal>
    </>
  );
}

export default AppControls;
