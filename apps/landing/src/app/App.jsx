import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Footer from '../components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-blue-500/30">
      <Navbar />
      <main>
        <Hero />
        <Features />
        
        {/* Call to Action Section */}
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 p-8 md:p-16 text-center shadow-2xl">
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Pronto para elevar o nível do seu código?</h2>
                <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
                  Junte-se a centenas de desenvolvedores que escolheram a fundação correta para seus sistemas de missão crítica.
                </p>
                <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold text-lg shadow-xl transition-all hover:scale-105 active:scale-95">
                  Começar agora gratuitamente
                </button>
              </div>
              {/* Decorative Circle */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-900/20 rounded-full translate-y-32 -translate-x-32 blur-3xl" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
