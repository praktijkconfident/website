"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import EnergiescanResultaat from "@/components/EnergiescanResultaat";
import { GEBIEDEN } from "@/lib/energiescan";

function Resultaat() {
  const searchParams = useSearchParams();
  const scores = searchParams.getAll("s").map(Number);
  const geldig = scores.length === GEBIEDEN.length && scores.every((s) => Number.isInteger(s) && s >= 1 && s <= 10);

  if (!geldig) {
    return (
      <div style={{ maxWidth: 480, margin: "0 auto", padding: "4rem 1.5rem", textAlign: "center", fontFamily: "Inter, sans-serif" }}>
        <p style={{ color: "#5a7a68", lineHeight: 1.7 }}>
          We konden geen energieprofiel vinden. Vul de energiescan opnieuw in op de homepage.
        </p>
        <a href="/" style={{ color: "#5c8a72", textDecoration: "underline" }}>← Terug naar de homepage</a>
      </div>
    );
  }

  return <EnergiescanResultaat scores={scores} />;
}

export default function EnergiescanResultaatPage() {
  return (
    <Suspense>
      <Resultaat />
    </Suspense>
  );
}
