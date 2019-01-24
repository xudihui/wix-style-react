import React from 'react';
import { storySettings } from './storySettings';

import SegmentedToggle from '../../src/SegmentedToggle';
import LockLocked from 'wix-style-react/new-icons/LockLocked';
import LockUnlocked from 'wix-style-react/new-icons/LockUnlocked';

export default {
  category: storySettings.kind,
  storyName: storySettings.storyName,

  component: SegmentedToggle,
  componentPath: '../../src/SegmentedToggle/SegmentedToggle.js',

  componentProps: {
    dataHook: storySettings.dataHook,
    defaultSelected: 'locked',
    children: [
      <SegmentedToggle.Button value="locked" prefixIcon={<LockLocked />}>
        Locked
      </SegmentedToggle.Button>,
      <SegmentedToggle.Button value="unlocked" prefixIcon={<LockUnlocked />}>
        Unlocked
      </SegmentedToggle.Button>,
    ],
  },
};
