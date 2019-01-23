export const toggleButtonPrivateDriverFactory = base => {
  return {
    exists: async () => await base.exists(),
    getToggleText: async () => await base.text(),
    prefixExists: async () => await base.$('[data-hook="prefix"]').exists(),
    toggle: async () => await base.$('input').click(),
  };
};
