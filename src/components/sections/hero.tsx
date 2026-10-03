"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { hero, site } from "@/data/content";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="grain relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Image
          src={hero.poster}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <video
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={() => setVideoReady(true)}
        >
          <source src={hero.video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/30 to-ink" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="container-x relative z-10 pb-16 md:pb-24"
      >
        <div className="flex items-center gap-4">
          <span className="h-px w-10 bg-accent" />
          <p className="overline text-paper/70">{hero.kicker}</p>
        </div>

        <h1 className="display mt-6 text-[14vw] leading-[0.84] md:text-[9.5vw]">
          {hero.titleLines.map((line, i) => (
            <span key={line} className="-mt-[0.14em] block overflow-hidden pt-[0.14em]">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1.1,
                  delay: 0.15 + i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="mt-10 flex flex-col gap-8 border-t border-paper/15 pt-8 md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-md text-sm leading-relaxed text-paper/70">
            {hero.intro}
          </p>
          <div className="flex flex-col gap-5 md:items-end">
            <p className="overline text-paper/60">{site.tagline}</p>
            <Link
              href="/realisations"
              className="group inline-flex items-center gap-3 border border-paper/25 px-7 py-3.5 text-[0.7rem] uppercase tracking-[0.25em] transition-colors hover:border-paper hover:bg-paper hover:text-ink"
            >
              Voir les réalisations
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 md:block"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="overline text-[0.6rem]">Scroll</span>
          <span className="block h-10 w-px overflow-hidden bg-paper/20">
            <motion.span
              className="block h-full w-full bg-accent"
              animate={{ y: ["-100%", "100%"] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </span>
        </div>
      </motion.div>
    </section>
  );
}
