import React from 'react';

import CodeExample from 'wix-storybook-utils/dist/src/CodeExample';
import { SKIN } from 'wix-ui-backoffice/dist/src/components/StylableCounterBadge/constants';
import { Email } from 'wix-ui-icons-common';

import { storySettings } from './storySettings';
import { CounterBadge } from '../../src';
import ExampleCounterBadgesRaw from '!raw-loader!./ExampleCounterBadges';
import ExampleCounterBadges from './ExampleCounterBadges';

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,
  component: CounterBadge,
  componentPath: '../../src/CounterBadge/index.js',

  componentProps: {
    children: '1',
    skin: SKIN.general,
  },
  exampleProps: {
    children: [
      { label: '12', value: '12' },
      { label: '1', value: '1' },
      { label: 'Icon (Email)', value: <Email /> },
    ],
    skin: Object.keys(SKIN).map(value => ({ label: value, value })),
  },
  hiddenProps: ['dataHook'],
  examples: (
    <div>
      <CodeExample title="Variations" code={ExampleCounterBadgesRaw}>
        <ExampleCounterBadges />
      </CodeExample>
    </div>
  ),
};
