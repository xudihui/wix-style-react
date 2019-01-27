import React from 'react';
import Markdown from 'wix-storybook-utils/dist/src/Markdown';

import { Cell, Layout } from '../../../src';
import LiveCodeExample from '../../utils/Components/LiveCodeExample';

const Example = `class ControlledInput extends React.Component {
  
  constructor() {
    this.state = {
      value: '',
      errorValue: 'Starwars',
    };
  }

  render() {
    const onChange = e => this.setState({ value: e.target.value });
    return (
      <Input
        value={this.state.value}
        onChange={onChange}
        error={this.state.value === this.state.errorValue}
      />
    );
  }
}`;

export default () => {
  return (
    <div>
      <Markdown source="## Controlled input" />
      <Layout>
        <Cell span={4}>
          <LiveCodeExample
            compact
            title="Will show error for 'Starwars'"
            initialCode={Example}
          />
        </Cell>
      </Layout>
    </div>
  );
};
