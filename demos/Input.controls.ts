import { InputVariant } from '@mantine/core';
import { size } from './props';

export { defaultValue, placeholder, disabled, size } from './props';

export const radius = size;

export const variant: {
  value: InputVariant;
  type: 'variant';
  options: InputVariant[];
} = {
  value: 'default',
  type: 'variant',
  options: [
    'filled',
    // 'unstyled',
    'default',
  ],
};
