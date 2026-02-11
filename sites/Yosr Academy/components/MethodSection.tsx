
import React from 'react';

const MethodSection: React.FC = () => {
  const features = [
    {
      title: "نطق سليم وطلاقة",
      desc: "نركزو على التواصل الشفوي باش التلميذ يكتسب ثقة كبيرة في روحه ويخرج من حاجز الخوف."
    },
    {
      title: "لغة حية وتفاعلية",
      desc: "طريقتنا تتجاوز المناهج التقليدية، نعلموهم اللغة في سياقاتها الحقيقية باش يتمكنوا منها بامتياز."
    },
    {
      title: "مجموعات محددة",
      desc: "نضمنوا تأطير شخصي لكل تلميذ من خلال مجموعات صغيرة تسمح بالمتابعة الدقيقة."
    },
    {
      title: "حصص متكاملة",
      desc: "حصص مدتها 90 دقيقة مدروسة بيداغوجياً تجمع بين الفهم، الممارسة، والتطبيق."
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#FEEBF6]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-[#6A0066] leading-relaxed">لماذا أكاديمية يسر؟</h2>
          <p className="text-xl text-[#6A0066]/70 font-bold max-w-2xl mx-auto leading-relaxed">نهدف إلى تكوين جيل متمكن، واثق من قدراته اللغوية، وقادر على التميز في دراسته.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="group bg-[#6A0066]/5 p-10 rounded-[2.5rem] border border-[#6A0066]/10 transition-all hover:bg-[#6A0066] hover:text-white">
              <div className="w-14 h-14 bg-[#FF0066] text-white rounded-2xl mb-8 flex items-center justify-center font-black text-2xl shadow-lg group-hover:bg-white group-hover:text-[#FF0066] transition-colors">
                {i + 1}
              </div>
              <h3 className="text-2xl font-black mb-4 group-hover:text-white transition-colors leading-relaxed">{f.title}</h3>
              <p className="text-[#6A0066]/80 leading-relaxed font-medium group-hover:text-white/70 transition-colors">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
