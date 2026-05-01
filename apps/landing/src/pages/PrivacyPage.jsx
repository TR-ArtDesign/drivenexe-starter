import PageLayout from './PageLayout.jsx';

export default function PrivacyPage({ t }) {
  return (
    <PageLayout title={t.title} headline={t.headline} subheadline={t.content}>
      <div className="text-slate-400 space-y-6 text-lg font-medium max-w-3xl">
        <p>{t.p_extra}</p>
        <h4 className="text-white font-bold text-xl mt-12 mb-4">{t.cookies_title}</h4>
        <p>{t.cookies_p}</p>
      </div>
    </PageLayout>
  );
}
