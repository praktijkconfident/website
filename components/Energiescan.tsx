"use client";

import { useState, useRef, useEffect } from "react";
import { GEBIEDEN } from "@/lib/energiescan";

function getScoreButtonStyle(score: number, selected: number | null): React.CSSProperties {
  const isSelected = selected === score;
  if (!isSelected) {
    return {
      width: 26, height: 26, borderRadius: 6,
      border: "1.5px solid #c5d9cc", background: "white",
      fontSize: "0.72rem", fontWeight: 500, cursor: "pointer",
      color: "#6a8a78", display: "flex", alignItems: "center",
      justifyContent: "center", fontFamily: "Inter, sans-serif",
      transition: "all 0.15s",
    };
  }
  if (score >= 8) {
    return {
      width: 26, height: 26, borderRadius: 6,
      border: "1.5px solid #c9a84c", background: "#c9a84c",
      fontSize: "0.72rem", fontWeight: 600, cursor: "pointer",
      color: "white", display: "flex", alignItems: "center",
      justifyContent: "center", fontFamily: "Inter, sans-serif",
      transform: "scale(1.1)", boxShadow: "0 0 0 2px rgba(201,168,76,0.25)",
      transition: "all 0.15s",
    };
  }
  return {
    width: 26, height: 26, borderRadius: 6,
    border: "1.5px solid #5c8a72", background: "#5c8a72",
    fontSize: "0.72rem", fontWeight: 600, cursor: "pointer",
    color: "white", display: "flex", alignItems: "center",
    justifyContent: "center", fontFamily: "Inter, sans-serif",
    transform: "scale(1.1)", boxShadow: "0 0 0 2px rgba(92,138,114,0.25)",
    transition: "all 0.15s",
  };
}

function Spinweb({ scores }: { scores: (number | null)[] }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const cx = 150, cy = 150, r = 120, n = 10;
    ctx.clearRect(0, 0, 300, 300);

    for (let ring = 1; ring <= 10; ring++) {
      const rr = (r * ring) / 10;
      ctx.beginPath();
      for (let i = 0; i < n; i++) {
        const angle = (i / n) * Math.PI * 2 - Math.PI / 2;
        const x = cx + rr * Math.cos(angle);
        const y = cy + rr * Math.sin(angle);
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.strokeStyle = ring === 10 ? "#5c8a72" : "#c5d9cc";
      ctx.lineWidth = ring === 10 ? 1.5 : 0.8;
      ctx.stroke();
    }

    for (let i = 0; i < n; i++) {
      const angle = (i / n) * Math.PI * 2 - Math.PI / 2;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + r * Math.cos(angle), cy + r * Math.sin(angle));
      ctx.strokeStyle = "#c5d9cc";
      ctx.lineWidth = 0.8;
      ctx.stroke();
    }

    if (scores.some((s) => s !== null)) {
      ctx.beginPath();
      for (let i = 0; i < n; i++) {
        const angle = (i / n) * Math.PI * 2 - Math.PI / 2;
        const rr = (r * (scores[i] ?? 0)) / 10;
        const x = cx + rr * Math.cos(angle);
        const y = cy + rr * Math.sin(angle);
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.fillStyle = "rgba(92,138,114,0.25)";
      ctx.fill();
      ctx.strokeStyle = "#5c8a72";
      ctx.lineWidth = 2;
      ctx.stroke();

      for (let i = 0; i < n; i++) {
        if (scores[i] !== null) {
          const angle = (i / n) * Math.PI * 2 - Math.PI / 2;
          const rr = (r * scores[i]!) / 10;
          ctx.beginPath();
          ctx.arc(cx + rr * Math.cos(angle), cy + rr * Math.sin(angle), 3.5, 0, Math.PI * 2);
          ctx.fillStyle = scores[i]! >= 8 ? "#c9a84c" : "#5c8a72";
          ctx.fill();
        }
      }
    }

    ctx.font = "500 9px Inter, sans-serif";
    ctx.fillStyle = "#3d6b55";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    for (let i = 0; i < n; i++) {
      const angle = (i / n) * Math.PI * 2 - Math.PI / 2;
      const lr = r + 20;
      ctx.fillText(
        GEBIEDEN[i].split(" ")[0],
        cx + lr * Math.cos(angle),
        cy + lr * Math.sin(angle)
      );
    }
  }, [scores]);

  return <canvas ref={canvasRef} width={300} height={300} style={{ maxWidth: "100%", height: "auto" }} />;
}

export default function Energiescan() {
  const [scores, setScores] = useState<(number | null)[]>(new Array(10).fill(null));

  const setScore = (index: number, score: number) => {
    const nieuw = [...scores];
    nieuw[index] = score;
    setScores(nieuw);
  };

  const allesIngevuld = scores.every((s) => s !== null);
  const aantalIngevuld = scores.filter((s) => s !== null).length;

  const bekijkResultaten = () => {
    const params = new URLSearchParams();
    scores.forEach((s) => params.append("s", String(s)));
    window.open(`/energiescan-resultaat?${params.toString()}`, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Cormorant+Garamond:ital,wght@0,500;1,400&display=swap');
        .es-score-btn:hover {
          background: #e8f0eb !important;
          border-color: #5c8a72 !important;
          color: #3d6b55 !important;
        }
        .es-bekijk-btn:hover:not(:disabled) { background: #3d6b55 !important; }
        .es-gebieden { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; }
        @media (max-width: 480px) {
          .es-gebieden { grid-template-columns: 1fr; }
          .es-score-btn { width: 30px !important; height: 30px !important; }
        }
      `}</style>

      <div style={{ fontFamily: "Inter, sans-serif", background: "#e8f0eb", color: "#2a2a2a" }}>

        {/* Header */}
        <div style={{ background: "#5c8a72", color: "white", textAlign: "center", padding: "2.5rem 1.5rem 2rem" }}>
          <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2.2rem", fontWeight: 500, letterSpacing: "0.02em", marginBottom: "0.4rem" }}>
            Energiescan
          </h2>
          <p style={{ fontSize: "0.9rem", opacity: 0.85, fontWeight: 300, maxWidth: 400, margin: "0 auto", lineHeight: 1.6 }}>
            Ontdek waar jouw energie stroomt en waar ze vastloopt
          </p>
        </div>

        <div style={{ maxWidth: 560, margin: "2rem auto 0", padding: "0 1.5rem", textAlign: "center" }}>
          <p style={{ fontSize: "0.92rem", color: "#4a6058", lineHeight: 1.7 }}>
            Geef elk levensgebied een score van 1 tot 10.<br />Hoe tevreden ben jij hier nu mee?
          </p>
        </div>

        <div style={{ display: "flex", justifyContent: "center", padding: "1.5rem 1rem 0" }}>
          <Spinweb scores={scores} />
        </div>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "0.75rem", fontSize: "0.75rem", color: "#5a7a68" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <div style={{ width: 14, height: 14, borderRadius: 4, background: "#5c8a72" }} />
            <span>Score 1–7</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <div style={{ width: 14, height: 14, borderRadius: 4, background: "#c9a84c" }} />
            <span>Score 8–10</span>
          </div>
        </div>

        {/* Gebieden grid */}
        <div className="es-gebieden" style={{ maxWidth: 560, margin: "1.5rem auto 0", padding: "0 1.5rem" }}>
          {GEBIEDEN.map((naam, i) => (
            <div
              key={naam}
              style={{
                background: "white", borderRadius: 12, padding: "0.75rem 1rem",
                display: "flex", flexDirection: "column", gap: "0.4rem",
                border: scores[i] !== null ? "1.5px solid #5c8a72" : "1.5px solid transparent",
                transition: "border 0.2s",
              }}
            >
              <div style={{ fontSize: "0.78rem", fontWeight: 500, color: "#3d6b55", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                {naam}
              </div>
              <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                {Array.from({ length: 10 }, (_, j) => j + 1).map((s) => (
                  <button
                    key={s}
                    className="es-score-btn"
                    onClick={() => setScore(i, s)}
                    style={getScoreButtonStyle(s, scores[i])}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ maxWidth: 560, margin: "1.5rem auto 0", padding: "0 1.5rem 2rem", textAlign: "center" }}>
          <button
            className="es-bekijk-btn"
            disabled={!allesIngevuld}
            onClick={bekijkResultaten}
            style={{
              background: "#5c8a72", color: "white", border: "none", borderRadius: 50,
              padding: "0.85rem 2.5rem", fontSize: "0.95rem", fontFamily: "Inter, sans-serif",
              fontWeight: 500, cursor: allesIngevuld ? "pointer" : "not-allowed",
              opacity: allesIngevuld ? 1 : 0.4, transition: "background 0.2s",
            }}
          >
            Bekijk mijn energieprofiel ↗
          </button>
          <p style={{ fontSize: "0.8rem", color: "#7a9a88", marginTop: "0.6rem" }}>
            {allesIngevuld ? "Alles ingevuld — opent in een nieuw tabblad" : `${aantalIngevuld} van 10 ingevuld`}
          </p>
        </div>
      </div>
    </>
  );
}
