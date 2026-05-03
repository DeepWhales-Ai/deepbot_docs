# DeepBot Gitbook: Master Design Brief

For: Claude Design
Source: Krypt (Rob McGrail), DeepBot
Date: May 3, 2026
Version: 2 (Wallet section added, three-product framing locked, six-stream rev share updated, private key terminology corrected)
Supersedes: all prior individual briefs and v1 master brief

This document is the single source of truth for the DeepBot gitbook redesign. Read it end to end before starting. Every page-level brief from the prior session is consolidated here. Where prior briefs conflicted, this document wins.

---

## How to use this document

The brief has six parts:

**Part 1 — The platform.** What DeepBot actually is. The thesis. The moat. The voice. Read this first or none of the rest will land.

**Part 2 — Bobby vs Dale vs Wallet: the disambiguation.** Who owns what taglines, who appears on which page, the rules that prevent the design from bleeding across the three products. Read this second.

**Part 3 — Visual direction and components.** Palette, type, components, reference targets, what cannot appear. The design floor.

**Part 4 — Information architecture.** Top-nav, sections, page roster, where every concept lives.

**Part 5 — Page-by-page production copy.** The actual prose for every page that needs to ship. Paste-ready. Marked PULL QUOTE for cross-surface use.

**Part 6 — Reconciliation and launch.** What's shipped, what's pending, what holds, what publishes when. The honest state.

---

# PART 1 — The platform

## What DeepBot actually is

You are designing the documentation site for the most powerful crypto trading platform on earth. Not "a crypto bot." Not "a Telegram trading tool." A platform with a five-year intelligence network, an AI trading partner with 50+ tools that thinks like a trader, and a self-custody wallet that lives where users already live.

Three products. One brain. One revenue pool. One token.

**Bobby** is the intelligence network. Five years of data across thousands of crypto Telegram project communities. Bobby sees what's happening in crypto Telegram before anyone else, because Bobby is already inside crypto Telegram. When a project applies for our trending or ad slots, Bobby has already scanned them. We don't need their pitch. We have their data.

**Dale** is the AI trading partner. Launched April 3, 2026. Built on Claude Sonnet 4.6. 50+ tools. Multi-chain (Ethereum, Solana, Base, Polygon, BNB live). Dale doesn't feel like software. Dale feels like a sharp friend who trades for a living. You ask Dale to swap. Dale checks the route, surfaces fees, executes. You ask Dale what's happening with a token. Dale knows because Dale has Bobby's intelligence underneath.

**DeepBot Wallet** is the third product. A Telegram-native, self-custody wallet bot at @walletdeepbot. Phantom-style GUI. Multi-chain. Built on the same wallet stack Dale executes against, with the same security floor and the same private key you own. The wallet is where you hold. Dale is where you trade. Bobby is where the intelligence lives. All three share one wallet underneath, one revenue pool above, one token across.

The connection between them is the moat. **Most products are one of: wallet, trader, or signal source. We are all three, fused. That is a category of one.**

## The encoding moat

Every Bobby alert is encoded for Dale's tool-call schema. Not raw contract addresses you can paste anywhere. **The intelligence is structured so that only Dale can interpret and execute on it.** Other bots see something that looks like noise. Dale sees the trade.

This means: if you want Bobby's intelligence, you trade through Dale. There is no leakage path. There is no "subscribe to Bobby alerts and execute on Photon." Bobby and Dale are bonded at the data layer in a way the rest of the market cannot replicate without rebuilding five years of distribution from scratch.

Three lines that spell out why nobody can clone this:

1. **Bobby's signals are not portable.** Other bots cannot consume them. The funnel is locked at the data layer.
2. **Five years of distribution cannot be rebuilt.** Bobby's footprint is the result of five years of bot installations across crypto Telegram. A competitor starting today cannot catch up by spending money. The audience is the product.
3. **Convergence requires both layers.** Cross-group convergence detection requires presence in many groups. Even if a competitor builds the ML, they have nothing to run it on without the distribution.

## The unified pool thesis

Every revenue source the platform generates flows into the same holder pool.

Bobby's trending slots. Bobby's editorial qualification fees. Bobby's Founders Program. Bobby's ad inventory across all five permanent surfaces. Dale's trading fees across Wallet, Dale, and Link. Dale's prediction market fees through AGG. The wallet's swap fees and held-balance economics. The DEX tax on $DEEPAI. Team trading profits. Pro subscriptions. **All of it. One pool. One token.**

Hold $DEEPAI and you don't participate in one product's economics. You participate in the entire platform's.

**Three products that scale on different inputs.** Bobby's engine needs projects. Dale's engine needs traders. The wallet's engine needs holders, senders, and swappers. They are not correlated. In a quiet trading month, Bobby's monetization carries the pool. In a hot trading month, all three engines fire. There is no scenario where the platform performs and the token does not.

This is the unstoppable thesis. Every other tokenized trading bot captures one fee stream. We capture every fee stream the platform produces, across three distinct surfaces in the same Telegram-native crypto stack.

## Voice direction

Three modes. The gitbook uses two of them.

**Bobby trust voice.** Restrained. Confident through understatement. The audience does the wanting. We don't pitch. We tease. We let the reader figure out we're not selling them, we're showing them. Used on Bobby's gitbook surfaces and project-facing pages.

**Dale sharp voice.** Sharp, useful, like a trading partner. Speed and intuition over corporate completeness. Short sentences. Concrete examples. Used on Dale's pages and the trader-facing surfaces.

**Honest voice (rev share specifically).** Clinical, specific, deflationary on hype, anchored on numbers. Tells you what's small now. Maps the path. Does not promise. Used on rev share, token, and economic pages.

(There's a fourth voice — Bobby's in-group hype voice for Telegram and X. That mode does not appear in the gitbook.)

## Hard voice rules (apply everywhere)

- **No em dashes anywhere.** Periods, commas, colons, restructure.
- **No "Built with Claude" or AI-vendor mentions in public copy.** Lead with outcomes. Claude attribution reserved for investor surfaces, hiring, and Anthropic BD.
- **No network-size numbers in public copy.** 25K groups, 677K audience, 2.28M alerts: internal context only. Public uses *The intelligence network crypto Telegram runs on.*
- **No "trending" as our claim word.** Co-opted by paid slot products. Use "intelligence," "convergence," "detection."
- **No "AI-powered" prefix on everything.** Used too widely to mean anything.
- **Retire "DeepAI Bot" and "Toolkit"** — 2024 framing. Replace with "platform" and "products."
- **No placeholder content.** "Coming soon" is fine where genuine. Lorem ipsum is a fail.
- **No fake stats, no fake testimonials, no synthetic graphs.** Anything stat-shaped is real or it does not exist.

---

# PART 2 — Bobby vs Dale vs Wallet: the disambiguation

The bleed problem. Bobby and Dale collapsed into each other in earlier design passes. Dale's pages were using Bobby's tagline. Bobby's framing was showing up on Dale's pages. Now there's a third product (Wallet) which means three distinct voices to keep separate. This part separates them cleanly.

## The one-sentence answer

**Bobby is a watcher. Dale is a doer. Wallet is the vault.**

If a sentence on the site says "watch," "see," "detect," "spot," "notice" — it is talking about Bobby.
If a sentence on the site says "swap," "buy," "sell," "execute," "scan a contract" — it is talking about Dale.
If a sentence on the site says "hold," "send," "receive," "store," "your keys," "self-custody" — it is talking about Wallet.

When the design mixes these verbs, it is mixing the products.

## What each product is

| | Bobby | Dale | Wallet |
|---|---|---|---|
| What | Intelligence network | AI trading copilot | Self-custody wallet |
| Who serves | Project owners, group admins, curious users | Traders | Holders, senders, all users |
| What produces | Detection, convergence-scored signals | Trades, routes, safety scans, exit strategies | Multi-chain custody, sends, swaps |
| Does NOT do | Trade, hold wallets, execute swaps | Surveil community groups, sell ad slots | Make trading decisions, surface signals |
| Surface | Bobby's gitbook, Bobby in groups, Bobby on X | DeepBot's gitbook, Dale in `@traderdeepbot`, Dale on the platform | `@walletdeepbot`, the wallet section, the Mini App |
| Personality | Restrained, editorial, confident through understatement | Sharp, useful, conversational, like a trading partner | Calm, structural, self-custody-forward |
| Asset | 3D bull | Dale character avatar | No character, type-only and clean GUI |

## The four taglines

Lock these.

| Surface | Tagline | Belongs to |
|---------|---------|-----------|
| Bobby pages | *We don't predict. We detect.* | Bobby only |
| Dale pages | *Talk. Trade. Done.* | Dale only |
| Wallet pages | *A wallet that lives where you already live.* | Wallet only |
| DeepBot platform | *Three products. One brain. One pool.* | Platform overview |

**Bobby's tagline does NOT appear on Dale or Wallet pages.** Bobby detects. The other two don't.

**Dale's tagline does NOT appear on Bobby or Wallet pages.** Bobby does not trade. Wallet does not trade.

**Wallet's tagline does NOT appear on Bobby or Dale pages.** Wallet's voice is custody-forward; the others are not.

**The platform tagline appears only on platform overview pages.** It is not for any single product page. It is the line for the surface that contains all three.

## Three rules to never break

**1. The bull never appears on a Dale or Wallet page.** Bobby's 3D bull is Bobby's brand asset. If a Dale or Wallet page has the bull, it is a Bobby page in disguise.

**2. The phrase "we detect" never appears on a Dale or Wallet page.** Detection is Bobby's job. If "detect" appears outside Bobby pages, the page is borrowing Bobby's identity.

**3. Products are never linked from inside user-flow copy.** Bobby pages don't CTA to Dale or Wallet. Dale trading pages don't CTA to Bobby. Wallet pages don't CTA to Dale's trade panel. They coexist in the same gitbook, but the user traverses one product at a time. The platform overview, the rev share page, and the home page are the only places they appear together.

## Quick swap table

If existing copy has bled, swap with these.

| If the page says... | And it's a Dale page, swap to... | And it's a Wallet page, swap to... | And it's a platform page, swap to... |
|---------------------|----------------------------------|-----------------------------------|--------------------------------------|
| *We don't predict. We detect.* | *Talk. Trade. Done.* | *A wallet that lives where you already live.* | *Three products. One brain. One pool.* |
| *The intelligence network crypto TG runs on.* | *The trading partner you talk to in plain English.* | *Self-custody. Multi-chain. Telegram-native.* | *Three products. One brain. One pool.* |
| *Watching across thousands of groups...* | *Executing across five chains...* | *Holding across five chains...* | *One platform that detects, executes, and holds.* |
| *We've already scanned your project.* | *Tell me what you want. I'll handle the rest.* | *Your keys. Your wallet. Yours.* | *Three engines. One pool. One token.* |
| 3D bull illustration | Dale character avatar | Type only or clean wallet UI mockup | Type only, no character asset |

## A short test for any page

Before approving a hero or a section header, ask:

- *Could this sentence be on any product's page without changing meaning?* If yes, it belongs on the platform overview, not on a product page.
- *Does this verb describe watching, doing, or holding?* Watching → Bobby. Doing → Dale. Holding → Wallet.
- *Does the tagline match the product's job?* Bobby detects, so Bobby's tagline is about detection. Dale executes, so Dale's tagline is about execution. Wallet custodies, so Wallet's tagline is about being yours.

If a page fails any of these tests, it has bled. Fix the verbs and the tagline first; the copy will follow.

---

# PART 3 — Visual direction

## Palette (locked)

- Background `#0A0A0A`
- Surface / cards `#1A1A1A`
- Lime accent primary `#BFFF00`
- Lime accent secondary `#7CFF00`
- Gold accent (Crown only) — designer's call, recommend a warm yellow-gold
- Body text: off-white at ~85% opacity
- Headings: full white

## Typography (locked)

- **Cera Pro** across the site. Light 300, Regular 400, Medium 500, Bold 700.
- Body: Regular 400, line-height ~1.6, comfortable reading width (~70ch max).
- H1: Bold 700, generous size, generous spacing above.
- Code / data: monospace fallback. JetBrains Mono or IBM Plex Mono if licensing allows.

## Components needed

- **Top nav.** Sticky. Sections: Start here / Dale / Bobby / Platform / Token / Rev Share / Investors / Team. Search hotkey Ctrl+K, treated as a first-class element, not buried.
- **Left sidebar.** Tree by section. Collapsible. Active page highlighted in lime.
- **Right TOC.** Anchor links for current page. Subtle.
- **Code blocks.** Dark, monospace, copy button always visible on hover. Syntax-highlighted but restrained.
- **Callout boxes.** Info (lime border), warning (muted amber), deprecated (muted gray).
- **Status pills.** "LIVE" in lime, "BETA" in muted lime, "COMING" in gray. Used on partnerships page, social layer roadmap, chain coverage.
- **Partner cards.** Logo, one-line description, status pill.
- **Tables.** Clean, monospace numbers, lime accent for headers.
- **Hero treatment.** Bobby pages get the 3D bull. Dale pages get the Dale character. The home page is type-only. Never both characters on the same page.
- **Conversation samples.** Render as Telegram bubble pairs throughout the site. Used heavily for Dale pages.
- **The Crown gets gold accent**, not lime. Reserved for Crown-related elements only.
- **No 3D, no parallax, no scroll-jacking.** This is a doc site, not a portfolio.
- **Dark theme only.** No light mode v1.

## Reference targets

You should be at or above these.

- **Stripe docs.** IA, search, density that still reads.
- **Linear docs.** Restraint, narrative, white space.
- **Resend docs.** Modern product docs done right. Read this one.
- **Vercel docs.** Component design, sticky nav patterns.
- **Anthropic docs.** Strong content patterns.
- **Tailwind docs.** Density that still reads.
- **Supabase docs.** Code-heavy patterns, dark theme done right.
- **Mercury changelog.** Tone reference for quiet confidence.

We are louder than all of them in voice and color. We are equal or better in IA, search, and clarity.

## What absolutely cannot be on this site

- Network-size numbers in public copy (internal only)
- "Built with Claude" or AI-vendor mentions
- Bobby↔Dale cross-links from inside user-flow copy
- Em dashes anywhere
- "Trending" as our claim
- Placeholder content (lorem ipsum)
- Stock photography of cities or charts
- Light mode
- Carousels, parallax, animated heroes
- Glowing brain illustrations on the memory page
- Pie charts of probabilities on the prediction markets page
- Security icons or badges on the safety page
- Fake stats, synthetic graphs

## The vibe (read this twice)

Energy, not pixels.

- **Confident without bragging.** No "the #1 trading bot" copy. No charts of fake stats. The product speaks.
- **Editorial, not promotional.** Reads more like the methodology page of a respected research firm than the landing page of a meme tool.
- **Spare.** White space is part of the design.
- **Sharp.** Lime accent earned, not wallpapered.
- **Fast.** Pages load instantly. Search works on first keystroke. No bloated heroes.

What it should NOT feel like:
- A 2021 crypto project landing page.
- A Web3 deck-as-website with floating particles.
- A typical bot doc with screenshot grids and "click here, then click here."
- Stripe-dry. We are louder than Stripe.

When in doubt, design as if the reader has been burned by crypto products before and is one bad sentence away from closing the tab. Earn the next click.

---

# PART 4 — Information architecture

## Top-nav structure

```
DeepBot
├── Start here
│   ├── What is DeepBot
│   ├── Three products, one brain
│   ├── Quickstart for traders
│   └── Launch sequence (what's coming)
│
├── Dale
│   ├── What is Dale
│   ├── How Dale thinks
│   ├── First conversation
│   ├── Tools Dale uses (overview)
│   ├── Memory ⭐
│   ├── Multi-chain (Ethereum, Solana, Base, Polygon, BNB)
│   ├── Safety and PIN security ⭐
│   ├── Trading
│   │   ├── Conversational trading
│   │   ├── Trade panel
│   │   ├── Exit strategies
│   │   ├── DCA buy / sell (Sonar)
│   │   ├── Limit orders & dip buys
│   │   ├── Bridging (LI.FI)
│   │   ├── Privacy swaps (RocketX)
│   │   └── Emergency Sell
│   ├── Prediction markets ⭐
│   ├── Autonomous trading ⭐
│   ├── Voice
│   ├── Multilingual
│   └── Response Modes (Newbie / Pro / Express)
│
├── Wallet ⭐ (NEW — @walletdeepbot)
│   ├── What is DeepBot Wallet
│   ├── How it relates to Dale
│   ├── Multi-chain (5 chains)
│   ├── Send and receive
│   ├── Swaps
│   ├── NFT view
│   ├── Bridging
│   ├── Security and self-custody
│   └── Private key export
│
├── The Social Layer ⭐ (parent section)
│   ├── Overview
│   ├── Leagues and Ranks
│   ├── Competitions and the Crown
│   ├── The Leaderboard
│   ├── Following and Copy Trading
│   ├── Paper Trading
│   ├── Win Cards
│   ├── Scratch Cards
│   ├── Streaks and Badges
│   ├── Surprise Gifts
│   ├── Social Safety
│   └── Referrals
│
├── Bobby (project-facing)
│   ├── What is Bobby
│   ├── Bobby Trending Channel
│   ├── For projects
│   ├── Founders Program
│   ├── Five ad surfaces (locked maximum)
│   ├── Trust principle
│   └── For admins (group admin manual)
│
├── Platform
│   ├── Convergence engine
│   ├── Safety
│   ├── Multi-chain stack
│   └── Partnerships
│       ├── QuickSwap (LIVE)
│       ├── Sonar
│       ├── AGG.market (prediction markets)
│       ├── Bubblemaps
│       ├── Onchain Labs
│       ├── Eterna
│       └── RocketX
│
├── Token
│   ├── $DEEPAI overview
│   ├── Tokenomics (5%/5% tax, NOT deflationary)
│   ├── Contract address
│   └── 40% trading fee distribution
│
├── Rev Share ⭐
│   ├── Overview (manifesto + unified pool)
│   ├── The Six Streams
│   ├── The Four Phases
│   ├── NFT Multipliers
│   ├── How to Qualify
│   ├── The Calculator
│   └── ETH Price Adjustment
│
├── Investors ⭐
│   ├── The platform pitch
│   ├── How DeepBot was built (team / dev velocity)
│   ├── Roadmap
│   ├── Grants and infrastructure
│   └── Press kit
│
├── NFTs
│   └── DeepAI NFT Collection
│
├── Team
│   └── Krypt, JR, Kraitor
│
└── Legacy / DeepAI Bot v1 (archive)
```

⭐ marks the high-priority pages with full production copy in Part 5.

## Tier 1 — must ship before May 7

1. Home / What is DeepBot
2. Three products, one brain
3. What is Dale
4. Dale Memory
5. Dale Safety and PIN
6. Dale Multi-chain
7. **What is DeepBot Wallet** (NEW)
8. **Wallet security and self-custody** (NEW)
9. What is Bobby
10. Convergence engine
11. $DEEPAI overview
12. Quickstart for traders

## Tier 2 — Week 1 post-launch

11. Dale tools overview
12. Dale Trading sub-pages
13. Dale Prediction Markets (when AGG ships)
14. Dale Autonomous Trading
15. Bobby for projects
16. Bobby Founders Program
17. Platform Safety
18. Platform Partnerships
19. Investors / The Platform Pitch
20. Investors / How DeepBot was built
21. Launch Sequence

## Tier 3 — drip post-launch

22. The Social Layer (full section, drops alongside Phase 6 features)
23. Bobby Trending Channel
24. Dale Voice page
25. Dale Multilingual page
26. Investors / Roadmap (refreshed)

---

# PART 5 — Production copy (paste-ready)

The pages below are paste-ready production copy. Lines marked PULL QUOTE can be lifted onto other surfaces. Each page ends with designer notes for visual treatment.

---

## 5.1 — DeepBot home page hero

Three variants. Recommended is the Cold Open. Pick before publishing.

### VARIANT A — The Cold Open (RECOMMENDED)

```
DEEPBOT PLATFORM

# DeepBot

We have been watching crypto Telegram for five years. We know
what is real before the market does. We built a trading partner
that can act on it in five chains, in plain English, and a
self-custody wallet that lives where you already live. We made
the connection between all three impossible to replicate.

The token captures every fee the platform earns.

## What is DeepBot

Three products. One brain. One token.

Bobby is the intelligence layer. Lives in thousands of project
communities. Detects coordination across them. Volume signals
are explicitly excluded because volume is the easiest input in
crypto to fake.

Dale is the trading partner. Conversational. Multi-chain.
Aware of what Bobby has detected, and structurally the only
product that can act on it. You ask Dale to swap, hedge,
bridge, or hold. Dale handles route, safety, fees, PIN,
execution.

DeepBot Wallet is the vault. Self-custody. Telegram-native.
Phantom-style GUI. Same wallet Dale executes against, same
keys you own, same security floor. Hold, send, receive, swap
across five chains without leaving the app you already use.

Bobby earns from project ad slots and editorial qualification.
Dale earns from trading fees across Ethereum, Solana, Base,
Polygon, and BNB. The wallet earns from swaps and held
balances across the same five chains. All three flow into
one revenue pool. $DEEPAI holders capture a share of every
fee, every month.

There is no scenario where the platform performs and the token
does not.

We don't predict. We detect.
```

**Closer line for lime accent:** *There is no scenario where the platform performs and the token does not.*

### VARIANT B — The Layered Reveal

```
DEEPBOT PLATFORM

# DeepBot

Three products. One brain. One token. The intelligence network
crypto Telegram actually runs on, bonded to a trading partner
that thinks like one, paired with a self-custody wallet that
lives where you already live. Five years of detection. Five
chains of execution. One revenue pool that captures every fee
the platform earns.

## What is DeepBot

Bobby is the intelligence. Five years inside crypto Telegram,
watching across thousands of project communities, detecting
what is real before the market notices. Volume is excluded by
design. Coordination is what matters.

Dale is the trading partner. You tell Dale what you want the
way you would tell a sharp friend who trades for a living.
Dale checks the route, the safety, the fees, executes.
Ethereum, Solana, Base, Polygon, BNB. Fifty tools. One
conversation.

DeepBot Wallet is the vault. Self-custody. Phantom-style
visual interface. Same five chains. Same private key you own.
The wallet you use AND the wallet you trust, in the same app.

Then the part nobody else has.

Bobby's intelligence is encoded so only Dale can act on it.
Every fee Dale earns, every ad slot Bobby sells, and every
swap the wallet processes flows into the same revenue pool,
distributed monthly to $DEEPAI holders. Hold the token and
you hold a share of every fee the platform produces, across
three products that scale on different inputs.

Three products. One brain. One pool. One token.

We don't predict. We detect.
```

### VARIANT C — The Three Products Frame

```
DEEPBOT PLATFORM

# DeepBot

Three products. One brain. One pool. One token.

Bobby is the intelligence engine. Five years of crypto Telegram
inside the room. Detection across thousands of communities. The
network projects pay to be seen by, when they qualify.

Dale is the execution engine. A trading partner you talk to in
plain English across Ethereum, Solana, Base, Polygon, and BNB.

DeepBot Wallet is the custody engine. A self-custody wallet
that lives in Telegram. Phantom-style GUI. Same five chains.
Your keys, exportable any time.

The three engines scale on different inputs. Bobby grows when
projects pay for visibility. Dale grows when traders execute.
The wallet grows when users hold and send. All three flow into
the same revenue pool, distributed monthly to $DEEPAI holders.

## What is DeepBot

DeepBot is the platform underneath the only architecture in
crypto where intelligence, execution, and custody share a token.

Bobby's signals are encoded so only Dale can act on them. The
funnel is locked at the data layer. Other products see noise.
Dale sees the trade. The wallet holds the position.

Every fee Bobby earns. Every fee Dale earns. Every swap and
held balance from the wallet. Every subscription, every team
trading profit, every DEX tax on $DEEPAI. All of it routes
to one pool. Hold the token. Hold a share of everything.

We don't predict. We detect.
```

### Locked across all three

- No em dashes
- No public network-size numbers
- No "Built with Claude"
- *We don't predict. We detect.* closes every variant
- Five chains listed: Ethereum, Solana, Base, Polygon, BNB
- The unified pool thesis lands in body
- All three products named on the same page (this is platform overview, not user flow)

### Visual treatment for the home page

The hero block should feel quiet and confident, not loud. Heavy headline weight, generous spacing, body in soft white. The lime accent is reserved for one element: either the *We don't predict. We detect.* tagline at the close, or the $DEEPAI mention. Not both.

Below the hero, transition into three product entry points: Bobby card, Dale card, Wallet card. The 3D bull, the Dale character, and any wallet-specific asset do NOT all appear on this page. The home page is type-only at the hero. The product cards may use small marker icons, restrained.

Three columns on desktop. Stacked on mobile. Equal weight visually.

H1 weight: Cera Pro Bold 700 at the largest size used on the site. The H1 is the brand assertion. Treat it accordingly.

---

## 5.2 — Dale Memory page

Path: `/dale/memory`

```
# Dale's Memory

Most trading bots are amnesiacs. You set up your style on Monday. By Tuesday they have forgotten you exist. You repeat your slippage tolerance, your favorite chains, your usual position size, your stop loss style, every single trade. The bot is a calculator with a chat interface. It serves you. It does not know you.

Dale remembers.

Every trade you make. Every token you have asked about. Every exit strategy you have set, every one that hit, every one that didn't. The chains you trade on most. The size you usually open at. The way you take profit. The phrases you use when you want to act fast. The way you ask about a position when you are nervous about it.

Dale gets sharper the longer you trade together. By trade ten, Dale knows you. By trade fifty, Dale anticipates. By trade two hundred, Dale is a trading partner with two hundred sessions of context on how you actually move in the market.

PULL QUOTE: The longer you trade with Dale, the more Dale becomes yours.

## What Dale remembers

Your trading style. The sizes you typically take. The chains you favor. Your slippage tolerance. The way you set exit strategies. Whether you take profit early or ride hard. Whether you cut losses fast or hold through.

Your portfolio. Every position open and closed. Every entry, every exit, every P&L. Your win rate, your average gain, your worst drawdown.

Your preferences. The way you like Dale to talk to you. Whether you want fast confirmations or full breakdowns. The tokens you have followed, the wallets you have flagged, the projects you watch.

Your context. Your risk profile. Your time of day. Whether you are an alpha-checker at 2am or a methodical morning trader. Dale has seen the pattern. Dale uses it.

PULL QUOTE: Dale doesn't ask twice.

If you set your default slippage at 12% three weeks ago, Dale doesn't ask again. If you always take profit at 2x, Dale offers the 2x first. If you have never bought a token under $200K mcap, Dale tells you when one fits the pattern and when one doesn't. The next trade is faster because the last fifty trades happened.

## What it feels like over time

The first few trades, Dale learns. Asks about your style. Confirms your slippage. Walks you through the exit strategy options. Useful, but conversational.

By trade ten, Dale starts skipping the questions. *"Same setup as last time?"* If you say yes, the trade builds in seconds. If you say no, you adjust the one thing that's different.

By trade fifty, Dale starts anticipating.

> *Dale: $PEPE just crossed your usual entry threshold. Convergence on Bobby. Want me to set up your standard play?*

By trade two hundred, Dale is operating the way a real trading partner does. Knows when you are off your normal patterns. Knows when you are oversizing. Knows when you are about to ape into something that doesn't match your style and asks the question gently.

> *Dale: This one's smaller mcap than you usually touch. You sure?*

That sentence is the entire selling point. No other product on the market has that sentence.

PULL QUOTE: Trade with Dale long enough, and Dale starts watching out for you.

## Across products. Across chains. Across sessions.

Dale's memory is not per-chat. It is per-user. Switch from Ethereum to Solana mid-session, Dale knows your Solana history. Open Dale on a different device a week later, Dale remembers what you were watching last time. Reset your phone, reinstall Telegram, Dale is still there.

The memory persists at the platform layer, not the chat layer.

This matters because trading happens across surfaces. You ask about a token on Ethereum on Tuesday, you trade it on Base on Friday, you exit on Solana when bridging makes sense. Most bots treat each chain as its own conversation. Dale treats them as one.

PULL QUOTE: One memory. Every chain. Every session.

## What Dale does with it

Memory is not a feature on its own. Memory is what makes every other feature work better.

**Faster trades.** Dale skips the questions you have already answered. Slippage, gas preference, default chain. Set once, applied always.

**Better suggestions.** When Bobby flags something interesting, Dale checks it against your patterns first. If it fits, Dale shows you. If it doesn't, Dale either skips it or tells you why the match is off.

**Better warnings.** Dale knows your normal sizing. When a trade is bigger than you usually take, Dale flags it. Knows your normal mcap range. When a token is well outside it, Dale notes it. The warnings are calibrated to you, not to a generic risk model.

**Smarter exits.** If you have closed a hundred trades, Dale knows the exit patterns that have worked for you and the ones that haven't.

**Continuity.** You don't re-explain yourself. Ever. Not after a week, not after a month, not after a year.

## Privacy and control

Memory is yours. Three controls, all through conversation.

**See what Dale remembers.**

> *User: what do you remember about me*
>
> *Dale: I have you on Ethereum, Base, and Solana, mostly. You usually open at 0.05 to 0.1 ETH. Slippage at 12%. You like to take 30% off at 2x and trail the rest. You tend to avoid anything under $200K mcap. Your win rate this month is 64%. Want the full breakdown?*

**Forget specific things.**

> *User: forget that I asked about $WIF*
>
> *Dale: Done. $WIF history cleared from your memory.*

**Reset entirely.**

> *User: reset my memory*
>
> *Dale: This will wipe everything I know about you, your trading style, your history, your preferences. The next time we talk, I won't remember any of it. Confirm?*

The reset is irreversible. The platform does not retain a backup you cannot delete.

PULL QUOTE: Your memory. Your control. Your reset.

## What other products do

Most trading bots store nothing about you. The chat is stateless. The product is the same on day 1 and day 1000.

A few store wallet info and recent trades. None build a real profile. None anticipate. None watch your patterns and warn when you stray from them. None calibrate their suggestions to you specifically.

Dale's memory is built into the platform from the first message. It is not a feature added on top. It is the layer underneath every other feature.

PULL QUOTE: Other bots are tools. Dale is a partner.

## Closing line

The first trade with Dale is good. The hundredth trade with Dale is something no other product can offer you.
```

### Visual treatment

- No glowing brain illustration. The trope on memory pages is a glowing brain or a head full of circuits. Cut both.
- A subtle visual progression. Three small cards or a horizontal strip showing trade 1, trade 50, trade 200, with the conversational tone of Dale visibly tightening as the relationship deepens.
- Pull quotes are the page's spine. Use two or three as large display type within the page.
- Lime accent reserved for the closing line only.
- Dale's character avatar appears once, top of the page, quietly.

### Cross-surface pull quotes

- Home page: *The longer you trade with Dale, the more Dale becomes yours.*
- Platform overview: *Other bots are tools. Dale is a partner.*
- Dale section landing: *Trade with Dale long enough, and Dale starts watching out for you.*

---

## 5.3 — Dale Safety and PIN page

Path: `/dale/safety-and-pin`

```
# Safety and PIN Security

The risks in crypto trading are real and most products pretend they are not. Compromised keys. Malicious contracts. Slippage attacks. A second of inattention that ends with an empty wallet. We built around all of them.

Your wallet keys live behind an encryption layer the trading code cannot read. Even when Dale executes a trade, Dale never sees your key. Every PIN you enter auto-deletes from the chat after validation, so the sensitive number never sits in your message history. Forget the PIN and three secret questions you chose yourself unlock the path back in, all three required, stored as hashes the platform cannot reverse.

Every token Dale touches is scanned by Blockaid first. Every panel, every surface, every chain enforces the same PIN gate. There is no bypass route. And if the worst happens, Emergency Sell runs on its own mempool monitor on its own process so the exit door stays open even if everything else is down.

Trade like a sharp friend who trades for a living, on infrastructure that assumes someone is always trying.

## The architecture

Your keys never leave the platform. Wallets are generated inside an isolated security layer with encryption keys the trading layer cannot read. Every transaction Dale prepares is signed inside that boundary, returned as a signed payload, and broadcast to chain.

PULL QUOTE: Dale executes. Dale never holds.

## What happens when you press PIN

You ask Dale to swap. Dale builds the route, checks the safety scan, surfaces the fees, and asks you to confirm with PIN. You type four to six digits. The moment you send, three things happen at once.

The platform validates the PIN against its hashed record. The original message you typed is deleted from the chat by Telegram, so the digits never sit in your history. Your encrypted wallet key is unlocked inside the security layer, just long enough to sign the transaction Dale prepared, then sealed again. The signed payload broadcasts to chain. Dale reports back. Receipt in, position updated, done.

If the PIN is wrong, nothing unlocks. The trade does not build. Dale tells you the attempt failed and counts toward a lockout threshold. Five wrong attempts and the wallet auto-locks for thirty minutes.

If the PIN is right but the route became unsafe between when you asked and when you confirmed, Dale aborts before signing and tells you why.

PULL QUOTE: Confirmation is not a rubber stamp. It is the last gate.

Same flow on the trade panel. Same flow on every chain. Same flow on Emergency Sell, with a tighter timeout. The PIN is the only path through, and the key never leaves the layer that protects it.

## What happens when you forget your PIN

You type "forgot my pin." Dale shows you the hint word you set at PIN creation. Not the PIN. The hint. Something only you would know. A name, a place, a phrase. If it jogs your memory, you try the PIN. You get five attempts before the wallet auto-locks for thirty minutes.

If the hint does not bring it back, you escalate. You say "I need a PIN reset." Dale walks you through the three secret questions you chose yourself at PIN setup. The questions are personal, the answers were yours, and the platform stores only hashes it cannot reverse. All three questions, all three correct. No partial credit. A correct full set unlocks a PIN reset path. Dale asks you to set a new PIN. The new PIN takes effect immediately. The wallet stays locked the entire time, so even during reset, no transaction can move.

If you cannot answer the secret questions either, the team handles it. Dale flags the case to the admin channel with a verification request. The team checks identity against on-chain history, account context, and wallet activity that only the real account holder would know. Once verified, the team resets the PIN and you are notified in the same chat. Your wallet stays locked until then. Funds are safe. Nothing moves.

PULL QUOTE: Easy for the real user, expensive for an attacker, impossible for an attacker without your hint, your three answers, and the team's verification.

## Panic PIN

Set a second PIN at any time. You type it the same way you would type your real PIN. Dale will appear to unlock. Behind the scenes, your funds silently move to the cold wallet address you set in advance. The attacker sees nothing unusual. You walk away with your wallet intact.

Most products have nothing for this scenario. Dale has Panic PIN.

## Runtime safety

Every token Dale touches is scanned by Blockaid before any transaction builds. Honeypots, tax traps, mint authorities, blacklists, reflection schemes, the full known taxonomy of contract-level scams. If a token fails the scan, Dale tells you why and refuses to build the trade.

Bobby tracked outcomes across the network for five years. Dale uses that pattern memory at the moment a token surfaces. **94 launched, rejected 91. Found you 1 worth a look** is not a marketing line. It is what the safety pipeline actually does, every minute.

Emergency Sell runs as its own service on its own process. Dedicated mempool monitoring on Alchemy WSS with dual subscriptions. **Detects 68+ rug attack patterns.** When a rug transaction appears in the mempool, Dale broadcasts a sell with 15% higher gas to front-run the rugger's confirmation. If the main trading service goes down, Emergency Sell stays up, because it has to. One button. The exit door that does not depend on the rest of the platform working.

Continuous safety monitoring on positions you hold. Most bots scan once at purchase. Dale watches the whole time you hold. If the deployer raises sell tax, blacklists holders, removes liquidity, Dale tells you.

Slippage protection on every trade. Route validation on every swap. Gas estimation that refuses to broadcast at unreasonable cost.

## Security levels

Through conversation. Three modes:

**Every trade.** PIN before every signed transaction. Default for new accounts. The most secure mode.

**Session.** PIN once, the wallet stays unlocked for thirty minutes of activity, auto-locks the moment you go quiet. The right mode for active trading sessions.

**Big trades only.** PIN required for transactions above a threshold you set. The fast mode for users who trust their own setup and trade often.

Change it any time. "Dale, switch to every trade." "Dale, set auto-lock to ten minutes." "Dale, change my PIN." No settings menu. No hidden toggle. Conversation is the interface.

## Lock and unlock

"Dale, lock my bot." Locked. Nothing executes until you enter your PIN. Existing positions and stop losses keep running. New trades are blocked.

"Unlock" plus your PIN brings full access back.

## Closing line

Security is the floor. We built the rest of the platform on top of it.
```

### Visual treatment

- No hero illustration. This page lives on type and structure.
- No checkmark icons, no shield icons, no security badges.
- No numbered steps. The walkthroughs are prose.
- Section dividers between major blocks. Subtle horizontal rules.
- Lime accent reserved for the closing line and the Panic PIN section header. Nothing else.
- Pull quote treatment for *Dale executes. Dale never holds.* and *Confirmation is not a rubber stamp. It is the last gate.*

---

## 5.4 — DeepBot Wallet page

Path: `/wallet`

```
# DeepBot Wallet

There is the wallet you use, and the wallet you trust. For most traders, those are different wallets. The hot one for trading lives inside whichever app they happen to be using. The cold one for holding lives somewhere else entirely. Bridging between them is friction. Switching apps is friction. Remembering which wallet had what is friction.

DeepBot Wallet is the wallet you use AND the wallet you trust. Built into Telegram. Self-custody. Phantom-style GUI. Yours.

PULL QUOTE: A wallet that lives where you already live.

## What it is

A Telegram-native, self-custody wallet bot at @walletdeepbot. Visual interface. Multi-chain. Send, receive, swap, hold. Same security floor as Dale. Same wallet, same private key, same balance.

You can use DeepBot Wallet without ever talking to Dale. You can use Dale without ever opening DeepBot Wallet. Most users use both, because both run on the same wallet underneath.

The mental model: Dale is a trading partner who knows what's in your wallet. DeepBot Wallet is the wallet itself, with a clean GUI for the moments when you want to see your balances visually, send a friend some ETH, or check a transaction without typing a single message.

## What it does

**Holds your assets.** Tokens, NFTs, native chain assets. Across Ethereum, Solana, Base, Polygon, BNB. One wallet, every chain you use.

**Send and receive.** Address book. QR scan. ENS and SNS resolution. The basics done right.

**Visual portfolio.** What you hold, what it's worth, recent transactions.

**Swap directly.** Quick swaps without going through a trade decision.

**Self-custody, end to end.** Private keys held in the same encrypted security layer that protects your trades through Dale. Even DeepBot cannot read your key. You can export your private key any time. Your wallet remains yours if every server we run goes offline tomorrow.

PULL QUOTE: Self-custody. Multi-chain. Telegram-native. Yours.

## How it relates to Dale

DeepBot Wallet and Dale share one wallet underneath. Same address. Same balance. Same private key. Same security layer.

Imagine the wallet as the foundation. Dale is the trading partner who lives upstairs. DeepBot Wallet is the lobby with the visual interface. Both rooms are in the same building. Both look at the same vault.

When you trade through Dale, the trade hits the wallet. When you check your balance in DeepBot Wallet, you see what Dale just bought. When you send ETH to a friend through DeepBot Wallet, Dale knows your balance changed. There is no syncing. There is no reconciliation. The wallet is the source of truth. Both products read from it.

This is what makes the platform feel like one product even though it ships in two interfaces. A user who prefers visual GUIs can live in DeepBot Wallet. A user who prefers conversation can live in Dale. A user who wants both can switch fluidly.

PULL QUOTE: One wallet. Two interfaces. Pick the one you want today.

## When to use which

You don't have to choose. Most users end up using both for different moments.

**Use Dale when** you want to trade, scan tokens, set exit strategies, ask about positions, set up DCA, manage your watchlist, talk through a decision. Conversational moments.

**Use DeepBot Wallet when** you want to send a friend some ETH, view your full portfolio across chains visually, check a specific transaction, manage NFTs, do a quick swap without a trading decision behind it. Visual moments.

Both work. Both share the wallet. Both share the security floor.

## Multi-chain

Five chains live: Ethereum, Solana, Base, Polygon, BNB. Same address derivation across EVM chains. Solana with its own derivation. The wallet bot handles the chain switch invisibly.

Move funds between chains via LI.FI bridging, the same integration Dale uses.

ENS resolves on Ethereum and EVM chains. SNS resolves on Solana. Send to a name, not a hex string.

## Security

Same architecture as Dale. Same PIN. Same Panic PIN. Same three-tier recovery (hint word, three secret questions, team-verified reset). Same auto-delete on PIN messages. Same continuous safety monitoring on tokens you hold.

Self-custody is the floor. Your private key is yours from day one. You can export, back up, transfer to another wallet at any time. **DeepBot cannot read your private key. DeepBot cannot move your funds without your PIN.**

If DeepBot disappeared tomorrow, you would still have your wallet. You would import the private key into Phantom, MetaMask, Rabby, or any other wallet that handles the same chains. Your assets would be there. **That is what self-custody means, and that is what most "in-app wallets" do not deliver.**

PULL QUOTE: If DeepBot disappeared tomorrow, your wallet would not.

## Why a separate bot

DeepBot Wallet is a Phantom-style GUI. The right home for a Phantom-style GUI is a Telegram Mini App, which means it needs a bot to launch from. We could have launched it from Dale's bot directly, and over time we will (the unification roadmap below). For now, the wallet has its own bot for three reasons.

**Mental separation.** Trading is a different headspace from holding. Some users want their wallet experience to be calm, visual, separate from the action of trading.

**Fewer dependencies.** The wallet needs to keep working even if a Dale feature breaks. Separation is a reliability boundary.

**Marketing surface.** @walletdeepbot is a discoverable Telegram bot. Users who want a Telegram wallet, even without trading, can land here directly.

## The unification roadmap

The current state is two bots, one wallet, growing closer.

**Phase 1 (live).** Two separate bots. @walletdeepbot for the GUI. @traderdeepbot for Dale. Both share the wallet through the Go API. Users switch between them deliberately.

**Phase 2 (in progress).** Dale launches the wallet Mini App from inline keyboard buttons. "Open wallet" in Dale opens the same Mini App that @walletdeepbot launches.

**Phase 3 (planned).** Unified Telegram Mini App architecture. The wallet UI lives in one Mini App, accessible from Dale, accessible from @walletdeepbot, accessible from the website.

The shared wallet stack is not a roadmap item. It is already true today. Both bots talk to the same Go API wallet endpoints. The unification work is at the UX layer, not the data layer.

## What lives in the wallet today

- Multi-chain balance view (Ethereum, Solana, Base, Polygon, BNB)
- Send and receive with QR scan
- ENS and SNS resolution
- Direct token swaps
- Transaction history
- NFT view
- LI.FI bridging
- Address book
- PIN gate on every signed transaction
- Self-custody private key export

## Closing line

A wallet that lives where you already live. Self-custody. Multi-chain. Yours.
```

### Visual treatment

- Hero is type-only. The wallet doesn't have a character mascot.
- A clean sample of the wallet UI. Render a single mockup of the Mini App showing balances across chains. One screen, not three. Lime accent on the user's net worth or active balance.
- The "one wallet, two interfaces" diagram. Two boxes (Dale chat / DeepBot Wallet GUI) both pointing down to one shared box (the encrypted wallet, the keys, the balance). Lime accent on the shared box because that's the load-bearing concept.
- Chain coverage row. Five small chain icons (ETH, SOL, Base, Polygon, BNB). Restrained.
- Lime accent reserved for two elements. The closing line *A wallet that lives where you already live* and the "shared wallet" box in the architecture diagram.
- No address bars, no fake transaction screenshots, no hex strings as decoration.

### Cross-surface pull quotes

- Platform overview: *One wallet. Two interfaces. Pick the one you want today.*
- Marketing surface: *If DeepBot disappeared tomorrow, your wallet would not.*

The other two (*A wallet that lives where you already live* and *Self-custody. Multi-chain. Telegram-native. Yours.*) live on this section.

---

## 5.5 — Dale Prediction Markets page

Path: `/dale/prediction-markets`

```
# Prediction Markets

Dale doesn't just trade tokens. Dale trades the world.

Will Bitcoin hit $150K by December. Will the Fed cut rates next quarter. Will the Lakers win Tuesday. Will any of the things crypto Telegram is arguing about today actually happen. There are markets for all of it, and most traders never touch them because the path to a bet involves a different platform, a different wallet, a different login, and a different mental model.

Dale collapses the path into one sentence.

> *Will ETH hit $5K by July?*
>
> *Live market. 34% YES across venues right now. Best price is $0.34 on Polymarket. Want a position?*

You say how much. Dale shows the payout math. You confirm. Done.

PULL QUOTE: Token trading and prediction markets in the same conversation. Nowhere else in crypto has this.

## What you can bet on

Dale connects to a prediction market aggregator that unifies the major venues. Polymarket. Kalshi. Cross-venue routing finds the best price for the position you want.

**Crypto.** Price targets, exchange listings, ETF approvals, hash rate milestones, network upgrades.

**Politics.** Election outcomes, primary results, policy decisions, central bank moves.

**Sports.** Match outcomes, championship odds, player milestones, season totals.

**Macro.** GDP prints, inflation prints, employment reports, geopolitical events.

**Crypto Twitter narratives.** The arguments crypto Telegram has on a daily basis often have markets attached. Dale finds them.

If a market exists for it, Dale can find it.

## What it feels like

> **User:** What are the odds Bitcoin hits $150K by December?
>
> **Dale:** Live market. 34% YES across venues. Polymarket has the deepest book at $0.34. Kalshi at $0.36.
>
> **User:** Put $50 on yes.
>
> **Dale:** $50 YES on "Bitcoin above $150,000 by December 31" at $0.34. If it hits, you get $147.06. If not, you lose $50. Confirm with PIN.
>
> **User:** 4829
>
> **Dale:** Done. $50 YES at $0.34 on Polymarket. Position open.

Then Dale watches. If the odds shift significantly, Dale tells you. If you ask for the position later, Dale shows you what it's worth right now. If the market settles, Dale claims the winnings automatically and credits you.

> **Dale (a week later):** $BTC just crossed $130K. Your YES position is now worth $0.61, up from $0.34. Position value $89.71, +79%. Want to take half off the table or ride it?

## Discovery happens naturally

You don't need to know prediction markets exist to use them.

> **User:** Do you think the Fed cuts rates this month?
>
> **Dale:** Don't have to think. There's a live market. Right now it's 18% YES. Looks like the consensus is no. Want to take a position either way?

Most users have an opinion about something happening in the world right now. Dale turns that opinion into a position in two sentences.

PULL QUOTE: Most users have an opinion. Dale turns it into a position.

## What makes this different from going to Polymarket

You could go to Polymarket directly. Most people don't, because the path is long.

Dale removes every step.

**Same wallet.** Funding is USDC, deposit happens once, then every prediction trade pulls from the same balance.

**Same conversation.** No tab switch. No app switch.

**Same PIN gate.** The same security floor that protects your trades protects your predictions.

**Best-price routing.** Dale checks Polymarket and Kalshi in the same query and routes you to whichever venue has the best price. You don't pick the venue. Dale picks the venue.

**Automatic settlement.** When the market resolves, Dale claims the winnings without you having to remember the position exists.

PULL QUOTE: Same wallet. Same chat. Same PIN. Best price across every venue.

## Funding

USDC. Send to the deposit address on any of the supported chains.

**Polygon.** Native chain for Polymarket, lowest fees, fastest confirmations.
**Arbitrum.** Low fees, fast.
**Ethereum.** For larger positions where chain choice matters less.
**Solana.** For Solana-native venues.

The deposit address is generated by Dale on your first prediction market interaction. After deposit, the balance shows up automatically. You can withdraw USDC back to your DeepBot wallet at any time.

## What Dale does that the venues don't

Prediction markets are old. The major venues have been live for years. What's new is having a partner who knows the markets exist, knows when they're worth your attention, and knows when to pull you out.

**Dale watches your positions.** If the odds move significantly, Dale notifies.

**Dale knows when to take profit.** A YES position bought at $0.34 that's now $0.61 is a profitable trade you can close before settlement.

**Dale connects predictions to your trading.** *"Your ETH bag is up 40%. The Fed decision Tuesday could rate cut or hold. There's a market on it. Want to hedge?"*

PULL QUOTE: Your token bag and your prediction positions in one place. Hedges that nobody else can suggest.

## Bobby helps Dale see them coming

Bobby watches crypto Telegram. Conversations cluster around upcoming events. Decisions, launches, narratives, deadlines. By the time the conversation has clustered, the prediction market on the event is already live.

Dale uses this. When Bobby's network is converging on an event with a market attached, Dale surfaces it before the user asks.

> **Dale:** A lot of the network is talking about the Coinbase listing decision. There's a live market on it, currently 22% YES. If you have a view, here's where to put it.

This is the platform working as one. Bobby detects what's about to matter. Dale gives you the position before the matter becomes obvious.

## Closing line

Token trading and prediction markets through the same conversation. Same wallet. Same PIN. Best price across every venue. Bobby surfacing what to bet on before the conversation peaks.

Nobody else has this in Telegram. Nobody else has it anywhere.
```

### Visual treatment

- No pie charts of probabilities.
- Use a sample conversation as the hero, not an illustration. The Bitcoin $150K exchange renders better as a styled chat block.
- The categories list deserves a horizontal strip. Crypto, Politics, Sports, Macro, Narratives — five short cards.
- Lime accent reserved for the closing line and category names on the example cards.
- Dale's avatar appears once, top of the page, quietly.

---

## 5.6 — The Social Layer (parent overview)

Path: `/dale/social-layer`

```
# The Social Layer

Most trading bots are solo experiences. You and a chat window. You win alone. You lose alone. The product never gets bigger because nobody else is in the room.

DeepBot is a community of traders. Dale is the door.

Every trade you make happens against a backdrop of every other trader on the platform. Leagues. Leaderboards. The Crown. Following the sharpest traders and seeing what they're actually buying. Sharing your wins as cards that build referrals into the design. Competing for prizes that change hands every week.

You can ignore all of it and trade alone. You can dive in and trade with the community. The platform works either way. It just gets bigger when you stop trading alone.

PULL QUOTE: You can ignore the community and trade alone. You can dive in and the platform gets bigger.

## Leagues

Five ranks. Earn your way up. Each rank unlocks real perks.

**Rookie.** Zero XP. The starting point.
**Trader.** 100 XP. Priority signal delivery.
**Sharp Shooter.** 500 XP. Referral commission jumps from 20% to 25%.
**Whale Hunter.** 2000 XP. Early access to new features and chains.
**Legend.** 10,000 XP. Custom Dale personality. VIP referral commission of 30%.

XP comes from trades, wins, big wins, streaks, and referrals. Quality matters more than quantity. A 10x hit earns more than ten small trades. Even a stop-loss earns XP because using protection is the right move.

PULL QUOTE: Quality earns more than quantity. Even your stop-losses count.

Dale weaves XP into the conversation, never as a notification.

> **Dale:** Sold $PEPE for +180%. Nice exit. +50 XP, Sniper badge earned. You're 340 XP from Whale Hunter.

## Competitions

Six rotating formats. Real prizes. Real status. Real reasons to trade harder.

- **The Sprint.** Weekly. Best P&L. 0.25 ETH plus a Sprint Champion NFT plus the Crown if you take it.
- **The Sniper.** Bi-weekly. Best single trade by percentage gain. A trader with 0.02 ETH can beat a whale.
- **Volume Wars.** Monthly. Most ETH moved through DeepBot. The competition pays for itself in fees.
- **Diamond Hands.** Monthly. Best held position. Counterbalances fast-trade mentality.
- **Chain Race.** Triggered when a new chain launches. Drives adoption immediately.
- **Crown Clash.** Surprise event. 24 hours. Best P&L takes the Crown. Triggered by the team.

Dale announces, tracks, ranks, and pays out. No external tournament platform. No spreadsheet.

## The Crown

One Crown. One holder at a time. Best single-day P&L wins it. Loses it to whoever beats it.

The Crown is visible. On the leaderboard. On your profile. On every win card you generate while you hold it.

> **Dale (to current holder):** Someone just beat your daily P&L. The Crown moves.
>
> **Dale (to new holder):** You just took the Crown. Your name is on top of the leaderboard. Defend it.

PULL QUOTE: One Crown. Earned daily. The leaderboard never sleeps.

## The leaderboard

Live. Public. Queryable through Dale.

> **User:** Who's the best trader today? What are they buying?
>
> **Dale:** Right now Sha*** is leading with +187% across 23 trades. They've been heavy on Base. Just opened a new position in $TOKEN about an hour ago.

Usernames masked by default. First three characters plus asterisks. Enough for you to recognize yourself, not enough for strangers to find you elsewhere.

> Sha*** +187% 23 trades
> Wha*** +98% 31 trades
> Kry*** +67% 18 trades
> You → +34% 8 trades

If you opt in to public profile, your full username shows.

PULL QUOTE: The market becomes legible through Dale.

## Following sharp traders

You see someone climbing the leaderboard. You follow them.

> **User:** Follow #3.
>
> **Dale:** Following Kry***. I'll ping you when they make a move.

You never get their Telegram handle. Dale is the router.

When they trade, Dale tells you with full context:

> **Dale:** Kry*** just bought $TOKEN. Their track record on similar calls: 4 of 5 hit 2x+. Token's safety scan: clean. Three other traders you follow are also in. Entry mcap: $480K. Want in?

Every line is verified. Track record from real trades. Safety scan from Blockaid. Multiple followers in the same name from real positions. Entry mcap from chain.

PULL QUOTE: Twitter calls have zero accountability. DeepBot has verified track records.

## Copy trading

Following surfaces signals. Copy trading executes on them.

> **User:** Copy Kry*** with 0.05 ETH max per trade, ETH and Base only.
>
> **Dale:** Set. I'll mirror their trades within those rules. PIN required at execution unless you set this to autonomous. Kill switch is one sentence away.

## Paper trading

You don't have to risk real money to enter the leagues. Start with 0.1 ETH of virtual money. The leaderboard shows you next to live traders, marked as paper, with the killer line:

> Pa: New*** +142% 14 paper trades
> If this was live, you'd be #4 overall.

That last line is the conversion trigger.

## Win cards

Every winning trade can become a shareable card. Dale offers proactively.

> **Dale:** You just hit 5x on $TOKEN. Want me to make you a card? Looks good on Twitter.

The card includes the trade stats, your rank badge, your masked or public username, and a referral link baked into the design.

PULL QUOTE: Every winning trade is marketing material. The community grows on user wins.

Card types:
- Single trade card
- Weekly summary
- Monthly summary
- All-time stats
- Welcome card (generated on signup, shareable before first trade)

## Scratch cards

Random rewards. Real dopamine. Built into the trading flow.

Triggers: every fifth trade, first trade of the day, P&L milestones, referrals, random surprise (1 in 20 trades).

Reward pool, weighted:
- 0% fee on next trade (common)
- 50% fee discount for 24 hours (uncommon)
- Free 3-day PRO trial (rare)
- $DEEPAI airdrop (rare)
- Revenue share boost for the month (ultra rare)
- Golden Trade — zero fee plus priority execution (legendary)

## Streaks and badges

Twelve plus badge types. First Blood. Sniper. Whale Hunter. Streak King. Diamond Hands. Rug Survivor. Crown Bearer.

Badges are not a checklist. They emerge from how you trade.

## Surprise gifts from the team

Bronze, Silver, Gold tier NFTs. The good ones have real revenue share value.

> **Dale:** Congrats on reaching Legend rank. The team is gifting you a Silver NFT worth 3 ETH. It's already in your wallet.

Gifts are not scheduled. Not announced. Not earned by formula. The team decides when someone deserves it.

PULL QUOTE: The team can drop a 3 ETH NFT on you with one sentence to Dale.

## Social safety

Three opt-in levels. Default is closed.

**Closed.** Default. Nobody can message you.
**Followers only.** People who follow you can message you through Dale.
**Open.** Anyone can message you through Dale.

Messages route through Dale, never as direct Telegram DMs. Dale filters scams ("send me your seed phrase," "guaranteed 10x"). Rate-limits to prevent spam. Block someone permanently with one sentence.

Real Telegram handles never exposed unless the user opts in.

## Referrals

Three commission tiers. Bronze 20%. Silver at 10+ active referrals jumps to 25%. Gold at 50+ goes to 30%. VIP by invite, up to 40%.

Forever, not one-time. Payouts in USDC on Solana, $50 minimum, 7-day lock period.

Dale never pushes referrals. Mentions them once per conversation, max, at moments that fit.

## How it all connects

Bobby detects what's about to matter across thousands of communities. Dale executes on what users decide. The social layer turns every successful execution into community evidence.

Win cards spread. The leaderboard becomes legible. Followers see what sharp traders are buying. Copy traders execute on it. New users land via referrals from cards real traders shared because they were proud of the win.

Every loop reinforces the others. Bobby's intelligence drives trades. Trades produce cards. Cards drive referrals. Referrals fill leagues. Leagues drive more trades.

PULL QUOTE: Bobby detects. Dale executes. The community compounds.

## Closing line

Trade alone if you want. Or join the community that turns every win into momentum for everyone.
```

### Visual treatment

- The leaderboard renders as a real component. Live data if available. Masked usernames, P&L bars, the Crown icon next to the Crown holder, status pills for paper traders.
- Win cards as visual examples. Render two or three sample cards inline.
- The Crown gets gold accent. Dedicated space.
- Conversation samples render as Telegram bubble pairs throughout this section.
- Lime accent reserved for two elements per sub-page. Gold reserved for Crown elements only.
- Badge taxonomy renders as horizontal strip. Earned in lime, unearned muted gray.
- Leagues progression renders as a stepped vertical visual.

### Section vs single page

This is too much for a single page. Break into a parent section with sub-pages:

```
The Social Layer (parent — overview page)
├── Leagues and Ranks
├── Competitions and the Crown
├── The Leaderboard
├── Following and Copy Trading
├── Paper Trading
├── Win Cards
├── Scratch Cards
├── Streaks and Badges
├── Surprise Gifts
├── Social Safety
└── Referrals
```

The parent overview uses the copy above. Each sub-page expands one section into a focused page with deeper examples.

---

## 5.7 — Rev Share Overview

Path: `/rev-share`

```
# Revenue Share

We rewrote this model because the community deserves honest numbers.

Phase 1 is small. The pool is approximately $3,490 a month, distributed across all qualifying holders. That number is real, and it is honest about where DeepBot sits today.

The structure underneath that number is what scales. Six revenue streams. Four growth phases. Three products feeding one pool. Token holders participate in the economics of every trade Dale executes, every swap the wallet processes, AND every fee Bobby earns from projects.

PULL QUOTE: Three products. One brain. One pool.

## The unified pool

Every revenue source the platform generates flows into the same holder pool.

Bobby's trending slots. Bobby's editorial qualification fees. Bobby's Founders Program. Bobby's ad inventory across all five permanent surfaces. Dale's trading fees across Wallet, Dale, and Link. Dale's prediction market fees through AGG. The wallet's swap fees and held-balance economics. The DEX tax on $DEEPAI. Team trading profits. Pro subscriptions. All of it.

Hold $DEEPAI and you don't participate in one product's economics. You participate in the entire platform's.

PULL QUOTE: Every fee Bobby earns. Every trade Dale executes. Every swap the wallet processes. One pool.

## Three engines that scale on different inputs

Bobby's engine needs projects. Dale's engine needs traders. The wallet's engine needs holders, senders, and swappers. They are not correlated.

In a quiet trading month, Bobby's monetization carries the pool. In a hot trading month, all three engines fire.

PULL QUOTE: There is no scenario where the platform performs and the token does not.

## The six streams

**Stream 1. Platform trading and swap fees.** 40% of trading and swap fees charged across three execution surfaces: @walletdeepbot for direct swaps, @traderdeepbot/Dale for conversational trading, deepbot.pro for web. All routes, all chains.

**Stream 2. DEX tax.** 1% of $DEEPAI on-chain trading volume.

**Stream 3. Team trading profits.** 15% of realised team profits.

**Stream 4. Advertising and trending revenue.** 15% of gross ad and trending revenue across the entire platform: Bobby surfaces, Link, all future ad inventory.

**Stream 5. Pro subscriptions.** 15% of $49/month subscription fees from non-holders.

**Stream 6. Bobby intelligence licensing.** Reserved for future intelligence licensing arrangements. Currently zero, but the stream exists in the architecture.

Three streams are ETH-denominated. Two are USD-denominated. The calculator handles the conversion automatically.

## The four growth phases

| Phase | When | Volume / month | Active wallets | Chains live | Estimated pool / month |
|-------|------|---------------|----------------|-------------|----------------------|
| Phase 1: Current | Now | $150K | 250 | ETH | ~$3,490 |
| Phase 2: Month 6 | M6 | $7M | 2,500 | ETH, Base, BNB, Polygon | ~$49,800 |
| Phase 3: Month 12 | M12 | $25M | 8,000 | All four, compounding | ~$164,400 |
| Full Operations | Year 2+ | $75M | 20,000 | Mature multi-chain | ~$454,000 |

Phase 1 is where we are. Modest, but real. The honesty is the point.

## How to qualify

- Hold at least 100,000 $DEEPAI at the time of the monthly snapshot.
- Snapshot is random within the month.
- No selling within 7 days before the snapshot.
- Earnings are proportional to your share of 90.8M eligible supply.
- Payment in USDC or USDT direct to your wallet.
- The 100,000 threshold does not change.

## NFT multipliers

OG, Silver, and Gold NFTs receive additional pool benefits.

- Silver pool divided by the fixed Silver supply of 40.
- Gold pool divided by the fixed Gold supply of 10.
- OG holders tracked in real time via the calculator.

Per-NFT earnings are predictable regardless of how many token holders enter or exit.

## The calculator

`revenuecalc.deepbot.pro`

Live data from Etherscan and the DeepWhale API. Auto-adjusts ETH-denominated streams against the live ETH price from Binance. Shows OG NFT eligibility in real time.

Enter your wallet balance. Pick your NFTs. See your personalised numbers across all four phases in 30 seconds.

## Closing line

DeepBot is one platform with three products. Bobby decides what crosses the threshold from noise into signal across thousands of communities. Dale executes for traders across five chains and 50+ tools. The wallet holds, sends, and swaps for every user across the same five chains. All three feed the same revenue pool. Hold $DEEPAI and you participate in every fee Bobby earns, every trade Dale executes, and every swap the wallet processes. One pool. One token. Three products that scale independently.
```

### Visual treatment

- The hero diagram is a unified-pool funnel. Three income streams (Bobby's ad surfaces, Dale's trading flows, the wallet's swap flows) across the top, all flowing into a single pool in the center, pool flowing out to holders at the bottom. Lime accent on the pool itself. All three product surfaces visibly converge.
- The phase chart adds three revenue segments. Stacked bars across Phase 1 / M6 / M12 / Full Ops. Trading-fee segment in primary lime. Bobby segment in secondary lime. Wallet swap segment in a third tone.
- The "three engines" visual. Three arrows scaling on different axes (Trading Volume / Intelligence Monetization / Custody and Swaps), converging on the holder pool. The point this visual makes: the engines are uncorrelated, the pool is one.
- Phase 1 should not look small or sad on screen. Honest is the brand. Small is the truth. The design renders Phase 1 with the same care as Full Operations. The numbers do the differentiation, not the visual treatment.
- Calculator embedded above the fold if technically feasible. If not, an "Open Calculator" button in lime that is impossible to miss.

### Voice for this section

Honest voice. Clinical, specific, deflationary on hype, anchored on numbers.

The honest voice tells you what's small now. It also tells you what the path looks like. It does not promise. It does not soften. It does not bury Phase 1 under Phase 4.

---

## 5.8 — Dale Conversation Reference

This is a designer reference for what users say to Dale and how Dale replies. Use for any mockup, screenshot, marketing visual, gitbook illustration, or social post.

**Dale has no commands. There is no command list.** Every interaction is plain English. Users type whatever they would type to a sharp friend who trades for a living. The examples below are illustrative.

Dale's voice is short, sharp, useful. Two-beat replies are the norm: data first, then Dale's take. Long blocks of text are a tell that something went wrong. Where Dale is shown talking in two paragraphs, those render as two separate messages in Telegram.

### Onboarding

> **User:** gm
>
> **Dale:** gm. While you were opening this, I scanned every token that launched in the last hour. 94 launched. I rejected 91. Found you 1 worth a look.
>
> What should I call you?

### Token scanning

> **User:** 0x6982508145454ce325ddbe47a25d4ec3d2311933
>
> **Dale (msg 1):** Safe · *$PEPE* · Ethereum
> $0.0000082 · *$4.2B* mcap · $180M liq
> 2% buy / 3% sell
> *1,200 holders* · LP locked 94%
>
> **Dale (msg 2):** How much?

### Buying (any phrasing)

> **User:** buy 0.1 ETH of PEPE
> **User:** ape 0.05 into pepe on base
> **User:** 0x6982...1933 0.1
> **User:** get me some bobby with 0.5 eth
>
> **Dale:** ⚡ BUY 0.05 ETH on Base. PIN to confirm.
>
> **User:** 4829
>
> **Dale:** ✅ Executed.
>
> How are you selling this? TP at 2x? Trailing stop? DCA out? Or riding raw?

### Selling

> **User:** sell my PEPE
> **User:** jeet half my PEPE
> **User:** dump 50%
> **User:** sell everything in my bag

### Setting exit strategies

> **User:** take 30% at 2x and trail the rest
>
> **Dale:** Got it.
> TP1: Sell 30% when $PEPE hits $0.0000072 (2x)
> Trailing stop: remaining 70% with 25% trail from peak
>
> I'll watch this 24/7. Confirm? YES / CHANGE
>
> **User:** yes
>
> **Dale:** Set. I'm watching. Go live your life.

### DCA, limit orders, portfolio, signals, wallet, lock/unlock, forgot PIN, fiat, bridging, Emergency Sell

(Full reference: see appendix or paste from /mnt/user-data/outputs/dale-conversation-reference.md)

### Voice (PRO)

> **User (voice):** Hey Dale, scan that pepe contract I sent you yesterday and buy a tenth eth if it still looks safe.
>
> **Dale (text):** Pulled $PEPE from yesterday. Still safe. *$4.4B* mcap now, was *$4.2B*.
>
> Confirming: BUY 0.1 ETH on Ethereum. Say "go" or tap YES.
>
> **User (voice):** Go.
>
> **Dale:** ⚡ Executed.

**Voice PIN.** Say the PIN to authorize. PRO only.

### Multilingual

Dale answers in whatever language the user types in.

> **User:** ¿qué está pasando con PEPE?
>
> **Dale:** $PEPE sigue verde, +50% esta semana. Entrada $0.0000036, ahora $0.0000054. ¿Quieres ajustar el TP?

### Tone notes for designers

- **Two-beat replies.** Data first, take second, as separate messages.
- **Bold for emphasis on numbers and tickers.** *$PEPE*, *$4.2B mcap*, *+50%*. Sparingly.
- **Three emojis only.** ⚡ for trade confirmations, ✅ for success, ⚠️ for warnings and Emergency Sell. Anything else is noise.
- **No periods at the end of one-line replies.** Casual.
- **Variation in phrasing.** Dale never copy-pastes himself.
- **Short.** The shorter the reply, the more confident Dale sounds.

---

# PART 6 — Reconciliation and launch

## What's shipped vs pending

Most of what this brief describes is **shipped or about to ship**. A few items are **scheduled for post-launch drops.** The gitbook should reflect the reality.

### Live as of May 7

- Dale on Ethereum, Base, BNB, Polygon, Solana
- Conversational trading with PIN gate
- Blockaid scanning before every trade
- Emergency Sell on dedicated mempool monitor
- Multi-wallet management
- DCA via Sonar
- LI.FI bridging
- ONCHAIN.money fiat onramp
- QuickSwap partner integration
- Dale Memory (basic preference recall)
- Bobby network across thousands of groups
- Bobby admin commands by chat
- Bobby ad surfaces (5 permanent, capped)
- Founders Program with auto-discount
- Referrals (Bronze/Silver/Gold/VIP)
- `rewards.deepbot.pro` dashboard
- $DEEPAI 40% trading fee distribution
- **@walletdeepbot bot live with multi-chain balance view**
- **Wallet send and receive across 5 chains**
- **Shared wallet stack between Dale and @walletdeepbot via Go API**

### Pending (held until ship, then publish)

- PIN auto-delete from chat
- Three secret questions identity reset
- Panic PIN on all chains
- Pattern-matched memory warnings ("this is bigger than you usually take")
- "What do you remember about me" introspection
- Forget-specific-token / reset memory tools
- AGG.market prediction markets integration
- Voice messages in / Voice PIN
- Dale website widget
- Bobby Trending Channel
- **Private key export from @walletdeepbot (CONFIRM SHIPPED — load-bearing for self-custody page)**
- **Wallet Mini App launching from Dale via inline keyboard (Phase 2 unification)**
- **Unified Mini App architecture (Phase 3)**

### Phase 6 (post-launch drips)

- XP and leagues
- Six competition formats
- The Crown
- Leaderboard with masked usernames
- Following / Copy trading
- Paper trading
- Win cards
- Scratch cards
- Streaks and badges
- Surprise gifts from team
- Social safety opt-in levels

## Recommendation: ship the section as a roadmap with weight

The gitbook can ship at launch with **shipped items in present tense and pending items labeled with their drop week.** This frames the platform as launching in stages, which is itself a story. The reader sees a roadmap with weight, not vaporware.

Alternative: ship a teaser at launch with three or four items labeled and the rest held. Less coverage but every word is true on day one.

The marketing argument for the first option: revealing the full map is part of why the trader joins. The second option is safer but quieter.

## Hard publish gates

These four pages should NOT publish in present tense unless the corresponding feature ships:

1. **Safety and PIN page.** The PIN auto-delete + 3 secret questions + Panic PIN paragraphs depend on shipped behavior. If unshipped, hold the page.
2. **Dale Memory page.** The pattern-matched warnings and introspection tools paragraphs are the killer features. If unshipped, the page should hold.
3. **Prediction Markets page.** AGG.market integration is not yet live. Either hold the page entirely, or ship a one-line teaser instead.
4. **Wallet page.** The "If DeepBot disappeared tomorrow your wallet would not" pull quote depends on private key export being live. Confirm before publishing or soften to "your keys are isolated and exportable through the recovery flow" if export is post-launch.

Honesty is the brand. Better to publish less in full truth than more in optimistic tense.

## What absolutely cannot be on this site

Final summary of every constraint scattered through this brief.

- No network-size numbers in public copy
- No "Built with Claude" or AI-vendor mentions
- No Bobby↔Dale cross-links from inside user-flow copy (platform overview and rev share are the only exceptions)
- No em dashes anywhere
- No "trending" as our claim
- No placeholder content
- No fake stats, no synthetic graphs
- No carousels, parallax, animated heroes
- No glowing brain illustrations
- No security icons or badges
- No pie charts of probabilities
- No light mode v1
- No competitor names called out (describe the category)
- No projection inflation
- No "guaranteed earnings" framing on rev share
- No Phase 1 visual minimization (must look as cared-for as Full Operations)
- No copying of the article structure on summarized content (paraphrase, no quotes 15+ words)

---

## One thing to remember

This is the documentation site for a platform that knows what's happening in crypto Telegram before the rest of the market. Every design decision is in service of that fact. If a designer instinct says "make this fun and bouncy and colorful" the answer is no, because that signals "another crypto bot." If an instinct says "make this severe and corporate" the answer is also no, because that signals "another B2B SaaS." The middle is what we want: confident, sharp, restrained, with the lime accent landing like a punchline.

When in doubt, design as if the reader has been burned by crypto products before and is one bad sentence away from closing the tab. Earn the next click.

The product is real. The design should be too.

---

*End of master brief.*
