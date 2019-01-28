import React from 'react';

import CounterBadge, { SKIN } from 'wix-style-react/CounterBadge';
import style from './ExampleCounterBadges.scss';

const skins = Object.keys(SKIN);

const renderCounterBadge = props => (
  <span>
    <CounterBadge {...props}>12</CounterBadge>
  </span>
);

export default () => (
  <div className={style.wrapper} data-hook="badge-variations">
    {skins.map(skin => (
      <div className={style.option} key={skin}>
        Skin: {skin}
        <div key={skin}>{renderCounterBadge({ uppercase: false, skin })}</div>
      </div>
    ))}
  </div>
);
