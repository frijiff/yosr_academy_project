
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import MethodSection from './components/MethodSection';
import PricingSection from './components/PricingSection';
import EnrollmentForm from './components/EnrollmentForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('enrollment-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden selection:bg-primary selection:text-white">
      <Navbar onCtaClick={scrollToForm} />
      <main className="flex-grow">
        <Hero onCtaClick={scrollToForm} />
        <ProblemSection />
        <MethodSection />
        <PricingSection onCtaClick={scrollToForm} />
        <div id="enrollment-section" className="py-16 md:py-24 bg-sand">
          <EnrollmentForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
