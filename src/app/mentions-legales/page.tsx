import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { site } from "@/data/content";

export const metadata: Metadata = {
  title: "Mentions légales",
  robots: { index: false, follow: true },
};

const sections = [
  {
    title: "Éditeur du site",
    body: `Ce site est édité par ${site.name}, ${site.role}. Contact : ${site.email}.`,
  },
  {
    title: "Hébergement",
    body: "Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis — vercel.com.",
  },
  {
    title: "Propriété intellectuelle",
    body: "L'ensemble des contenus présents sur ce site (images, vidéos, textes, identité visuelle) est la propriété exclusive de leur auteur. Toute reproduction, représentation ou diffusion, totale ou partielle, sans autorisation écrite préalable est interdite.",
  },
  {
    title: "Données personnelles",
    body: "Les informations transmises via le formulaire de contact sont utilisées uniquement pour répondre aux demandes et ne sont ni revendues ni transmises à des tiers. Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données en écrivant à l'adresse de contact.",
  },
  {
    title: "Cookies",
    body: "Ce site ne dépose aucun cookie publicitaire ni traceur à des fins marketing. Les lecteurs vidéo externes peuvent déposer leurs propres cookies lors de la lecture d'une vidéo.",
  },
];

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHero overline="Informations" titleLines={["Mentions", "légales"]} />

      <section className="py-20 md:py-32">
        <div className="container-x max-w-3xl space-y-12">
          {sections.map((section) => (
            <article key={section.title}>
              <h2 className="display text-2xl md:text-3xl">{section.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {section.body}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
