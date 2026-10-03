"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const variants: Variants = {
  hidden: { y: 36, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      custom={delay}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}

/** Titre display animé ligne par ligne. */
const lineVariants: Variants = {
  hidden: { y: "110%" },
  visible: (i: number) => ({
    y: 0,
    transition: { duration: 0.9, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function RevealLines({
  lines,
  className = "",
}: {
  lines: readonly string[];
  className?: string;
}) {
  // La détection reste sur le titre : les lignes sont clippées et ne seraient
  // jamais considérées comme visibles par l'IntersectionObserver.
  return (
    <motion.h2
      className={`display ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {lines.map((line, i) => (
        <span key={line} className="-mt-[0.14em] block overflow-hidden pt-[0.14em]">
          <motion.span className="block" custom={i} variants={lineVariants}>
            {line}
          </motion.span>
        </span>
      ))}
    </motion.h2>
  );
}
