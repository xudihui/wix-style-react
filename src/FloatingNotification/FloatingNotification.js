import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './FloatingNotification.scss';

import Text from '../Text';
import X from '../new-icons/X';

export const NOTIFICATION_TYPES = {
  STANDARD: 'standard',
  SUCCESS: 'success',
  DESTRUCTIVE: 'destructive',
  WARNING: 'warning',
  PREMIUM: 'premium',
};

class FloatingNotification extends React.PureComponent {
  static displayName = 'FloatingNotification';

  static propTypes = {
    dataHook: PropTypes.string,

    /** the type of notification */
    type: PropTypes.oneOf(Object.values(NOTIFICATION_TYPES)),

    /** close button click handler - if exists shows X button */
    onClose: PropTypes.func,

    /** A placeholder for a text button to appear after content */
    textButton: PropTypes.node,

    /** A placeholder for a button to appear after content/textButton */
    button: PropTypes.node,

    /** An icon element to appear before content */
    icon: PropTypes.node,

    /** The text content of the notification */
    text: PropTypes.string,
  };

  static defaultProps = {
    type: NOTIFICATION_TYPES.STANDARD,
  };

  render() {
    const { dataHook, type } = this.props;
    const icon = this._getIcon();
    const content = this._getContent();
    const textButton = this._getTextButton();
    const button = this._getButton();
    const close = this._getClose();

    return (
      <div className={classNames(styles.root, styles[type])} data-hook={dataHook}>
        {icon}
        {content}
        {textButton}
        {button}
        <div className={styles.gap}/>
        {close}
      </div>
    );
  }

  _getIcon() {
    const { icon } = this.props;
    return icon ? <div>{icon}</div> : null;
  }

  _getContent() {
    const { text } = this.props;
    return <Text size={'small'} ellipsis>{text}</Text>;
  }

  _getTextButton() {
    const { textButton } = this.props;
    return textButton ? <div>{textButton}</div> : null;
  }

  _getButton() {
    const { button } = this.props;
    return button ? <div>{button}</div> : null;
  }

  _getClose() {
    const { onClose } = this.props;
    return onClose ? <div className={styles.close} onClick={onClose}><X size={16}/></div> : null;
  }
}

export default FloatingNotification;
