"use client";

import { FormEvent, useState } from "react";

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message })
      });

      const data = (await response.json()) as { error?: string; ok?: boolean };
      if (!response.ok) {
        setStatus("error");
        setStatusMessage(data.error ?? "Failed to send message.");
        return;
      }

      setStatus("success");
      setStatusMessage("Raven delivered successfully.");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
      setStatusMessage("Network error. Please try again.");
    }
  };

  return (
    <footer id="contact" className="relative mt-20 border-t border-zinc-800 bg-black/65 px-6 py-14">
      <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-2">
        <div>
          <p className="medieval-title text-lg">Send a Raven</p>
          <p className="mt-2 text-zinc-300">
            Write your name, email, and message. The raven will open your mail client and deliver it directly.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-600 text-zinc-200 transition hover:border-gold hover:text-gold"
              href="https://www.linkedin.com/in/krishna-dubey-40a35427b/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.55A1.95 1.95 0 0 0 5.2 3a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 1.96-1.97ZM20 13.6c0-3.47-1.86-5.1-4.35-5.1a3.77 3.77 0 0 0-3.4 1.87V8.5H8.88V20h3.37v-6.04c0-1.6.3-3.15 2.28-3.15 1.95 0 1.98 1.83 1.98 3.25V20H20v-6.4Z" />
              </svg>
            </a>
            <a
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-600 text-zinc-200 transition hover:border-gold hover:text-gold"
              href="https://github.com/krishnad03"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .5a12 12 0 0 0-3.8 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.42-4.04-1.42-.54-1.38-1.34-1.75-1.34-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.25 1.84 1.25 1.07 1.83 2.81 1.3 3.49 1 .11-.79.41-1.31.74-1.61-2.67-.3-5.47-1.34-5.47-5.97 0-1.32.47-2.39 1.24-3.24-.12-.31-.54-1.54.12-3.2 0 0 1-.32 3.3 1.24A11.4 11.4 0 0 1 12 6.6c1.02.01 2.06.14 3.02.42 2.29-1.56 3.29-1.24 3.29-1.24.66 1.66.24 2.89.12 3.2.77.85 1.24 1.92 1.24 3.24 0 4.64-2.81 5.67-5.49 5.96.43.38.82 1.11.82 2.25v3.34c0 .32.22.69.83.58A12 12 0 0 0 12 .5Z" />
              </svg>
            </a>
          </div>
          <a
            className="mt-6 inline-block rounded border border-gold/60 px-4 py-2 font-display uppercase tracking-[0.1em] text-gold transition hover:bg-gold/10"
            href="/assets/krishna-resume.docx"
            download
          >
            Download the Royal Decree
          </a>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3 rounded-xl border border-zinc-700 bg-black/40 p-5">
          <input
            className="w-full rounded border border-zinc-600 bg-zinc-950/80 px-3 py-2 text-sm text-zinc-100 outline-none transition focus:border-gold"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            className="w-full rounded border border-zinc-600 bg-zinc-950/80 px-3 py-2 text-sm text-zinc-100 outline-none transition focus:border-gold"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            className="h-32 w-full rounded border border-zinc-600 bg-zinc-950/80 px-3 py-2 text-sm text-zinc-100 outline-none transition focus:border-gold"
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="rounded border border-ember/70 bg-blood/35 px-5 py-2 text-xs uppercase tracking-[0.14em] text-zinc-100 transition hover:bg-blood/50"
          >
            {status === "sending" ? "Sending..." : "Send the Raven"}
          </button>
          {status !== "idle" ? (
            <p className={`text-sm ${status === "success" ? "text-emerald-400" : "text-red-400"}`}>{statusMessage}</p>
          ) : null}
        </form>
      </div>
    </footer>
  );
}
