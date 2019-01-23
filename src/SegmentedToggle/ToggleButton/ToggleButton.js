import React from 'react';
import { string, node, bool } from 'prop-types';
import styles from './ToggleButton.st.css';

import Text from '../../Text';

const _addPrefix = icon =>
  icon &&
  React.cloneElement(icon, {
    className: styles.prefix,
  });

const ToggleButton = ({ children, prefixIcon, checked, dataHook, ...rest }) => (
  <div {...styles('root', { checked }, rest)} data-hook={dataHook}>
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
  checked: bool,
};

ToggleButton.displayName = 'SegmentedToggle.Button';

export default ToggleButton;
