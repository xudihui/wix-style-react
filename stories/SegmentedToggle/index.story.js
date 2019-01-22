import React from 'react';
import { storySettings } from './storySettings';

import { SegmentedToggle, ToggleButton } from '../../src/SegmentedToggle';

export default {
  category: storySettings.kind,
  storyName: storySettings.storyName,

  component: SegmentedToggle,
  componentPath: '../../src/SegmentedToggle/SegmentedToggle.js',

  componentProps: {
    dataHook: storySettings.dataHook,
    children: [<ToggleButton />, <ToggleButton />],
  },

  exampleProps: {
    // Put here presets of props, for more info:
    // https://github.com/wix/wix-ui/blob/master/packages/wix-storybook-utils/docs/usage.md#using-list
  },
};
