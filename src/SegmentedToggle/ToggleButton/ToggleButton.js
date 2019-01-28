import React from 'react';
import { node, bool } from 'prop-types';
import { withFocusable } from 'wix-ui-core/dist/src/hocs/Focusable/FocusableHOC';

import styles from './ToggleButton.st.css';

import Text from '../../Text';

const addPrefix = icon =>
  icon &&
  React.cloneElement(icon, {
    width: '24',
    height: '24',
    style: { flexShrink: '0' },
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
    {addPrefix(prefixIcon)}
    <Text ellipsis size="medium" weight="normal">
      {children}
    </Text>
  </button>
);

ToggleButton.PropTypes = {
  children: node,
  prefixIcon: node,
  checked: bool,
};

ToggleButton.displayName = 'SegmentedToggle.Button';

export default withFocusable(ToggleButton);
