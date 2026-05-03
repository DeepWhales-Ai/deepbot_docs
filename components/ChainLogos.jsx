// Five chain SVGs in lime monochrome (currentColor for fill).
// Ported verbatim from prototype/home-extras.jsx.

import React from 'react';

export const Ethereum = ({ size = 28 }) => (
  <svg viewBox="0 0 256 417" width={size} height={size} fill="none">
    <path fill="currentColor" d="M127.961 0l-2.795 9.5v275.668l2.795 2.79 127.962-75.638z" opacity=".85"/>
    <path fill="currentColor" d="M127.962 0L0 212.32l127.962 75.639V154.158z"/>
    <path fill="currentColor" d="M127.961 312.187l-1.575 1.92v98.199l1.575 4.6L256 236.587z" opacity=".85"/>
    <path fill="currentColor" d="M127.962 416.905v-104.72L0 236.585z"/>
    <path fill="currentColor" d="M127.961 287.958l127.96-75.637-127.96-58.162z" opacity=".5"/>
    <path fill="currentColor" d="M0 212.32l127.96 75.638v-133.8z" opacity=".7"/>
  </svg>
);

export const Solana = ({ size = 28 }) => (
  <svg viewBox="0 0 397.7 311.7" width={size} height={size}>
    <path fill="currentColor" d="M64.6 237.9c2.4-2.4 5.7-3.8 9.2-3.8h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1l62.7-62.7z"/>
    <path fill="currentColor" d="M64.6 3.8C67.1 1.4 70.4 0 73.8 0h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1L64.6 3.8z"/>
    <path fill="currentColor" d="M333.1 120.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8 0-8.7 7-4.6 11.1l62.7 62.7c2.4 2.4 5.7 3.8 9.2 3.8h317.4c5.8 0 8.7-7 4.6-11.1l-62.7-62.7z"/>
  </svg>
);

export const Base = ({ size = 28 }) => (
  <svg viewBox="0 0 111 111" width={size} height={size}>
    <path fill="currentColor" d="M54.921 110.034c30.438 0 55.108-24.622 55.108-55.017 0-30.395-24.67-55.017-55.108-55.017C26.043.0001 2.382 22.418.011 51.057H72.81v7.945H.011c2.371 28.639 26.032 51.032 54.91 51.032z"/>
  </svg>
);

export const Polygon = ({ size = 28 }) => (
  <svg viewBox="0 0 38.4 33.5" width={size} height={size}>
    <path fill="currentColor" d="M29 10.2c-.7-.4-1.6-.4-2.4 0L21 13.5l-3.8 2.1-5.5 3.3c-.7.4-1.6.4-2.4 0L5 16.3c-.7-.4-1.2-1.2-1.2-2.1v-5c0-.8.4-1.6 1.2-2.1l4.3-2.5c.7-.4 1.6-.4 2.4 0L16 7.2c.7.4 1.2 1.2 1.2 2.1v3.3l3.8-2.2V7c0-.8-.4-1.6-1.2-2.1L12 .3c-.7-.4-1.6-.4-2.4 0L1.2 5.2C.4 5.6 0 6.4 0 7.2v9.6c0 .8.4 1.6 1.2 2.1l8.4 4.9c.7.4 1.6.4 2.4 0l5.5-3.2 3.8-2.2 5.5-3.2c.7-.4 1.6-.4 2.4 0l4.3 2.5c.7.4 1.2 1.2 1.2 2.1v5c0 .8-.4 1.6-1.2 2.1L29 29.4c-.7.4-1.6.4-2.4 0l-4.3-2.5c-.7-.4-1.2-1.2-1.2-2.1v-3.3l-3.8 2.2v3.3c0 .8.4 1.6 1.2 2.1l8.4 4.9c.7.4 1.6.4 2.4 0l8.4-4.9c.7-.4 1.2-1.2 1.2-2.1V17.4c0-.8-.4-1.6-1.2-2.1L29 10.2z"/>
  </svg>
);

export const BNB = ({ size = 28 }) => (
  <svg viewBox="0 0 96 96" width={size} height={size}>
    <path fill="currentColor" d="M30.984 41.504L48 24.488l17.025 17.025 9.901-9.901L48 4.687 21.083 31.604l9.901 9.9zM4.687 48l9.9-9.9 9.9 9.9-9.9 9.9-9.9-9.9zM30.984 54.496L48 71.512l17.025-17.024 9.906 9.896-.005.005L48 91.313 21.083 64.401l-.014-.014 9.915-9.891zM71.512 48l9.9-9.9 9.9 9.9-9.9 9.9-9.9-9.9zM58.043 47.994h.005L48 37.95l-7.42 7.42-.853.852-1.758 1.76-.014.013.014.014L48 58.05l10.043-10.044.005-.006-.005-.006z"/>
  </svg>
);

export default { Ethereum, Solana, Base, Polygon, BNB };
