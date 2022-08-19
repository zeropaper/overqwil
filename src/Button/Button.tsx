import * as React from 'react';

import { createStyles, keyframes } from '../..';

const useStyles = createStyles((theme, props, getRef) => {
  const { spacing, colors, colorScheme, fn, other } = theme;

  const primary = fn.primaryColor();
  const shadowPrimary = other.effectColor(colors, colorScheme);

  const color = `hsl(0, 0%, 100%)`;
  const fontSize = `var(--mantine-font-size-md)`;
  const labelHatchHeight = `calc(${fontSize} * 0.5)`;
  const labelHatchWidth = `calc(${labelHatchHeight} * 5)`;
  const labelHatchLeft = `calc(100% - ${labelHatchWidth})`;
  const labelHatchRight = `calc(100% - ${spacing.xs}px)`;
  const shadowSecondaryHue = 60;
  const shadowSecondary = `hsl(${shadowSecondaryHue}, 90%, 60%)`;

  const cornerSize = `calc(${labelHatchHeight} * 2)`;
  const shiftA = `${cornerSize}`;
  const shiftB = `${spacing.xs}px`;
  const cornerLeft = `calc(100% - ${cornerSize})`;
  const cornerLeftShiftedA = `calc(${cornerLeft} + ${shiftA})`;
  const border = `${spacing.xs}px`;
  const shimmyDistance = 9;

  const clips = [
    `polygon(
    0 0,
    100% 0,
    100% 100%,
    ${labelHatchRight} 100%,
    ${labelHatchRight} calc(100% - ${labelHatchHeight}),
    ${labelHatchLeft} calc(100% - ${labelHatchHeight}),
    ${labelHatchLeft} 100%,
    ${shiftA} 100%,
    0 ${cornerLeft}
  )`,
    `polygon(
    0 ${shiftB},
    100% ${shiftB},
    100% calc(100% - ${labelHatchHeight}),
    ${labelHatchRight} calc(100% - ${labelHatchHeight}),
    ${labelHatchRight} calc(100% - ${labelHatchHeight}),
    ${labelHatchLeft} calc(100% - ${labelHatchHeight}),
    ${labelHatchLeft} calc(100% - ${labelHatchHeight}),
    ${shiftA} calc(100% - ${labelHatchHeight}),
    0 ${cornerLeft}
  )`,
    `polygon(
    0 ${cornerLeftShiftedA},
    100% ${cornerLeftShiftedA},
    100% 100%,
    ${labelHatchRight} 100%,
    ${labelHatchRight} calc(100% - ${labelHatchHeight}),
    ${labelHatchLeft} calc(100% - ${labelHatchHeight}),
    ${labelHatchLeft} 100%,
    ${shiftA} 100%,
    0 ${cornerLeftShiftedA}
  )`,
    `polygon(
    0 44%,
    100% 44%,
    100% 54%,
    ${labelHatchRight} 54%,
    ${labelHatchRight} 54%,
    ${labelHatchLeft} 54%,
    ${labelHatchLeft} 54%,
    ${shiftA} 54%,
    0 54%
  )`,
    `polygon(
    0 0,
    100% 0,
    100% 0,
    ${labelHatchRight} 0,
    ${labelHatchRight} 0,
    ${labelHatchLeft} 0,
    ${labelHatchLeft} 0,
    ${shiftA} 0,
    0 0
  )`,
    `polygon(
    0 0,
    100% 0,
    100% 0,
    ${labelHatchRight} 0,
    ${labelHatchRight} 0,
    ${labelHatchLeft} 0,
    ${labelHatchLeft} 0,
    ${shiftA} 0,
    0 0
  )`,
    `polygon(
    0 40%,
    100% 40%,
    100% 32%,
    ${labelHatchRight} 32%,
    ${labelHatchRight} 32%,
    ${labelHatchLeft} 32%,
    ${labelHatchLeft} 32%,
    ${shiftA} 32%,
    0 ${cornerLeft}
  )`,
    `polygon(
    0 63%,
    100% 63%,
    100% 80%,
    ${labelHatchRight} 80%,
    ${labelHatchRight} 80%,
    ${labelHatchLeft} 80%,
    ${labelHatchLeft} 80%,
    ${shiftA} 80%,
    0 ${cornerLeft}
  )`,
  ];

  const glitchKeyframes = keyframes({
    '0%': {
      clipPath: `${clips[1]}`,
    },
    '2%,8%': {
      clipPath: `${clips[2]}`,
      transform: `translate(calc(${shimmyDistance} * -1%), 0)`,
    },
    '6%': {
      clipPath: `${clips[2]}`,
      transform: `translate(calc(${shimmyDistance} * 1%), 0)`,
    },
    '9%': {
      clipPath: `${clips[2]}`,
      transform: `translate(0, 0)`,
    },
    '10%': {
      clipPath: `${clips[3]}`,
      transform: `translate(calc(${shimmyDistance} * 1%), 0)`,
    },
    '13%': {
      clipPath: `${clips[3]}`,
      transform: `translate(0, 0)`,
    },
    '14%,21%': {
      clipPath: `${clips[4]}`,
      transform: `translate(calc(${shimmyDistance} * 1%), 0)`,
    },
    '25%': {
      clipPath: `${clips[5]}`,
      transform: `translate(calc(${shimmyDistance} * 1%), 0)`,
    },
    '30%': {
      clipPath: `${clips[5]}`,
      transform: `translate(calc(${shimmyDistance} * -1%), 0)`,
    },
    '35%,45%': {
      clipPath: `${clips[6]}`,
      transform: `translate(calc(${shimmyDistance} * -1%))`,
    },
    '40%': {
      clipPath: `${clips[6]}`,
      transform: `translate(calc(${shimmyDistance} * 1%))`,
    },
    '50%': {
      clipPath: `${clips[6]}`,
      transform: `translate(0, 0)`,
    },
    '55%': {
      clipPath: `${clips[7]}`,
      transform: `translate(calc(${shimmyDistance} * 1%), 0)`,
    },
    '60%': {
      clipPath: `${clips[7]}`,
      transform: `translate(0, 0)`,
    },
    '31%,61%,100%': {
      clipPath: `${clips[4]}`,
    },
  });
  return {
    root: {
      color: `${color}`,
      cursor: 'pointer',
      background: 'transparent',
      textTransform: 'uppercase',
      fontSize: `${fontSize}`,
      outline: 'transparent',
      letterSpacing: '2px',
      position: 'relative',
      fontWeight: 700,
      lineHeight: 1.6,
      border: 0,
      padding: `calc(${labelHatchHeight} * 1.5)
    calc(${labelHatchWidth} * 0.5) calc(${labelHatchHeight} * 1.5)
    calc(${labelHatchWidth} * 0.65)`,
      transition: `background-color 0.2s`,

      '&:hover': {
        // --primary: hsl(
        //   ${primaryHue},
        //   85%,
        //   calc(${primaryLightness} * 0.8%)
        // );
      },
      '&:active': {
        // --primary: hsl(
        //   ${primaryHue},
        //   85%,
        //   calc(${primaryLightness} * 0.6%)
        // );
      },
      '&::before,&::after': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        clipPath: `${clips[0]}`,
        zIndex: -1,
      },
      '&::before': {
        background: `${shadowPrimary}`,
        transform: `translate(${border}, 0)`,
      },
      '&::after': {
        background: `${primary}`,
      },
      [`&:hover .${getRef('glitch')}`]: {
        display: 'block',
      },
    },
    tag: {
      position: 'absolute',
      padding: `2px 4px`,
      transform: `translate(0, 1px)`,
      letterSpacing: `1px`,
      lineHeight: 1,
      bottom: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: `${labelHatchHeight}`,
      right: `calc(100% - ${labelHatchRight})`,
      fontWeight: 'normal',
      color: `hsl(0, 0%, 0%)`,
      fontSize: `calc(${labelHatchHeight} * 0.7)`,
    },
    glitch: {
      ref: getRef('glitch'),
      position: 'absolute',
      top: `calc(${border} * -1)`,
      left: `calc(${border} * -1)`,
      right: `calc(${border} * -1)`,
      bottom: `calc(${border} * -1)`,
      background: `${shadowPrimary}`,
      textShadow: `2px 2px ${shadowPrimary}, -2px -2px ${shadowSecondary}`,
      clipPath: `${clips[0]}`,
      animation: `${glitchKeyframes} 2s infinite`,
      display: 'none',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: `calc(${border} * 1)`,
        right: `calc(${border} * 1)`,
        bottom: `calc(${border} * 1)`,
        left: `calc(${border} * 1)`,
        clipPath: `${clips[0]}`,
        background: `${primary}`,
        zIndex: -1,
      },
    },
  };
});

export interface PropTypes
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  type: 'button' | 'submit' | 'reset';
  children: string;
  decoSymbol?: string;
  decoCode?: string;
}

export function Button(props: PropTypes) {
  const {
    children: text,
    decoCode = 'R25',
    decoSymbol: symbol = '_',
    type,
    ...rest
  } = props;

  const { classes } = useStyles();

  return (
    <button
      {...rest}
      className={[rest.className, classes.root].join(' ')}
      type={type || 'button'}
    >
      {text}
      <span aria-hidden>{symbol}</span>
      <span aria-hidden className={classes.glitch}>
        {`${text}${symbol}`}
      </span>
      <span aria-hidden className={classes.tag}>
        {decoCode}
      </span>
    </button>
  );
}

export default Button;
