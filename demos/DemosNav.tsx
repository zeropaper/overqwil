/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import { Link } from 'react-router-dom';
import { List, Anchor } from '..';
import { demos } from '.';

export function DemosNav() {
  return (
    <List withPadding>
      {Object.keys(demos).map((name) => (
        <List.Item key={name}>
          <Anchor component={Link} to={`/${name.toLowerCase()}`}>
            {name}
          </Anchor>
        </List.Item>
      ))}
    </List>
  );
}

export default DemosNav;
