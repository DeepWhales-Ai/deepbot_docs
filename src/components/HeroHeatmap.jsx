// HeroHeatmap, ported from the landing.deepbot.pro round-2 prototype.
// Animated grid of cells brightening as the network reaches consensus,
// lime accent. Drops in above the static deepbot-link.png graphic.
//
// Deterministic seed per cell so SSR output matches first client render
// (tick starts at 0 on both); the interval only runs client-side via
// useEffect. prefers-reduced-motion freezes the grid at frame 0.

import React, { useEffect, useMemo, useState } from 'react';

const COLS = 36;
const ROWS = 14;
const TICKERS = ["WIF","BONK","MOG","PNUT","POPCAT","GOAT","MEW","FWOG","BRETT","TURBO","DOG","NEIRO","PEPE","SHIB","FLOKI"];

const seed = (i) => {
  const x = Math.sin(i * 9301 + 49297) * 43758.5453;
  return x - Math.floor(x);
};

export default function HeroHeatmap() {
  const cells = useMemo(() => {
    const cx = COLS / 2;
    const cy = ROWS / 2;
    const norm = Math.sqrt(cx * cx + cy * cy);
    return Array.from({ length: COLS * ROWS }, (_, i) => {
      const col = i % COLS;
      const row = Math.floor(i / COLS);
      const dist = Math.sqrt((col - cx) ** 2 + (row - cy) ** 2 * 1.4) / norm;
      return {
        i,
        base: Math.max(0, 1 - dist) * 0.7 + seed(i) * 0.3,
        phase: seed(i + 9000) * Math.PI * 2,
        ticker: TICKERS[i % TICKERS.length],
      };
    });
  }, []);

  const [tick, setTick] = useState(0);
  useEffect(() => {
    if (typeof window !== 'undefined' &&
        window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }
    const id = setInterval(() => setTick((t) => t + 1), 80);
    return () => clearInterval(id);
  }, []);

  const t = tick * 0.05;

  return (
    <div className="db-heatmap" aria-hidden="true">
      {cells.map((c) => {
        const v = c.base * (0.55 + 0.45 * Math.sin(t + c.phase));
        const lit = v > 0.55;
        const style = lit
          ? {
              background: `rgba(200, 255, 30, ${0.18 + v * 0.6})`,
              boxShadow: `0 0 ${8 + v * 16}px rgba(200, 255, 30, ${v * 0.4})`,
            }
          : {
              background: `rgba(36, 36, 32, ${0.25 + v * 0.4})`,
            };
        return (
          <div key={c.i} className="db-heatmap__cell" style={style}>
            {lit && v > 0.78 && <span className="db-heatmap__label">{c.ticker}</span>}
          </div>
        );
      })}
    </div>
  );
}
