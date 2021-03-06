import React from 'react';
import TableActionCell from 'wix-style-react/TableActionCell';
import { Star, Download, Duplicate, Print } from 'wix-style-react/new-icons';

import style from '../TableActionCell.story.st.css';

const Example = () => (
  <div className="rtl" dir="rtl">
    <div className={style.exampleRow}>
      <TableActionCell
        dataHook="story-primary-secondary-rtl"
        primaryAction={{
          text: 'Edit',
          theme: 'whiteblue',
          onClick: () => window.alert('Primary action was triggered!'),
        }}
        secondaryActions={[
          {
            text: 'Star',
            icon: <Star />,
            onClick: () => window.alert('Star action was triggered.'),
          },
          {
            text: 'Download',
            icon: <Download />,
            onClick: () => window.alert('Download action was triggered.'),
          },
          {
            text: 'Duplicate',
            icon: <Duplicate />,
            onClick: () => window.alert('Duplicate action was triggered.'),
          },
          {
            text: 'Print',
            icon: <Print />,
            onClick: () => window.alert('Print action was triggered.'),
          },
        ]}
        numOfVisibleSecondaryActions={1}
      />
    </div>
  </div>
);

export default Example;
