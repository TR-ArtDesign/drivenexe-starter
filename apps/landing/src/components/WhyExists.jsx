import { motion } from 'framer-motion';

export default function WhyExists() {
  return (
    <section id="why" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tighter">
            Consistency is a <br />
            <span className="text-red-500/80">technical requirement.</span>
          </h2>
          <div className="space-y-6 text-slate-400 text-lg">
            <p>
              Most projects fail before the first line of business logic is written. 
              The overhead of setup, the lack of validation, and messy folder structures 
              create a technical debt that never gets paid.
            </p>
            <p>
              DrivenEXE exists to kill the "blank folder syndrome". We don't just provide a template; 
              we provide an **operational system** for your project.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-8 rounded-3xl bg-slate-900 border border-white/5 space-y-4"
          >
            <div className="text-red-400 font-bold text-xl">0%</div>
            <p className="text-sm text-slate-500 font-medium uppercase tracking-widest">Random setup</p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-8 rounded-3xl bg-slate-900 border border-white/5 space-y-4"
          >
            <div className="text-green-400 font-bold text-xl">100%</div>
            <p className="text-sm text-slate-500 font-medium uppercase tracking-widest">Deterministic</p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-8 rounded-3xl bg-blue-600/10 border border-blue-500/20 col-span-2 space-y-4"
          >
            <div className="text-blue-400 font-bold text-xl">Guided Execution</div>
            <p className="text-sm text-slate-500 font-medium uppercase tracking-widest">Built-in Intelligence</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
