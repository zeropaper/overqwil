import * as React from 'react';
import { useMergedRef } from '@mantine/hooks';

import useBackgroundImages from './useBackgroundImages';

type UBIParams = Parameters<typeof useBackgroundImages>;

const background = {
  backgroundImage: 'var(--background-image)',
  '&:active': {
    backgroundImage: 'var(--background-image-active, var(--background-image))',
  },
  '&:hover': {
    backgroundImage: 'var(--background-image-hover, var(--background-image))',
  },
  borderRadius: 0,
  border: 0,
  backgroundColor: 'transparent',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'auto',
  boxShadow: 'none',
};

const noBackground = {
  background: 'none',
  border: 0,
  borderRadius: 0,
  boxShadow: 'none',
};

function withBackgroundImage<O extends UBIParams[0], R extends HTMLElement>(
  Original: React.ComponentType<O>,
  resoveColors: UBIParams[1]
) {
  return React.forwardRef<R, O>(
    (props: O, forwardedRef: React.ForwardedRef<R>) => {
      const [backgroundImages, backgroundImageRef] = useBackgroundImages<R, O>(
        props,
        resoveColors
      );
      const mergedRef = useMergedRef(forwardedRef, backgroundImageRef);

      return (
        <Original
          {...props}
          style={{
            ...backgroundImages,
            ...(props.style || {}),
          }}
          ref={mergedRef}
        />
      );
    }
  );
}

export { withBackgroundImage, background, noBackground };

export default withBackgroundImage;
