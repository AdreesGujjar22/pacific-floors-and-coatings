import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Logo } from "./Logo";
import { site } from "@/lib/site";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import metallic from "@/assets/metallic-epoxy.jpg";

const nav = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/service-areas", label: "Service Areas" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header({ overlay = false }: { overlay?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${overlay ? "fixed inset-x-0 top-0" : "sticky top-0"} z-50`}>
      <div className="bg-topbar py-2 text-center text-xs font-bold text-topbar-foreground uppercase tracking-[0.14em] sm:text-sm">
        GIVE US A CALL{" "}
        <a href={site.phoneHref} className="text-sm font-black tracking-wide text-primary underline-offset-2 hover:underline sm:text-base">
          {site.phone}
        </a>
      </div>
      <div
        className={`border-b transition-all duration-300 ${
          scrolled
            ? "border-white/10 bg-background/92 shadow-[0_10px_28px_-18px_rgba(0,0,0,0.95)] backdrop-blur-md"
            : "border-white/10 bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1170px] items-center justify-between gap-4 px-5 py-4">
          <Logo />
          <nav className="hidden items-center gap-8 text-[12px] font-medium lg:flex">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-muted-foreground transition hover:text-foreground"
                activeProps={{ className: "text-primary" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild size="sm" className="hidden rounded-full px-6 text-[11px] font-bold uppercase tracking-wider sm:inline-flex">
              <Link to="/contact">Let's Get Started</Link>
            </Button>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="size-10 rounded-md border-border transition hover:border-primary"
                  aria-label="Open menu"
                >
                  <Menu size={18} />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="relative w-[300px] overflow-hidden border-l border-white/10 bg-surface p-0 sm:w-[340px]"
              >
                <img
                  src={metallic}
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/90 via-background/88 to-background/96" />
                <div className="relative z-10 flex h-full flex-col">
                  <div className="border-b border-border px-6 py-5">
                    <Logo />
                  </div>
                  <nav className="flex-1 px-4 py-4">
                    {nav.map((n) => (
                      <Link
                        key={n.to}
                        to={n.to}
                        onClick={() => setOpen(false)}
                        className="block rounded-md px-3 py-3 text-sm font-semibold text-muted-foreground transition hover:bg-background hover:text-foreground"
                        activeProps={{
                          className:
                            "block rounded-md bg-background px-3 py-3 text-sm font-semibold text-primary",
                        }}
                      >
                        {n.label}
                      </Link>
                    ))}
                  </nav>
                  <div className="space-y-3 border-t border-border px-6 py-6">
                    <Button asChild className="w-full rounded-full text-[12px] font-bold uppercase tracking-wider">
                      <Link to="/contact" onClick={() => setOpen(false)}>Get a Free Quote</Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full rounded-full text-[12px] font-bold uppercase tracking-wider">
                      <a href={site.phoneHref}>Call {site.phone}</a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
