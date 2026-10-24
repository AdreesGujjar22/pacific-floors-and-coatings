import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Breadcrumbs, breadcrumbSchema } from "@/components/Breadcrumbs";
import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { QuoteForm } from "@/components/QuoteForm";
import { findService, findServiceArea, metaTitle, sameAs, serviceAreas, services, site, SITE_URL } from "@/lib/site";
import { metaDescription } from "@/lib/seo";
import { serviceImage } from "@/lib/service-images";

export const Route = createFileRoute("/services-in/$citySlug/$serviceSlug")({
  staticData: { sitemap: true },
  loader: ({ params }) => {
    const service = findService(params.serviceSlug);
    const area = findServiceArea(params.citySlug);
    if (!service || !area || area.slug === "surrey") throw notFound();
    return { service, area };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Service Not Found | Pacific Floors and Coatings" }] };
    const { service, area } = loaderData;
    const title = metaTitle(`${service.title} in ${area.name}, BC`);
    const description = metaDescription(`${service.title} in ${area.name}, BC. ${service.short} ${area.blurb}`);
    const url = `${SITE_URL}/services-in/${area.slug}/${service.slug}`;

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
            name: `${service.title} in ${area.name}`,
            serviceType: service.title,
            description,
            url,
            areaServed: { "@type": "City", name: area.region },
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
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbSchema([
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: service.title, href: `/services/${service.slug}` },
              { label: area.name },
            ]),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: service.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
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
        <Link to="/services" className="mt-6 inline-block text-primary">View all services</Link>
      </main>
      <Footer />
    </>
  ),
  component: ServiceCityPage,
});

function ServiceCityPage() {
  const { service, area } = Route.useLoaderData();
  const related = services.filter((item) => item.group === service.group && item.slug !== service.slug).slice(0, 4);

  return (
    <>
      <Header />
      <main>
        <section className="relative isolate overflow-hidden border-b border-border">
          <img
            src={serviceImage(service)}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 z-0 h-full w-full object-cover opacity-45"
          />
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-background/96 via-background/88 to-background/42" />
          <div className="relative z-10 mx-auto max-w-[1170px] px-5 py-14">
            <Breadcrumbs
              crumbs={[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: service.title, href: `/services/${service.slug}` },
                { label: area.name },
              ]}
            />
            <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="eyebrow">{service.group} · Serving {area.region}</p>
                <h1 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
                  {service.title} in {area.name}, BC
                </h1>
                <p className="mt-5 leading-7 text-muted-foreground">{service.intro}</p>
                <p className="mt-4 leading-7 text-muted-foreground">{area.blurb}</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a href={site.phoneHref} className="rounded-md bg-primary px-6 py-3 text-xs font-bold text-primary-foreground">
                    Call {site.phone}
                  </a>
                  <Link to="/contact" className="rounded-md border border-border px-6 py-3 text-xs font-bold transition hover:border-primary">
                    Get a free quote
                  </Link>
                  <Link to="/epoxy-flooring-{$slug}" params={{ slug: area.slug }} className="rounded-md border border-border px-6 py-3 text-xs font-bold transition hover:border-primary">
                    View {area.name} service area
                  </Link>
                </div>
              </div>
              <QuoteForm heading={`Get a ${area.name} ${service.title.toLowerCase()} quote`} />
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-surface py-14">
          <div className="mx-auto grid max-w-[1170px] gap-8 px-5 md:grid-cols-2">
            <div className="panel p-7">
              <h2 className="text-xl font-bold">What to expect</h2>
              <p className="mt-3 leading-7 text-muted-foreground">{service.short}</p>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                {service.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
              <p className="mt-5 text-sm"><span className="eyebrow">Best for</span><span className="mt-1 block text-muted-foreground">{service.best}</span></p>
            </div>
            <div className="panel p-7">
              <h2 className="text-xl font-bold">Areas we serve</h2>
              <p className="mt-3 leading-7 text-muted-foreground">Find this service in other cities across Surrey and Metro Vancouver.</p>
              <ul className="mt-4 space-y-2">
                {serviceAreas.filter((location) => location.slug !== "surrey").map((location) => (
                  <li key={location.slug}>
                    <Link
                      to="/services-in/$citySlug/$serviceSlug"
                      params={{ citySlug: location.slug, serviceSlug: service.slug }}
                      className="font-semibold text-primary transition hover:underline"
                    >
                      {service.title} in {location.name}, BC
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1170px] px-5 py-14">
          <h2 className="text-2xl font-extrabold">{service.title} questions</h2>
          <div className="mt-6 space-y-3">
            {service.faqs.map((faq) => (
              <details key={faq.q} className="border border-border bg-background/40 px-5 py-4">
                <summary className="cursor-pointer list-none text-sm font-semibold">{faq.q}</summary>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        {related.length > 0 && (
          <section className="mx-auto max-w-[1170px] px-5 pb-16">
            <h2 className="text-2xl font-extrabold">More {service.group.toLowerCase()} in {area.name}</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  to="/services-in/$citySlug/$serviceSlug"
                  params={{ citySlug: area.slug, serviceSlug: item.slug }}
                  className="interactive-panel block p-5"
                >
                  <h3 className="text-base font-bold">{item.title} in {area.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.short}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
