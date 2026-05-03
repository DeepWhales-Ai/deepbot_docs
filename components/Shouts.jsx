// Eight-reasons manifesto block.
// `withHead` prop hides title — used when wrapping in PageShouts which has its
// own PageHead. Ported from prototype/home-extras.jsx.

import React from 'react';

const ITEMS = [
  { kind: 'fact', lead: 'Five years', body: 'watching crypto Telegram. Twenty five thousand groups. The footprint cannot be rebuilt.' },
  { kind: 'fact', lead: 'Sixty eight rug patterns', body: "detected in the mempool. Dale broadcasts a sell with fifteen percent higher gas to land before the rugger's confirmation. No other product does this." },
  { kind: 'fact', lead: 'Panic PIN', body: 'looks like a normal unlock. Behind it, every wallet drains to a cold address you set. For the moment a stranger forces your phone open.' },
  { kind: 'fact', lead: 'Dale trades while you sleep.', body: 'Set a budget, a per trade cap, a safety floor, the chains, the kill switch. Wake up to a summary. Stop it with a sentence.', lime: true },
  { kind: 'fact', lead: 'Phone in pocket.', body: 'Voice in. Voice PIN. Done. The whole trade happens without taking the phone out.' },
  { kind: 'fact', lead: 'Continuous safety.', body: 'Other bots scan once at purchase. Dale watches the token the entire time you hold it. If the deployer raises tax, blacklists, or pulls liquidity, you are notified before the price moves.' },
  { kind: 'fact', lead: 'Forty percent of trading fees', body: 'go to $DEEPAI holders every month. Five streams, one pool, transparent math, paid in USDC. Receipts on chain.' },
  { kind: 'fact', lead: 'Built by three people.', body: 'Mainnet. Real legal entity. Real revenue. Five years of compounding distribution that nobody can buy.' },
];

export default function Shouts({ withHead = true }) {
  return (
    <section className="db-shouts">
      {withHead && (
        <div className="db-shouts__head">
          <div className="db-shouts__eyebrow">THINGS NO OTHER PRODUCT CAN SAY</div>
          <div className="db-shouts__title">Eight reasons<br/>this is not a bot.</div>
        </div>
      )}
      <ol className="db-shouts__list">
        {ITEMS.map((it, i) => (
          <li className="db-shouts__row" key={i}>
            <span className="db-shouts__num">{String(i + 1).padStart(2, '0')}</span>
            <p className="db-shouts__line">
              <span className={`db-shouts__lead${it.lime ? ' db-shouts__lead--lime' : ''}`}>{it.lead}</span>
              {' '}
              <span className="db-shouts__body">{it.body}</span>
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
