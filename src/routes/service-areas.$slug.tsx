import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CtaBand } from "@/components/CtaBand";
import { QuoteForm } from "@/components/QuoteForm";
import { findServiceArea, metaTitle, services, site } from "@/lib/site";
import hero from "@/assets/hero-garage.jpg";

const BASE = "https://www.pacificfloorsandcoatings.ca";

export const Route = createFileRoute("/service-areas/$slug")({
  staticData: { sitemap: true },
  loader: ({ params }) => {
    const area = findServiceArea(params.slug);
    if (!area) throw notFound();
    return { area };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Area Not Found | Pacific Floors and Coatings" }, { name: "robots", content: "noindex" }] };
    }
    const { area } = loaderData;
    const title = metaTitle(`Epoxy Flooring in ${area.name} BC`);
    const description = `Epoxy flooring in ${area.name}, BC: durable finishes for garages and businesses, installed with careful preparation.`;
    const url = `${BASE}/service-areas/${area.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: `${site.name} — ${area.name}`,
            description,
            telephone: "+1-236-878-3386",
            email: site.email,
            url,
            address: {
              "@type": "PostalAddress",
              streetAddress: "7304 138 Street",
              addressLocality: "Surrey",
              addressRegion: "BC",
              postalCode: "V3W 5H2",
              addressCountry: "CA",
            },
            areaServed: [
              { "@type": "City", name: `${area.name}, British Columbia` },
              ...area.neighbourhoods.map((n) => ({ "@type": "Place", name: `${n}, ${area.name}, BC` })),
            ],
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="text-3xl font-extrabold">Service area not found</h1>
        <Link to="/service-areas" className="mt-6 inline-block text-primary">
          View all service areas →
        </Link>
      </main>
      <Footer />
    </>
  ),
  errorComponent: ({ error }) => (
    <main className="mx-auto max-w-3xl px-4 py-24 text-center" role="alert">
      {error.message}
    </main>
  ),
  component: AreaPage,
});

function AreaPage() {
  const { area } = Route.useLoaderData();
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(`${area.name}, British Columbia, Canada`)}&output=embed`;

  return (
    <>
      <Header />
      <main>
        <section className="relative isolate overflow-hidden border-b border-border">
          <img src={hero} alt="Epoxy garage flooring in Metro Vancouver" className="absolute inset-0 z-0 h-full w-full object-cover opacity-45" />
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-background/96 via-background/88 to-background/42" />
          <div className="relative z-10 mx-auto max-w-4xl px-4 py-16">
          <p className="eyebrow">Serving {area.region}</p>
          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">
            Epoxy Flooring in {area.name}, BC
          </h1>
          <p className="mt-5 text-muted-foreground">{area.blurb}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={site.phoneHref}
              className="rounded-md bg-primary px-6 py-3 text-xs font-bold text-primary-foreground"
            >
              Call {site.phone}
            </a>
            <Link
              to="/contact"
              className="rounded-md border border-border px-6 py-3 text-xs font-bold transition hover:border-primary"
            >
              Get a free quote
            </Link>
          </div>
          </div>
        </section>

        <section className="border-y border-border bg-surface py-14">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-2xl font-extrabold">Flooring systems we install in {area.name}</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="interactive-panel block p-5"
                >
                  <h3 className="text-base font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-extrabold">Neighbourhoods we cover in {area.name}</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {area.neighbourhoods.map((n) => (
              <span
                key={n}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground"
              >
                {n}
              </span>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-14">
          <h2 className="text-2xl font-extrabold">{area.name} service area map</h2>
          <iframe
            title={`Map of our ${area.name}, BC epoxy flooring service area`}
            src={mapSrc}
            className="mt-6 h-[420px] w-full rounded-md border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </section>

        <section className="mx-auto grid max-w-6xl gap-8 px-4 pb-20 md:grid-cols-2">
          <h2 className="text-3xl font-extrabold">
            Ready for a new floor in {area.name}? Book a free on-site estimate.
          </h2>
          <QuoteForm heading="Get your free quote" />
        </section>

        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
