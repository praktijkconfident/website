import type { Metadata } from 'next';
import Energiescan from '@/components/Energiescan';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Rust, Ruimte & Vertrouwen',
  description:
    'Persoonlijk traject van 3 of 6 maanden voor vrouwen van 40+ in de overgang. Met NEI-therapie, ademcoaching, human design en aromatherapie in Oisterwijk en online.',
};

const AFSPRAAK_URL = 'https://praktijkconfident.clientomgeving.nl/afspraak-maken';

const herkenbaar = [
  'Je ligt midden in de nacht wakker en je hoofd staat aan.',
  'Je bent moe, ook als je genoeg uren in bed ligt.',
  'Je zegt ja tegen iedereen, en nee tegen jezelf.',
  'Tijd voor jezelf komt later. Als alles af is. Maar het is nooit af.',
  'De kinderen hebben je minder nodig, en je weet niet goed wat jij nu wilt.',
  'Je voelt: ik wil het anders. Maar je weet niet waar je moet beginnen.',
];

const werkwijzen = [
  {
    titel: 'NEI-therapie',
    beschrijving:
      'We zoeken uit waar oude patronen vandaan komen, zoals altijd eerst voor anderen zorgen. Zodat je er niet meer automatisch in schiet.',
  },
  {
    titel: 'Ademcoaching',
    beschrijving:
      "Je leert eenvoudige ademoefeningen die je lichaam helpen ontspannen. Overdag, en ook als je 's nachts wakker ligt.",
  },
  {
    titel: 'Human design',
    beschrijving:
      'Je krijgt inzicht in hoe jij in elkaar zit en waar jij energie van krijgt. Dat helpt je om keuzes te maken die bij jou passen.',
  },
  {
    titel: 'Aromatherapie',
    beschrijving:
      'Je krijgt een persoonlijke olieblend voor je eigen rustmoment of avondritueel. Een klein ritueel dat je eraan herinnert om voor jezelf te kiezen.',
  },
];

const trajecten = [
  {
    label: '3 maanden',
    titel: 'Jouw reis terug naar jezelf',
    sub: 'Voor als je weer rust en ruimte wilt voelen',
    punten: [
      'Je ontdekt waar je energie naartoe gaat',
      'Je leert luisteren naar de signalen van je lichaam',
      'Je herkent je patronen en leert je grenzen kennen',
      'Je maakt een eigen balansplan voor na het traject',
      'Inclusief werkboek, human design reading en olieblend',
    ],
    prijs: '€395',
    shop: 'https://praktijkconfident.kennis.shop/pay/basis-instap-traject-rust-ruimte-vertrouwen',
  },
  {
    label: '6 maanden · verdieping',
    titel: 'Van overleven naar bewust leven',
    sub: 'Voor als je al lang veel draagt en echt anders wilt leven',
    punten: [
      'Elke maand een eigen thema: vertragen, patronen begrijpen, loslaten, grenzen, nieuwe keuzes en laten landen',
      'Meer tijd om nieuwe gewoontes blijvend te maken',
      'Je maakt een zelfzorgplan en een plan voor als het even minder gaat',
      'Inclusief werkboek, human design reading, olieblend en een cacaoceremonie',
    ],
    prijs: '€695',
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

export default function RustRuimteVertrouwenPage() {
  return (
    <>
      {/* Opening */}
      <section className="bg-primair">
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <p className={kickerLicht}>Persoonlijk traject voor vrouwen van 40+</p>
          <h1 className="text-3xl md:text-5xl font-bold text-wit mb-6 leading-tight reveal">
            Je hebt jaren voor iedereen gezorgd.
            <br />
            <span className="text-titelkleur">Nu ben jij aan de beurt.</span>
          </h1>
          <p className="text-wit/80 leading-relaxed text-lg mb-8 reveal">
            Rust, Ruimte &amp; Vertrouwen is een traject van 3 of 6 maanden. Voor als je moe bent,
            slecht slaapt in de overgang en eindelijk weer tijd wilt maken voor jezelf.
          </p>
          <div className="flex flex-wrap justify-center gap-4 reveal">
            <a href={AFSPRAAK_URL} target="_blank" rel="noopener noreferrer" className="hero-btn mt-0!">
              Plan een gratis belafspraak →
            </a>
            <a href="#energiescan"
              className="inline-block border-2 border-titelkleur text-titelkleur font-semibold px-8 py-3 rounded-full hover:bg-titelkleur/10 transition-colors">
              Doe eerst de energiescan
            </a>
          </div>
        </div>
      </section>

      {/* Herken je dit? */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <p className={kicker}>Herken je dit?</p>
        <h2 className={h2}>Je zorgt goed voor iedereen. Behalve voor jezelf.</h2>
        <ul id="rrv-herken-lijst" className="grid gap-2 sm:grid-cols-2 list-disc pl-5 text-tekst/80 leading-relaxed my-8">
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

      {/* Hoe ik werk */}
      <section className="border-t border-primair/10">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className={kicker}>Hoe ik werk</p>
            <h2 className={h2}>Praktisch, warm en met beide benen op de grond</h2>
            <p className="text-tekst/80 leading-relaxed reveal">
              In het traject combineer ik vier manieren van werken. Jij hoeft niet te weten hoe ze
              werken. Ik kies wat op dat moment bij jou past.
            </p>
          </div>
          <div id="rrv-werkwijze-grid" className="grid gap-6 sm:grid-cols-2">
            {werkwijzen.map(item => (
              <div key={item.titel} className="bg-wit rounded-2xl p-8 border border-primair/10">
                <h3 className="text-lg font-bold text-primair mb-2">{item.titel}</h3>
                <p className="text-tekst/70 leading-relaxed">{item.beschrijving}</p>
              </div>
            ))}
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
              Bij beide trajecten krijg je persoonlijke sessies en je eigen werkboek. Het verschil
              zit in de tijd en de diepgang.
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
                <p className="text-3xl font-bold text-primair mt-auto mb-5">{t.prijs}</p>
                <div className="flex flex-wrap items-center gap-4">
                  <a href={AFSPRAAK_URL} target="_blank" rel="noopener noreferrer"
                    className="inline-block bg-primair text-wit font-bold px-6 py-3 rounded-full hover:opacity-90 transition-opacity">
                    Plan een belafspraak →
                  </a>
                  <a href={t.shop} target="_blank" rel="noopener noreferrer"
                    className="font-bold text-primair hover:underline">
                    Direct boeken
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
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

      {/* Energiescan */}
      <section id="energiescan" className="border-t border-primair/10 scroll-mt-6">
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
            In een gratis telefonisch overleg van 15 minuten kijken we samen wat jij nodig hebt.
            Vrijblijvend.
          </p>
          <a href={AFSPRAAK_URL} target="_blank" rel="noopener noreferrer" className="hero-btn mt-0! reveal">
            Plan een gratis belafspraak →
          </a>
        </div>
      </section>

      <ScrollReveal
        singles={['.reveal']}
        grids={['#rrv-herken-lijst', '#rrv-werkwijze-grid', '#rrv-trajecten-grid', '#rrv-ervaringen-grid']}
      />
    </>
  );
}
