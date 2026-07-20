import type { Metadata } from 'next';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Neem contact op met Praktijk Confident in Oisterwijk voor NEI-therapie, ademcoaching of een traject. Bel, mail of maak direct een afspraak.',
};

const contactgegevens = [
  { label: 'Adres', waarde: 'Dille 23, 5063 EE Oisterwijk' },
  { label: 'Telefoon', waarde: '06 – 55 91 23 11', href: 'tel:0655912311' },
  { label: 'E-mail', waarde: 'info@praktijkconfident.nl', href: 'mailto:info@praktijkconfident.nl' },
  { label: 'KvK & BTW', waarde: 'KvK: 93810709 · BTW: NL005047408B53 · CAT therapeuten BO: 125032024-05-07' },
];

const openingstijden = [
  { dag: 'Maandag', tijd: '09:00 – 12:30' },
  { dag: 'Woensdag', tijd: '09:00 – 12:30' },
  { dag: 'Vrijdag', tijd: '09:00 – 12:30' },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primair">
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <p className="uppercase tracking-wide text-sm font-bold text-titelkleur mb-3 reveal">
            Contact
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-wit mb-4 reveal">
            Neem contact op
          </h1>
          <p className="text-wit/80 max-w-xl mx-auto leading-relaxed mb-6 reveal">
            Heb je vragen of wil je een afspraak maken? Ik hoor graag van je.
          </p>
          <div className="flex items-center justify-center gap-3 reveal">
            <img src="/fotos/portret.jpg" alt="Sandra Pelkmans"
              className="w-10 h-10 rounded-full object-cover object-top border-2 border-titelkleur" />
            <span className="text-wit/80">Sandra Pelkmans, energetisch therapeut</span>
          </div>
        </div>
      </section>

      {/* Contactgegevens */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <p className="uppercase tracking-wide text-sm font-bold text-accent mb-2 reveal">
          Contactgegevens
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-primair mb-8 reveal">
          Bereik mij direct
        </h2>
        <div id="contactgegevens-grid" className="grid gap-6 sm:grid-cols-2">
          {contactgegevens.map(item => (
            <div key={item.label} className="bg-wit rounded-2xl p-6 shadow-sm border border-primair/10">
              <p className="uppercase tracking-wide text-xs font-bold text-accent mb-1">{item.label}</p>
              {item.href ? (
                <a href={item.href} className="text-tekst/80 hover:text-primair transition-colors">
                  {item.waarde}
                </a>
              ) : (
                <p className="text-tekst/80">{item.waarde}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Openingstijden */}
      <section id="afspraak" className="bg-wit border-t border-primair/10">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <p className="uppercase tracking-wide text-sm font-bold text-accent mb-2 reveal">
            Openingstijden
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-primair mb-8 reveal">
            Wanneer ben ik bereikbaar?
          </h2>
          <ul id="openingstijden-lijst" className="divide-y divide-primair/10 mb-8 max-w-md">
            {openingstijden.map(item => (
              <li key={item.dag} className="flex items-center justify-between py-3">
                <span className="text-tekst/80 font-semibold">{item.dag}</span>
                <span className="text-primair">{item.tijd}</span>
              </li>
            ))}
          </ul>
          <a href="https://praktijkconfident.clientomgeving.nl/afspraak-maken" target="_blank" rel="noopener noreferrer"
            className="hero-btn mt-0! reveal">
            Boek direct een afspraak →
          </a>
        </div>
      </section>

      {/* Stuur een bericht */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <p className="uppercase tracking-wide text-sm font-bold text-accent mb-2 reveal">
          Stuur een bericht
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-primair mb-6 reveal">
          Of stuur mij een berichtje
        </h2>
        <p className="text-tekst/80 leading-relaxed mb-8 reveal">
          Je kunt me altijd bereiken via e-mail of telefoon. Ik reageer zo snel mogelijk —
          doorgaans binnen 1 werkdag.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 reveal">
          <a href="mailto:info@praktijkconfident.nl"
            className="inline-block bg-primair text-wit font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">
            Stuur een e-mail →
          </a>
          <a href="tel:0655912311"
            className="inline-block border border-primair text-primair font-bold px-8 py-3 rounded-full hover:bg-primair hover:text-wit transition-colors">
            Bel mij →
          </a>
        </div>
      </section>

      {/* Klaar voor de volgende stap */}
      <section className="bg-primair">
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <p className="uppercase tracking-wide text-sm font-bold text-titelkleur mb-2 reveal">
            Klaar voor de volgende stap?
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-wit mb-6 reveal">
            Neem vandaag nog contact op
          </h2>
          <p className="text-wit/80 leading-relaxed mb-2 reveal">
            Heb je vragen of wil je een afspraak maken?<br />
            Aarzel niet om contact op te nemen.
          </p>
          <p className="text-wit font-semibold reveal">
            <a href="tel:0655912311" className="hover:underline">06 – 55 91 23 11</a>
            {' · '}
            <a href="mailto:info@praktijkconfident.nl" className="hover:underline">info@praktijkconfident.nl</a>
          </p>
        </div>
      </section>

      {/* Klachtenregeling & juridisch */}
      <section className="max-w-3xl mx-auto px-6 py-16 text-sm text-tekst/70 leading-relaxed">
        <p className="mb-6 reveal">
          Ik val als CAT-therapeut onder GAT-Wkkgz klachtrecht en GAT-tuchtrecht bij de
          Geschilleninstantie Alternatieve Therapeuten (GAT). Voor meer informatie over mijn
          klachtenregeling zie:{' '}
          <a href="https://gatgeschillen.nl" target="_blank" rel="noopener noreferrer"
            className="text-primair font-semibold hover:underline">
            gatgeschillen.nl
          </a>
        </p>
        <p className="flex flex-wrap gap-x-2 gap-y-1 reveal">
          <a href="/privacy_verklaring_Praktijk-Confident.pdf"
            target="_blank" rel="noopener noreferrer"
            className="text-primair font-semibold hover:underline">
            Privacyverklaring
          </a>
          <span>·</span>
          <a href="/Algemene_Voorwaarden_Praktijk_Confident.pdf"
            target="_blank" rel="noopener noreferrer"
            className="text-primair font-semibold hover:underline">
            Algemene voorwaarden
          </a>
          <span>·</span>
          <a href="/2026%20Algemene%20voorwaarden_digitale%20en%20fysieke%20producten.pdf"
            target="_blank" rel="noopener noreferrer"
            className="text-primair font-semibold hover:underline">
            Voorwaarden digitale &amp; fysieke producten
          </a>
        </p>
      </section>

      <ScrollReveal singles={['.reveal']} grids={['#contactgegevens-grid', '#openingstijden-lijst']} />
    </>
  );
}
