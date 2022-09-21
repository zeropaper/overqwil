import type { ButtonStylesParams, MantineTheme, CSSObject } from '../..';

import type { ThemeComponentStyles } from '../OverqwilProvider/Overqwil.components';

import { z } from '../OverqwilProvider/clip-paths';

function buttonClipPathVariantStyles(
  theme: MantineTheme,
  params: ButtonStylesParams
): CSSObject {
  const { colors: tColors, colorScheme, white } = theme;
  const colors = theme.fn.variant(params);
  // TODO: use fn.radius(params.radius) instead?
  const radius = theme.fn.size({
    size: typeof params.radius === 'undefined' ? params.size : params.radius,
    sizes: theme.radius,
  });
  const size = theme.fn.size({
    size: params.size,
    sizes: theme.radius,
  });

  if (!radius) return {};

  const clipPath = `polygon(
  0 0,
  calc(100% - ${radius}px) 0,
  100% ${radius}px,
  100% 0,
  100% 100%,
  calc(100% - ${size * 2}px) 100%,
  calc(100% - ${size * 2}px) calc(100% - ${size * 0.9}px),
  calc(100% - ${size * 5}px) calc(100% - ${size * 0.9}px),
  calc(100% - ${size * 5}px) 100%,
  ${radius}px 100%,
  0 calc(100% - ${radius}px),
  0 100%
)`;

  const pseudos: CSSObject = {
    content: '""',
    position: 'absolute',
    display: 'block',
    clipPath,
  };

  switch (params.variant) {
    case 'filled':
      return {
        '&::before': {
          ...pseudos,
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          backgroundColor: colors.background,
          zIndex: z.before,
        },
        '@media (hover: hover)': {
          '&:hover::before': {
            backgroundColor: colors.hover,
          },
        },
      };
    case 'outline':
      return {
        '&::before,&::after': pseudos,
        '&::before': {
          inset: 1,
          background: colorScheme === 'dark' ? tColors.dark[6] : white,
          zIndex: z.before,
        },
        '@media (hover: hover)': {
          '&:hover::before': {
            backgroundColor: colors.hover,
          },
        },
        '&::after': {
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          background: colors.border,
          zIndex: z.after,
        },
      };
    case 'subtle':
      return {
        '&::before': {
          ...pseudos,
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          zIndex: z.before,
        },
        '@media (hover: hover)': {
          '&:hover::before': {
            backgroundColor: colors.hover,
          },
        },
      };
    default:
      return {
        '&::before,&::after': pseudos,
        '&::before': {
          inset: 1,
          background: colorScheme === 'dark' ? tColors.dark[6] : white,
          zIndex: z.before,
        },
        '@media (hover: hover)': {
          '&:hover::before': {
            backgroundColor: colors.hover,
          },
        },
        '&::after': {
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          background: colors.border,
          zIndex: z.after,
        },
      };
  }
}

export const styles: ThemeComponentStyles = (
  theme,
  params: ButtonStylesParams
) => ({
  root: {
    '&,&:focus,&:focus-within,&:hover,&:active': {
      borderRadius: 0,
      border: 'none',
      background: 'none',
      '&:hover': theme.fn.hover({
        background: 'none',
      }),
    },
    background: 'pink',
    borderRadius: 0,
    overflow: 'visible',
    position: 'relative',

    ...buttonClipPathVariantStyles(theme, params),
  },
  inner: {
    position: 'relative',
    zIndex: z.el,
  },
});

export const defaultProps = {};
