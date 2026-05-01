function App() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center text-white p-4">
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-5xl font-bold tracking-tight text-blue-400">
          DrivenEXE Landing
        </h1>
        <p className="text-xl text-slate-400">
          Módulo de landing page isolado e orquestrado dentro do sistema DrivenEXE.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg font-medium transition-colors">
            Get Started
          </button>
          <button className="border border-slate-700 hover:bg-slate-800 px-6 py-2 rounded-lg font-medium transition-colors">
            Documentation
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
