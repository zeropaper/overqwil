import React from 'react';

import { useMantineTheme } from '../..';

export interface PropTypes {
  size?: number;
  className?: string;
  strokeWidth?: number;
}

export function OverqwilLogo({ className, strokeWidth = 12, size }: PropTypes) {
  const { fn } = useMantineTheme();

  const originalSize = 265;

  return (
    <svg
      {...(size ? { width: size, height: size } : {})}
      version="1.1"
      viewBox={`0 0 ${originalSize} ${originalSize}`}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g
        transform="matrix(3 0 0 3 143.36 -122.28)"
        fill="none"
        stroke={fn.primaryColor()}
        strokeLinejoin="bevel"
        strokeWidth={strokeWidth}
      >
        <path
          transform="matrix(.26056 .045944 -.045944 .26056 -32.573 22.228)"
          d="m145.2 313.71-102.97-178.35h102.97 102.97l-51.486 89.177z"
        />
        <path
          transform="matrix(.26056 -.045944 .045944 .26056 -50.474 35.57)"
          d="m145.2 313.71-102.97-178.35h102.97 102.97l-51.486 89.177z"
        />
        <g transform="matrix(.26458 0 0 .26458 -54.409 28.253)">
          <path d="m140.21 224.53 51.486-30.245" />
          <path d="m243.18 224.53-51.487-30.245" />
          <path d="m191.7 135.36-3.5e-4 58.932" />
        </g>
      </g>
    </svg>
  );
}

export default OverqwilLogo;
