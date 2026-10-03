import type { Metadata } from "next";
import Image from "next/image";

import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Marquee } from "@/components/marquee";
import { CallToAction } from "@/components/sections/call-to-action";
import { about, services, site, timeline, toolbox } from "@/data/content";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Parcours, formation et savoir-faire d'Emilio Demarny, étudiant en BTS Métiers de l'Audiovisuel.",
};

export default function AProposPage() {
  return (
    <>
      <PageHero
        overline="Studio"
        titleLines={["À propos"]}
        description={`${site.role} — ${site.option}. Cadrage, montage, post-production et captation d'événements.`}
      />

      <section className="py-20 md:py-32">
        <div className="container-x grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="grain relative aspect-[3/4] overflow-hidden bg-ink-soft">
              <Image
                src={about.image}
                alt="Portrait d'Emilio Demarny"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover grayscale"
              />
            </div>
          </div>

          <div className="md:col-span-7 md:pl-10">
            <div className="space-y-5">
              {about.paragraphs.map((p, i) => (
                <Reveal key={i} delay={i}>
                  <p className="text-sm leading-relaxed text-muted md:text-[0.95rem]">
                    {p}
                  </p>
                </Reveal>
              ))}
            </div>

            <div className="mt-14 grid grid-cols-2 gap-px border border-ink-line bg-ink-line sm:grid-cols-4">
              {about.stats.map((stat) => (
                <div key={stat.label} className="bg-ink px-5 py-7">
                  <p className="display text-3xl">{stat.value}</p>
                  <p className="mt-2 text-[0.62rem] uppercase tracking-[0.18em] text-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-ink-line py-20 md:py-32">
        <div className="container-x">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-accent" />
            <p className="overline">Parcours</p>
          </div>

          <div className="mt-14 border-t border-ink-line">
            {timeline.map((item, i) => (
              <Reveal key={item.title} delay={i}>
                <article className="group grid gap-4 border-b border-ink-line py-9 md:grid-cols-12 md:gap-8">
                  <p className="text-[0.68rem] uppercase tracking-[0.2em] text-accent md:col-span-3">
                    {item.period}
                  </p>
                  <div className="md:col-span-4">
                    <h2 className="display text-2xl md:text-[1.7rem]">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-[0.68rem] uppercase tracking-[0.18em] text-muted">
                      {item.place}
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed text-muted md:col-span-5">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-accent" />
            <p className="overline">Compétences</p>
          </div>

          <div className="mt-12 grid gap-px border border-ink-line bg-ink-line md:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="bg-ink p-8 md:p-10">
                <span className="display text-xs tracking-[0.3em] text-accent">
                  {service.index}
                </span>
                <h2 className="display mt-6 text-2xl">{service.title}</h2>
                <ul className="mt-6 space-y-2">
                  {service.tags.map((tag) => (
                    <li key={tag} className="text-sm text-muted">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-y border-ink-line py-7">
        <Marquee
          items={toolbox}
          duration={34}
          className="text-xs uppercase tracking-[0.3em] text-muted"
        />
      </div>

      <CallToAction />
    </>
  );
}
