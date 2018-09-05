import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Collapse from 'react-collapse';

import Content from './Content';
import Header from './Header';
import Divider from './Divider';
import LinkHeader from './LinkHeader';
import ButtonHeader from './ButtonHeader';
import CollapsedHeader from './CollapsedHeader';

import styles from './Card.scss';

const HEADER_DIVIDER = 'HEADER_DIVIDER';

const addKey = (child, key) => React.cloneElement(child, {key});

class Card extends React.Component {
  static displayName = 'Card';

  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    stretchVertically: PropTypes.bool,
    dataHook: PropTypes.string
  };

  static defaultProps = {
    stretchVertically: false
  };

  static Header = Header;
  static Content = Content;
  static Divider = Divider;
  static LinkHeader = LinkHeader; // DEPRECATED
  static ButtonHeader = ButtonHeader; // DEPRECATED
  static CollapsedHeader = CollapsedHeader; // DEPRECATED

  state = {
    collapsed: false
  };

  getChildrenInterface = () => ({
    isOpen: !this.state.collapsed,
    toggle: () => this.setState({collapsed: !this.state.collapsed}),
    headerDivider: HEADER_DIVIDER
  });

  renderChildren = childrenProp => {
    const invokedChildrenProp = childrenProp(this.getChildrenInterface());

    const children = Array.isArray(invokedChildrenProp) ?
      invokedChildrenProp :
      [invokedChildrenProp];

    const adjustedChildren = children
      .filter(i => i) // remove falsies
      .map(child => {
        if (child.type && child.type.displayName === 'Card.Header') {
          return React.cloneElement(child, {withoutDivider: true});
        }
        return child;
      });

    const dividerIndex = adjustedChildren.findIndex(
      child => child === HEADER_DIVIDER
    );

    if (dividerIndex !== -1) {
      const visibleChildren = adjustedChildren
        .slice(0, dividerIndex)
        .map(addKey);

      const collapsableChildren = adjustedChildren
        .slice(dividerIndex + 1, adjustedChildren.length)
        .map(addKey);

      return (
        <div>
          <div data-hook="card-visible-children">{visibleChildren}</div>

          <Collapse
            isOpened={!this.state.collapsed}
            children={collapsableChildren}
            />
        </div>
      );
    }

    return adjustedChildren.filter(child => child !== HEADER_DIVIDER);
  };

  render() {
    const {stretchVertically, children, dataHook} = this.props;

    return (
      <div
        data-hook={dataHook}
        className={classnames(styles.card, {
          [styles.stretchVertically]: stretchVertically
        })}
        children={
          typeof children === 'function' ?
            this.renderChildren(children) :
            children
        }
        />
    );
  }
}

export default Card;
