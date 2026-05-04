// Brand wordmark renderer.
//
// "DeepBot" must always render as: white "Deep" + lime "Bot" + lime "®" if
// present. Use this component everywhere the literal "DeepBot" appears in
// MDX body content, callout copy, pull quotes, and any place we control the
// React tree.
//
// Page titles in frontmatter are plain strings and feed Docusaurus's H1 +
// breadcrumb. Those can't accept a component — they're handled by CSS
// (.breadcrumbs__link--active forced to white instead of lime, so the
// active breadcrumb at least doesn't paint the entire word lime).

export const DeepBot = ({ withRegistered = false }) => (
  <span className="db-brand">
    <span className="db-brand__deep">Deep</span><span className="db-brand__bot">Bot</span>{withRegistered && <span className="db-brand__r">®</span>}
  </span>
);

export default DeepBot;
