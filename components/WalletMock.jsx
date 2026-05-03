// Wallet phone mockup for the wallet/overview page.
// Static visual; no animation. Accepts override props for variants.
// Ported from prototype/pages-wallet.jsx (window.WalletMock).

import React from 'react';

const DEFAULT_TOKENS = [
  { sym: 'DEEPAI', amt: '255.41K', usd: null,        change: null, badge: 'lime',   logo: 'D' },
  { sym: 'BUSD',   amt: '1,200',   usd: '$1,200.00', change: null, badge: 'yellow', logo: 'B' },
  { sym: 'USDC',   amt: '402.10',  usd: '$402.10',   change: null, badge: 'blue',   logo: 'U' },
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

export default function WalletMock({
  balance = '0.5011 ETH',
  fiat = '$1468.86',
  chain = 'ETH',
  walletName = 'S2',
  tokens,
}) {
  const list = tokens || DEFAULT_TOKENS;
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
          <span className="db-walletmock__chain-dot" />
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
            <div className={`db-walletmock__tok-logo db-walletmock__tok-logo--${t.badge}`}>{t.logo}</div>
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
}
