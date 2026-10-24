import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CtaBand } from "@/components/CtaBand";
import { QuoteForm } from "@/components/QuoteForm";
import { findServiceArea, metaTitle, serviceGroups, serviceNeighbourhoods, services, site } from "@/lib/site";
import { metaDescription } from "@/lib/seo";
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
      return { meta: [{ title: "Area Not Found | Pacific Floors and Coatings" }] };
    }
    const { area } = loaderData;
    const title = metaTitle(`Flooring and Epoxy Services in ${area.name}, BC`);
    const description = metaDescription(
      `Flooring and epoxy services in ${area.name}, BC, including repairs, installation, maintenance, and commercial coatings.`,
    );
    const url = `${BASE}/epoxy-flooring-${area.slug}`;
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
            openingHoursSpecification: [site.businessHours.schema],
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


  return (
    <>
      <Header />
      <main>
        <section className="relative isolate overflow-hidden border-b border-border">
          <img
            src={hero}
            alt="Epoxy garage flooring in Metro Vancouver"
            fetchPriority="high"
            width={1280}
            height={838}
            className="absolute inset-0 z-0 h-full w-full object-cover opacity-45"
          />
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-background/96 via-background/88 to-background/42" />
          <div className="relative z-10 mx-auto max-w-4xl px-4 py-16">
          <p className="eyebrow">Serving {area.region}</p>
          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">
            Flooring Services in {area.name}, BC
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
            <h2 className="text-2xl font-extrabold">Flooring services in {area.name}</h2>
            <div className="mt-8 space-y-10">
              {serviceGroups.map((group) => (
                <div key={group}>
                  <h3 className="eyebrow">{group}</h3>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {services.filter((service) => service.group === group).map((service) => {
                      const card = (
                        <>
                          <h4 className="text-base font-bold">
                            {area.slug === "surrey" ? service.title : `${service.title} in ${area.name}`}
                          </h4>
                          <p className="mt-2 text-sm text-muted-foreground">{service.short}</p>
                        </>
                      );

                      return area.slug === "surrey" ? (
                        <Link
                          key={service.slug}
                          to="/services/$slug"
                          params={{ slug: service.slug }}
                          className="interactive-panel block p-5"
                        >
                          {card}
                        </Link>
                      ) : (
                        <Link
                          key={service.slug}
                          to="/services-in/$citySlug/$serviceSlug"
                          params={{ citySlug: area.slug, serviceSlug: service.slug }}
                          className="interactive-panel block p-5"
                        >
                          {card}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-extrabold">Neighbourhoods we cover in {area.name}</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {serviceNeighbourhoods
              .filter((item) => item.area.slug === area.slug)
              .map((item) => (
                <Link
                  key={item.slug}
                  to="/epoxy-flooring-{$slug}"
                  params={{ slug: item.slug }}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground transition hover:border-primary hover:text-primary"
                >
                  {item.name}
                </Link>
              ))}
          </div>
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
