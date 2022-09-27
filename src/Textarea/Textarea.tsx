import { Textarea as OriginalTextarea, TextareaProps } from '@mantine/core';
import { inputBackgroundImage } from '../Input/Input';

import withBackgroundImage from '../OverqwilProvider/withBackgroundImage';

const Textarea = withBackgroundImage<TextareaProps, HTMLInputElement>(
  OriginalTextarea,
  inputBackgroundImage
);

export { Textarea };

export default Textarea;
