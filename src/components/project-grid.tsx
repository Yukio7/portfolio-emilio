import type { Project } from "@/data/content";
import { HoverMedia } from "@/components/hover-media";
import { Reveal } from "@/components/reveal";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group">
      <div className="relative">
        <HoverMedia
          poster={project.cover}
          video={project.preview}
          alt={project.title}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="grain aspect-[4/5] w-full"
          imageClassName="grayscale transition-[filter] duration-700 group-hover:grayscale-0"
        />

        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
        <span className="overline pointer-events-none absolute left-5 top-5 bg-ink/70 px-3 py-1.5 text-[0.6rem] text-paper/80 backdrop-blur-sm">
          {project.category}
        </span>
        <div className="pointer-events-none absolute inset-x-5 bottom-5 translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <p className="text-xs leading-relaxed text-paper/80">
            {project.description}
          </p>
        </div>
      </div>

      <div className="mt-5 flex items-baseline justify-between gap-4 border-t border-ink-line pt-4">
        <h3 className="display text-xl md:text-2xl">{project.title}</h3>
        <span className="text-[0.65rem] uppercase tracking-[0.18em] text-muted">
          {project.year}
        </span>
      </div>
      <p className="mt-1.5 text-[0.7rem] uppercase tracking-[0.15em] text-muted">
        {project.role}
      </p>
    </article>
  );
}

export function ProjectGrid({ items }: { items: Project[] }) {
  return (
    <div className="grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((project, i) => (
        <Reveal key={project.slug} delay={i % 3}>
          <ProjectCard project={project} />
        </Reveal>
      ))}
    </div>
  );
}
