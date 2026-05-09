// Renders a string with the DeepBot brand split applied:
// every occurrence of "DeepBot" (with optional "®") becomes
// white "Deep" + lime "Bot" + lime "®". Non-matching text is
// preserved verbatim. React owns the subtree so reconciliation
// will not blow it away.

import React from 'react';

const BRAND_REGEX = /(DeepBot)(®?)/g;

export default function BrandText({ children }) {
  if (typeof children !== 'string' || !children.includes('DeepBot')) {
    return <>{children}</>;
  }
  const parts = [];
  let lastIndex = 0;
  let match;
  let key = 0;
  BRAND_REGEX.lastIndex = 0;
  while ((match = BRAND_REGEX.exec(children)) !== null) {
    if (match.index > lastIndex) {
      parts.push(children.slice(lastIndex, match.index));
    }
    parts.push(
      <span className="db-brand" key={key++}>
        <span className="db-brand__deep">Deep</span>
        <span className="db-brand__bot">Bot</span>
        {match[2] === '®' && <span className="db-brand__r">{'®'}</span>}
      </span>
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < children.length) {
    parts.push(children.slice(lastIndex));
  }
  return <>{parts}</>;
}
