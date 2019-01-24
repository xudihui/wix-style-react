import React from 'react';
import { string } from 'prop-types';
import { generateID } from '../utils/generateId';
import { withFocusable } from 'wix-ui-core/dist/src/hocs/Focusable/FocusableHOC';

import styles from './SegmentedToggle.st.css';
import ToggleButton from './ToggleButton/ToggleButton';

class SegmentedToggle extends React.Component {
  static displayName = 'SegmentedToggle';

  static propTypes = {
    dataHook: string,
    defaultChecked: string,
    name: string,
  };

  state = {
    checked: this.props.defaultChecked,
    name: this.props.name || generateID(),
  };

  _onChange = evt => {
    const { onChange } = this.props;
    this.setState({ checked: evt.target.value }, () =>
      onChange ? onChange(evt) : null,
    );
  };

  render() {
    const {
      dataHook,
      children,
      focusableOnFocus,
      focusableOnBlur,
      ...rest
    } = this.props;
    return (
      <div
        data-hook={dataHook}
        onFocus={focusableOnFocus}
        onBlur={focusableOnBlur}
        {...styles('root', {}, rest)}
        tabIndex={0}
      >
        {React.Children.map(children, child =>
          React.cloneElement(child, {
            name: this.state.name,
            onChange: this._onChange,
            checked: child.props.value === this.state.checked,
          }),
        )}
      </div>
    );
  }
}

SegmentedToggle.Button = ToggleButton;
export default withFocusable(SegmentedToggle);
