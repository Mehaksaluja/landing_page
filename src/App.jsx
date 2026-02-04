import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Framework from './components/Framework';
import WhatsAppCTA from './components/WhatsAppCTA';

function App() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-[#0070f3]">
      <Navbar />
      <Hero />
      <Framework /> {/* <--- Naya Section added here */}
      <WhatsAppCTA />
    </div>
  );
}

export default App;