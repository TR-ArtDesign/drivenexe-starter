import { motion } from 'framer-motion';

const items = [
  {
    title: "Structured Foundation",
    description: "A battle-tested folder architecture designed for multi-platform scalability (Web + Mobile).",
    icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z"/></svg>
  },
  {
    title: "Built-in Validation",
    description: "Documentation linting and structural integrity checks integrated into your Git workflow.",
    icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
  },
  {
    title: "Guided Execution",
    description: "The SKILL.md assistant transforms manual setup into a deterministic, step-by-step process.",
    icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
  },
  {
    title: "Multi-Platform Ready",
    description: "Pre-configured isolation for Web (Playwright) and Mobile (Maestro) testing strategies.",
    icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><line x1="12" x2="12" y1="18" y2="18"/></svg>
  }
];

export default function WhatYouGet() {
  return (
    <section id="features" className="py-32 bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-white mb-6 tracking-tighter">Everything you need. <br />Nothing you don't.</h2>
          <p className="text-slate-500 max-w-xl mx-auto text-lg font-medium">
            We removed the boilerplate and focused on the orchestration. 
            A system designed to be lean, fast, and unyielding.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-slate-900/50 border border-white/5 hover:bg-slate-900 transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3 tracking-tight">{item.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
