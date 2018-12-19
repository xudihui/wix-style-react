import React from 'react';
import { oneOf, node, func, bool, string } from 'prop-types';
import { SKIN, TYPE, SIZE } from './constants';
import style from './Badge.st.css';
import Heading from '../Heading';

export class Badge extends React.PureComponent {
  static displayName = 'Badge';

  static defaultProps = {
    type: TYPE.solid,
    skin: SKIN.general,
    size: SIZE.medium,
    uppercase: true,
  };

  render() {
    const {
      children,
      dataHook,
      prefixIcon,
      suffixIcon,
      onClick,
      focusableOnFocus,
      focusableOnBlur,
      ...rest
    } = this.props;

    const focusableProps = onClick
      ? {
          onFocus: focusableOnFocus,
          onBlur: focusableOnBlur,
          tabIndex: 0,
        }
      : {};

    return (
      <div
        onClick={onClick}
        {...focusableProps}
        {...style('root', { clickable: !!onClick, ...rest }, this.props)}
        data-hook={dataHook}
      >
        {prefixIcon &&
          React.cloneElement(prefixIcon, { className: style.prefix })}
        <Heading appearance="H6" className={style.text}>
          {children}
        </Heading>
        {suffixIcon &&
          React.cloneElement(suffixIcon, { className: style.suffix })}
      </div>
    );
  }
}

Badge.propTypes = {
  /** sets the main color of the badge */
  type: oneOf([
    'general',
    'standard',
    'danger',
    'success',
    'neutral',
    'warning',
    'urgent',
    'neutralStandard',
    'neutralSuccess',
    'neutralDanger',
  ]),
  /** sets the look variant of the badge */
  skin: oneOf(['solid', 'outlined', 'transparent']),
  /** sets the size of the badge */
  size: oneOf(['medium', 'small']),
  /** a node to be displayed at the beginning, usually an icon */
  prefixIcon: node,
  /** a node to be displayed at the end, usually an icon */
  suffixIcon: node,
  /** called when the badge is clicked */
  onClick: func,
  /** makes the text be displayed in an upper case */
  uppercase: bool,

  focusableOnFocus: func,
  focusableOnBlur: func,

  className: string,
  dataHook: string,

  /** usually just text to be displayed */
  children: node.isRequired,
};
