import React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';

import SegmentedToggle from './SegmentedToggle';
import { segmentedTogglePrivateDriverFactory } from './SegmentedToggle.driver.private';

describe('SegmentedToggle', () => {
  const createDriver = createUniDriverFactory(
    segmentedTogglePrivateDriverFactory,
  );

  it('should render', async () => {
    const driver = createDriver(<SegmentedToggle />);
    expect(await driver.exists()).toBeTruthy();
  });
});
