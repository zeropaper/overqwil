import { MantineThemeOverride } from '@mantine/core';

import {
  textInputStyles,
  textInputWrapperStyles,
} from '../TextInput/TextInput.styles';
import inputStyles from '../Input/Input.styles';

export const components: MantineThemeOverride['components'] = {
  TextInput: {
    styles: textInputStyles,
  },
  TextInputWrapper: {
    styles: textInputWrapperStyles,
  },
  Input: {
    styles: inputStyles,
  },
};

export default components;
