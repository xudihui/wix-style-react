import React from 'react';

import LiveCodeExample from '../../utils/Components/LiveCodeExample';

import iconandtext from '!raw-loader!./iconandtext';
import icon from '!raw-loader!./icon';
import text from '!raw-loader!./text';

import { Layout, Cell } from '../../../src/Layout';

class SegmentedStory extends React.Component {
  render() {
    return (
      <Layout>
        <Cell span={6}>
          <LiveCodeExample
            compact
            title="Icon & Text"
            initialCode={iconandtext}
          />
        </Cell>
        <Cell span={6}>
          <LiveCodeExample compact title="Icon" initialCode={icon} />
        </Cell>
        <Cell span={6}>
          <LiveCodeExample compact title="Text" initialCode={text} />
        </Cell>
      </Layout>
    );
  }
}

export default SegmentedStory;
