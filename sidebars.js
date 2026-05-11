// DeepBot docs sidebar.
// Top-level order: Start here, Dale, DeepBot Wallet, DeepBot LINK, Platform, The Brain,
// Token, Revenue Sharing, Bobby, Investors, Team.
// Within each section, items reflect a reading order (not source order).

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Start here',
      collapsible: true,
      collapsed: false, // entry point, always open
      items: [
        'new-to-crypto',
        'home',
        'quickstart',
        'three-products',
        'eight-reasons',
        'updates',
      ],
    },
    {
      type: 'category',
      label: 'Dale',
      collapsible: true,
      collapsed: true,
      items: [
        'dale/overview',
        'dale/first-conversation',
        'dale/how-it-thinks',
        'dale/memory',
        'dale/multichain',
        'dale/conversational-trading',
        'dale/wallet-management',
        'dale/tools',
        'dale/safety',
        'dale/autonomous',
        'dale/community-layer',
        'dale/response-modes',
        'dale/emergency-sell',
      ],
    },
    {
      type: 'category',
      label: 'DeepBot Wallet',
      collapsible: true,
      collapsed: true,
      items: ['wallet/overview'],
    },
    {
      type: 'category',
      label: 'DeepBot LINK',
      collapsible: true,
      collapsed: true,
      items: ['deepbot-link/overview'],
    },
    {
      type: 'category',
      label: 'Platform',
      collapsible: true,
      collapsed: true,
      items: [
        'convergence',
        'platform/convergence',
        'platform/safety',
        'platform/multichain-stack',
        'platform/partnerships',
      ],
    },
    {
      type: 'category',
      label: 'The Brain',
      collapsible: true,
      collapsed: true,
      items: [
        'brain/overview',
        'brain/layer-1-network',
        'brain/layer-2-routers',
        'brain/layer-3-safety',
        'brain/layer-4-rug',
        'brain/layer-5-convergence',
        'brain/layer-6-encoding',
      ],
    },
    {
      type: 'category',
      label: 'Token',
      collapsible: true,
      collapsed: true,
      items: ['token/deepai'],
    },
    {
      type: 'category',
      label: 'Revenue Sharing',
      collapsible: true,
      collapsed: true,
      items: [
        'revshare/overview',
        'revshare/streams',
        'revshare/phases',
        'revshare/nfts',
        'revshare/eligibility',
        'revshare/calculator',
        'revshare/claiming',
      ],
    },
    {
      type: 'category',
      label: 'Bobby',
      collapsible: true,
      collapsed: true,
      items: [
        'bobby/overview',
        'bobby/network',
        'bobby/for-projects',
        'bobby/founders-program',
      ],
    },
    {
      type: 'category',
      label: 'Investors',
      collapsible: true,
      collapsed: true,
      items: [
        'investors/platform-pitch',
        'investors/launch-sequence',
        'investors/roadmap',
      ],
    },
    {
      type: 'category',
      label: 'Team',
      collapsible: true,
      collapsed: true,
      items: ['team'],
    },
  ],
};

export default sidebars;
