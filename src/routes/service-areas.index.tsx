import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CtaBand } from "@/components/CtaBand";
import { serviceAreas } from "@/lib/site";
import hero from "@/assets/hero-garage.jpg";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/service-areas/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Service Areas | Pacific Floors & Coatings" },
      {
        name: "description",
        content:
          "Pacific Floors & Coatings installs epoxy and concrete coatings in Surrey, Vancouver, Burnaby, Richmond, Delta, Coquitlam, Langley, and communities across Metro Vancouver.",
      },
      { property: "og:title", content: "Service Areas | Pacific Floors & Coatings" },
      {
        property: "og:description",
        content: "Pacific Floors & Coatings installs epoxy and concrete coatings in Surrey, Vancouver, Burnaby, Richmond, Delta, Coquitlam, Langley, and communities across Metro Vancouver.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.pacificfloorsandcoatings.ca/service-areas" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Service Areas | Pacific Floors & Coatings" },
      {
        name: "twitter:description",
        content: "Pacific Floors & Coatings installs epoxy and concrete coatings in Surrey, Vancouver, Burnaby, Richmond, Delta, Coquitlam, Langley, and communities across Metro Vancouver.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.pacificfloorsandcoatings.ca/service-areas" }],
  }),
  component: ServiceAreasPage,
});

function ServiceAreasPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          image={hero}
          imageAlt="Epoxy garage flooring in Surrey, BC"
          eyebrow="Local service areas"
          title="Epoxy flooring across Surrey BC and Metro Vancouver"
        >
          <ul className="mt-8 space-y-4 text-sm text-muted-foreground font-medium">
            <li>
              <strong className="text-foreground">On-site consultations:</strong> we visit commercial, industrial, and residential floor preparation questions directly at your property.
            </li>
            <li>
              <strong className="text-foreground">Fully equipped crews:</strong> our team arrives with professional diamond grinders and dust-free vacuums.
            </li>
            <li>
              <strong className="text-foreground">Regional coverage:</strong> we install across Surrey, BC and throughout Metro Vancouver.
            </li>
          </ul>
        </PageHero>

        <section className="mx-auto max-w-6xl px-4 pb-20 pt-14">
          <h2 className="text-2xl font-black">Choose your city</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {serviceAreas.map((a) => (
              <Link
                key={a.slug}
                to="/service-areas/$slug"
                params={{ slug: a.slug }}
                className="panel group block p-5 transition hover:border-primary shadow-sm hover:shadow-md"
              >
                <h3 className="text-lg font-bold group-hover:text-primary transition-colors">Epoxy Flooring in {a.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-6">{a.blurb}</p>
                <span className="mt-4 inline-block text-sm font-bold text-primary">
                  View {a.name} page →
                </span>
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
