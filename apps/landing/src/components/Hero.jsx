import { ArrowRight, Terminal, ShieldCheck, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-blue-400 text-xs font-medium mb-8 animate-fade-in">
          <Zap className="w-3 h-3" />
          <span>v1.0.0 está disponível agora</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight">
          A fundação sólida para o seu <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
            Próximo Grande Projeto
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          DrivenEXE é um sistema de inicialização orquestrado que combina validação rigorosa, 
          automação de testes e escalabilidade para engenheiros de elite.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 active:scale-95">
            Começar Agora <ArrowRight className="w-5 h-5" />
          </button>
          <button className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-xl font-bold text-lg border border-slate-700 transition-all">
            <Terminal className="w-5 h-5" /> Ver Documentação
          </button>
        </div>

        {/* Mockup / Visual Element */}
        <div className="relative max-w-4xl mx-auto rounded-2xl border border-slate-700 bg-slate-800/50 p-4 shadow-2xl backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-4 px-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          <div className="bg-slate-900 rounded-lg p-6 font-mono text-left text-sm overflow-hidden border border-slate-800">
            <div className="text-blue-400">$ bun run validate</div>
            <div className="text-slate-300">--- Documentation Lint ---</div>
            <div className="text-green-400">Checking: maintenance.md ... OK</div>
            <div className="text-green-400">Checking: roadmap-current.md ... OK</div>
            <div className="text-slate-300">--- System Structure Validation ---</div>
            <div className="text-blue-400">[OK] Testing strategy detected: Web Mobile</div>
            <div className="text-green-500 mt-2">Summary: 0 errors, 0 warnings</div>
            <div className="animate-pulse inline-block w-2 h-4 bg-blue-400 ml-1 translate-y-0.5" />
          </div>
        </div>
      </div>
    </section>
  );
}
