import { Fragment, useEffect, useState } from 'react';
import { appInfo } from '../content/appInfo';
import { docs } from '../content';
import type { DocKey } from '../content';
import type { Block, Clause } from '../content/types';
import { formatDate, useLang } from './LangContext';

function ClauseList({ items }: { items: Clause[] }) {
  return (
    <ol className="clauses">
      {items.map((clause, i) => (
        <li key={i} className={clause.num ? undefined : 'bullet'}>
          {clause.num && <span className="clause-num">{clause.num}</span>}
          <div className="clause-body">
            {clause.title && <strong className="clause-title">{clause.title}</strong>}
            {clause.title && clause.text && ' '}
            {clause.text}
            {clause.sub && <ClauseList items={clause.sub} />}
          </div>
        </li>
      ))}
    </ol>
  );
}

function BlockView({ block }: { block: Block }) {
  switch (block.kind) {
    case 'p':
      return <p>{block.text}</p>;

    case 'h3':
      return <h3>{block.text}</h3>;

    case 'clauses':
      return <ClauseList items={block.items} />;

    case 'list':
      return (
        <ul>
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );

    case 'table':
      return (
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                {block.head.map((cell, i) => (
                  <th key={i}>{cell}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={r}>
                  {row.map((cell, c) => (
                    <td key={c}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case 'callout':
      return (
        <div className={`callout ${block.tone}`}>
          {block.title && <div className="callout-title">{block.title}</div>}
          <div className="callout-body">{block.text}</div>
        </div>
      );
  }
}

/** Highlights the table-of-contents entry for the section nearest the top of the viewport. */
function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState(ids[0] ?? '');

  useEffect(() => {
    setActive(ids[0] ?? '');

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-88px 0px -65% 0px', threshold: 0 },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids.join('|')]);

  return active;
}

export default function DocPage({ docKey }: { docKey: DocKey }) {
  const { lang, t } = useLang();
  const doc = docs[docKey][lang];
  const ids = doc.sections.map((section) => section.id);
  const active = useActiveSection(ids);

  useEffect(() => {
    document.title = `${doc.title} · ${appInfo.appName}`;
    window.scrollTo({ top: 0 });
  }, [doc.title, docKey]);

  return (
    <>
      <section className="hero">
        <div className="shell">
          <h1>{doc.title}</h1>
          <p className="hero-sub">{doc.subtitle}</p>
          <div className="hero-meta">
            <span className="chip">
              <span className="dot" aria-hidden="true" />
              {t.effective}&nbsp;<strong>{formatDate(appInfo.effectiveDate, lang)}</strong>
            </span>
            <span className="chip">
              <span>{t.updated}</span>&nbsp;{formatDate(appInfo.lastUpdated, lang)}
            </span>
            <span className="chip">
              <span>{appInfo.appName}</span>&nbsp;v{appInfo.appVersion}
            </span>
          </div>
        </div>
      </section>

      <div className="shell layout">
        <aside className="toc">
          <h2>{t.contents}</h2>
          <ol>
            {doc.sections.map((section, i) => (
              <Fragment key={section.id}>
                {section.part && section.part !== doc.sections[i - 1]?.part && (
                  <li className="toc-part">{section.part}</li>
                )}
                <li>
                  <a
                    href={`#${section.id}`}
                    className={section.id === active ? 'current' : undefined}
                  >
                    {section.title}
                  </a>
                </li>
              </Fragment>
            ))}
          </ol>
        </aside>

        <article className="doc">
          <div className="doc-intro">{doc.intro}</div>

          {doc.sections.map((section, i) => (
            <Fragment key={section.id}>
              {section.part && section.part !== doc.sections[i - 1]?.part && (
                <h2 className="part-heading">{section.part}</h2>
              )}
              <section id={section.id} className="section">
                <h2>{section.title}</h2>
                {section.blocks.map((block, j) => (
                  <BlockView key={j} block={block} />
                ))}
              </section>
            </Fragment>
          ))}

          <div className="doc-actions">
            <button type="button" className="btn btn-primary" onClick={() => window.print()}>
              {t.print}
            </button>
            <a className="btn" href={`mailto:${appInfo.supportEmail}`}>
              {appInfo.supportEmail}
            </a>
            <a className="btn" href="#top" onClick={() => window.scrollTo({ top: 0 })}>
              {t.backToTop}
            </a>
          </div>
        </article>
      </div>
    </>
  );
}
