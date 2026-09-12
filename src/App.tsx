import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import DocPage from './components/DocPage';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<DocPage docKey="terms" />} />
        <Route path="/privacy" element={<DocPage docKey="privacy" />} />
        <Route path="/delete-account" element={<DocPage docKey="deletion" />} />

        <Route path="/terms-of-service" element={<Navigate to="/terms" replace />} />
        <Route path="/dieu-khoan" element={<Navigate to="/terms" replace />} />
        <Route path="/privacy-policy" element={<Navigate to="/privacy" replace />} />
        <Route path="/chinh-sach-bao-mat" element={<Navigate to="/privacy" replace />} />
        <Route path="/data-deletion" element={<Navigate to="/delete-account" replace />} />
        <Route path="/xoa-tai-khoan" element={<Navigate to="/delete-account" replace />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
