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
    'Voor vrouwen die altijd doorgaan terwijl hun lichaam allang stop zegt. Begeleiding voor vrouwen die zich uitgeput, overprikkeld of zichzelf kwijt voelen, met NEI-therapie, essentiële oliën en ademcoaching.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>
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
