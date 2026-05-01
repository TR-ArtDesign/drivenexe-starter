export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Content */}
        <div className="relative z-10 animate-fade-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-6">
            <span>DRIVENEXE 1.0</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-[0.9] mb-8">
            Stop starting <br />
            <span className="text-slate-500">from scratch.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-lg mb-10 leading-relaxed font-medium">
            DrivenEXE is the orchestrator for high-performance engineers. 
            A structured, orchestrated foundation that enforces validation and 
            scale from day one.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <a 
              href="https://github.com/TR-ArtDesign/drivenexe-starter" 
              className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg shadow-[0_0_25px_rgba(37,99,235,0.4)] hover:bg-blue-500 transition-all text-center"
            >
              Start with structure
            </a>
            <a 
              href="https://github.com/TR-ArtDesign/drivenexe-starter" 
              className="px-8 py-4 bg-transparent text-white border border-white/10 rounded-xl font-bold text-lg hover:bg-white/5 transition-all text-center"
            >
              View repository
            </a>
          </div>
        </div>

        {/* Right Side: Visual Element */}
        <div className="relative hidden lg:block animate-fade-up" style={{ perspective: '1000px' }}>
          <div className="relative rounded-2xl border border-white/10 bg-slate-900/50 p-2 shadow-2xl backdrop-blur-3xl transform rotate-y-[-10deg] transition-transform duration-700 hover:rotate-y-0">
            <div className="bg-slate-950 rounded-xl p-8 font-mono text-sm border border-white/5 overflow-hidden">
              <div className="flex gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500/30" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/30" />
                <div className="w-3 h-3 rounded-full bg-green-500/30" />
              </div>
              <div className="space-y-4 text-slate-300">
                <div className="flex gap-4"><span className="text-slate-600">01</span><span className="text-blue-400">bun run validate</span></div>
                <div className="flex gap-4"><span className="text-slate-600">02</span><span className="text-slate-400">--- Documentation Lint ---</span></div>
                <div className="flex gap-4"><span className="text-slate-600">03</span><span className="text-green-400 font-bold">[OK] Integrity verified</span></div>
                <div className="flex gap-4"><span className="text-slate-600">04</span><span className="text-slate-400">--- System Structure ---</span></div>
                <div className="flex gap-4"><span className="text-slate-600">05</span><span className="text-indigo-400">[OK] Strategy: Web + Mobile</span></div>
                <div className="flex gap-4"><span className="text-slate-600">06</span><span className="text-white">🚀 Initializing sprint_01...</span></div>
              </div>
            </div>
            
            {/* Floating UI Element */}
            <div className="absolute -top-6 -right-6 p-4 bg-blue-600 rounded-2xl shadow-2xl border border-white/20 animate-float">
               <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
