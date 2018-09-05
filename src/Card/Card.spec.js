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
        expect(driver.getChildren()).toEqual('hello');
      });
    });

    describe('when component', () => {
      it('should render it', () => {
        const driver = createDriver(<Card children={<div>hello</div>}/>);
        expect(driver.getChildren()).toEqual('<div>hello</div>');
      });
    });

    describe('when function', () => {
      const childrenMock = ({headerDivider, toggle}) => [
        /* eslint-disable */
        <div data-hook="header" onClick={toggle}>
          header
        </div>,
        headerDivider,
        <div data-hook="content">content</div>,
        <div data-hook="content 2">content 2</div>
        /* eslint-enable */
      ];

      it('should invoke it with correct api', () => {
        const children = jest.fn();
        createDriver(<Card children={children}/>);
        expect(children.mock.calls[0][0]).toEqual(
          expect.objectContaining({
            toggle: expect.any(Function),
            isOpen: expect.any(Boolean),
            headerDivider: 'HEADER_DIVIDER'
          })
        );
      });

      it('should invoke it with correct isOpen value', () => {
        const children = jest.fn(({toggle, headerDivider}) => [
          /* eslint-disable */
          <div data-hook="header" onClick={toggle}>
            header
          </div>,
          headerDivider,
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
