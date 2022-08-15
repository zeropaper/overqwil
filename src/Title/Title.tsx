import { Title as MTitle, TitleProps as MTitleProps } from '@mantine/core';

export interface PropTypes extends MTitleProps {
  noDecoration?: boolean;
}

export function Title({ noDecoration, ...props }: PropTypes) {
  return (
    <MTitle
      {...props}
      sx={({ spacing, colors, fn, other, colorScheme }) =>
        noDecoration
          ? {}
          : {
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
              },
              '&::after': {
                left: `calc(1ch + ${spacing.xs}px)`,
                backgroundColor: other.effectColor(colors, colorScheme),
                zIndex: -2,
                height: spacing.xs * 0.25,
                bottom: spacing.xs * 0.25,
              },
            }
      }
    />
  );
}

export default Title;
