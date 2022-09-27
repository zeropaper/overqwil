import { ButtonVariant, ButtonProps } from '../src';
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

export const type: {
  value: 'button';
  type: ButtonProps['type'];
  skip: boolean;
} = {
  skip: true,
  value: 'button',
  type: 'button',
};
