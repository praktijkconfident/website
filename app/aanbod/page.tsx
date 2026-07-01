import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Aanbod' };

export default function AanbodPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold text-primair mb-4">Mijn aanbod</h1>
      <p className="text-tekst/80 mb-12">
        [Korte introductie op jouw aanbod]
      </p>
      <div className="grid gap-8 sm:grid-cols-2">
        {/* Product/dienst 1 */}
        <div className="bg-wit rounded-2xl p-8 shadow-sm border border-primair/10">
          <h2 className="text-xl font-bold text-primair mb-2">[Product of dienst 1]</h2>
          <p className="text-tekst/70 leading-relaxed mb-4">[Beschrijving]</p>
          <a href="#" className="font-bold text-accent hover:underline">Meer info →</a>
        </div>
        {/* Product/dienst 2 */}
        <div className="bg-wit rounded-2xl p-8 shadow-sm border border-primair/10">
          <h2 className="text-xl font-bold text-primair mb-2">[Product of dienst 2]</h2>
          <p className="text-tekst/70 leading-relaxed mb-4">[Beschrijving]</p>
          <a href="#" className="font-bold text-accent hover:underline">Meer info →</a>
        </div>
      </div>
    </section>
  );
}
