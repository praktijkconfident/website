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
  description: '[Korte beschrijving van wat je doet en voor wie]',
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
