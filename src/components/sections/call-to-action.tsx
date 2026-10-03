import Link from "next/link";

import { site } from "@/data/content";
import { Reveal, RevealLines } from "@/components/reveal";

export function CallToAction() {
  return (
    <section className="relative overflow-hidden py-32 md:py-48">
      <div className="container-x text-center">
        <Reveal>
          <p className="overline">Un projet en tête ?</p>
        </Reveal>

        <RevealLines
          lines={["Parlons-en", "ensemble"]}
          className="mt-8 text-[15vw] leading-[0.84] md:text-[9vw]"
        />

        <Reveal delay={2}>
          <div className="mt-14 flex flex-col items-center gap-8">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 border border-paper/25 px-10 py-4 text-[0.7rem] uppercase tracking-[0.25em] transition-colors hover:border-paper hover:bg-paper hover:text-ink"
            >
              Me contacter
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
            <a
              href={`mailto:${site.email}`}
              className="text-sm text-muted transition-colors hover:text-paper"
            >
              {site.email}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
