import metallic from "@/assets/metallic-epoxy.jpg";
import metallic1 from "@/assets/marble-floor-installation.jpg";
import metallic2 from "@/assets/epoxy-coating-contractor.jpg";
import metallic3 from "@/assets/garage-floor-coatings.jpg";
import metallic4 from "@/assets/epoxy-floor-installation.jpg";
import flake from "@/assets/flake-epoxy.jpg";
import solid from "@/assets/solid-epoxy.jpg";
import sealed from "@/assets/sealed-concrete.jpg";






import garage from "@/assets/garage-epoxy.jpg";

import garage2 from "@/assets/metallic-epoxy-flooring.jpg";
import commercial from "@/assets/commercial-epoxy.jpg";
import type { Service } from "./services";

export const serviceImages: Record<Service["image"], string> = {
  metallic,
  flake,
  solid,
  sealed,
};

/** Slug-specific photography so each service page shows a matching floor type. */
const slugImages: Record<string, string> = {
  "epoxy-floor-coatings": solid,
  "epoxy-flooring": metallic,
  "garage-epoxy-flooring": garage,

  "residential-epoxy-flooring": garage2,
  "metallic-epoxy-flooring": metallic1,
  "flake-epoxy-flooring": flake,
  "quartz-epoxy-flooring": flake,
  "stone-epoxy-flooring": sealed,
  "polyaspartic-floor-coatings": flake,
  "polyurethane-floor-coatings": solid,

  "marble-floor-installation": metallic2,
  "floor-installation": flake,
  "epoxy-floor-installation": metallic4,
  "epoxy-coating-contractor": metallic3,

  "commercial-epoxy-flooring": commercial,
  "commercial-floor-coatings": commercial,
  "industrial-epoxy-flooring": solid,
  "warehouse-floor-coatings": commercial,
  "parkade-floor-coatings": commercial,
  "commercial-kitchen-floor-coatings": commercial,
  "food-safe-floor-coatings": commercial,
  "restaurant-floor-coatings": commercial,
};

export function serviceImage(service: Service): string {
  return slugImages[service.slug] ?? serviceImages[service.image];
}

export { garage as garageImage, commercial as commercialImage };
