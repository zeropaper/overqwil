import * as React from 'react';
import {
  TextInput as MTextInput,
  TextInputProps as MTextInputProps,
} from '@mantine/core';

export type PropTypes = MTextInputProps & {};

export function TextInput(props: PropTypes) {
  return <MTextInput {...props} />;
}

export default TextInput;
