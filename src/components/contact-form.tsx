"use client";

import { useState } from "react";

import { site } from "@/data/content";

type Status = "idle" | "sending" | "sent" | "error";

const fieldClass =
  "w-full border-b border-ink-line bg-transparent py-4 text-sm text-paper outline-none transition-colors placeholder:text-muted focus:border-accent";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = (await res.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(json?.error ?? "Une erreur est survenue.");
      }

      form.reset();
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue.");
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="overline">
            Nom *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            maxLength={120}
            autoComplete="name"
            placeholder="Votre nom"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="overline">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={160}
            autoComplete="email"
            placeholder="vous@exemple.com"
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="overline">
          Sujet
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          maxLength={160}
          placeholder="Tournage, montage, stage…"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="message" className="overline">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          maxLength={4000}
          placeholder="Parlez-moi de votre projet"
          className={`${fieldClass} resize-none`}
        />
      </div>

      <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="company">Société</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col gap-5 pt-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex items-center gap-3 border border-paper/25 px-9 py-4 text-[0.7rem] uppercase tracking-[0.25em] transition-colors hover:border-paper hover:bg-paper hover:text-ink disabled:cursor-not-allowed disabled:opacity-50"
        >
          {status === "sending" ? "Envoi…" : "Envoyer"}
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>

        <p aria-live="polite" className="text-xs text-muted">
          {status === "sent" && (
            <span className="text-accent">
              Message envoyé. Je reviens vers vous rapidement.
            </span>
          )}
          {status === "error" && (
            <>
              {error}{" "}
              <a
                href={`mailto:${site.email}`}
                className="underline underline-offset-4 hover:text-paper"
              >
                Écrire directement
              </a>
            </>
          )}
        </p>
      </div>
    </form>
  );
}
