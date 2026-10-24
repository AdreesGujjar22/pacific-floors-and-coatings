import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CtaBand } from "@/components/CtaBand";
import { QuoteForm } from "@/components/QuoteForm";
import {
  findServiceArea,
  findServiceNeighbourhood,
  serviceNeighbourhoods,
  services,
  site,
} from "@/lib/site";
import { brandDescription, pageTitle } from "@/lib/seo";
import { areaCopy, areaSecondarySentence, neighbourhoodCopy } from "@/lib/content";
import hero from "@/assets/hero-garage.jpg";

const BASE = "https://www.pacificfloorsandcoatings.ca";

export const Route = createFileRoute("/epoxy-flooring-{$slug}")({
  staticData: { sitemap: true },
  loader: ({ params }) => {
    const area = findServiceArea(params.slug);
    if (area) return { area, neighbourhood: null };
    const neighbourhood = findServiceNeighbourhood(params.slug);
    if (!neighbourhood) throw notFound();
    return { area: neighbourhood.area, neighbourhood };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Area Not Found | Pacific Floors and Coatings" }] };
    }
    const { area, neighbourhood } = loaderData;
    const locationName = neighbourhood ? `${neighbourhood.name}, ${area.name}` : area.name;
    const title = pageTitle(`Epoxy Flooring in ${locationName}, BC`);
    const description = brandDescription(
      neighbourhood
        ? `Epoxy flooring in ${neighbourhood.name}, ${area.name}, BC for garages, basements and shops. Metallic, flake and solid floors.`
        : `Epoxy flooring in ${area.name}, BC for garages, basements, shops and warehouses. Metallic, flake and solid epoxy floor coatings.`,
    );
    const url = `${BASE}/epoxy-flooring-${neighbourhood?.slug ?? area.slug}`;
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
            name: `${site.name} — ${locationName}`,
            description,
            telephone: "+1-236-878-3386",
            email: site.email,
            url,
            openingHoursSpecification: [site.businessHours.schema],
            address: {
              "@type": "PostalAddress",
              streetAddress: "7304 138 Street",
              addressLocality: "Surrey",
              addressRegion: "BC",
              postalCode: "V3W 5H2",
              addressCountry: "CA",
            },
            areaServed: neighbourhood
              ? { "@type": "Place", name: `${neighbourhood.name}, ${area.name}, BC` }
              : [
                  { "@type": "City", name: `${area.name}, British Columbia` },
                  ...area.neighbourhoods.map((name) => ({ "@type": "Place", name: `${name}, ${area.name}, BC` })),
                ],
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: (neighbourhood
              ? neighbourhoodCopy(
                  neighbourhood.name,
                  area.name,
                  serviceNeighbourhoods.filter((n) => n.area.slug === area.slug).findIndex((n) => n.slug === neighbourhood.slug),
                  area.neighbourhoods,
                ).faqs
              : (areaCopy[area.slug]?.faqs ?? [])
            ).map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
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
          View all service areas
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
  const { area, neighbourhood } = Route.useLoaderData();
  const locationName = neighbourhood ? `${neighbourhood.name}, ${area.name}` : area.name;
  const areaNeighbourhoods = serviceNeighbourhoods.filter((item) => item.area.slug === area.slug);
  const ac = areaCopy[area.slug];
  const nbIndex = neighbourhood ? areaNeighbourhoods.findIndex((n) => n.slug === neighbourhood.slug) : -1;
  const nbCopy = neighbourhood
    ? neighbourhoodCopy(neighbourhood.name, area.name, nbIndex, area.neighbourhoods)
    : null;
  const faqs = nbCopy ? nbCopy.faqs : (ac?.faqs ?? []);
  const featured = services.filter((s) =>
    ["garage-epoxy-flooring", "metallic-epoxy-flooring", "flake-epoxy-flooring", "commercial-epoxy-flooring", "industrial-epoxy-flooring", "epoxy-floor-coatings"].includes(s.slug),
  );

  return (
    <>
      <Header />
      <main>
        <section className="relative isolate overflow-hidden border-b border-border">
          <img
            src={hero}
            alt={`Epoxy flooring in ${locationName}, BC`}
            fetchPriority="high"
            width={1280}
            height={838}
            className="absolute inset-0 z-0 h-full w-full object-cover opacity-45"
          />
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-background/96 via-background/88 to-background/42" />
          <div className="relative z-10 mx-auto grid max-w-[1170px] gap-10 px-5 py-16 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="eyebrow">Epoxy flooring contractor · {locationName}, BC</p>
              <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">Epoxy Flooring in {locationName}, BC</h1>
              <p className="mt-5 text-muted-foreground">
                {nbCopy ? `${nbCopy.intro} ${nbCopy.detail}` : ac?.intro ?? area.blurb}
              </p>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                {nbCopy ? `${nbCopy.secondary} ${nbCopy.nearby}` : `${ac?.local}. ${areaSecondarySentence(area.slug)}`}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={site.phoneHref} className="rounded-md bg-primary px-6 py-3 text-xs font-bold text-primary-foreground">
                  Call {site.phone}
                </a>
                {neighbourhood && (
                  <Link
                    to="/epoxy-flooring-{$slug}"
                    params={{ slug: area.slug }}
                    className="rounded-md border border-border px-6 py-3 text-xs font-bold transition hover:border-primary"
                  >
                    Epoxy Flooring {area.name}
                  </Link>
                )}
              </div>
            </div>
            <QuoteForm heading={`Free epoxy flooring quote in ${neighbourhood ? neighbourhood.name : area.name}`} />
          </div>
        </section>

        {!neighbourhood && (
          <section className="border-b border-border bg-surface py-14">
            <div className="mx-auto max-w-[1170px] px-5">
              <h2 className="text-2xl font-extrabold">Epoxy Floor Services in {area.name}, BC</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {featured.map((service) =>
                  area.slug === "surrey" ? (
                    <Link key={service.slug} to="/services/$slug" params={{ slug: service.slug }} className="interactive-panel block p-5">
                      <h3 className="text-base font-bold">{service.title} in Surrey, BC</h3>
                    </Link>
                  ) : (
                    <Link
                      key={service.slug}
                      to="/services-in/$citySlug/$serviceSlug"
                      params={{ citySlug: area.slug, serviceSlug: service.slug }}
                      className="interactive-panel block p-5"
                    >
                      <h3 className="text-base font-bold">{service.title} in {area.name}, BC</h3>
                    </Link>
                  ),
                )}
              </div>
              <h2 className="mt-12 text-2xl font-extrabold">Epoxy Flooring Near {area.name} Neighbourhoods</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {areaNeighbourhoods.map((item) => (
                  <Link
                    key={item.slug}
                    to="/epoxy-flooring-{$slug}"
                    params={{ slug: item.slug }}
                    className="rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground transition hover:border-primary hover:text-primary"
                  >
                    Epoxy Flooring {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="mx-auto max-w-[1170px] px-5 py-14">
          <h2 className="text-2xl font-extrabold">Epoxy Flooring in {locationName}, BC: FAQs</h2>
          <div className="mt-6 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="border border-border bg-background/40 px-5 py-4">
                <summary className="cursor-pointer list-none text-sm font-semibold">{f.q}</summary>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
