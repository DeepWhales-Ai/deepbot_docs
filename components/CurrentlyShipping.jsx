// Currently shipping strip — three columns NOW · NEXT · STEALTH.
// Reads from window.DEEPBOT_BUILDING with sensible defaults.
// Ported from prototype/home-extras.jsx.

const DEFAULTS = {
  updated: '2 hours ago',
  now: [
    { status: 'TESTING',      label: 'Multi source convergence threshold tuning', since: '3d' },
    { status: 'PRIVATE BETA', label: 'Smart money cluster scoring v2',            since: '6d' },
    { status: 'SHIPPED',      label: 'Solana mempool defense',                    since: 'yesterday' },
  ],
  next: [
    { tag: 'EXPANSION',    label: 'New chain support',                window: 'Q3' },
    { tag: 'INTELLIGENCE', label: 'New signal surface',               window: '30 days' },
    { tag: 'SAFETY',       label: 'Identity reset hardening tier',    window: 'Pre launch' },
  ],
  stealth: [
    { redacted: '███████████████████' },
    { redacted: '█████████████ ████ ███' },
    { redacted: '███████ ███████' },
  ],
  counter: { beta: 3, design: 2, nda: 1 },
};

export default function CurrentlyShipping() {
  const data = (typeof window !== 'undefined' && window.DEEPBOT_BUILDING) || DEFAULTS;
  return (
    <div className="db-shipping">
      <div className="db-shipping__head">
        <div className="db-shipping__title">
          <span className="db-shipping__pulse" />
          CURRENTLY SHIPPING
        </div>
        <div className="db-shipping__updated">UPDATED · {data.updated}</div>
      </div>

      <div className="db-shipping__cols">
        <div className="db-shipping__col">
          <div className="db-shipping__colhead">NOW</div>
          {data.now.map((x, i) => (
            <div key={i} className="db-shipping__row">
              <span className={`db-shipping__status db-shipping__status--${x.status.toLowerCase().replace(/\s+/g, '-')}`}>{x.status}</span>
              <span className="db-shipping__label">{x.label}</span>
              <span className="db-shipping__since">{x.since}</span>
            </div>
          ))}
        </div>

        <div className="db-shipping__col">
          <div className="db-shipping__colhead">NEXT</div>
          {data.next.map((x, i) => (
            <div key={i} className="db-shipping__row">
              <span className="db-shipping__tag">{x.tag}</span>
              <span className="db-shipping__label">{x.label}</span>
              <span className="db-shipping__window">{x.window}</span>
            </div>
          ))}
        </div>

        <div className="db-shipping__col">
          <div className="db-shipping__colhead">STEALTH</div>
          {data.stealth.map((x, i) => (
            <div key={i} className="db-shipping__row db-shipping__row--stealth">
              <span className="db-shipping__redacted">{x.redacted}</span>
            </div>
          ))}
          <div className="db-shipping__counter">
            <span><b>{data.counter.beta}</b> in private beta</span>
            <span><b>{data.counter.design}</b> in design</span>
            <span><b>{data.counter.nda}</b> under NDA</span>
          </div>
        </div>
      </div>
    </div>
  );
}
