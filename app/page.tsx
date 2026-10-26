import type { Metadata } from 'next';
import Energiescan from '@/components/Energiescan';
import ScrollReveal from '@/components/ScrollReveal';
import NieuwsbriefForm from '@/components/NieuwsbriefForm';
import MenopauzeBanner from '@/components/MenopauzeBanner';
import EbookPopup from '@/components/EbookPopup';

export const metadata: Metadata = {
  title: 'NEI-therapie & NEI-therapeut Oisterwijk, Tilburg en omgeving',
  description:
    'NEI-therapeut in Oisterwijk en Tilburg voor vrouwen die uitgeput, overprikkeld of in de overgang zijn. Persoonlijk traject Rust, Ruimte & Vertrouwen met NEI-therapie, ademcoaching, human design en oliën.',
  openGraph: {
    images: ['/fotos/hero.jpg'],
  },
};

const AFSPRAAK_URL = 'https://praktijkconfident.clientomgeving.nl/afspraak-maken';

const tickerItems = [
  'Ik voel meer rust in mijn lichaam',
  'Ik heb meer zelfvertrouwen',
  'Ik kies vaker voor mezelf',
  'Ik heb meer energie',
  'Ik zit beter in mijn vel',
  'Ik slaap beter',
];

const voorJouAls = [
  'Je vastloopt maar niet precies weet waarom',
  'Je reguliere hulp hebt geprobeerd maar onvoldoende verandering ervaart',
  'Je moe bent van analyseren en gewoon wil voelen wat er nodig is',
  'Je klachten hebt die lichaam én hoofd allebei raken',
  'Je klaar bent om een stap richting jezelf te zetten',
];

const stappen = [
  {
    nr: '1',
    titel: 'Twijfel je nog? Bel gratis',
    tekst: 'Weet je nog niet of dit bij je past? Plan een gratis belafspraak van 15 minuten. Je vertelt kort wat er speelt en je stelt je vragen. Vrijblijvend.',
  },
  {
    nr: '2',
    titel: 'Intake van 90 minuten',
    tekst: 'Weet je dat je aan jezelf wilt werken? Dan start je met een intake. We staan stil bij jouw verhaal en gaan meteen praktisch aan de slag. Zo voel je direct wat mijn manier van werken voor jou kan betekenen.',
    prijs: '€142,50',
    prijsUitleg: 'Een volwaardige sessie van 90 minuten, waarin je direct aan de slag gaat.',
  },
  {
    nr: '3',
    titel: 'Jouw traject',
    tekst: 'Voelt het goed van beide kanten? Dan kiezen we samen voor een traject van 3 of 6 maanden en plannen we direct de afspraken in.',
  },
];


const herkenbaar = [
  'Je ligt midden in de nacht wakker en je hoofd staat aan.',
  'Je bent moe, ook als je genoeg uren in bed ligt.',
  'Je bent snel overprikkeld, terwijl je dat vroeger niet zo kende.',
  'Je zit in de overgang en herkent jezelf niet meer.',
  'Je zegt ja tegen iedereen, en nee tegen jezelf.',
  'Tijd voor jezelf komt later. Als alles af is. Maar het is nooit af.',
  'De kinderen hebben je minder nodig, en je weet niet goed wat jij nu wilt.',
  'Je voelt: ik wil het anders. Maar je weet niet waar je moet beginnen.',
];

const ondersteunend = [
  {
    titel: 'Ademcoaching',
    beschrijving:
      "Met een rustige, volle neusademhaling komt je zenuwstelsel tot rust. Je leert eenvoudige oefeningen voor overdag, en ook voor als je 's nachts wakker ligt.",
  },
  {
    titel: 'Essentiële oliën',
    beschrijving:
      'Bepaalde geuren raken iets diepers dan woorden. Je krijgt een persoonlijke olieblend voor je eigen rustmoment of avondritueel, als zachte steun voor je lichaam.',
  },
  {
    titel: 'Human design',
    beschrijving:
      'Inzicht in hoe jij in elkaar zit en waar jij energie van krijgt. Dat helpt je om keuzes te maken die bij jou passen.',
  },
];

const trajecten = [
  {
    label: 'NEI-traject · 3 maanden',
    titel: 'Jouw reis terug naar jezelf',
    sub: 'Voor als je weer rust en ruimte wilt voelen',
    punten: [
      '3 persoonlijke NEI-sessies van 60 minuten',
      'Je ontdekt waar je energie naartoe gaat',
      'Je leert luisteren naar de signalen van je lichaam',
      'Je herkent je patronen en leert je grenzen kennen',
      'Je maakt een eigen balansplan voor na het traject',
      'Inclusief werkboek en persoonlijke olieblend',
    ],
    prijs: '€395',
    prijsUitleg: 'Voor 3 maanden begeleiding, alles inbegrepen.',
    shop: 'https://praktijkconfident.kennis.shop/pay/basis-instap-traject-rust-ruimte-vertrouwen',
  },
  {
    label: 'NEI-traject · 6 maanden · verdieping',
    titel: 'Van overleven naar bewust leven',
    sub: 'Voor als je al lang veel draagt en echt anders wilt leven',
    punten: [
      '5 persoonlijke NEI-sessies van 60 minuten en een cacaoceremonie van ongeveer 2 uur',
      'Elke maand een eigen thema: vertragen, patronen begrijpen, loslaten, grenzen, nieuwe keuzes en laten landen',
      'Meer tijd om nieuwe gewoontes blijvend te maken',
      'Je maakt een zelfzorgplan en een plan voor als het even minder gaat',
      'Inclusief werkboek en persoonlijke olieblend',
    ],
    prijs: '€750',
    prijsUitleg: 'Voor 6 maanden begeleiding, alles inbegrepen.',
    shop: 'https://praktijkconfident.kennis.shop/pay/verdiepend-traject-rust-ruimte-vertrouwen',
  },
];

const ervaringen = [
  {
    tekst: [
      'Lieve Sandra,',
      'Bedankt als eerst voor je flexibiliteit, toen de afspraak helaas verzet moest worden wegens ziekte. Wat fijn dat je begripvol ook was.',
      'Meteen bij binnenkomst voelde ik je warmte en voelde ik me thuis/veilig en op mijn gemak. Je nam de tijd en legde andere dingen, waar interesse in was uit. De sessie voelde erg positief en we kwamen bij lagen uit die ik herkende. De sessie was ook pittig, maar ik merkte verschuiving en na de sessie ontspanning. Wat ook het doel was.',
      'Blij dat ik dit heb mogen ervaren bij Sandra. Ik raad iedereen aan om een sessie of hele series bij haar af te nemen. Om beweging in jezelf te brengen.',
      'Dank je wel daarvoor lieve Sandra. ❤️',
    ],
    naam: 'RvG',
  },
  {
    tekst: [
      'Het afgelopen jaar sessies met NEI-therapie gevolgd bij Sandra. Vanaf de eerste keer voelde ik mij veilig en op mijn gemak. Vandaag het basistraject afgesloten met een cacaosessie. Wat een inzichten heb ik gekregen in die periode en wat een stappen heb ik gezet.',
      'Ik kan het iedereen aanraden, die ergens mee worstelt. Het hoeven zeker geen gigantische problemen te zijn. Een hardnekkige gewoonte waar je last van hebt, is uitstekend aan te pakken met NEI-therapie.',
      'Sandra bedankt.',
    ],
    naam: 'MvdG',
  },
  {
    tekst: [
      'Aantal maanden geleden gestart met NEI-therapie bij Sandra. Ik wist niet goed wat ik moest verwachten maar wat heeft deze therapie mij geholpen.',
      'Sandra is een zeer fijn rustig persoon waar je jezelf meteen op je gemak bij voelt. Meteen al bij de eerste keer wist ik niet wat me overkwam, zo pakkend en bijzonder helpend.',
      'Ik ben ooh zo blij dat ik bij Sandra terecht ben gekomen, want na aantal keren geweest te zijn kan ik oprecht zeggen dat ik meerdere problemen los heb kunnen laten.',
    ],
    naam: 'S.',
  },
  {
    tekst: [
      'Ik ben bij Sandra enkele weken geleden geweest voor een energetische therapie. Ik kwam niet voor iets speciaals maar ik wilde het gewoon eens proberen, omdat ik al een paar jaar voel dat er iets is maar niet kan verklaren wat. Het hinderde naar mijn gevoel ook niet.',
      'Ik werd zeer vriendelijk en gastvrij onthaald en kreeg fijne heldere uitleg. Daarna zijn we van start gegaan en uiteindelijk kwamen we bij een blokkade. Deze heeft ze daarna opgelost. Het voelde daarna al vrij/verlicht.',
      'Maar vorige week viel alles op zijn plek en was er een moment dat ik voelde dat ik een keuze kon en mocht maken. Pas daarna wist ik dat het kon door de sessie met Sandra.',
      'Ik ben je enorm dankbaar Sandra 🙏❤️. Ik kan het iedereen dan ook aanraden om het te proberen ✨',
    ],
    naam: 'B.B.',
  },
];

const vragen = [
  {
    v: 'Ik heb eigenlijk geen tijd. Is dit wel iets voor mij?',
    a: 'Juist dan. Je hoeft niet eerst tijd te vinden. De oefeningen zijn kort en passen in een gewone dag. Vaak merk je dat je juist meer ruimte krijgt als je beter voor jezelf zorgt.',
  },
  {
    v: 'Is dit niet een beetje zweverig?',
    a: 'Nee. Ik werk praktisch en in gewone taal. Je krijgt concrete oefeningen en inzichten die je direct kunt gebruiken.',
  },
  {
    v: 'Wat is NEI precies?',
    a: 'NEI staat voor Neuro Emotionele Integratie. Met deze methode zoeken we uit welke oude ervaringen of overtuigingen je nu nog in de weg zitten. Zo kun je ze een plek geven.',
  },
  {
    v: 'Hoe begin ik?',
    a: 'Weet je dat je aan jezelf wilt werken? Dan start je met een intake van 90 minuten (€142,50). Twijfel je nog? Plan dan eerst een gratis belafspraak van 15 minuten.',
  },
  {
    v: 'Kies ik voor 3 of 6 maanden?',
    a: 'Dat bespreken we samen. Je krijgt een traject op maat, dat het best past bij jou.',
  },
  {
    v: 'Is het traject in Oisterwijk of ook online?',
    a: 'De sessies zijn in mijn praktijk in Oisterwijk. Het kan ook online.',
  },
  {
    v: 'Is een traject een vervanging voor de huisarts?',
    a: 'Nee. Mijn begeleiding is een aanvulling. Heb je medische klachten, ga dan altijd ook naar je huisarts.',
  },
];

const kicker = 'uppercase tracking-wide text-sm font-bold text-accent mb-2 reveal';
const kickerLicht = 'uppercase tracking-wide text-sm font-bold text-titelkleur mb-2 reveal';
const h2 = 'text-2xl md:text-3xl font-bold text-primair mb-6 reveal';

export default function HomePage() {
  return (
    <>
      <MenopauzeBanner />
      <EbookPopup />

      {/* Opening */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="two-col">
          <div className="col-text">
            <p className="uppercase tracking-wide text-sm font-bold text-accent mb-3 reveal">
              NEI-therapie voor vrouwen van 40+
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-primair mb-4 leading-tight reveal">
              Je hebt jaren voor iedereen gezorgd. Nu ben jij aan de beurt.
            </h1>
            <p className="text-tekst/80 text-lg leading-relaxed mb-6 reveal">
              Rust, Ruimte &amp; Vertrouwen is een NEI-traject van 3 of 6 maanden. Voor als je moe
              bent, slecht slaapt in de overgang en eindelijk weer tijd wilt maken voor jezelf.
            </p>
            <div className="flex flex-wrap gap-4 mb-4 reveal">
              <a href={AFSPRAAK_URL} target="_blank" rel="noopener noreferrer"
                className="inline-block bg-primair text-wit font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">
                Plan een intake →
              </a>
              <a href={AFSPRAAK_URL} target="_blank" rel="noopener noreferrer"
                className="inline-block border border-primair text-primair font-bold px-8 py-3 rounded-full hover:bg-primair hover:text-wit transition-colors">
                Twijfel je? Bel gratis 15 min
              </a>
            </div>
            <p className="text-tekst/60 text-sm mb-8 reveal">
              Eerst kijken waar je staat? <a href="#energiescan" className="underline hover:text-primair">Doe de gratis energiescan</a>
            </p>
            <p className="text-tekst/70 font-semibold reveal">
              Sandra Pelkmans, NEI-therapeut, ademcoach en aromatherapeut in Oisterwijk, Tilburg en
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
      <section className="max-w-3xl mx-auto px-6 py-20">
        <p className={kicker}>Herken je dit?</p>
        <h2 className={h2}>Je zorgt goed voor iedereen. Behalve voor jezelf.</h2>
        <p className="text-tekst/80 leading-relaxed reveal">
          Die stille vermoeidheid die maar niet weggaat. Van buitenaf ziet het er prima uit. Maar
          van binnen voel je je leeg, geprikkeld of moe op een manier die slaap niet oplost.
        </p>
        <ul id="rrv-herken-lijst" className="grid gap-x-12 gap-y-2 sm:grid-cols-2 list-disc pl-5 text-tekst/80 leading-relaxed my-8">
          {herkenbaar.map(item => <li key={item}>{item}</li>)}
        </ul>
        <p className="text-tekst/80 leading-relaxed italic reveal">
          Dat is geen zwakte. Het is een patroon dat je jarenlang goed heeft geholpen. Alleen past
          het nu niet meer bij wie je bent.
        </p>
      </section>

      {/* Stel je eens voor */}
      <section className="bg-wit border-t border-primair/10">
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <p className={kicker}>Stel je eens voor</p>
          <h2 className={h2}>Je slaapt weer beter. Je voelt wat je nodig hebt. En je kiest daar ook voor.</h2>
          <div className="space-y-4 text-tekst/80 leading-relaxed">
            <p className="reveal">
              Zonder schuldgevoel. Zonder eerst alles op orde te hebben. Je hebt weer energie voor
              de dingen die jij belangrijk vindt, en rust in je hoofd en in je lijf.
            </p>
            <p className="reveal">Daar werken we samen naartoe. Stap voor stap, in jouw tempo.</p>
          </div>
        </div>
      </section>

      {/* Je lichaam liegt niet */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <p className={kicker}>Inzicht &amp; bewustwording</p>
        <h2 className={h2}>Je lichaam liegt niet. Het onthoudt alles.</h2>
        <div className="space-y-4 text-tekst/80 leading-relaxed">
          <p className="reveal">
            Ergens onderweg zijn veel vrouwen zichzelf een beetje kwijtgeraakt. Niet door een
            grote fout, maar stap voor stap, jaar na jaar.
          </p>
          <p className="font-semibold text-primair reveal">
            We leerden te functioneren in plaats van te voelen.
          </p>
          <p className="reveal">
            Vermoeidheid, prikkelbaarheid of slecht slapen zijn zelden toeval. Het zijn signalen.
            In het traject leer je weer luisteren. Naar je lichaam, je patronen en de plekken waar
            iets vastzit. En dan, zonder drama en zonder grote woorden, laten we het los.
          </p>
        </div>
      </section>

      {/* Hoe ik werk */}
      <section className="bg-wit border-t border-primair/10">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className={kicker}>Hoe ik werk</p>
            <h2 className={h2}>Praktisch, warm en met beide benen op de grond</h2>
            <p className="text-tekst/80 leading-relaxed reveal">
              De basis van elk traject is NEI-therapie. Daaromheen zet ik andere hulpmiddelen in,
              als ze jou verder helpen. Ik leg je altijd uit wat we doen en waarom, en samen kijken we
              wat op dat moment bij jou past.
            </p>
          </div>
          <div className="bg-primair text-wit rounded-2xl p-8 md:p-10 mb-6 reveal">
            <p className="uppercase tracking-wide text-xs font-bold text-titelkleur mb-2">De basis van je traject</p>
            <h3 className="text-2xl font-bold mb-3">NEI-therapie</h3>
            <p className="text-wit/85 leading-relaxed max-w-3xl">
              NEI staat voor Neuro Emotionele Integratie. Samen zoeken we uit wat je emotioneel
              bezighoudt: patronen, spanning, oude pijn. Zoals altijd eerst voor anderen zorgen. Niet
              door er eindeloos over te praten, maar door het los te laten op een manier die je
              lichaam begrijpt. Zodat je er niet meer automatisch in schiet.
            </p>
          </div>
          <p className="uppercase tracking-wide text-xs font-bold text-accent mb-4 reveal">Ondersteunend, waar het jou helpt</p>
          <div id="rrv-werkwijze-grid" className="grid gap-6 sm:grid-cols-3">
            {ondersteunend.map(item => (
              <div key={item.titel} className="bg-achtergrond rounded-2xl p-8 border border-primair/10">
                <h3 className="text-lg font-bold text-primair mb-2">{item.titel}</h3>
                <p className="text-tekst/70 leading-relaxed">{item.beschrijving}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zo begin je */}
      <section className="border-t border-primair/10">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className={kicker}>Zo begin je</p>
            <h2 className={h2}>Wat kun je verwachten als je de stap zet?</h2>
            <p className="text-tekst/80 leading-relaxed reveal">
              Je weet misschien nog niet precies hoe het gaat. Is het iets voor mij? Die vraag
              snap ik. Daarom zijn er twee manieren om te beginnen.
            </p>
          </div>
          <div id="rrv-stappen-grid" className="grid gap-6 sm:grid-cols-3">
            {stappen.map(st => (
              <div key={st.nr} className="bg-wit rounded-2xl p-8 border border-primair/10 flex flex-col">
                <span className="w-10 h-10 rounded-full bg-primair text-wit font-bold flex items-center justify-center mb-4">{st.nr}</span>
                <h3 className="text-lg font-bold text-primair mb-2">{st.titel}</h3>
                <p className="text-tekst/70 leading-relaxed flex-1">{st.tekst}</p>
                {st.prijs && <p className="text-2xl font-bold text-primair mt-4">{st.prijs}</p>}
                {st.prijsUitleg && <p className="text-sm text-tekst/60 mt-1">{st.prijsUitleg}</p>}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-10 reveal">
            <a href={AFSPRAAK_URL} target="_blank" rel="noopener noreferrer"
              className="inline-block bg-primair text-wit font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">
              Plan een intake →
            </a>
            <a href={AFSPRAAK_URL} target="_blank" rel="noopener noreferrer"
              className="inline-block border border-primair text-primair font-bold px-8 py-3 rounded-full hover:bg-primair hover:text-wit transition-colors">
              Gratis belafspraak (15 min)
            </a>
          </div>
        </div>
      </section>

      {/* De trajecten */}
      <section id="trajecten" className="bg-primair scroll-mt-6">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className={kickerLicht}>Kies wat bij je past</p>
            <h2 className="text-2xl md:text-3xl font-bold text-wit mb-6 reveal">Rust, Ruimte &amp; Vertrouwen</h2>
            <p className="text-wit/80 leading-relaxed reveal">
              Beide trajecten zijn NEI-trajecten. Ademcoaching en essentiële oliën zetten we in waar
              het je helpt. Na de intake kiezen we samen. Het verschil zit in de tijd en de diepgang.
            </p>
          </div>
          <div id="rrv-trajecten-grid" className="grid gap-8 sm:grid-cols-2">
            {trajecten.map(t => (
              <div key={t.titel} className="bg-wit rounded-2xl p-8 flex flex-col">
                <p className="uppercase tracking-wide text-xs font-bold text-accent mb-2">{t.label}</p>
                <h3 className="text-xl font-bold text-primair mb-1">{t.titel}</h3>
                <p className="italic text-tekst/70 mb-5">{t.sub}</p>
                <ul className="list-disc pl-5 text-tekst/80 leading-relaxed space-y-1 mb-6">
                  {t.punten.map(p => <li key={p}>{p}</li>)}
                </ul>
                <p className="text-3xl font-bold text-primair mt-auto">{t.prijs}</p>
                <p className="text-sm text-tekst/60 mb-5">{t.prijsUitleg}</p>
                <a href={AFSPRAAK_URL} target="_blank" rel="noopener noreferrer"
                  className="inline-block text-center bg-primair text-wit font-bold px-6 py-3 rounded-full hover:opacity-90 transition-opacity">
                  Begin met een intake →
                </a>
                <p className="text-sm text-tekst/60 mt-3 text-center">
                  Intake al gehad?{' '}
                  <a href={t.shop} target="_blank" rel="noopener noreferrer" className="font-bold text-primair hover:underline">
                    Boek hier je traject
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Iets voor jou als */}
      <section className="max-w-3xl mx-auto px-6 pt-20">
        <h2 className={h2}>Dit traject is iets voor jou als</h2>
        <ul id="rrv-voorjou-lijst" className="grid gap-2 list-disc pl-5 text-tekst/80 leading-relaxed">
          {voorJouAls.map(item => <li key={item}>{item}</li>)}
        </ul>
      </section>

      {/* Het werkboek */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <p className={kicker}>Je eigen werkboek</p>
        <h2 className={h2}>Geen schoolboek. Er hoeft niets perfect.</h2>
        <div className="space-y-4 text-tekst/80 leading-relaxed">
          <p className="reveal">
            Je werkboek helpt je om wat je in de sessies ontdekt mee te nemen naar je gewone dag.
            Met vragen, kleine oefeningen en ruimte voor je eigen gedachten.
          </p>
          <p className="reveal">
            Je begint met een energiescan, zodat je ziet waar je staat. Aan het eind kijk je terug
            en zie je zwart op wit wat er veranderd is.
          </p>
        </div>
      </section>

      {/* Begin klein */}
      <section className="bg-titelkleur/30 border-y border-primair/10">
        <div className="max-w-2xl mx-auto px-6 py-16 text-center">
          <h2 className="text-xl font-bold text-primair mb-3 reveal">Begin klein, vandaag nog</h2>
          <p className="text-tekst/80 leading-relaxed reveal">
            Zet 10 minuten apart voor jezelf. Geen telefoon, geen lijst. Ga zitten, adem rustig
            door je neus en vraag je af: wat voel ik nu? Niet om het op te lossen, gewoon om het
            te merken.
          </p>
          <p className="text-tekst/80 leading-relaxed mt-4 reveal">
            Wil je weten waar jij nu staat? Doe hieronder de gratis energiescan.
          </p>
        </div>
      </section>

      {/* Energiescan */}
      <section id="energiescan" className="scroll-mt-6">
        <div className="max-w-2xl mx-auto px-6 py-20">
          <div className="rounded-2xl overflow-hidden shadow-sm border border-primair/10 reveal">
            <Energiescan />
          </div>
        </div>
      </section>

      {/* Over mij */}
      <section className="bg-wit border-t border-primair/10">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="two-col flip">
            <div className="col-text">
              <p className={kicker}>Over mij</p>
              <h2 className={h2}>Hoi, ik ben Sandra</h2>
              <div className="space-y-4 text-tekst/80 leading-relaxed">
                <p className="reveal">
                  In mijn praktijk in Oisterwijk begeleid ik vrouwen die altijd voor anderen hebben
                  gezorgd en nu weer bij zichzelf willen uitkomen.
                </p>
                <p className="reveal">
                  Ik werk warm en praktisch, zonder zweverige praat. Je hoeft bij mij niets te
                  presteren. We kijken samen wat jij nodig hebt, en zetten daar kleine, haalbare
                  stappen in.
                </p>
              </div>
            </div>
            <div className="col-image">
              <img src="/fotos/portret.jpg" alt="Sandra Pelkmans, Praktijk Confident" />
            </div>
          </div>
        </div>
      </section>

      {/* Ervaringen */}
      <section className="border-t border-primair/10">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <p className={kicker}>Ervaringen</p>
          <h2 className={h2}>Wat anderen zeggen</h2>
          <div id="rrv-ervaringen-grid" className="grid gap-6 sm:grid-cols-2">
            {ervaringen.map(e => (
              <blockquote key={e.naam}
                className="bg-wit rounded-2xl p-8 border border-primair/10 text-tekst/80 italic leading-relaxed space-y-3">
                {e.tekst.map(t => <p key={t}>{t}</p>)}
                <footer className="not-italic font-semibold text-primair pt-2">{e.naam}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Inschrijven inspiratiemails */}
      <section className="bg-primair">
        <div className="max-w-2xl mx-auto px-6 py-20 text-center">
          <p className={kickerLicht}>Inschrijven inspiratiemails</p>
          <h2 className="text-2xl md:text-3xl font-bold text-wit mb-4 reveal">Blijf op de hoogte van rust, ruimte en inzicht</h2>
          <p className="text-wit/80 leading-relaxed mb-8 reveal">
            Ontvang af en toe inspiratie, tips en zachte reminders om weer bij jezelf te komen,
            rechtstreeks in je mailbox.
          </p>
          <div className="reveal">
            <NieuwsbriefForm />
          </div>
        </div>
      </section>

      {/* Veelgestelde vragen */}
      <section className="bg-wit border-t border-primair/10">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <p className={kicker}>Veelgestelde vragen</p>
          <h2 className={h2}>Misschien vraag je je af...</h2>
          <div className="divide-y divide-primair/15 border-y border-primair/15">
            {vragen.map(item => (
              <details key={item.v} className="group py-5">
                <summary className="flex justify-between items-center cursor-pointer font-semibold text-primair list-none">
                  {item.v}
                  <span className="text-accent text-2xl leading-none group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-tekst/80 leading-relaxed mt-3">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Afsluiting */}
      <section className="bg-primair">
        <div className="max-w-2xl mx-auto px-6 py-20 text-center">
          <p className={kickerLicht}>Zet de eerste stap</p>
          <h2 className="text-2xl md:text-3xl font-bold text-wit mb-6 reveal">
            Je hoeft het niet alleen te doen. We beginnen gewoon.
          </h2>
          <p className="text-wit/80 leading-relaxed mb-8 reveal">
            Weet je dat je aan jezelf wilt werken? Plan dan een intake. Twijfel je nog? In een
            gratis telefonisch overleg van 15 minuten kijken we samen wat jij nodig hebt.
            Vrijblijvend.
          </p>
          <div className="flex flex-wrap justify-center gap-4 reveal">
            <a href={AFSPRAAK_URL} target="_blank" rel="noopener noreferrer" className="hero-btn mt-0!">
              Plan een intake →
            </a>
            <a href={AFSPRAAK_URL} target="_blank" rel="noopener noreferrer"
              className="inline-block border-2 border-titelkleur text-titelkleur font-semibold px-8 py-3 rounded-full hover:bg-titelkleur/10 transition-colors">
              Gratis belafspraak (15 min)
            </a>
          </div>
        </div>
      </section>

      <ScrollReveal
        singles={['.reveal']}
        grids={['#rrv-herken-lijst', '#rrv-werkwijze-grid', '#rrv-stappen-grid', '#rrv-trajecten-grid', '#rrv-voorjou-lijst', '#rrv-ervaringen-grid']}
      />
    </>
  );
}
