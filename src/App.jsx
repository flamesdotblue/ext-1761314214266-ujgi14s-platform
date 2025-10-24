import React from 'react';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import Services from './components/Services';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-white text-slate-900">
      <Hero />
      <BentoGrid />
      <Services />
      <Footer />
    </div>
  );
}
