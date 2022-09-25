import * as React from 'react';
import { useInputProps, TextInputProps } from '@mantine/core';

import { Input } from '../Input/Input';

const defaultProps: Partial<TextInputProps> = {
  type: 'text',
  size: 'sm',
  __staticSelector: 'TextInput',
};

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (props, ref) => {
    const { inputProps, wrapperProps, ...others } = useInputProps(
      'TextInput',
      defaultProps,
      props
    );
    return (
      <Input.Wrapper {...wrapperProps}>
        <Input {...inputProps} {...others} ref={ref} />
      </Input.Wrapper>
    );
  }
);

export default TextInput;
