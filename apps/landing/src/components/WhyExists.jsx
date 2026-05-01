export default function WhyExists({ t }) {
  return (
    <section id="why" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        <div className="animate-fade-left">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tighter">
            {t.headline} <br />
            <span className="text-red-500/80">{t.headline_accent}</span>
          </h2>
          <div className="space-y-6 text-slate-400 text-lg font-medium">
            <p>{t.p1}</p>
            <p>{t.p2}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 animate-fade-up">
          <div className="p-8 rounded-3xl bg-slate-900 border border-white/5 space-y-4 hover:scale-105 transition-transform duration-300">
            <div className="text-red-400 font-bold text-xl">0%</div>
            <p className="text-sm text-slate-500 font-medium uppercase tracking-widest">{t.card_random}</p>
          </div>
          <div className="p-8 rounded-3xl bg-slate-900 border border-white/5 space-y-4 hover:scale-105 transition-transform duration-300">
            <div className="text-green-400 font-bold text-xl">100%</div>
            <p className="text-sm text-slate-500 font-medium uppercase tracking-widest">{t.card_deterministic}</p>
          </div>
          <div className="p-8 rounded-3xl bg-blue-600/10 border border-blue-500/20 col-span-2 space-y-4 hover:scale-[1.02] transition-transform duration-300">
            <div className="text-blue-400 font-bold text-xl">{t.card_guided}</div>
            <p className="text-sm text-slate-500 font-medium uppercase tracking-widest">{t.card_guided_sub}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
