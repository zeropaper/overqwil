import type { ThemeComponentStyles } from '../OverqwilProvider/Overqwil.components';

import { z } from '../OverqwilProvider/clip-paths';

// eslint-disable-next-line import/prefer-default-export
export const styles: ThemeComponentStyles = (theme, params) => {
  const size = theme.fn.size({
    size: typeof params.radius === 'undefined' ? params.size : params.radius,
    sizes: theme.radius,
  });
  return {
    rightSection: {
      zIndex: z.el,
      right: size,
    },
  };
};
