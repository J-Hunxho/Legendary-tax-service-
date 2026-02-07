
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import SuccessStories from './components/SuccessStories';
import Pricing from './components/Pricing';
import IntakeForm from './components/IntakeForm';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

const App: React.FC = () => {
  const [isIntakeOpen, setIsIntakeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] selection:bg-[#D4AF37] selection:text-black">
      <ParticleBackground />
      
      <Header onContactClick={() => setIsIntakeOpen(true)} />
      
      <main className="relative z-10">
        <Hero onCtaClick={() => setIsIntakeOpen(true)} />
        <Stats />
        
        <section id="services" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-12 h-1 bg-[#D4AF37] mb-8"></div>
              <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
                Luxury Standard <br />
                <span className="text-[#D4AF37]">Tax Preparation</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Elite tax preparation isn't just for the ultra-wealthy anymore. We provide the Gold Standard of financial care to families, freelancers, and growing businesses.
              </p>
              <div className="space-y-6">
                {[
                  "Maximized Refund Engineering",
                  "Elite Deductible Detection",
                  "Year-Round Financial Shield",
                  "Certified Gold-Standard Audit Defense"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 group">
                    <div className="w-6 h-6 rounded-full border border-[#D4AF37]/30 flex items-center justify-center group-hover:bg-[#D4AF37] transition-all duration-300">
                      <svg className="w-3 h-3 text-[#D4AF37] group-hover:text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5M19 19C19 19.6 18.6 20 18 20H6C5.4 20 5 19.6 5 19V18H19V19Z" />
                      </svg>
                    </div>
                    <span className="text-gray-200 font-medium tracking-wide group-hover:text-[#D4AF37] transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-[#D4AF37]/10 shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200" 
                alt="Luxury Wealth Management" 
                className="object-cover w-full h-full opacity-40 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="text-xs font-bold tracking-[0.4em] text-[#D4AF37] uppercase mb-2">Our Vision</div>
                <div className="text-xl font-serif text-white">Transforming your tax season from a burden into a strategic asset.</div>
              </div>
            </div>
          </div>
        </section>

        <SuccessStories />
        
        <Pricing />
      </main>

      <Footer />
      
      {isIntakeOpen && (
        <IntakeForm onClose={() => setIsIntakeOpen(false)} />
      )}
    </div>
  );
};

export default App;
