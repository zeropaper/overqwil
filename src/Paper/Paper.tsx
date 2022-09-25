import { Paper as OriginalPaper, PaperProps } from '@mantine/core';

import withBackgroundImage from '../OverqwilProvider/withBackgroundImage';

const Paper = withBackgroundImage<PaperProps, HTMLElement>(
  OriginalPaper,
  (theme, params) => {
    const colors = theme.fn.variant({
      variant: params.variant || ('default' as any),
      color: params.color,
      primaryFallback: true,
    });
    const base = {
      color: colors.color,
      background: colors.background,
      border: colors.border,
    };
    return {
      base,
      hover: {
        ...base,
        background: colors.hover,
      },
      active: {
        ...base,
        background: colors.hover,
      },
      disabled: {
        ...base,
      },
      focus: {
        ...base,
        background: colors.hover,
      },
    };
  }
);

export { Paper };

export default Paper;
