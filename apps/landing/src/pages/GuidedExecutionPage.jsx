import React from 'react';
import PageLayout from './PageLayout';

export default function GuidedExecutionPage({ t }) {
  return (
    <PageLayout 
      title={t.title} 
      headline={t.headline} 
      subheadline={t.subheadline}
    >
      <div className="prose prose-invert max-w-4xl mx-auto space-y-8 text-slate-300 text-lg">
        <p>{t.p1}</p>

        <h2 className="text-3xl font-bold text-white mt-12 mb-6">{t.h2_1}</h2>
        <p>{t.p2}</p>

        <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 my-12 text-center shadow-lg">
          <h3 className="text-2xl font-bold text-white mb-4">{t.cta_title}</h3>
          <p className="mb-6 text-slate-400">{t.cta_desc}</p>
          <a href="https://github.com/TR-ArtDesign/drivenexe-starter" target="_blank" rel="noreferrer" className="inline-block px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all shadow-indigo-500/20 shadow-xl">
            {t.cta_btn}
          </a>
        </div>

        <h2 className="text-3xl font-bold text-white mt-12 mb-6">{t.h2_2}</h2>
        <p>{t.p3}</p>
      </div>
    </PageLayout>
  );
}
