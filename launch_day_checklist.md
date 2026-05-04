# Launch-day checklist — docs.deepbot.pro

**Target launch date:** 2026-05-07
**Staging URL until then:** https://deepbot-docs.vercel.app/
**Owner:** Krypt
**Estimated total time:** 30-60 min including DNS propagation

The site stays at the staging URL until launch day. **No DNS changes before
2026-05-07.** This document is the runbook for the cutover.

---

## 1. CNAME flip via GoDaddy

Order matters — Vercel needs to know about the domain before DNS resolves to it.

1. **Add the domain in Vercel**
   - Vercel dashboard → `deepbot_docs` project → Settings → Domains
   - Add `docs.deepbot.pro`
   - Vercel returns the CNAME target (typically `cname.vercel-dns.com`,
     occasionally a project-specific subdomain). **Copy the exact value Vercel shows.**

2. **Add the CNAME in GoDaddy DNS**
   - GoDaddy → `deepbot.pro` → DNS Management → Add record
   - Type: `CNAME`
   - Host / Name: `docs`
   - Points to / Value: the exact target Vercel provided
   - TTL: `600` seconds (fast cutover; default 1 hour is fine but slower)

3. **Wait for DNS propagation**
   - 5-30 min typical
   - Spot-check from a clean DNS resolver:
     ```
     nslookup docs.deepbot.pro 1.1.1.1
     ```
   - Should resolve to a Vercel edge IP

4. **Vercel auto-provisions SSL**
   - Visible in Vercel dashboard under Domains → `docs.deepbot.pro` status pill
   - Watch for "Valid Configuration" + the lock icon
   - Usually 1-5 min after DNS resolves; sometimes immediate

5. **Verify resolution**
   - Open https://docs.deepbot.pro in an incognito window
   - Confirm the home page loads, lock icon present, cert subject matches

---

## 2. Plausible verification

The script ships in every page (`siteConfig.scripts` in `docusaurus.config.js`,
`data-domain="docs.deepbot.pro"`). Pre-launch traffic on the vercel.app URL
records under the same site name; the dashboard trims to the real domain after
the CNAME flip.

- Open https://plausible.io/docs.deepbot.pro
- Hit the production URL from a clean browser
- Live view should show the visit within ~1 minute
- **First production traffic is the verify** — no manual integration test
  needed beyond watching the dashboard

If no events fire after a few page views:
- Confirm `<script src="https://plausible.io/js/script.js">` is in the page `<head>`
- Confirm no ad-blocker is suppressing the request (Plausible is on Brave/uBO
  default block lists for some users)

---

## 3. Site QA after CNAME live

Hard-refresh from a clean browser (`Ctrl+Shift+R` / `Cmd+Shift+R`) to bypass
any cached vercel.app assets. **Do this on the production domain, not staging.**

- [ ] Home page loads, brand-split (white Deep + lime Bot) visible in nav logo
- [ ] All 47 pages reachable via sidebar navigation (smoke test, not full read)
- [ ] Light-mode toggle works on at least one page; logo swaps to dark Deep variant
- [ ] No 404s on internal links (sidebar groups expand, links resolve)
- [ ] SSL padlock shows the correct cert subject (Let's Encrypt, valid for
  `docs.deepbot.pro`)
- [ ] Browser DevTools console clean — note pre-existing `React #418`
  hydration mismatch is the only known recoverable error; flag anything new

---

## 4. Final sanity check

- [ ] **Sitemap** — fetch https://docs.deepbot.pro/sitemap.xml; should be
  valid XML listing all 47 pages. Docusaurus generates this automatically
  via the classic preset.
- [ ] **robots.txt** — fetch https://docs.deepbot.pro/robots.txt. Per launch
  plan, **indexing is allowed** (no `Disallow: /` line). If we want to delay
  indexing, add a `static/robots.txt` with `Disallow: /` and re-deploy.
- [ ] **OG / link previews** — paste https://docs.deepbot.pro into:
  - Telegram (any chat with yourself works)
  - X (compose box, don't post)
  - Discord (if applicable)

  Expect to see the Dale-character image, the title "What is DeepBot |
  DeepBot", and the description. Image source is configured via
  `themeConfig.image: 'img/dale-character.png'` in `docusaurus.config.js`.

  If any preview shows a broken image or wrong title:
  - Use https://www.opengraph.xyz/ to debug
  - Telegram caches aggressively; force refresh with `@WebpageBot` mention

---

## 5. After launch

- Watch Plausible for the first 24 hours; flag any 5xx spike
- Watch Vercel deploy logs for any deploy failures from auto-deploys
- Custom-domain provisioning is one-and-done; subsequent deploys flow through
  the same domain without re-issuing certs

## Rollback (if needed)

- DNS-level rollback: in GoDaddy, delete or point the `docs` CNAME elsewhere.
  Propagation matches the TTL (600s if we set it as recommended above).
- Vercel-level rollback: in the project's Deployments tab, find the last
  known-good deploy and click "Promote to Production." No DNS change required.

---

## Out of scope for launch day

These are post-launch polish items, tracked separately:

- Color-contrast fix on the home `LiveFeeds` fade-historical-rows effect
  (Lighthouse a11y nit; design intent)
- React #418 hydration mismatch in console (recoverable; investigate when
  identified)
- Source-typeface SVG wordmarks (current SVGs use Inter / system-ui as
  approximation)
- Em dashes in MDX comments (non-rendering, deferred)
