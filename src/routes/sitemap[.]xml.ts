import { createFileRoute } from "@tanstack/react-router";
import { getRouterInstance } from "@tanstack/react-start";
import { services, serviceAreas, serviceNeighbourhoods } from "@/lib/site";
import {
  isSitemapRouteIncluded,
  sitemapPathForLocation,
  sitemapStaticPaths,
  sitemapXML,
  type SitemapEntry,
} from "@/lib/sitemap";

const BASE_URL = "https://www.pacificfloorsandcoatings.ca";
// Update this date whenever page content changes.
const LASTMOD = "2026-10-24";

export const Route = createFileRoute("/sitemap.xml")({
  staticData: { sitemap: false },
  server: {
    handlers: {
      GET: async () => {
        const router = await getRouterInstance();
        const entries: SitemapEntry[] = sitemapStaticPaths(router).map((path) => ({ path }));

        const slugRouteId = "/services/$slug";
        if (isSitemapRouteIncluded(router.routesById[slugRouteId])) {
          for (const service of services) {
            const location = router.buildLocation({
              to: "/services/$slug",
              params: { slug: service.slug },
              search: () => ({}),
              hash: "",
            });
            const path = sitemapPathForLocation(router, location, slugRouteId);
            if (path) entries.push({ path });
          }
        }

        const serviceCityRouteId = "/services-in/$citySlug/$serviceSlug";
        if (isSitemapRouteIncluded(router.routesById[serviceCityRouteId])) {
          for (const service of services.filter((item) => item.slug !== "epoxy-flooring")) {
            for (const area of serviceAreas.filter((item) => item.slug !== "surrey")) {
              const location = router.buildLocation({
                to: "/services-in/$citySlug/$serviceSlug",
                params: { citySlug: area.slug, serviceSlug: service.slug },
                search: () => ({}),
                hash: "",
              });
              const path = sitemapPathForLocation(router, location, serviceCityRouteId);
              if (path) entries.push({ path });
            }
          }
        }

        const areaRouteId = "/epoxy-flooring-{$slug}";
        if (isSitemapRouteIncluded(router.routesById[areaRouteId])) {
          for (const area of serviceAreas) {
            const location = router.buildLocation({
              to: "/epoxy-flooring-{$slug}",
              params: { slug: area.slug },
              search: () => ({}),
              hash: "",
            });
            const path = sitemapPathForLocation(router, location, areaRouteId);
            if (path) entries.push({ path });
          }
          for (const neighbourhood of serviceNeighbourhoods) {
            const location = router.buildLocation({
              to: "/epoxy-flooring-{$slug}",
              params: { slug: neighbourhood.slug },
              search: () => ({}),
              hash: "",
            });
            const path = sitemapPathForLocation(router, location, areaRouteId);
            if (path) entries.push({ path });
          }
        }

        if (entries.length === 0) {
          return new Response("No pages are included in this sitemap.", {
            status: 404,
            headers: { "Cache-Control": "no-store" },
          });
        }

        return new Response(sitemapXML(BASE_URL, entries.map((entry) => ({ ...entry, lastmod: LASTMOD }))), {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
