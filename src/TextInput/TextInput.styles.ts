/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  CSSObject,
  MantineTheme,
  TextInputStylesNames,
  InputWrapperStylesNames,
} from '@mantine/core';
import type { ComponentStylesOverride } from '../styles.util';

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
  (theme) => ({
    // TODO: has no effect.. why?
    // root: {
    //   backgroundColor: 'yellow',
    // },
  });

export default textInputStyles;
