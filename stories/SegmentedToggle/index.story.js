import React from 'react';
import { storySettings } from './storySettings';
import {
  tab,
  liveCode,
  api,
  testkit,
  description,
  importExample,
} from 'wix-storybook-utils/Sections';

import SegmentedToggle from '../../src/SegmentedToggle';
import LockLocked from 'wix-style-react/new-icons/LockLocked';
import LockUnlocked from 'wix-style-react/new-icons/LockUnlocked';

import * as examples from './examples';

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
        Very long fancy and hardly fitting tab
      </SegmentedToggle.Button>,
    ],
  },

  sections: [
    tab({
      title: 'Description',
      sections: [
        description({
          text: `🍫 SegmentedToggle is a view group containing typically three or more buttons that can be toggled on and off. These buttons visibly change to indicate whether an option is active or inactive.`,
        }),
        importExample({
          source:
            "import SegmentedToggle from 'wix-style-react/SegmentedToggle';",
        }),
        description({
          text: `🙋 Component includes compound components: Button and Icon.  With following components user can build 3 types of SegmentedToggles:`,
        }),

        description({
          text: `With following components user can build 3 types of SegmentedToggles:`,
        }),

        description({
          title: `Text & Icon`,
        }),

        liveCode({
          source: examples.textAndIcon,
          components: { SegmentedToggle, LockLocked },
        }),

        description({
          title: `Text`,
        }),

        liveCode({
          source: examples.text,
          components: { SegmentedToggle, LockLocked },
        }),

        description({
          title: `Icon`,
        }),

        liveCode({
          source: examples.icon,
          components: { SegmentedToggle, LockLocked },
        }),
      ],
    }),
    tab({
      title: 'API',
      sections: [api()],
    }),

    tab({
      title: 'Testkit',
      sections: [testkit()],
    }),
  ],
};
