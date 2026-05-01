import PageLayout from './PageLayout.jsx';

export default function FeaturesPage({ t }) {
  const items = [
    { title: t.f1_title, desc: t.f1_desc },
    { title: t.f2_title, desc: t.f2_desc },
    { title: t.f3_title, desc: t.f3_desc },
    { title: t.f4_title, desc: t.f4_desc }
  ];

  return (
    <PageLayout title={t.title} headline={t.headline} subheadline={t.subheadline}>
      <div className="grid md:grid-cols-2 gap-8">
        {items.map((item, i) => (
          <div key={i} className="p-10 rounded-3xl bg-slate-900/50 border border-white/5 hover:bg-slate-900 transition-all">
            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{item.title}</h3>
            <p className="text-slate-400 leading-relaxed font-medium">{item.desc}</p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
