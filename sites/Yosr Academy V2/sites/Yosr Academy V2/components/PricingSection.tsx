import React from 'react';

interface PricingProps {
  onCtaClick: () => void;
}

const PricingSection: React.FC<PricingProps> = ({ onCtaClick }) => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 mb-4">استثمر في مستقبل صغيرك</h2>
          <p className="text-slate-600 text-lg">أسعار مدروسة وفي المتناول لجودة تعليمية عالية.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          
          {/* Standard Plan */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 relative">
            <h3 className="text-xl font-bold text-slate-500 mb-4">لغة واحدة</h3>
            <div className="flex items-baseline gap-1 mb-6" dir="ltr">
              <span className="text-5xl font-black text-slate-900 font-nums">60</span>
              <span className="text-xl text-slate-500 font-bold">DT</span>
              <span className="text-slate-400 text-sm ml-2">/ شهر</span>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-slate-700 font-medium">
                <span className="text-brand-600">✓</span> فرنسية أو إنجليزية
              </li>
              <li className="flex items-center gap-3 text-slate-700 font-medium">
                <span className="text-brand-600">✓</span> 8 حصص في الشهر
              </li>
              <li className="flex items-center gap-3 text-slate-700 font-medium">
                <span className="text-brand-600">✓</span> توقيت مرن (سبت أو أحد)
              </li>
            </ul>

            <button onClick={onCtaClick} className="w-full py-4 rounded-xl border-2 border-slate-200 font-bold text-slate-700 hover:border-brand-600 hover:text-brand-600 transition-colors">
              سجل في لغة واحدة
            </button>
          </div>

          {/* Premium Plan */}
          <div className="bg-brand-900 rounded-3xl p-8 shadow-2xl shadow-brand-900/20 border border-brand-700 relative transform md:-translate-y-4">
            <div className="absolute top-0 right-0 bg-accent-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl rounded-tr-2xl uppercase tracking-wider">
              الأكثر طلباً
            </div>

            <h3 className="text-xl font-bold text-brand-200 mb-4">باك اللغتين (Pack)</h3>
            <div className="flex items-baseline gap-1 mb-6" dir="ltr">
              <span className="text-5xl font-black text-white font-nums">110</span>
              <span className="text-xl text-brand-300 font-bold">DT</span>
              <span className="text-brand-400 text-sm ml-2">/ شهر</span>
            </div>
            
            <p className="text-accent-400 text-sm font-bold mb-6">
              وفر 10 دينارات + أولوية في التسجيل
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-white font-medium">
                <span className="text-accent-500">✓</span> فرنسية + إنجليزية
              </li>
              <li className="flex items-center gap-3 text-white font-medium">
                <span className="text-accent-500">✓</span> 16 حصة في الشهر
              </li>
              <li className="flex items-center gap-3 text-white font-medium">
                <span className="text-accent-500">✓</span> متابعة شاملة ومستمرة
              </li>
            </ul>

            <button onClick={onCtaClick} className="w-full py-4 rounded-xl bg-accent-500 hover:bg-accent-600 text-white font-bold transition-colors shadow-lg shadow-accent-500/30">
              سجل في اللغتين
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PricingSection;