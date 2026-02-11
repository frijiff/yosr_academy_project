import React from 'react';

interface NavbarProps {
  onCtaClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onCtaClick }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="bg-brand-700 text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xl shadow-lg shadow-brand-700/30">
              Y
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black text-slate-800 leading-none">أكاديمية يسر</span>
              <span className="text-xs font-bold text-brand-600 tracking-widest uppercase mt-1">Yosr Academy</span>
            </div>
          </div>

          {/* Action Button */}
          <button 
            onClick={onCtaClick}
            className="hidden md:block bg-brand-700 hover:bg-brand-800 text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-lg shadow-brand-700/20 transform hover:-translate-y-0.5"
          >
            سجل صغيرك توة
          </button>
          
          {/* Mobile Text CTA */}
          <button onClick={onCtaClick} className="md:hidden text-brand-700 font-bold text-sm">
            سجل الآن
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;