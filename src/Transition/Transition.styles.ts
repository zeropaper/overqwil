import type { CreateStylesFunction } from '../types';

import { keyframes, createStyles } from '..';

export type TransitionStyleNames = 'root';

export const transitionStyles: CreateStylesFunction<
  TransitionStyleNames,
  { noDecoration?: boolean }
> = (
  { spacing, colors, fn, other, colorScheme },
  { noDecoration }: { noDecoration?: boolean }
) => {
  if (noDecoration) return { root: {} };
  const glitch = keyframes({
    '0%': {
      opacity: '0',
    },
    '49%': {
      opacity: '0',
    },
    '50%': {
      opacity: '1',
    },
    '51%': {
      width: '12px',
    },
    '54%': {
      width: '45%',
      marginLeft: '10%',
    },
    '64%': {
      width: '45%',
      marginLeft: '10%',
    },
    '65%': {
      opacity: '1',
    },
    '87%': {
      opacity: '1',
    },
    '88%': {
      opacity: '0',
    },
  });
  return {
    root: {
      // tweaking maxWidth (instead of margin) to ensure
      // that the "margin props" from Mantine are kept working
      // marginRight: `calc(1ch + ${spacing.xs}px)`,
      maxWidth: `calc(100% - (1ch + ${spacing.xs}px))`,
      position: 'relative',
      '&::before,&::after': {
        position: 'absolute',
        content: '""',
        bottom: 0,
        width: '100%',
      },
      '&::before': {
        zIndex: -1,
        left: '1ch',
        backgroundColor: fn.primaryColor(),
        height: spacing.xs * 0.5,
        animation: `${glitch} ${Math.random() * 10}s infinite alternate`,
      },
      '&::after': {
        left: `calc(1ch + ${spacing.xs}px)`,
        backgroundColor: other.effectColor(colors, colorScheme),
        zIndex: -2,
        height: spacing.xs * 0.25,
        bottom: spacing.xs * 0.25,
      },
    },
  };
};

export const useStyles = createStyles(transitionStyles);

export default transitionStyles;
