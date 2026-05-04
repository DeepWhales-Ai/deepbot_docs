// Auto-generated launch sequence view — addendum §5.
// Reads /data/feature-status.json and renders five sections:
// Live, Building, Coming (grouped by drops), Planned, Last updated.

import featureStatus from '../data/feature-status.jsx';
import LastUpdated from './LastUpdated.jsx';

const DROP_ORDER = [
  'launch week',
  'post-launch week 1',
  'post-launch week 2',
  'post-launch week 3',
  'post-launch month 1',
];

const dropRank = (d) => {
  const i = DROP_ORDER.indexOf((d || '').toLowerCase());
  return i >= 0 ? i : DROP_ORDER.length;
};

const fmtLaunchDate = (iso) => {
  if (!iso) return 'launch';
  const d = new Date(iso + 'T00:00:00Z');
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
};

export function LaunchSequence() {
  const features = featureStatus.features || {};
  const all = Object.entries(features).map(([id, f]) => ({ id, ...f }));

  const live = all.filter((f) => f.status === 'live');
  const building = all.filter((f) => f.status === 'building');
  const coming = all.filter((f) => f.status === 'coming');
  const planned = all.filter((f) => f.status === 'planned');

  const comingByDrop = coming.reduce((acc, f) => {
    const k = f.drops || 'unscheduled';
    (acc[k] = acc[k] || []).push(f);
    return acc;
  }, {});
  const dropKeys = Object.keys(comingByDrop).sort((a, b) => dropRank(a) - dropRank(b));

  return (
    <div className="db-launch-sequence">
      <section className="db-launch-sequence__group">
        <h2 className="db-h2">Live as of {fmtLaunchDate(featureStatus.launch_date)}</h2>
        {live.length === 0 ? (
          <p className="db-para">No features are currently live.</p>
        ) : (
          <ul className={`db-launch-sequence__list${live.length > 8 ? ' db-launch-sequence__list--two-col' : ''}`}>
            {live.map((f) => <li key={f.id}>{f.label}</li>)}
          </ul>
        )}
      </section>

      <section className="db-launch-sequence__group">
        <h2 className="db-h2">Building (this week)</h2>
        {building.length === 0 ? (
          <p className="db-para">Nothing in active development this week.</p>
        ) : (
          <ul className="db-launch-sequence__list">
            {building.map((f) => (
              <li key={f.id}>
                {f.label}
                {f.drops && <span className="db-launch-sequence__drops"> · {f.drops}</span>}
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="db-launch-sequence__group">
        <h2 className="db-h2">Coming</h2>
        {dropKeys.length === 0 ? (
          <p className="db-para">No scheduled releases queued.</p>
        ) : (
          dropKeys.map((k) => (
            <div key={k} className="db-launch-sequence__drop-group">
              <h3 className="db-h3">{k.charAt(0).toUpperCase() + k.slice(1)}</h3>
              <ul className="db-launch-sequence__list">
                {comingByDrop[k].map((f) => <li key={f.id}>{f.label}</li>)}
              </ul>
            </div>
          ))
        )}
      </section>

      <section className="db-launch-sequence__group">
        <h2 className="db-h2">Planned</h2>
        {planned.length === 0 ? (
          <p className="db-para">No items on the longer roadmap right now.</p>
        ) : (
          <ul className="db-launch-sequence__list">
            {planned.map((f) => <li key={f.id}>{f.label}</li>)}
          </ul>
        )}
      </section>

      <p className="db-para db-launch-sequence__updated">
        Last updated <LastUpdated />.
      </p>
    </div>
  );
};

export default LaunchSequence;
