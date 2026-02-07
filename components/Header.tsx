
import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onContactClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 px-6 md:px-12 py-6 ${
      isScrolled ? 'bg-[#050505]/95 backdrop-blur-md border-b border-[#D4AF37]/10 py-4 shadow-xl' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="bg-[#D4AF37] p-2 rounded-xl shadow-[0_0_15px_rgba(212,175,55,0.3)] group-hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-all">
            <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5M19 19C19 19.6 18.6 20 18 20H6C5.4 20 5 19.6 5 19V18H19V19Z" />
            </svg>
          </div>
          <div className="flex flex-col -space-y-1">
            <span className="font-serif text-xl tracking-tight font-black text-white group-hover:text-[#D4AF37] transition-colors">LEGENDARY</span>
            <span className="text-[10px] tracking-[0.4em] text-[#D4AF37] uppercase font-bold">Tax Service</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-10 text-[10px] font-bold tracking-[0.3em] text-gray-400">
          <a href="#" className="hover:text-[#D4AF37] transition-all relative group">
            HOME
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all group-hover:w-full"></span>
          </a>
          <a href="#success" className="hover:text-[#D4AF37] transition-all relative group">
            SUCCESS
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all group-hover:w-full"></span>
          </a>
          <a href="#pricing" className="hover:text-[#D4AF37] transition-all relative group">
            PRICING
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all group-hover:w-full"></span>
          </a>
        </nav>

        <button 
          onClick={onContactClick}
          className="relative overflow-hidden bg-transparent border border-[#D4AF37] text-[#D4AF37] px-8 py-2.5 rounded-full text-[10px] font-bold tracking-widest transition-all duration-300 hover:bg-[#D4AF37] hover:text-black hover:shadow-[0_0_20px_rgba(212,175,55,0.6)] hover:scale-105 active:scale-95 group"
        >
          <span className="relative z-10">CONSULTATION</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
