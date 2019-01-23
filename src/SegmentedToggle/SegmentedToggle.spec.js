import React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { uniTestkitFactoryCreator } from 'wix-ui-test-utils/vanilla';

import SegmentedToggle from './SegmentedToggle';
import { segmentedTogglePrivateDriverFactory } from './SegmentedToggle.driver.private';
import { toggleButtonPrivateDriverFactory } from './ToggleButton/ToggleButton.driver.private';

describe('SegmentedToggle', () => {
  const dataHook1 = 'clicked-radio1';
  const dataHook2 = 'clicked-radio2';

  const createDriver = createUniDriverFactory(
    segmentedTogglePrivateDriverFactory,
  );

  const createToggleDriver = obj =>
    uniTestkitFactoryCreator(toggleButtonPrivateDriverFactory)(obj);

  const Segmented = props => (
    <SegmentedToggle {...props}>
      <SegmentedToggle.Button dataHook={dataHook1} value="short">
        Short
      </SegmentedToggle.Button>
      <SegmentedToggle.Button dataHook={dataHook2} value="long">
        Long
      </SegmentedToggle.Button>
    </SegmentedToggle>
  );

  it('should render', async () => {
    const driver = createDriver(<Segmented />);
    expect(await driver.exists()).toBeTruthy();
  });

  it('`onChange` handler should return checked item', async () => {
    const onChange = jest.fn();

    const driver = createDriver(<Segmented onChange={onChange} />);
    const element = await driver.element();

    const toggleDriver = createToggleDriver({
      wrapper: element,
      dataHook: dataHook1,
    });

    await toggleDriver.toggle();

    expect(onChange).toBeCalled();
  });
});
