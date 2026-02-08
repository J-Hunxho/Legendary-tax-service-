import React from 'react';

const LegendaryPromos: React.FC = () => {
  const promoCards = [
    {
      eyebrow: 'Refund Advance',
      title: 'Up to $7,000',
      subtitle: 'Pre-file today and receive your advance on Jan 2, 2025.',
      bullets: [
        'Shortest possible time for approval',
        'Funds direct deposited next day',
        'No assessment of credit history',
        'Secure virtual filing from home'
      ]
    },
    {
      eyebrow: 'File Today',
      title: 'Get Money Today',
      subtitle: 'Bigger refunds. Legendary service.',
      bullets: [
        '1135 W Meighan Blvd, Gadsden, AL 35901',
        'Virtual filing from home available',
        'Inbox us now to start your file',
        '(256) 441-5319'
      ]
    },
    {
      eyebrow: 'Tax Prep Academy',
      title: 'Turn Knowledge Into Income',
      subtitle: 'Learn step-by-step how to start a tax business.',
      bullets: [
        'No experience needed · Work from home or in office',
        'Make up to $50K in your first year',
        'Taught by professionals with 20+ years experience',
        'Next cohorts: Sept 22 and Oct 20 — spots are limited'
      ]
    }
  ];

  return (
    <section id="promos" className="py-28 px-6 md:px-12 bg-[#0B1E6D] relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="text-[#D4AF37] tracking-[0.5em] text-xs font-black uppercase mb-4 block opacity-80">Legendary Updates</span>
          <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
            Bigger refunds. <span className="text-[#D4AF37]">Legendary service.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg font-light">
            New ways to file, earn, and accelerate your refund — all delivered with the luxury care Legendary Tax Service is known for.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {promoCards.map((card) => (
            <div
              key={card.title}
              className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 hover:border-[#D4AF37]/40 transition-all duration-500 group"
            >
              <div className="text-[10px] tracking-[0.4em] uppercase font-black text-[#D4AF37] mb-4">{card.eyebrow}</div>
              <h3 className="text-3xl font-serif text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                {card.title}
              </h3>
              <p className="text-gray-400 mb-6 font-light leading-relaxed">{card.subtitle}</p>
              <ul className="space-y-4 text-sm text-gray-300 font-light">
                {card.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 items-start">
                    <span className="w-2 h-2 mt-2 rounded-full bg-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.5)]"></span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-1/2 right-0 w-[420px] h-[420px] bg-[#D4AF37]/5 blur-[160px] rounded-full"></div>
    </section>
  );
};

export default LegendaryPromos;
