
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SuccessStory } from '../types';

gsap.registerPlugin(ScrollTrigger);

const stories: SuccessStory[] = [
  {
    client: "The Henderson Family",
    challenge: "Overwhelmed by multiple income sources and outdated deduction methods.",
    solution: "Full optimization of residential credits and 529 plan benefits.",
    metric: "$5,400",
    metricLabel: "Refund Boost"
  },
  {
    client: "Marcus T. (Independent Consultant)",
    challenge: "Struggling with self-employment tax spikes and messy bookkeeping.",
    solution: "Streamlined S-Corp transition and expense automation strategy.",
    metric: "25%",
    metricLabel: "Lower Tax Rate"
  },
  {
    client: "Evelyn R. (New Investor)",
    challenge: "Confused by crypto reporting and wash-sale rule complications.",
    solution: "Precision cost-basis reconstruction and strategic loss harvesting.",
    metric: "0",
    metricLabel: "Audits Flagged"
  }
];

const SuccessStories: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.success-card');
      
      cards.forEach((card: any, index: number) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 92%", // Triggers when the card is near the bottom of the screen
            toggleActions: "play none none none",
          },
          y: 60,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          delay: index * 0.1, // Slight stagger for grid visibility
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="success" className="py-32 px-6 md:px-12 bg-[#0B1E6D] relative overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-24 text-center">
          <span className="text-[#D4AF37] tracking-[0.6em] text-xs font-black uppercase mb-6 block opacity-80">Gold Case Files</span>
          <h2 className="text-4xl md:text-7xl font-serif text-white max-w-4xl mx-auto leading-[1.1] tracking-tight">
            Real families. <br /> 
            <span className="text-[#D4AF37]">Legendary Results.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {stories.map((story, idx) => (
            <div 
              key={idx}
              className="success-card bg-white/5 border border-white/5 p-12 rounded-[2.5rem] hover:border-[#D4AF37]/30 transition-all duration-700 group relative overflow-hidden hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-[#D4AF37]/10 transition-colors"></div>
              
              <div className="flex justify-between items-start mb-12">
                <div className="p-3 rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37] group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5M19 19C19 19.6 18.6 20 18 20H6C5.4 20 5 19.6 5 19V18H19V19Z" />
                  </svg>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-serif text-[#D4AF37] tracking-tighter group-hover:scale-110 transition-transform origin-right">{story.metric}</div>
                  <div className="text-[10px] tracking-[0.3em] text-gray-500 uppercase font-black mt-1">{story.metricLabel}</div>
                </div>
              </div>

              <h3 className="text-2xl font-serif text-white mb-6 group-hover:text-[#D4AF37] transition-colors">{story.client}</h3>
              
              <div className="space-y-8">
                <div>
                  <div className="text-[10px] tracking-[0.4em] text-[#D4AF37] uppercase font-black mb-3 opacity-60">The Challenge</div>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">{story.challenge}</p>
                </div>
                <div className="pt-6 border-t border-white/5">
                  <div className="text-[10px] tracking-[0.4em] text-[#D4AF37] uppercase font-black mb-3 opacity-60">Gold Solution</div>
                  <p className="text-gray-200 text-sm leading-relaxed italic font-light">"{story.solution}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
