import type { Metadata } from 'next';
import ScrollReveal from '@/components/ScrollReveal';
import Energiescan from '@/components/Energiescan';
import NieuwsbriefForm from '@/components/NieuwsbriefForm';

export const metadata: Metadata = {
  title: 'NEI-therapie & NEI-therapeut Oisterwijk, Tilburg en omgeving',
  description:
    'Praktijk Confident: NEI-therapeut in Oisterwijk, Tilburg en omgeving. Voor vrouwen die altijd doorgaan terwijl hun lichaam allang stop zegt. Begeleiding met NEI-therapie, essentiële oliën en ademcoaching.',
  openGraph: {
    images: ['/fotos/hero.jpg'],
  },
};

const tickerItems = [
  'Ik voel meer rust in mijn lichaam',
  'Ik heb meer zelfvertrouwen',
  'Ik kies vaker voor mezelf',
  'Ik heb meer energie',
  'Ik zit beter in mijn vel',
  'Ik slaap beter',
];

const werkwijzen = [
  {
    titel: 'NEI-therapie',
    beschrijving: 'We zoeken samen naar wat jou emotioneel bezighoudt, patronen, spanning, oude pijn. Niet door er eindeloos over te praten, maar door het los te laten op een manier die je lichaam begrijpt.',
  },
  {
    titel: 'Essentiële oliën',
    beschrijving: 'Bepaalde geuren raken iets diepers dan woorden. Als aromatherapeut in Oisterwijk, Tilburg en omgeving help ik je zenuwstelsel te kalmeren en ondersteun ik je lichaam bij herstel op een zachte, natuurlijke manier.',
  },
  {
    titel: 'Ademwerk',
    beschrijving: 'Volle neusademhaling brengt je zenuwstelsel direct tot rust. Als ademcoach in Oisterwijk, Tilburg en omgeving begeleid ik je bij een van de krachtigste dingen die je voor jezelf kunt doen, elke dag opnieuw.',
  },
];

const herkenbaar = [
  'Je bent snel overprikkeld, terwijl je dat vroeger niet zo kende',
  'Je lichaam geeft signalen die artsen niet goed kunnen verklaren',
  'Je voelt je leeg na sociale contacten die je eigenlijk leuk vindt',
  'Je reageert anders dan je wilt en weet niet hoe je dat kunt veranderen',
  'Je staat altijd klaar voor anderen, maar voor jezelf kom je nooit toe',
  'Je bent uitgeput maar weet niet precies waardoor',
];

const voorJouAls = [
  'Je vastloopt maar niet precies weet waarom',
  'Je reguliere hulp hebt geprobeerd maar onvoldoende verandering ervaart',
  'Je moe bent van analyseren en gewoon wil voelen wat er nodig is',
  'Je klachten hebt die lichaam én hoofd allebei raken',
  'Je klaar bent om een stap richting jezelf te zetten',
];

const testimonials = [
  `Na jaren altijd 'aan' te staan, voelde ik na een paar sessies eindelijk rust in mijn hoofd.`,
  'Ik wist niet dat ik dit zo lang met me meedroeg.',
  'Ik kwam binnen met spanning en vermoeidheid en ging naar huis met ruimte in mijn lijf.',
  'Eindelijk begrijp ik waarom ik zo reageer.',
];

export default function HomePage() {
  return (
    <>
      {/* Hero — foto op ware grootte naast de tekst (geen uitgerekte full-width achtergrond) */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="two-col">
          <div className="col-text">
            <p className="uppercase tracking-wide text-sm font-bold text-accent mb-3 reveal">
              NEI-therapie · Essentiële oliën · Ademcoaching
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-primair mb-4 leading-tight reveal">
              Voor vrouwen die altijd doorgaan terwijl hun lichaam allang stop zegt
            </h1>
            <p className="text-tekst/80 text-lg leading-relaxed mb-6 reveal">
              Begeleiding voor vrouwen die zich uitgeput, overprikkeld of zichzelf kwijt voelen,
              met NEI-therapie, essentiële oliën en ademcoaching in Oisterwijk, Tilburg en
              omgeving.
            </p>
            <div className="flex flex-wrap gap-4 mb-8 reveal">
              <a href="https://praktijkconfident.clientomgeving.nl/afspraak-maken" target="_blank" rel="noopener noreferrer"
                className="inline-block bg-primair text-wit font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">
                Maak een afspraak →
              </a>
              <a href="/aanbod"
                className="inline-block border border-primair text-primair font-bold px-8 py-3 rounded-full hover:bg-primair hover:text-wit transition-colors">
                Bekijk trajecten →
              </a>
            </div>
            <p className="text-tekst/70 font-semibold reveal">
              Sandra Pelkmans, energetisch therapeut &amp; NEI-therapeut in Oisterwijk, Tilburg en
              omgeving
            </p>
          </div>
          <div className="col-image portret reveal">
            <img src="/fotos/portret.jpg" alt="Sandra Pelkmans" />
          </div>
        </div>
      </section>

      {/* Ticker */}
      <div className="bg-primair py-4 ticker-wrap">
        <div className="ticker-track text-wit font-semibold uppercase tracking-wide text-sm">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="mx-4">{item} ·</span>
          ))}
        </div>
      </div>

      {/* Herken je dit? */}
      <section className="bg-achtergrond max-w-3xl mx-auto px-6 py-20">
        <p className="uppercase tracking-wide text-sm font-bold text-accent mb-2 reveal">
          Herkenning &amp; verbinding
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-primair mb-6 reveal">
          Herken je dit?
        </h2>
        <div className="space-y-4 text-tekst/80 leading-relaxed">
          <p className="reveal">
            Die stille vermoeidheid die maar niet weggaat. Je doet het goed. Van buitenaf ziet
            het er prima uit. Maar van binnen voel je je leeg, geprikkeld of moe op een manier
            die slaap niet oplost.
          </p>
          <p className="reveal">
            Veel vrouwen komen bij mij met klachten die ze zelf niet goed kunnen plaatsen. Geen
            grote crisis, maar een gevoel van: &ldquo;Dit ben ik niet en ik weet niet meer hoe
            ik mezelf terugvind.&rdquo; Dat is precies waar ik mee werk. Niet met ingewikkelde
            theorieën. Gewoon: samen kijken wat er vastzit, en wat jij nodig hebt om weer te
            landen in jezelf.
          </p>
        </div>
        <ul id="herken-lijst" className="grid gap-2 sm:grid-cols-2 list-disc pl-5 text-tekst/80 leading-relaxed my-8">
          {herkenbaar.map(item => <li key={item}>{item}</li>)}
        </ul>
        <p className="text-tekst/80 leading-relaxed reveal">
          Je bent niet de enige. En je hoeft dit niet te pushen, te verklaren of op te lossen.
          Soms is het gewoon nodig om even stil te staan en te voelen wat er echt speelt.
        </p>
      </section>

      {/* Energiescan */}
      <section className="border-t border-primair/10">
        <div className="max-w-2xl mx-auto px-6 py-20">
          <div className="rounded-2xl overflow-hidden shadow-sm border border-primair/10 reveal">
            <Energiescan />
          </div>
        </div>
      </section>

      {/* Hoe ik werk */}
      <section className="bg-wit border-t border-primair/10">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <p className="uppercase tracking-wide text-sm font-bold text-accent mb-2 reveal">
            Drie manieren waarop ik je ondersteun
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-primair mb-10 reveal">
            Hoe ik werk
          </h2>
          <div id="werkwijze-grid" className="grid gap-8 sm:grid-cols-3">
            {werkwijzen.map(item => (
              <div key={item.titel} className="bg-achtergrond rounded-2xl p-8 border border-primair/10">
                <h3 className="text-lg font-bold text-primair mb-2">{item.titel}</h3>
                <p className="text-tekst/70 leading-relaxed">{item.beschrijving}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tip van de maand */}
      <section className="bg-primair">
        <div className="max-w-2xl mx-auto px-6 py-20 text-center">
          <p className="uppercase tracking-wide text-sm font-bold text-titelkleur mb-2 reveal">
            Tip van de maand
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-wit mb-6 reveal">
            Eén vraag die alles kan veranderen
          </h2>
          <p className="text-wit/80 leading-relaxed mb-2 reveal">
            Vraag jezelf aan het einde van de dag niet: &ldquo;Heb ik alles gedaan?&rdquo;
          </p>
          <p className="text-wit/80 leading-relaxed mb-6 reveal">
            Vraag in plaats daarvan: &ldquo;Ben ik vandaag bij mezelf gebleven?&rdquo;
          </p>
          <p className="text-wit/60 leading-relaxed mb-8 reveal">
            Het antwoord vertelt je veel meer over hoe het écht met je gaat.
          </p>
          <a href="https://praktijkconfident.clientomgeving.nl/afspraak-maken" target="_blank" rel="noopener noreferrer"
            className="hero-btn mt-0! reveal">
            Plan een gratis kennismaking →
          </a>
        </div>
      </section>

      {/* Wat kun je verwachten */}
      <section className="bg-achtergrond max-w-3xl mx-auto px-6 py-20">
        <p className="uppercase tracking-wide text-sm font-bold text-accent mb-2 reveal">
          Concreet &amp; toegankelijk
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-primair mb-6 reveal">
          Wat kun je verwachten als je de stap zet?
        </h2>
        <div className="space-y-4 text-tekst/80 leading-relaxed mb-8">
          <p className="reveal">
            Je denkt erover na om een afspraak te maken. Maar je weet niet precies wat je kunt
            verwachten. Hoe gaat zo&rsquo;n sessie? Is het iets voor mij? Die vragen snap ik.
          </p>
          <p className="reveal">
            Een sessie bij Praktijk Confident duurt zo&rsquo;n 60 minuten. We beginnen altijd
            met een gesprek: wat speelt er, wat voel je, wat hoop je te vinden. Van daaruit kijk
            ik welke aanpak het beste bij jou past.
          </p>
        </div>
        <h3 className="text-xl font-bold text-primair mb-4 reveal">
          Praktijk Confident is iets voor jou als
        </h3>
        <ul id="voorjou-lijst" className="grid gap-2 list-disc pl-5 text-tekst/80 leading-relaxed mb-8">
          {voorJouAls.map(item => <li key={item}>{item}</li>)}
        </ul>
        <a href="https://praktijkconfident.clientomgeving.nl/afspraak-maken" target="_blank" rel="noopener noreferrer"
          className="hero-btn mt-0! reveal">
          Maak een afspraak →
        </a>
      </section>

      {/* Begin klein, vandaag nog */}
      <section className="bg-titelkleur/30 border-y border-primair/10">
        <div className="max-w-2xl mx-auto px-6 py-16 text-center">
          <h2 className="text-xl font-bold text-primair mb-3 reveal">
            Begin klein, vandaag nog
          </h2>
          <p className="text-tekst/80 leading-relaxed reveal">
            Zet 10 minuten apart voor jezelf. Geen telefoon, geen lijst. Ga zitten, adem rustig
            door je neus en vraag je af: wat voel ik nu? Niet om het op te lossen, gewoon om het
            te merken.
          </p>
        </div>
      </section>

      {/* Je lichaam liegt niet */}
      <section className="bg-achtergrond max-w-3xl mx-auto px-6 py-20">
        <p className="uppercase tracking-wide text-sm font-bold text-accent mb-2 reveal">
          Inzicht &amp; bewustwording
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-primair mb-6 reveal">
          Je lichaam liegt niet. Het onthoudt alles.
        </h2>
        <div className="space-y-4 text-tekst/80 leading-relaxed">
          <p className="reveal">
            We leven in een tijd waarin veel van ons wordt gevraagd. Presteren, aanpassen,
            doorgaan. En ergens onderweg zijn velen van ons zichzelf een beetje kwijtgeraakt,
            niet door een grote fout, maar stap voor stap, jaar na jaar.
          </p>
          <p className="font-semibold text-primair reveal">
            We leerden te functioneren in plaats van te voelen.
          </p>
          <p className="reveal">
            Klachten als vermoeidheid, prikkelbaarheid of innerlijke leegte zijn zelden toeval.
            Ze zijn signalen. Je lichaam en je systeem proberen je iets te zeggen en ze wachten
            tot je luistert.
          </p>
          <p className="reveal">
            Dat is precies wat ik doe in mijn praktijk. Ik help je luisteren. Naar de signalen,
            de patronen, de plekken waar iets vastzit. En dan, zonder drama, zonder grote
            woorden, laten we het los.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-wit border-t border-primair/10">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div id="testimonial-grid" className="grid gap-6 sm:grid-cols-2">
            {testimonials.map((quote, i) => (
              <blockquote key={i}
                className="bg-achtergrond rounded-2xl p-8 border border-primair/10 text-tekst/80 italic leading-relaxed">
                &ldquo;{quote}&rdquo;
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Inschrijven inspiratiemails */}
      <section className="bg-primair">
        <div className="max-w-2xl mx-auto px-6 py-20 text-center">
          <p className="uppercase tracking-wide text-sm font-bold text-titelkleur mb-2 reveal">
            Inschrijven inspiratiemails
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-wit mb-4 reveal">
            Blijf op de hoogte van rust, ruimte en inzicht
          </h2>
          <p className="text-wit/80 leading-relaxed mb-8 reveal">
            Ontvang af en toe inspiratie, tips en zachte reminders om weer bij jezelf te komen,
            rechtstreeks in je mailbox.
          </p>
          <div className="reveal">
            <NieuwsbriefForm />
          </div>
        </div>
      </section>

      <ScrollReveal
        singles={['.reveal']}
        grids={['#herken-lijst', '#werkwijze-grid', '#voorjou-lijst', '#testimonial-grid']}
      />
    </>
  );
}
