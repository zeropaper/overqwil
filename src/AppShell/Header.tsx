import * as React from 'react';
import { Header as MHeader } from '@mantine/core';

import { createStyles } from '../..';
import OverqwilLogo from '../OverqwilLogo/OverqwilLogo';

const useStyles = createStyles({
  logo: {
    maxWidth: '100%',
    maxHeight: '100%',
    aspectRatio: '1',
  },
});

export type PropTypes = React.PropsWithChildren<{
  onToggleScreenEffect?: () => void;
}>;

export function Header({ children, onToggleScreenEffect }: PropTypes) {
  const { classes } = useStyles();
  return (
    <MHeader
      p="md"
      height={90}
      sx={(theme) => ({
        display: 'flex',
        gap: theme.spacing.md,
        alignItems: 'center',
        borderBottom: 'none',
      })}
    >
      <a style={{ aspectRatio: '1', height: '100%' }} href="/">
        <OverqwilLogo className={classes.logo} />
      </a>

      {children}

      {onToggleScreenEffect && (
        <button type="button" onClick={onToggleScreenEffect}>
          Toggle screen effect
        </button>
      )}
    </MHeader>
  );
}

export default Header;
