import type { ReactNode } from "react";

type PageHeroProps = {
  image: string;
  imageAlt?: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
};

export function PageHero({ image, imageAlt = "", eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-border">
      <img
        src={image}
        alt={imageAlt}
        aria-hidden={!imageAlt}
        className="absolute inset-0 z-0 h-full w-full object-cover opacity-60"
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-background/95 via-background/82 to-background/35" />
      <div className="relative z-10 mx-auto max-w-4xl px-5 py-16 text-pretty sm:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 text-4xl font-black sm:text-5xl">{title}</h1>
        {description && <div className="mt-5 text-muted-foreground leading-7">{description}</div>}
        {children}
      </div>
    </section>
  );
}
