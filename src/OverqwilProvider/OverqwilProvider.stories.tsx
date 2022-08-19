import * as React from 'react';
import { useClipboard } from '@mantine/hooks';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { withGlobalStyles } from '../../.storybook/utils';

import { ColorSwatch, useMantineTheme, Table } from '../..';
import { OverqwilProvider } from './OverqwilProvider';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Overqwil/OverqwilProvider',
  component: OverqwilProvider,
  decorators: [withGlobalStyles],
  parameters: {
    layout: 'centered',
  },
  // args: {},
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof OverqwilProvider>;

function CopyColorSwatch({
  name,
  index,
  value,
}: {
  name: string;
  index: number;
  value: string;
}) {
  const clipboard = useClipboard({ timeout: 500 });
  const onClick = () => clipboard.copy(value);
  return (
    <ColorSwatch
      onClick={onClick}
      title={`${name}[${index}] click to copy`}
      color={value}
      sx={{
        display: 'inline-block',
        cursor: 'pointer',
        borderWidth: 3,
        borderStyle: 'solid',
        borderColor: clipboard.copied ? 'currentColor' : 'transparent',
      }}
    />
  );
}

function ColorsTable() {
  const theme = useMantineTheme();
  return (
    <Table
      sx={{
        textAlign: 'center',
        '& td': {
          textAlign: 'center',
          padding: theme.spacing.xs * 0.5,
        },
      }}
    >
      <thead>
        <tr>
          <td />
          {Object.keys(theme.colors).map((color) => (
            <th key={color}>{color}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Array(10)
          .fill(null)
          .map((_, i) => (
            <tr key={`index-${i}`}>
              <th>{9 - i}</th>
              {Object.keys(theme.colors).map((color) => (
                <td key={color}>
                  <CopyColorSwatch
                    name={color}
                    index={9 - i}
                    value={theme.colors[color][9 - i]}
                  />
                </td>
              ))}
            </tr>
          ))}
      </tbody>
    </Table>
  );
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof OverqwilProvider> = (args) => (
  <OverqwilProvider {...args}>
    <ColorsTable />
  </OverqwilProvider>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  // theme: createTheme(),
};
