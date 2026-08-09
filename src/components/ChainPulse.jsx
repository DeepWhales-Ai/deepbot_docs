// Chain breathing pulse strip.
// 700ms tick: one chain pulses at a time, cycles through.
// Ported from prototype/pages-start.jsx (window.ChainPulse).
//
// The label counts CHAINS rather than hardcoding a number. Adding a chain to
// the array below is the only edit needed, and the strip can never claim a
// count that differs from the logos it renders. It did exactly that during
// the Aug canon sweep, which is why this is derived now.

import React, { useEffect, useState } from 'react';
import { Ethereum, Solana, Base, Polygon, BNB, Robinhood } from './ChainLogos.jsx';

const CHAINS = [
  { Logo: Ethereum, name: 'Ethereum' },
  { Logo: Solana, name: 'Solana' },
  { Logo: Base, name: 'Base' },
  { Logo: Polygon, name: 'Polygon' },
  { Logo: BNB, name: 'BNB' },
  { Logo: Robinhood, name: 'Robinhood' },
];

const COUNT_WORD = ['ZERO', 'ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN', 'EIGHT'];
const countLabel = (n) => COUNT_WORD[n] || String(n);

export function ChainPulse() {
  const [t, setT] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setT((x) => x + 1), 700);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="db-chainpulse">
      <div className="db-chainpulse__label">{countLabel(CHAINS.length)} CHAINS · ONE WALLET · ONE CONVERSATION</div>
      <div className="db-chainpulse__row">
        {CHAINS.map((c, i) => {
          const Logo = c.Logo;
          const pulse = t % CHAINS.length === i;
          return (
            <div key={i} className={`db-chainpulse__node${pulse ? ' is-pulse' : ''}`}>
              <span className="db-chainpulse__sym"><Logo size={32} /></span>
              <span className="db-chainpulse__name">{c.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChainPulse;
