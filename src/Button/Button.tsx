import { Button as MButton, ButtonProps as MProps } from '@mantine/core';

export type PropTypes = Omit<MProps, 'unstyled'>;

export default function Button(props: PropTypes) {
  return <MButton {...props} unstyled />;
}
