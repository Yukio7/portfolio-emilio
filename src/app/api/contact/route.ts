import { NextResponse } from "next/server";

import { site } from "@/data/content";

const MAX = { name: 120, email: 160, subject: 160, message: 4000 };

function escapeHtml(value: string) {
  return value.replace(
    /[&<>"']/g,
    (c) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[c] as string,
  );
}

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  const body = payload as Record<string, unknown>;

  // Honeypot : rempli uniquement par les bots.
  if (typeof body.company === "string" && body.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const subject = String(body.subject ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Merci de remplir les champs obligatoires." },
      { status: 400 },
    );
  }

  if (
    name.length > MAX.name ||
    email.length > MAX.email ||
    subject.length > MAX.subject ||
    message.length > MAX.message ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)
  ) {
    return NextResponse.json(
      { error: "Certains champs sont invalides." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? site.email;
  const from = process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";

  if (!apiKey) {
    return NextResponse.json(
      { error: "Le formulaire n'est pas encore configuré." },
      { status: 503 },
    );
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: subject ? `[Portfolio] ${subject}` : `[Portfolio] Message de ${name}`,
      html: `
        <h2>Nouveau message depuis le portfolio</h2>
        <p><strong>Nom :</strong> ${escapeHtml(name)}</p>
        <p><strong>Email :</strong> ${escapeHtml(email)}</p>
        <p><strong>Sujet :</strong> ${escapeHtml(subject || "—")}</p>
        <p><strong>Message :</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "L'envoi a échoué, réessayez plus tard." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
