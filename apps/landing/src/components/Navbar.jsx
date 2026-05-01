export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-blue-500 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.71.79-1.81.2-2.55l-3.2-3.2c-.74-.59-1.84-.51-2.55.2Z"/><path d="m5 15 3-3.5L12 14l3.5-3 4.5 4.5V4l-11 1 1 11Z"/><path d="M9 12l2-2 3 3"/><path d="m13 14 3-3"/></svg>
            </div>
            <span className="text-xl font-bold text-white tracking-tight">DrivenEXE</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#features" className="hover:text-blue-400 transition-colors">Características</a>
            <a href="#workflow" className="hover:text-blue-400 transition-colors">Workflow</a>
            <a href="#about" className="hover:text-blue-400 transition-colors">Sobre</a>
          </div>
          <a 
            href="https://github.com/TR-ArtDesign/drivenexe-starter" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}
