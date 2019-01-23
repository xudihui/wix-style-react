import React from 'react';
import { string, node, bool } from 'prop-types';
import styles from './ToggleButton.st.css';

import Text from '../../Text';

const _addPrefix = icon =>
  icon &&
  React.cloneElement(icon, {
    className: styles.prefix,
  });

const ToggleButton = ({ children, prefixIcon, checked, ...rest }) => (
  <div {...styles('root', { checked }, rest)}>
    {_addPrefix(prefixIcon)}
    <Text size="medium" weight="normal">
      {children}
    </Text>
    <input {...rest} className={styles.input} type="radio" />
  </div>
);

ToggleButton.PropTypes = {
  children: string,
  prefixIcon: node,
  selected: bool,
};

ToggleButton.displayName = 'SegmentedToggle.Button';

export default ToggleButton;
