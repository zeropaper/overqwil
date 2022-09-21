import * as React from 'react';
import type { Sx } from '..';
import { Box, MantineProvider, Text, useMantineTheme } from '..';

const withPattern: Sx = ({ fn, colors, colorScheme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: `repeating-conic-gradient(${fn.rgba(
    colors.gray[colorScheme === 'dark' ? 4 : 8],
    0.07
  )} 0% 25%, transparent 0% 50%) 50% / 12px 12px`,
});

export type PropTypes = React.PropsWithChildren<{
  noBackground?: boolean;
}>;

export function Comparator({ noBackground, children }: PropTypes) {
  const { primaryColor, primaryShade, colorScheme, fn, spacing } =
    useMantineTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        gap: fn.size({
          size: 'md',
          sizes: spacing,
        }),
        justifyContent: 'space-around',
        [fn.smallerThan('md')]: {
          flexDirection: 'column',
        },
        '& > *': {
          flexGrow: 1,
        },
      }}
    >
      <Box>
        <Text mb="lg">Overqwil</Text>
        <Box p="lg" m="lg" sx={noBackground ? {} : withPattern}>
          {children}
        </Box>
      </Box>

      <Box>
        <Text mb="lg">Original Mantine</Text>
        <Box p="lg" m="lg" sx={noBackground ? {} : withPattern}>
          <MantineProvider
            theme={{
              primaryColor,
              primaryShade,
              colorScheme,
            }}
          >
            {children}
          </MantineProvider>
        </Box>
      </Box>
    </Box>
  );
}

export default Comparator;
