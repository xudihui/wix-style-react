import { segmentedToggleDriverFactory as publicDriverFactory } from './SegmentedToggle.driver';

export const segmentedTogglePrivateDriverFactory = base => {
  return {
    ...publicDriverFactory(base),

    // Add here driver methods that considered "private"
  };
};
