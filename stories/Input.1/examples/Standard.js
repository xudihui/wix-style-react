import React from 'react';
import Markdown from 'wix-storybook-utils/dist/src/Markdown';

import { Cell, Layout } from '../../../src';
import LiveCodeExample from '../../utils/Components/LiveCodeExample';
import createInputExample from './createInputExample';

export default () => {
  return (
    <div>
      <Markdown source="## Standard" />
      <Layout>
        <Cell span={4}>
          <LiveCodeExample
            compact
            title="Input"
            initialCode={createInputExample({})}
          />
        </Cell>
        <Cell span={4}>
          <LiveCodeExample
            compact
            title="With clear button"
            initialCode={createInputExample({
              clearButton: true,
              placeholder: 'Write some text...',
            })}
          />
        </Cell>
        <Cell span={4}>
          <LiveCodeExample
            compact
            title="Focus"
            initialCode={createInputExample({ forceFocus: true })}
          />
        </Cell>
      </Layout>
      <Layout>
        <Cell span={4}>
          <LiveCodeExample
            compact
            title="Hover"
            initialCode={createInputExample({ forceHover: true })}
          />
        </Cell>
        <Cell span={4}>
          <LiveCodeExample
            compact
            title="Placeholder"
            initialCode={createInputExample({ placeholder: 'Search...' })}
          />
        </Cell>
        <Cell span={4}>
          <LiveCodeExample
            compact
            title="Disabled"
            initialCode={createInputExample({
              disabled: true,
              placeholder: 'Disabled',
            })}
          />
        </Cell>
      </Layout>
    </div>
  );
};
