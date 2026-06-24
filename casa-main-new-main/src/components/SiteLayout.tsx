import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import logoIconAsset from "@/assets/casa-logo-icon.png.asset.json";
import logoAsset from "@/assets/casa-logo-original.webp.asset.json";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "Studio" },
  { 
    to: "/founder", 
    label: "Founder",
    submenu: [
      { to: "/founder/news", label: "News"},
      { to: "/founder/awards", label: "Awards"}
    ]},
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="sticky top-0 z-40 backdrop-blur bg-background/80 border-b border-border/60">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/src/assets/casa-logo-icon.png"
              alt="Casa Exotique"
              className="h-10 w-auto"
            />
            <span className="font-display text-xl tracking-wide text-foreground">Casa Exotique</span>
          </Link>
          <nav className="hidden lg:flex items-center gap-9">
            {NAV.map((n) => {
    // Agar menu item ke paas submenu hai (jaise Founder)
    if ("submenu" in n && n.submenu) {
      return (
        <div key={n.label} className="relative group">
          {/* Main Button jo dikhega */}
          <button className="text-[0.78rem] uppercase tracking-[0.2em] text-foreground hover:text-accent flex items-center gap-1 py-2">
            {n.label}
          </button>
          
          {/* Hover karne par khulne wala Dropdown */}
          <div className="absolute left-0 top-full尊 hidden group-hover:block min-w-[160px] bg-background border border-border/40 shadow-xl p-2 rounded-sm z-50">
            {n.submenu.map((sub) => (
              <Link
                key={sub.to}
                to={sub.to}
                className="block px-4 py-2 text-[0.75rem] uppercase tracking-[0.1em] text-foreground hover:text-accent hover:bg-muted/50 rounded-sm transition-colors"
              >
                {sub.label}
              </Link>
            ))}
          </div>
        </div>
      );
    }

    // Normal Links ke liye (jaise Home, Studio, etc.)
    return (
      <Link
        key={n.to}
        to={n.to}
        className="text-[0.78rem] uppercase tracking-[0.2em]"
        activeProps={{ className: "text-accent" }}
      >
        {n.label}
      </Link>
    );
  })}
          </nav>
          <Link
            to="/contact"
            className="hidden lg:inline-flex items-center text-[0.72rem] uppercase tracking-[0.28em] border-b border-accent text-foreground hover:text-accent pb-0.5"
          >
            Begin Your Project
          </Link>
          <button
            aria-label="Menu"
            className="lg:hidden text-foreground"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="block w-7 h-px bg-current mb-1.5" />
            <span className="block w-7 h-px bg-current mb-1.5" />
            <span className="block w-5 h-px bg-current ml-auto" />
          </button>
        </div>
        {open && (
          <div className="lg:hidden border-t border-border/60 px-6 py-6 flex flex-col gap-4 bg-background">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.22em] text-foreground/80"
              >
                {n.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="mt-32 border-t border-border/60 bg-secondary/50">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 py-20 grid gap-14 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <img
              src={logoAsset.url}
              alt="Casa Exotique"
              className="h-16 w-auto"
            />
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              A luxury architecture and design-build studio creating bespoke residences,
              hospitality environments, and developer-led experiences across India.
            </p>
            <p className="eyebrow mt-10">Studio</p>
            <p className="mt-3 text-sm">Gurgaon, Haryana, India</p>
          </div>
          <div>
            <p className="eyebrow">Navigate</p>
            <ul className="mt-5 space-y-3 text-sm">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="hover:text-accent">{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Practice</p>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li>Luxury Residences</li>
              <li>Hospitality Design</li>
              <li>Premium Retail</li>
              <li>Developer Experiences</li>
              <li>Turnkey Execution</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border/60">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} Casa Exotique. All rights reserved.</p>
            <p className="eyebrow text-[0.62rem]">Designed in Gurgaon</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function Section({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`mx-auto max-w-[1400px] px-6 lg:px-12 ${className}`}>
      {children}
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="eyebrow">
      <span className="rule" />
      {children}
    </p>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <Section className="pt-24 pb-16 lg:pt-36 lg:pb-24 grid lg:grid-cols-12 gap-12 items-end">
      <div className="lg:col-span-7">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-6 font-display text-5xl lg:text-7xl leading-[1.02]">{title}</h1>
      </div>
      {intro && (
        <div className="lg:col-span-5">
          <p className="text-lg leading-relaxed text-muted-foreground">{intro}</p>
        </div>
      )}
    </Section>
  );
}