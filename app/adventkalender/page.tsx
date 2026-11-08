import type { Metadata } from 'next';
import AdventkalenderAanmelden from '@/components/AdventkalenderAanmelden';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Adventkalender: 24 Momenten van Rust',
  description:
    'Open van 1 tot en met 24 december elke dag een klein cadeautje van Praktijk Confident. Een ademoefening, een mooie vraag, een gratis les of een fijne verrassing.',
  alternates: { canonical: '/adventkalender' },
};

const stappen = [
  {
    titel: 'Elke dag een deurtje',
    tekst: 'Elk deurtje gaat open op zijn eigen dag. Kom dus elke dag even terug.',
  },
  {
    titel: 'Neem even de tijd',
    tekst: 'De meeste cadeautjes duren maar een paar minuten. Een klein moment voor jezelf.',
  },
  {
    titel: 'Mis je een dag?',
    tekst: 'Geen probleem. Deurtjes van eerdere dagen kun je later nog openen.',
  },
];

export default function AdventkalenderPage() {
  return (
    <>
      <section className="bg-primair text-wit text-center px-6 pt-20 pb-16">
        <p className="uppercase tracking-wide text-sm font-bold text-accent mb-3 reveal">
          Adventkalender 2026
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-wit mb-6 leading-tight reveal">
          24 Momenten van Rust
        </h1>
        <div className="max-w-2xl mx-auto text-wit/85 text-lg leading-relaxed space-y-3 reveal">
          <p>December is vaak een volle maand. Daarom heb ik iets voor je gemaakt.</p>
          <p>
            Van 1 tot en met 24 december open je elke dag een deurtje met een klein cadeautje. Een
            ademoefening, een mooie vraag, een gratis les of een fijne verrassing.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pt-14">
        <div id="advent-stappen" className="grid gap-6 sm:grid-cols-3">
          {stappen.map((s, i) => (
            <div key={s.titel} className="bg-wit rounded-2xl p-7 border border-primair/10 text-center">
              <p className="text-3xl font-bold text-primair/40 mb-1">{i + 1}</p>
              <h2 className="text-lg font-bold text-primair mb-2">{s.titel}</h2>
              <p className="text-tekst/75 text-sm leading-relaxed">{s.tekst}</p>
            </div>
          ))}
        </div>
      </section>

      <AdventkalenderAanmelden />

      <section className="max-w-2xl mx-auto px-6 pt-14 pb-20 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-primair mb-3 reveal">
          Wil je meer rust, ook na december?
        </h2>
        <p className="text-tekst/80 mb-6 reveal">
          Benieuwd wat ik voor jou kan betekenen? Bekijk mijn trajecten en kies wat bij jou past.
        </p>
        <a
          href="/#trajecten"
          className="inline-block bg-primair text-wit font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity reveal"
        >
          Bekijk de trajecten →
        </a>
      </section>

      <ScrollReveal singles={['.reveal']} grids={['#advent-stappen']} />
    </>
  );
}
