/* eslint-disable no-underscore-dangle */
import {
  Input as OriginalInput,
  InputProps,
  createPolymorphicComponent,
} from '@mantine/core';

import withBackgroundImage from '../OverqwilProvider/withBackgroundImage';

const _Input = withBackgroundImage<InputProps, HTMLInputElement>(
  OriginalInput,
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
    return {
      base,
      hover: {
        ...base,
        background: colors.hover,
      },
      active: {
        ...base,
        background: colors.hover,
      },
      disabled: {
        ...base,
      },
      focus: {
        ...base,
        background: colors.hover,
      },
    };
  }
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
