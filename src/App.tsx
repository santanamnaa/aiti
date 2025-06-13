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
import BlogIndex from './pages/blog/index';
import MengenalKonsepDasarMachineLearning from './pages/blog/mengenal-konsep-dasar-machine-learning';
import TrenTerbaruDalamPengembanganWeb2025 from './pages/blog/tren-terbaru-dalam-pengembangan-web-2025';
import MengapaCloudMasihJadiPilihanUtama from './pages/blog/mengapa-cloud-masih-jadi-pilihan-utama';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="portfolio" element={<PortfolioPage />} />
        <Route path="blog" element={<BlogIndex />} />
        <Route path="blog/mengenal-konsep-dasar-machine-learning" element={<MengenalKonsepDasarMachineLearning />} />
        <Route path="blog/tren-terbaru-dalam-pengembangan-web-2025" element={<TrenTerbaruDalamPengembanganWeb2025 />} />
        <Route path="blog/mengapa-cloud-masih-jadi-pilihan-utama" element={<MengapaCloudMasihJadiPilihanUtama />} />
        {/* <Route path="products" element={<ProductsPage />} /> */}
        <Route path="about" element={<AboutPage />} />
        <Route path="careers" element={<CareersPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="company-profile" element={<CompanyProfilePage />} />
        <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="terms-of-service" element={<TermsOfServicePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;