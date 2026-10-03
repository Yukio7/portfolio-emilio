import type { ReactNode } from "react";

export function Marquee({
  items,
  duration = 32,
  separator = "•",
  className = "",
}: {
  items: readonly string[];
  duration?: number;
  separator?: ReactNode;
  className?: string;
}) {
  const sequence = [...items, ...items];

  return (
    <div
      className={`relative flex overflow-hidden ${className}`}
      style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
    >
      <div className="animate-marquee flex w-max shrink-0 items-center">
        {sequence.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center">
            <span className="whitespace-nowrap">{item}</span>
            <span className="mx-6 text-accent md:mx-10" aria-hidden>
              {separator}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
