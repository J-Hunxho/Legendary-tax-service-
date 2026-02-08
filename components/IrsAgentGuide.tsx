import React from 'react';

const steps = [
  'Select language.',
  'Press 2 for questions about personal income taxes.',
  'Press 1 for questions about a form already filed or a payment.',
  'Press 3 for all other questions.',
  'Press 2 for all other questions.',
  "When asked to enter your Social Security number, don't press anything.",
  'Press 2 for personal or individual tax questions.',
  'Press 3 for all other questions.'
];

const IrsAgentGuide: React.FC = () => {
  return (
    <section id="irs" className="py-28 px-6 md:px-12 bg-[#0A1A59] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        <div>
          <span className="text-[#D4AF37] tracking-[0.5em] text-xs font-black uppercase mb-4 block opacity-80">Support Line</span>
          <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
            Get a Live IRS Agent
          </h2>
          <p className="text-gray-400 mt-6 text-lg font-light leading-relaxed max-w-xl">
            Need to reach a representative quickly? Follow these steps to navigate the IRS phone tree and connect with a live agent.
          </p>
          <div className="mt-10 inline-flex items-center gap-4 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-6 py-3">
            <span className="text-[10px] tracking-[0.4em] uppercase font-black text-[#D4AF37]">IRS Line</span>
            <span className="text-xl font-serif text-white">1-800-829-1040</span>
          </div>
          <p className="text-gray-500 text-sm mt-6">
            After completing steps 1–8, wait patiently for a representative to assist you.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10">
          <div className="text-[10px] tracking-[0.4em] uppercase font-black text-[#D4AF37] mb-6">Call Steps</div>
          <ol className="space-y-5 text-sm text-gray-200 font-light">
            {steps.map((step, index) => (
              <li key={step} className="flex gap-4">
                <span className="w-8 h-8 rounded-full border border-[#D4AF37]/40 flex items-center justify-center text-[11px] font-black text-[#D4AF37]">
                  {index + 1}
                </span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <div className="absolute -top-10 left-0 w-[300px] h-[300px] bg-[#D4AF37]/5 blur-[140px] rounded-full"></div>
    </section>
  );
};

export default IrsAgentGuide;
