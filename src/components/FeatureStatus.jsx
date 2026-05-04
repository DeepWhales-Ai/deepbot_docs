// Inline status pill — addendum §4.1.
// Reads from /data/feature-status.json. If status is `live`, renders nothing
// (heading reads normally). Otherwise renders a small pill.

import featureStatus from '../../data/feature-status.json';

export function FeatureStatus({ id }) {
  const f = featureStatus.features?.[id];
  if (!f) {
    // Per addendum §8 step 5: do not silently default to live.
    // Visible warning so the omission is caught in review.
    return (
      <span
        className="feature-status-pill feature-status-pill--coming"
        title={`FeatureStatus id="${id}" not in feature-status.json — add it before merge.`}
      >
        ?{id}
      </span>
    );
  }
  if (f.status === 'live') return null;

  const drops = f.drops ? ` · ${f.drops}` : '';
  const label = f.status === 'building' ? 'building'
              : f.status === 'coming'   ? `coming${drops}`
              : f.status === 'planned'  ? 'planned'
              : f.status;

  return (
    <span className={`feature-status-pill feature-status-pill--${f.status}`}>
      {label}
    </span>
  );
};

export default FeatureStatus;
