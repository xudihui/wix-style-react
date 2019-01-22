import React from 'react';
import PropTypes from 'prop-types';
import styles from './SegmentedToggle.st.css';

class SegmentedToggle extends React.Component {
  static displayName = 'SegmentedToggle';

  static propTypes = {
    dataHook: PropTypes.string,
  };

  render() {
    const { dataHook, children } = this.props;
    return (
      <div data-hook={dataHook} className={styles.root}>
        {children}
      </div>
    );
  }
}

export default SegmentedToggle;
