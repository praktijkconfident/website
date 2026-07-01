import type { Metadata } from 'next';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = { title: 'Over mij' };

export default function OverMijPage() {
  return (
    <>
      <section className="max-w-5xl mx-auto px-6 py-20">

        {/* Foto naast tekst — vervang portret.jpg door jouw eigen foto in public/fotos/
            Vraag Claude Code: "Voeg mijn foto [bestandsnaam.jpg] toe op de over-mij pagina" */}
        <div className="two-col">
          <div className="col-text">
            <h1 className="text-3xl font-bold text-primair mb-6 reveal">Over mij</h1>
            <p className="text-tekst/80 leading-relaxed mb-4 reveal">
              [Vertel hier jouw verhaal. Wie ben je, wat drijft je, hoe ben je hier gekomen?
              Schrijf vanuit je hart.]
            </p>
            <p className="text-tekst/80 leading-relaxed reveal">
              [Meer over jouw werkwijze, achtergrond of wat jou uniek maakt.]
            </p>
          </div>
          <div className="col-image">
            <img src="/fotos/portret.jpg" alt="[Jouw naam]" />
          </div>
        </div>

      </section>
      <ScrollReveal singles={['.reveal']} />
    </>
  );
}
