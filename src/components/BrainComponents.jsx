// Brain section page-specific components — ported verbatim from
// prototype/pages-brain.jsx. Used only by /brain/* pages, deferred from
// tier-1-components per kickoff scoping.

import React, { useState, useEffect } from 'react';

// Six-layer stack diagram. Each layer is a clickable card that navigates.
// onNav (optional) receives the layer id; in MDX usage we pass href instead
// via a custom wrapper, so the click is a normal browser nav.
export const BrainStack = ({ activeId }) => {
  const layers = [
    { id: 'brain/layer-1-network',     num: '01', title: 'Group network',          line: 'Where the signals come from.' },
    { id: 'brain/layer-2-routers',     num: '02', title: 'Router fingerprints',    line: 'Who is buying, weighted by behavior.' },
    { id: 'brain/layer-3-safety',      num: '03', title: 'Safety scanner stack',   line: "Don't get rugged on the way in." },
    { id: 'brain/layer-4-rug',         num: '04', title: 'Rug detector',           line: "Don't get rugged on the way out." },
    { id: 'brain/layer-5-convergence', num: '05', title: 'Convergence engine',     line: 'Multiple sources agree, weighted hard to game.' },
    { id: 'brain/layer-6-encoding',    num: '06', title: 'Encoding moat',          line: 'The loop closes here. The moat is the encoding.' },
  ];
  return (
    <div className="db-brainstack">
      {layers.map((L, i) => {
        const isActive = L.id === activeId;
        return (
          <a
            key={L.id}
            href={`/${L.id}`}
            className={`db-brainstack__row ${isActive ? 'is-active' : ''}`}
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <span className="db-brainstack__num">{L.num}</span>
            <span className="db-brainstack__title">{L.title}</span>
            <span className="db-brainstack__line">{L.line}</span>
            <span className="db-brainstack__arrow">→</span>
          </a>
        );
      })}
    </div>
  );
};

// Animated brain motif. Six concentric layers stacking, with the alert pulse
// climbing through them and exiting as an encoded tool call. 90ms tick,
// ~5.4s cycle.
export const BrainHero = () => {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 90);
    return () => clearInterval(id);
  }, []);

  const rings = [0, 1, 2, 3, 4, 5];
  const phase = (tick % 60) / 60;

  return (
    <div className="db-brainhero">
      <svg viewBox="0 0 720 320" className="db-brainhero__svg">
        <defs>
          <radialGradient id="brain-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#CCFF00" stopOpacity="0.25" />
            <stop offset="60%" stopColor="#CCFF00" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#CCFF00" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="brain-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#CCFF00" stopOpacity="0" />
            <stop offset="50%" stopColor="#CCFF00" stopOpacity="1" />
            <stop offset="100%" stopColor="#CCFF00" stopOpacity="0" />
          </linearGradient>
        </defs>

        <circle cx="360" cy="160" r="155" fill="url(#brain-glow)" />

        {rings.map((i) => {
          const r = 30 + i * 18;
          const litRing = Math.floor(phase * 6);
          const isLit = i === litRing;
          return (
            <circle
              key={i}
              cx="360" cy="160" r={r}
              fill="none"
              stroke={isLit ? '#CCFF00' : 'rgba(255,255,255,0.18)'}
              strokeWidth={isLit ? '1.5' : '1'}
              strokeDasharray={i % 2 === 0 ? '' : '3 5'}
              style={{ transition: 'stroke 0.2s ease' }}
            />
          );
        })}

        {[40, 80, 120, 160, 200].map((y, i) => {
          const opacity = 0.3 + (Math.sin((tick + i * 8) / 12) + 1) * 0.25;
          return (
            <circle key={i} cx={70 + i * 12} cy={y + 30} r="2.5" fill="#CCFF00" opacity={opacity} />
          );
        })}

        <line x1="160" y1="160" x2="320" y2="160" stroke="url(#brain-line)" strokeWidth="1" opacity={phase > 0.2 && phase < 0.8 ? 0.7 : 0.15} />
        <line x1="400" y1="160" x2="640" y2="160" stroke="url(#brain-line)" strokeWidth="1.5" opacity={phase > 0.7 ? 0.9 : 0.1} />

        <circle cx="360" cy="160" r="6" fill="#CCFF00" />
        <circle cx="360" cy="160" r="14" fill="none" stroke="#CCFF00" strokeWidth="1" opacity="0.5" />

        <text x="60" y="30" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="rgba(255,255,255,0.55)" letterSpacing="0.1em">SIGNALS_IN</text>
        <text x="640" y="30" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#CCFF00" letterSpacing="0.1em" textAnchor="end">TOOL_CALL_OUT</text>
        <text x="360" y="305" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="rgba(255,255,255,0.4)" letterSpacing="0.1em" textAnchor="middle">SIX LAYERS · ONE BRAIN</text>
      </svg>
    </div>
  );
};

// Three-tier rug detection visualization.
export const RugTierStrip = () => {
  const tiers = [
    { tier: 'T1', label: 'Watch',   body: 'Anomaly detected. Logged. No action.' },
    { tier: 'T2', label: 'Alert',   body: 'Pattern matches a known rug behavior. User notified.' },
    { tier: 'T3', label: 'Execute', body: 'Critical pattern. Auto sell fires before the block lands.' },
  ];
  return (
    <div className="db-rugtier">
      {tiers.map((t, i) => (
        <div key={i} className={`db-rugtier__cell db-rugtier__cell--${t.tier.toLowerCase()}`}>
          <div className="db-rugtier__num">{t.tier}</div>
          <div className="db-rugtier__label">{t.label}</div>
          <div className="db-rugtier__body">{t.body}</div>
        </div>
      ))}
    </div>
  );
};

// Three router-tier columns with animated bars.
export const RouterTierViz = () => {
  const tiers = [
    { tier: 'Sniper',     line: 'First block, MEV aware buyers. High signal, high noise.' },
    { tier: 'Aggregator', line: "Pro infra. Smart money you can't impersonate." },
    { tier: 'Retail',     line: 'Volume backbone. Confirms or rejects what the top tiers found.' },
  ];
  return (
    <div className="db-routertiers">
      {tiers.map((t, i) => (
        <div key={i} className="db-routertiers__col">
          <div className="db-routertiers__head">{t.tier}</div>
          <div className="db-routertiers__bars">
            {[...Array(6)].map((_, k) => (
              <div key={k} className="db-routertiers__bar" style={{
                height: `${20 + (Math.sin(i + k) + 1) * 24}px`,
                animationDelay: `${k * 80 + i * 200}ms`,
              }} />
            ))}
          </div>
          <div className="db-routertiers__line">{t.line}</div>
        </div>
      ))}
    </div>
  );
};

// The encoding moat: Bobby raw → encoder → Dale tool call. Other consumers
// (raw API, RSS, webhook) shown as silhouetted dead-ends.
export const EncodingDiagram = () => (
  <div className="db-encoding">
    <div className="db-encoding__col">
      <div className="db-encoding__node db-encoding__node--bobby">
        <div className="db-encoding__sym">B</div>
        <div className="db-encoding__name">Bobby</div>
        <div className="db-encoding__sub">Raw intelligence</div>
      </div>
    </div>

    <div className="db-encoding__pipe">
      <div className="db-encoding__pipe-line db-encoding__pipe-line--alive">
        <span className="db-encoding__pipe-label">ENCODE → tool_call schema</span>
      </div>
      <div className="db-encoding__pipe-line db-encoding__pipe-line--dead">
        <span className="db-encoding__pipe-label db-encoding__pipe-label--dead">no_public_api</span>
      </div>
      <div className="db-encoding__pipe-line db-encoding__pipe-line--dead">
        <span className="db-encoding__pipe-label db-encoding__pipe-label--dead">no_rss</span>
      </div>
      <div className="db-encoding__pipe-line db-encoding__pipe-line--dead">
        <span className="db-encoding__pipe-label db-encoding__pipe-label--dead">no_webhook</span>
      </div>
    </div>

    <div className="db-encoding__col">
      <div className="db-encoding__node db-encoding__node--dale">
        <div className="db-encoding__sym">D</div>
        <div className="db-encoding__name">Dale</div>
        <div className="db-encoding__sub">Acts on it</div>
      </div>
      <div className="db-encoding__ghost">other bots</div>
      <div className="db-encoding__ghost">competitor scrapers</div>
      <div className="db-encoding__ghost">third party feeds</div>
    </div>
  </div>
);
