const AFSPRAAK_URL = 'https://praktijkconfident.clientomgeving.nl/afspraak-maken';

const links = [
  { href: '/', label: 'Home' },
  { href: '/over-mij', label: 'Over mij' },
  { href: '/aanbod', label: 'Aanbod' },
  { href: '/gratis', label: 'Gratis' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-primair text-wit/80 text-sm">
      <div className="max-w-5xl mx-auto px-6 py-12 grid gap-10 sm:grid-cols-3">
        <div>
          <p className="text-wit font-bold text-base mb-2">Praktijk Confident</p>
          <p className="leading-relaxed">
            Sandra Pelkmans<br />
            Energetisch therapeut, ademcoach en aromatherapeut<br />
            Dille 23, 5063 EE Oisterwijk
          </p>
        </div>
        <div>
          <p className="text-wit font-bold mb-2">Contact</p>
          <p className="leading-relaxed">
            <a href="tel:0655912311" className="hover:text-wit">06 55 91 23 11</a><br />
            <a href="mailto:info@praktijkconfident.nl" className="hover:text-wit">info@praktijkconfident.nl</a><br />
            <a href={AFSPRAAK_URL} target="_blank" rel="noopener noreferrer" className="hover:text-wit underline">
              Plan een afspraak
            </a>
          </p>
        </div>
        <div>
          <p className="text-wit font-bold mb-2">Menu</p>
          <ul className="space-y-1">
            {links.map(l => (
              <li key={l.href}><a href={l.href} className="hover:text-wit">{l.label}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-wit/15">
        <div className="max-w-5xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between gap-3 text-xs text-wit/60">
          <p>© {new Date().getFullYear()} Praktijk Confident · KvK 93810709</p>
          <p className="flex flex-wrap gap-x-3">
            <a href="/privacy_verklaring_Praktijk-Confident.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-wit">Privacyverklaring</a>
            <a href="/Algemene_Voorwaarden_Praktijk_Confident.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-wit">Algemene voorwaarden</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
