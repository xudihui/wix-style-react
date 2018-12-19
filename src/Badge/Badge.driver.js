import { StylableDOMUtil } from '@stylable/dom-test-kit';
import style from './Badge.st.css';

export const badgeDriverFactory = ({ element, eventTrigger }) => {
  const stylableDOMUtil = new StylableDOMUtil(style, element);

  return {
    /** checks if element exists */
    exists: () => !!element,
    /** returns elements innerHtml */
    getContent: () => element.innerHTML,
    /** returns elements text */
    text: () => element.textContent,
    /** returns the badge type */
    getType: () => stylableDOMUtil.getStyleState(element, 'type'),
    /** returns the badge skin */
    getSkin: () => stylableDOMUtil.getStyleState(element, 'skin'),
    /** returns the badge size */
    getSize: () => stylableDOMUtil.getStyleState(element, 'size'),
    /** returns whether the badge in configured to make text uppercase */
    isUppercase: () =>
      stylableDOMUtil.getStyleState(element, 'uppercase') === 'true',
    hasClickCursor: () =>
      stylableDOMUtil.getStyleState(element, 'clickable') === 'true',
    getPrefixIcon: () => stylableDOMUtil.select('.prefix'),
    getSuffixIcon: () => stylableDOMUtil.select('.suffix'),
    /** simulate click on the badge */
    click: () => eventTrigger.click(element),
  };
};
