import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero.jsx';
import WhyExists from '../components/WhyExists.jsx';
import WhatYouGet from '../components/WhatYouGet.jsx';
import HowItWorks from '../components/HowItWorks.jsx';
import Difference from '../components/Difference.jsx';
import Footer from '../components/Footer.jsx';

function App() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30 overflow-x-hidden">
      {/* Visual Base Layer: Grid + Noise */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-grid opacity-100" />
        <div className="absolute inset-0 bg-noise opacity-100" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <WhyExists />
          <WhatYouGet />
          <HowItWorks />
          <Difference />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
