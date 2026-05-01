import PageLayout from './PageLayout.jsx';

export default function PhilosophyPage({ t }) {
  return (
    <PageLayout title={t.title} headline={t.headline} subheadline={t.subheadline}>
      <div className="prose prose-invert max-w-4xl mx-auto space-y-8 text-slate-300 text-lg">
        <p>{t.p1}</p>
        <div className="p-10 rounded-3xl bg-blue-600/10 border border-blue-500/20 text-white italic">
           "{t.quote}"
        </div>
        <p>{t.p2}</p>
      </div>
    </PageLayout>
  );
}
