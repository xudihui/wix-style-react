import React from 'react';
import { storySettings } from './storySettings';

import { SegmentedToggle, ToggleButton } from '../../src/SegmentedToggle';
import LockLocked from 'wix-style-react/new-icons/LockLocked';
import LockUnlocked from 'wix-style-react/new-icons/LockUnlocked';

export default {
  category: storySettings.kind,
  storyName: storySettings.storyName,

  component: SegmentedToggle,
  componentPath: '../../src/SegmentedToggle/SegmentedToggle.js',

  componentProps: {
    dataHook: storySettings.dataHook,
    children: [
      <ToggleButton prefixIcon={<LockLocked />} selected>
        Locked
      </ToggleButton>,
      <ToggleButton prefixIcon={<LockUnlocked />}>Unlocked</ToggleButton>,
    ],
  },
};
