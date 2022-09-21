import type { ThemeComponentStyles } from '../OverqwilProvider/Overqwil.components';

import type { InputStylesParams, MantineTheme, CSSObject } from '../..';

import { z } from '../OverqwilProvider/clip-paths';

function inputClipPathVariantStyles(
  theme: MantineTheme,
  params: InputStylesParams
): CSSObject {
  const { colors, colorScheme, white } = theme;
  const size = theme.fn.radius(params.radius);

  if (!size) return {};

  const clipPath = `polygon(
  0 0,
  calc(100% - ${size}px) 0,
  calc(100% - ${size}px) ${size}px,
  100% ${size}px,
  100% 0,
  100% 100%,
  ${size}px 100%,
  0 calc(100% - ${size}px),
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
          inset: 1,
          background: colorScheme === 'dark' ? colors.dark[5] : colors.gray[1],
          zIndex: z.before,
        },
      };
    default:
      return {
        '&::before,&::after': pseudos,
        '&::before': {
          inset: 1,
          background: colorScheme === 'dark' ? colors.dark[6] : white,
          zIndex: z.before,
        },
        '&::after': {
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          background: colorScheme === 'dark' ? colors.dark[4] : colors.gray[4],
          zIndex: z.after,
        },
      };
  }
}

// eslint-disable-next-line import/prefer-default-export
export const styles: ThemeComponentStyles = (
  theme,
  params: InputStylesParams
) => ({
  input: {
    '&,&:focus,&:focus-within,&:hover,&:active': {
      borderRadius: 0,
      border: 'none',
      background: 'transparent',
    },
    '&:hover': theme.fn.hover({
      background: 'none',
    }),
    position: 'relative',
    zIndex: z.el,
  },
  wrapper: {
    overflow: 'visible',
    position: 'relative',
    zIndex: z.el,

    ...inputClipPathVariantStyles(theme, params),
  },
});
