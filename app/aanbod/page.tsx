import type { Metadata } from 'next';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Aanbod',
  description:
    'NEI-therapie en NEI-therapeut in Oisterwijk, Tilburg en omgeving. Bekijk de trajecten, cursussen en workshops van Praktijk Confident voor rust, ruimte en vertrouwen.',
};

const herkenbaar = [
  'Je bent snel overprikkeld of gespannen',
  'Je voelt je leeg na sociale contacten',
  'Je staat altijd "aan" en kunt moeilijk ontspannen',
  'Je lichaam blijft klachten geven zonder duidelijke oorzaak',
  'Je reageert heftiger dan je eigenlijk wilt',
  'Je zorgt goed voor anderen, maar vergeet jezelf',
  'Je voelt dat het anders mag, maar weet niet waar je moet beginnen',
];

const inzichtsessieResultaat = [
  'Meer inzicht in wat er speelt',
  'Helderheid over jouw klachten of patronen',
  'Rust en richting',
  'Duidelijkheid over welk traject bij jou past',
];

const aanbod = [
  {
    titel: 'Basis Traject – 3 maanden',
    beschrijving: 'Een eerste traject van 3 maanden met NEI-therapie (Neuro Emotionele Integratie) in Oisterwijk, Tilburg en omgeving, waarin we samen op zoek gaan naar meer rust, ruimte en vertrouwen in jezelf en je dagelijks leven.',
    url: 'https://praktijkconfident.kennis.shop/pay/basis-instap-traject-rust-ruimte-vertrouwen',
  },
  {
    titel: 'Verdiepend Traject – 6 maanden',
    beschrijving: 'Een verdiepend traject van 6 maanden met NEI-therapie (Neuro Emotionele Integratie) in Oisterwijk, Tilburg en omgeving, voor wie meer tijd en ruimte nodig heeft om patronen te doorbreken en blijvend in balans te komen.',
    url: 'https://praktijkconfident.kennis.shop/pay/verdiepend-traject-rust-ruimte-vertrouwen',
  },
  {
    titel: 'Online cursus: werken met de biotensor',
    beschrijving: 'Leer zelf werken met de biotensor om spanning, blokkades en emotionele belasting bij jezelf in kaart te brengen.',
    url: 'https://praktijkconfident.kennis.shop/pay/online-cursus-werken-met-de-biotensor',
  },
  {
    titel: 'Workshop essentiële oliën',
    beschrijving: 'Ontdek als aromatherapeut in Oisterwijk, Tilburg en omgeving hoe je essentiële oliën kunt inzetten als zachte ondersteuning bij stress, overprikkeling en herstel.',
    url: 'https://praktijkconfident.kennis.shop/pay/workshop-essentiele-olien',
  },
  {
    titel: 'Ademcoaching',
    beschrijving: 'Je adem als natuurlijke rem op stress en overprikkeling. Als ademcoach in Oisterwijk, Tilburg en omgeving leer ik je opnieuw rustig en ontspannen ademen via de neus, zodat je zenuwstelsel meer veiligheid en rust ervaart.',
    url: 'https://praktijkconfident.clientomgeving.nl/afspraak-maken',
  },
];

export default function AanbodPage() {
  return (
    <>
      {/* Kicker */}
      <section className="max-w-3xl mx-auto px-6 pt-20 pb-6 text-center">
        <p className="uppercase tracking-wide text-sm font-bold text-accent mb-2 reveal">
          Begeleiding
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-primair mb-6 reveal">
          Op jouw tempo
        </h1>
        <div className="flex items-center justify-center gap-3 reveal">
          <img src="/fotos/portret.jpg" alt="Sandra Pelkmans"
            className="w-12 h-12 rounded-full object-cover object-top border-2 border-titelkleur" />
          <span className="text-tekst/70 font-semibold">
            Sandra Pelkmans, energetisch therapeut &amp; NEI-therapeut in Oisterwijk, Tilburg en
            omgeving
          </span>
        </div>
      </section>

      {/* Herken je dit? */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <p className="uppercase tracking-wide text-sm font-bold text-accent mb-2 reveal">
          Herken je dit?
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-primair mb-6 reveal">
          Je gaat door, maar van binnen voel je het al een tijdje
        </h2>
        <div className="space-y-4 text-tekst/80 leading-relaxed">
          <p className="reveal">
            Je doet wat er van je gevraagd wordt. Je gaat door, zorgt voor anderen en probeert
            alles draaiende te houden. Maar ergens onderweg ben je jezelf een beetje
            kwijtgeraakt.
          </p>
          <p className="reveal">
            Misschien voel je je sneller moe of emotioneel dan vroeger. Misschien staat je
            hoofd nooit echt stil. Of merk je dat je lichaam signalen geeft die je niet langer
            kunt negeren.
          </p>
          <p className="reveal">
            Veel vrouwen die bij mij komen, herkennen een of meer van deze gevoelens:
          </p>
        </div>
        <ul id="herken-aanbod-lijst" className="grid gap-2 sm:grid-cols-2 list-disc pl-5 text-tekst/80 leading-relaxed my-8">
          {herkenbaar.map(item => <li key={item}>{item}</li>)}
        </ul>
        <p className="text-tekst/80 leading-relaxed italic reveal">
          Je hoeft het niet eerst allemaal te begrijpen. Soms begint verandering gewoon met
          even stil durven staan.
        </p>
      </section>

      {/* Mijn aanbod intro */}
      <section className="bg-wit border-t border-primair/10">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <p className="uppercase tracking-wide text-sm font-bold text-accent mb-2 reveal">
            Mijn aanbod
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-primair mb-6 reveal">
            Rust, inzicht &amp; begeleiding op jouw tempo
          </h2>
          <div className="space-y-4 text-tekst/80 leading-relaxed">
            <p className="reveal">
              Soms heb je geen snelle oplossing nodig, maar iemand die samen met je kijkt naar
              wat er echt speelt. Daarom werk ik met trajecten: zodat er ruimte ontstaat voor
              inzicht, verwerking en blijvende verandering.
            </p>
            <p className="reveal">
              Een inzicht sessie is er altijd als instapmoment, zodat je eerst kunt voelen welk
              traject bij jou past.
            </p>
          </div>
        </div>
      </section>

      {/* Inzichtsessie — instapmoment */}
      <section className="bg-wit">
        <div className="max-w-3xl mx-auto px-6 pb-20">
          <p className="uppercase tracking-wide text-sm font-bold text-accent mb-2 reveal">
            Instapmoment
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-primair mb-8 reveal">
            Inzichtsessie, een eerste stap naar rust en helderheid
          </h2>
          <div className="bg-achtergrond rounded-2xl p-8 border border-primair/10 reveal">
            <p className="uppercase tracking-wide text-xs font-bold text-accent mb-2">
              Instapmoment · 1 sessie
            </p>
            <div className="flex items-baseline justify-between flex-wrap gap-2 mb-1">
              <h3 className="text-xl font-bold text-primair">Inzichtsessie</h3>
              <span className="text-3xl font-bold text-primair">€95</span>
            </div>
            <p className="text-sm text-tekst/60 mb-6">Eenmalige sessie van 60 minuten</p>
            <p className="text-tekst/80 leading-relaxed mb-4">
              Soms voel je dat er iets niet klopt, maar kun je er moeilijk woorden aan geven. Je
              bent moe, snel overprikkeld of loopt steeds tegen dezelfde patronen aan, zonder
              precies te weten waarom.
            </p>
            <p className="text-tekst/80 leading-relaxed mb-6">
              In deze sessie kijken we samen naar wat er onder de oppervlakte speelt. Met
              behulp van NEI-therapie (Neuro Emotionele Integratie) en een energetische meting
              brengen we in kaart waar spanning, blokkades of emotionele belasting vastzit.
              Ik ben NEI-therapeut in Oisterwijk en werk met cliënten uit Tilburg en omgeving.
            </p>
            <p className="font-semibold text-primair mb-3">Aan het einde van de sessie heb je:</p>
            <ul id="inzicht-lijst" className="grid gap-2 list-disc pl-5 text-tekst/80 leading-relaxed mb-8">
              {inzichtsessieResultaat.map(item => <li key={item}>{item}</li>)}
            </ul>
            <a href="https://praktijkconfident.clientomgeving.nl/afspraak-maken" target="_blank" rel="noopener noreferrer"
              className="inline-block bg-primair text-wit font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">
              Plan een inzichtsessie →
            </a>
          </div>
        </div>
      </section>

      {/* Trajecten & cursussen */}
      <section className="border-t border-primair/10">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <h2 className="text-2xl md:text-3xl font-bold text-primair mb-8 reveal">
            Trajecten &amp; cursussen
          </h2>
          <div id="aanbod-grid" className="grid gap-8 sm:grid-cols-2">
            {aanbod.map(item => (
              <div key={item.url} className="bg-wit rounded-2xl p-8 shadow-sm border border-primair/10 flex flex-col">
                <h3 className="text-xl font-bold text-primair mb-2">{item.titel}</h3>
                <p className="text-tekst/70 leading-relaxed mb-6 flex-1">{item.beschrijving}</p>
                <a href={item.url} target="_blank" rel="noopener noreferrer"
                  className="font-bold text-primair hover:underline">
                  Meer info →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ScrollReveal
        singles={['.reveal']}
        grids={['#herken-aanbod-lijst', '#inzicht-lijst', '#aanbod-grid']}
      />
    </>
  );
}
