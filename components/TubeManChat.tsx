
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Message } from '../types';

const TubeManChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Welcome to Legendary Tax. I am your Gold Concierge. Ready to secure your refund?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...messages, userMessage].map(m => ({
            role: m.role,
            parts: [{ text: m.text }]
        })),
        config: {
          systemInstruction: "You are the Legendary Tax Service Concierge. Your tone is professional, enthusiastic, and helpful—like a top-tier luxury car dealership's head consultant. You provide clear tax advice for regular everyday consumers but always encourage them to book a formal 'Gold Consultation'. If they ask about the 'inflatable man', tell them it represents the 'high-energy protection' we bring to their finances.",
          temperature: 0.8,
        }
      });

      const aiText = response.text || "Apologies, our Gold systems are briefly syncing. Please call us directly for immediate support.";
      setMessages(prev => [...prev, { role: 'model', text: aiText }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: "A synchronization error occurred. Please try again or visit our main site." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-10 right-10 z-[100] flex flex-col items-end">
      {isOpen && (
        <div className="mb-6 w-[350px] md:w-[400px] h-[550px] bg-[#050505] border border-[#D4AF37]/30 rounded-3xl shadow-[0_30px_100px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-500">
          <div className="p-5 border-b border-[#D4AF37]/10 bg-white/5 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-3 h-3 bg-[#D4AF37] rounded-full animate-pulse shadow-[0_0_10px_#D4AF37]"></div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black tracking-[0.4em] uppercase text-[#D4AF37]">Gold Concierge</span>
                <span className="text-[9px] text-gray-500 font-bold uppercase tracking-widest">Active Now</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-[#D4AF37] transition-colors p-2 hover:bg-white/5 rounded-full">
               <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M6 18L18 6M6 6l12 12" strokeWidth={2.5} /></svg>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-[#D4AF37] text-black font-medium rounded-br-none shadow-lg' 
                    : 'bg-white/5 text-gray-200 rounded-bl-none border border-white/5'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 p-4 rounded-2xl flex gap-2">
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-6 border-t border-[#D4AF37]/10">
            <div className="flex gap-3">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask your tax query..."
                className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-sm focus:outline-none focus:border-[#D4AF37] transition-all text-white placeholder-gray-600"
              />
              <button 
                onClick={handleSend}
                className="bg-[#D4AF37] p-3 rounded-2xl hover:bg-[#C5A028] transition-all active:scale-95 shadow-lg group/send"
              >
                <svg className="w-6 h-6 text-black group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeWidth={2.5} />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mini Rapid Tube Man Button */}
      <div className="relative group/btn">
        <div className="absolute -top-14 left-1/2 -translate-x-1/2 pointer-events-none group-hover/btn:opacity-100 opacity-0 transition-opacity duration-300">
           <div className="bg-white text-black text-[9px] font-black py-1.5 px-4 rounded-full whitespace-nowrap shadow-2xl border border-[#D4AF37]">
             TAX CONCIERGE
           </div>
        </div>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-20 h-20 bg-[#C41E3A] rounded-full flex items-center justify-center shadow-[0_10px_40px_rgba(0,0,0,0.6)] hover:shadow-[#D4AF37]/30 transition-all hover:scale-105 active:scale-95 border-2 border-[#D4AF37]/20"
        >
          <svg viewBox="0 0 100 100" className="w-16 h-16 text-white drop-shadow-xl overflow-visible">
            {/* The Rapid Flapping Man for the Chat Icon */}
            <path 
              d="M50 90 C50 70 45 40 50 20" 
              stroke="currentColor" 
              strokeWidth="10" 
              strokeLinecap="round" 
              fill="none" 
              className="animate-mini-tube-rapid"
            />
            <circle cx="50" cy="15" r="7" fill="currentColor" className="animate-mini-head-shake" />
            
            {/* Rapid Flailing Mini Arms */}
            <path 
              d="M45 35 C30 25 20 10 10 30" 
              stroke="currentColor" 
              strokeWidth="5" 
              strokeLinecap="round" 
              fill="none" 
              className="animate-mini-arm-left"
            />
            <path 
              d="M55 35 C70 25 80 10 90 30" 
              stroke="currentColor" 
              strokeWidth="5" 
              strokeLinecap="round" 
              fill="none" 
              className="animate-mini-arm-right"
            />
          </svg>
          
          <style>{`
            @keyframes mini-tube-rapid {
              0%, 100% { transform: rotate(-8deg); d: path("M50 90 C50 70 45 40 50 20"); }
              50% { transform: rotate(12deg); d: path("M50 90 C55 70 60 40 50 20"); }
            }
            @keyframes mini-arm-left {
              0%, 100% { transform: rotate(0deg); d: path("M45 35 C30 25 20 10 10 30"); }
              50% { transform: rotate(-50deg); d: path("M45 35 C25 15 10 5 5 45"); }
            }
            @keyframes mini-arm-right {
              0%, 100% { transform: rotate(0deg); d: path("M55 35 C70 25 80 10 90 30"); }
              50% { transform: rotate(50deg); d: path("M55 35 C75 15 90 5 95 45"); }
            }
            @keyframes mini-head-shake {
               0%, 100% { transform: translate(0, 0); }
               50% { transform: translate(6px, -6px); }
            }
            .animate-mini-tube-rapid { animation: mini-tube-rapid 0.4s infinite ease-in-out; transform-origin: bottom center; }
            .animate-mini-arm-left { animation: mini-arm-left 0.25s infinite ease-in-out; transform-origin: 45px 35px; }
            .animate-mini-arm-right { animation: mini-arm-right 0.2s infinite ease-in-out; transform-origin: 55px 35px; }
            .animate-mini-head-shake { animation: mini-head-shake 0.4s infinite ease-in-out; }
          `}</style>
        </button>
      </div>
    </div>
  );
};

export default TubeManChat;
