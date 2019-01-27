import React from 'react';
import Markdown from 'wix-storybook-utils/dist/src/Markdown';

import { Cell, Layout } from '../../../src';
import LiveCodeExample from '../../utils/Components/LiveCodeExample';
import createInputExample from './createInputExample';

const defaultProps = {
  size: 'normal',
  magnifyingGlass: true,
  placeholder: 'They did not know it was impossible, so they did it!',
  unit: '$',
};

export default () => {
  return (
    <div>
      <Markdown source="## Sizes" />
      <Layout>
        <Cell span={4}>
          <LiveCodeExample
            compact
            title="Small"
            initialCode={createInputExample({ ...defaultProps, size: 'small' })}
          />
        </Cell>
        <Cell span={4}>
          <LiveCodeExample
            compact
            title="Normal"
            initialCode={createInputExample({
              ...defaultProps,
              size: 'normal',
            })}
          />
        </Cell>
        <Cell span={4}>
          <LiveCodeExample
            compact
            title="Large"
            initialCode={createInputExample({ ...defaultProps, size: 'large' })}
          />
        </Cell>
      </Layout>
    </div>
  );
};
