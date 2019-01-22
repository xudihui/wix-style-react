import React from 'react';
import { string, node, bool } from 'prop-types';
import styles from './ToggleButton.st.css';

import Text from '../../Text';

const _addPrefix = icon =>
  icon &&
  React.cloneElement(icon, {
    className: styles.prefix,
  });

const ToggleButton = ({ children, prefixIcon, selected, ...rest }) => (
  <button {...rest} {...styles('root', { selected }, rest)}>
    {_addPrefix(prefixIcon)}
    <Text size="medium" weight="normal">
      {children}
    </Text>
  </button>
);

ToggleButton.PropTypes = {
  children: string,
  prefixIcon: node,
  selected: bool,
};

ToggleButton.displayName = 'ToggleButton';

export default ToggleButton;
