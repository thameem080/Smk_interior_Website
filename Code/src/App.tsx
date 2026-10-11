import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { FloatingWhatsApp } from './components/WhatsAppButton/FloatingWhatsApp';
import { ScrollToTop } from './components/ScrollToTop';

import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Services } from './pages/Services/Services';
import { Projects } from './pages/Projects/Projects';
import { ProjectDetail } from './pages/ProjectDetail/ProjectDetail';
import { ProcessPage } from './pages/Process/Process';
import { Contact } from './pages/Contact/Contact';
import { FAQPage } from './pages/FAQ/FAQPage';

export const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col justify-between bg-brand-cream text-brand-primary relative antialiased font-sans">
          <Navbar />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:slug" element={<ProjectDetail />} />
              <Route path="/process" element={<ProcessPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          <FloatingWhatsApp />
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;
