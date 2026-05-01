import PageLayout from './PageLayout.jsx';

export default function PrivacyPage({ t }) {
  return (
    <PageLayout title={t.title} headline={t.headline} subheadline={t.content}>
      <div className="text-slate-400 space-y-6 text-lg font-medium max-w-3xl">
        <p>No DrivenEXE, priorizamos a transparência técnica sobre a coleta de dados. Como uma ferramenta de desenvolvimento local, nosso compromisso é com a integridade do seu código, não com o rastreamento do seu comportamento.</p>
        <h4 className="text-white font-bold text-xl mt-12 mb-4">Uso de Cookies</h4>
        <p>Este site utiliza apenas cookies essenciais para o funcionamento técnico (como a preferência de idioma), sem qualquer rastreamento de terceiros.</p>
      </div>
    </PageLayout>
  );
}
