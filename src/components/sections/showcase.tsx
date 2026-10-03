"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { showcase } from "@/data/content";
import { HoverMedia } from "@/components/hover-media";
import { Reveal, RevealLines } from "@/components/reveal";

export function Showcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yEven = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);
  const yOdd = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section className="py-28 md:py-40">
      <div className="container-x">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-accent" />
            <p className="overline">{showcase.overline}</p>
          </div>
        </Reveal>

        <RevealLines
          lines={showcase.statement}
          className="mt-8 max-w-5xl text-[7.5vw] leading-[0.95] md:text-[3.3vw]"
        />
      </div>

      <div
        ref={ref}
        className="container-x mt-16 grid gap-5 md:mt-24 md:grid-cols-3 md:gap-6"
      >
        {showcase.items.map((item, i) => (
          <Reveal key={item.title} delay={i}>
            <motion.article
              style={{ y: i % 2 === 0 ? yEven : yOdd }}
              className="group relative"
            >
              <HoverMedia
                poster={item.poster}
                video={item.video}
                alt={item.title}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="grain aspect-[3/4] w-full"
                imageClassName="grayscale transition-[filter] duration-700 group-hover:grayscale-0"
              />

              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />

              <div className="pointer-events-none absolute inset-x-6 bottom-6">
                <p className="text-[0.62rem] uppercase tracking-[0.22em] text-accent">
                  {item.meta}
                </p>
                <h3 className="display mt-2 text-3xl md:text-[2.1rem]">
                  {item.title}
                </h3>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
