import React from 'react';

import {Container, Row, Col} from 'wix-style-react/Grid';
import Card from 'wix-style-react/Card';

import FormField from 'wix-style-react/FormField';
import Input from 'wix-style-react/Input';
import Button from 'wix-style-react/Button';
import TextLink from 'wix-style-react/TextLink';
import ToggleSwitch from 'wix-style-react/ToggleSwitch';

export default () => (
  <div style={{background: '#F0F4F7', padding: 30}}>
    <Container>
      <Row>
        <Col>
          <Card isOpen={[true, false, false]}>
            {({toggle, CONTENT_SPLIT, isOpen}) => [
              <Card.Header
                key="header"
                title="Collapsable #1"
                withoutDivider
                suffix={<ToggleSwitch onChange={toggle} checked={isOpen}/>}
                />,

              CONTENT_SPLIT,

              <Card.Divider key="divider"/>,

              <Card.Content key="content">{field()}</Card.Content>
            ]}

            {({toggle, CONTENT_SPLIT, isOpen}) => [
              <Card.Header
                key="header"
                title="Collapsable #2"
                suffix={
                  <Button
                    onClick={toggle}
                    children={isOpen ? 'Close' : 'Open'}
                    />
                }
                />,

              CONTENT_SPLIT,

              <Card.Divider key="divider"/>,

              <Card.Content key="content">{field()}</Card.Content>
            ]}

            {({toggle, CONTENT_SPLIT, isOpen}) => [
              <Card.Header
                key="header"
                title="Collapsable #3"
                subtitle={isOpen ? 'Subtitle only when opened!' : ''}
                suffix={
                  <TextLink
                    onClick={toggle}
                    children={isOpen ? 'Close' : 'Open'}
                    />
                }
                />,
              CONTENT_SPLIT,

              <Card.Divider key="divider"/>,

              <Card.Content key="content">{field()}</Card.Content>
            ]}
          </Card>
        </Col>
      </Row>

      <ControlledExample/>
    </Container>
  </div>
);

class ControlledExample extends React.Component {
  state = {
    collapsed: false
  };

  render() {
    return (
      <Row>
        <Col span={7}>
          <Card isOpen={[!this.state.collapsed, this.state.collapsed]}>
            {({toggle, CONTENT_SPLIT, isOpen}) => [
              <Card.Header
                key="header"
                title={isOpen ? 'i am open!' : 'i am closed!'}
                suffix={
                  <Button onClick={toggle}>{isOpen ? 'Close' : 'Open'}</Button>
                }
                />,
              CONTENT_SPLIT,
              <Card.Content key="content">{field()}</Card.Content>
            ]}

            {({toggle, CONTENT_SPLIT, isOpen}) => [
              <Card.Header
                key="header"
                title={isOpen ? 'i am open!' : 'i am closed!'}
                suffix={
                  <Button onClick={toggle}>{isOpen ? 'Close' : 'Open'}</Button>
                }
                />,
              CONTENT_SPLIT,
              <Card.Content key="content">{field()}</Card.Content>
            ]}
          </Card>
        </Col>

        <Col span={5}>
          <Button
            onClick={() =>
              this.setState(({collapsed}) => ({collapsed: !collapsed}))
            }
            height="large"
            >
            Invert
          </Button>
        </Col>
      </Row>
    );
  }
}

function field() {
  return (
    <FormField label="Text Field">
      <Input placeholder="You can type here"/>
    </FormField>
  );
}
