// DeepBot docs sidebar — same 47 entries as the Mintlify-era docs.json
// navigation, ordered identically. 10 groups + 1 hidden Internal slot for
// the components-test page.

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Start here',
      collapsed: false,
      items: [
        'home',
        'three-products',
        'eight-reasons',
        'quickstart',
        'updates',
        'receipts',
      ],
    },
    {
      type: 'category',
      label: 'Dale',
      collapsed: false,
      items: [
        'dale/overview',
        'dale/how-it-thinks',
        'dale/memory',
        'dale/autonomous',
        'dale/first-conversation',
        'dale/tools',
        'dale/multichain',
        'dale/safety',
        'dale/wallet-management',
        'dale/conversational-trading',
        'dale/emergency-sell',
        'dale/community-layer',
        'dale/response-modes',
      ],
    },
    {
      type: 'category',
      label: 'Bobby',
      collapsed: false,
      items: [
        'bobby/overview',
        'bobby/network',
        'bobby/for-projects',
        'bobby/founders-program',
      ],
    },
    {
      type: 'category',
      label: 'Wallet',
      collapsed: false,
      items: ['wallet/overview'],
    },
    {
      type: 'category',
      label: 'Platform',
      collapsed: false,
      items: [
        'platform/convergence',
        'platform/safety',
        'platform/multichain-stack',
        'platform/partnerships',
      ],
    },
    {
      type: 'category',
      label: 'The Brain',
      collapsed: false,
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
      collapsed: false,
      items: ['token/deepai'],
    },
    {
      type: 'category',
      label: 'Revenue Sharing',
      collapsed: false,
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
      label: 'Investors',
      collapsed: false,
      items: [
        'investors/platform-pitch',
        'investors/launch-sequence',
        'investors/roadmap',
      ],
    },
    {
      type: 'category',
      label: 'Team',
      collapsed: false,
      items: ['team'],
    },
  ],
};

export default sidebars;
