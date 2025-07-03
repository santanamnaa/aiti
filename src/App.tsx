import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
// import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import CompanyProfilePage from './pages/CompanyProfilePage';
import NotFoundPage from './pages/NotFoundPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import BlogIndex from './pages/BlogPage';
import ITConsultantDetailPage from './pages/services/ITConsultantDetailPage';
import BlogDetailPage from './pages/blog/BlogDetailPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="portfolio" element={<PortfolioPage />} />
        <Route path="blog" element={<BlogIndex />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="career" element={<CareersPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="company-profile" element={<CompanyProfilePage />} />
        <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="terms-of-service" element={<TermsOfServicePage />} />
        <Route path="services/ITConsultantDetailPage" element={<ITConsultantDetailPage />} />
        <Route path="blog/:slug" element={<BlogDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;