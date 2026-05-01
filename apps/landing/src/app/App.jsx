import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Home from '../pages/Home.jsx';
import FeaturesPage from '../pages/FeaturesPage.jsx';
import WorkflowPage from '../pages/WorkflowPage.jsx';
import PhilosophyPage from '../pages/PhilosophyPage.jsx';
import ReleasesPage from '../pages/ReleasesPage.jsx';
import PrivacyPage from '../pages/PrivacyPage.jsx';
import TermsPage from '../pages/TermsPage.jsx';
import { translations } from './translations.js';

function App() {
  const [lang, setLang] = useState('pt');
  const t = translations[lang];

  useEffect(() => {
    document.title = t.title;
  }, [lang, t.title]);

  const toggleLang = () => {
    setLang(prev => prev === 'pt' ? 'en' : 'pt');
  };

  return (
    <Router>
      <div className="relative min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30 overflow-x-hidden">
        {/* Visual Base Layer: Grid + Noise */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-grid opacity-100" />
          <div className="absolute inset-0 bg-noise opacity-100" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950" />
        </div>

        <div className="relative z-10">
          <Navbar t={t.nav} toggleLang={toggleLang} lang={lang} />
          <main>
            <Routes>
              <Route path="/" element={<Home t={t.pages.home} />} />
              <Route path="/features" element={<FeaturesPage t={t.pages.features} />} />
              <Route path="/workflow" element={<WorkflowPage t={t.pages.workflow} />} />
              <Route path="/philosophy" element={<PhilosophyPage t={t.pages.philosophy} />} />
              <Route path="/releases" element={<ReleasesPage t={t.pages.releases} />} />
              <Route path="/privacy" element={<PrivacyPage t={t.pages.privacy} />} />
              <Route path="/terms" element={<TermsPage t={t.pages.terms} />} />
            </Routes>
          </main>
          <Footer t={t.footer} />
        </div>
      </div>
    </Router>
  )
}

export default App
