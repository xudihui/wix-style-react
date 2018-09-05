import React from 'react';
import Card from './Card';
import {mount} from 'enzyme';

import Header from './Header';
import Content from './Content';
import Divider from './Divider';
import LinkHeader from './LinkHeader';
import ButtonHeader from './ButtonHeader';
import CollapsedHeader from './CollapsedHeader';

import cardDriverFactory from './Card.driver';
import {headerTestkitFactory} from '../../testkit/enzyme';
import {createDriverFactory} from 'wix-ui-test-utils/driver-factory';
import {cardTestkitFactory} from '../../testkit';
import {cardTestkitFactory as enzymeCardTestkitFactory} from '../../testkit/enzyme';
import {requestAnimationFramePolyfill} from '../../testkit/polyfills';

import {
  isTestkitExists,
  isEnzymeTestkitExists
} from '../../test/utils/testkit-sanity';

const createDriver = createDriverFactory(cardDriverFactory);

const childrenMock = ({CONTENT_SPLIT, toggle}) => [
  /* eslint-disable */
  <div data-hook="header" onClick={toggle}>
    header
  </div>,
  CONTENT_SPLIT,
  <div data-hook="content">content</div>,
  <div data-hook="content 2">content 2</div>
  /* eslint-enable */
];

const secondChildrenMock = ({CONTENT_SPLIT, toggle}) => [
  /* eslint-disable */
  <div data-hook="second-header" onClick={toggle}>
    header
  </div>,
  CONTENT_SPLIT,
  <div data-hook="second-content">content</div>,
  <div data-hook="second-content 2">content 2</div>
  /* eslint-enable */
];

describe('Card', () => {
  beforeAll(() => requestAnimationFramePolyfill.install());

  [
    ['Header', Header],
    ['Content', Content],
    ['Divider', Divider],
    ['LinkHeader', LinkHeader], // DEPRECATED
    ['ButtonHeader', ButtonHeader], // DEPRECATED
    ['CollapsedHeader', CollapsedHeader] // DEPRECATED
  ].map(([component, implementation]) =>
    it(`should expose \`${component}\``, () =>
      expect(Card[component]).toEqual(implementation))
  );

  describe('`children` prop', () => {
    describe('when string', () => {
      it('should render it', () => {
        const driver = createDriver(<Card children="hello"/>);
        expect(driver.getChildren()).toMatch('hello');
      });
    });

    describe('when component', () => {
      it('should render it', () => {
        const driver = createDriver(<Card children={<div>hello</div>}/>);
        expect(driver.getChildren()).toEqual('<div>hello</div>');
      });
    });

    describe('when function', () => {
      it('should invoke it with correct api', () => {
        const children = jest.fn();
        createDriver(<Card children={children}/>);
        expect(children.mock.calls[0][0]).toEqual(
          expect.objectContaining({
            toggle: expect.any(Function),
            isOpen: expect.any(Boolean),
            CONTENT_SPLIT: 'CONTENT_SPLIT'
          })
        );
      });

      it('should invoke it with correct isOpen value', () => {
        const children = jest.fn(({toggle, CONTENT_SPLIT}) => [
          /* eslint-disable */
          <div data-hook="header" onClick={toggle}>
            header
          </div>,
          CONTENT_SPLIT,
          <div>hello</div>
          /* eslint-enable */
        ]);

        const wrapper = mount(<Card children={children}/>);
        expect(children.mock.calls[0][0].isOpen).toEqual(true);

        // click to close
        wrapper
          .find('[data-hook="card-visible-children"]')
          .children()
          .simulate('click');

        expect(children.mock.calls[1][0].isOpen).toEqual(false);
      });

      it('should render returned string', () => {
        const children = () => 'hello';
        const driver = createDriver(<Card children={children}/>);
        expect(driver.getChildren()).toMatch('hello');
      });

      it('should render returned components', () => {
        const children = () => (
          <div>
            <span>hey there</span>
          </div>
        );
        const driver = createDriver(<Card children={children}/>);
        expect(driver.getChildren()).toEqual(
          '<div><span>hey there</span></div>'
        );
      });

      it('should render returned list of components', () => {
        const wrapper = mount(<Card children={childrenMock}/>);

        ['content', 'content 2'].forEach(hook =>
          expect(wrapper.find(`[data-hook="${hook}"]`).length).toEqual(1)
        );
      });

      it('should not render HEADER_DIVIDER', () => {
        const wrapper = mount(<Card children={childrenMock}/>);
        ['header', 'content', 'content 2'].forEach(hook =>
          expect(wrapper.find(`[data-hook="${hook}"]`).length).toEqual(1)
        );
      });

      it('should not render below HEADER_DIVIDER after toggle', () => {
        const wrapper = mount(<Card children={childrenMock}/>);

        expect(
          wrapper.find(`[data-hook="card-visible-children"]`).length
        ).toEqual(1);

        // click to close
        wrapper
          .find('[data-hook="card-visible-children"]')
          .children()
          .simulate('click');

        expect(wrapper.find(`[data-hook="header"]`).length).toEqual(1);

        ['content', 'content 2'].forEach(hook =>
          expect(wrapper.find(`[data-hook="${hook}"]`).length).toEqual(0)
        );

        // click to open
        wrapper
          .find('[data-hook="card-visible-children"]')
          .children()
          .simulate('click');

        ['content', 'content 2'].forEach(hook =>
          expect(wrapper.find(`[data-hook="${hook}"]`).length).toEqual(1)
        );
      });

      it('should support multiple functions', () => {
        const wrapper = mount(
          <Card>
            {childrenMock}
            {secondChildrenMock}
          </Card>
        );

        expect(
          wrapper.find(`[data-hook="card-visible-children"]`).length
        ).toEqual(2);

        // click to close
        wrapper.find('[data-hook="second-header"]').simulate('click');

        expect(wrapper.find(`[data-hook="header"]`).length).toEqual(1);
        expect(wrapper.find(`[data-hook="second-header"]`).length).toEqual(1);

        [
          ['content', 1],
          ['content 2', 1],
          ['second-content', 0],
          ['second-content 2', 0]
        ].forEach(([hook, expectation]) =>
          expect(wrapper.find(`[data-hook="${hook}"]`).length).toEqual(
            expectation
          )
        );

        // click to open
        wrapper.find('[data-hook="second-header"]').simulate('click');

        [
          ['content', 1],
          ['content 2', 1],
          ['second-content', 1],
          ['second-content 2', 1]
        ].forEach(([hook, expectation]) =>
          expect(wrapper.find(`[data-hook="${hook}"]`).length).toEqual(
            expectation
          )
        );
      });

      describe('with first returned component being Card.Header', () => {
        it('should set `withoutDivider` prop', () => {
          const childrenMock = () => (
            <Card.Header title="hello required title" dataHook="header"/>
          );

          const wrapper = mount(<Card children={childrenMock}/>);

          const cardHeaderTestkit = headerTestkitFactory({
            wrapper,
            dataHook: 'header'
          });

          expect(cardHeaderTestkit.hasDivider()).toEqual(false);
        });
      });
    });
  });

  describe('`isOpen` prop', () => {
    it('should not display content below CONTENT_SPLIT when false', () => {
      const wrapper = mount(<Card isOpen={false} children={childrenMock}/>);
      ['content', 'content 2'].forEach(hook =>
        expect(wrapper.find(`[data-hook="${hook}"]`).length).toEqual(0)
      );
    });

    it('should support multiple values', () => {
      const wrapper = mount(
        <Card isOpen={[true, false]}>
          {childrenMock}
          {secondChildrenMock}
        </Card>
      );

      [
        ['content', 1],
        ['content 2', 1],
        ['second-content', 0],
        ['second-content 2', 0]
      ].forEach(([hook, expectation]) =>
        expect(wrapper.find(`[data-hook="${hook}"]`).length).toEqual(
          expectation
        )
      );
    });
  });

  describe('testkit', () => {
    it('should exist', () =>
      expect(isTestkitExists(<Card/>, cardTestkitFactory)).toBe(true));
  });

  describe('enzyme testkit', () => {
    it('should exist', () =>
      expect(
        isEnzymeTestkitExists(<Card/>, enzymeCardTestkitFactory, mount)
      ).toBe(true));
  });
});
