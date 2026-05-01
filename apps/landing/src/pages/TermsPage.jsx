import PageLayout from './PageLayout.jsx';

export default function TermsPage({ t }) {
  return (
    <PageLayout title={t.title} headline={t.headline} subheadline={t.content}>
      <div className="text-slate-400 space-y-6 text-lg font-medium max-w-3xl">
        <h4 className="text-white font-bold text-xl mt-12 mb-4">{t.responsibility_title}</h4>
        <p>{t.responsibility_p}</p>
        <h4 className="text-white font-bold text-xl mt-12 mb-4">{t.contribution_title}</h4>
        <p>{t.contribution_p}</p>
      </div>
    </PageLayout>
  );
}
