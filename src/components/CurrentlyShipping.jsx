// Currently shipping strip: three columns NOW · NEXT · STEALTH.
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
      return {
        id,
        label: f.label,
        status: f.status,
        statusDisplay: STATUS_DISPLAY[f.status] || f.status.toUpperCase(),
        dateLabel: f.date_label || f.shipped_date || f.target_date || '',
        summary: f.summary || '',
      };
    })
    .filter(Boolean);
}

export function CurrentlyShipping() {
  const cs = featureStatus.currently_shipping || { now: [], next: [], stealth: {} };
  const updated = featureStatus.last_updated || '';
  const nowItems = lookupItems(cs.now);
  const nextItems = lookupItems(cs.next);
  const stealth = cs.stealth || {};

  return (
    <div className="db-shipping">
      <div className="db-shipping__head">
        <div className="db-shipping__title">
          <span className="db-shipping__pulse" />
          CURRENTLY SHIPPING
        </div>
        <div className="db-shipping__updated">UPDATED · {updated}</div>
      </div>

      <div className="db-shipping__cols">
        <div className="db-shipping__col">
          <div className="db-shipping__colhead">NOW</div>
          {nowItems.map((x) => (
            <div key={x.id} className="db-shipping__row">
              <span className={`db-shipping__status db-shipping__status--${x.status.replace(/_/g, '-')}`}>
                {x.statusDisplay}
              </span>
              <span className="db-shipping__label" title={x.summary}>{x.label}</span>
              <span className="db-shipping__since">{x.dateLabel}</span>
            </div>
          ))}
        </div>

        <div className="db-shipping__col">
          <div className="db-shipping__colhead">NEXT</div>
          {nextItems.map((x) => (
            <div key={x.id} className="db-shipping__row">
              <span className={`db-shipping__status db-shipping__status--${x.status.replace(/_/g, '-')}`}>
                {x.statusDisplay}
              </span>
              <span className="db-shipping__label" title={x.summary}>{x.label}</span>
              <span className="db-shipping__window">{x.dateLabel}</span>
            </div>
          ))}
        </div>

        <div className="db-shipping__col">
          <div className="db-shipping__colhead">STEALTH</div>
          <div className="db-shipping__stealth-block">
            {Object.entries(stealth).map(([key, count]) => (
              <div key={key} className="db-shipping__row db-shipping__row--stealth">
                <span className="db-shipping__redacted">{'█'.repeat(18 + (key.length % 6))}</span>
              </div>
            ))}
          </div>
          <div className="db-shipping__counter">
            {Object.entries(stealth).map(([key, count]) => (
              <span key={key}><b>{count}</b> {STEALTH_LABELS[key] || key.replace(/_/g, ' ')}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentlyShipping;
