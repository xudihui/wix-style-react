import { segmentedToggleDriverFactory as publicDriverFactory } from './SegmentedToggle.driver';

export const segmentedTogglePrivateDriverFactory = base => {
  return {
    ...publicDriverFactory(base),
  };
};
