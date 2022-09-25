import { Button as OriginalButton, ButtonProps } from '@mantine/core';

import withBackgroundImage from '../OverqwilProvider/withBackgroundImage';

const Button = withBackgroundImage<ButtonProps, HTMLButtonElement>(
  OriginalButton<'button'>,
  (theme, params) => {
    const colors = theme.fn.variant({
      variant: params.variant || ('default' as any),
      color: params.color,
      primaryFallback: true,
    });
    const base = {
      color: colors.color,
      background: colors.background,
      border: colors.border,
    };
    const hover = {
      ...base,
      background: colors.hover,
    };
    const active = {
      ...base,
      background: colors.hover,
    };
    const focus = {
      ...base,
      background: colors.hover,
    };
    const disabled = {
      ...base,
      color:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[5],
      background:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[4]
          : theme.colors.gray[2],
      border: 'transparent',
    };

    if (params.variant === 'filled') {
      return {
        base: {
          ...base,
          border: 'transparent',
        },
        hover,
        active,
        disabled,
        focus,
      };
    }
    if (params.variant === 'outline') {
      return {
        base: {
          ...base,
          background: 'transparent',
        },
        hover,
        active,
        disabled,
        focus,
      };
    }
    return {
      base,
      hover,
      active,
      disabled,
      focus,
    };
  }
);

export { Button };

export default Button;
