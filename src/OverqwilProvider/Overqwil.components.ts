import { MantineTheme, MantineThemeOverride } from '../..';

import * as Button from '../Button/Button.styles';
import * as Select from '../Select/Select.styles';
import * as Input from '../Input/Input.styles';
// import * as NumberInput from '../NumberInput/NumberInput.styles';
import * as Paper from '../Paper/Paper.styles';

type ThemeComponent = MantineTheme['components'][string];

export type ThemeComponentStyles = Exclude<ThemeComponent['styles'], undefined>;

export const components: MantineThemeOverride['components'] = {
  Input,
  // NumberInput,
  Select,
  Button,
  Paper,
};

export default components;
