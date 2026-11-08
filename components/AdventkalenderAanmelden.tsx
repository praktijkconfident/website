"use client";

import { useEffect, useState } from "react";

// MailerLite-formulier "Adventkalender" (groep Adventkalender 2026)
const MAILERLITE_URL =
  "https://assets.mailerlite.com/jsonp/1602547/forms/203579280748185239/subscribe";
const KALENDER_URL = "https://mijn-adventkalender-azure.vercel.app/";
const OPSLAG_SLEUTEL = "advent-aangemeld";

export default function AdventkalenderAanmelden() {
  const [aangemeld, setAangemeld] = useState(false);
  const [naam, setNaam] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [bezig, setBezig] = useState(false);
  const [fout, setFout] = useState("");

  useEffect(() => {
    try {
      if (localStorage.getItem(OPSLAG_SLEUTEL) === "ja") setAangemeld(true);
    } catch {}
  }, []);

  const toonKalender = () => {
    try {
      localStorage.setItem(OPSLAG_SLEUTEL, "ja");
    } catch {}
    setAangemeld(true);
    setTimeout(() => {
      document.getElementById("kalender")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!naam.trim()) return setFout("Vul je voornaam in.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return setFout("Vul een geldig e-mailadres in.");
    if (!consent) return setFout("Vink aan dat je de dagelijkse mail wilt ontvangen.");
    setFout("");
    setBezig(true);
    try {
      const data = new FormData();
      data.append("fields[name]", naam.trim());
      data.append("fields[email]", email.trim());
      data.append("ml-submit", "1");
      data.append("anticsrf", "true");
      await fetch(MAILERLITE_URL, { method: "POST", body: data, mode: "no-cors" });
    } catch {
      // Ook als het versturen mislukt, krijgt de bezoeker de kalender te zien.
    }
    setBezig(false);
    toonKalender();
  };

  if (aangemeld) {
    return (
      <section id="kalender" className="max-w-5xl mx-auto px-4 pt-12 pb-6 scroll-mt-6">
        <iframe
          src={KALENDER_URL}
          title="Adventkalender 24 Momenten van Rust"
          loading="lazy"
          className="block w-full rounded-2xl border-0 h-[1400px] md:h-[1100px]"
        />
        <p className="text-center text-sm text-tekst/70 mt-4">
          Zie je de kalender niet goed?{" "}
          <a href={KALENDER_URL} target="_blank" rel="noopener" className="text-primair underline">
            Open hem in een nieuw venster
          </a>
          .
        </p>
      </section>
    );
  }

  return (
    <section className="max-w-xl mx-auto px-4 pt-12">
      <div className="bg-primair text-wit rounded-2xl px-6 py-10 sm:px-10 text-center">
        <p className="uppercase tracking-wide text-sm font-bold text-accent mb-2">Gratis meedoen</p>
        <h2 className="text-2xl md:text-3xl font-bold text-wit mb-3 leading-tight">
          Meld je aan en open je eerste deurtje
        </h2>
        <p className="text-wit/85 mb-6">
          Vul je naam en e-mailadres in. Je krijgt meteen toegang tot de kalender, en in december
          elke ochtend een korte herinnering in je mail.
        </p>
        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3 text-left">
          <input
            type="text"
            placeholder="Je voornaam"
            autoComplete="given-name"
            value={naam}
            onChange={e => setNaam(e.target.value)}
            className="px-5 py-3 rounded-full border-2 border-wit/40 bg-wit/10 text-wit placeholder:text-wit/70 focus:outline-none focus:border-wit focus:bg-wit/20"
          />
          <input
            type="email"
            placeholder="Je e-mailadres"
            autoComplete="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="px-5 py-3 rounded-full border-2 border-wit/40 bg-wit/10 text-wit placeholder:text-wit/70 focus:outline-none focus:border-wit focus:bg-wit/20"
          />
          <label className="flex items-start gap-2 text-sm text-wit/80">
            <input
              type="checkbox"
              checked={consent}
              onChange={e => setConsent(e.target.checked)}
              className="mt-1 accent-accent"
            />
            <span>
              Ik wil in december de dagelijkse adventmail ontvangen van Praktijk Confident.
              Uitschrijven kan altijd.
            </span>
          </label>
          <button
            type="submit"
            disabled={bezig}
            className="bg-accent text-primair font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {bezig ? "Een moment…" : "Ja, ik doe mee"}
          </button>
          {fout && <p className="text-red-200 text-sm text-center">{fout}</p>}
        </form>
        <p className="text-sm text-wit/75 mt-5">
          Al aangemeld?{" "}
          <button type="button" onClick={toonKalender} className="underline text-accent">
            Ga direct naar de kalender
          </button>
        </p>
      </div>
    </section>
  );
}
