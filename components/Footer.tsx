
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#08164F] py-24 px-6 border-t border-[#D4AF37]/10 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-[#0B1436] p-2 rounded-lg border border-[#D4AF37]/40">
              <img src="/legendary-logo.svg" alt="Legendary Tax Service logo" className="w-8 h-8" />
            </div>
            <div className="flex flex-col -space-y-1">
              <span className="font-serif text-2xl tracking-tight font-black text-white">LEGENDARY</span>
              <span className="text-[10px] tracking-[0.4em] text-[#D4AF37] uppercase font-bold">Tax Service</span>
            </div>
          </div>
          <p className="text-gray-500 max-w-sm leading-relaxed mb-10 font-light">
            Providing the Gold Standard of tax preparation to the community. Your wealth is legendary; we're here to protect it with precision and care.
          </p>
          <div className="space-y-3 text-sm text-gray-400 font-light mb-10">
            <p>1135 W Meighan Blvd, Gadsden, AL 35901</p>
            <p>(256) 441-5319 · info@legendarytaxservice.com</p>
            <p>legendarytaxservice.org</p>
          </div>
          <div className="flex gap-8">
            {['LinkedIn', 'Twitter', 'Facebook'].map(platform => (
              <a key={platform} href="#" className="text-[#D4AF37]/60 hover:text-[#D4AF37] text-[10px] font-black tracking-[0.3em] transition-all uppercase">
                {platform}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white text-[10px] font-black tracking-[0.4em] uppercase mb-8 border-b border-[#D4AF37]/20 pb-2 inline-block">Service</h4>
          <ul className="space-y-5 text-sm text-gray-500 font-light">
            <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Individual Prep</a></li>
            <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Small Business</a></li>
            <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Audit Defense</a></li>
            <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Consultation</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-[10px] font-black tracking-[0.4em] uppercase mb-8 border-b border-[#D4AF37]/20 pb-2 inline-block">Support</h4>
          <ul className="space-y-5 text-sm text-gray-500 font-light">
            <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Client Portal</a></li>
            <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Tax Deadlines</a></li>
            <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy Shield</a></li>
            <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Gold Support</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-[10px] text-gray-600 tracking-[0.4em] uppercase font-bold">
          © {new Date().getFullYear()} Legendary Tax Service | Est. 2008
        </div>
        <div className="text-[10px] text-gray-600 tracking-[0.4em] uppercase font-bold flex gap-12">
          <span>Shielded by AES-256</span>
          <span className="text-[#D4AF37]">The Gold Standard</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
