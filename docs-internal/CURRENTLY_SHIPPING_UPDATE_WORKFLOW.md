# CurrentlyShipping update workflow

**Audience:** Krypt (and anyone else who edits the home-page CurrentlyShipping strip).
**Cadence:** every Sunday OR within 24h of a major ship event.
**Source of truth:** `/data/feature-status.json`.
**Time to ship one update:** ~3 minutes.

This file lives at `docs-internal/` (outside `docs/`), so Docusaurus does **not** route it as a doc page and it does **not** appear in any sidebar. It's an internal contributor reference.

---

## TL;DR

Edit `data/feature-status.json`. Done.

The CurrentlyShipping component (`src/components/CurrentlyShipping.jsx`) imports the JSON at build time and renders three columns from the `currently_shipping` block. No component edits needed when adding/removing items.

---

## File anatomy

`data/feature-status.json` has two relevant blocks:

```json
{
  "last_updated": "YYYY-MM-DD",
  "launch_date": "2026-05-07",
  "currently_shipping": {
    "now": ["id_1", "id_2", ...],
    "next": ["id_7", "id_8", ...],
    "stealth": {
      "private_beta": 2,
      "stealth_design": 1
    }
  },
  "features": {
    "id_1": {
      "label": "Display name",
      "status": "shipped",
      "shipped_date": "2026-04-28",
      "date_label": "Apr 28",
      "summary": "One-line description that hovers as title attribute.",
      "where": []
    }
  }
}
```

**`currently_shipping.now`** — array of feature IDs in display order, NOW column. Mix of `shipped` (recent) and `testing` / `design` (in-flight).

**`currently_shipping.next`** — array of feature IDs in display order, NEXT column. Confirmed roadmap, ~next 90 days.

**`currently_shipping.stealth`** — object of `{ key: count }` pairs. Renders as redacted bars in the column with a counter line ("2 in private beta · 1 in stealth design"). Display labels are mapped in `CurrentlyShipping.jsx` under `STEALTH_LABELS`. Add new keys there if you introduce new stealth categories.

---

## Required fields per feature entry

When adding a feature that the CurrentlyShipping strip references, the entry under `features` must have:

| Field | Required? | Notes |
|---|---|---|
| `label` | yes | Display name, the row's main text |
| `status` | yes | One of: `shipped`, `testing`, `design`, `in_progress` |
| `summary` | yes | One-line description, renders as hover tooltip |
| `shipped_date` | for `shipped` only | ISO `YYYY-MM-DD` |
| `target_date` | optional | ISO `YYYY-MM-DD` for known target |
| `date_label` | yes | Human-friendly display string (see below) |
| `where` | yes | `[]` if not referenced from any docs page |

**`date_label` voice:**
- For `shipped`: month + day, e.g. `"Apr 28"`, `"May 1"`
- For `testing` / `design` (in-flight): age in days, e.g. `"7d"`, `"14d"`, `"21d"`
- For `next` items with a quarter or window, e.g. `"Q2"`, `"30 days"`, `"60 days"`, `"Week 1-2 post-launch"`

Avoid: `"yesterday"`, `"soon"`, `"shortly"`, `"shipping later"`. Use ISO dates or specific relative windows.

---

## Status taxonomy (locked)

| Status value | Display | Pill color | Meaning |
|---|---|---|---|
| `shipped` | SHIPPED | lime on dark text | In production |
| `testing` | TESTING | blue tint | Beta / dogfood, behind a flag |
| `design` | DESIGN | muted gray | Specced, not building yet |
| `in_progress` | IN PROGRESS | amber tint | Active build |

Do NOT introduce new statuses without first updating `STATUS_DISPLAY` in `CurrentlyShipping.jsx` and adding a `.db-shipping__status--{name}` rule in `src/css/custom.css`.

The `FeatureStatus` pill component in `src/components/FeatureStatus.jsx` treats `shipped` as a synonym for `live` (renders nothing). The two taxonomies coexist; CurrentlyShipping uses the new one, doc-page pills use the legacy `live | building | coming | planned`.

---

## Weekly update procedure

1. **Triage what shipped this week.**
   For each item:
   - Update its entry in `features`: `status: "shipped"`, add `shipped_date: "YYYY-MM-DD"`, set `date_label` to month+day.
   - Move its id from `currently_shipping.next` to `currently_shipping.now` if it wasn't already there.
   - If a `now` item has been shipped for >30 days, drop it from `currently_shipping.now`. The strip is "currently shipping," not "shipping history."

2. **Triage what's actively in-flight.**
   For each `testing` / `design` / `in_progress` item, bump its `date_label` (age + 7d if it's age-based) or update the target window.

3. **Promote items from `next` → `now`** if they entered active testing this week.

4. **Update stealth counts** if they changed. Add or remove entries from `currently_shipping.stealth`.

5. **Bump `last_updated`** at the top of the JSON to today's date in ISO. The CurrentlyShipping strip displays this in the "UPDATED · ..." line.

6. **Commit.**
   ```
   git add data/feature-status.json
   git commit -m "currently-shipping: weekly update YYYY-MM-DD"
   ```

7. **Push to a branch + open a PR**, or push direct to main if you have that auth. Vercel auto-deploys from main.

---

## Stealth column rules

- Show **counts only**, never names or labels.
- Each entry in `currently_shipping.stealth` becomes one redacted-bar row plus one counter-line item.
- Display label comes from `STEALTH_LABELS` in `CurrentlyShipping.jsx`. Common keys: `private_beta`, `stealth_design`, `nda`. Add new keys to the map first.
- If something becomes public, move it out of `stealth` and into a `features` entry referenced from `now` or `next`.

---

## Example diff — promoting "smart money cluster scoring v2" from design to testing

Before:
```json
"smart_money_cluster_scoring_v2": {
  "label": "Smart money cluster scoring v2",
  "status": "design",
  "date_label": "21d"
}
```

After:
```json
"smart_money_cluster_scoring_v2": {
  "label": "Smart money cluster scoring v2",
  "status": "testing",
  "date_label": "3d"
}
```

The id stays in `currently_shipping.now`. The pill color flips from gray to blue. The age-label resets to `3d` (since testing started 3 days ago).

Commit: `currently-shipping: weekly update 2026-05-12`

---

## When NOT to update

- Speculative items: don't list features that aren't on the roadmap. Stealth counter is the place for "things we're working on that we won't talk about."
- Marketing aspirations: this isn't the launch teaser. It's the velocity proof. Numbers matter.
- Past wins: if it shipped >30 days ago, it's history, not "currently shipping."

The strip is one of the most-read panels on the home page. Every claim on it is verifiable. Keep it that way.
