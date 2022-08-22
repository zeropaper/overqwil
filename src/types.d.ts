import type { MantineTheme, CSSObject } from '.';

export type ComponentStylesOverride<Key extends string, Params = void> = (
  theme: MantineTheme,
  params?: Params,
  createRef?: (refName: string) => string
) => Partial<Record<Key, CSSObject>>;

export type CreateStylesFunction<Key extends string, Params = void> =
  | ((
      theme: MantineTheme,
      params: Params,
      createRef: (refName: string) => string
    ) => Record<Key, CSSObject>)
  | Record<Key, CSSObject>;
