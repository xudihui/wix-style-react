import React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { uniTestkitFactoryCreator } from 'wix-ui-test-utils/vanilla';

import SegmentedToggle from './SegmentedToggle';
import { segmentedTogglePrivateDriverFactory } from './SegmentedToggle.driver.private';
import { toggleButtonPrivateDriverFactory } from './ToggleButton/ToggleButton.driver.private';

describe('SegmentedToggle', () => {
  const dataHook = 'clicked-button1';

  const createDriver = createUniDriverFactory(
    segmentedTogglePrivateDriverFactory,
  );

  const createToggleDriver = obj =>
    uniTestkitFactoryCreator(toggleButtonPrivateDriverFactory)(obj);

  const Segmented = props => (
    <SegmentedToggle {...props}>
      <SegmentedToggle.Button dataHook={dataHook} value="short">
        Short
      </SegmentedToggle.Button>
    </SegmentedToggle>
  );

  describe('`onClick` handler should return', () => {
    it('when clicked with a mouse', async () => {
      const onClick = jest.fn();

      const driver = createDriver(<Segmented onClick={onClick} />);
      const element = await driver.element();

      const toggleDriver = createToggleDriver({
        wrapper: element,
        dataHook: dataHook,
      });

      await toggleDriver.click();
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('selected item value as second argument', async () => {
      const onClick = jest.fn();

      const driver = createDriver(<Segmented onClick={onClick} />);
      const element = await driver.element();

      const toggleDriver = createToggleDriver({
        wrapper: element,
        dataHook: dataHook,
      });

      await toggleDriver.click();

      expect(onClick.mock.calls[0][1]).toBe('short');
    });
  });
});
