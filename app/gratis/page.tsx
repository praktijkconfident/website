import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Gratis e-books en downloads',
  description:
    'Gratis e-books en downloads van Praktijk Confident voor vrouwen die zich uitgeput, overprikkeld of zichzelf kwijt voelen, ook in de overgang.',
  alternates: { canonical: '/gratis' },
};

// Voeg hier nieuwe gratis producten toe; ze verschijnen automatisch als kaart.
const gratisItems = [
  {
    href: '/gratis/overgang-zonder-gedoe',
    soort: 'E-book',
    titel: 'Overgang zonder gedoe',
    beschrijving:
      'Voor vrouwen die zich uitgeput, overprikkeld of zichzelf kwijt voelen. Begrijp wat je lichaam doet en ontdek wat je zelf kunt doen.',
  },
];

export default function GratisPage() {
  return (
    <>
      <section className="max-w-3xl mx-auto px-6 pt-20 pb-12 text-center">
        <p className="uppercase tracking-wide text-sm font-bold text-accent mb-3 reveal">
          Gratis
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-primair mb-6 leading-tight reveal">
          Gratis voor jou
        </h1>
        <p className="text-tekst/80 text-lg leading-relaxed reveal">
          E-books en downloads om zelf mee aan de slag te gaan, in je eigen tempo.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div id="gratis-grid" className="grid gap-6 sm:grid-cols-2">
          {gratisItems.map(item => (
            <Link key={item.href} href={item.href}
              className="block bg-wit rounded-2xl p-8 border border-primair/10 hover:border-primair/40 transition-colors">
              <p className="uppercase tracking-wide text-xs font-bold text-accent mb-2">{item.soort}</p>
              <h2 className="text-xl font-bold text-primair mb-3">{item.titel}</h2>
              <p className="text-tekst/80 leading-relaxed mb-4">{item.beschrijving}</p>
              <span className="font-bold text-primair">Download gratis →</span>
            </Link>
          ))}
        </div>
      </section>

      <ScrollReveal singles={['.reveal']} grids={['#gratis-grid']} />
    </>
  );
}
