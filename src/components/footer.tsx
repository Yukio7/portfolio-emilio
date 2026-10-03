import Link from "next/link";

import { nav, site } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-ink-line bg-ink">
      <div className="container-x py-20 md:py-28">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="display text-4xl md:text-5xl">
              {site.firstName}
              <br />
              {site.lastName}
            </p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">
              {site.role}. Je transforme des idées en images qui racontent une
              histoire — du cadrage à l&apos;étalonnage final.
            </p>
          </div>

          <div className="md:col-span-3">
            <h2 className="overline">Navigation</h2>
            <ul className="mt-6 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-paper"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/mentions-legales"
                  className="text-sm text-muted transition-colors hover:text-paper"
                >
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h2 className="overline">Contact</h2>
            <ul className="mt-6 space-y-3">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-sm text-muted transition-colors hover:text-paper"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="text-sm text-muted transition-colors hover:text-paper"
                >
                  {site.phone}
                </a>
              </li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {site.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="overline transition-colors hover:text-paper"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-ink-line pt-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Tous droits réservés.
          </p>
          <p>{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
