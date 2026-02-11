
import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative bg-[#FEEBF6] pt-20 pb-28 px-6 overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#6A0066]/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 -left-24 w-64 h-64 bg-[#FF0066]/10 rounded-full blur-2xl"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-[#6A0066]/10 border border-[#6A0066]/20 px-4 py-1.5 rounded-full text-xs md:text-sm font-bold mb-10 text-[#6A0066]">
          <span className="w-2 h-2 bg-[#FF0066] rounded-full animate-pulse"></span>
          مستقبل صغيرك يبدأ بأساس متين
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 text-[#6A0066] leading-[1.4]">
          صغيرك يتميز <br/> 
          <span className="text-[#FF0066] italic">في الفرنسية والإنجليزية</span>
        </h1>
        
        <p className="text-lg md:text-2xl mb-12 text-[#6A0066]/80 max-w-3xl mx-auto leading-relaxed font-medium">
          في أكاديمية يسر، نرافقوا صغاركم باش يتقنوا اللغات بطلاقة وثقة. <br className="hidden md:block"/>
          نفتحولهم آفاق النجاح في مسيرتهم الدراسية وفي حياتهم المستقبلية.
        </p>
        
        <div className="flex flex-col items-center gap-6">
          <button 
            onClick={onCtaClick}
            className="w-full md:w-auto bg-[#FF0066] text-white px-14 py-5 rounded-2xl font-black text-2xl shadow-xl hover:brightness-110 active:scale-95 transition-all"
          >
            إحجز حصة تجريبية
          </button>
          <p className="flex items-center gap-2 text-[#6A0066]/60 text-sm font-bold">
            <svg className="w-5 h-5 text-[#FF0066]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
            تأطير بيداغوجي في مجموعات صغيرة
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
