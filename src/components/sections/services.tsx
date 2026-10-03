import Image from "next/image";

import { services } from "@/data/content";
import { Reveal, RevealLines } from "@/components/reveal";

export function Services() {
  return (
    <section className="py-28 md:py-40">
      <div className="container-x">
        <div className="flex items-center gap-4">
          <span className="h-px w-10 bg-accent" />
          <p className="overline">Savoir-faire</p>
        </div>

        <RevealLines
          lines={["De la captation", "à la livraison"]}
          className="mt-7 text-[12vw] leading-[0.88] md:text-[5.5vw]"
        />

        <div className="mt-16 grid gap-px border border-ink-line bg-ink-line md:mt-24 md:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i}>
              <article className="group relative h-full overflow-hidden bg-ink p-8 md:p-10">
                <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="scale-110 object-cover grayscale transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-100"
                  />
                  <span className="absolute inset-0 bg-ink/82" />
                </div>

                <div className="relative flex h-full flex-col">
                  <span className="display text-xs tracking-[0.3em] text-accent">
                    {service.index}
                  </span>
                  <h3 className="display mt-8 text-3xl md:text-[2.2rem]">
                    {service.title}
                  </h3>
                  <p className="mt-5 flex-1 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                  <ul className="mt-8 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <li
                        key={tag}
                        className="border border-ink-line px-3 py-1.5 text-[0.62rem] uppercase tracking-[0.15em] text-muted transition-colors group-hover:border-paper/25 group-hover:text-paper/80"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
