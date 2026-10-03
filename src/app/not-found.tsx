import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] items-center">
      <div className="container-x">
        <p className="overline">Erreur 404</p>
        <h1 className="display mt-8 text-[18vw] leading-[0.84] md:text-[12vw]">
          Hors cadre
        </h1>
        <p className="mt-8 max-w-md text-sm leading-relaxed text-muted">
          Cette page n&apos;existe pas ou a été déplacée au montage.
        </p>
        <Link
          href="/"
          className="group mt-10 inline-flex items-center gap-3 border border-paper/25 px-9 py-4 text-[0.7rem] uppercase tracking-[0.25em] transition-colors hover:border-paper hover:bg-paper hover:text-ink"
        >
          Retour à l&apos;accueil
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
