import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-right">
          <h3 className="text-white font-bold text-xl mb-1">أكاديمية يسر</h3>
          <p className="text-sm">نبنيو جيل متمكن، واثق، وناجح.</p>
        </div>
        <div className="flex gap-6 text-sm font-bold">
           <a href="#" className="hover:text-white transition-colors">Facebook</a>
           <a href="#" className="hover:text-white transition-colors">Instagram</a>
        </div>
        <div className="text-xs font-mono opacity-50">
          © {new Date().getFullYear()} Yosr Academy TN
        </div>
      </div>
    </footer>
  );
};

export default Footer;