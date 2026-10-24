import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Music2, Youtube } from "lucide-react";
import { Logo } from "./Logo";
import { services, site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import metallic from "@/assets/metallic-epoxy.jpg";

const popular = services.slice(0, 8);

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-border bg-surface">
      <img
        src={metallic}
        loading="lazy"
        decoding="async"
        width={800}
        height={1200}
        alt="Metallic epoxy floor finish"
        className="absolute inset-0 z-0 h-full w-full object-cover opacity-30 mix-blend-screen"
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-background/95 via-background/88 to-background/72" />
      <div className="relative z-10 mx-auto max-w-[1170px] px-5 pt-12">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Find us</p>
            <h2 className="mt-2 text-2xl font-black">Pacific Floors and Coatings · Surrey, BC</h2>
          </div>
          <a href={site.mapLink} target="_blank" rel="noreferrer" className="text-sm font-bold text-primary hover:underline">
            Get Directions →
          </a>
        </div>
        <iframe
          title="Pacific Floors and Coatings Google Business Profile map"
          src={site.mapEmbed}
          className="mt-6 h-[320px] w-full rounded-md border-0 sm:h-[380px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <div className="relative mx-auto grid max-w-[1170px] gap-10 px-5 py-14 text-left md:grid-cols-[1.5fr_0.8fr_0.8fr]">
        <div className="text-left">
          <div className="flex justify-start">
            <Logo />
          </div>
          <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
            <li>
              <a href={site.phoneHref} className="hover:text-foreground transition-colors">{site.phone}</a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-foreground transition-colors">{site.email}</a>
            </li>
            <li>
              <span className="font-semibold text-foreground">Hours:</span> {site.businessHours.text}
            </li>
            <li>
              <a href={site.mapLink} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
                {site.address}
              </a>
            </li>
          </ul>
          <div className="mt-5 flex justify-start gap-3">
            <a href={site.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="text-muted-foreground transition hover:text-primary"><Instagram size={18} /></a>
            <a href={site.socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="text-muted-foreground transition hover:text-primary"><Facebook size={18} /></a>
            <a href={site.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted-foreground transition hover:text-primary"><Linkedin size={18} /></a>
            <a href={site.socials.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok" className="text-muted-foreground transition hover:text-primary"><Music2 size={18} /></a>
            <a href={site.socials.youtube} target="_blank" rel="noreferrer" aria-label="YouTube" className="text-muted-foreground transition hover:text-primary"><Youtube size={18} /></a>
            <a href={site.socials.google} target="_blank" rel="noreferrer" aria-label="Google Business Profile" className="inline-flex h-[18px] w-[18px] items-center justify-center text-[18px] font-bold leading-none text-muted-foreground transition hover:text-primary">G</a>
          </div>
        </div>
        <div>
          <p className="eyebrow">Company</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground font-medium">
            <li><Link to="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
            <li><Link to="/service-areas" className="hover:text-foreground transition-colors">Service Areas</Link></li>
            <li><Link to="/reviews" className="hover:text-foreground transition-colors">Reviews</Link></li>
            <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow">Popular services</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground font-medium">
            {popular.map((s) => (
              <li key={s.slug}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="hover:text-foreground transition-colors">
                  {s.title}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Button asChild variant="link" className="h-auto p-0 text-primary font-bold hover:brightness-110">
                <Link to="/services">All services →</Link>
              </Button>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative z-10 border-t border-border py-5 text-center text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
        © {new Date().getFullYear()} {site.name}. Proudly serving Surrey, BC and Metro Vancouver.
      </div>
      <div className="relative z-10 flex items-center justify-center gap-2 border-t border-border px-5 py-3 text-xs text-muted-foreground">
        <span>Powered by</span>
        <a
          href="https://www.metrovalleydigital.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
        >
          <img src="/developer_site_logo.png" alt="" width={24} height={24} className="h-6 w-6 object-contain" />
          <span>Metro Valley Digital</span>
        </a>
      </div>
    </footer>
  );
}
