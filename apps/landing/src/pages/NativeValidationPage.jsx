import React from 'react';
import PageLayout from './PageLayout';

export default function NativeValidationPage() {
  return (
    <PageLayout 
      title="Validação Nativa | DrivenEXE" 
      headline="Validação Nativa" 
      subheadline="Integridade absoluta. Se está errado, o sistema bloqueia antes de quebrar a produção."
    >
      <div className="prose prose-invert max-w-4xl mx-auto space-y-8 text-slate-300 text-lg">
        <p>
          O que acontece quando diferentes desenvolvedores entram no mesmo projeto? Padrões se perdem, documentações ficam desatualizadas e o código espaguete surge silenciosamente. O DrivenEXE soluciona isso implementando a "Validação Nativa" diretamente nas artérias do repositório.
        </p>

        <h2 className="text-3xl font-bold text-white mt-12 mb-6">Lint não é apenas sobre Código, é sobre Arquitetura</h2>
        <p>
          Nosso processo de <strong>Lint de Documentação e Estrutura</strong> verifica se as regras de ouro estão sendo cumpridas. Nós vamos além de checar espaços e vírgulas. Avaliamos se o roteiro do projeto (sprints, roadmaps) reflete o que de fato está construído, se faltam arquivos cruciais e se a estrutura da branch atual fere a integridade do sistema operacional do projeto.
        </p>

        <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 my-12 text-center shadow-lg">
          <h3 className="text-2xl font-bold text-white mb-4">Seja à prova de erros</h3>
          <p className="mb-6 text-slate-400">
            Experimente a tranquilidade de um Husky Hook configurado perfeitamente. Zero código mal formado ou estrutura ausente vai parar na sua branch principal.
          </p>
          <a href="https://github.com/TR-ArtDesign/drivenexe-starter" target="_blank" rel="noreferrer" className="inline-block px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all shadow-indigo-500/20 shadow-xl">
            Inicie com o Template Agora
          </a>
        </div>

        <h2 className="text-3xl font-bold text-white mt-12 mb-6">Automação Silenciosa e Poderosa</h2>
        <p>
          Isso cria uma rede de proteção invisível. Desenvolvedores focam em resolver problemas complexos e criar lógica de negócios brilhante, enquanto o DrivenEXE atua como um fiscal rigoroso e implacável das convenções do projeto. É menos tempo resolvendo conflitos bobos no Git e mais tempo entregando valor.
        </p>
      </div>
    </PageLayout>
  );
}
