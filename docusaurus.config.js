// @ts-check
// DeepBot docs — Docusaurus 3 config
// Same 47-entry IA, dark default with light toggle, Plausible analytics,
// no topbar links/CTA (per kickoff brief follow-ups).

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DeepBot',
  tagline: "We don't predict. We detect.",
  favicon: 'img/favicon.png',

  url: 'https://docs.deepbot.pro',
  baseUrl: '/',

  organizationName: 'DeepWhales-Ai',
  projectName: 'deepbot_docs',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // No trailing slashes — matches Mintlify-era URLs we used in stubs.
  trailingSlash: false,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: '/', // serve docs at the root of the site
          sidebarPath: './sidebars.js',
          editUrl: undefined, // no "edit this page" link in v1
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  // Plausible analytics. The Mintlify config used integrations.plausible.domain;
  // here we inject the script tag directly via headTags. Krypt confirmed the
  // site key is "docs.deepbot.pro" itself (standard Plausible identifier).
  headTags: [
    {
      tagName: 'script',
      attributes: {
        defer: 'true',
        'data-domain': 'docs.deepbot.pro',
        src: 'https://plausible.io/js/script.js',
      },
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/dale-character.png',

      // Sidebar pin/unpin per Krypt — Docusaurus's built-in toggle that
      // hides the entire sidebar so content goes full-width. Defaults to
      // false (button hidden); enabling here surfaces the bottom-left
      // collapse arrow + the expand button when collapsed.
      // Group-level collapse is handled separately by `collapsible: true`
      // on each category in sidebars.js. The two behaviors are independent:
      // groups toggle individually, the whole sidebar toggles via this.
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: false,
        },
      },

      // Dark default with toggle. Per kickoff §1.4: dark default,
      // toggle available, both modes verified at definition-of-done.
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },

      navbar: {
        title: '',
        logo: {
          alt: 'DeepBot',
          src: 'img/logo-light.png',
          srcDark: 'img/logo-dark.png',
          width: 140,
        },
        // Per Krypt: no topbar links and no CTA button. Sidebar carries nav.
        items: [],
      },

      // Footer reduced to copyright only. Per master brief Part 2 (and the
      // earlier topbar strip): products do not publicly cross-link from
      // inside user-flow copy — having all three bot handles + socials in a
      // global footer would violate that on every page. Just the line,
      // centered/muted/small — see custom.css for the styling.
      footer: {
        copyright: `DeepBot · ${new Date().getFullYear()}`,
      },

      prism: {
        theme: prismThemes.vsLight,
        darkTheme: prismThemes.vsDark,
        additionalLanguages: ['bash', 'json', 'jsx', 'tsx'],
      },

      // Algolia disabled — Mintlify search is gone; Docusaurus uses local
      // search via @easyops-cn/docusaurus-search-local plugin if needed,
      // or DocSearch (free tier requires apply). Defer search config until
      // post-launch per kickoff §1.5 spirit (built-in only, no Algolia wire).
    }),
};

export default config;
