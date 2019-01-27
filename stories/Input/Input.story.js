import React from 'react';

import Input from '../../src/Input';
import { storySettings } from './storySettings';

import {
  Standard,
  Error,
  Unit,
  MagnifyingGlass,
  Controlled,
  Sizes,
  Rounded,
  Commands,
  Loader,
} from './examples';

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,
  component: Input,
  componentPath: '../../src/Input/Input.js',

  componentProps: setState => ({
    dataHook: storySettings.dataHook,
    value: '',
    onChange: e => setState({ value: e.target.value }),
    size: 'small',
    statusMessage: undefined,
  }),

  exampleProps: {
    status: [
      { label: 'Input.StatusError', value: 'error' },
      { label: 'Input.StatusLoading', value: 'loading' },
    ],
  },

  examples: (
    <div>
      <Standard />
      <Error />
      <Loader />
      <Unit />
      <MagnifyingGlass />
      <Controlled />
      <Sizes />
      <Rounded />
      <Commands />
    </div>
  ),
};
