import * as React from 'react';
import { Input as MInput, InputProps as MInputProps } from '@mantine/core';

export type PropTypes = MInputProps & {};

export function Input(props: PropTypes) {
  return <MInput {...props} />;
}

export default Input;
