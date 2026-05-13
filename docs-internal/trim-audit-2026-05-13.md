# DeepBot Docs trim audit, 2026 05 13

Read only audit of every published page in `docs/`. No edits to docs files. Verdicts and rationale only. Krypt directs what trims execute.

## Summary

- Total pages walked: 58
- Total current word count (MDX source): 24,466
- Component bodied page caveat: `eight-reasons.mdx` reports 64 MDX words but renders ~390 words via `<Shouts />`. The 64 number understates the read time. Treat as a marketing surface, longer than the count suggests.
- Recommended target word count after trims: 20,100 (about 18% reduction)
- Pages to keep as is: 41
- Pages to compress at 20%: 9
- Pages to compress at 40%: 5
- Pages to merge: 3
- Pages to remove: 0
- Pages with em dashes (U+2014): 1 (`docs/convergence.mdx`, line 35)
- Pages with en dashes (U+2013): 0

### Notes on the constraints brief

- **Eight Reasons page (`docs/eight-reasons.mdx`)**: present. Marketing surface, body rendered through `<Shouts />`. Flagged in the table but not pushed for compression. Per the brief.
- **Stop loss & trailing page (`docs/dale/stop-loss-and-trailing.mdx`)**: present, just landed in PR #54 on 2026 05 13. Technical reference with two scenario tables. 525 words. Earns the length. KEEP.
- **One em dash** sits on `docs/convergence.mdx` line 35 inside the `FeatureGrid` body for Router signals, between the words `moving` and `not just chatter`. Hard rule violation. Surface separately from the trim work since this is a one character fix.

## Page by page table

Sorted by current word count descending. Read time computed at 200 wpm. Em dashes counted as U+2014.

| # | Path | Words | Read (s) | Em dashes | Verdict | Notes |
|---|---|---:|---:|---:|---|---|
| 1 | docs/dale/community-layer.mdx | 1,999 | 600 | 0 | COMPRESS_40 | 11 H2 sections + 6 Pull quotes saying near identical things. "How it all connects" restates the page's own value prop. Big feature dump that could split or compress hard. |
| 2 | docs/dale/safety.mdx | 1,637 | 491 | 0 | COMPRESS_40 | PIN auto delete claim repeats 4+ times. Three secret questions repeats 3+ times. "How encryption works" KV grid and "Runtime safety" feature grid restate the same Blockaid + Honeypot + Emergency Sell list. |
| 3 | docs/dale/memory.mdx | 1,332 | 400 | 0 | COMPRESS_40 | 6+ Pull quotes saying similar things ("Other bots are tools, Dale is a partner", "Dale doesn't ask twice", "One memory. Every chain.", "Your memory. Your control."). "What other products do" section is marketing prose that restates the page. |
| 4 | docs/wallet/overview.mdx | 1,256 | 377 | 0 | COMPRESS_40 | TaglineStrip appears at top AND bottom with the same content. "What it is" + "What it does" + "Multi chain" + "Security" KV grids overlap. "How it relates to Dale" + "Why a separate bot" + the inline mode component all say the same thing about dual interfaces. |
| 5 | docs/dale/autonomous.mdx | 1,004 | 302 | 0 | COMPRESS_20 | "Set the rules. Wake up." Pull quote appears at top and bottom. "Why this is the difference" prose and "What autonomous won't do" feature grid restate the style match argument from earlier sections. |
| 6 | docs/investors/launch-sequence.mdx | 950 | 285 | 0 | COMPRESS_20 | Three Pull quotes saying overlapping things. Pre launch + Day one sections both list brand activation, voice rewrite, BotFather metadata. "Ongoing" duplicates roadmap.mdx Phase 2 commitments. |
| 7 | docs/three-products.mdx | 761 | 229 | 0 | COMPRESS_40 | Heavy duplication with `home.mdx` (four products framing) and `brain/layer-6-encoding.mdx` (encoding moat). Useful unique bit: the hard rule callout that Bobby and Dale never cross. Keep that, trim the rest. |
| 8 | docs/dale/wallet-management.mdx | 682 | 205 | 0 | COMPRESS_20 | Three ChatBlock send variants demonstrate the same pattern. "Chain status" KV grid at the end repeats what the intro already said about EVM live, Solana sends queued. |
| 9 | docs/revshare/streams.mdx | 654 | 197 | 0 | COMPRESS_20 | Stream cards visual at top duplicates the per stream H2 sections below. Per stream intro paragraphs restate the percentage already shown in the card. |
| 10 | docs/home.mdx | 593 | 178 | 0 | COMPRESS_20 | Hero principle line + Lede + second Lede + ConvergenceField + LiveFeeds + "What is DeepBot" all front load. The H2 "Who reads what" KV grid is solid; the hero stacking is what bloats. |
| 11 | docs/revshare/overview.mdx | 548 | 165 | 0 | COMPRESS_20 | "The streams" KV grid at the bottom restates `revshare/streams.mdx`. Two Pull quotes echo the "two engines" framing. |
| 12 | docs/dale/stop-loss-and-trailing.mdx | 525 | 158 | 0 | KEEP | Technical reference. Two scenario tables and a three tick rule earn the length. Per the brief, tolerate length for tables. |
| 13 | docs/convergence.mdx | 506 | 152 | **1** | KEEP | "Convergence Scoring", the product facing scoring page (pillars + badges + buckets). Em dash on line 35 needs a one character fix. Distinct from the engine page. |
| 14 | docs/team.mdx | 475 | 143 | 0 | COMPRESS_20 | "Bobby is the longest running" appears 5 times. "Three people" appears 4 times. The Pull quotes echo the prose. |
| 15 | docs/bobby/for-projects.mdx | 471 | 142 | 0 | KEEP | Five surface FeatureGrid + qualification + application KV grids. Substantive. |
| 16 | docs/brain/layer-6-encoding.mdx | 398 | 120 | 0 | KEEP | Encoding moat investor framing. Slight overlap with `three-products.mdx` "encoding moat" H2, but the Brain version is canonical. After the three products trim, this stays the single source. |
| 17 | docs/updates.mdx | 395 | 119 | 0 | KEEP | Inline changelog. Note: ENTRIES array stops at Apr 24 while today is May 13. Content is stale, not structurally bloated. Flag for content refresh separately. |
| 18 | docs/dale/trade-panel.mdx | 389 | 117 | 0 | KEEP | Recent panel doc, lean. |
| 19 | docs/dale/multichain.mdx | 384 | 116 | 0 | KEEP | Chain reference with KV grids. |
| 20 | docs/shotgun/trend.mdx | 374 | 113 | 0 | COMPRESS_20 | "What you configure" KV grid is identical structure to `shotgun/blue.mdx`. "Where it runs" line repeats verbatim. Consider DRYing into `shotgun/overview.mdx`. |
| 21 | docs/shotgun/blue.mdx | 351 | 106 | 0 | COMPRESS_20 | Same as `shotgun/trend.mdx`: shared "What you configure" body and chain line could lift to overview. |
| 22 | docs/bobby/network.mdx | 350 | 105 | 0 | KEEP | Lean network frame page. |
| 23 | docs/revshare/phases.mdx | 348 | 105 | 0 | KEEP | Four phase tables, unique data. |
| 24 | docs/brain/layer-1-network.mdx | 337 | 102 | 0 | KEEP | Lean brain layer page. |
| 25 | docs/platform/convergence.mdx | 333 | 100 | 0 | MERGE_WITH | Merge with `docs/brain/layer-5-convergence.mdx`. Near identical H2 structure ("A single ping is not an alert", "Volume is excluded by design", "Adversarial robust by construction", "12 herbs and spices"). The Brain version has investor framing + StatRow and is the better canonical home. |
| 26 | docs/shotgun/overview.mdx | 330 | 99 | 0 | KEEP | Section landing page, lean. |
| 27 | docs/dale/overview.mdx | 329 | 99 | 0 | KEEP | "What Dale is" page, lean. |
| 28 | docs/brain/layer-5-convergence.mdx | 323 | 97 | 0 | KEEP | Will absorb `platform/convergence.mdx` if merge proceeds. |
| 29 | docs/brain/layer-4-rug.mdx | 310 | 93 | 0 | KEEP | Rug detector layer, lean. |
| 30 | docs/investors/platform-pitch.mdx | 303 | 91 | 0 | KEEP | Investor summary, lean. |
| 31 | docs/bobby/founders-program.mdx | 295 | 89 | 0 | KEEP | Founders Program mechanic, lean. |
| 32 | docs/brain/layer-3-safety.mdx | 293 | 88 | 0 | KEEP | Will absorb `platform/safety.mdx` if merge proceeds. |
| 33 | docs/dale/tools.mdx | 286 | 86 | 0 | KEEP | Tool reference grid. |
| 34 | docs/revshare/claiming.mdx | 283 | 85 | 0 | KEEP | Claim flow steps. |
| 35 | docs/token/deepai.mdx | 281 | 85 | 0 | KEEP | Token reference. CA is fetched live. |
| 36 | docs/brain/layer-2-routers.mdx | 281 | 85 | 0 | KEEP | Router fingerprints layer, lean. |
| 37 | docs/dale/emergency-sell.mdx | 274 | 83 | 0 | KEEP | Emergency Sell explainer, lean. |
| 38 | docs/dale/honesty.mdx | 271 | 82 | 0 | KEEP | Recent May 13 addition. Defends the no invented diagnoses rule. |
| 39 | docs/investors/roadmap.mdx | 236 | 71 | 0 | KEEP | Two KV grids of public commitments. Lean. |
| 40 | docs/shotgun/channels.mdx | 234 | 71 | 0 | KEEP | Channel reference. |
| 41 | docs/quickstart.mdx | 234 | 71 | 0 | KEEP | Five step quickstart. |
| 42 | docs/new-to-crypto.mdx | 226 | 68 | 0 | KEEP | Plain English explainer. Friendly tone is on brand. |
| 43 | docs/revshare/nfts.mdx | 224 | 68 | 0 | KEEP | OG, Silver, Gold tier cards. |
| 44 | docs/brain/overview.mdx | 216 | 65 | 0 | KEEP | Brain section landing page. |
| 45 | docs/bobby/overview.mdx | 215 | 65 | 0 | KEEP | Bobby section landing page. |
| 46 | docs/dale/how-it-thinks.mdx | 202 | 61 | 0 | KEEP | The reasoning loop, lean. |
| 47 | docs/dale/conversational-trading.mdx | 200 | 60 | 0 | KEEP | Confirmation thresholds and voice. Lean. |
| 48 | docs/platform/partnerships.mdx | 186 | 56 | 0 | KEEP | Partner list with statuses. |
| 49 | docs/dale/first-conversation.mdx | 174 | 53 | 0 | KEEP | First conversation demo. |
| 50 | docs/revshare/calculator.mdx | 166 | 50 | 0 | KEEP | Calculator pointer page. |
| 51 | docs/platform/safety.mdx | 162 | 49 | 0 | MERGE_WITH | Merge with `docs/brain/layer-3-safety.mdx`. Page exists only to host a four item FeatureGrid that is the same Blockaid, Honeypot, Rugged dev, Emergency Sell list rendered in the Brain layer and in `dale/safety.mdx`. Textbook "exists only to host a single component" case. |
| 52 | docs/revshare/eligibility.mdx | 151 | 46 | 0 | KEEP | Rules in one KV grid. |
| 53 | docs/dale/genesis-cohort.mdx | 150 | 45 | 0 | KEEP | Cohort recognition page. |
| 54 | docs/shotgun/smart-wallets.mdx | 147 | 45 | 0 | KEEP | Returning via convergence engine, status page. |
| 55 | docs/dale/response-modes.mdx | 129 | 39 | 0 | KEEP | Three mode cards. Under the 40s threshold. |
| 56 | docs/platform/multichain-stack.mdx | 122 | 37 | 0 | MERGE_WITH | Merge with `docs/dale/multichain.mdx`. The page is a one paragraph pointer that hosts a `ChainRow` and links out. The Dale page has the full content. Pure pointer page. |
| 57 | docs/deepbot-link/overview.mdx | 117 | 36 | 0 | KEEP | Coming soon page for the web product. Restraint is intentional. |
| 58 | docs/eight-reasons.mdx | 64 (~390 rendered) | ~117 | 0 | KEEP | Marketing surface. MDX body is metadata + `<Shouts />`. Component renders ~327 additional words. Per the brief, do not push for compression. |

## Compression candidates (top 10 by impact)

### 1. docs/dale/community-layer.mdx (COMPRESS_40)

- Current word count: 1,999
- Proposed word count: 1,200
- Specific trims:
  1. Drop or compress 4 of the 6 Pull quotes. "Quality earns more than quantity", "One Crown. Earned daily.", "The market becomes legible", "Twitter calls have zero accountability", "Every winning trade is marketing material", "The team can drop a 3 ETH NFT on you" all carry similar weight. Keep two for rhythm.
  2. "How it all connects" closing section restates the value prop the entire page just established. Cut to one paragraph or drop entirely.
  3. The "What other products do" framing in the form of "Most trading bots are solo experiences" is repeated from `dale/memory.mdx`'s "Other bots are tools" framing. Pick one home for that bot bashing.
  4. Each ChatBlock in the page is doing work, but two of them (the leaderboard query and the following dialog) make the same point twice. Cut one.
  5. The intro paragraph "Most trading bots are solo experiences" plus the next paragraph "DeepBot is a community" plus the Pull quote underneath all repeat the same setup. Compress to one paragraph plus the Pull.

### 2. docs/dale/safety.mdx (COMPRESS_40)

- Current word count: 1,637
- Proposed word count: 980
- Specific trims:
  1. PIN auto delete appears in "What happens when you press PIN" Step 2, in "Private key handling" prose, in "How encryption works" KV grid row, and in the wallet management page. Pick one canonical home (suggest the "What happens when you press PIN" walkthrough) and link from the rest.
  2. "How encryption works" KV grid has seven items. Three of them (PIN with Panic PIN, PIN auto delete, Three secret questions) restate body sections above. Cut the KV grid down to the items it actually adds: AES 256 GCM, chain first PIN gate, mempool rug protection, Blockaid.
  3. "Runtime safety" FeatureGrid lists Blockaid, Honeypot pre check, Rugged dev refusal, Emergency Sell. Same four items appear in `brain/layer-3-safety.mdx` FeatureGrid and in `platform/safety.mdx`. Drop from this page and link to brain/layer-3.
  4. The Pull "Most products scan once. Dale never stops watching." plus the H2 "Safety doesn't stop at the buy" plus the closing Callout "Trade like a sharp friend" land three takeaways in sequence. Pick one.
  5. "The two recovery tiers" H2 is a restate of "What happens when you forget your PIN" which already explained tier 1 (questions) and tier 2 (human review). Fold the tiers into the forgot PIN body.

### 3. docs/dale/memory.mdx (COMPRESS_40)

- Current word count: 1,332
- Proposed word count: 800
- Specific trims:
  1. Six Pull quotes carry the page rhythmically but four make the same point. "Other bots are tools. Dale is a partner.", "Dale doesn't ask twice.", "One memory. Every chain. Every session.", "Personalized AI that earns the personalization", "Your memory. Your control. Your reset." Cut two.
  2. "What Dale remembers" KV grid + "What Dale does with it" FeatureGrid both list the value of memory. The KV grid covers what gets stored. The FeatureGrid restates with feature framing. Compress the FeatureGrid to one paragraph that ties memory to outcomes, drop the per item cards.
  3. "What other products do" section is marketing prose that re explains the page's own value prop. Cut.
  4. "Across chains. Across sessions." has two paragraphs. The second paragraph ("The memory persists at the platform layer") is the same point as the first. Compress.
  5. "Fair usage by design" notification rules KV grid is unique and useful, keep. But the body intro "Most bots spam users into churn. Dale doesn't." duplicates "What other products do" framing two H2s below. Pick one.

### 4. docs/wallet/overview.mdx (COMPRESS_40)

- Current word count: 1,256
- Proposed word count: 750
- Specific trims:
  1. TaglineStrip appears at the top (in the hero block) and at the bottom of the page with the same line "A wallet that lives where you already live". Pick one.
  2. "What it is" KV grid + "What it does" KV grid + "Security" KV grid + "Multi chain" prose all partly overlap. The Telegram native bullet, self custody bullet, and multi chain bullet appear in two KV grids. Consolidate.
  3. "How it relates to Dale" section + the inline `db-wallet-modes` two card div + "No need to choose" Callout + "Why a separate bot" KV grid all explain the dual interface model. Pick one canonical explanation (suggest "How it relates to Dale" plus the two card div). Drop the Callout and most of "Why a separate bot".
  4. The "If DeepBot disappeared tomorrow, your wallet would not" Pull plus the explanation paragraph could compress to one sentence.
  5. The unification roadmap three phase block is fine. Keep.

### 5. docs/dale/autonomous.mdx (COMPRESS_20)

- Current word count: 1,004
- Proposed word count: 800
- Specific trims:
  1. "Set the rules. Wake up to a partner who has been working." appears at top of page and at bottom as Pull. Pick one location.
  2. "Why this is the difference" closing two paragraphs restate the "Style match is the difference" Callout earlier on the page. Compress the closing into one sentence linking back to the Callout.
  3. "What autonomous won't do" FeatureGrid has four items. Won't size up + Won't chase outside style + Won't override safety + Won't keep running silently. The first three are the style match argument repeated. Compress to two items.

### 6. docs/investors/launch-sequence.mdx (COMPRESS_20)

- Current word count: 950
- Proposed word count: 760
- Specific trims:
  1. Three Pull quotes: "Day one is the floor, not the ceiling", "Launch is the eleven flips", "At month two, every winning trade becomes marketing material". They are doing similar work. Cut one.
  2. "Pre launch" section bullets (brand activation, voice rewrite, BotFather metadata, retro onboarding) overlap with "Launch day" assumptions. Compress pre launch to one paragraph, not a four item KV grid.
  3. "Ongoing" closing section bullets (privacy swaps, Eterna, voice, Bobby Trending Channel, Dale widget, Mini App) duplicate `investors/roadmap.mdx` Phase 2 commitments. Trim to one sentence + link.
  4. "Why phased" three reasons paragraph is solid. Keep.

### 7. docs/three-products.mdx (COMPRESS_40)

- Current word count: 761
- Proposed word count: 460
- Specific trims:
  1. "The encoding moat" H2 plus three paragraphs duplicate `brain/layer-6-encoding.mdx` near verbatim. Cut to one sentence linking to the brain page.
  2. "The Bobby side" + "The Dale side" + "The Wallet side" + "The DeepBot LINK side" each get a paragraph. The same four products framing is on `home.mdx`. Trim to a compact KV grid or four cards, not four full H2 sections.
  3. The "hard rule" Callout (Bobby and Dale never publicly cross paths) is unique to this page and load bearing. Keep.
  4. "The frame" intro plus the platform premise paragraph repeat each other. Pick one.

### 8. docs/dale/wallet-management.mdx (COMPRESS_20)

- Current word count: 682
- Proposed word count: 545
- Specific trims:
  1. Three ChatBlocks demonstrate sending in different ways. Each one is a useful example but two are enough; pick the percentage example and the wallet label example, drop the third.
  2. "Chain status" KV grid at the bottom (EVM live, Solana wallet management live, Solana sends in progress) restates what the intro already established about live coverage. Compress to one line or fold into the intro.
  3. The Callout "One conversation, every chain" repeats what the page lede already said. Cut.

### 9. docs/revshare/streams.mdx (COMPRESS_20)

- Current word count: 654
- Proposed word count: 525
- Specific trims:
  1. The four `db-stream-card` divs at the top duplicate the per stream H2 sections below. Each stream gets a card with name + source + tag, then an H2 with the same percentage and a longer explanation. Pick one form. Suggest keeping the H2 sections (more content) and dropping the card grid.
  2. The two CTAs to the calculator (top and bottom) duplicate. Pick one location.
  3. "5 · Bobby intelligence licensing" section says the stream exists in the architecture but is in development. Two paragraphs make this point. Compress to one.

### 10. docs/revshare/overview.mdx (COMPRESS_20)

- Current word count: 548
- Proposed word count: 440
- Specific trims:
  1. "The streams" KV grid near the end restates the four streams that `revshare/streams.mdx` covers in full. Drop the grid; link to streams.
  2. The closing Pull quote "DeepBot is one platform with two engines" restates the page title plus opening Lede. Cut.
  3. "Two engines that scale independently" H2 + Pull + diagram cover the same point three ways. Drop the Pull.

## Merge proposals

### Merge 1. `docs/platform/convergence.mdx` → `docs/brain/layer-5-convergence.mdx`

- Why merge: Near identical content. Both titled "Convergence engine". Both have H2s "A single ping is not an alert", "Volume is excluded by design", "Adversarial robust by construction", "12 herbs and spices" (slight variant). The Brain version is investor framed with a StatRow; the Platform version has a faded box pull. Pick the Brain version as canonical, fold the unique faded box line in, retire the Platform page.
- Risk if we don't merge: Two pages titled identically in the same nav. Reader hits one, reads it, hits the other a section later, reads the same thing again. Erodes the "we don't waste your time" pitch.

### Merge 2. `docs/platform/safety.mdx` → `docs/brain/layer-3-safety.mdx`

- Why merge: Page exists only to host a four item FeatureGrid (Blockaid, Honeypot, Rugged dev, Emergency Sell). The same four items live in `brain/layer-3-safety.mdx`'s FeatureGrid and in `dale/safety.mdx`'s "Runtime safety" FeatureGrid. Three copies of the same list. Pick one canonical (brain) and link from the Platform sidebar.
- Risk if we don't merge: Investor reader who clicks into Platform > Safety sees four bullets and bounces. The Brain version frames the same content as a moat layer, which is what the Platform sidebar actually wants to communicate.

### Merge 3. `docs/platform/multichain-stack.mdx` → `docs/dale/multichain.mdx`

- Why merge: 122 word page. Hosts a ChainRow and a one paragraph pointer back to the Dale multichain page. Pure pointer page with no unique content. The Dale page has the chains, the native asset semantics, the roadmap. The platform layer doesn't have anything to add that the Dale page doesn't already say.
- Risk if we don't merge: Platform sidebar reader sees the section, expects platform level depth, gets a paragraph and a link out. Looks unfinished. Either flesh it out or fold it.

## Remove proposals

None.

Every page in the tree routes from the sidebar and serves at least one job not covered elsewhere, except the three merge candidates above which serve their job poorly enough that a merge is the better answer than a remove. The merges preserve content; nothing gets deleted, only relocated and linked.

## Hard rules audit

- **Em dashes (U+2014)**: 1 hit. `docs/convergence.mdx` line 35, inside the `FeatureGrid` body for "Router signals", between the words `moving` and `not just chatter`. The April 30 global sweep missed this one. Either the convergence scoring page was added after the sweep or this body literal slipped a filter. Fix as a one character change (em dash to period plus capital "Not"), separate from the trim work.
- **En dashes (U+2013)**: 0 hits.
- **40 second read pages**: 54 of 58 cross the 133 word threshold. The four under: `eight-reasons.mdx` (64 MDX words, but ~390 rendered so over threshold in practice), `deepbot-link/overview.mdx` (117), `platform/multichain-stack.mdx` (122, flagged for MERGE), `dale/response-modes.mdx` (129). Of the 54 over threshold, the 14 listed for compression are the ones that do not earn their length. The other 40 either earn it through reference content (pricing tables, tier grids, chain references, KV grids) or are deliberately scoped marketing surfaces (eight reasons).

## Content freshness flag (not structural)

`docs/updates.mdx` reports as a structural KEEP. But the inline `ENTRIES` array stops at Apr 24, 2026 while today is May 13, 2026. Three weeks of shipped work (May 13 broadcast docs update, May 14 EVM wallet drop, Shotgun section + Stop loss & trailing per PR #54) are not reflected. Not a trim problem. Surface as a content refresh task in a separate PR.

## What is not in this audit

- No edits to `docs/` files. Read only as required.
- No edits to `sidebars.js`, `docusaurus.config.js`, or any component file.
- No proposed copy. Compression suggestions name sections and reasons; the actual rewrites belong in the trim PRs that follow this audit.
- The one em dash and the stale `updates.mdx` content are flagged here but not fixed.
