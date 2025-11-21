
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ValuePropSection } from './components/ValuePropSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { FabricPreviewSection } from './components/FabricPreviewSection';
import { MoodboardSection } from './components/MoodboardSection';
import { PricingSection } from './components/PricingSection';
import { ComparisonSection } from './components/ComparisonSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTASection } from './components/FinalCTASection';
import { Footer } from './components/Footer';
import { SearchPage } from './components/SearchPage';
import { ManufacturerDashboard } from './components/manufacturer/ManufacturerDashboard';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-primary-100 selection:text-primary-900">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ValuePropSection />
        <HowItWorksSection />
        <FabricPreviewSection />
        <MoodboardSection />
        <PricingSection />
        <ComparisonSection />
        <TestimonialsSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/manufacturer-dashboard" element={<ManufacturerDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
