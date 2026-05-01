import { useEffect } from 'react';

const PageLayout = ({ title, headline, subheadline, children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20 animate-fade-left">
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-8">{headline}</h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">{subheadline}</p>
        </header>
        <main className="animate-fade-up">
          {children}
        </main>
      </div>
    </div>
  );
};

export default PageLayout;
