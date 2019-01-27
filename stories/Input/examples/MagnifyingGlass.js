import React from 'react';
import Markdown from 'wix-storybook-utils/dist/src/Markdown';

import { Cell, Layout } from '../../../src';
import LiveCodeExample from '../../utils/Components/LiveCodeExample';
import createInputExample from './createInputExample';

export default () => {
  return (
    <div>
      <Markdown source="## MagnifyingGlass" />
      <Layout>
        <Cell span={4}>
          <LiveCodeExample
            compact
            title="Left to right"
            initialCode={createInputExample({ magnifyingGlass: true })}
          />
        </Cell>
        <Cell span={4}>
          <LiveCodeExample
            compact
            title="Right to left"
            initialCode={createInputExample({
              magnifyingGlass: true,
              rtl: true,
            })}
          />
        </Cell>
        <Cell span={4}>
          <LiveCodeExample
            compact
            title="With unit"
            initialCode={createInputExample({
              magnifyingGlass: true,
              unit: '$',
            })}
          />
        </Cell>
      </Layout>
      <Layout>
        <Cell span={4}>
          <LiveCodeExample
            compact
            title="With error"
            initialCode={createInputExample({
              magnifyingGlass: true,
              error: true,
            })}
          />
        </Cell>
        <Cell span={4}>
          <LiveCodeExample
            compact
            title="With unit & error"
            initialCode={createInputExample({
              theme: 'normal',
              magnifyingGlass: true,
              error: true,
              unit: '$',
            })}
          />
        </Cell>
        <Cell span={4}>
          <LiveCodeExample
            compact
            title="Disabled"
            initialCode={createInputExample({
              theme: 'normal',
              magnifyingGlass: true,
              disabled: true,
              placeholder: 'Disabled',
            })}
          />
        </Cell>
      </Layout>
    </div>
  );
};
