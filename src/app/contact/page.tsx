import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/data/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Emilio Demarny pour un tournage, un montage, un stage ou une alternance en audiovisuel.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        overline="Contact"
        titleLines={["Parlons", "de votre projet"]}
        description="Tournage, montage, captation d'événement, stage ou alternance : écrivez-moi, je réponds sous 48h."
      />

      <section className="py-20 md:py-32">
        <div className="container-x grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 className="overline">Coordonnées</h2>
            <ul className="mt-7 space-y-4">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-sm text-paper/85 transition-colors hover:text-accent"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="text-sm text-paper/85 transition-colors hover:text-accent"
                >
                  {site.phone}
                </a>
              </li>
              <li className="text-sm text-muted">{site.location}</li>
            </ul>

            <h2 className="overline mt-12">Réseaux</h2>
            <ul className="mt-7 space-y-4">
              {site.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-paper/85 transition-colors hover:text-accent"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>

            <h2 className="overline mt-12">Disponibilité</h2>
            <p className="mt-7 max-w-xs text-sm leading-relaxed text-muted">
              Ouvert aux stages, à l&apos;alternance et aux missions freelance en
              cadrage et post-production.
            </p>
          </div>

          <div className="relative md:col-span-8 md:pl-10">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
