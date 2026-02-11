import React from 'react';

const ProblemSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-xl shadow-slate-200/50 border border-slate-100">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            <div className="order-2 md:order-1 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-600 to-brand-400 rounded-3xl transform rotate-3 opacity-20"></div>
              <div className="bg-slate-900 text-white p-8 md:p-10 rounded-3xl relative z-10 leading-relaxed text-lg">
                <p className="mb-6">
                  " ولدي باهي في الحساب والإيقاظ، أما مشكلته الكبيرة في <span className="text-accent-500 font-bold">الفرنسية</span>. 
                  كي يوصل للإعدادي والثانوي، المواد العلمية الكل تولي بالفرنسية، وهذا اللي يخوفني عليه. "
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-2xl">👩‍👦</div>
                  <div>
                    <div className="font-bold">ولية تلميذ</div>
                    <div className="text-white/60 text-sm">تونس العاصمة</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-snug">
                اللغة هي المفتاح <br/>
                <span className="text-brand-700">للنجاح في المواد العلمية</span>
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                في النظام التعليمي التونسي، التمكن من اللغات الأجنبية مش خيار، هو ضرورة. التلميذ اللي يعاني في الفرنسية ولا الإنجليزية، بش يلقى صعوبة كبيرة في الرياضيات والفيزياء والعلوم.
              </p>
              <ul className="space-y-4">
                {[
                  'تجاوز عقدة التكلم أمام الآخرين',
                  'تحسين المعدل الدراسي العام',
                  'ضمان مستقبل جامعي ومهني أفضل'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold text-slate-700">
                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm">✓</div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;