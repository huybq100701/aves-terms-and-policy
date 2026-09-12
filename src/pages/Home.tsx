import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { appInfo } from '../content/appInfo';
import AvesLogo from '../components/AvesLogo';
import { formatDate, useLang } from '../components/LangContext';

export default function Home() {
  const { lang, t } = useLang();

  useEffect(() => {
    document.title = `${t.homeTitle} · ${appInfo.appName}`;
  }, [t.homeTitle]);

  const cards = [
    { to: '/terms', icon: '§', title: t.navTerms, desc: t.homeTermsDesc },
    { to: '/privacy', icon: '⛊', title: t.navPrivacy, desc: t.homePrivacyDesc },
    { to: '/delete-account', icon: '⌫', title: t.navDeletion, desc: t.homeDeletionDesc },
  ];

  return (
    <>
      <section className="hero">
        <div className="shell">
          <AvesLogo className="hero-logo" />
          <h1>{t.homeTitle}</h1>
          <p className="hero-sub">{t.homeLead}</p>
          <div className="hero-meta">
            <span className="chip">
              <span className="dot" aria-hidden="true" />
              {appInfo.appName} v{appInfo.appVersion}
            </span>
            <span className="chip">
              <span>{t.updated}</span>&nbsp;{formatDate(appInfo.lastUpdated, lang)}
            </span>
          </div>
        </div>
      </section>

      <div className="shell">
        <div className="home-grid">
          {cards.map((card) => (
            <Link key={card.to} to={card.to} className="card">
              <span className="card-icon" aria-hidden="true">
                {card.icon}
              </span>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
              <span className="card-cta">{t.read} →</span>
            </Link>
          ))}
        </div>

        <section className="info-panel">
          <h2>{t.contactTitle}</h2>
          <p>{t.contactLead}</p>
          <dl className="info-rows">
            <div className="info-row">
              <dt>{t.supportLabel}</dt>
              <dd>
                <a href={`mailto:${appInfo.supportEmail}`}>{appInfo.supportEmail}</a>
              </dd>
            </div>
            <div className="info-row">
              <dt>{t.privacyLabel}</dt>
              <dd>
                <a href={`mailto:${appInfo.privacyEmail}`}>{appInfo.privacyEmail}</a>
              </dd>
            </div>
            <div className="info-row">
              <dt>{t.appLabel} · iOS</dt>
              <dd className="mono">{appInfo.iosBundleId}</dd>
            </div>
            <div className="info-row">
              <dt>{t.appLabel} · Android</dt>
              <dd className="mono">{appInfo.androidPackage}</dd>
            </div>
          </dl>
        </section>
      </div>
    </>
  );
}
