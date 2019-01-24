import { getStylableState } from '../../../test/utils/stylable-uni-testkit';
import toggleStyles from './ToggleButton.st.css';

export const toggleButtonPrivateDriverFactory = base => {
  const isChecked = () =>
    getStylableState(base, toggleStyles, 'checked') === 'true';
  return {
    exists: async () => await base.exists(),
    getToggleText: async () => await base.text(),
    prefixExists: async () => await base.$('[data-hook="prefix"]').exists(),
    isChecked: async () => await isChecked(),
    click: async () => await base.click(),
  };
};
