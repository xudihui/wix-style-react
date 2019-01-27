import eyes from 'eyes.it';
import { inputTestkitFactory } from '../../testkit/protractor';
import {
  waitForVisibilityOf,
  scrollToElement,
} from 'wix-ui-test-utils/protractor';
import { createStoryUrl } from '../../test/utils/storybook-helpers';
import autoExampleDriver from 'wix-storybook-utils/AutoExampleDriver';

const storyUrl = createStoryUrl({
  kind: 'Components',
  story: 'Input',
  withExamples: false,
});
const storyUrlWithExamples = createStoryUrl({
  kind: 'Components',
  story: 'FormField',
  withExamples: true,
});
const driver = inputTestkitFactory({ dataHook: 'storybook-input' });

describe('Input', () => {
  describe('[AutoExample]', () => {
    beforeAll(() => browser.get(storyUrl));

    eyes.it('should render input component', async () => {
      await waitForVisibilityOf(
        driver.element(),
        'Cannot find Input component',
      );
    });

    eyes.it(
      'should render with correct text',
      async () => {
        await autoExampleDriver.setProps({ value: 'hello' });
        await waitForVisibilityOf(
          driver.element(),
          'Cannot find Input component',
        );
        expect(await driver.getText()).toEqual('hello');
      },
      { version: 'no maxlength' },
    );
  });
});
