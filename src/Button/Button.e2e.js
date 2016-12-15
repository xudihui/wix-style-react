import eyes from 'eyes.it';
import {protractorButtonTestkitFactory} from './testkit/Button.protractor';

describe('Button', () => {
  eyes.fit('should click a button', () => {

    const driver = protractorButtonTestkitFactory({id: 'main-example'});

    browser.get('iframe.html?selectedKind=Components&selectedStory=Button');

    const EC = protractor.ExpectedConditions;
    browser.wait(EC.visibilityOf(driver.element()), 15000);

    driver.click();
    expect(driver.getButtonText()).toBe('clicked!');
  });
});
