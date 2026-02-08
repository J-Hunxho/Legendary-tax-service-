
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(contentRef.current, {
        y: 30,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out"
      })
      .from(imageRef.current, {
        x: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out"
      }, "-=0.8");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-[#0B1E6D]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        <div ref={contentRef} className="text-center lg:text-left">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-[10px] font-black tracking-[0.2em] mb-8 uppercase">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] shadow-[0_0_8px_#D4AF37] animate-pulse"></span>
            Legendary Tax Service · Bigger Refunds
          </div>
          <h1 className="text-6xl md:text-8xl font-serif text-white leading-[0.95] mb-8 tracking-tighter">
            Keep More. <br />
            <span className="text-[#D4AF37] italic">Stress Less.</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
            Luxury-tier tax preparation for regular folks. File in office or virtually from home, and keep your refund protected with legendary precision.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center">
            <button 
              onClick={onCtaClick}
              aria-label="Get your gold refund"
              className="group relative bg-[#D4AF37] hover:bg-[#C5A028] text-black px-12 py-5 rounded-2xl font-black tracking-widest text-xs transition-all duration-300 shadow-[0_10px_30px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:scale-105 active:scale-95 flex items-center gap-4 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5M19 19C19 19.6 18.6 20 18 20H6C5.4 20 5 19.6 5 19V18H19V19Z" />
              </svg>
              GET YOUR GOLD REFUND
            </button>
            <div className="flex flex-col items-center lg:items-start gap-1">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i+20}`} className="w-10 h-10 rounded-full border-2 border-[#050505] shadow-lg" alt="Client Avatar" />
                ))}
              </div>
              <span className="text-[10px] text-gray-500 font-bold tracking-[0.2em] mt-2">JOIN 5,000+ LOCAL CLIENTS</span>
            </div>
          </div>
        </div>

        <div ref={imageRef} className="relative hidden lg:block">
          <div className="relative aspect-square rounded-3xl overflow-hidden border border-[#D4AF37]/20">
            <img 
              src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=1200" 
              alt="Luxury Wealth Visualization" 
              className="object-cover w-full h-full opacity-60 grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#08164F] via-transparent to-[#D4AF37]/5"></div>
            <div className="absolute top-8 left-8 flex items-center gap-3 bg-[#08164F]/70 border border-[#D4AF37]/30 rounded-full px-4 py-2">
              <img src="/legendary-logo.svg" alt="Legendary Tax Service shield" className="w-8 h-8" />
              <span className="text-[10px] tracking-[0.3em] text-[#D4AF37] font-black uppercase">Legendary</span>
            </div>
            <div className="absolute top-12 right-12 w-32 h-32 border-t-2 border-r-2 border-[#D4AF37]/40 rounded-tr-3xl"></div>
            <div className="absolute bottom-12 left-12 w-32 h-32 border-b-2 border-l-2 border-[#D4AF37]/40 rounded-bl-3xl"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4AF37] opacity-[0.03] blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#D4AF37] opacity-[0.05] blur-[120px] rounded-full pointer-events-none"></div>
    </section>
  );
};

export default Hero;
