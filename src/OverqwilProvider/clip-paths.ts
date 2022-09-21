import { CSSObject, MantineTheme } from '@mantine/core';

type Params = { [k: string]: any };

export const z = {
  el: 2,
  before: 1,
  after: 0,
};

export type ClipPathNames = 'default' | 'label' | 'inputWrapper';

export type ClipPaths = {
  [k in ClipPathNames]: (theme: MantineTheme, params: Params) => string;
};

export interface OverqwilClipPath {
  <N extends ClipPathNames>(
    name: N,
    theme: MantineTheme,
    params: Params
  ): string;
}

export interface OverqwilClipPathStyles {
  <N extends ClipPathNames>(
    theme: MantineTheme,
    params: Params & {
      clipPathName: N;
    }
  ): CSSObject & {
    '&::before,&::after': CSSObject;
    '&::before': CSSObject;
    '&::after': CSSObject;
  };
}

export const pseudos: CSSObject = {
  content: '""',
  position: 'absolute',
  display: 'block',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
};

export const before: CSSObject = {
  zIndex: -1,
};

export const after: CSSObject = {
  zIndex: -2,
};

export const rootBase: CSSObject = {
  '&,&:hover,&:focus': {
    border: 'none',
    borderRadius: 0,
    background: 'none',
  },

  position: 'relative',
  zIndex: 0,
};

export const defaultClipPaths: ClipPaths = {
  default: () => `polygon(
    0 0,
    50% 0,
    calc(100% - 12px) 0,
    100% 12px,
    100% calc(100% - 12px),
    calc(100% - 12px) calc(100% - 12px),
    calc(100% - 12px) 100%,
    12px 100%,
    0 calc(100% - 12px)
  )`,
  label: () => `polygon(
    0 0,
    calc(100% - 12px) 0,
    100% 12px,
    100% 100%,
    0% 100%
  )`,
  inputWrapper: () => `polygon(
    12px 0,
    100% 0,
    100% 100%,
    calc(100% - 12px) 100%,
    calc(100% - 12px) calc(100% - 12px),
    calc(100% - (12px * 4)) calc(100% - 12px),
    calc(100% - (12px * 4)) 100%,
    12px 100%,
    0 calc(100% - 12px),
    0 12px,
    12px 12px
  )`,
};
