import * as React from 'react';
import { useLocalStorage } from '@mantine/hooks';

import {
  Box,
  Group,
  SegmentedControl,
  Switch,
  Text,
  TextInput,
  Title,
} from '..';

import * as demos from './demos';
import * as controls from './controls';

import Demo from './Demo';
import { code } from '.';

type DemoName = keyof typeof demos;

type DemoProps<D extends DemoName> = keyof React.ComponentProps<
  typeof demos[D]
>;

type DemoPropType<
  D extends DemoName,
  P extends DemoProps<D>
> = React.ComponentProps<typeof demos[D]>[P];

type DemoControls = {
  [key in DemoName]: {
    [prop in DemoProps<key>]: {
      value: DemoPropType<key, prop>;
      type?: string;
      options?: string[];
      skip?: boolean;
    };
  };
};

type DemoCode = {
  [key in DemoName]: (props: string[], children?: string) => string;
};

const demoControls: DemoControls = controls;
const demoCode: DemoCode = code;

function props2demoCode(props: {
  [k: string]: any;
}): [string[], string | undefined] {
  let children;
  const arr = Object.entries(props).reduce(
    (acc: string[], [propName, propValue]) => {
      if (propName === 'children') {
        children = propValue;
        return acc;
      }

      const propValueType = typeof propValue;

      if (propValueType === 'string') {
        acc.push(`${propName}="${propValue}"`);
      }

      if (propValueType === 'boolean' && propValue) {
        acc.push(`${propName}`);
      }

      if (propValueType === 'number') {
        acc.push(`${propName}={${propValue}}`);
      }

      return acc;
    },
    []
  );

  return [arr, children];
}

export function withDemo(name: string, Component: React.FunctionComponent) {
  return function DemoWrapper() {
    const controlProps: React.ComponentProps<typeof Component> = Object.entries(
      demoControls[name]
    ).reduce((obj, [n, info]) => {
      // @ts-ignore
      // eslint-disable-next-line no-param-reassign
      obj[n] = info.value;
      return obj;
    }, {});

    const [props, setProps] = useLocalStorage({
      key: name,
      defaultValue: controlProps,
    });
    const changeProp = (prop: string, value: any) =>
      setProps((current) => ({
        ...current,
        [prop]: value,
      }));

    function demoControlsMapper([propName, propField]: [string, any]) {
      const {
        value,
        type = typeof value,
        options = [],
        skip = false,
      } = propField;
      if (skip) return null;

      switch (type) {
        case 'variant':
        case 'size':
          return (
            <Box key={propName} mb="md">
              <Text
                component="label"
                mr="sm"
                size="sm"
                sx={{
                  width: 'clamp(90px, 33%, 150px)',
                  display: 'inline-block',
                  textAlign: 'right',
                }}
              >
                {propName}
              </Text>
              <SegmentedControl
                title={propName}
                onChange={(v) => changeProp(propName, v)}
                value={props[propName]}
                data={options.map((s) => ({ value: s, label: s }))}
                size="sm"
              />
            </Box>
          );
        case 'boolean':
          return (
            <Switch
              key={propName}
              label={propName}
              size="sm"
              mb="sm"
              onChange={() => changeProp(propName, !props[propName])}
              checked={!!props[propName]}
            />
          );
        case 'string':
        default:
          return (
            <TextInput
              key={propName}
              label={propName}
              size="sm"
              radius="md"
              mb="sm"
              onChange={({ target }) => changeProp(propName, target.value)}
              value={props[propName]}
            />
          );
      }
    }

    return (
      <>
        <Title>{name}</Title>

        <Group position="apart" grow>
          <Box mb="lg">
            {Object.entries(demoControls[name]).map(demoControlsMapper)}
          </Box>
        </Group>

        <Demo code={demoCode[name](...props2demoCode(props))}>
          <Component {...props} />
        </Demo>
      </>
    );
  };
}

export default withDemo;
