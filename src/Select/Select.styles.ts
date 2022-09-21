import type { ThemeComponentStyles } from '../OverqwilProvider/Overqwil.components';

import { z } from '../OverqwilProvider/clip-paths';

// eslint-disable-next-line import/prefer-default-export
export const styles: ThemeComponentStyles = () => ({
  wrapper: {
    zIndex: z.el + 1,
  },
});
