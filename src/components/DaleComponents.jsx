// Dale section page-specific components, ported from
// prototype/pages-dale.jsx. Used only by /dale/* pages.

import React from 'react';

// Three-card progression showing how Dale's chat tone deepens with the
// relationship over time. Trade 1 → Trade 50 → Trade 200.
export const MemoryProgression = () => {
  const stops = [
    {
      label: 'TRADE 01',
      tone: 'Asking',
      lines: [
        { from: 'user', text: 'want to buy some PEPE' },
        { from: 'dale', text: 'On it. What size, which chain (Ethereum or Base), and what slippage?' },
      ],
    },
    {
      label: 'TRADE 50',
      tone: 'Anticipating',
      lines: [
        { from: 'user', text: 'PEPE' },
        { from: 'dale', text: 'Same setup as last time? 0.08 ETH, 12% slip, 30% off at 2x?' },
      ],
    },
    {
      label: 'TRADE 200',
      tone: 'Watching out',
      lines: [
        { from: 'user', text: 'throw 0.4 ETH at this new mog fork' },
        { from: 'dale', text: 'Smaller mcap than you usually touch and 4× your normal size. You sure?' },
      ],
    },
  ];
  return (
    <div className="db-memprog">
      {stops.map((s, i) => (
        <div className="db-memprog__card" key={i}>
          <div className="db-memprog__top">
            <span className="db-memprog__label">{s.label}</span>
            <span className="db-memprog__tone">{s.tone}</span>
          </div>
          <div className="db-memprog__chat">
            {s.lines.map((l, j) => (
              <div key={j} className={`db-memprog__line db-memprog__line--${l.from}`}>
                <span className="db-memprog__who">{l.from === 'user' ? 'You' : 'Dale'}</span>
                <span className="db-memprog__msg">{l.text}</span>
              </div>
            ))}
          </div>
          {i < stops.length - 1 && <div className="db-memprog__arrow" aria-hidden="true">→</div>}
        </div>
      ))}
    </div>
  );
};
