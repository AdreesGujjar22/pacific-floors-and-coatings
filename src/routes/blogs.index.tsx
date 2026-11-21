import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs, breadcrumbSchema } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { blogPosts, BLOG_PAGE_SIZE } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";
import metallic from "@/assets/metallic-epoxy.jpg";

const description = "Explore the Pacific Floors And Coatings blog for flooring and epoxy coating articles.";

export const Route = createFileRoute("/blogs/")({
  staticData: { sitemap: true },
  validateSearch: (search: Record<string, unknown>) => ({
    page: search.page === undefined ? undefined : Number(search.page),
  }),
  loaderDeps: ({ search }) => ({ page: search.page }),
  loader: ({ deps }) => {
    const page = deps.page ?? 1;
    const totalPages = Math.max(1, Math.ceil(blogPosts.length / BLOG_PAGE_SIZE));
    if (!Number.isSafeInteger(page) || page < 1 || page > totalPages) throw notFound();
    return { page, totalPages, posts: blogPosts.slice((page - 1) * BLOG_PAGE_SIZE, page * BLOG_PAGE_SIZE) };
  },
  head: ({ loaderData }) => {
    const page = loaderData?.page ?? 1;
    const url = `${SITE_URL}/blogs${page > 1 ? `?page=${page}` : ""}`;
    const title = `${page > 1 ? `Blog - Page ${page}` : "Blog"} | Pacific Floors And Coatings`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Blogs", href: "/blogs" }])),
      }],
    };
  },
  component: BlogsPage,
});

function BlogsPage() {
  const { page, totalPages, posts } = Route.useLoaderData();
  return (
    <>
      <Header />
      <main>
        <div className="mx-auto max-w-[1170px] px-5 pt-10">
          <Breadcrumbs crumbs={[{ label: "Home", href: "/" }, { label: "Blogs", href: "/blogs" }]} />
        </div>
        <PageHero image={metallic} imageWidth={800} imageHeight={1200} eyebrow="Pacific Floors And Coatings" title="Blog" />
        <section className="mx-auto max-w-[1170px] px-5 py-16">
          <h2 className="text-2xl font-black">Articles</h2>
          {posts.length === 0 ? (
            <p className="mt-5 text-muted-foreground">No articles have been published yet.</p>
          ) : (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link key={post.slug} to="/blogs/$slug" params={{ slug: post.slug }} className="group rounded-xl border border-border bg-card p-6 transition hover:border-primary">
                  <h3 className="text-xl font-bold group-hover:text-primary">{post.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{post.description}</p>
                  <span className="mt-5 inline-block text-sm font-bold text-primary">Read article →</span>
                </Link>
              ))}
            </div>
          )}
          {totalPages > 1 && (
            <nav aria-label="Blog pagination" className="mt-10 flex flex-wrap items-center gap-3 text-sm font-semibold">
              {page > 1 && <Link to="/blogs" search={{ page: page === 2 ? undefined : page - 1 }} className="rounded-md border border-border px-4 py-2 hover:border-primary">← Previous</Link>}
              <span aria-current="page" className="px-2 text-muted-foreground">Page {page} of {totalPages}</span>
              {page < totalPages && <Link to="/blogs" search={{ page: page + 1 }} className="rounded-md border border-border px-4 py-2 hover:border-primary">Next →</Link>}
            </nav>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
