"use client";

import { useEffect, useState } from "react";

// Adventkalender 2026. Tot en met 30 november nodigt de banner uit om je aan
// te melden; van 1 t/m 24 december om het deurtje van vandaag te openen.
// Na 24 december verdwijnt de banner vanzelf. De datum wordt in de browser
// gecontroleerd, zodat een statisch gebouwde pagina geen verouderde datum gebruikt.
export function adventFase(nu: Date): "aanmelden" | "december" | null {
  const jaar = nu.getFullYear();
  const maand = nu.getMonth();
  const dag = nu.getDate();
  if (jaar !== 2026) return null;
  if (maand === 10) return "aanmelden";
  if (maand === 11 && dag <= 24) return "december";
  return null;
}

export default function AdventBanner() {
  const [fase, setFase] = useState<ReturnType<typeof adventFase>>(null);

  useEffect(() => {
    setFase(adventFase(new Date()));
  }, []);

  if (!fase) return null;

  return (
    <a
      href="/adventkalender"
      className="block bg-accent text-primair text-center font-semibold px-6 py-3 hover:opacity-90 transition-opacity"
    >
      {fase === "aanmelden"
        ? "Nieuw: de gratis adventkalender “24 Momenten van Rust”. Meld je nu aan →"
        : "Adventkalender: open vandaag je deurtje →"}
    </a>
  );
}
