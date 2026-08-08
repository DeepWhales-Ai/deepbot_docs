// Structured data for answer engines.
//
// ArticleSchema emits a TechArticle block describing the page. It is metadata
// about the page, so there is nothing to mirror and it renders nothing.
//
// FaqSchema emits ONE FAQPage block per page. Google invalidates an entire
// FAQPage block if any answer inside it is not also visible on the rendered
// page, so the contract here is strict and deliberate:
//
//   Pass it the SAME arrays that the page renders with KeyValueGrid.
//
// Define the arrays once as `export const` in the MDX, hand them to FaqSchema,
// then render those same variables. One array, two consumers, no way for the
// schema text and the visible text to say different things. Never retype an
// answer into a schema block by hand, and never build the schema from an array
// the page does not render. Both drift silently: the markup stays valid and
// the rich result just quietly stops appearing.
//
// Only entries whose question and answer are both plain strings enter the
// schema. If an answer is JSX it still renders visibly but is skipped here,
// because there is no faithful way to flatten arbitrary markup into answer
// text. Skipping is safe. Guessing is not.

import React from 'react';
import Head from '@docusaurus/Head';

const SITE = 'https://docs.deepbot.pro';

export function ArticleSchema({ headline, description, slug }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline,
    description,
    inLanguage: 'en',
    isPartOf: {
      '@type': 'WebSite',
      name: 'DeepBot documentation',
      url: SITE,
    },
    publisher: {
      '@type': 'Organization',
      name: 'DeepBot',
      url: 'https://www.deepbot.pro/',
    },
    ...(slug ? { mainEntityOfPage: { '@type': 'WebPage', '@id': SITE + slug } } : {}),
  };

  return (
    <Head>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Head>
  );
}

export function FaqSchema({ groups }) {
  const qa = (groups || [])
    .flat()
    .filter((it) => it && typeof it.k === 'string' && typeof it.v === 'string');

  if (qa.length === 0) return null;

  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: qa.map((it) => ({
      '@type': 'Question',
      name: it.k,
      acceptedAnswer: { '@type': 'Answer', text: it.v },
    })),
  };

  return (
    <Head>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Head>
  );
}

export default ArticleSchema;
