import { TextInputStylesNames, InputWrapperStylesNames } from '@mantine/core';
import type { ComponentStylesOverride } from '../types';

export const textInputStyles: ComponentStylesOverride<TextInputStylesNames> = ({
  spacing,
}) => ({
  root: {
    backgroundColor: 'tomato',
  },
  label: {
    paddingLeft: spacing.sm,
    marginBottom: 0,
    letterSpacing: '2px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

export const textInputWrapperStyles: ComponentStylesOverride<InputWrapperStylesNames> =
  () => ({
    // TODO: has no effect.. why?
    // root: {
    //   backgroundColor: 'yellow',
    // },
  });

export default textInputStyles;
