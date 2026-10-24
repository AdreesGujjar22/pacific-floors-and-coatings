import { createFileRoute, redirect } from "@tanstack/react-router";

// Duplicate of /epoxy-flooring-{slug}: redirect so each area has one unique page.
export const Route = createFileRoute("/service-areas/$slug")({
  staticData: { sitemap: false },
  beforeLoad: ({ params }) => {
    throw redirect({ to: "/epoxy-flooring-{$slug}", params: { slug: params.slug }, statusCode: 301 });
  },
});
