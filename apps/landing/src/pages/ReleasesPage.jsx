import PageLayout from './PageLayout.jsx';

export default function ReleasesPage({ t }) {
  return (
    <PageLayout title={t.title} headline={t.headline} subheadline={t.subheadline}>
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="p-10 rounded-3xl bg-slate-900/50 border border-white/5">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-white tracking-tight">{t.v1_title}</h3>
            <span className="px-4 py-1 bg-green-500/10 text-green-400 rounded-full text-xs font-bold border border-green-500/20 uppercase tracking-widest">Stable</span>
          </div>
          <p className="text-slate-400 text-lg leading-relaxed font-medium">{t.v1_desc}</p>
        </div>
        
        {/* Mocking older version */}
        <div className="p-10 rounded-3xl bg-slate-900/20 border border-white/5 opacity-60">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-slate-300 tracking-tight">v0.9.0 - Beta Phase</h3>
            <span className="px-4 py-1 bg-slate-800 text-slate-500 rounded-full text-xs font-bold border border-white/5 uppercase tracking-widest">Legacy</span>
          </div>
          <p className="text-slate-500 text-lg leading-relaxed font-medium">Initial orchestrator scripts and structural validation prototypes.</p>
        </div>
      </div>
    </PageLayout>
  );
}
