// Reads `last_updated` from feature-status.json, formats as a human date.
// Used on /investors/launch-sequence per addendum §5.3.

import featureStatus from '../data/feature-status.jsx';

const fmt = (iso) => {
  if (!iso) return 'unknown';
  const d = new Date(iso + 'T00:00:00Z');
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
};

export function LastUpdated() {
  return <span>{fmt(featureStatus.last_updated)}</span>;
};

export default LastUpdated;
