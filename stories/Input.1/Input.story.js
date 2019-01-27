import React from 'react';

import Input from '../../src/Input/Input';
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
} from './examples';

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,
  component: Input,
  componentPath: '../../src/Input/Input.js',

  componentProps: {
    dataHook: storySettings.dataHook,
    value: undefined,
    theme: 'normal',
  },

  componentWrapper: ({ component }) => <div>{component}</div>,

  examples: (
    <div>
      <Standard />
      <Error />
      <Unit />
      <MagnifyingGlass />
      <Controlled />
      <Sizes />
      <Rounded />
      <Commands />
    </div>
  ),
};
