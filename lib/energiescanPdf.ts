import { GEBIEDEN, TIPS, bepaalProfiel } from "@/lib/energiescan";

// Huisstijlkleuren
const GROEN: [number, number, number] = [92, 138, 114]; // #5c8a72
const DONKERGROEN: [number, number, number] = [61, 107, 85]; // #3d6b55
const GOUD: [number, number, number] = [232, 213, 163]; // #e8d5a3
const LICHTGROEN: [number, number, number] = [232, 240, 235]; // #e8f0eb
const GRIJSGROEN: [number, number, number] = [122, 154, 136]; // #7a9a88
const TEKST: [number, number, number] = [58, 58, 58];

const BOEK_URL = "https://praktijkconfident.clientomgeving.nl/afspraak-maken";

/** Maakt een PDF van de energiescan-uitslag en start de download. */
export async function downloadEnergiescanPdf(scores: number[]) {
  const { jsPDF } = await import("jspdf");
  const doc = new jsPDF({ unit: "mm", format: "a4" });

  const W = 210;
  const H = 297;
  const M = 20; // marge
  const B = W - 2 * M; // tekstbreedte
  let y = M;

  const gemiddelde = scores.reduce((a, b) => a + b, 0) / scores.length;
  const profiel = bepaalProfiel(gemiddelde);
  const lageGebieden = GEBIEDEN.map((naam, i) => ({ naam, score: scores[i] }))
    .filter((g) => g.score < 8)
    .sort((a, b) => a.score - b.score);

  const ruimte = (nodig: number) => {
    if (y + nodig > H - 18) {
      doc.addPage();
      y = M;
    }
  };

  // ---------- Kop ----------
  doc.setFillColor(...GROEN);
  doc.rect(0, 0, W, 34, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("times", "normal");
  doc.setFontSize(24);
  doc.text("Jouw energieprofiel", M, 18);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  const datum = new Date().toLocaleDateString("nl-NL", { day: "numeric", month: "long", year: "numeric" });
  doc.text(`Energiescan Praktijk Confident  |  ${datum}`, M, 26);
  y = 46;

  // ---------- Webdiagram ----------
  const cx = W / 2;
  const cy = y + 42;
  const R = 34;
  const n = GEBIEDEN.length;
  const punt = (i: number, r: number) => {
    const hoek = -Math.PI / 2 + (2 * Math.PI * i) / n;
    return [cx + r * Math.cos(hoek), cy + r * Math.sin(hoek)];
  };

  doc.setLineWidth(0.2);
  doc.setDrawColor(208, 228, 216);
  for (const ring of [2, 4, 6, 8, 10]) {
    for (let i = 0; i < n; i++) {
      const [x1, y1] = punt(i, (R * ring) / 10);
      const [x2, y2] = punt((i + 1) % n, (R * ring) / 10);
      doc.line(x1, y1, x2, y2);
    }
  }
  for (let i = 0; i < n; i++) {
    const [x, yy] = punt(i, R);
    doc.line(cx, cy, x, yy);
  }

  // gevulde scorevorm
  const vorm = scores.map((s, i) => punt(i, (R * s) / 10));
  const lijnen = vorm.slice(1).map(([x, yy], i) => [x - vorm[i][0], yy - vorm[i][1]]);
  lijnen.push([vorm[0][0] - vorm[n - 1][0], vorm[0][1] - vorm[n - 1][1]]);
  doc.setFillColor(...GOUD);
  doc.setDrawColor(...GROEN);
  doc.setLineWidth(0.6);
  doc.lines(lijnen, vorm[0][0], vorm[0][1], [1, 1], "FD", true);
  doc.setFillColor(...GROEN);
  vorm.forEach(([x, yy]) => doc.circle(x, yy, 0.9, "F"));

  // labels
  doc.setFontSize(8.5);
  GEBIEDEN.forEach((naam, i) => {
    const [x, yy] = punt(i, R + 6);
    const uitlijning = Math.abs(x - cx) < 2 ? "center" : x > cx ? "left" : "right";
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...DONKERGROEN);
    doc.text(`${naam} (${scores[i]})`, x, yy + 1, { align: uitlijning });
  });
  y = cy + R + 16;

  // ---------- Profielkaart ----------
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  const profielRegels = doc.splitTextToSize(profiel.tekst, B - 16);
  const kaartH = 22 + profielRegels.length * 5 + 12;
  ruimte(kaartH);
  doc.setFillColor(...GROEN);
  doc.roundedRect(M, y, B, kaartH, 4, 4, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("times", "normal");
  doc.setFontSize(18);
  doc.text(profiel.naam, W / 2, y + 12, { align: "center" });
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text(profielRegels, W / 2, y + 20, { align: "center", lineHeightFactor: 1.45 });
  const badgeY = y + 20 + profielRegels.length * 5 + 2;
  doc.setFillColor(...GOUD);
  doc.roundedRect(W / 2 - 25, badgeY, 50, 7, 3.5, 3.5, "F");
  doc.setTextColor(...DONKERGROEN);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.text(`Gemiddelde score: ${gemiddelde.toFixed(1)}`, W / 2, badgeY + 4.8, { align: "center" });
  y += kaartH + 12;

  // ---------- Tips ----------
  ruimte(20);
  doc.setFont("times", "normal");
  doc.setFontSize(16);
  doc.setTextColor(...DONKERGROEN);
  const tipsTitel =
    lageGebieden.length === 0
      ? "Jij scoort op alle gebieden hoog. Goed bezig!"
      : `Aandacht voor ${lageGebieden.length} gebied${lageGebieden.length > 1 ? "en" : ""}`;
  doc.text(tipsTitel, M, y);
  y += 8;

  if (lageGebieden.length === 0) {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(...TEKST);
    const r = doc.splitTextToSize(
      "Jouw energie is goed in balans. Gebruik de tips in de scan om dit niveau te onderhouden en verder te verdiepen.",
      B
    );
    doc.text(r, M, y, { lineHeightFactor: 1.45 });
    y += r.length * 5 + 6;
  }

  const soorten = [
    ["adem", "Ademhaling"],
    ["olie", "Essentiële oliën"],
    ["ontspanning", "Ontspanning & zelfzorg"],
  ] as const;

  for (const g of lageGebieden) {
    const t = TIPS[g.naam];
    if (!t) continue;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    const blokken = soorten.map(([sleutel, label]) => ({ label, regels: doc.splitTextToSize(t[sleutel], B - 12) as string[] }));
    const blokH = 12 + blokken.reduce((som, b) => som + 6 + b.regels.length * 4.6 + 3, 0);
    ruimte(blokH);

    doc.setFillColor(...GROEN);
    doc.rect(M, y, 1.2, blokH - 2, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(...GROEN);
    doc.text(g.naam.toUpperCase(), M + 6, y + 5);
    const naamB = doc.getTextWidth(g.naam.toUpperCase());
    doc.setFillColor(254, 243, 226);
    doc.roundedRect(M + 9 + naamB, y + 1.2, 16, 5.2, 2.6, 2.6, "F");
    doc.setFontSize(8);
    doc.setTextColor(154, 107, 16);
    doc.text(`score ${g.score}`, M + 17 + naamB, y + 4.8, { align: "center" });
    let by = y + 12;

    for (const b of blokken) {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(8);
      doc.setTextColor(...GRIJSGROEN);
      doc.text(b.label.toUpperCase(), M + 6, by);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9.5);
      doc.setTextColor(...TEKST);
      doc.text(b.regels, M + 6, by + 5, { lineHeightFactor: 1.4 });
      by += 6 + b.regels.length * 4.6 + 3;
    }
    y += blokH + 4;
  }

  // ---------- Volgende stap ----------
  ruimte(46);
  y += 2;
  doc.setFillColor(...LICHTGROEN);
  doc.roundedRect(M, y, B, 42, 4, 4, "F");
  doc.setFont("times", "normal");
  doc.setFontSize(16);
  doc.setTextColor(...DONKERGROEN);
  doc.text("Klaar voor de volgende stap?", W / 2, y + 10, { align: "center" });
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(90, 122, 104);
  doc.text(
    doc.splitTextToSize("Samen kijken we waar jouw energie lekt en hoe je vanuit plezier en genieten weer in balans komt.", B - 30),
    W / 2,
    y + 17,
    { align: "center", lineHeightFactor: 1.4 }
  );
  doc.setFillColor(...GROEN);
  doc.roundedRect(W / 2 - 42, y + 27, 84, 9, 4.5, 4.5, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.text("Plan een gratis kennismakingsgesprek", W / 2, y + 32.8, { align: "center" });
  doc.link(W / 2 - 42, y + 27, 84, 9, { url: BOEK_URL });

  // ---------- Voettekst op elke pagina ----------
  const paginas = doc.getNumberOfPages();
  for (let p = 1; p <= paginas; p++) {
    doc.setPage(p);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(...GRIJSGROEN);
    doc.text("Praktijk Confident  |  praktijkconfident.nl", M, H - 10);
    doc.textWithLink("praktijkconfident.nl", M + doc.getTextWidth("Praktijk Confident  |  "), H - 10, {
      url: "https://praktijkconfident.nl",
    });
    doc.text(`${p} / ${paginas}`, W - M, H - 10, { align: "right" });
  }

  doc.save("mijn-energieprofiel.pdf");
}
