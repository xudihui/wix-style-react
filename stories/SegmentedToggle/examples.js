import React from 'react';

export const textAndIcon = `
<SegmentedToggle defaultSelected="option">
  <SegmentedToggle.Button prefixIcon={<LockLocked />} value="option">
    Option
  </SegmentedToggle.Button>
  <SegmentedToggle.Button prefixIcon={<LockLocked />} value="option2">
    Option
  </SegmentedToggle.Button>
</SegmentedToggle>
`;

export const icon = `
<SegmentedToggle defaultSelected="option">
  <SegmentedToggle.Button value="option">
    <LockLocked />
  </SegmentedToggle.Button>
  <SegmentedToggle.Button value="option2">
    <LockLocked />
  </SegmentedToggle.Button>
</SegmentedToggle>
`;

export const text = `
<SegmentedToggle defaultSelected="option">
  <SegmentedToggle.Button value="option">
    Option
  </SegmentedToggle.Button>
  <SegmentedToggle.Button value="option2">
    Option
  </SegmentedToggle.Button>
</SegmentedToggle>
`;
