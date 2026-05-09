// Wrap swizzle of @theme/DocSidebarItem/Link.
// Replaces a string label that contains "DeepBot" with a BrandText
// React element so the inner theme component renders the brand split
// natively. This avoids the imperative DOM patch in brandSplit.js,
// which gets blown away by React reconciliation on the .menu__link.

import React from 'react';
import Link from '@theme-original/DocSidebarItem/Link';
import BrandText from '@site/src/components/BrandText';

export default function LinkWrapper(props) {
  const { item } = props;
  if (item && typeof item.label === 'string' && item.label.includes('DeepBot')) {
    const wrappedItem = { ...item, label: <BrandText>{item.label}</BrandText> };
    return <Link {...props} item={wrappedItem} />;
  }
  return <Link {...props} />;
}
