import React from 'react';
import { string, func } from 'prop-types';

import styles from './SegmentedToggle.st.css';
import ToggleButton from './ToggleButton/ToggleButton';

class SegmentedToggle extends React.Component {
  static displayName = 'SegmentedToggle';

  static propTypes = {
    dataHook: string,
    defaultChecked: string,
    onClick: func,
  };

  state = {
    checked: this.props.defaultChecked,
  };

  _onClick = evt => {
    const { onClick } = this.props;
    const { value } = evt.currentTarget;
    this.setState({ checked: value }, () =>
      onClick ? onClick(evt, value) : null,
    );
  };

  render() {
    const { dataHook, children, ...rest } = this.props;
    return (
      <div data-hook={dataHook} {...styles('root', {}, rest)}>
        {React.Children.map(children, child =>
          React.cloneElement(child, {
            onClick: this._onClick,
            checked: child.props.value === this.state.checked,
          }),
        )}
      </div>
    );
  }
}

SegmentedToggle.Button = ToggleButton;
export default SegmentedToggle;
