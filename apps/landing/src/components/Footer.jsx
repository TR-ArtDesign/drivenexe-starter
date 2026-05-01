import { Link } from 'react-router-dom';

export default function Footer({ t }) {
  return (
    <footer className="py-20 border-t border-white/5 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        <div className="col-span-2">
          <Link to="/" className="flex items-center gap-3 mb-6 hover:opacity-80 transition-opacity inline-flex">
            <div className="w-6 h-6 flex items-center justify-center overflow-hidden rounded">
               <img src="/iconApp.png" alt="DrivenEXE Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-lg font-bold tracking-tighter text-white">DrivenEXE</span>
          </Link>
          <p className="text-slate-500 max-w-sm font-medium" dangerouslySetInnerHTML={{ __html: t.slogan }} />
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6">{t.product}</h4>
          <ul className="space-y-4 text-sm text-slate-500 font-medium">
            <li><Link to="/features" className="hover:text-white transition-colors">{t.links.features}</Link></li>
            <li><Link to="/workflow" className="hover:text-white transition-colors">{t.links.workflow}</Link></li>
            <li><Link to="/philosophy" className="hover:text-white transition-colors">{t.links.philosophy}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">{t.open_source}</h4>
          <ul className="space-y-4 text-sm text-slate-500 font-medium">
            <li><a href="https://github.com/TR-ArtDesign/drivenexe-starter" className="hover:text-white transition-colors">GitHub</a></li>
            <li><a href="https://github.com/TR-ArtDesign/drivenexe-starter#readme" className="hover:text-white transition-colors">{t.links.documentation}</a></li>
            <li><Link to="/releases" className="hover:text-white transition-colors">{t.links.releases}</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xs text-slate-600 font-medium uppercase tracking-widest">
          {t.rights}
        </div>
        <div className="flex gap-8 text-xs text-slate-600 font-medium uppercase tracking-widest">
          <Link to="/privacy" className="hover:text-white transition-colors">{t.privacy}</Link>
          <Link to="/terms" className="hover:text-white transition-colors">{t.terms}</Link>
        </div>
      </div>
    </footer>
  );
}
