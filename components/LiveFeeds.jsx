// Two scrolling tickers — Bobby intelligence (left) + Dale execution (right).
// 1400ms tick, 4-row window, fade-in opacity.
// Ported from prototype/pages-start.jsx (window.LiveFeeds).
// Note: missed from design brief §6's 21-component list; flagged in tier-1-components PR.

const BOBBY_SIGNALS = [
  { sym: 'PEPE',   note: 'coordinated buys · 18 communities' },
  { sym: 'WIF',    note: 'deployer match · prior rug' },
  { sym: 'BRETT',  note: 'smart money cluster · base' },
  { sym: 'MOG',    note: 'holder graph · concentration up' },
  { sym: 'BONK',   note: 'sustained signal · 7 communities' },
  { sym: 'POPCAT', note: 'honeypot signal · refused' },
  { sym: 'TURBO',  note: 'convergence threshold reached' },
  { sym: 'HARRY',  note: 'trending across 12 groups' },
];

const DALE_TRADES = [
  { dir: 'BUY',   amt: '0.4 ETH',    token: 'PEPE',  src: 'voice' },
  { dir: 'WATCH', amt: 'smart money',token: 'BASE',  src: 'rule' },
  { dir: 'DCA',   amt: '$50',        token: 'ETH',   src: 'schedule' },
  { dir: 'SELL',  amt: '60%',        token: 'WIF',   src: 'trail' },
  { dir: 'BUY',   amt: '1.2 SOL',    token: 'MOG',   src: 'convo' },
  { dir: 'EXIT',  amt: '100%',       token: 'TURBO', src: 'rug event' },
  { dir: 'BUY',   amt: '0.05 ETH',   token: 'BRETT', src: 'voice' },
  { dir: 'SCAN',  amt: '...',        token: '0xb74…',src: 'convo' },
];

export default function LiveFeeds() {
  const [t, setT] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setT((x) => x + 1), 1400);
    return () => clearInterval(id);
  }, []);

  const wB = BOBBY_SIGNALS.slice(t % BOBBY_SIGNALS.length).concat(BOBBY_SIGNALS).slice(0, 4);
  const wD = DALE_TRADES.slice(t % DALE_TRADES.length).concat(DALE_TRADES).slice(0, 4);

  return (
    <div className="db-feeds">
      <div className="db-feeds__col">
        <div className="db-feeds__head">
          <span className="db-feeds__brand"><span className="db-feeds__b">B</span>BOBBY</span>
          <span className="db-feeds__live"><span className="db-feeds__dot" /> LIVE · INTELLIGENCE</span>
        </div>
        <div className="db-feeds__list">
          {wB.map((s, i) => (
            <div key={`${t}-${i}`} className="db-feeds__row" style={{ opacity: 1 - i * 0.18 }}>
              <span className="db-feeds__sym">{s.sym}</span>
              <span className="db-feeds__note">{s.note}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="db-feeds__col">
        <div className="db-feeds__head">
          <span className="db-feeds__brand"><span className="db-feeds__d">D</span>DALE</span>
          <span className="db-feeds__live"><span className="db-feeds__dot" /> LIVE · EXECUTION</span>
        </div>
        <div className="db-feeds__list">
          {wD.map((s, i) => (
            <div key={`${t}-${i}`} className="db-feeds__row" style={{ opacity: 1 - i * 0.18 }}>
              <span className={`db-feeds__dir db-feeds__dir--${s.dir.toLowerCase()}`}>{s.dir}</span>
              <span className="db-feeds__amt">{s.amt}</span>
              <span className="db-feeds__tok">{s.token}</span>
              <span className="db-feeds__src">· {s.src}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
