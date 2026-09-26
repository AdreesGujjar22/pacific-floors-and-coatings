import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { site } from "@/lib/site";
import hero from "@/assets/installer.jpg";

export const Route = createFileRoute("/contact")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Contact Us | Pacific Floors and Coatings" },
      {
        name: "description",
        content:
          "Contact Us for a free flooring estimate in Surrey, BC. Tell Pacific Floors and Coatings about your project, and our team will help plan next steps.",
      },
      { property: "og:title", content: "Contact Us | Pacific Floors and Coatings" },
      {
        property: "og:description",
        content: "Contact Us for a free flooring estimate in Surrey, BC. Tell Pacific Floors and Coatings about your project, and our team will help plan next steps.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.pacificfloorsandcoatings.ca/contact" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Contact Us | Pacific Floors and Coatings" },
      {
        name: "twitter:description",
        content: "Contact Us for a free flooring estimate in Surrey, BC. Tell Pacific Floors and Coatings about your project, and our team will help plan next steps.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.pacificfloorsandcoatings.ca/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <Header />
      <main>
        <section className="relative isolate overflow-hidden border-b border-border">
          <img src={hero} alt="Pacific Floors and Coatings installer preparing a floor" className="absolute inset-0 z-0 h-full w-full object-cover opacity-45" />
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-background/96 via-background/88 to-background/45" />
          <div className="relative z-10 mx-auto grid max-w-6xl gap-10 px-4 py-16 text-pretty md:grid-cols-2">
          <div>
            <p className="eyebrow">Contact us</p>
            <h1 className="mt-3 text-4xl font-black">Let's talk about your floor</h1>
            <p className="mt-5 text-muted-foreground leading-7">
              Tell us a bit about the space and we'll arrange a free on-site estimate anywhere in
              Surrey, BC or Metro Vancouver.
            </p>
            <ul className="mt-8 space-y-6 text-sm">
              <li>
                <span className="eyebrow block">Phone</span>
                <a href={site.phoneHref} className="text-base font-bold text-muted-foreground hover:text-primary transition-colors">
                  {site.phone}
                </a>
              </li>
              <li>
                <span className="eyebrow block">Email</span>
                <a href={`mailto:${site.email}`} className="text-base font-bold text-muted-foreground hover:text-primary transition-colors">
                  {site.email}
                </a>
              </li>
              <li>
                <span className="eyebrow block">Address</span>
                <span className="text-base font-bold text-muted-foreground">{site.address}</span>
              </li>
            </ul>
          </div>
          <QuoteForm heading="Request a free quote" />
          </div>
        </section>
        <section className="border-y border-border bg-surface py-16">
          <div className="mx-auto max-w-6xl px-4">
            <p className="eyebrow">Find us</p>
            <h2 className="mt-3 text-3xl font-black">Pacific Floors and Coatings in Surrey</h2>
            <div className="mt-7 overflow-hidden rounded-md border border-border shadow-xl">
              <iframe
                title="Pacific Floors and Coatings Google Business Profile map"
                src="https://www.google.com/maps?q=Pacific%20Floors%20and%20Coatings%2C%207304%20138%20Street%2C%20Surrey%2C%20BC%20V3W%205H2%2C%20Canada&output=embed"
                width="100%"
                height="420"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
