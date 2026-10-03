import { testimonials, toolbox } from "@/data/content";
import { Marquee } from "@/components/marquee";
import { RevealLines } from "@/components/reveal";

export function Testimonials() {
  return (
    <section className="overflow-hidden border-t border-ink-line py-28 md:py-40">
      <div className="container-x">
        <div className="flex items-center gap-4">
          <span className="h-px w-10 bg-accent" />
          <p className="overline">Retours</p>
        </div>
        <RevealLines
          lines={["Ce sont vos retours", "qui racontent", "mon travail"]}
          className="mt-7 max-w-4xl text-[9vw] leading-[0.9] md:text-[3.6vw]"
        />
      </div>

      <div
        className="relative mt-16 flex overflow-hidden md:mt-24"
        style={{ "--marquee-duration": "50s" } as React.CSSProperties}
      >
        <div className="animate-marquee flex w-max shrink-0 gap-6 pr-6">
          {[...testimonials, ...testimonials].map((t, i) => (
            <figure
              key={`${t.author}-${i}`}
              className="flex w-[78vw] flex-col justify-between border border-ink-line bg-ink-soft p-8 sm:w-[26rem] md:p-10"
            >
              <div>
                <p className="text-sm tracking-[0.3em] text-accent">★★★★★</p>
                <blockquote className="mt-6 text-[0.95rem] leading-relaxed text-paper/85">
                  “{t.quote}”
                </blockquote>
              </div>
              <figcaption className="mt-8 border-t border-ink-line pt-6">
                <p className="display text-lg">{t.author}</p>
                <p className="mt-1 text-[0.65rem] uppercase tracking-[0.18em] text-muted">
                  {t.role}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="mt-24 border-y border-ink-line py-7 md:mt-32">
        <Marquee
          items={toolbox}
          duration={34}
          className="text-xs uppercase tracking-[0.3em] text-muted"
        />
      </div>
    </section>
  );
}
