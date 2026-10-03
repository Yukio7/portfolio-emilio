import Link from "next/link";

import { projects } from "@/data/content";
import { ProjectGrid } from "@/components/project-grid";
import { Reveal, RevealLines } from "@/components/reveal";

export function SelectedWork() {
  return (
    <section className="border-t border-ink-line py-28 md:py-40">
      <div className="container-x">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-accent" />
              <p className="overline">Sélection</p>
            </div>
            <RevealLines
              lines={["Réalisations"]}
              className="mt-7 text-[13vw] leading-[0.88] md:text-[6vw]"
            />
          </div>
          <Reveal delay={1}>
            <Link
              href="/realisations"
              className="group inline-flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.25em] whitespace-nowrap"
            >
              <span className="border-b border-paper/30 pb-1 transition-colors group-hover:border-accent">
                Tout voir
              </span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 md:mt-20">
          <ProjectGrid items={projects.slice(0, 6)} />
        </div>
      </div>
    </section>
  );
}
