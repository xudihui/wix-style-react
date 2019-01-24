import React from 'react';
import { string, node, bool } from 'prop-types';
import styles from './ToggleButton.st.css';
import { withFocusable } from 'wix-ui-core/dist/src/hocs/Focusable/FocusableHOC';

import Text from '../../Text';

const _addPrefix = icon =>
  icon &&
  React.cloneElement(icon, {
    className: styles.prefix,
  });

const ToggleButton = ({
  children,
  prefixIcon,
  selected,
  dataHook,
  focusableOnFocus,
  focusableOnBlur,
  disabled,
  ...rest
}) => (
  <button
    {...rest}
    {...styles('root', { selected }, rest)}
    data-hook={dataHook}
    disabled={disabled}
    onFocus={focusableOnFocus}
    onBlur={focusableOnBlur}
  >
    {_addPrefix(prefixIcon)}
    <Text {...styles('text', { disabled }, rest)} size="medium" weight="normal">
      {children}
    </Text>
  </button>
);

ToggleButton.PropTypes = {
  children: string,
  prefixIcon: node,
  checked: bool,
};

ToggleButton.displayName = 'SegmentedToggle.Button';

export default withFocusable(ToggleButton);
