"use client";

import Image from "next/image";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/**
 * Visuel animé : vidéo en boucle au survol (desktop) ou dès l'entrée en vue
 * (tactile). Tant qu'aucune vidéo n'est fournie, l'image joue un lent zoom.
 */
export function HoverMedia({
  poster,
  video,
  alt = "",
  sizes = "100vw",
  priority = false,
  className = "",
  imageClassName = "",
}: {
  poster: string;
  video?: string;
  alt?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [canPlay, setCanPlay] = useState(false);
  const [active, setActive] = useState(false);
  const [touch, setTouch] = useState(false);

  const inView = useInView(containerRef, { amount: 0.55 });

  useEffect(() => {
    setTouch(window.matchMedia("(hover: none)").matches);
  }, []);

  useEffect(() => {
    const element = videoRef.current;
    if (!element || !canPlay) return;

    const shouldPlay = touch ? inView : active;
    if (shouldPlay) {
      void element.play().catch(() => undefined);
    } else {
      element.pause();
      element.currentTime = 0;
    }
  }, [active, canPlay, inView, touch]);

  const showVideo = canPlay && (touch ? inView : active);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      className={`relative overflow-hidden bg-ink-soft ${className}`}
    >
      <div className="absolute inset-0 transition duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105">
        <Image
          src={poster}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={`object-cover transition-opacity duration-700 ${
            showVideo ? "opacity-0" : "opacity-100"
          } ${canPlay ? "" : "animate-ken-burns"} ${imageClassName}`}
        />

        {video ? (
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            preload="none"
            aria-hidden
            onCanPlay={() => setCanPlay(true)}
            className={`pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              showVideo ? "opacity-100" : "opacity-0"
            }`}
          >
            <source src={video} type="video/mp4" />
          </video>
        ) : null}
      </div>
    </div>
  );
}
