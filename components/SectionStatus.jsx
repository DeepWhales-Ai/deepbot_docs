// Section banner — addendum §4.2.
// Sits below page heading, above lede. Quiet line of body text linking to
// /investors/launch-sequence. Renders nothing if every referenced feature is live.

import React from 'react';
import featureStatus from '../data/feature-status.json';

const DROP_ORDER = [
  'launch week',
  'post-launch week 1',
  'post-launch week 2',
  'post-launch week 3',
  'post-launch month 1',
];

const earliestDrop = (drops) => {
  if (drops.length === 0) return null;
  const ranked = drops
    .map((d) => ({ d, idx: DROP_ORDER.indexOf((d || '').toLowerCase()) }))
    .filter((x) => x.idx >= 0)
    .sort((a, b) => a.idx - b.idx);
  return ranked.length > 0 ? ranked[0].d : drops[0];
};

export default function SectionStatus({ ids = [] }) {
  const features = ids
    .map((id) => featureStatus.features?.[id])
    .filter(Boolean);

  if (features.length === 0) return null;
  if (features.every((f) => f.status === 'live')) return null;

  const drops = features
    .filter((f) => (f.status === 'building' || f.status === 'coming') && f.drops)
    .map((f) => f.drops);
  const earliest = earliestDrop(drops);
  const phrase = earliest ? earliest : 'the weeks ahead';

  return (
    <div className="section-status-banner">
      Some of this is rolling out in {phrase}. See{' '}
      <a href="/investors/launch-sequence">the launch sequence</a>.
    </div>
  );
}
