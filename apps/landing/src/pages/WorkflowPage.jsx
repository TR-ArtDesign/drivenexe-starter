import PageLayout from './PageLayout.jsx';

export default function WorkflowPage({ t }) {
  const steps = [
    { title: t.s1_title, desc: t.s1_desc, num: "01" },
    { title: t.s2_title, desc: t.s2_desc, num: "02" },
    { title: t.s3_title, desc: t.s3_desc, num: "03" }
  ];

  return (
    <PageLayout title={t.title} headline={t.headline} subheadline={t.subheadline}>
      <div className="max-w-4xl mx-auto space-y-12">
        {steps.map((step, i) => (
          <div key={i} className="flex gap-8 p-10 rounded-3xl bg-slate-900/30 border border-white/5 items-start">
            <div className="text-4xl font-bold text-blue-600/50">{step.num}</div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{step.title}</h3>
              <p className="text-slate-400 text-lg leading-relaxed font-medium">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
