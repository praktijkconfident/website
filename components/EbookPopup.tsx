"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "ebook-popup-gesloten";
const DELAY_MS = 8000;
// Tot en met 21 oktober 2026 staat de Wereld Menopauze Dag-melding in de pop-up.
const WMD_EINDE = new Date("2026-10-22T00:00:00");

// Kleine melding rechtsonder op de homepage (geen schermvullende pop-up, dat vindt Google
// op mobiel hinderlijk). Na sluiten of klikken blijft hij 30 dagen weg.
export default function EbookPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const gesloten = Number(localStorage.getItem(STORAGE_KEY) || 0);
      if (Date.now() - gesloten < 30 * 24 * 60 * 60 * 1000) return;
    } catch {}

    const timer = setTimeout(() => setVisible(true), DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  const sluit = () => {
    setVisible(false);
    try {
      localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch {}
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Gratis e-book Overgang zonder gedoe"
      className="fixed bottom-4 right-4 left-4 sm:left-auto sm:w-96 z-50 bg-wit rounded-2xl shadow-xl border border-primair/15 p-6"
    >
      <button
        onClick={sluit}
        aria-label="Melding sluiten"
        className="absolute top-3 right-4 text-tekst/50 hover:text-tekst text-2xl leading-none"
      >
        ×
      </button>
      {new Date() < WMD_EINDE && (
        <p className="text-sm font-semibold text-primair bg-accent/40 rounded-full inline-block px-3 py-1 mb-3">
          Wereld Menopauze Dag · zondag 18 oktober 2026
        </p>
      )}
      <p className="uppercase tracking-wide text-xs font-bold text-accent mb-1">Gratis e-book</p>
      <p className="text-lg font-bold text-primair mb-2">Overgang zonder gedoe</p>
      <p className="text-tekst/80 text-sm leading-relaxed mb-4">
        Uitgeput, overprikkeld of jezelf kwijt in de overgang? Lees wat er in je lichaam gebeurt,
        wat je zelf kunt doen en start meteen met een 4-wekenplan.
      </p>
      <Link
        href="/gratis/overgang-zonder-gedoe"
        onClick={sluit}
        className="inline-block bg-primair text-wit font-bold px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity text-sm"
      >
        Download gratis →
      </Link>
    </div>
  );
}
