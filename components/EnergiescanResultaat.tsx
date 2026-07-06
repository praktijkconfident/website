import { GEBIEDEN, TIPS, bepaalProfiel } from "@/lib/energiescan";

export default function EnergiescanResultaat({ scores }: { scores: number[] }) {
  const gemiddelde = scores.reduce((a, b) => a + b, 0) / scores.length;
  const profiel = bepaalProfiel(gemiddelde);
  const lageGebieden = GEBIEDEN.map((naam, i) => ({ naam, score: scores[i] }))
    .filter((g) => g.score < 8)
    .sort((a, b) => a.score - b.score);

  return (
    <div style={{ maxWidth: 560, margin: "0 auto", padding: "2rem 1.5rem 3rem", fontFamily: "Inter, sans-serif", color: "#2a2a2a" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400&display=swap');
        .es-cta-primair:hover { background: #3d6b55 !important; }
        .es-dienst-link:hover { background: #d4e8da !important; }
      `}</style>

      <div style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#7a9a88", marginBottom: "0.5rem", textAlign: "center" }}>
        Jouw energieprofiel
      </div>

      {/* Profielkaart */}
      <div style={{ background: "#5c8a72", color: "white", borderRadius: 16, padding: "1.75rem 1.5rem", textAlign: "center" }}>
        <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.8rem", fontWeight: 500, marginBottom: "0.75rem" }}>
          {profiel.naam}
        </div>
        <div style={{ fontSize: "0.88rem", lineHeight: 1.7, opacity: 0.9, fontWeight: 300 }}>
          {profiel.tekst}
        </div>
        <div style={{ display: "inline-block", background: "#e8d5a3", color: "#3d6b55", fontWeight: 600, fontSize: "0.85rem", borderRadius: 50, padding: "0.25rem 1rem", marginTop: "1rem" }}>
          Gemiddelde score: {gemiddelde.toFixed(1)}
        </div>
      </div>

      {/* Tips */}
      <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.3rem", fontWeight: 500, color: "#3d6b55", margin: "1.75rem 0 1rem" }}>
        {lageGebieden.length === 0
          ? "Jij scoort op alle gebieden hoog — goed bezig!"
          : `Aandacht voor ${lageGebieden.length} gebied${lageGebieden.length > 1 ? "en" : ""}`}
      </p>

      {lageGebieden.length === 0 ? (
        <p style={{ fontSize: "0.9rem", color: "#5a7a68", lineHeight: 1.7 }}>
          Jouw energie is goed in balans. Gebruik de tips hieronder om dit niveau te onderhouden en verder te verdiepen.
        </p>
      ) : (
        lageGebieden.map((g) => {
          const t = TIPS[g.naam];
          if (!t) return null;
          return (
            <div key={g.naam} style={{ background: "white", borderRadius: 14, padding: "1.25rem 1.25rem 1rem", marginBottom: "0.85rem", borderLeft: "4px solid #5c8a72" }}>
              <div style={{ fontSize: "0.72rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "#5c8a72", marginBottom: "0.3rem" }}>
                {g.naam}{" "}
                <span style={{ display: "inline-block", background: "#fef3e2", color: "#9a6b10", fontSize: "0.72rem", fontWeight: 600, borderRadius: 50, padding: "0.15rem 0.6rem", marginLeft: 6 }}>
                  score {g.score}
                </span>
              </div>
              {(["adem", "olie", "ontspanning"] as const).map((soort) => (
                <div key={soort} style={{ marginTop: "0.75rem", paddingTop: "0.6rem", borderTop: "1px solid #eef3ef" }}>
                  <div style={{ fontSize: "0.72rem", fontWeight: 600, color: "#7a9a88", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.3rem" }}>
                    {soort === "adem" ? "Ademhaling" : soort === "olie" ? "Essentiële oliën" : "Ontspanning & zelfzorg"}
                  </div>
                  <p style={{ fontSize: "0.85rem", lineHeight: 1.65, color: "#3a3a3a" }}>{t[soort]}</p>
                </div>
              ))}
            </div>
          );
        })
      )}

      {/* CTA sectie */}
      <div style={{ background: "#e8f0eb", borderRadius: 16, padding: "1.75rem 1.5rem", marginTop: "1.75rem", textAlign: "center", border: "1.5px solid #d0e4d8" }}>
        <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.4rem", fontWeight: 500, color: "#3d6b55", marginBottom: "0.5rem" }}>
          Klaar voor de volgende stap?
        </h2>
        <p style={{ fontSize: "0.87rem", color: "#5a7a68", lineHeight: 1.65, marginBottom: "1.25rem" }}>
          Samen kijken we waar jouw energie lekt en hoe je vanuit plezier en genieten weer in balans komt.
        </p>
        <a
          className="es-cta-primair"
          href="https://praktijkconfident.clientomgeving.nl/afspraak-maken"
          target="_blank"
          rel="noreferrer"
          style={{
            display: "block", background: "#5c8a72", color: "white", border: "none",
            borderRadius: 50, padding: "0.9rem 2rem", fontSize: "0.95rem",
            fontFamily: "Inter, sans-serif", fontWeight: 500, cursor: "pointer",
            textDecoration: "none", marginBottom: "1rem", transition: "background 0.2s",
          }}
        >
          Plan een gratis kennismakingsgesprek
        </a>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.6rem", marginTop: "0.5rem" }}>
          {["NEI-therapie", "Ademcoaching", "Aromatherapie"].map((dienst) => (
            <a
              key={dienst}
              className="es-dienst-link"
              href="/aanbod"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "block", background: "white", color: "#3d6b55", borderRadius: 10,
                padding: "0.7rem 0.5rem", fontSize: "0.78rem", fontWeight: 500,
                textDecoration: "none", textAlign: "center", border: "1.5px solid #c5d9cc",
                transition: "background 0.15s", lineHeight: 1.4,
              }}
            >
              {dienst}
            </a>
          ))}
        </div>
      </div>

      <a
        href="/"
        style={{
          display: "block", margin: "1.5rem auto 0", textAlign: "center",
          color: "#5c8a72", fontSize: "0.88rem", fontFamily: "Inter, sans-serif",
          textDecoration: "underline",
        }}
      >
        ← Terug naar de homepage
      </a>
    </div>
  );
}
