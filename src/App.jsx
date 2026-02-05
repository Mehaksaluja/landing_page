import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppCTA from './components/WhatsAppCTA';

function App() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-blue-600">
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppCTA />
    </div>
  );
}

export default App;