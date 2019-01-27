import React from 'react';
import Markdown from 'wix-storybook-utils/dist/src/Markdown';

import { Cell, Layout } from '../../../src';
import LiveCodeExample from '../../utils/Components/LiveCodeExample';
import createInputExample from './createInputExample';

export default () => {
  return (
    <div>
      <Markdown source="## Loader" />
      <Layout>
        <Cell span={4}>
          <LiveCodeExample
            compact
            title="Left to right"
            initialCode={createInputExample({ status: 'loading' })}
          />
        </Cell>
        <Cell span={4}>
          <LiveCodeExample
            compact
            title="Right to left"
            initialCode={createInputExample({ status: 'loading', rtl: true })}
          />
        </Cell>
        <Cell span={4}>
          <LiveCodeExample
            compact
            title="Loader with tooltip"
            initialCode={createInputExample({
              status: 'loading',
              statusMessage: 'I am a message',
            })}
          />
        </Cell>
      </Layout>
    </div>
  );
};
