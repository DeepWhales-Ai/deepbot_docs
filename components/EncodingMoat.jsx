// Split-screen encoding moat visual.
// Left: opaque hashes (what other bots see). Right: structured tool calls (what Dale sees).
// 1100ms tick. Deterministic LCG hash generator.
// Ported from prototype/home-extras.jsx.

const TOOLS = [
  { name: 'detect_convergence', args: 'token=$PEPE  sources=18  threshold=met' },
  { name: 'scan_contract',      args: 'addr=0x6982…  honeypot=false  blacklist=false' },
  { name: 'check_deployer',     args: 'addr=0x4f9b…  rug_events=0  age=842d' },
  { name: 'price_quote',        args: 'pair=PEPE/ETH  size=0.1  impact=0.18%' },
  { name: 'route_trade',        args: 'venue=Uniswap_V3  chain=ETH  slippage=auto' },
  { name: 'arm_stop',           args: 'pct=-15  trail=false  on_rug=exit_all' },
  { name: 'detect_convergence', args: 'token=$WIF   sources=4   threshold=below' },
  { name: 'refuse_trade',       args: 'reason=deployer_match  prior_rugs=3' },
];

const genHash = (seed) => {
  const hex = '0123456789abcdef';
  let s = '0x';
  let n = seed;
  for (let i = 0; i < 40; i++) {
    n = (n * 9301 + 49297) % 233280;
    s += hex[n & 0xf];
  }
  return s;
};

export default function EncodingMoat() {
  const [t, setT] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setT((x) => x + 1), 1100);
    return () => clearInterval(id);
  }, []);

  const hashRows = Array.from({ length: 8 }, (_, i) => genHash(t * 13 + i * 7));
  const toolStart = t % TOOLS.length;
  const toolRows = Array.from({ length: 6 }, (_, i) => TOOLS[(toolStart + i) % TOOLS.length]);

  return (
    <div className="db-moat">
      <div className="db-moat__title">
        <div className="db-moat__title-l">WHAT OTHER BOTS SEE</div>
        <div className="db-moat__title-r">WHAT DALE SEES</div>
      </div>
      <div className="db-moat__panes">
        <div className="db-moat__pane db-moat__pane--blind">
          {hashRows.map((h, i) => (
            <div key={`${t}-${i}`} className="db-moat__hash" style={{ opacity: 1 - i * 0.07 }}>{h}</div>
          ))}
          <div className="db-moat__verdict">UNREADABLE · NOISE · NO TRADE</div>
        </div>
        <div className="db-moat__divider">
          <div className="db-moat__divider-line" />
          <div className="db-moat__divider-mark">↑ encoded for Dale's tool call schema only</div>
        </div>
        <div className="db-moat__pane db-moat__pane--seeing">
          {toolRows.map((tool, i) => (
            <div key={`${t}-${i}`} className="db-moat__tool" style={{ opacity: 1 - i * 0.10 }}>
              <span className="db-moat__tool-name">{tool.name}</span>
              <span className="db-moat__tool-args">{tool.args}</span>
            </div>
          ))}
          <div className="db-moat__verdict db-moat__verdict--ok">STRUCTURED · ACTIONABLE · TRADE READY</div>
        </div>
      </div>
      <div className="db-moat__caption">Same payload. Two readers. Only one can act on it.</div>
    </div>
  );
}
