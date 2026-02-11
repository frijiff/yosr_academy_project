
import React from 'react';

interface PricingProps {
  onCtaClick: () => void;
}

const PricingSection: React.FC<PricingProps> = ({ onCtaClick }) => {
  return (
    <section className="py-24 px-6 bg-[#6A0066]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-relaxed">أسعارنا واضحة</h2>
          <p className="text-lg text-white/60 font-bold tracking-wide">أفضل إستثمار في مستقبل صغيرك</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Card 1 */}
          <div className="bg-[#FEEBF6] p-10 rounded-[3rem] shadow-2xl flex flex-col transition-all hover:-translate-y-2">
            <h3 className="text-xl font-black text-[#6A0066] mb-6 leading-relaxed">لغة واحدة</h3>
            <div className="flex items-baseline gap-2 mb-2" dir="ltr">
              <span className="text-7xl font-black text-[#6A0066] font-nums">60</span>
              <span className="text-2xl font-bold text-[#6A0066]/40">د.ت</span>
            </div>
            <p className="text-[#6A0066]/60 font-bold mb-8">شهرياً</p>
            
            <ul className="space-y-4 mb-10 text-[#6A0066]/80 font-bold text-right flex-grow">
              <li className="flex items-center gap-3"><span className="text-[#FF0066] text-lg">✓</span> فرنسية أو إنجليزية</li>
              <li className="flex items-center gap-3"><span className="text-[#FF0066] text-lg">✓</span> <span className="font-nums mx-1">8</span> حصص في الشهر</li>
              <li className="flex items-center gap-3"><span className="text-[#FF0066] text-lg">✓</span> حصة مدتها <span className="font-nums mx-1">90</span> دقيقة</li>
              <li className="flex items-center gap-3"><span className="text-[#FF0066] text-lg">✓</span> مجموعات مصغرة</li>
            </ul>
            <button 
              onClick={onCtaClick}
              className="w-full py-4 bg-[#6A0066] rounded-xl font-black text-white hover:brightness-110 transition-all shadow-lg"
            >
              سجل توة
            </button>
          </div>

          {/* Card 2 - Featured */}
          <div className="bg-white p-10 rounded-[3rem] border-4 border-[#FF0066] shadow-[0_20px_50px_rgba(255,0,102,0.3)] flex flex-col relative overflow-hidden transform md:scale-105">
            <div className="absolute top-0 right-0 bg-[#FF0066] text-white text-[10px] font-black px-6 py-2 rounded-bl-2xl uppercase tracking-widest">
              العرض الأفضل
            </div>
            
            <h3 className="text-xl font-black text-[#6A0066] mb-6 leading-relaxed">الباقة الكاملة</h3>
            <div className="flex items-baseline gap-2 mb-2" dir="ltr">
              <span className="text-7xl font-black text-[#FF0066] font-nums">100</span>
              <span className="text-2xl font-bold text-[#6A0066]/40">د.ت</span>
            </div>
            <p className="text-[#6A0066]/60 font-bold mb-8">شهرياً (توفير <span className="font-nums">20</span> د.ت)</p>

            <ul className="space-y-4 mb-10 text-[#6A0066]/80 font-bold text-right flex-grow">
              <li className="flex items-center gap-3"><span className="text-[#FF0066] text-lg">✓</span> فرنسية + إنجليزية</li>
              <li className="flex items-center gap-3"><span className="text-[#FF0066] text-lg">✓</span> <span className="font-nums mx-1">16</span> حصة في الشهر (<span className="font-nums">8</span> لكل لغة)</li>
              <li className="flex items-center gap-3"><span className="text-[#FF0066] text-lg">✓</span> حصة مدتها <span className="font-nums mx-1">90</span> دقيقة</li>
              <li className="flex items-center gap-3"><span className="text-[#FF0066] text-lg">✓</span> أولوية في التسجيل</li>
            </ul>
            <button 
              onClick={onCtaClick}
              className="w-full py-4 bg-[#FF0066] rounded-xl font-black text-white hover:brightness-110 transition-all shadow-xl"
            >
              إختر الباقة الكاملة
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
