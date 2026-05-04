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

// Real stablecoin marks adapted to lime monochrome via currentColor.
// Source SVG paths verbatim; only the brand fill colors removed so our parent
// `color: var(--lime)` paints them. Same treatment as ChainLogos.
//
// USDC — official Centre/Circle mark (the two outer "C" arcs + the inner $
// symbol). Source: cryptocurrency-icons npm package, color/usdc.svg.
const UsdcLogo = () => (
  <svg viewBox="0 0 32 32" width="22" height="22" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.022 18.124c0-2.124-1.28-2.852-3.84-3.156-1.828-.243-2.193-.728-2.193-1.578 0-.85.61-1.396 1.828-1.396 1.097 0 1.707.364 2.011 1.275a.458.458 0 00.427.303h.975a.416.416 0 00.427-.425v-.06a3.04 3.04 0 00-2.743-2.489V9.142c0-.243-.183-.425-.487-.486h-.915c-.243 0-.426.182-.487.486v1.396c-1.829.242-2.986 1.456-2.986 2.974 0 2.002 1.218 2.791 3.778 3.095 1.707.303 2.255.668 2.255 1.639 0 .97-.853 1.638-2.011 1.638-1.585 0-2.133-.667-2.316-1.578-.06-.242-.244-.364-.427-.364h-1.036a.416.416 0 00-.426.425v.06c.243 1.518 1.219 2.61 3.23 2.914v1.457c0 .242.183.425.487.485h.915c.243 0 .426-.182.487-.485V21.34c1.829-.303 3.047-1.578 3.047-3.217z" />
    <path d="M12.892 24.497c-4.754-1.7-7.192-6.98-5.424-11.653.914-2.55 2.925-4.491 5.424-5.402.244-.121.365-.303.365-.607v-.85c0-.242-.121-.424-.365-.485-.061 0-.183 0-.244.06a10.895 10.895 0 00-7.13 13.717c1.096 3.4 3.717 6.01 7.13 7.102.244.121.488 0 .548-.243.061-.06.061-.122.061-.243v-.85c0-.182-.182-.424-.365-.546zm6.46-18.936c-.244-.122-.488 0-.548.242-.061.061-.061.122-.061.243v.85c0 .243.182.485.365.607 4.754 1.7 7.192 6.98 5.424 11.653-.914 2.55-2.925 4.491-5.424 5.402-.244.121-.365.303-.365.607v.85c0 .242.121.424.365.485.061 0 .183 0 .244-.06a10.895 10.895 0 007.13-13.717c-1.096-3.46-3.778-6.07-7.13-7.162z" />
  </svg>
);

// BUSD — official Binance diamond/star: four parallelogram diamonds arranged
// around a central point. Source: cryptologos.cc binance-usd-busd-logo.svg.
const BusdLogo = () => (
  <svg viewBox="0 0 336.41 337.42" width="22" height="22" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M168.2.71l41.5,42.5L105.2,147.71l-41.5-41.5Z" />
    <path d="M231.2,63.71l41.5,42.5L105.2,273.71l-41.5-41.5Z" />
    <path d="M42.2,126.71l41.5,42.5-41.5,41.5L.7,169.21Z" />
    <path d="M294.2,126.71l41.5,42.5L168.2,336.71l-41.5-41.5Z" />
  </svg>
);

// DEEPAI uses the Dale character image — same source as ConvergenceField
// and TryDale. The character IS the brand for our token.
const DeepaiLogo = () => (
  <img src="/img/dale-character.png" alt="DEEPAI" className="db-walletmock__tok-img" />
);

// ETH row reuses the existing lime-monochrome Ethereum mark from ChainLogos.
const EthLogo = () => <Ethereum size={22} />;

// Default portfolio. Internally consistent: per-token USD values sum to
// the top-line total ($2,300 + $1,166.76 + $1,200 + $402.10 = $5,068.86).
// 1.73 ETH equivalent is shown as the secondary line on the top balance.
const DEFAULT_TOKENS = [
  { sym: 'DEEPAI', amt: '255.41K', usd: '$2,300.00', change: null, badge: 'lime', Logo: DeepaiLogo },
  { sym: 'ETH',    amt: '0.5011',  usd: '$1,166.76', change: null, badge: 'mono', Logo: EthLogo },
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

// Props:
//   balance — primary top line (USD total of the multi-asset portfolio)
//   fiat    — secondary top line (ETH equivalent, or any subtitle)
//   chain   — active chain pill ticker (ETH, SOL, BASE, MATIC, BNB)
//   walletName — small wallet pill label
//   tokens  — override DEFAULT_TOKENS if needed
// Defaults reflect a believable trader portfolio: per-token USD values sum
// to the top-line total. Override when this mock appears in different page
// contexts that need a different snapshot.
export function WalletMock({
  balance = '$5,068.86',
  fiat = '1.73 ETH equivalent',
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
