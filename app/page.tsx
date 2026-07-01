// ════════════════════════════════════════════════════════════
//  Homepagina — vervang de placeholder-tekst door jouw eigen
//  content. Beschrijf aan Claude Code wat hier moet komen.
// ════════════════════════════════════════════════════════════

import ScrollReveal from '@/components/ScrollReveal';

export default function HomePage() {
  return (
    <>
      {/* Hero — portret.jpg uit /public/ als achtergrond.
          Ontbreekt de foto? Dan valt de achtergrond terug op --color-primair. */}
      <div className="hero-section" style={{ backgroundImage: "url('/fotos/portret.jpg')" }}>
        <div className="hero-overlay">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-2xl leading-tight">
            [Jouw krachtige headline]
          </h1>
          <p className="text-white/80 max-w-xl text-lg leading-relaxed mb-2">
            [Ondertitel: voor wie ben je er en wat bied je aan?]
          </p>
          <a href="/aanbod" className="hero-btn">
            Bekijk mijn aanbod →
          </a>
        </div>
      </div>

      {/* Introductie */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold text-primair mb-4 reveal">[Introductietitel]</h2>
        <p className="text-tekst/80 leading-relaxed reveal">
          [Vertel hier kort wat je doet, voor wie en waarom jij de juiste persoon bent.
          Houd het warm en persoonlijk.]
        </p>
      </section>

      <ScrollReveal singles={['.reveal']} />
    </>
  );
}
