import React from 'react';

interface NavbarProps {
  onCtaClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onCtaClick }) => {
  return (
    <nav className="sticky top-0 z-50 bg-[#6A0066] py-4 px-6 border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#FF0066] flex items-center justify-center rounded-xl font-black text-xl text-white italic shadow-md">
            Y
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black leading-tight text-white tracking-tight">أكاديمية يسر</span>
            <span className="text-[10px] text-white/60 font-bold uppercase tracking-widest">Yosr Academy</span>
          </div>
        </div>
        
        <button 
          onClick={onCtaClick}
          className="bg-[#FF0066] text-white px-6 py-2 rounded-full font-bold text-sm md:text-base transition-all hover:brightness-110 shadow-md active:scale-95"
        >
          إبدأ توة
        </button>
      </div>
    </nav>
  );
};

export default Navbar;