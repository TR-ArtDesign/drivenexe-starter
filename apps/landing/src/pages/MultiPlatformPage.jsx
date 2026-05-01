import React from 'react';
import PageLayout from './PageLayout';

export default function MultiPlatformPage() {
  return (
    <PageLayout 
      title="Pronto para Multiplataforma | DrivenEXE" 
      headline="Multiplataforma Nativo" 
      subheadline="Web e Mobile. Um repositório orquestrado para dominar ecossistemas inteiros sem misturar responsabilidades."
    >
      <div className="prose prose-invert max-w-4xl mx-auto space-y-8 text-slate-300 text-lg">
        <p>
          O dilema de todo engenheiro de software: como gerenciar aplicações web e mobile sem que o repositório se torne um labirinto impossível de navegar? Se você mistura tudo, o pipeline de CI chora. Se você separa muito, a configuração e o conhecimento são perdidos. O DrivenEXE introduz o conceito "Pronto para Multiplataforma".
        </p>

        <h2 className="text-3xl font-bold text-white mt-12 mb-6">Isolamento Inteligente, Configuração Unificada</h2>
        <p>
          Tratamos a Web e o Mobile como cidadãos de primeira classe. O ambiente de testes e validações está isolado para rodar o <strong>Playwright</strong> para suas páginas e painéis Web, e o <strong>Maestro</strong> para dominar seus fluxos Mobile. Isso não apenas evita conflitos de dependências, mas garante que os testes de ponta a ponta reflitam os reais ambientes dos usuários.
        </p>

        <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 my-12 text-center shadow-lg">
          <h3 className="text-2xl font-bold text-white mb-4">Construa para Todos os Dispositivos</h3>
          <p className="mb-6 text-slate-400">
            Escalar do Desktop para o iOS e Android não precisa ser traumático. Tenha uma estrutura pré-arquitetada para lidar com a expansão natural do seu produto.
          </p>
          <a href="https://github.com/TR-ArtDesign/drivenexe-starter" target="_blank" rel="noreferrer" className="inline-block px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all shadow-indigo-500/20 shadow-xl">
            Domine o Multiplataforma
          </a>
        </div>

        <h2 className="text-3xl font-bold text-white mt-12 mb-6">Escalabilidade a Longo Prazo</h2>
        <p>
          À medida que seu produto cresce, a arquitetura do DrivenEXE garante que suas bases de código possam se multiplicar (web app, landing pages, admin dashboard, apps nativos) sem ferir a integridade da fundação. Comece focado em uma plataforma, mas saiba que as portas para as outras estão abertas e pavimentadas.
        </p>
      </div>
    </PageLayout>
  );
}
