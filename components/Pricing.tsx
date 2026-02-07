
import React from 'react';
import { PricingTier } from '../types';

const tiers: PricingTier[] = [
  {
    name: 'Standard',
    price: '$249',
    description: 'Perfect for W-2 earners and basic homeowners.',
    features: [
      'Federal & State Filing',
      'Max Deduction Analysis',
      'Digital Document Portal',
      'Basic Audit Support'
    ]
  },
  {
    name: 'Platinum',
    price: '$399',
    description: 'Our most popular choice for active families.',
    features: [
      'Investment & Crypto Support',
      'Family Credit Optimization',
      'Year-Round Tax Advice',
      'Priority E-Filing',
      'Full Audit Defense'
    ],
    isPopular: true
  },
  {
    name: 'Gold Executive',
    price: '$649',
    description: 'Designed for small business & contractors.',
    features: [
      'S-Corp / LLC Filings',
      'Expense Strategist Access',
      'Quarterly P&L Reviews',
      'Business Structure Audit',
      '24/7 VIP Hotline'
    ]
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-32 px-6 md:px-12 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-7xl font-serif mb-8 text-white leading-tight">Investment in <span className="text-[#D4AF37]">Wealth.</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">No surprises. No hidden fees. Just elite financial expertise that pays for itself through legendary savings.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {tiers.map((tier, idx) => (
            <div 
              key={idx} 
              className={`relative p-12 rounded-[2.5rem] border transition-all duration-700 group flex flex-col ${
                tier.isPopular 
                  ? 'bg-white/5 border-[#D4AF37] shadow-[0_30px_60px_rgba(212,175,55,0.1)] scale-105 z-10' 
                  : 'bg-transparent border-white/5 hover:border-white/10'
              }`}
            >
              {tier.isPopular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-black text-[10px] font-black tracking-[0.3em] px-8 py-2 rounded-full uppercase shadow-xl">
                  Gold Favorite
                </div>
              )}
              
              <div className="mb-10 text-center">
                <h3 className="text-2xl font-serif mb-4 text-white group-hover:text-[#D4AF37] transition-colors">{tier.name}</h3>
                <div className="text-5xl font-black mb-4 text-white tracking-tighter">{tier.price}</div>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{tier.description}</p>
              </div>

              <div className="flex-1">
                <ul className="space-y-5 mb-12">
                  {tier.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex gap-4 text-sm text-gray-300 font-light items-start">
                      <svg className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button className={`w-full py-5 rounded-2xl font-black tracking-widest text-[10px] transition-all duration-300 relative overflow-hidden group/btn hover:scale-105 active:scale-95 ${
                tier.isPopular 
                  ? 'bg-[#D4AF37] text-black hover:bg-[#C5A028] hover:shadow-[0_0_20px_rgba(212,175,55,0.6)] shadow-lg' 
                  : 'bg-white/5 text-white hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]'
              }`}>
                <span className="relative z-10 uppercase font-black">CLAIM YOUR PLAN</span>
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37]/5 blur-[200px] rounded-full pointer-events-none"></div>
    </section>
  );
};

export default Pricing;
