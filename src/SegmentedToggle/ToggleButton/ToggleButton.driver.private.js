import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';

export const toggleButtonPrivateDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),
    getToggleText: async () => await base.text(),
    prefixExists: async () => await base.$('[data-hook="prefix"]').exists(),
  };
};
