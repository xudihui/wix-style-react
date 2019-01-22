import {
  createStoryUrl,
  waitForVisibilityOf,
  scrollToElement,
} from 'wix-ui-test-utils/protractor';

import { eyesItInstance } from '../../test/utils/eyes-it';
import { segmentedToggleTestkitFactory } from '../../testkit/protractor';
import { storySettings } from '../../stories/SegmentedToggle/storySettings';

const eyes = eyesItInstance();

describe('SegmentedToggle', () => {
  const storyUrl = createStoryUrl({
    kind: storySettings.category,
    story: storySettings.storyName,
  });

  const createDriver = async (dataHook = storySettings.dataHook) => {
    const driver = segmentedToggleTestkitFactory({ dataHook });

    await waitForVisibilityOf(
      await driver.element(),
      `Cannot find <SegmentedToggle/> component with dataHook of ${dataHook}`,
    );

    await scrollToElement(await driver.element());

    return driver;
  };

  beforeAll(async () => {
    await browser.get(storyUrl);
  });

  eyes.it('should render', async () => {
    await createDriver();
  });
});
