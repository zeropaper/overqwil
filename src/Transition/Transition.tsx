import * as React from 'react';
import { Title as MTitle, TitleProps as MTitleProps } from '@mantine/core';
import { useStyles } from './Transition.styles';

export interface PropTypes extends MTitleProps {
  noDecoration?: boolean;
}

export function Title({ noDecoration, ...props }: PropTypes) {
  const { classes, cx } = useStyles({ noDecoration });
  return <MTitle {...props} className={cx(classes.root, props.className)} />;
}

export default Title;
