import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2D002D] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#FF0066] flex items-center justify-center rounded-xl font-black text-2xl italic shadow-lg">Y</div>
            <h2 className="text-3xl font-black italic">أكاديمية يسر</h2>
          </div>
          <p className="text-white/40 font-bold max-w-xs leading-relaxed">المرجع الأول لتعليم اللغات في تونس للأجيال الصاعدة.</p>
        </div>
        
        <div className="flex gap-16 text-sm font-bold">
          <div className="space-y-4">
            <h4 className="text-[#FF0066] uppercase tracking-widest text-xs">اتصل بنا</h4>
            <ul className="space-y-2 text-white/60">
              <li>yosracademy.com</li>
              <li className="flex items-center gap-1">
                <span className="font-nums text-lg tracking-wider" dir="ltr">+216 95 040 307</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-[#FF0066] uppercase tracking-widest text-xs">تبعنا</h4>
            <div className="flex gap-6">
              <a href="#" className="text-white/60 hover:text-[#FF0066] transition-colors">Facebook</a>
              <a href="#" className="text-white/60 hover:text-[#FF0066] transition-colors">Instagram</a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 text-center text-[10px] text-white/20 font-bold tracking-widest uppercase">
        © {new Date().getFullYear()} أكاديمية يسر. صُنع بكل فخر في تونس 🇹🇳
      </div>
    </footer>
  );
};

export default Footer;