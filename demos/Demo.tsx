import * as React from 'react';
import { Prism } from '@mantine/prism';

import Comparator, { PropTypes as ComparatorProps } from './Comparator';

export type PropTypes = ComparatorProps & {
  code: string;
};

export function Demo({ code, ...props }: PropTypes) {
  return (
    <>
      <Comparator {...props} />
      <Prism children={code} language="tsx" />
    </>
  );
}

export default Demo;
