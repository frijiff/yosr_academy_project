import React from 'react';

const MethodSection: React.FC = () => {
  const methods = [
    {
      icon: "🗣️",
      title: "المحادثة والتواصل",
      desc: "نركزوا برشا على الـ Oral باش الصغير يفك العقدة ويتكلم بطلاقة."
    },
    {
      icon: "👥",
      title: "مجموعات صغيرة",
      desc: "أقسام فيها عدد محدود باش كل تلميذ ياخو حقه في الوقت والاهتمام."
    },
    {
      icon: "📚",
      title: "متابعة البرنامج الرسمي",
      desc: "ندعموا المكتسبات الدراسية ونصلحوا النقائص اللي تعطل التلميذ في القسم."
    },
    {
      icon: "🎮",
      title: "تعلم ممتع",
      desc: "نستعملوا طرق بيداغوجية حديثة تخلي الصغير يحب اللغة وما يملش."
    }
  ];

  return (
    <section className="py-24 bg-brand-900 text-white relative overflow-hidden">
       {/* Background Patterns */}
       <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6">علاش تختار أكاديمية يسر؟</h2>
          <p className="text-brand-200 text-lg max-w-2xl mx-auto">منهجية مدروسة تجمع بين المتعة والجدية لنتائج مضمونة.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {methods.map((m, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors">
              <div className="text-4xl mb-6 bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center">
                {m.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{m.title}</h3>
              <p className="text-brand-100 leading-relaxed text-sm">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodSection;