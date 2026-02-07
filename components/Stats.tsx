
import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { label: 'AVG TAX SAVINGS', value: '$2,850' },
    { label: 'CLIENT TRUST', value: '99%' },
    { label: 'RETURNS FILED', value: '18K+' },
    { label: 'AUDIT WIN RATE', value: '100%' },
  ];

  return (
    <section className="bg-white/5 py-16 border-y border-[#D4AF37]/10 backdrop-blur-md relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 relative z-10">
        {stats.map((stat, idx) => (
          <div key={idx} className="text-center group cursor-default">
            <div className="text-4xl md:text-5xl font-serif text-white mb-3 tracking-tighter group-hover:text-[#D4AF37] transition-all duration-300 transform group-hover:scale-110">
              {stat.value}
            </div>
            <div className="text-[10px] md:text-xs font-black tracking-[0.4em] text-[#D4AF37] opacity-60 uppercase group-hover:opacity-100 transition-opacity">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/5 to-transparent"></div>
    </section>
  );
};

export default Stats;
