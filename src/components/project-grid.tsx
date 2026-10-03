import Image from "next/image";

import type { Project } from "@/data/content";
import { Reveal } from "@/components/reveal";

export function ProjectCard({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  return (
    <article className="group">
      <div className="grain relative aspect-[4/5] overflow-hidden bg-ink-soft">
        <Image
          src={project.cover}
          alt={project.title}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover grayscale transition-all duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:grayscale-0"
        />
        <span className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
        <span className="overline absolute left-5 top-5 bg-ink/70 px-3 py-1.5 text-[0.6rem] text-paper/80 backdrop-blur-sm">
          {project.category}
        </span>
        <div className="absolute inset-x-5 bottom-5 translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
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
