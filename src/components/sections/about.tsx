"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { about } from "@/data/content";
import { Reveal, RevealLines } from "@/components/reveal";

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section className="relative py-28 md:py-40">
      <div className="container-x grid gap-16 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-5">
          <div
            ref={ref}
            className="grain relative aspect-[3/4] overflow-hidden bg-ink-soft"
          >
            <motion.div style={{ y }} className="absolute -inset-y-[10%] inset-x-0">
              <Image
                src={about.image}
                alt="Emilio Demarny en tournage"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover grayscale transition-all duration-700 hover:grayscale-0"
              />
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col justify-center md:col-span-7 md:pl-10">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-accent" />
              <p className="overline">{about.overline}</p>
            </div>
          </Reveal>

          <RevealLines
            lines={about.title}
            className="mt-7 text-[11vw] leading-[0.86] md:text-[4.2vw]"
          />

          <div className="mt-10 space-y-5">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i + 1}>
                <p className="max-w-xl text-sm leading-relaxed text-muted md:text-[0.95rem]">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={4}>
            <Link
              href="/a-propos"
              className="group mt-10 inline-flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.25em]"
            >
              <span className="border-b border-paper/30 pb-1 transition-colors group-hover:border-accent">
                En savoir plus
              </span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </Reveal>

          <div className="mt-16 grid grid-cols-2 gap-px border border-ink-line bg-ink-line sm:grid-cols-4">
            {about.stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i}>
                <div className="h-full bg-ink px-5 py-7">
                  <p className="display text-3xl md:text-4xl">{stat.value}</p>
                  <p className="mt-2 text-[0.65rem] uppercase tracking-[0.18em] text-muted">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
