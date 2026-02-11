
import React from 'react';

const ProblemSection: React.FC = () => {
  const subjects = [
    { name: "الرياضيات", icon: "∑" },
    { name: "الفيزياء", icon: "⚛" },
    { name: "العلوم", icon: "🔬" }
  ];

  return (
    <section className="py-24 px-6 bg-[#6A0066] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#E8D4B7]/10 rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Content Side */}
            <div className="p-10 md:p-16">
              <div className="inline-block bg-[#FF0066] text-white px-4 py-1 rounded-lg text-sm font-black mb-6">
                رؤية بيداغوجية واضحة 💡
              </div>
              
              <h3 className="text-3xl md:text-5xl font-black mb-8 leading-relaxed">
                صغيرك يواجه صعوبة في <span className="text-[#FF0066]">الفرنسية</span>؟ <br/>
                <span className="italic">هذا ينجم يؤثر برشة على نتائجه الدراسية.</span>
              </h3>

              <div className="space-y-6 text-xl text-white/80 leading-relaxed">
                <p>
                  في النظام التربوي التونسي، المواد العلمية الأساسية تتقرى <span className="text-white font-bold underline decoration-[#FF0066] underline-offset-8">بالفرنسية</span>. تمكن الصغير من اللغة هو اللي يخليه يفهم دروسه بامتياز.
                </p>

                <div className="flex flex-wrap gap-3 py-2">
                  {subjects.map((s) => (
                    <div key={s.name} className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl">
                      <span className="text-[#FF0066] font-bold">{s.icon}</span>
                      <span className="font-bold text-white text-sm">{s.name}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-[#E8D4B7] rounded-2xl p-6 border-r-4 border-[#FF0066] mb-6">
                  <p className="text-lg font-bold text-[#6A0066] italic">
                    "اللغة هي وسيلة الفهم والتعبير. كي يبدا الساس متين، الصغير يلقى راحته في المواد الكل ويتحرر من عقدة التواصل."
                  </p>
                </div>

                <p className="pt-4 border-t border-white/10 italic text-white/90">
                  وما ننساوش أهمية <span className="text-[#FF0066] font-bold">الإنجليزية</span>، لغة العلم والتكنولوجيا المعاصرة. إتقانها يضمن لصغيركم بيبان النجاح في تونس وفي الخارج.
                </p>
              </div>
            </div>

            {/* Illustration/Image Side */}
            <div className="bg-[#5a005a] p-12 flex flex-col justify-center items-center text-center relative">
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="h-full w-full" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
              </div>
              <div className="relative z-10">
                <div className="text-7xl mb-6 drop-shadow-lg">🎓</div>
                <h4 className="text-3xl font-black mb-4 leading-relaxed">منهجية علمية متطورة</h4>
                <p className="text-white/60 text-lg leading-relaxed max-w-xs mx-auto">
                  في أكاديمية يسر، نركزو على الممارسة الفعلية للغة. صغيركم يتعلم يحكي ويناقش بطلاقة، موش مجرد حفظ دروس.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
