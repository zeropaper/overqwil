import * as React from 'react';
import {
  useMantineTheme,
  MantineNumberSize,
  MantineColor,
  MantineTheme,
} from '@mantine/core';
import { useMergedRef, useElementSize } from '@mantine/hooks';

type RawVariant = Parameters<MantineTheme['fn']['variant']>[0]['variant'];
type Variant = RawVariant | 'link' | 'unstyled';

export type BaseParams = {
  variant?: Variant;
  color?: MantineColor;
  size?: MantineNumberSize;
  radius?: MantineNumberSize;
  style?: React.CSSProperties;
};

export type ColorSet = {
  background: React.CSSProperties['backgroundColor'];
  color: React.CSSProperties['color'];
  border: React.CSSProperties['borderColor'];
};

export type ResolveColor = (
  theme: MantineTheme,
  params: BaseParams
) => {
  base: ColorSet;
  hover: ColorSet;
  active: ColorSet;
  focus: ColorSet;
  disabled: ColorSet;
};

export function getSvgDeco({
  width,
  height,
  radius,
  strokeWidth = 1,
  stroke = 'lime',
  fill = 'none',
}: {
  width: number;
  height: number;
  radius: number;
  strokeWidth?: number;
  stroke?: string;
  fill?: string;
}) {
  const shift = Math.round(strokeWidth * 0.5);

  const path = `
  M ${shift},${shift}
  L ${width - shift - radius * 6},${shift}
  L ${width - shift - radius * 5},${radius + shift}
  L ${width - shift - radius * 2},${radius + shift}
  L ${width - shift - radius * 2},${shift}
  L ${width - shift},${shift}
  L ${width - shift},${height - shift}
  L ${radius + shift},${height - shift}
  L ${shift},${height - (radius + shift)}
  Z
  `;

  return `data:image/svg+xml,${encodeURIComponent(`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="${width}"
  height="${height}"
  view-box="0 0 ${width} ${height}"
>
  <path
    d="${path}"
    stroke="${stroke}"
    fill="${fill}"
    stroke-width="${strokeWidth}"
  />
</svg>`)}`;
}

export type BackgroundImages = {
  '--background-image'?: string;
  '--background-image-active'?: string;
  '--background-image-focus'?: string;
  '--background-image-hover'?: string;
};

export function useBackgroundImage<
  R extends HTMLElement,
  Params extends BaseParams
>(
  params: Params,
  resolveColors: ResolveColor
): [BackgroundImages, React.ForwardedRef<R>] {
  const theme = useMantineTheme();

  const colors = React.useMemo(
    () => resolveColors(theme, params),
    [theme, params]
  );

  const localRef = React.createRef<R>();

  const size = theme.fn.size({
    size: params.size || 'md',
    sizes: theme.spacing,
  });

  const radius = theme.fn.size({
    size: params.radius || params.size || 'md',
    sizes: theme.radius,
  });

  const { ref: resizeRef, width, height } = useElementSize<R>();

  const mergedRef = useMergedRef<R | null>(localRef, resizeRef);

  const [values, setValues] = React.useState<BackgroundImages>({});
  React.useEffect(() => {
    if (localRef.current) {
      const base = {
        width: localRef.current
          ? Math.floor(localRef.current.clientWidth || 1)
          : width,
        height: localRef.current
          ? Math.floor(localRef.current.clientHeight || 1)
          : height,
        size,
        radius,
      };
      setValues(() => ({
        '--background-image': `url("${getSvgDeco({
          ...base,
          strokeWidth:
            colors.base.border && colors.base.border !== 'transparent' ? 1 : 0,
          stroke: colors.base.border,
          fill: colors.base.background,
        })}")`,
        '--background-image-active': `url("${getSvgDeco({
          ...base,
          strokeWidth:
            colors.active.border && colors.active.border !== 'transparent'
              ? 1
              : 0,
          stroke: colors.active.border,
          fill: colors.active.background,
        })}")`,
        '--background-image-focus': `url("${getSvgDeco({
          ...base,
          strokeWidth:
            colors.focus.border && colors.focus.border !== 'transparent'
              ? 1
              : 0,
          stroke: colors.focus.border,
          fill: colors.focus.background,
        })}")`,
        '--background-image-hover': `url("${getSvgDeco({
          ...base,
          strokeWidth:
            colors.hover.border && colors.hover.border !== 'transparent'
              ? 1
              : 0,
          stroke: colors.hover.border,
          fill: colors.hover.background,
        })}")`,
      }));
    }
  }, [colors, localRef.current]);
  // }, [colors, localRef.current, size, radius, width, height]);

  return [values, mergedRef];
}

export default useBackgroundImage;
