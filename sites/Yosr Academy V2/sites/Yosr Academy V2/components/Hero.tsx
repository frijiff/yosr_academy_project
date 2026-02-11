import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-24 md:pt-24 md:pb-32">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-brand-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-accent-100 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-sm font-bold mb-8 animate-fade-in">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-500"></span>
            </span>
            الأكاديمية الأولى في تونس للغات
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-[1.3] md:leading-[1.2] tracking-tight">
            صغيرك متميز في <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-700 to-brand-500"> الفرنسية والإنجليزية</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            نعاونوا تلامذتنا باش يتفوقوا في قرايتهم ويبنيو مستقبلهم على قاعدة صحيحة.
            <span className="block mt-2 font-bold text-brand-800">من التحضيري للباكالوريا.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={onCtaClick}
              className="w-full sm:w-auto px-8 py-4 bg-brand-700 hover:bg-brand-800 text-white text-lg font-bold rounded-2xl shadow-xl shadow-brand-700/20 transition-all transform hover:-translate-y-1"
            >
              أحجز بلاصة لصغيرك
            </button>
            <div className="flex items-center gap-2 text-slate-500 font-medium">
              <span>📞</span>
              <span className="font-nums" dir="ltr">+216 95 040 307</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;