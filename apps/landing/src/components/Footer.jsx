export default function Footer() {
  return (
    <footer className="py-20 border-t border-white/5 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        <div className="col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
               <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m5 15 3-3.5L12 14l3.5-3 4.5 4.5V4l-11 1 1 11Z"/></svg>
            </div>
            <span className="text-lg font-bold tracking-tighter text-white">DrivenEXE</span>
          </div>
          <p className="text-slate-500 max-w-sm font-medium">
            Building the next generation of software foundations. <br />
            Orchestrated for elite engineering teams.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6">Product</h4>
          <ul className="space-y-4 text-sm text-slate-500 font-medium">
            <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
            <li><a href="#workflow" className="hover:text-white transition-colors">Workflow</a></li>
            <li><a href="#why" className="hover:text-white transition-colors">Philosophy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Open Source</h4>
          <ul className="space-y-4 text-sm text-slate-500 font-medium">
            <li><a href="https://github.com/TR-ArtDesign/drivenexe-starter" className="hover:text-white transition-colors">GitHub</a></li>
            <li><a href="https://github.com/TR-ArtDesign/drivenexe-starter#readme" className="hover:text-white transition-colors">Documentation</a></li>
            <li><a href="https://github.com/TR-ArtDesign/drivenexe-starter/releases" className="hover:text-white transition-colors">Releases</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xs text-slate-600 font-medium uppercase tracking-widest">
          © 2026 DrivenEXE by TR-ArtDesign. All rights reserved.
        </div>
        <div className="flex gap-8 text-xs text-slate-600 font-medium uppercase tracking-widest">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}
