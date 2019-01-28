import React from 'react';
import { node, bool, string } from 'prop-types';
import { withFocusable } from 'wix-ui-core/dist/src/hocs/Focusable/FocusableHOC';

import Text from '../../Text';
import Popover from '../../Popover';

import styles from './ToggleIcon.st.css';

class ToggleIcon extends React.Component {
  static displayName = 'SegmentedToggle.Icon';

  state = {
    shown: false,
  };

  open = () => this.setState({ shown: true });
  close = () => this.setState({ shown: false });

  static propTypes = {
    children: node,
    checked: bool,
    value: string,
  };

  render() {
    const {
      children,
      selected,
      value,
      dataHook,
      focusableOnFocus,
      focusableOnBlur,
      ...rest
    } = this.props;

    const { shown } = this.state;

    return (
      <Popover
        showArrow
        shown={shown}
        onMouseEnter={() => this.open()}
        onMouseLeave={() => this.close()}
        theme="dark"
        appendTo="parent"
        placement="top"
        style={{ width: '100%' }}
      >
        <Popover.Element>
          <button
            {...rest}
            {...styles('root', { selected }, rest)}
            data-hook={dataHook}
            onFocus={focusableOnFocus}
            onBlur={focusableOnBlur}
          >
            {children}
          </button>
        </Popover.Element>
        <Popover.Content>
          <div
            style={{
              padding: '12px 24px',
              textAlign: 'center',
              color: 'white',
            }}
          >
            <Text {...styles('text', { shown })} size="small" weight="normal">
              {value}
            </Text>
          </div>
        </Popover.Content>
      </Popover>
    );
  }
}

export default withFocusable(ToggleIcon);
