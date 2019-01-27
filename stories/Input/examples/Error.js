import React from 'react';
import Markdown from 'wix-storybook-utils/dist/src/Markdown';

import { Cell, Layout } from '../../../src';
import LiveCodeExample from '../../utils/Components/LiveCodeExample';
import createInputExample from './createInputExample';

export default () => {
  return (
    <div>
      <Markdown source="## Error" />
      <Layout>
        <Cell span={4}>
          <LiveCodeExample
            compact
            title="Left to right"
            initialCode={createInputExample({ status: 'error' })}
          />
        </Cell>
        <Cell span={4}>
          <LiveCodeExample
            compact
            title="Right to left"
            initialCode={createInputExample({ status: 'error' })}
          />
        </Cell>
        <Cell span={4}>
          <LiveCodeExample
            compact
            title="Tooltip"
            initialCode={createInputExample({
              status: 'error',
              statusMessage: 'I am a message',
            })}
          />
        </Cell>
      </Layout>
      <Layout>
        <Cell span={4}>
          <LiveCodeExample
            compact
            title="Focus"
            initialCode={createInputExample({
              status: 'error',
              forceFocus: true,
            })}
          />
        </Cell>
        <Cell span={4}>
          <LiveCodeExample
            compact
            title="Hover"
            initialCode={createInputExample({
              status: 'error',
              forceHover: true,
            })}
          />
        </Cell>
        <Cell span={4}>
          <LiveCodeExample
            compact
            title="Disabled"
            initialCode={createInputExample({
              status: 'error',
              disabled: true,
            })}
          />
        </Cell>
      </Layout>
    </div>
  );
};
