// Currently shipping strip: two balanced columns, SHIPPED (now) and BUILDING (next),
// each row showing the label and its one line summary, with a stealth counter footer.
// Source of truth: /data/feature-status.json (currently_shipping block
// indexes into the features dict). Update workflow:
// /docs-internal/CURRENTLY_SHIPPING_UPDATE_WORKFLOW.md.
//
// Status taxonomy locked:
//   shipped     → lime pill, dated (shipped_date / date_label)
//   testing     → blue pill, age window (date_label)
//   design      → muted gray pill, time horizon (date_label)
//   in_progress → amber pill, target window (date_label)
//
// Stealth column shows counts only, no item rows, no labels.
// Counts live under currently_shipping.stealth as { key: count } pairs;
// keys map to display strings via STEALTH_LABELS below.

import featureStatus from '../../data/feature-status.json';

const STATUS_DISPLAY = {
  shipped: 'SHIPPED',
  testing: 'TESTING',
  design: 'DESIGN',
  in_progress: 'IN PROGRESS',
  building: 'BUILDING',
};

const STEALTH_LABELS = {
  private_beta: 'in private beta',
  stealth_design: 'in stealth design',
  nda: 'under NDA',
};

function lookupItems(ids = []) {
  return ids
    .map((id) => {
      const f = featureStatus.features?.[id];
      if (!f) return null;
      const docPath = Array.isArray(f.where) && f.where[0] ? `/${f.where[0]}` : '';
      return {
        id,
        label: f.label,
        status: f.status,
        statusDisplay: STATUS_DISPLAY[f.status] || f.status.toUpperCase(),
        dateLabel: f.date_label || f.shipped_date || f.target_date || '',
        summary: f.summary || '',
        href: docPath,
      };
    })
    .filter(Boolean);
}

function Label({ label, summary, href }) {
  if (href) {
    return (
      <a className="db-shipping__label db-shipping__label--link" title={summary} href={href}>
        {label}
      </a>
    );
  }
  return <span className="db-shipping__label" title={summary}>{label}</span>;
}

export function CurrentlyShipping() {
  const cs = featureStatus.currently_shipping || { now: [], next: [], stealth: {} };
  const updated = featureStatus.last_updated || '';
  const shipped = lookupItems(cs.now);
  const building = lookupItems(cs.next);
  const stealth = cs.stealth || {};
  const stealthEntries = Object.entries(stealth);

  const Column = ({ title, kind, items }) => (
    <div className={`db-shipping__col db-shipping__col--${kind}`}>
      <div className="db-shipping__colhead">
        <span className={`db-shipping__dot db-shipping__dot--${kind}`} />
        {title}
      </div>
      {items.map((x) => (
        <div key={x.id} className="db-shipping__item">
          <Label label={x.label} summary={x.summary} href={x.href} />
          {x.summary && <div className="db-shipping__summary">{x.summary}</div>}
        </div>
      ))}
    </div>
  );

  return (
    <div className="db-shipping db-shipping--v2">
      <div className="db-shipping__head">
        <div className="db-shipping__title">
          <span className="db-shipping__pulse" />
          CURRENTLY SHIPPING
        </div>
        <div className="db-shipping__updated">UPDATED · {updated}</div>
      </div>

      <div className="db-shipping__cols">
        <Column title="SHIPPED" kind="shipped" items={shipped} />
        <Column title="BUILDING" kind="building" items={building} />
      </div>

      {stealthEntries.length > 0 && (
        <div className="db-shipping__foot">
          <span className="db-shipping__redacted" aria-hidden="true">{'█'.repeat(14)}</span>
          <span className="db-shipping__counter">
            {stealthEntries.map(([key, count]) => (
              <span key={key}><b>{count}</b> {STEALTH_LABELS[key] || key.replace(/_/g, ' ')}</span>
            ))}
          </span>
        </div>
      )}
    </div>
  );
};

export default CurrentlyShipping;
