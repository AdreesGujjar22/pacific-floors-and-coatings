import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { CtaBand } from "@/components/CtaBand";
import { Breadcrumbs, breadcrumbSchema } from "@/components/Breadcrumbs";
import { findService, findServiceArea, serviceAreas, sameAs, site, SITE_URL } from "@/lib/site";
import { brandDescription, pageTitle } from "@/lib/seo";
import { serviceImage } from "@/lib/service-images";
import { servicePageCopy } from "@/lib/content";

export const Route = createFileRoute("/services/$slug")({
  staticData: { sitemap: true },
  loader: ({ params }) => {
    const service = findService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Service Not Found | Pacific Floors and Coatings" }] };
    }
    const { service } = loaderData;
    const title = pageTitle(`${service.title} in Surrey, BC`);
    const surrey = findServiceArea("surrey")!;
    const copy = servicePageCopy(service.slug, surrey);
    const description = brandDescription(copy ? copy.meta : `${service.title} in Surrey, BC: ${service.short}`);
    const url = `${SITE_URL}/services/${params.slug}`;

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:site_name", content: site.name },
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
            "@type": "Service",
            name: service.title,
            serviceType: service.title,
            description,
            url,
            areaServed: [
              { "@type": "City", name: "Surrey, British Columbia" },
              { "@type": "AdministrativeArea", name: "Metro Vancouver, British Columbia" },
            ],
            provider: {
              "@type": "LocalBusiness",
              name: site.name,
              telephone: "+1-236-878-3386",
              email: site.email,
              url: SITE_URL,
              address: {
                "@type": "PostalAddress",
                streetAddress: "7304 138 Street",
                addressLocality: "Surrey",
                addressRegion: "BC",
                postalCode: "V3W 5H2",
                addressCountry: "CA",
              },
              openingHoursSpecification: [site.businessHours.schema],
              sameAs,
            },
            offers: { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "CAD" },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbSchema([
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: service.title, href: `/services/${service.slug}` },
            ]),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: (servicePageCopy(service.slug, findServiceArea("surrey")!)?.faqs ?? service.faqs).map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="text-3xl font-extrabold">Service not found</h1>
        <Link to="/services" className="mt-6 inline-block text-primary">
          View all services →
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
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const surrey = findServiceArea("surrey")!;
  const copy = servicePageCopy(service.slug, surrey);
  const faqs = copy?.faqs ?? service.faqs;

  return (
    <>
      <Header />
      <main>
        <section className="relative isolate overflow-hidden border-b border-border">
          <img src={serviceImage(service)} alt="" aria-hidden="true" className="absolute inset-0 z-0 h-full w-full object-cover opacity-45" />
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-background/96 via-background/88 to-background/42" />
          <div className="relative z-10 mx-auto max-w-[1170px] px-5 py-12">
            <Breadcrumbs
              crumbs={[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: service.title, href: `/services/${service.slug}` },
              ]}
            />
            <div className="mt-7 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="eyebrow">{service.title} · Surrey, BC</p>
                <h1 className="mt-3 text-4xl font-black leading-tight sm:text-[44px]">
                  {service.title} in Surrey, BC
                </h1>
                <p className="mt-5 leading-7 text-muted-foreground">{copy?.lead ?? service.intro}</p>
                <p className="mt-4 leading-7 text-muted-foreground">{copy?.detail}</p>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{copy?.secondary}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={site.phoneHref}
                    className="rounded-md bg-primary px-6 py-3 text-xs font-bold text-primary-foreground transition hover:brightness-110"
                  >
                    Call {site.phone}
                  </a>
                  <Link
                    to="/contact"
                    className="rounded-md border border-border px-6 py-3 text-xs font-bold transition hover:border-primary"
                  >
                    Book a free estimate
                  </Link>
                </div>
              </div>
              <QuoteForm heading={`Get a ${service.title.toLowerCase()} quote in Surrey`} />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1170px] px-5 py-14">
          <h2 className="text-2xl font-extrabold">{service.title} in Surrey, BC: FAQs</h2>
          <div className="mt-6 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="border border-border bg-background/40 px-5 py-4">
                <summary className="cursor-pointer list-none text-sm font-semibold">{f.q}</summary>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1170px] px-5 pb-16">
          <h2 className="text-2xl font-extrabold">{service.title} Near Surrey</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {serviceAreas.filter((area) => area.slug !== "surrey").map((area) => (
              <Link
                key={area.slug}
                to="/services-in/$citySlug/$serviceSlug"
                params={{ citySlug: area.slug, serviceSlug: service.slug }}
                className="interactive-panel block p-4"
              >
                <span className="font-semibold">{service.title} in {area.name}, BC</span>
              </Link>
            ))}
          </div>
        </section>

        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
