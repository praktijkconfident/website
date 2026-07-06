"use client";

import { useState } from "react";

export default function NieuwsbriefForm() {
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
        body: JSON.stringify({ email, website }),
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
          subject: "Nieuwe inschrijving inspiratiemails",
          from_name: "Praktijk Confident website",
          "E-mailadres": email,
        }),
      }).catch(() => {});

      setStatus("success");
      setEmail("");
      setConsent(false);
    } catch {
      setStatus("error");
      setErrorMessage("Er ging iets mis. Probeer het later opnieuw.");
    }
  };

  if (status === "success") {
    return (
      <p className="text-wit font-semibold text-center">
        Bedankt voor je inschrijving! Check binnenkort je mailbox.
      </p>
    );
  }

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
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            required
            placeholder="Jouw e-mailadres"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-5 py-3 rounded-full border-2 border-wit/40 bg-wit/10 text-wit placeholder:text-wit/70 focus:outline-none focus:border-wit focus:bg-wit/20"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-accent text-primair font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {status === "loading" ? "Bezig…" : "Inschrijven"}
          </button>
        </div>
        <label className="flex items-start gap-2 text-sm text-wit/80 text-left">
          <input
            type="checkbox"
            required
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-0.5 accent-accent"
          />
          <span>
            Ik geef toestemming om e-mails te ontvangen van Praktijk Confident. Uitschrijven kan
            altijd.
          </span>
        </label>
      </form>
      {status === "error" && (
        <p className="text-red-200 text-sm text-center mt-3">{errorMessage}</p>
      )}
    </div>
  );
}
