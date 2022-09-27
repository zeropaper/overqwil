import {
  NumberInput as OriginalNumberInput,
  NumberInputProps,
} from '@mantine/core';
import { inputBackgroundImage } from '../Input/Input';

import withBackgroundImage from '../OverqwilProvider/withBackgroundImage';

const NumberInput = withBackgroundImage<NumberInputProps, HTMLInputElement>(
  OriginalNumberInput,
  inputBackgroundImage
);

export { NumberInput };

export default NumberInput;
