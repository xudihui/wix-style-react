import React from 'react';

import LiveCodeExample from '../../utils/Components/LiveCodeExample';

import segmented from '!raw-loader!./segmented';

import { Layout, Cell } from '../../../src/Layout';

class SegmentedStory extends React.Component {
  render() {
    return (
      <Layout>
        <Cell span={6}>
          <LiveCodeExample compact title="Example" initialCode={segmented} />
        </Cell>
      </Layout>
    );
  }
}

export default SegmentedStory;
