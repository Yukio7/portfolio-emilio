import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { ProjectGrid } from "@/components/project-grid";
import { CallToAction } from "@/components/sections/call-to-action";
import { projects } from "@/data/content";

export const metadata: Metadata = {
  title: "Réalisations",
  description:
    "Courts métrages, captations, clips et films de marque réalisés par Emilio Demarny.",
};

export default function RealisationsPage() {
  const categories = Array.from(new Set(projects.map((p) => p.category)));

  return (
    <>
      <PageHero
        overline="Portfolio"
        titleLines={["Réalisations"]}
        description="Une sélection de projets tournés et montés entre les cours, les stages et les collaborations freelance. Chaque film a sa propre grammaire visuelle."
      />

      <section className="py-20 md:py-28">
        <div className="container-x">
          <ul className="mb-14 flex flex-wrap gap-x-6 gap-y-3">
            {categories.map((category) => (
              <li
                key={category}
                className="text-[0.65rem] uppercase tracking-[0.2em] text-muted"
              >
                {category}
              </li>
            ))}
          </ul>

          <ProjectGrid items={projects} />
        </div>
      </section>

      <CallToAction />
    </>
  );
}
