"use client";

import { useState } from "react";

export default function EbookForm() {
  const [naam, setNaam] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/nieuwsbrief", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, naam, website, lijst: "ebook" }),
      });
      const data = await res.json();

      if (!res.ok || !data.ok) {
        setStatus("error");
        setErrorMessage(data.error || "Er ging iets mis. Probeer het later opnieuw.");
        return;
      }

      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          subject: "Nieuwe aanvraag e-book Overgang zonder gedoe",
          from_name: "Praktijk Confident website",
          Voornaam: naam,
          "E-mailadres": email,
        }),
      }).catch(() => {});

      setStatus("success");
      setNaam("");
      setEmail("");
      setConsent(false);
    } catch {
      setStatus("error");
      setErrorMessage("Er ging iets mis. Probeer het later opnieuw.");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center">
        <p className="text-wit font-semibold text-lg mb-2">Dank je wel!</p>
        <p className="text-wit/80">
          Het e-book is onderweg naar je mailbox. Niets ontvangen? Kijk ook even in je spam of
          promoties.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full px-5 py-3 rounded-full border-2 border-wit/40 bg-wit/10 text-wit placeholder:text-wit/70 focus:outline-none focus:border-wit focus:bg-wit/20";

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          name="website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
        />
        <label className="sr-only" htmlFor="ebook-naam">Voornaam</label>
        <input
          id="ebook-naam"
          type="text"
          required
          autoComplete="given-name"
          placeholder="Voornaam"
          value={naam}
          onChange={(e) => setNaam(e.target.value)}
          className={inputClass}
        />
        <label className="sr-only" htmlFor="ebook-email">E-mailadres</label>
        <input
          id="ebook-email"
          type="email"
          required
          autoComplete="email"
          placeholder="E-mailadres"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
        />
        <label className="flex items-start gap-2 text-sm text-wit/80 text-left mt-1">
          <input
            type="checkbox"
            required
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-1 accent-accent"
          />
          <span>
            Ik geef toestemming om e-mails te ontvangen van Praktijk Confident. Uitschrijven kan
            altijd.{" "}
            <a
              href="/privacy_verklaring_Praktijk-Confident.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-wit"
            >
              Privacyverklaring
            </a>
          </span>
        </label>
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-accent text-primair font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity disabled:opacity-50 mt-2"
        >
          {status === "loading" ? "Bezig…" : "Stuur me het gratis e-book"}
        </button>
      </form>
      {status === "error" && (
        <p className="text-red-200 text-sm text-center mt-3">{errorMessage}</p>
      )}
      <p className="text-wit/70 text-sm text-center mt-4">
        Je ontvangt het e-book direct in je mailbox. Geen spam, uitschrijven kan altijd.
      </p>
    </div>
  );
}
