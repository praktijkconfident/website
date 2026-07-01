import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Contact' };

export default function ContactPage() {
  return (
    <section className="max-w-2xl mx-auto px-6 py-20 text-center">
      <h1 className="text-3xl font-bold text-primair mb-4">Contact</h1>
      <p className="text-tekst/80 mb-8 leading-relaxed">
        [Hoe kunnen mensen contact met je opnemen? Via e-mail, een formulier,
        social media? Vertel het hier.]
      </p>
      {/* Vervang het e-mailadres hieronder door jouw eigen adres */}
      <a href="mailto:[jouw-emailadres@voorbeeld.nl]"
        className="inline-block bg-primair text-wit font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">
        Stuur een e-mail →
      </a>
    </section>
  );
}
