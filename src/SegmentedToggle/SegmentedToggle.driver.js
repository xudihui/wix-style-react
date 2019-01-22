import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';

export const segmentedToggleDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),
  };
};
