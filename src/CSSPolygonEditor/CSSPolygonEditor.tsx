import * as React from 'react';
import { Switch, Input as MInput } from '@mantine/core';
import { Box, Group, Select } from '../..';

type XY = [string | number, string | number];

type Coords = XY[];

type DetailedCoord = [
  [number, string | null, boolean],
  [number, string | null, boolean]
];

type DetailedCoords = DetailedCoord[];

type PolygonEditorProps = {
  coords?: Coords;
  onChange?: (coords: DetailedCoords) => void;
};

interface CSSUnitSelectorChangeHandler {
  (value: string | null): void;
}

type CSSUnitSelectorProps = {
  value: number | string | null;
  onChange: CSSUnitSelectorChangeHandler;
};

export function polygon(coords: Coords) {
  return `polygon(\n  ${coords.map((xy) => xy.join(' ')).join(',\n  ')}\n)`;
}

export function CSSUnitSelector({ value, onChange }: CSSUnitSelectorProps) {
  let label: string | null = null;
  if (typeof value === 'number') {
    label = 'px';
  }

  const handleChange = (v: string) => {
    if (!v) return onChange(null);
    return onChange(v);
  };

  return (
    <Select
      label={label}
      value={!value ? '' : value?.toString()}
      onChange={handleChange}
      sx={{
        width: '8ch',
      }}
      data={['', 'px', '%', 'em', 'rem', 'ex', 'ch', 'vw', 'vh']}
    />
  );
}

export function InputsTable({
  coords,
  onValueChange,
  onUnitChange,
  onNegativeChange,
}: {
  coords: DetailedCoords;
  onValueChange: (index: number, axis: Axis, value: number) => void;
  onUnitChange: (index: number, axis: Axis, value: string | null) => void;
  onNegativeChange: (index: number, axis: Axis, value: boolean) => void;
}) {
  return (
    <table>
      <thead>
        <tr>
          <th />
          <th colSpan={3}>X</th>
          <th colSpan={3}>Y</th>
        </tr>
      </thead>
      <tbody>
        {coords.map(([[xAmount, xUnit, xNeg], [yAmount, yUnit, yNeg]], i) => (
          <tr key={i}>
            <td />
            <td>
              <MInput
                sx={{
                  width: '8ch',
                }}
                name="x"
                type="number"
                value={xAmount}
                onChange={(e: { target: { value: string } }) => {
                  onValueChange(i, 'x', parseInt(e.target.value, 10) || 0);
                }}
              />
            </td>
            <td>
              <CSSUnitSelector
                value={xUnit}
                onChange={(val) => onUnitChange(i, 'x', val)}
              />
            </td>
            <td>
              <Switch
                size="lg"
                offLabel="left"
                onLabel="right"
                checked={xNeg}
                onChange={(e) => onNegativeChange(i, 'x', e.target.checked)}
              />
            </td>

            <td>
              <MInput
                sx={{
                  width: '8ch',
                }}
                name="y"
                type="number"
                value={yAmount}
                onChange={(e: { target: { value: string } }) => {
                  onValueChange(i, 'y', parseInt(e.target.value, 10) || 0);
                }}
              />
            </td>
            <td>
              <CSSUnitSelector
                value={yUnit}
                onChange={(val) => onUnitChange(i, 'y', val)}
              />
            </td>
            <td>
              <Switch
                size="lg"
                offLabel="top"
                onLabel="bottom"
                checked={yNeg}
                onChange={(e) => onNegativeChange(i, 'y', e.target.checked)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function PreviewBoxes({ clipPath }: { clipPath: string }) {
  return (
    <Group>
      <Group
        m="xl"
        p="xl"
        sx={{
          background: 'grey',
        }}
      >
        <Box
          p="xl"
          sx={{
            aspectRatio: '3 / 4',
            height: 200,
            background: 'lime',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            clipPath,
          }}
        >
          3 / 4
        </Box>
      </Group>

      <Group
        m="xl"
        p="xl"
        sx={{
          background: 'grey',
        }}
      >
        <Box
          p="xl"
          sx={{
            width: 150,
            height: 150,
            background: 'lime',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            clipPath,
          }}
        >
          1 / 1
        </Box>
      </Group>

      <Group
        m="xl"
        p="xl"
        sx={{
          background: 'grey',
        }}
      >
        <Box
          p="xl"
          sx={{
            aspectRatio: '4 / 3',
            width: 200,
            background: 'lime',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            clipPath,
          }}
        >
          4 / 3
        </Box>
      </Group>
    </Group>
  );
}

const cache: { [k: string]: [number, string | null, boolean] } = {};
const coordParsingExp = /(-|)\s*([0-9]+)([a-z]{2,}|%|)/i;
function parseCoord(
  coord: string | number | null
): [number, string | null, boolean] {
  const parseable = `${coord || ''}`.trim();
  if (cache[parseable]) return cache[parseable];
  if (!parseable) {
    cache[parseable] = [0, null, false];
    return cache[parseable];
  }
  const values = coordParsingExp.exec(parseable);
  if (!values) {
    cache[parseable] = [0, null, parseable.startsWith('-')];
    return cache[parseable];
  }
  const [, negative, amount, unit] = values || [];
  cache[parseable] = [parseInt(amount, 10), unit || null, !!negative];
  return cache[parseable];
}

type Axis = 'x' | 'y';

function axisIndex(axis: Axis) {
  return axis === 'x' ? 0 : 1;
}

export function PolygonEditor({
  coords: coordsProp = [
    [0, 0],
    ['-20px', 0],
    ['-20px', '-20px'],
    [0, '-20px'],
  ],
  onChange,
}: PolygonEditorProps) {
  const [coords, setCoords] = React.useState<DetailedCoords>(
    coordsProp.map(
      (coord: XY): DetailedCoord => [parseCoord(coord[0]), parseCoord(coord[1])]
    )
  );

  const handleValueChange = (index: number, axis: Axis, newValue: number) =>
    setCoords((cs) => {
      const newCs = [...cs];
      const aI = axisIndex(axis);
      const [, u = null, n = false] = newCs[index][aI] || [];
      newCs[index][aI] = [newValue, u, n];
      if (onChange) onChange(newCs);
      return newCs;
    });

  const handleUnitChange = (
    index: number,
    axis: Axis,
    newUnit: string | null
  ) =>
    setCoords((cs) => {
      const newCs = [...cs];
      const aI = axisIndex(axis);
      const [v = 0, , n = false] = newCs[index][aI] || [];
      newCs[index][aI] = [v, newUnit, n];
      if (onChange) onChange(newCs);
      return newCs;
    });

  const handleNegativeChange = (index: number, axis: Axis, newValue: boolean) =>
    setCoords((cs) => {
      const newCs = [...cs];
      const aI = axisIndex(axis);
      const [v = 0, u = null] = newCs[index][aI] || [];
      newCs[index][aI] = [v, u, !!newValue];
      if (onChange) onChange(newCs);
      return newCs;
    });

  const clipPath = polygon(
    coords
      .map(([[xV, xU, xN], [yV, yU, yN]]) => {
        const aXV = Math.abs(xV);
        const aYV = Math.abs(yV);
        return [
          xN ? `calc(100% - ${aXV}${aXV ? xU : ''})` : `${aXV}${aXV ? xU : ''}`,
          yN ? `calc(100% - ${aYV}${aYV ? yU : ''})` : `${aYV}${aYV ? yU : ''}`,
        ];
      })
      .map(([x, y]) => [
        x.startsWith('calc(100% - 0') ? '100%' : x,
        y.startsWith('calc(100% - 0') ? '100%' : y,
      ])
  );

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        background: 'tomato',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      m="xl"
    >
      <PreviewBoxes clipPath={clipPath} />

      <InputsTable
        coords={coords}
        onValueChange={handleValueChange}
        onUnitChange={handleUnitChange}
        onNegativeChange={handleNegativeChange}
      />

      <pre>{clipPath}</pre>
    </Box>
  );
}

export default PolygonEditor;
