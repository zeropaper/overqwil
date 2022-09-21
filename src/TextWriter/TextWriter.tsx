import * as React from 'react';

import { Text, TextProps as MTextProps, Box, BoxProps } from '..';

export type PropTypes = MTextProps & {
  children: string; // for now, only support string children

  onTick?: (index: number, total: number) => void;
  onStart?: () => void;
  onEnd?: () => void;
  msPerChar?: number;
  noEffect?: boolean;
  noHollow?: boolean;
  boxProps?: BoxProps;
};

export function TextWriter({
  children,
  onStart,
  onEnd,
  onTick,
  msPerChar = 100,
  noEffect = false,
  noHollow = false,
  boxProps = { sx: { position: 'relative' } },
  ...rest
}: PropTypes) {
  const isString = typeof children === 'string';

  const [index, setIndex] = React.useState(0);
  const timeout = React.useRef<number>();

  const tick = () =>
    setIndex((i) => {
      if (!isString || noEffect) return 0;

      const next = i + 1;

      if (next < children.length) {
        if (onTick) onTick(next, children.length);
        clearTimeout(timeout.current);
        timeout.current = window.setTimeout(tick, msPerChar);
        return next;
      }

      if (onEnd) onEnd();
      clearTimeout(timeout.current);
      return children.length;
    });

  React.useEffect(() => {
    if (!isString || noEffect) return () => {};

    tick();
    if (onStart) onStart();

    return () => {
      if (timeout) clearTimeout(timeout.current);
    };
  }, []);

  React.useEffect(() => {
    if (noEffect) {
      clearTimeout(timeout.current);
      setIndex(isString ? children.length : 0);
    } else {
      setIndex(() => {
        tick();
        if (onStart) onStart();

        return 0;
      });
    }
  }, [children, msPerChar, noEffect]);

  if (noHollow)
    return (
      <Text {...rest}>{isString ? children.slice(0, index) : children}</Text>
    );

  const content = (
    <>
      <Text {...rest} style={{ position: 'absolute' }}>
        {isString ? children.slice(0, index) : children}
      </Text>
      <Text {...rest} style={{ visibility: 'hidden' }}>
        {children}
      </Text>
    </>
  );

  if (!boxProps) return content;

  return (
    <Box {...boxProps} style={{ position: 'relative' }}>
      {content}
    </Box>
  );
}

export default TextWriter;
