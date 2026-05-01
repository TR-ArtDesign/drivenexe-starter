import React from 'react';
import PageLayout from './PageLayout';

export default function GuidedExecutionPage() {
  return (
    <PageLayout 
      title="Execução Guiada | DrivenEXE" 
      headline="Execução Guiada" 
      subheadline="Inteligência embarcada no seu repositório. O fim da confusão mental sobre qual o próximo passo."
    >
      <div className="prose prose-invert max-w-4xl mx-auto space-y-8 text-slate-300 text-lg">
        <p>
          O planejamento de um projeto pode ser intimidante. Desenvolvedores frequentemente se perdem em Trello, Jira, ou dezenas de abas soltas, desconectando o código da gestão. A funcionalidade "Execução Guiada" do DrivenEXE traz o planejamento arquitetural direto para dentro do seu editor.
        </p>

        <h2 className="text-3xl font-bold text-white mt-12 mb-6">SKILL.md: O seu Gerente de Projeto Nativo</h2>
        <p>
          Em vez de tutoriais extensos e esquecíveis, o DrivenEXE introduz o conceito do <strong>SKILL.md</strong>. Trata-se de um sistema determinístico e iterativo que orienta as decisões de arquitetura e desenvolvimento passo a passo. Seja você e seu time, ou uma IA orquestrando o código, o sistema sabe exatamente o que precisa ser feito, quando fazer e como validar a etapa antes de seguir adiante.
        </p>

        <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 my-12 text-center shadow-lg">
          <h3 className="text-2xl font-bold text-white mb-4">Codifique com Inteligência de Elite</h3>
          <p className="mb-6 text-slate-400">
            Pule o overhead de gerenciamento. Assuma o controle total e deixe o fluxo orquestrado guiar seus commits e evoluções de arquitetura.
          </p>
          <a href="https://github.com/TR-ArtDesign/drivenexe-starter" target="_blank" rel="noreferrer" className="inline-block px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all shadow-indigo-500/20 shadow-xl">
            Descubra o SKILL.md
          </a>
        </div>

        <h2 className="text-3xl font-bold text-white mt-12 mb-6">Plano e Execução na Mesma Interface</h2>
        <p>
          Ao organizar seus planos de construção com roadmaps claros na pasta <code>docs/</code> e integrá-los de forma orgânica ao desenvolvimento, você atinge um nível de rastreabilidade incrível. Quando um novo membro entra, ou quando a equipe precisa retomar uma branch depois de meses, não há dúvidas: o DrivenEXE guia a execução perfeitamente.
        </p>
      </div>
    </PageLayout>
  );
}
