import { getStylableState } from '../../../test/utils/stylable-uni-testkit';
import toggleStyles from './ToggleIcon.st.css';

export const toggleIconPrivateDriverFactory = base => {
  const isSelected = async () =>
    (await getStylableState(base, toggleStyles, 'selected')) === 'true';
  return {
    exists: async () => await base.exists(),
    childExists: async selector => await base.$(selector).exists(),
    isSelected: async () => await isSelected(),
    click: async () => await base.click(),
  };
};
