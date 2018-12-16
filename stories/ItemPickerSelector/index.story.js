import * as React from 'react';
import { ItemPickerSelector } from '../../src/ItemPickerSelector';
import EmptyState from '../../src/EmptyState/EmptyState';
import Text from '../../src/Text/Text';
import TextLink from '../../src/TextLink/TextLink';
import Add from '../../new-icons/Add';
import { contactItemBuilder } from '../../src/ContactItemBuilder';
import Button from '../../src/Backoffice/Button/Button';

function fetchItems({ query }) {
  const items = [
    { id: 'some-id-a', title: 'Siri Jacobson', subtitle: 'siri@wix.com' },
    { id: 'some-id-b', title: 'Sophie Asveld', subtitle: 'sophie@wix.com' },
    { id: 'some-id-c', title: 'No Subtitle', subtitle: '' },
    { id: 'some-id-d', title: 'Sophie Asveld', subtitle: 'sophie@wix.com' },
    { id: 'some-id-e', title: 'Sophie Asveld', subtitle: 'sophie@wix.com' },
    { id: 'some-id-f', title: 'Sophie Asveld', subtitle: 'sophie@wix.com' },
    { id: 'some-id-g', title: 'Sophie Asveld', subtitle: 'sophie@wix.com' },
    { id: 'some-id-h', title: 'Sophie Asveld', subtitle: 'sophie@wix.com' },
  ];
  if (query === '') {
    return Promise.resolve(items);
  } else {
    return Promise.resolve(items.filter(x => x.title.includes(query)));
  }
}

const emptyStateComponent = (
  <div>
    <EmptyState
      dataHook={'empty-message'}
      title="No contacts found."
      subtitle={
        <Text>
          Add or import contacts <a href="http://wwww.wix.com"> Learn more </a>
        </Text>
      }
    >
      <TextLink prefixIcon={<Add />}>Add Contact</TextLink>
    </EmptyState>
  </div>
);

const itemBuilder = contactItemBuilder;

const footer = (
  <div>
    <TextLink data-hook="footer" prefixIcon={<Add />}>
      Add Contact
    </TextLink>
  </div>
);

const button = <Button>Toggle picker tooltip</Button>;

const onSelect = item => item + ' selected!';

export default {
  category: '12. Other',
  storyName: '12.7 ItemPickerSelector',
  component: ItemPickerSelector,
  componentPath: '../../src/ItemPickerSelector/ItemPickerSelector.js',
  componentProps: {
    footer,
    emptyStateComponent,
    itemBuilder,
    button,
    fetchItems,
    onSelect,
  },

  examples: (
    <ItemPickerSelector
      fetchitems={fetchItems}
      footer={footer}
      emptyStateComponent={emptyStateComponent}
      itemBuilder={itemBuilder}
      button={button}
      fetchItems={fetchItems}
      onSelect={onSelect}
    />
  ),
};