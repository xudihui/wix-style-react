import React from 'react';
import Markdown from 'wix-storybook-utils/dist/src/Markdown';

import { Cell, Layout } from '../../../src';
import LiveCodeExample from '../../utils/Components/LiveCodeExample';
import createInputExample from './createInputExample';

export default () => {
  return (
    <div>
      <Markdown source="## Unit" />
      <Layout>
        <Cell span={4}>
          <LiveCodeExample
            compact
            title="Left to right"
            initialCode={createInputExample({ unit: '#' })}
          />
        </Cell>
        <Cell span={4}>
          <LiveCodeExample
            compact
            title="Right to left"
            initialCode={createInputExample({ unit: '$', rtl: true })}
          />
        </Cell>
        <Cell span={4}>
          <LiveCodeExample
            compact
            title="With error"
            initialCode={createInputExample({
              status: 'error',
              unit: '$',
            })}
          />
        </Cell>
      </Layout>
    </div>
  );
};
