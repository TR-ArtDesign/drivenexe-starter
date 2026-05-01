import { Shield, Smartphone, Globe, Code2, Repeat, BarChart3 } from 'lucide-react';

const features = [
  {
    title: "Validação Rigorosa",
    description: "Sistema de lint nativo para garantir que sua documentação e estrutura estejam sempre consistentes.",
    icon: Shield,
    color: "text-blue-400"
  },
  {
    title: "Multiplataforma",
    description: "Suporte nativo para testes Web (Playwright) e Mobile (Maestro) em um único workflow.",
    icon: Smartphone,
    color: "text-purple-400"
  },
  {
    title: "Agnóstico de Provedor",
    description: "Funciona em qualquer ambiente Git. Do GitHub ao GitLab, você tem o controle total.",
    icon: Globe,
    color: "text-green-400"
  },
  {
    title: "Infraestrutura Bun",
    description: "Desenvolvido sobre o runtime Bun para máxima performance e velocidade de execução.",
    icon: Code2,
    color: "text-yellow-400"
  },
  {
    title: "Workflow Ciclo-Vivo",
    description: "Modelo baseado em sprints (Definir → Implementar → Validar → Iterar) integrado à SKILL.",
    icon: Repeat,
    color: "text-pink-400"
  },
  {
    title: "Auditoria Assistida",
    description: "Ferramentas integradas para auditar a saúde do seu projeto em segundos.",
    icon: BarChart3,
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
              <div className={`p-3 rounded-xl bg-slate-900 w-fit mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
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
