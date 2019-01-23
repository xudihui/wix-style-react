import React from 'react';
import PropTypes from 'prop-types';
import styles from './SegmentedToggle.st.css';

import ToggleButton from './ToggleButton/ToggleButton';

class SegmentedToggle extends React.Component {
  static displayName = 'SegmentedToggle';

  static propTypes = {
    dataHook: PropTypes.string,
  };

  state = {
    checked: this.props.initiallyChecked,
  };

  _onClick = evt => {
    const { onClick } = this.props;
    this.setState({ checked: evt.currentTarget.value }, () => onClick(evt));
  };

  render() {
    const { dataHook, children } = this.props;
    return (
      <div data-hook={dataHook} className={styles.root}>
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
