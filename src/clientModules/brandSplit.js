// Brand-split client module, applies the DeepBot brand treatment
// (white "Deep" + lime "Bot") to surfaces Docusaurus generates from
// plain-string frontmatter: the auto-H1 inside <article><header><h1>
// and every breadcrumb link.
//
// Why a client module instead of a swizzle: the alternative is forking
// DocItem and DocBreadcrumbs/Items wholesale, which couples us to
// Docusaurus internals and breaks on minor version bumps. This module
// runs once per route, walks two well-defined selectors, and rewrites
// the matching text nodes. ~30 lines, decoupled, identical visual
// outcome.
//
// Caveat: SSR HTML still ships plain "DeepBot" text. The brand split
// applies after hydration. Acceptable: H1 text remains semantically
// "DeepBot", and SEO crawlers see correct text. Only the color split
// is post-hydration.

const BRAND_FLAG = 'data-db-branded';
const BRAND_REGEX = /(DeepBot)(®?)/g;

function brandifyTextNode(textNode) {
  const text = textNode.nodeValue;
  if (!BRAND_REGEX.test(text)) {
    BRAND_REGEX.lastIndex = 0;
    return false;
  }
  BRAND_REGEX.lastIndex = 0;

  const parent = textNode.parentNode;
  const frag = document.createDocumentFragment();
  let lastIndex = 0;
  let match;
  while ((match = BRAND_REGEX.exec(text)) !== null) {
    if (match.index > lastIndex) {
      frag.appendChild(document.createTextNode(text.slice(lastIndex, match.index)));
    }
    const wrapper = document.createElement('span');
    wrapper.className = 'db-brand';
    const deep = document.createElement('span');
    deep.className = 'db-brand__deep';
    deep.textContent = 'Deep';
    const bot = document.createElement('span');
    bot.className = 'db-brand__bot';
    bot.textContent = 'Bot';
    wrapper.appendChild(deep);
    wrapper.appendChild(bot);
    if (match[2] === '®') {
      const r = document.createElement('span');
      r.className = 'db-brand__r';
      r.textContent = '®';
      wrapper.appendChild(r);
    }
    frag.appendChild(wrapper);
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    frag.appendChild(document.createTextNode(text.slice(lastIndex)));
  }
  parent.replaceChild(frag, textNode);
  return true;
}

function applyBrandSplit() {
  // Defensive exclusion: the navbar logo is a separate <img> rendering
  // the wordmark, never touched by this module's selectors anyway,
  // but :not() guards make the contract explicit so a future selector
  // change can't accidentally walk the brand element.
  const targets = document.querySelectorAll(
    'article header h1:not(.navbar__brand *):not(.navbar__logo *), ' +
    '.breadcrumbs__link:not(.navbar__brand *):not(.navbar__logo *), ' +
    '.menu__link:not(.navbar__brand *):not(.navbar__logo *)'
  );
  targets.forEach((el) => {
    if (el.getAttribute(BRAND_FLAG)) return;
    if (el.closest('.navbar__brand, .navbar__logo')) return;
    if (!el.textContent.includes('DeepBot')) return;

    // Walk text nodes. Element children stay as-is; only text gets
    // replaced. This handles the breadcrumb's <span> wrapper.
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    const textNodes = [];
    let node;
    while ((node = walker.nextNode())) textNodes.push(node);
    textNodes.forEach(brandifyTextNode);

    el.setAttribute(BRAND_FLAG, '1');
  });
}

if (typeof window !== 'undefined') {
  // Initial paint may already have the elements. Try once after
  // microtask flush, then again on next frame to cover hydration.
  Promise.resolve().then(applyBrandSplit);
  requestAnimationFrame(applyBrandSplit);
}

export function onRouteDidUpdate() {
  // Docusaurus calls this after every route change.
  // Defer to next frame so the new route's DOM is in place.
  requestAnimationFrame(applyBrandSplit);
}
