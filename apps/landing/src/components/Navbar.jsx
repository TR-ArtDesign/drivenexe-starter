export default function Navbar({ t, toggleLang, lang }) {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/60 backdrop-blur-xl animate-fade-up">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center overflow-hidden rounded-lg shadow-[0_0_15px_rgba(37,99,235,0.4)]">
            <img src="/iconApp.png" alt="DrivenEXE Logo" className="w-full h-full object-cover" />
          </div>
          <span className="text-lg font-bold tracking-tighter text-white">DrivenEXE</span>
        </div>
        
        <div className="hidden md:flex items-center gap-10 text-sm font-medium text-slate-400">
          <a href="#why" className="hover:text-white transition-colors">{t.philosophy}</a>
          <a href="#features" className="hover:text-white transition-colors">{t.features}</a>
          <a href="#workflow" className="hover:text-white transition-colors">{t.workflow}</a>
        </div>

        <div className="flex items-center gap-4">
          {/* Language Switcher */}
          <button 
            onClick={toggleLang}
            className="flex items-center gap-2 px-3 py-1 rounded-lg border border-white/10 hover:border-white/20 text-[10px] font-bold text-slate-400 hover:text-white transition-all uppercase tracking-widest"
          >
            <span className={lang === 'pt' ? 'text-blue-400' : ''}>PT</span>
            <span className="opacity-20">/</span>
            <span className={lang === 'en' ? 'text-blue-400' : ''}>EN</span>
          </button>

          <a 
            href="https://github.com/TR-ArtDesign/drivenexe-starter" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-black px-4 py-1.5 rounded-full text-sm font-bold hover:bg-slate-200 transition-all"
          >
            {t.clone}
          </a>
        </div>
      </div>
    </nav>
  );
}
