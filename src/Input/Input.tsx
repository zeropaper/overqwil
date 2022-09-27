/* eslint-disable no-underscore-dangle */
import {
  Input as OriginalInput,
  InputProps,
  createPolymorphicComponent,
} from '@mantine/core';

import withBackgroundImage from '../OverqwilProvider/withBackgroundImage';

export const inputBackgroundImage: Parameters<
  typeof withBackgroundImage<InputProps, HTMLInputElement>
>[1] = (theme, params) => {
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
  const border = theme.colors[theme.primaryColor][theme.fn.primaryShade()];

  if (params.variant === 'filled') {
    const filledBase = {
      ...base,
      background:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[5]
          : theme.colors.gray[1],
      border: 'transparent',
    };
    return {
      base: filledBase,
      hover: filledBase,
      active: {
        ...filledBase,
        border,
      },
      disabled: filledBase,
      focus: {
        ...filledBase,
        border,
      },
    };
  }

  return {
    base,
    hover: base,
    active: {
      ...base,
      background: colors.hover,
      border,
    },
    disabled: base,
    focus: {
      ...base,
      background: colors.hover,
      border,
    },
  };
};

const _Input = withBackgroundImage<InputProps, HTMLInputElement>(
  OriginalInput,
  inputBackgroundImage
) as any;

_Input.Wrapper = OriginalInput.Wrapper;
_Input.Label = OriginalInput.Label;
_Input.Description = OriginalInput.Description;
_Input.Error = OriginalInput.Error;

export const Input = createPolymorphicComponent<
  'input',
  InputProps,
  {
    Wrapper: typeof OriginalInput.Wrapper;
    Label: typeof OriginalInput.Label;
    Description: typeof OriginalInput.Description;
    Error: typeof OriginalInput.Error;
  }
>(_Input);

export default Input;
