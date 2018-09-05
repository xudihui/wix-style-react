import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const Divider = ({dataHook}) => (
  <div data-hook={dataHook} className={styles.root}/>
);

Divider.propTypes = {
  dataHook: PropTypes.string
};

Divider.displayName = 'Divider';

export default Divider;
