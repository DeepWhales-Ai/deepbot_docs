// Refused / blocked trades, rendered as receipts.
// Ported from prototype/home-extras.jsx (window.KillLog). Static data.

const ITEMS = [
  { token: '$WAGMI',  chain: 'ETH', reason: 'Deployer matched 3 prior rugs',    refused: 1247, ts: '2h ago' },
  { token: '$DOGE2',  chain: 'BNB', reason: 'Honeypot: hidden sell tax 87%',    refused: 412,  ts: '6h ago' },
  { token: '$MOONX',  chain: 'SOL', reason: 'Mempool drain detected · pre-rug', refused: 88,   ts: '11h ago' },
  { token: '$SAFE2',  chain: 'ETH', reason: 'Owner can freeze transfers',       refused: 203,  ts: '1d ago' },
  { token: '$PUMPIT', chain: 'BASE',reason: 'Liquidity unlocked · 4h to dump',  refused: 67,   ts: '1d ago' },
  { token: '$ELON7',  chain: 'ETH', reason: 'Blacklist function · open',        refused: 891,  ts: '2d ago' },
];

export default function KillLog() {
  const total = ITEMS.reduce((s, x) => s + x.refused, 0);
  return (
    <div className="db-kill">
      <div className="db-kill__head">
        <div className="db-kill__title">
          <span className="db-kill__skull">⌧</span>
          THIS WEEK, DALE REFUSED TO TRADE
        </div>
        <div className="db-kill__total">
          <span className="db-kill__total-num">{total.toLocaleString('en-US')}</span>
          <span className="db-kill__total-label">refusals</span>
        </div>
      </div>
      <div className="db-kill__list">
        {ITEMS.map((it, i) => (
          <div key={i} className="db-kill__row">
            <div className="db-kill__token">
              <span className="db-kill__sym">{it.token}</span>
              <span className="db-kill__chain">{it.chain}</span>
            </div>
            <div className="db-kill__reason">{it.reason}</div>
            <div className="db-kill__refused">
              <b>{it.refused.toLocaleString('en-US')}</b> users protected
            </div>
            <div className="db-kill__ts">{it.ts}</div>
          </div>
        ))}
      </div>
      <div className="db-kill__foot">Trust isn't a callout box. It's a body count.</div>
    </div>
  );
}
