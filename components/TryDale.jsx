// Embedded Dale demo — scripted 6-step trade flow.
// Manual click-through OR auto-play (1300ms per step).
// Ported from prototype/home-extras.jsx.

const SCRIPT = [
  { from: 'user', t: 'msg', c: 'buy 0.1 eth of pepe' },
  { from: 'dale', t: 'parse', steps: [
    { ok: true, label: 'Parsed intent',        detail: 'BUY · 0.1 ETH · $PEPE · ETH chain' },
    { ok: true, label: 'Resolved token',       detail: '0x6982508145454ce325ddbe47a25d4ec3d2311933' },
    { ok: true, label: 'Contract scan',        detail: 'Verified · no honeypot · no blacklist' },
    { ok: true, label: 'Deployer history',     detail: 'Clean · no rug events' },
    { ok: true, label: 'Blockaid reputation',  detail: 'No flags' },
    { ok: true, label: 'Liquidity check',      detail: '$8.4M · adequate' },
  ] },
  { from: 'dale', t: 'quote', quote: {
    token: '$PEPE', size: '0.1 ETH', est: '127.4M PEPE', impact: '0.18%', gas: '~$3.20', route: 'Uniswap V3',
  } },
  { from: 'dale', t: 'confirm', c: 'Reply YES to execute. Or refine. Bigger size, different chain, set a stop.' },
  { from: 'user', t: 'msg', c: 'YES, also stop at -15%' },
  { from: 'dale', t: 'exec', c: 'Executed. 127.4M PEPE in wallet. Stop loss armed at $0.0000113. Will defend.' },
];

export function TryDale() {
  const [step, setStep] = React.useState(0);
  const [auto, setAuto] = React.useState(false);

  React.useEffect(() => {
    if (!auto) return;
    if (step >= SCRIPT.length) return;
    const id = setTimeout(() => setStep((s) => Math.min(s + 1, SCRIPT.length)), 1300);
    return () => clearTimeout(id);
  }, [auto, step]);

  const reset = () => { setStep(0); setAuto(false); };
  const advance = () => setStep((s) => Math.min(s + 1, SCRIPT.length));
  const startAuto = () => { setStep(1); setAuto(true); };

  const visible = SCRIPT.slice(0, step);

  return (
    <div className="db-trydale">
      <div className="db-trydale__head">
        <div className="db-trydale__brand">
          <span className="db-trydale__avatar">D</span>
          <div>
            <div className="db-trydale__name">Dale</div>
            <div className="db-trydale__handle">@traderdeepbot · scripted demo</div>
          </div>
        </div>
        <div className="db-trydale__ctrls">
          {step > 0 && step < SCRIPT.length && (
            <button className="db-trydale__btn" onClick={advance}>Next →</button>
          )}
          {step >= SCRIPT.length && (
            <button className="db-trydale__btn" onClick={reset}>Replay</button>
          )}
        </div>
      </div>

      <div className="db-trydale__body">
        {step === 0 && (
          <div className="db-trydale__placeholder">
            <div className="db-trydale__ph-line">A real Dale conversation.</div>
            <div className="db-trydale__ph-sub">
              User says <span className="db-mono">"buy 0.1 eth of pepe"</span>. Watch what Dale actually does before it executes.
            </div>
            <button className="db-trydale__btn db-trydale__btn--primary db-trydale__ph-btn" onClick={startAuto}>
              ▶ Watch the trade
            </button>
          </div>
        )}

        {visible.map((m, i) => {
          if (m.t === 'msg') {
            return (
              <div key={i} className={`db-trydale__row db-trydale__row--${m.from}`}>
                <div className={`db-trydale__bubble db-trydale__bubble--${m.from}`}>{m.c}</div>
              </div>
            );
          }
          if (m.t === 'parse') {
            return (
              <div key={i} className="db-trydale__row db-trydale__row--dale">
                <div className="db-trydale__bubble db-trydale__bubble--dale db-trydale__parse">
                  <div className="db-trydale__parse-head">SAFETY PIPELINE · 6 CHECKS</div>
                  {m.steps.map((s, j) => (
                    <div key={j} className="db-trydale__parse-row" style={{ animationDelay: `${j * 130}ms` }}>
                      <span className={`db-trydale__check db-trydale__check--${s.ok ? 'ok' : 'bad'}`}>{s.ok ? '✓' : '✕'}</span>
                      <span className="db-trydale__parse-label">{s.label}</span>
                      <span className="db-trydale__parse-detail">{s.detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          }
          if (m.t === 'quote') {
            return (
              <div key={i} className="db-trydale__row db-trydale__row--dale">
                <div className="db-trydale__bubble db-trydale__bubble--dale db-trydale__quote">
                  <div className="db-trydale__quote-head">QUOTE</div>
                  <div className="db-trydale__quote-grid">
                    <div><span>Token</span><b>{m.quote.token}</b></div>
                    <div><span>Size</span><b>{m.quote.size}</b></div>
                    <div><span>Est.</span><b>{m.quote.est}</b></div>
                    <div><span>Impact</span><b>{m.quote.impact}</b></div>
                    <div><span>Gas</span><b>{m.quote.gas}</b></div>
                    <div><span>Route</span><b>{m.quote.route}</b></div>
                  </div>
                </div>
              </div>
            );
          }
          if (m.t === 'confirm' || m.t === 'exec') {
            return (
              <div key={i} className="db-trydale__row db-trydale__row--dale">
                <div className={`db-trydale__bubble db-trydale__bubble--dale${m.t === 'exec' ? ' db-trydale__bubble--exec' : ''}`}>
                  {m.t === 'exec' && <div className="db-trydale__exec-head">EXECUTED</div>}
                  {m.c}
                </div>
              </div>
            );
          }
          return null;
        })}

        {step > 0 && step < SCRIPT.length && (
          <div className="db-trydale__typing">
            <span /><span /><span />
          </div>
        )}
      </div>
    </div>
  );
};

export default TryDale;
