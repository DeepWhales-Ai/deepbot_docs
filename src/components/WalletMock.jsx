// Wallet phone mockup for the wallet/overview page.
// Static visual; no animation. Accepts override props for variants.
// Ported from prototype/pages-wallet.jsx (window.WalletMock).

import { Ethereum, Solana, Base, Polygon, BNB } from './ChainLogos.jsx';

// Chain pill picks the right ChainLogos.X based on the `chain` prop.
// All five lime-monochrome SVGs already exist in ChainLogos.jsx; reuse rather
// than redraw. Maps cover the standard tickers users see in the wallet.
const CHAIN_LOGOS = {
  ETH: Ethereum,
  ETHEREUM: Ethereum,
  SOL: Solana,
  SOLANA: Solana,
  BASE: Base,
  POLYGON: Polygon,
  MATIC: Polygon,
  BNB: BNB,
  BSC: BNB,
};

// Inline lime-monochrome stablecoin marks (currentColor for theme inheritance,
// to match the ChainLogos design language). Sized via CSS via the parent
// .db-walletmock__tok-logo (32px). Recognizable by shape — circle + $ for
// USDC, hexagon + B for BUSD — without infringing branded color treatments.
const UsdcLogo = () => (
  <svg viewBox="0 0 32 32" width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="2.2" />
    <text
      x="16" y="22"
      textAnchor="middle"
      fontSize="17"
      fontWeight="800"
      fill="currentColor"
      fontFamily="Manrope, sans-serif"
    >$</text>
  </svg>
);

const BusdLogo = () => (
  <svg viewBox="0 0 32 32" width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16 3 L27 9.5 L27 22.5 L16 29 L5 22.5 L5 9.5 Z"
      stroke="currentColor" strokeWidth="2" fill="none"
    />
    <text
      x="16" y="21"
      textAnchor="middle"
      fontSize="13"
      fontWeight="800"
      fill="currentColor"
      fontFamily="Manrope, sans-serif"
    >B</text>
  </svg>
);

// DEEPAI uses the Dale character image — same source as ConvergenceField
// and TryDale. The character IS the brand for our token.
const DeepaiLogo = () => (
  <img src="/img/dale-character.png" alt="DEEPAI" className="db-walletmock__tok-img" />
);

const DEFAULT_TOKENS = [
  { sym: 'DEEPAI', amt: '255.41K', usd: null,        change: null, badge: 'lime', Logo: DeepaiLogo },
  { sym: 'BUSD',   amt: '1,200',   usd: '$1,200.00', change: null, badge: 'mono', Logo: BusdLogo },
  { sym: 'USDC',   amt: '402.10',  usd: '$402.10',   change: null, badge: 'mono', Logo: UsdcLogo },
];

const ACTIONS = [
  { icon: '▦', label: 'Receive' },
  { icon: '↗', label: 'Send' },
  { icon: '⇄', label: 'Swap' },
  { icon: '↻', label: 'History' },
];

const NAV = [
  { icon: '⌂', label: 'Home', active: true },
  { icon: '▦', label: 'Receive' },
  { icon: '↗', label: 'Send' },
  { icon: '⇄', label: 'Swap' },
  { icon: '↻', label: 'History' },
];

export function WalletMock({
  balance = '0.5011 ETH',
  fiat = '$1468.86',
  chain = 'ETH',
  walletName = 'S2',
  tokens,
}) {
  const list = tokens || DEFAULT_TOKENS;
  const ChainLogo = CHAIN_LOGOS[chain.toUpperCase()] || Ethereum;
  return (
    <div className="db-walletmock">
      <div className="db-walletmock__top">
        <div className="db-walletmock__close">×</div>
        <div className="db-walletmock__title">DeepBot Wallet</div>
        <div className="db-walletmock__top-actions"><span>⌄</span><span>⋮</span></div>
      </div>

      <div className="db-walletmock__pillrow">
        <div className="db-walletmock__wpill">
          <span className="db-walletmock__wpill-icon">▣</span>
          <span>{walletName}</span>
          <span className="db-walletmock__wpill-caret">⌄</span>
        </div>
        <div className="db-walletmock__copy">⎘</div>
        <div style={{ flex: 1 }} />
        <div className="db-walletmock__chainpill">
          <span className="db-walletmock__chain-logo"><ChainLogo size={14} /></span>
          <span>{chain}</span>
          <span className="db-walletmock__wpill-caret">⌄</span>
        </div>
      </div>

      <div className="db-walletmock__balance">
        <div className="db-walletmock__bal-main">{balance}</div>
        <div className="db-walletmock__bal-fiat">{fiat}</div>
      </div>

      <div className="db-walletmock__actions">
        {ACTIONS.map((a, i) => (
          <div className="db-walletmock__action" key={i}>
            <div className="db-walletmock__action-disc">{a.icon}</div>
            <div className="db-walletmock__action-label">{a.label}</div>
          </div>
        ))}
      </div>

      <div className="db-walletmock__tok-head">
        <div className="db-walletmock__tok-title">Tokens</div>
        <div className="db-walletmock__tok-meta">⋮</div>
      </div>

      <div className="db-walletmock__tok-list">
        {list.map((t, i) => (
          <div className="db-walletmock__tok-row" key={i}>
            <div className={`db-walletmock__tok-logo db-walletmock__tok-logo--${t.badge}`}>
              {t.Logo ? <t.Logo /> : t.logo}
            </div>
            <div className="db-walletmock__tok-meta-col">
              <div className="db-walletmock__tok-sym">{t.sym}</div>
              <div className="db-walletmock__tok-amt">{t.amt}</div>
            </div>
            {t.usd && <div className="db-walletmock__tok-usd">{t.usd}</div>}
          </div>
        ))}
      </div>

      <div className="db-walletmock__navbar">
        {NAV.map((n, i) => (
          <div className={`db-walletmock__nav ${n.active ? 'is-active' : ''}`} key={i}>
            <span className="db-walletmock__nav-icon">{n.icon}</span>
            <span className="db-walletmock__nav-label">{n.label}</span>
          </div>
        ))}
      </div>

      <div className="db-walletmock__handle" />
    </div>
  );
};

export default WalletMock;
