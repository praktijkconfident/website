"use client";

import { useEffect, useState } from "react";

// Wereld Menopauze Dag is elk jaar op 18 oktober. De banner is zichtbaar
// in de week eromheen (15 t/m 21 oktober). De datum wordt in de browser
// gecontroleerd, zodat een statisch gebouwde pagina geen verouderde datum gebruikt.
function isMenopauzeWeek(date: Date) {
  return date.getMonth() === 9 && date.getDate() >= 15 && date.getDate() <= 21;
}

export default function MenopauzeBanner() {
  const [datum, setDatum] = useState<string | null>(null);

  useEffect(() => {
    const nu = new Date();
    if (!isMenopauzeWeek(nu)) return;
    // Bijv. "zondag 18 oktober 2026"; weekdag en jaar kloppen elk jaar vanzelf.
    setDatum(
      new Date(nu.getFullYear(), 9, 18).toLocaleDateString("nl-NL", {
        weekday: "long", day: "numeric", month: "long", year: "numeric",
      })
    );
  }, []);

  if (!datum) return null;

  return (
    <a
      href="/gratis/overgang-zonder-gedoe"
      className="block bg-accent text-primair text-center font-semibold px-6 py-3 hover:opacity-90 transition-opacity"
    >
      Wereld Menopauze Dag, {datum}: download het gratis e-book &ldquo;Overgang zonder gedoe&rdquo; →
    </a>
  );
}
