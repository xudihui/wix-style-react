import React from 'react';
import Markdown from 'wix-storybook-utils/dist/src/Markdown';

import { Cell, Layout } from '../../../src';
import LiveCodeExample from '../../utils/Components/LiveCodeExample';

const Example = `class CommandsExample extends React.Component {
  render() {
    const handleClick1 = () => this.refs.inputtest.focus();

    const handleClick2 = () => {
      this.refs.inputtest.focus();
      setTimeout(() => this.refs.inputtest.blur(), 1000);
    };

    const handleClick3 = () => {
      this.refs.inputtest.focus();
      this.refs.inputtest.select();
    };

    return (
      <div>
        <div style={{ width: '400px' }}>
          <Input theme={this.props.theme} ref="inputtest" />
        </div>
        <TextButton style={{ padding: '0 1rem' }} onClick={handleClick1}>Focus</TextButton>
        <TextButton style={{ padding: '0 1rem' }} onClick={handleClick2}>
          Focus &amp; blur 1 second later  
        </TextButton>
        <TextButton style={{ padding: '0 1rem' }} onClick={handleClick3}>Select text</TextButton>
      </div>
    );
  }
}`;

export default () => {
  return (
    <div>
      <Markdown source="## Using ref methods" />
      <Layout>
        <Cell span={4}>
          <LiveCodeExample
            compact
            title="Click to test commands API"
            initialCode={Example}
          />
        </Cell>
      </Layout>
    </div>
  );
};
