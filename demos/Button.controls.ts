import { ButtonVariant } from '@mantine/core';
import { size } from './props';

export const children = {
  value: 'Aknowledge',
};

export { size } from './props';

export const radius = size;

export const variant: {
  value: ButtonVariant;
  type: 'variant';
  options: ButtonVariant[];
} = {
  value: 'default',
  type: 'variant',
  options: [
    'filled',
    // 'unstyled',
    'outline',
    'subtle',
    'default',
  ],
};
