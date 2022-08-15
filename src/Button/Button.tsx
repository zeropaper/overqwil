import React from 'react';
import { Button as MButton, ButtonProps as MProps } from '@mantine/core';

export interface PropTypes extends Omit<MProps, 'unstyled'> {}

export function Button(props: PropTypes) {
  return <MButton {...props} />;
}

export default Button;
