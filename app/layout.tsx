import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: '[Jouw naam] · [Jouw tagline]',
    template: '%s · [Jouw naam]',
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

        {/* ── Google Analytics ─────────────────────────────────────
            1. Maak een account op analytics.google.com
            2. Maak een nieuwe property aan voor jouw website
            3. Kopieer jouw Measurement ID (G-XXXXXXXXXX)
            4. Vervang G-XXXXXXXXXX hieronder door jouw eigen ID
            5. Haal de commentaar-tektekens weg (de { en } met slash erin)
            ────────────────────────────────────────────────────── */}
        {/*
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}</Script>
        */}
      </body>
    </html>
  );
}
