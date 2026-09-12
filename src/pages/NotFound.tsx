import { Link } from 'react-router-dom';
import { useLang } from '../components/LangContext';

export default function NotFound() {
  const { t } = useLang();
  return (
    <div className="shell not-found">
      <h1>{t.notFound}</h1>
      <p>{t.notFoundLead}</p>
      <Link to="/" className="btn btn-primary">
        {t.goHome}
      </Link>
    </div>
  );
}
