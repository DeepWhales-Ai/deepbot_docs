// Live counter strip on home page.
// Mount-anim: cubic ease-out over 1400ms.
// Drift: 1s setInterval, ±randomized increments, 30s cycle countdown.
// Ported from prototype/home-extras.jsx (window.CounterWall).

const fmt = (n) => n.toLocaleString('en-US');
const fmtCompact = (n) => {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(2) + 'M';
  if (n >= 1_000) return Math.floor(n / 1_000) + 'K';
  return fmt(n);
};

export default function CounterWall() {
  const targets = (typeof window !== 'undefined' && window.DEEPBOT_STATS) || {};
  const T = {
    communities: targets.communities ?? 26547,
    signalsPerMonth: targets.signalsPerMonth ?? 2834219,
    traders: targets.traders ?? 853729,
    cycleSec: 30,
  };

  const [vals, setVals] = React.useState({ communities: 0, signalsPerMonth: 0, traders: 0, cycleSec: 0 });

  // Mount-anim
  React.useEffect(() => {
    const start = performance.now();
    const dur = 1400;
    let raf;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 3);
      setVals({
        communities: Math.floor(T.communities * eased),
        signalsPerMonth: Math.floor(T.signalsPerMonth * eased),
        traders: Math.floor(T.traders * eased),
        cycleSec: Math.floor(T.cycleSec * eased),
      });
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Drift
  React.useEffect(() => {
    const id = setInterval(() => {
      setVals((v) => {
        const nextCycle = v.cycleSec <= 0 ? 30 : v.cycleSec - 1;
        return {
          ...v,
          signalsPerMonth: v.signalsPerMonth + Math.floor(Math.random() * 80) + 20,
          traders: v.traders + (Math.random() < 0.35 ? 1 : 0),
          communities: v.communities + (Math.random() < 0.06 ? 1 : 0),
          cycleSec: nextCycle,
        };
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="db-counters">
      <div className="db-counters__item">
        <div className="db-counters__num">{fmt(vals.communities)}</div>
        <div className="db-counters__label">TG GROUPS</div>
      </div>
      <div className="db-counters__sep" />
      <div className="db-counters__item">
        <div className="db-counters__num">{fmt(vals.traders)}</div>
        <div className="db-counters__label">TRADERS</div>
      </div>
      <div className="db-counters__sep" />
      <div className="db-counters__item">
        <div className="db-counters__num">{fmtCompact(vals.signalsPerMonth)}</div>
        <div className="db-counters__label">SIGNALS / MONTH</div>
      </div>
      <div className="db-counters__sep" />
      <div className="db-counters__item">
        <div className="db-counters__num">
          {vals.cycleSec}<span className="db-counters__unit">s</span>
        </div>
        <div className="db-counters__label">SCORING CYCLE</div>
      </div>
    </div>
  );
}
