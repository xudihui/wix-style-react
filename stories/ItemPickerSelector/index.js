import React from 'react';

import Markdown from 'wix-storybook-utils/Markdown';
import CodeExample from 'wix-storybook-utils/CodeExample';

import { storiesOf } from '@storybook/react';

import Example from './Example';
import ExampleRaw from '!raw-loader!./Example';

import Readme from './README.md';

storiesOf('Snippets', module).add('ItemPickerSelector', () => (
  <div>
    <Markdown source={Readme} />
    <div>
      <CodeExample
        title="Item picker selector as contact picker example"
        code={ExampleRaw}
      >
        <Example />
      </CodeExample>
    </div>
  </div>
));
