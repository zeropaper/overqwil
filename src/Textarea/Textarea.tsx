import * as React from 'react';
import {
  Textarea as MTextarea,
  TextareaProps as MTextareaProps,
} from '@mantine/core';

export type PropTypes = MTextareaProps & {};

export function Textarea(props: PropTypes) {
  return <MTextarea {...props} />;
}

export default Textarea;
