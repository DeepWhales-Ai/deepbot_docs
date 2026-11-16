// @ts-check
// DeepBot docs — Docusaurus 3 config
// Same 47-entry IA, dark default with light toggle, Plausible analytics,
// no topbar links/CTA (per kickoff brief follow-ups).

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DeepBot',
  tagline: "We don't predict. We detect.",
  // Favicon option A (Krypt 11-16, the same art as trade.deepbot.pro #576):
  // the official ringed mascot. Tab icons (.ico 16/32/48, favicon-16..96)
  // keep transparent corners; apple-touch-icon and favicon-192/512 sit on
  // solid black, because iOS and manifest icons must be opaque. Replaces
  // the 11-15 full-bleed square render.
  favicon: 'favicon.ico',

  url: 'https://docs.deepbot.pro',
  baseUrl: '/',

  organizationName: 'DeepWhales-Ai',
  projectName: 'deepbot_docs',

  onBrokenLinks: 'warn',

  // onBrokenMarkdownLinks moved into markdown.hooks per Docusaurus v3.x
  // deprecation. Same behavior; just the new home for the hook.
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // No trailing slashes — matches Mintlify-era URLs we used in stubs.
  trailingSlash: false,

  // Client modules run in the browser after hydration. The brandSplit
  // module rewrites "DeepBot" in H1s and breadcrumbs into the white-Deep
  // + lime-Bot brand split — surfaces frontmatter strings can't reach.
  clientModules: [
    './src/clientModules/brandSplit.js',
  ],

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
        // components-test is a dev harness, not a public page. It was being
        // built and listed in sitemap.xml, which made it a published surface
        // subject to the canon rules. Excluded from production builds only,
        // so `npm start` still serves it for component work. The array
        // reproduces GlobExcludeDefault from @docusaurus/utils, because
        // supplying `exclude` replaces the plugin default rather than
        // extending it.
        pages: {
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
            ...(process.env.NODE_ENV === 'production' ? ['**/components-test.mdx'] : []),
          ],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  // Local search — @easyops-cn/docusaurus-search-local builds a Lunr index
  // at build time and serves it from the static bundle. No Algolia signup,
  // no third-party network call. hashed:true cache-busts the index file so
  // search updates ship with each deploy. docsRouteBasePath:'/' matches our
  // root-served docs; without it the indexer scopes to the default /docs.
  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en'],
        indexBlog: false,
        docsRouteBasePath: '/',
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],

  // Plausible analytics — site registered at plausible.io for
  // docs.deepbot.pro. Pre-launch traffic from deepbot-docs.vercel.app
  // records under the same site name; the dashboard trims to the
  // real domain after the CNAME flip. Privacy-first, no cookies,
  // GDPR-clean — matches the brand voice.
  scripts: [
    {
      src: 'https://plausible.io/js/script.js',
      defer: true,
      'data-domain': 'docs.deepbot.pro',
    },
  ],

  // Favicon link tags — sized PNGs for high-DPI tabs + apple-touch-icon
  // for iOS home-screen pinning. The siteConfig.favicon above handles
  // the legacy .ico declaration; these supplement it with the modern
  // multi-size icon set browsers prefer.
  headTags: [
    {
      tagName: 'link',
      attributes: { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/img/favicon-16.png' },
    },
    {
      tagName: 'link',
      attributes: { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/img/favicon-32.png' },
    },
    {
      tagName: 'link',
      attributes: { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/img/favicon-192.png' },
    },
    {
      tagName: 'link',
      attributes: { rel: 'apple-touch-icon', sizes: '180x180', href: '/img/apple-touch-icon.png' },
    },
    {
      tagName: 'meta',
      attributes: { name: 'theme-color', content: '#0A0A0A' },
    },
    // The company and its logo, for the icon Google shows beside a result.
    // Constants only; the logo is the full-bleed 512 above.
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'DeepBot',
        url: 'https://deepbot.pro',
        logo: 'https://docs.deepbot.pro/img/favicon-512.png',
      }),
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
        // PNG wordmark — clean kerning, correct ® glyph, original
        // typography. The navbar background is forced #0A0A0A in both
        // light and dark mode (see custom.css), so the white-Deep +
        // lime-Bot PNG reads correctly across themes — no light-mode
        // variant needed at this resolution. The SVG attempt was
        // backed out: at the displayed 140px width, system-font SVG
        // rendering looked thin and the ® shrank to a dot. Source
        // SVGs remain in /static/img/ for future use when the source
        // typeface is available.
        logo: {
          alt: 'DeepBot',
          src: 'img/logo-dark.png',
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

      // Search wired via @easyops-cn/docusaurus-search-local (see `plugins`
      // above). Local Lunr index, no third-party. The plugin swizzles the
      // SearchBar slot into the navbar automatically, so no `items` entry
      // is needed here. Cmd/Ctrl+K shortcut is provided by the plugin.
    }),
};

export default config;
