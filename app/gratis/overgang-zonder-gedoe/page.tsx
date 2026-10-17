import type { Metadata } from 'next';
import ScrollReveal from '@/components/ScrollReveal';
import EbookForm from '@/components/EbookForm';

export const metadata: Metadata = {
  title: 'Overgang zonder gedoe: gratis e-book',
  description:
    'Gratis e-book voor vrouwen die zich in de overgang uitgeput, overprikkeld of zichzelf kwijt voelen. Begrijp wat je lichaam doet en ontdek wat je zelf kunt doen.',
  alternates: { canonical: '/gratis/overgang-zonder-gedoe' },
};

const inhoud = [
  'Wat er echt gebeurt in je lichaam en brein',
  'De klachten uitgelegd: wat speelt er en waar kun je mee beginnen',
  'Waarom je overprikkeld en uitgeput raakt, en wat je zenuwstelsel nodig heeft',
  'Essentiële oliën: mijn eigen ervaring',
  'Slaap, bewegen en voeding in de overgang',
  'Medische opties op een rij en zo bereid je een gesprek met je huisarts voor',
  'Een 4-wekenplan en een klachtendagboek om meteen mee te starten',
];

export default function OvergangZonderGedoePage() {
  return (
    <>
      {/* Kop */}
      <section className="max-w-3xl mx-auto px-6 pt-20 pb-12 text-center">
        <p className="uppercase tracking-wide text-sm font-bold text-accent mb-3 reveal">
          Gratis e-book
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-primair mb-6 leading-tight reveal">
          Overgang zonder gedoe
        </h1>
        <p className="text-tekst/80 text-lg leading-relaxed reveal">
          Het gratis e-book voor vrouwen die zich uitgeput, overprikkeld of zichzelf kwijt voelen.
          Begrijp wat je lichaam doet en ontdek wat je zelf kunt doen.
        </p>
      </section>

      {/* Inleiding + inhoud */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <p className="text-tekst/80 leading-relaxed mb-10 reveal">
          De overgang is geen ziekte, maar het voelt vaak wel alsof je lichaam ineens niet meer
          luistert. Je slaapt slechter, raakt sneller overprikkeld en herkent jezelf niet meer. Dit
          e-book legt rustig uit wat er gebeurt, wat je zelf kunt doen en waar je gerichte hulp kunt
          vinden.
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-primair mb-6 reveal">Dit lees je erin</h2>
        <ul id="ebook-inhoud" className="list-disc pl-5 space-y-2 text-tekst/80 leading-relaxed">
          {inhoud.map(item => <li key={item}>{item}</li>)}
        </ul>
      </section>

      {/* Formulier */}
      <section id="aanmelden" className="bg-primair">
        <div className="max-w-2xl mx-auto px-6 py-20 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-wit mb-8 reveal">
            Ontvang het e-book gratis in je mailbox
          </h2>
          <div className="reveal">
            <EbookForm />
          </div>
        </div>
      </section>

      {/* Over mij */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="two-col flip">
          <div className="col-text">
            <h2 className="text-2xl md:text-3xl font-bold text-primair mb-4 reveal">Over mij</h2>
            <p className="text-tekst/80 leading-relaxed reveal">
              Ik ben Sandra Pelkmans, energetisch therapeut en NEI-therapeut in Oisterwijk, Tilburg
              en omgeving. Ik begeleid vrouwen die altijd doorgaan terwijl hun lichaam allang stop
              zegt, ook in de overgang.
            </p>
          </div>
          <div className="col-image portret reveal">
            <img src="/fotos/portret.jpg" alt="Sandra Pelkmans" />
          </div>
        </div>
      </section>

      <ScrollReveal singles={['.reveal']} grids={['#ebook-inhoud']} />
    </>
  );
}
