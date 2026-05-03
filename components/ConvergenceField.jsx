// Convergence Theatre — the hardest interactive in the prototype.
// Phases per cycle (~6.5s = 108 ticks @ 60ms):
//   0.00–0.45 ambient · 0.45–0.65 building · 0.65–0.78 converge · 0.78–1.00 after
// Per kickoff §8.4: timing is critical to feel — don't "improve" it.
// Per kickoff §8.6: ported as-is from prototype/pages-start.jsx (window.ConvergenceField).
//
// Asset path: image references /images/dale-character.png (the favicon source PNG).

const seed = (i) => {
  const x = Math.sin(i * 9301 + 49297) * 43758.5453;
  return x - Math.floor(x);
};

const TOKENS = [
  { sym: '$PEPE',   sources: 47, thr: 'met' },
  { sym: '$WIF',    sources: 18, thr: 'below' },
  { sym: '$BRETT',  sources: 31, thr: 'met' },
  { sym: '$MOG',    sources: 22, thr: 'met' },
  { sym: '$BONK',   sources: 8,  thr: 'below' },
  { sym: '$TURBO',  sources: 41, thr: 'met' },
  { sym: '$POPCAT', sources: 4,  thr: 'refused' },
];

export default function ConvergenceField() {
  const [tick, setTick] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 60);
    return () => clearInterval(id);
  }, []);

  const { nodes, clusters } = React.useMemo(() => {
    const cs = [];
    const clusterCount = 9;
    for (let c = 0; c < clusterCount; c++) {
      const cx = 50 + seed(c * 7) * 380;
      const cy = 30 + seed(c * 7 + 100) * 260;
      cs.push({ cx, cy, id: c });
    }
    const ns = [];
    let id = 0;
    for (let c = 0; c < clusterCount; c++) {
      const count = 18 + Math.floor(seed(c * 11 + 50) * 14);
      const spread = 22 + seed(c * 11 + 80) * 18;
      for (let i = 0; i < count; i++) {
        const angle = seed(id * 13) * Math.PI * 2;
        const dist = Math.pow(seed(id * 13 + 7), 0.7) * spread;
        const x = cs[c].cx + Math.cos(angle) * dist;
        const y = cs[c].cy + Math.sin(angle) * dist;
        const r = 0.9 + seed(id * 17) * 1.4;
        const phase = seed(id * 19) * 6.28;
        ns.push({ x, y, r, phase, cluster: c, id });
        id++;
      }
    }
    return { nodes: ns, clusters: cs };
  }, []);

  const cycleLen = 108;
  const cycleT = (tick % cycleLen) / cycleLen;
  const cycleNum = Math.floor(tick / cycleLen);

  const phase = cycleT < 0.45 ? 'ambient'
              : cycleT < 0.65 ? 'building'
              : cycleT < 0.78 ? 'converge'
              :                 'after';

  const tokenIdx = cycleNum % TOKENS.length;
  const token = TOKENS[tokenIdx];
  const targetCluster = cycleNum % clusters.length;
  const targetX = 580, targetY = 165;

  const beams = [];
  if (phase === 'ambient') {
    const count = 3 + Math.floor(seed(cycleNum + tick * 0.01) * 3);
    for (let i = 0; i < count; i++) {
      const idx = Math.floor(seed(cycleNum * 100 + i + Math.floor(tick / 20)) * nodes.length);
      const node = nodes[idx];
      if (!node) continue;
      const localT = ((tick + i * 7) % 30) / 30;
      beams.push({ node, t: localT, weight: 0.6, key: `amb-${cycleNum}-${i}-${Math.floor(tick / 30)}` });
    }
  } else if (phase === 'building') {
    const count = 6 + Math.floor((cycleT - 0.45) * 18);
    for (let i = 0; i < count; i++) {
      const useTarget = i % 2 === 0;
      const candidates = nodes.filter((n) => useTarget ? n.cluster === targetCluster : n.cluster !== targetCluster);
      const idx = Math.floor(seed(cycleNum * 200 + i + Math.floor(tick / 12)) * candidates.length);
      const node = candidates[idx];
      if (!node) continue;
      const localT = ((tick + i * 4) % 22) / 22;
      beams.push({ node, t: localT, weight: useTarget ? 1 : 0.5, key: `bld-${cycleNum}-${i}-${Math.floor(tick / 22)}` });
    }
  } else if (phase === 'converge') {
    const targetNodes = nodes.filter((n) => n.cluster === targetCluster);
    targetNodes.forEach((node) => {
      const localT = Math.min(1, ((cycleT - 0.65) / 0.13) + seed(node.id) * 0.2);
      beams.push({ node, t: localT, weight: 1.4, key: `cv-${cycleNum}-${node.id}` });
    });
  }

  let halo = 0;
  if (phase === 'building')  halo = (cycleT - 0.45) / 0.2 * 0.5;
  if (phase === 'converge')  halo = 0.5 + ((cycleT - 0.65) / 0.13) * 0.5;
  if (phase === 'after')     halo = Math.max(0, 1 - (cycleT - 0.78) / 0.22) * 0.7;

  const labelOp = phase === 'converge' ? Math.min(1, (cycleT - 0.65) / 0.05)
                : phase === 'after'    ? Math.max(0, 1 - (cycleT - 0.78) / 0.22)
                : 0;

  const beamPath = (n, t) => {
    const dx = targetX - n.x, dy = targetY - n.y;
    const cx = n.x + dx * 0.5 + (targetY - n.y) * 0.15;
    const cy = n.y + dy * 0.5 - 20;
    const x = (1 - t) * (1 - t) * n.x + 2 * (1 - t) * t * cx + t * t * targetX;
    const y = (1 - t) * (1 - t) * n.y + 2 * (1 - t) * t * cy + t * t * targetY;
    return { x, y, cx, cy };
  };

  const cycleColor = phase === 'after' ? (token.thr === 'refused' ? '#FF6B6B' : '#CCFF00') : '#CCFF00';

  return (
    <div className="db-converge">
      <svg viewBox="0 0 760 320" preserveAspectRatio="xMidYMid meet" className="db-converge__svg">
        <defs>
          <radialGradient id="pingGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#CCFF00" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#CCFF00" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="targetGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#CCFF00" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#CCFF00" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="clusterGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#CCFF00" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#CCFF00" stopOpacity="0" />
          </radialGradient>
        </defs>

        <text x="20" y="20" className="db-converge__label">BOBBY · COMMUNITY SIGNALS</text>
        <text x="740" y="20" textAnchor="end" className="db-converge__label">DALE · TOOL CALL</text>

        {(phase === 'building' || phase === 'converge') && (() => {
          const c = clusters[targetCluster];
          const intensity = phase === 'building' ? (cycleT - 0.45) / 0.2 : 1;
          return <circle cx={c.cx} cy={c.cy} r={45 * intensity} fill="url(#clusterGlow)" />;
        })()}

        {nodes.map((n) => {
          const inTarget = n.cluster === targetCluster;
          const baseTwinkle = 0.25 + 0.3 * Math.sin(tick * 0.06 + n.phase);
          let opacity = baseTwinkle;
          let radius = n.r;
          if (phase === 'building' && inTarget) {
            opacity = 0.5 + 0.5 * Math.sin(tick * 0.3 + n.phase);
            radius = n.r * 1.2;
          } else if (phase === 'converge' && inTarget) {
            opacity = 1;
            radius = n.r * 1.5;
          }
          return <circle key={n.id} cx={n.x} cy={n.y} r={radius} fill="#CCFF00" opacity={opacity} />;
        })}

        {beams.map((b) => {
          const p = beamPath(b.node, b.t);
          const startX = b.node.x, startY = b.node.y;
          const pathD = `M ${startX} ${startY} Q ${p.cx} ${p.cy} ${p.x} ${p.y}`;
          return (
            <g key={b.key}>
              <path d={pathD} stroke="#CCFF00" strokeWidth={0.6 * b.weight} fill="none" opacity={0.25 + 0.4 * b.t} />
              <circle cx={p.x} cy={p.y} r={1.6 + b.weight * 0.8} fill="#CCFF00" />
              <circle cx={p.x} cy={p.y} r={4 + b.weight * 2} fill="url(#pingGlow)" />
            </g>
          );
        })}

        <g>
          <circle cx={targetX} cy={targetY} r={20 + halo * 24} fill="url(#targetGlow)" />
          <clipPath id="daleClip">
            <circle cx={targetX} cy={targetY} r={16} />
          </clipPath>
          <image
            href="/images/dale-character.png"
            x={targetX - 16} y={targetY - 16}
            width="32" height="32"
            clipPath="url(#daleClip)"
            preserveAspectRatio="xMidYMid slice"
          />
        </g>

        {labelOp > 0 && (
          <g opacity={labelOp}>
            <line x1={targetX + 14} y1={targetY} x2={680} y2={targetY}
              stroke={cycleColor} strokeWidth="1" strokeDasharray="3 4" opacity="0.55" />
            <polygon points={`${680},${targetY - 4} ${686},${targetY} ${680},${targetY + 4}`}
              fill={cycleColor} opacity="0.85" />
            <text x={targetX + 24} y={targetY - 12} className="db-converge__call" fill={cycleColor}>
              {token.thr === 'refused' ? 'refuse_trade' : 'detect_convergence'}
            </text>
            <text x={targetX + 24} y={targetY + 22} className="db-converge__callargs">
              {token.sym} · {token.sources} sources · {token.thr}
            </text>
          </g>
        )}
      </svg>

      <div className="db-converge__cap">
        <span className="db-converge__cap-eyebrow">CONVERGENCE</span>
        <span className="db-converge__cap-body">
          {phase === 'ambient'  && 'Ambient chatter across thousands of communities · single signals are noise'}
          {phase === 'building' && `Cluster activating · ${token.sym} pinging across ${token.sources} sources`}
          {phase === 'converge' && `Threshold ${token.thr} · Dale firing tool call`}
          {phase === 'after'    && (token.thr === 'refused' ? 'Refused · pattern matched a known rug deployer' : 'Encoded for Dale only · executable in conversation')}
        </span>
      </div>
    </div>
  );
}
