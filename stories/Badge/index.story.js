import React from 'react';
import CodeExample from 'wix-storybook-utils/CodeExample';

import ExampleBadgesRaw from '!raw-loader!./ExampleBadges';
import ExampleBadges from './ExampleBadges';

import { storySettings } from './storySettings';

import Badge from '../../src/Badge';
import Facebook from '../../src/new-icons/Facebook';
import ChevronDown from '../../src/new-icons/ChevronDown';

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,
  component: Badge,
  componentPath: '../../src/Badge/Badge.js',

  componentProps: {
    children: "I'm a badge!",
    skin: 'general',
    type: 'solid',
    size: 'medium',
    uppercase: true,
    dataHook: 'storybook-badge',
  },

  exampleProps: {
    prefixIcon: [<ChevronDown key="0" />, <Facebook key="1" />],
    suffixIcon: [<ChevronDown key="2" />, <Facebook key="3" />],
    onClick: () => alert('Badge Clicked'),
  },

  examples: (
    <div>
      <CodeExample title="Variations" code={ExampleBadgesRaw}>
        <ExampleBadges />
      </CodeExample>
    </div>
  ),
};
