import PageLayout from './PageLayout.jsx';

export default function TermsPage({ t }) {
  return (
    <PageLayout title={t.title} headline={t.headline} subheadline={t.headline}>
      <div className="text-slate-400 space-y-6 text-lg font-medium max-w-3xl">
        <p>{t.content}</p>
        <h4 className="text-white font-bold text-xl mt-12 mb-4">Responsabilidade</h4>
        <p>O software é fornecido "como está", sem garantias de qualquer tipo. O uso da estrutura DrivenEXE é de total responsabilidade do desenvolvedor que a implementa em seus sistemas.</p>
        <h4 className="text-white font-bold text-xl mt-12 mb-4">Contribuição</h4>
        <p>Como um projeto focado em open source, encorajamos o uso e a melhoria constante do sistema pela comunidade.</p>
      </div>
    </PageLayout>
  );
}
