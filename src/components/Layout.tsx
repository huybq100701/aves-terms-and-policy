import { NavLink, Link, Outlet } from 'react-router-dom';
import { appInfo } from '../content/appInfo';
import AvesLogo from './AvesLogo';
import { useLang } from './LangContext';

function LangSwitch() {
  const { lang, setLang, t } = useLang();
  return (
    <div className="lang-switch" role="group" aria-label={t.langLabel}>
      <button type="button" aria-pressed={lang === 'vi'} onClick={() => setLang('vi')}>
        VI
      </button>
      <button type="button" aria-pressed={lang === 'en'} onClick={() => setLang('en')}>
        EN
      </button>
    </div>
  );
}

export default function Layout() {
  const { t } = useLang();

  return (
    <>
      <header className="header">
        <div className="shell header-inner">
          <Link to="/" className="brand">
            <AvesLogo className="brand-mark" />
            <span className="brand-text">
              <span className="brand-name">{appInfo.appName}</span>
              <span className="brand-tag">{t.brandTag}</span>
            </span>
          </Link>
          <nav className="nav">
            <NavLink to="/terms">{t.navTerms}</NavLink>
            <NavLink to="/privacy">{t.navPrivacy}</NavLink>
            <NavLink to="/delete-account">{t.navDeletion}</NavLink>
          </nav>
          <LangSwitch />
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        <div className="shell footer-inner">
          <span>
            © {new Date().getFullYear()} {appInfo.companyName}. {t.footerNote} {appInfo.appVersion}.
          </span>
          <div className="footer-links">
            <Link to="/terms">{t.navTerms}</Link>
            <Link to="/privacy">{t.navPrivacy}</Link>
            <Link to="/delete-account">{t.navDeletion}</Link>
            <a href={`mailto:${appInfo.supportEmail}`}>{appInfo.supportEmail}</a>
          </div>
        </div>
      </footer>
    </>
  );
}
