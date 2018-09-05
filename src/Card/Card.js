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

const CONTENT_SPLIT = 'CONTENT_SPLIT';

const addKey = (child, key) => React.cloneElement(child, {key});
const ensureArray = a => (Array.isArray(a) ? a : [a]);

class Card extends React.Component {
  static displayName = 'Card';

  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.func,
      PropTypes.arrayOf(PropTypes.func)
    ]),
    stretchVertically: PropTypes.bool,
    dataHook: PropTypes.string,
    isOpen: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.bool),
      PropTypes.bool
    ])
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

  constructor(props) {
    super(props);

    const isOpen = typeof this.props.isOpen !== 'undefined' ?
      ensureArray(this.props.isOpen) :
      ensureArray(this.props.children).map(() => true);

    this.state = {
      open: isOpen.reduce((acc, curr, index) => {
        acc[index] = curr;
        return acc;
      }, {})
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.isOpen !== prevProps.isOpen) {
      const isOpen = ensureArray(this.props.isOpen);

      this.setState({
        open: isOpen.reduce((acc, curr, index) => {
          acc[index] = curr;
          return acc;
        }, {})
      });
    }
  }

  getChildrenInterface = key => ({
    isOpen: this.state.open[key],
    toggle: () =>
      this.setState({
        open: {
          ...this.state.open,
          [key]: !this.state.open[key]
        }
      }),
    CONTENT_SPLIT
  });

  renderChildren = (childrenProp, key) => {
    const invokedChildrenProp = childrenProp(this.getChildrenInterface(key));

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
      child => child === CONTENT_SPLIT
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
            isOpened={this.state.open[key]}
            children={collapsableChildren}
            />
        </div>
      );
    }

    return adjustedChildren.filter(child => child !== CONTENT_SPLIT);
  };

  render() {
    const {stretchVertically, children, dataHook} = this.props;

    return (
      <div
        data-hook={dataHook}
        className={classnames(styles.card, {
          [styles.stretchVertically]: stretchVertically
        })}
        children={ensureArray(children).map(
          (child, key) =>
            typeof child === 'function' ?
              this.renderChildren(child, key) :
              child
        )}
        />
    );
  }
}

export default Card;
