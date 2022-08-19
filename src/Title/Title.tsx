import * as React from 'react';
import {
  keyframes,
  Title as MTitle,
  TitleProps as MTitleProps,
} from '@mantine/core';

export interface PropTypes extends MTitleProps {
  noDecoration?: boolean;
}

export function Title({ noDecoration, ...props }: PropTypes) {
  return (
    <MTitle
      {...props}
      sx={({ spacing, colors, fn, other, colorScheme }) => {
        if (noDecoration) return {};
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
        };
      }}
    />
  );
}

export default Title;
