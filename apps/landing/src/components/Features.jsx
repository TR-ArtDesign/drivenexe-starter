const features = [
  {
    title: "Validação Rigorosa",
    description: "Sistema de lint nativo para garantir que sua documentação e estrutura estejam sempre consistentes.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    color: "text-blue-400"
  },
  {
    title: "Multiplataforma",
    description: "Suporte nativo para testes Web (Playwright) e Mobile (Maestro) em um único workflow.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><line x1="12" x2="12" y1="18" y2="18"/></svg>,
    color: "text-purple-400"
  },
  {
    title: "Agnóstico de Provedor",
    description: "Funciona em qualquer ambiente Git. Do GitHub ao GitLab, você tem o controle total.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
    color: "text-green-400"
  },
  {
    title: "Infraestrutura Bun",
    description: "Desenvolvido sobre o runtime Bun para máxima performance e velocidade de execução.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
    color: "text-yellow-400"
  },
  {
    title: "Workflow Ciclo-Vivo",
    description: "Modelo baseado em sprints (Definir → Implementar → Validar → Iterar) integrado à SKILL.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/></svg>,
    color: "text-pink-400"
  },
  {
    title: "Auditoria Assistida",
    description: "Ferramentas integradas para auditar a saúde do seu projeto em segundos.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/></svg>,
    color: "text-orange-400"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Arquitetura de Elite</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Não apenas uma pasta de projeto, mas um ecossistema completo para manter a qualidade em escala.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-2xl bg-slate-800/40 border border-slate-700 hover:border-blue-500/50 transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] hover:-translate-y-1"
            >
              <div className={`p-3 rounded-xl bg-slate-900 w-fit mb-6 group-hover:scale-110 transition-transform ${feature.color}`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
