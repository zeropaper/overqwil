import type { InputStylesNames } from '@mantine/core';
import type { ComponentStylesOverride } from '../types';

export const inputStyles: ComponentStylesOverride<InputStylesNames> = () => ({
  wrapper: {
    borderRadius: 0,
  },
  input: {
    borderRadius: 0,
    letterSpacing: '2px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

export default inputStyles;
