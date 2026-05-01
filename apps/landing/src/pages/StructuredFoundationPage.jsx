import React from 'react';
import PageLayout from './PageLayout';

export default function StructuredFoundationPage() {
  return (
    <PageLayout 
      title="Fundação Estruturada | DrivenEXE" 
      headline="Fundação Estruturada" 
      subheadline="Escalabilidade começa na arquitetura. Uma base inabalável para quem não tem tempo a perder."
    >
      <div className="prose prose-invert max-w-4xl mx-auto space-y-8 text-slate-300 text-lg">
        <p>
          A maioria dos projetos começa com entusiasmo, apenas para ser sufocada semanas depois por uma estrutura de pastas caótica e dívida técnica acumulada. A "Fundação Estruturada" do DrivenEXE resolve isso na raiz.
        </p>

        <h2 className="text-3xl font-bold text-white mt-12 mb-6">A Era do Test-Driven e da Previsibilidade</h2>
        <p>
          Nosso starter kit já vem nativamente moldado para abraçar testes robustos de ponta a ponta. Não estamos falando de um setup que você precisa fazer; estamos falando de um sistema orquestrado que exige excelência desde o dia zero. Com a integração do <strong>Playwright</strong>, simulamos fluxos complexos em tempo recorde no ambiente Web. O desenvolvedor já tem os alicerces prontos: pastas mapeadas, artefatos definidos e execução garantida.
        </p>

        <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 my-12 text-center shadow-lg">
          <h3 className="text-2xl font-bold text-white mb-4">Sinta o Poder sob Controle</h3>
          <p className="mb-6 text-slate-400">
            Chega de gastar dias configurando pipelines e test-runners. O DrivenEXE entrega tudo isso com um único comando.
          </p>
          <a href="https://github.com/TR-ArtDesign/drivenexe-starter" target="_blank" rel="noreferrer" className="inline-block px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all shadow-indigo-500/20 shadow-xl">
            Acessar Repositório Oficial
          </a>
        </div>

        <h2 className="text-3xl font-bold text-white mt-12 mb-6">Testes Específicos e Diretos</h2>
        <p>
          E não para por aí. Com cenários isolados, como o <strong>Maestro</strong> para fluxos mobile e o Playwright para a Web, você tem a garantia de que as suas implementações não quebrarão silenciosamente. É uma fundação opinativa e estruturada que não permite o acoplamento excessivo. Tudo no seu devido lugar.
        </p>
        <p>
          Pare de improvisar e adote um sistema operacional focado no sucesso de engenharia. O seu futuro "eu" vai agradecer.
        </p>
      </div>
    </PageLayout>
  );
}
