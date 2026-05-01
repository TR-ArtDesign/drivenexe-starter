export default function Difference() {
  return (
    <section className="py-32 bg-blue-600">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-12">
          It's not a template. <br />
          <span className="text-blue-200">It's an operational system.</span>
        </h2>
        <div className="max-w-2xl mx-auto text-blue-100 text-lg md:text-xl font-medium leading-relaxed">
          DrivenEXE doesn't just sit in your folder. It lives with your project, 
          guiding your sprints, validating your documentation, and ensuring that 
          the foundation you built today remains unshakeable six months from now.
        </div>
        <div className="mt-16">
          <a 
            href="https://github.com/TR-ArtDesign/drivenexe-starter"
            target="_blank"
            className="inline-block bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:scale-105 transition-transform"
          >
            Deploy with DrivenEXE
          </a>
        </div>
      </div>
    </section>
  );
}
