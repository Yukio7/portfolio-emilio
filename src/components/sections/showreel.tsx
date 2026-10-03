"use client";

import Image from "next/image";
import { useState } from "react";

import { showreel } from "@/data/content";
import { Marquee } from "@/components/marquee";
import { Reveal } from "@/components/reveal";

export function Showreel() {
  const [playing, setPlaying] = useState(false);
  const hasVideo = showreel.youtubeId.length > 0;
  const poster = hasVideo
    ? `https://img.youtube.com/vi/${showreel.youtubeId}/maxresdefault.jpg`
    : showreel.poster;

  return (
    <section className="relative border-y border-ink-line py-24 md:py-32">
      <Marquee
        items={["Showreel", "Cadrage", "Montage", "Étalonnage", "Son"]}
        duration={38}
        className="display text-[9vw] text-paper/[0.06] md:text-[6vw]"
      />

      <div className="container-x mt-16 md:mt-20">
        <Reveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="display text-[11vw] leading-[0.88] md:text-[5vw]">
              {showreel.title}
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              {showreel.caption}
            </p>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <div className="grain group relative mt-12 aspect-video w-full overflow-hidden bg-ink-soft">
            {playing ? (
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${showreel.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                title={showreel.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                disabled={!hasVideo}
                className="absolute inset-0 h-full w-full cursor-pointer disabled:cursor-default"
                aria-label={hasVideo ? "Lancer le showreel" : "Showreel bientôt disponible"}
              >
                <Image
                  src={poster}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 90vw"
                  className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-ink/40 transition-colors duration-500 group-hover:bg-ink/25" />
                <span className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-paper/40 backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:border-paper md:h-32 md:w-32">
                  <span className="ml-1 block h-0 w-0 border-y-[11px] border-l-[18px] border-y-transparent border-l-paper" />
                </span>
                <span className="overline absolute bottom-6 left-6 text-paper/80">
                  {hasVideo ? showreel.overline : "Showreel bientôt disponible"}
                </span>
              </button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
