import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { CtaBand } from "@/components/CtaBand";
import { sameAs, serviceAreas, services, site } from "@/lib/site";
import { brandDescription } from "@/lib/seo";
import { serviceImage } from "@/lib/service-images";
import { Button } from "@/components/ui/button";

import hero from "@/assets/hero-garage.jpg";
import installer from "@/assets/installer.jpg";

const featuredSlugs = [
  "metallic-epoxy-flooring",
  "garage-epoxy-flooring",
  "commercial-epoxy-flooring",
  "industrial-epoxy-flooring",
] as const;

const featuredServices = featuredSlugs
  .map((slug) => services.find((s) => s.slug === slug))
  .filter((s): s is (typeof services)[number] => Boolean(s))
  .slice(0, 4);

const serviceAlt: Record<string, string> = {
  "metallic-epoxy-flooring": "Glossy black and silver metallic epoxy floor installed in a Surrey, BC home",
  "garage-epoxy-flooring": "Grey flake epoxy garage floor coating in a two-car Surrey garage",
  "commercial-epoxy-flooring": "Commercial epoxy floor coating in a Metro Vancouver warehouse with safety line markings",
  "industrial-epoxy-flooring": "Industrial epoxy floor coating in a manufacturing space",
};

const faqs = [
  {
    q: "How much does epoxy flooring cost in Surrey, BC?",
    a: "Epoxy flooring cost in Surrey depends on square footage, slab condition, and whether you choose a solid, flake, or metallic system. We give free on-site estimates so your quote reflects the real floor.",
  },
  {
    q: "How long does epoxy flooring last in a Surrey garage?",
    a: "A properly ground and sealed epoxy garage floor in Surrey commonly lasts 10 to 20 years. Surface prep, coating thickness, and a hot-tire-rated top coat make the biggest difference.",
  },
  {
    q: "How long does epoxy flooring installation take?",
    a: "Most Surrey garages are finished in one to two days. Light foot traffic is usually fine after 24 hours, and vehicles can return after about 72 hours.",
  },
  {
    q: "Are epoxy floors slippery when wet?",
    a: "Gloss epoxy can be slick when wet, so we add an anti-slip aggregate to the top coat for entryways, wash bays, and any area that sees water.",
  },
  {
    q: "Do you offer epoxy flooring outside Surrey, BC?",
    a: "Yes. We install epoxy flooring in Vancouver, Burnaby, Richmond, Coquitlam, Langley, Delta, White Rock, New Westminster, Maple Ridge, and Abbotsford.",
  },
];

const PAGE_DESCRIPTION = brandDescription(
  "Epoxy flooring in Surrey, BC for garages, basements and shops. Metallic, flake and solid epoxy floors with free on-site estimates.",
);

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Epoxy Flooring in Surrey, BC | Pacific Floors and Coatings" },
      {
        name: "description",
        content:
          PAGE_DESCRIPTION,
      },
      { property: "og:title", content: "Epoxy Flooring in Surrey, BC | Pacific Floors and Coatings" },
      {
        property: "og:description",
        content:
          PAGE_DESCRIPTION,
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.pacificfloorsandcoatings.ca/" },
      { name: "robots", content: "index, follow" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Epoxy Flooring in Surrey, BC | Pacific Floors and Coatings" },
      {
        name: "twitter:description",
        content:
          PAGE_DESCRIPTION,
      },
    ],
    links: [
      { rel: "canonical", href: "https://www.pacificfloorsandcoatings.ca/" },
      { rel: "preload", as: "image", href: hero },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          "@id": "https://www.pacificfloorsandcoatings.ca/#business",
          name: "Pacific Floors and Coatings",
          url: "https://www.pacificfloorsandcoatings.ca/",
          description:
            "Epoxy flooring contractor serving Surrey, BC and Metro Vancouver. Metallic, flake, and solid epoxy floors for garages, commercial, and industrial spaces.",
          telephone: "+1-236-878-3386",
          email: "pacificfloorsandcoatings@gmail.com",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: "7304 138 Street",
            addressLocality: "Surrey",
            addressRegion: "BC",
            postalCode: "V3W 5H2",
            addressCountry: "CA",
          },
          geo: { "@type": "GeoCoordinates", latitude: 49.1339, longitude: -122.8639 },
          hasMap: site.mapLink,
          openingHoursSpecification: [site.businessHours.schema],
          areaServed: [
            "Surrey",
            "Burnaby",
            "Richmond",
            "Coquitlam",
            "Langley",
            "Delta",
            "White Rock",
            "Abbotsford",
            "Vancouver",
            "Metro Vancouver",
          ].map((name) => ({ "@type": "City", name })),
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Epoxy flooring and concrete coating services",
            itemListElement: services.slice(0, 12).map((s) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: s.title,
                url: `https://www.pacificfloorsandcoatings.ca/services/${s.slug}`,
              },
            })),
          },
          sameAs,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  errorComponent: ({ error }) => (
    <main className="mx-auto max-w-3xl px-4 py-24 text-center" role="alert">
      {error.message}
    </main>
  ),
  notFoundComponent: () => <main className="px-4 py-24 text-center">Page not found.</main>,
  component: Home,
});

function Home() {
  return (
    <>
      <Header overlay />
      <main>
        <section className="relative min-h-[680px] overflow-hidden border-b border-border">
          <img
            src={hero}
            fetchPriority="high"
            alt="Metallic epoxy garage floor installed in Surrey, BC"
            decoding="async"
            width={1600}
            height={1008}
            className="absolute inset-0 h-full w-full object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/78 to-background/10" />
          <div className="relative mx-auto grid max-w-[1170px] items-center gap-12 px-5 pb-20 pt-36 lg:grid-cols-[1.05fr_0.8fr] lg:pb-24 lg:pt-44">
            <div className="max-w-[610px]">
              <p className="eyebrow">Epoxy flooring contractor · Surrey, BC</p>
              <h1 className="mt-4 max-w-[650px] text-4xl font-black leading-[1.02] sm:text-[58px]">
                Epoxy Flooring Experts in Surrey, BC
              </h1>
              <p className="mt-5 max-w-xl text-sm leading-6 text-muted-foreground text-pretty">
                Pacific Floors and Coatings is a Surrey epoxy flooring contractor for garages, basements, shops, and
                warehouses. We grind, repair, and seal your concrete with metallic, flake, or solid epoxy floor coatings
                built to resist oil, road salt, and hot tires.
              </p>
              <ul className="mt-6 space-y-2 text-xs font-bold uppercase">
                <li>◉&nbsp; 10+ years of experience</li>
                <li>◉&nbsp; Fast, well-managed installations</li>
                <li>◉&nbsp; Competitive warranty on every job</li>
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="h-auto rounded-full px-7 py-3.5 text-xs font-bold uppercase tracking-wider shadow-[0_10px_26px_-14px_rgba(232,174,70,0.8)]">
                  <Link to="/services">View Our Services</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-auto rounded-full px-7 py-3.5 text-xs font-bold uppercase tracking-wider shadow-[0_10px_26px_-14px_rgba(232,174,70,0.8)]">
                  <a href={site.phoneHref}>Call {site.phone}</a>
                </Button>
              </div>
            </div>
            <QuoteForm />
          </div>
        </section>

        <section className="relative border-t border-border bg-surface py-20">
          <div className="mx-auto max-w-[1170px] px-5">
            <p className="eyebrow">Epoxy flooring Surrey</p>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="mt-2 text-3xl font-black sm:text-[36px]">
                Epoxy Flooring Services in Surrey, BC
              </h2>
              <Link to="/services" className="text-sm font-semibold text-primary transition-colors hover:text-primary/80">
                View all services →
              </Link>
            </div>
            <div className="mt-9 grid gap-5 sm:grid-cols-2">
              {featuredServices.map((s) => (
                <Link
                  key={s.slug}
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group relative overflow-hidden rounded-xl border border-border shadow-[0_14px_42px_-24px_rgba(0,0,0,0.9)] transition hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_18px_42px_-18px_rgba(232,174,70,0.38)]"
                >
                  <img
                    src={serviceImage(s)}
                    alt={serviceAlt[s.slug] ?? `${s.title} in Surrey, BC`}
                    loading="lazy"
                    width={1200}
                    height={800}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 lg:h-[300px]"
                  />
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between border-t border-border bg-background/92 px-5 py-4 backdrop-blur-sm">
                    <h3 className="text-base font-bold">{s.title}</h3>
                    <span className="text-primary group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-9 text-center">
              <Button asChild className="h-auto rounded-full px-8 py-3.5 text-xs font-bold uppercase tracking-wider shadow-[0_10px_26px_-14px_rgba(232,174,70,0.8)]">
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-background py-20">
          <div className="mx-auto max-w-[1170px] px-5 text-pretty">
            <p className="eyebrow">Garage floor epoxy Surrey</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight sm:text-[36px]">
              Garage, Basement and Commercial Epoxy Floor Coatings in Surrey, BC
            </h2>
            <p className="mt-5 max-w-4xl text-sm leading-7 text-muted-foreground">
              A Surrey garage floor takes hot tires, road salt, and winter slush, and bare concrete soaks all of it up.
              Our epoxy floor coatings seal the slab so oil wipes off, dust stays down, and the floor stays bright. We
              also coat basements, workshops, retail units, and warehouses across Surrey, from Newton and Fleetwood to
              Campbell Heights.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <article className="panel p-6">
                <h3 className="text-lg font-bold">Metallic epoxy flooring Surrey</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  Swirled, high-gloss finishes for living spaces, showrooms, and statement garages, hand-worked so no
                  two floors match.
                </p>
              </article>
              <article className="panel p-6">
                <h3 className="text-lg font-bold">Flake epoxy garage floors</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  A speckled, textured system that hides dirt and adds grip, the most requested choice for Surrey
                  garages and basements.
                </p>
              </article>
              <article className="panel p-6">
                <h3 className="text-lg font-bold">Industrial epoxy floor coatings</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  Heavy-build, chemical-resistant systems with safety striping for Surrey shops, plants, and
                  forklift traffic.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-surface py-20">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-center text-3xl font-black sm:text-4xl">
              Epoxy Flooring in Surrey, BC: Common Questions
            </h2>
            <div className="mt-8 space-y-3">
              {faqs.map((f) => (
                <article key={f.q} className="border border-border bg-background/40 px-5 py-4">
                  <h3 className="text-sm font-semibold">{f.q}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{f.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-20">
          <img
            src={installer}
            alt="Pacific Floors and Coatings crew installing epoxy flooring in Surrey, BC"
            width={1600}
            height={1008}
            className="absolute inset-0 h-full w-full object-cover opacity-25"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/62" />
          <div className="relative mx-auto max-w-[1170px] px-5 text-pretty">
            <p className="eyebrow">Epoxy flooring near you</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black sm:text-[36px]">
              Epoxy Flooring in Surrey and Across Metro Vancouver, BC
            </h2>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-muted-foreground">
              Based in British Columbia, Canada, our crew installs epoxy floors throughout Surrey and the surrounding cities.
              Choose your city to see local details.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs font-bold uppercase tracking-wider text-primary">
              {serviceAreas.map((area) => (
                <Link
                  key={area.slug}
                  to="/epoxy-flooring-{$slug}"
                  params={{ slug: area.slug }}
                  className="transition-colors hover:text-foreground"
                >
                  Epoxy Flooring {area.name}, BC
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
