import { createFileRoute, Link, notFound, redirect } from "@tanstack/react-router";
import { Breadcrumbs, breadcrumbSchema } from "@/components/Breadcrumbs";
import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { QuoteForm } from "@/components/QuoteForm";
import { findService, findServiceArea, sameAs, site, SITE_URL } from "@/lib/site";
import { brandDescription, pageTitle } from "@/lib/seo";
import { serviceImage } from "@/lib/service-images";
import { servicePageCopy } from "@/lib/content";

function cityFaqs(slug: string, area: { slug: string; name: string; neighbourhoods: string[] }) {
  const copy = servicePageCopy(slug, area);
  const service = findService(slug);
  const list = copy ? copy.faqs.slice(0, 2) : [];
  if (service) {
    list.push({
      q: `Where in ${area.name} do you offer ${service.title.toLowerCase()}?`,
      a: `We provide ${service.title.toLowerCase()} across ${area.name}, BC, including ${area.neighbourhoods.join(", ")}. ${service.short} Request a free estimate for your property.`,
    });
  }
  return list;
}

export const Route = createFileRoute("/services-in/$citySlug/$serviceSlug")({
  staticData: { sitemap: true },
  loader: ({ params }) => {
    const service = findService(params.serviceSlug);
    const area = findServiceArea(params.citySlug);
    if (!service || !area || area.slug === "surrey") throw notFound();
    // "Epoxy Flooring in {City}" already lives at /epoxy-flooring-{city}; avoid a duplicate page.
    if (service.slug === "epoxy-flooring") {
      throw redirect({ to: "/epoxy-flooring-{$slug}", params: { slug: area.slug }, statusCode: 301 });
    }
    return { service, area };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Service Not Found | Pacific Floors and Coatings" }] };
    const { service, area } = loaderData;
    const title = pageTitle(`${service.title} in ${area.name}, BC`);
    const copy = servicePageCopy(service.slug, area);
    const description = brandDescription(copy ? copy.meta : `${service.title} in ${area.name}, BC.`);
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
            mainEntity: cityFaqs(service.slug, area).map((faq) => ({
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
  const copy = servicePageCopy(service.slug, area);
  const faqs = cityFaqs(service.slug, area);
  const nb = area.neighbourhoods.slice(0, 6).join(", ");

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
                <p className="eyebrow">{service.title} · {area.region}</p>
                <h1 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
                  {service.title} in {area.name}, BC
                </h1>
                <p className="mt-5 leading-7 text-muted-foreground">{copy?.lead ?? service.intro}</p>
                <p className="mt-4 leading-7 text-muted-foreground">{copy?.local} {copy?.detail}</p>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{copy?.secondary}</p>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  Areas covered in {area.name}: {nb}.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a href={site.phoneHref} className="rounded-md bg-primary px-6 py-3 text-xs font-bold text-primary-foreground">
                    Call {site.phone}
                  </a>
                  <Link to="/epoxy-flooring-{$slug}" params={{ slug: area.slug }} className="rounded-md border border-border px-6 py-3 text-xs font-bold transition hover:border-primary">
                    Epoxy Flooring {area.name}
                  </Link>
                </div>
              </div>
              <QuoteForm heading={`Get a ${area.name} ${service.title.toLowerCase()} quote`} />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1170px] px-5 py-14">
          <h2 className="text-2xl font-extrabold">{service.title} in {area.name}, BC: FAQs</h2>
          <div className="mt-6 space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="border border-border bg-background/40 px-5 py-4">
                <summary className="cursor-pointer list-none text-sm font-semibold">{faq.q}</summary>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{faq.a}</p>
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
