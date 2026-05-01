import { motion } from 'framer-motion';

const steps = [
  {
    num: "01",
    title: "Clone & Initialize",
    desc: "Start with a deterministic foundation instead of a blank slate."
  },
  {
    num: "02",
    title: "Configure & Validate",
    desc: "Enforce system integrity with built-in linting and structure checks."
  },
  {
    num: "03",
    title: "Execute via SKILL",
    desc: "Follow the guided system to maintain consistency throughout the lifecycle."
  }
];

export default function HowItWorks() {
  return (
    <section id="workflow" className="py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12 relative">
          {/* Connector Line */}
          <div className="absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 hidden lg:block" />
          
          {steps.map((step, index) => (
            <div key={index} className="relative z-10 group">
              <div className="w-16 h-16 rounded-full bg-slate-900 border border-white/5 flex items-center justify-center text-blue-500 font-bold text-xl mb-8 group-hover:border-blue-500/50 transition-all">
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{step.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
