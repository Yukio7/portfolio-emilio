import { Reveal, RevealLines } from "@/components/reveal";

export function PageHero({
  overline,
  titleLines,
  description,
}: {
  overline: string;
  titleLines: string[];
  description?: string;
}) {
  return (
    <section className="grain relative border-b border-ink-line pb-16 pt-36 md:pb-24 md:pt-52">
      <div className="container-x">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-accent" />
            <p className="overline">{overline}</p>
          </div>
        </Reveal>

        <RevealLines
          lines={titleLines}
          className="mt-8 text-[14vw] leading-[0.86] md:text-[8vw]"
        />

        {description ? (
          <Reveal delay={2}>
            <p className="mt-10 max-w-xl text-sm leading-relaxed text-muted md:text-base">
              {description}
            </p>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
