// Date-stamped narrative — addendum §6.3.
// Reads /data/changelog.json. Newest-first. Date in monospace muted, title in
// Manrope 600, items as a clean bulleted list. No status pills.

import changelog from '../data/changelog.jsx';

const fmt = (iso) => {
  if (!iso) return '';
  const d = new Date(iso + 'T00:00:00Z');
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' });
};

export default function Changelog() {
  const entries = (changelog.entries || []).slice().sort((a, b) => (a.date < b.date ? 1 : -1));
  if (entries.length === 0) {
    return <p className="db-para">No updates posted yet.</p>;
  }
  return (
    <div className="db-changelog">
      {entries.map((e, i) => (
        <article key={i} className="db-changelog__entry">
          <div className="db-changelog__head">
            <span className="db-changelog__date db-mono">{fmt(e.date)}</span>
            <h3 className="db-changelog__title">{e.title}</h3>
          </div>
          <ul className="db-changelog__items">
            {(e.items || []).map((item, j) => <li key={j}>{item}</li>)}
          </ul>
        </article>
      ))}
    </div>
  );
}
