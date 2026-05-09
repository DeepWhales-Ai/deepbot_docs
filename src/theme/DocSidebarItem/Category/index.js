// Wrap swizzle of @theme/DocSidebarItem/Category.
// Same pattern as the Link wrapper: if the category label is a string
// containing "DeepBot", coerce it to a BrandText React element so the
// inner theme component renders the brand split natively.

import React from 'react';
import Category from '@theme-original/DocSidebarItem/Category';
import BrandText from '@site/src/components/BrandText';

export default function CategoryWrapper(props) {
  const { item } = props;
  if (item && typeof item.label === 'string' && item.label.includes('DeepBot')) {
    const wrappedItem = { ...item, label: <BrandText>{item.label}</BrandText> };
    return <Category {...props} item={wrappedItem} />;
  }
  return <Category {...props} />;
}
