import React from 'react';
import Card from './Card';
import {mount} from 'enzyme';

import {cardTestkitFactory} from '../../testkit';
import {cardTestkitFactory as enzymeCardTestkitFactory} from '../../testkit/enzyme';

import {
  isTestkitExists,
  isEnzymeTestkitExists
} from '../../test/utils/testkit-sanity';

describe('Card', () => {
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
