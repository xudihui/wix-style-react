import React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';

import ToggleButton from './ToggleButton';
import { toggleButtonPrivateDriverFactory } from './ToggleButton.driver.private';

describe('SegmentedToggle', () => {
  const createDriver = createUniDriverFactory(toggleButtonPrivateDriverFactory);

  it('should render', async () => {
    const driver = createDriver(<ToggleButton />);
    expect(await driver.exists()).toBeTruthy();
  });

  it('should be controlled', async () => {
    const driver = createDriver(<ToggleButton />);
    expect(await driver.isChecked()).toBe(false);
    await driver.click();
    expect(await driver.isChecked()).toBe(false);
  });

  describe(`'children' prop`, () => {
    it('should render string', async () => {
      const text = 'Short option';
      const driver = createDriver(<ToggleButton children={text} />);
      expect(await driver.getToggleText()).toBe(text);
    });
  });

  describe(`'prefixIcon' prop`, () => {
    const prefix = <div data-hook="prefix">prefix</div>;
    it(`'prefixIcon' prop should render 'prefix' when given`, async () => {
      const driver = createDriver(<ToggleButton prefixIcon={prefix} />);
      expect(await driver.prefixExists()).toBeTruthy();
    });
  });

  // TODO for some reason Simulate click or change does not trigger input.
  // describe(`'onChange' prop`, () => {
  //   it(`should return`, async () => {
  //     const onChange = jest.fn();
  //     const driver = createDriver(
  //       <ToggleButton value="name" name="name" onClick={onChange} />,
  //     );
  //     await driver.click();
  //     expect(onChange).toBeCalled();
  //   });
  // });
});
