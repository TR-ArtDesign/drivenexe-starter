export default function WhatYouGet({ t }) {
  const items = [
    {
      title: t.f1_title,
      description: t.f1_desc,
      icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z"/></svg>
    },
    {
      title: t.f2_title,
      description: t.f2_desc,
      icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    },
    {
      title: t.f3_title,
      description: t.f3_desc,
      icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
    },
    {
      title: t.f4_title,
      description: t.f4_desc,
      icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><line x1="12" x2="12" y1="18" y2="18"/></svg>
    }
  ];

  return (
    <section id="features" className="py-32 bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 animate-fade-up">
          <h2 className="text-4xl font-bold text-white mb-6 tracking-tighter" dangerouslySetInnerHTML={{ __html: t.headline }} />
          <p className="text-slate-500 max-w-xl mx-auto text-lg font-medium">
            {t.subheadline}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div 
              key={index}
              className="p-8 rounded-3xl bg-slate-900/50 border border-white/5 hover:bg-slate-900 hover:-translate-y-2 transition-all duration-300 group animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3 tracking-tight">{item.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
