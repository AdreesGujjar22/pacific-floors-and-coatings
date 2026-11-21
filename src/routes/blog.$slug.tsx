import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs, breadcrumbSchema } from "@/components/Breadcrumbs";
import { blogPosts } from "@/lib/blog";
import { site, SITE_URL } from "@/lib/site";

export const Route = createFileRoute("/blog/$slug")({
  staticData: { sitemap: false },
  loader: ({ params }) => {
    const index = blogPosts.findIndex((post) => post.slug === params.slug);
    if (index === -1) throw notFound();
    return { post: blogPosts[index], previous: blogPosts[index - 1], next: blogPosts[index + 1] };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Article Not Found | Pacific Floors And Coatings" }, { name: "robots", content: "noindex" }] };
    const { post } = loaderData;
    const title = `${post.title} | Pacific Floors And Coatings`;
    const url = `${SITE_URL}/blogs/${post.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: post.description },
        { property: "og:title", content: title },
        { property: "og:description", content: post.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "article:published_time", content: post.publishedAt },
        { name: "twitter:card", content: "summary" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: post.description },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Blogs", href: "/blogs" }, { label: post.title, href: `/blogs/${post.slug}` }])) },
        { type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "BlogPosting", headline: post.title, description: post.description, datePublished: post.publishedAt, url, publisher: { "@type": "Organization", name: site.name, url: SITE_URL } }) },
      ],
    };
  },
  notFoundComponent: () => (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-5 py-24 text-center">
        <h1 className="text-3xl font-black">Article not found</h1>
        <Link to="/blogs" className="mt-6 inline-block text-primary">View the blog →</Link>
      </main>
      <Footer />
    </>
  ),
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post, previous, next } = Route.useLoaderData();
  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl px-5 py-12 sm:py-16">
        <Breadcrumbs crumbs={[{ label: "Home", href: "/" }, { label: "Blogs", href: "/blogs" }, { label: post.title }]} />
        <article className="mt-10">
          <h1 className="text-4xl font-black leading-tight sm:text-5xl">{post.title}</h1>
          <time dateTime={post.publishedAt} className="mt-5 block text-sm text-muted-foreground">{post.publishedAt}</time>
          <div className="mt-10 space-y-10">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-bold">{section.heading}</h2>
                {section.paragraphs.map((paragraph, index) => <p key={index} className="mt-4 leading-7 text-muted-foreground">{paragraph}</p>)}
              </section>
            ))}
          </div>
        </article>
        {(previous || next) && (
          <nav aria-label="Article navigation" className="mt-14 grid gap-4 border-t border-border pt-8 sm:grid-cols-2">
            {previous && <Link to="/blog/$slug" params={{ slug: previous.slug }} className="rounded-lg border border-border p-5 hover:border-primary"><span className="block text-xs uppercase tracking-wider text-muted-foreground">← Previous article</span><span className="mt-2 block font-bold">{previous.title}</span></Link>}
            {next && <Link to="/blog/$slug" params={{ slug: next.slug }} className="rounded-lg border border-border p-5 hover:border-primary sm:col-start-2 sm:text-right"><span className="block text-xs uppercase tracking-wider text-muted-foreground">Next article →</span><span className="mt-2 block font-bold">{next.title}</span></Link>}
          </nav>
        )}
      </main>
      <Footer />
    </>
  );
}
