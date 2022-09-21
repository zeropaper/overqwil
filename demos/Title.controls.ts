import { TitleOrder } from '@mantine/core';

export const children = {
  value: 'Hello World',
};

export const order: {
  value: TitleOrder;
  options: string[];
} = {
  value: 1,
  options: [1, 2, 3, 4, 5].map((n) => n.toString()),
};
