import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.praktijkconfident.nl'),
  title: {
    default: 'Praktijk Confident · Rust, ruimte en vertrouwen',
    template: '%s · Praktijk Confident',
  },
  description:
    'Praktijk Confident: begeleiding voor vrouwen die uitgeput of overprikkeld zijn, met NEI-therapie, essentiële oliën en ademcoaching.',
  verification: {
    other: {
      'msvalidate.01': '477EB6D242409DBD6C2FD45D1F047D7A',
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HealthAndBeautyBusiness',
  name: 'Praktijk Confident',
  image: 'https://www.praktijkconfident.nl/fotos/portret.jpg',
  url: 'https://www.praktijkconfident.nl',
  telephone: '+31655912311',
  email: 'info@praktijkconfident.nl',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Dille 23',
    postalCode: '5063 EE',
    addressLocality: 'Oisterwijk',
    addressCountry: 'NL',
  },
  areaServed: ['Oisterwijk', 'Tilburg', 'Berkel-Enschot', 'Moergestel', 'Haaren'],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    bestRating: '5',
    reviewCount: '5',
  },
  founder: {
    '@type': 'Person',
    name: 'Sandra Pelkmans',
    jobTitle: 'Energetisch therapeut & NEI-therapeut',
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Monday', opens: '09:00', closes: '12:30' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Wednesday', opens: '09:00', closes: '12:30' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Monday', opens: '19:00', closes: '20:30', validFrom: '2026-10-05' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Wednesday', opens: '19:00', closes: '20:30', validFrom: '2026-10-05' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />

        {/* ── Google Analytics ────────────────────────────────────── */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-94GRVMWCQB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-94GRVMWCQB');
        `}</Script>
      </body>
    </html>
  );
}
