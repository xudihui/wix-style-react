import React from 'react';
import { storySettings } from './storySettings';
import {
  tab,
  liveCode,
  playground,
  api,
  testkit,
  description,
  importExample,
} from 'wix-storybook-utils/Sections';

import SegmentedToggle from '../../src/SegmentedToggle';
import { Layout, Cell } from '../../src/Layout';
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
        ...[
          {
            title: 'With text and prefix',
            source: examples.textAndIcon,
          },
          {
            title: 'Icon only',
            source: examples.icon,
          },
          {
            title: 'Text only',
            source: examples.text,
          },
        ].map(({ source, title }) =>
          liveCode({
            source,
            title,
            components: { SegmentedToggle, Layout, Cell, LockLocked },
          }),
        ),
      ],
    }),
    tab({
      title: 'Playground',
      sections: [playground()],
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
