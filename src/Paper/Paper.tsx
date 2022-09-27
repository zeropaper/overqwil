import { Paper as OriginalPaper, PaperProps } from '@mantine/core';
import { BaseParams } from '../OverqwilProvider/useBackgroundImages';

import withBackgroundImage from '../OverqwilProvider/withBackgroundImage';

const Paper = withBackgroundImage<PaperProps, HTMLElement>(
  OriginalPaper,
  (theme, params: BaseParams & { withBorder?: boolean }) => {
    const colors = theme.fn.variant({
      variant: params.variant || ('default' as any),
      color: params.color,
      primaryFallback: true,
    });
    const base = {
      color: colors.color,
      background: colors.background,
      border: params.withBorder ? colors.border : 'transparent',
    };
    return {
      base,
      hover: base,
      active: base,
      disabled: base,
      focus: base,
    };
  }
);

export { Paper };

export default Paper;
