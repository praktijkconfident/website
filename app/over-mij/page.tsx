import type { Metadata } from 'next';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Over mij',
  description:
    'Maak kennis met Sandra Pelkmans, NEI-therapeut en energetisch gezinstherapeut bij Praktijk Confident in Oisterwijk. Rustig, helder en zonder oordeel.',
};

const opleidingen = [
  { titel: 'Ademcoach (HBO)', jaar: '2025' },
  { titel: 'Hormooncoach (HBO)', jaar: '2024' },
  { titel: 'Energetisch gezinstherapeut (HBO)', jaar: '2023' },
  { titel: 'Mindfulness kindertrainer (HBO)', jaar: '2021' },
  { titel: 'Kindercoach (HBO)', jaar: '2020' },
  { titel: 'Hoogbegaafdheidscoach (HBO)', jaar: '2018' },
  { titel: 'Sociaal Pedagogisch Werk (MBO)', jaar: '1996' },
];

export default function OverMijPage() {
  return (
    <>
      {/* Hero — foto op ware grootte naast de tekst */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="two-col">
          <div className="col-text">
            <p className="uppercase tracking-wide text-sm font-bold text-accent mb-3 reveal">
              Over mij
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-primair mb-4 leading-tight reveal">
              De kracht van vertrouwen
            </h1>
            <p className="text-tekst/80 text-lg leading-relaxed mb-6 reveal">
              Mijn naam is Sandra Pelkmans. Ik help vrouwen die altijd doorgaan terwijl hun
              lichaam al lang stop zegt, om weer rust in hun hoofd, ruimte voor zichzelf en
              vertrouwen in hun gevoel te vinden.
            </p>
            <div className="flex flex-wrap gap-4 reveal">
              <a href="https://praktijkconfident.clientomgeving.nl/afspraak-maken" target="_blank" rel="noopener noreferrer"
                className="inline-block bg-primair text-wit font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">
                Maak een afspraak →
              </a>
              <a href="/contact"
                className="inline-block border border-primair text-primair font-bold px-8 py-3 rounded-full hover:bg-primair hover:text-wit transition-colors">
                Neem contact op →
              </a>
            </div>
          </div>
          <div className="col-image portret reveal">
            <img src="/fotos/portret.jpg" alt="Sandra Pelkmans" />
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-20">
        <p className="font-bold text-primair mb-1 reveal">Sandra Pelkmans</p>
        <p className="uppercase tracking-wide text-sm font-bold text-accent mb-2 reveal">
          Wie ik ben
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-primair mb-8 reveal">
          Rustig, helder en zonder oordeel
        </h2>

        <div className="space-y-4 text-tekst/80 leading-relaxed">
          <p className="reveal">
            Mijn eigen pad naar rust, ruimte en vertrouwen begon met het ouderschap. Voor mijn
            man en mij was het een lange, emotionele zoektocht naar ons gezin. Na jarenlang te
            hebben verlangd naar een kindje, kwam in 2008 eindelijk het nieuws dat ik in
            verwachting was. Het geluk was groot, maar helaas werd onze vreugde overschaduwd
            door intens verdriet door de stilgeboorte van onze zoon. Daarna begon een lange en
            emotionele zoektocht voordat ons gezin compleet werd. Uiteindelijk werden in 2013
            onze zoon en in 2016 onze dochter geboren.
          </p>
          <p className="reveal">
            Deze jaren hebben me geleerd dat vertrouwen soms betekent dat je doorgaat, ook als
            je niet weet hoe het afloopt, en dat het zoeken naar rust en ruimte een continu
            proces is dat je je hele leven blijft ontwikkelen. Het is geen eindpunt, maar een
            voortdurende oefening, iets waar ik zelf ook dagelijks aan werk.
          </p>
          <p className="reveal">
            Mijn professionele pad begon met een brandende vraag die me jarenlang bezig hield.
            Ondanks talloze pogingen met verschillende therapieën bleef het antwoord
            ongrijpbaar. Totdat ik jaren geleden in aanraking kwam met NEI-therapie. Tijdens die
            sessies kreeg ik helderheid en inzichten die ik zo lang had gemist. Daarna wist ik:
            dit wil ik zelf ook leren en doorgeven. Ik schreef me in voor de opleiding tot
            energetisch gezinstherapeut, waar ik me verder verdiepte in N.E.I. en andere
            methodes om mensen te begeleiden in het vinden van rust, ruimte en vertrouwen.
          </p>
          <p className="reveal">
            Mijn ervaringen, persoonlijk en professioneel, hebben me geleerd dat het opbouwen
            van rust, ruimte en vertrouwen een proces is. Soms gaat het langzaam, soms met
            hobbels, maar altijd is er vooruitgang mogelijk. Dat is wat ik mijn cliënten wil
            laten ervaren: dat je stappen vooruit kunt zetten, ook als het leven niet altijd
            gaat zoals je wilt, en dat je weer in contact kunt komen met jezelf.
          </p>
          <p className="reveal">
            In mijn praktijk begeleid ik mensen die zijn vastgelopen door langdurige spanning,
            overbelasting of het structureel wegcijferen van zichzelf. Niet door er eindeloos
            over te praten, maar door samen te kijken wat er vastzit en wat jij nodig hebt om
            weer te landen in jezelf.
          </p>
          <p className="font-semibold text-primair reveal">
            Ik werk zonder vast protocol. Begeleiding sluit aan bij jou, jouw tempo en jouw
            draagkracht.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mt-10 reveal">
          {['Rust', 'Ruimte', 'Vertrouwen'].map(woord => (
            <span key={woord}
              className="px-5 py-2 rounded-full bg-titelkleur/40 text-primair font-bold text-sm">
              {woord}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-wit border-t border-primair/10">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <p className="uppercase tracking-wide text-sm font-bold text-accent mb-2 reveal">
            Opleidingen
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-primair mb-8 reveal">
            Ervaring &amp; expertise
          </h2>
          <ul id="opleidingen-lijst" className="list-disc pl-5 divide-y divide-primair/10">
            {opleidingen.map(item => (
              <li key={item.titel} className="py-4">
                <div className="flex items-center justify-between">
                  <span className="text-tekst/80">{item.titel}</span>
                  <span className="text-primair font-bold">{item.jaar}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ScrollReveal singles={['.reveal']} grids={['#opleidingen-lijst']} />
    </>
  );
}
