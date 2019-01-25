import React from 'react';
import { string, func, bool } from 'prop-types';

import styles from './SegmentedToggle.st.css';
import ToggleButton from './ToggleButton/ToggleButton';
import { Layout, Cell } from '../Layout';

class SegmentedToggle extends React.Component {
  static displayName = 'SegmentedToggle';

  static propTypes = {
    dataHook: string,
    defaultSelected: string,
    onClick: func,
    disabled: bool,
  };

  state = {
    selected: this.props.defaultSelected,
  };

  _onClick = evt => {
    const { onClick } = this.props;
    const { value } = evt.currentTarget;
    this.setState({ selected: value }, () =>
      onClick ? onClick(evt, value) : null,
    );
  };

  render() {
    const { dataHook, children, disabled, ...rest } = this.props;
    return (
      <div data-hook={dataHook} {...styles('root', { disabled }, rest)}>
        {React.Children.map(children, child =>
          React.cloneElement(child, {
            disabled,
            onClick: this._onClick,
            selected: child.props.value === this.state.selected,
          }),
        )}
      </div>
    );
  }
}

SegmentedToggle.Button = ToggleButton;
export default SegmentedToggle;
