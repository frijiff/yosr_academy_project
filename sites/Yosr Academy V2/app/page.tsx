"use client";
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProblemSection from '../components/ProblemSection';
import MethodSection from '../components/MethodSection';
import PricingSection from '../components/PricingSection';
import EnrollmentForm from '../components/EnrollmentForm';
import Footer from '../components/Footer';

export default function Home() {
  const scrollToForm = () => {
    if (typeof document !== 'undefined') {
      const element = document.getElementById('enrollment-form');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col w-full">
      <Navbar onCtaClick={scrollToForm} />
      <main className="flex-grow w-full">
        <Hero onCtaClick={scrollToForm} />
        <ProblemSection />
        <MethodSection />
        <PricingSection onCtaClick={scrollToForm} />
        <div id="enrollment-form" className="scroll-mt-20">
          <EnrollmentForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}