
import React, { useState } from 'react';

interface IntakeFormProps {
  onClose: () => void;
}

const IntakeForm: React.FC<IntakeFormProps> = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    goal: '',
    revenue: '',
    name: '',
    email: ''
  });

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/intake', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorPayload = await response.json().catch(() => ({}));
        const message = errorPayload?.message ?? 'Unable to submit your request.';
        throw new Error(message);
      }

      setStep(4);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unable to submit your request.';
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isContactValid = formData.name.trim().length > 0 && formData.email.trim().length > 0;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
      <div 
        className="absolute inset-0 bg-[#050505]/95 backdrop-blur-xl"
        onClick={onClose}
      ></div>
      
      <div className="relative w-full max-w-xl bg-white/5 border border-[#D4AF37]/20 p-12 rounded-3xl shadow-2xl overflow-hidden">
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 h-1 bg-[#D4AF37] transition-all duration-500" style={{ width: `${(step / 4) * 100}%` }}></div>
        
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-500 hover:text-white"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-3xl font-serif mb-8 text-white">What is your primary financial objective?</h3>
            <div className="space-y-4">
              {['Aggressive Growth', 'Wealth Preservation', 'Strict Compliance'].map(opt => (
                <button 
                  key={opt}
                  onClick={() => { setFormData({...formData, goal: opt as any}); nextStep(); }}
                  className="w-full text-left p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all text-lg text-gray-200 hover:scale-[1.02] active:scale-[0.98]"
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-3xl font-serif mb-8 text-white">Estimated annual income?</h3>
            <div className="space-y-4">
              {['Under $100k', '$100k - $250k', '$250k - $1M', '$1M+'].map(opt => (
                <button 
                  key={opt}
                  onClick={() => { setFormData({...formData, revenue: opt}); nextStep(); }}
                  className="w-full text-left p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all text-lg text-gray-200 hover:scale-[1.02] active:scale-[0.98]"
                >
                  {opt}
                </button>
              ))}
            </div>
            <button onClick={prevStep} className="mt-6 text-gray-500 hover:text-[#D4AF37] text-sm uppercase tracking-widest font-bold transition-colors">Back</button>
          </div>
        )}

        {step === 3 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-3xl font-serif mb-8 text-white">Secure your consultation.</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-[10px] font-black tracking-[0.2em] text-[#D4AF37] uppercase mb-2">Full Name</label>
                <input 
                  type="text" 
                  autoFocus
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-[#D4AF37] focus:outline-none transition-all text-white"
                  placeholder="Alexander Sterling"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-[10px] font-black tracking-[0.2em] text-[#D4AF37] uppercase mb-2">Private Email</label>
                <input 
                  type="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-[#D4AF37] focus:outline-none transition-all text-white"
                  placeholder="a.sterling@private.com"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <button 
                onClick={handleSubmit}
                disabled={!isContactValid || isSubmitting}
                className="w-full bg-[#D4AF37] text-black py-4 rounded-xl font-black tracking-[0.2em] hover:bg-[#C5A028] transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'SECURING...' : 'REQUEST GOLD REVIEW'}
              </button>
              {errorMessage && (
                <p className="text-sm text-red-400">{errorMessage}</p>
              )}
            </div>
            <button onClick={prevStep} className="mt-6 text-gray-500 hover:text-[#D4AF37] text-sm uppercase tracking-widest font-bold transition-colors">Back</button>
          </div>
        )}

        {step === 4 && (
          <div className="text-center animate-in zoom-in duration-500">
            <div className="w-20 h-20 bg-[#D4AF37]/20 text-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-3xl font-serif mb-4 text-white">Transmission Received.</h3>
            <p className="text-gray-400 mb-8 font-light">A gold-standard specialist will review your profile and contact you within 4 hours.</p>
            <button 
              onClick={onClose}
              className="bg-white/10 text-white px-8 py-3 rounded-full text-[10px] font-black tracking-widest uppercase hover:bg-white/20 transition-all hover:scale-105 active:scale-95"
            >
              RETURN TO DECK
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default IntakeForm;
