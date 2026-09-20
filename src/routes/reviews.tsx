import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { reviews } from "@/lib/reviews";
import metallic from "@/assets/metallic-epoxy.jpg";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/reviews")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Epoxy Flooring Customer Reviews | Pacific Floors & Coatings" },
      {
        name: "description",
        content:
          "Read customer reviews from Surrey and Metro Vancouver homeowners and businesses who chose Pacific Floors & Coatings for durable epoxy flooring installations.",
      },
      { property: "og:title", content: "Epoxy Flooring Customer Reviews | Pacific Floors & Coatings" },
      {
        property: "og:description",
        content: "Read customer reviews from Surrey and Metro Vancouver homeowners and businesses who chose Pacific Floors & Coatings for durable epoxy flooring installations.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.pacificfloorsandcoatings.ca/reviews" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Epoxy Flooring Customer Reviews | Pacific Floors & Coatings" },
      {
        name: "twitter:description",
        content: "Read customer reviews from Surrey and Metro Vancouver homeowners and businesses who chose Pacific Floors & Coatings for durable epoxy flooring installations.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.pacificfloorsandcoatings.ca/reviews" }],
  }),
  errorComponent: ({ error }) => (
    <main className="mx-auto max-w-3xl px-4 py-24 text-center" role="alert">
      {error.message}
    </main>
  ),
  notFoundComponent: () => <main className="px-4 py-24 text-center">No reviews found.</main>,
  component: Reviews,
});

function Reviews() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          image={metallic}
          imageAlt="Metallic epoxy flooring project"
          eyebrow="Real results, real feedback"
          title="Customer reviews"
          description={<>Feedback from homeowners and businesses across Surrey and Metro Vancouver who chose Pacific Floors and Coatings.</>}
        />

        <section className="mx-auto grid max-w-6xl gap-5 px-4 pb-16 pt-14 md:grid-cols-2 text-pretty">
          {reviews.map((r) => (
            <figure key={`${r.name}-${r.relativeTime}`} className="panel border-l-2 border-l-primary p-6 shadow-sm">
              <div className="text-primary text-xs tracking-tighter">{"★".repeat(Math.round(r.rating))}</div>
              <blockquote className="mt-3 text-sm text-muted-foreground leading-6 italic">"{r.text}"</blockquote>
              <figcaption className="mt-4 flex items-center gap-3 text-sm font-semibold">
                <span>
                  {r.name}
                  <span className="block text-xs font-normal text-muted-foreground">
                    {r.location} · {r.relativeTime}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </section>

        <section className="mx-auto grid max-w-6xl gap-8 px-4 pb-20 md:grid-cols-2 text-pretty">
          <h2 className="text-3xl font-black">Your floors could be next.</h2>
          <QuoteForm heading="Get your free quote" />
        </section>
      </main>
      <Footer />
    </>
  );
}
