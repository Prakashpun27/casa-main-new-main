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
    ]
  },
  { to: "/services", label: "Services" },
  { 
    to: "/projects", 
    label: "Projects",
    submenu: [
      { to: "/portfolio", label: "Portfolio" } // Yahan aapka Portfolio add ho gaya
    ]
  },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="sticky top-0 z-40 backdrop-blur bg-background/80 border-b border-border/60">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 h-20 flex items-center justify-between relative">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/src/assets/casa-logo-icon.png"
              alt="Casa Exotique"
              className="h-10 w-auto"
            />
            {/* Hidden on mobile, shown on desktop only to avoid overlaps */}
            <span className="hidden lg:inline font-display text-xl tracking-wide text-foreground">
              Casa Exotique
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-9">
            {NAV.map((n) => {
              if ("submenu" in n && n.submenu) {
                return (
                  <div key={n.label} className="relative group/link py-2">
                    <Link 
                      to={n.to}
                      className="text-[0.78rem] uppercase tracking-[0.2em] text-white group-hover/link:text-accent flex items-center gap-2"
                      activeProps={{ className: "text-accent" }}
                    >
                      {n.label}
                      <svg 
                        width="10" 
                        height="6" 
                        viewBox="0 0 10 6" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        className="transition-transform duration-300 group-hover/link:-rotate-180"
                      >
                        <path 
                          d="M1 1L5 5L9 1" 
                          stroke="#ffffff" 
                          className="group-hover/link:stroke-[var(--accent,currentColor)]"
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                    
                    <div className="absolute left-1/2 -translate-x-1/2 top-full hidden group-hover/link:flex flex-col min-w-[160px] bg-black/90 backdrop-blur border border-white/10 p-2 mt-1 z-50 rounded shadow-xl">
                      {n.submenu.map((sub) => (
                        <Link
                          key={sub.to}
                          to={sub.to}
                          className="block px-4 py-2 text-center text-[0.75rem] uppercase tracking-[0.15em] text-white hover:text-accent hover:bg-white/10 transition-colors premium-text-glow"
                          activeProps={{ className: "text-accent" }}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className="text-[0.78rem] uppercase tracking-[0.2em] relative text-white hover:text-accent"
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

          {/* Mobile Menu Burger Trigger Button */}
          <button
            aria-label="Menu"
            className="lg:hidden text-white z-[60] relative p-2"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <span className="block relative w-6 h-6">
                <span className="block absolute top-3 left-0 w-6 h-0.5 bg-white rotate-45 transition-transform" />
                <span className="block absolute top-3 left-0 w-6 h-0.5 bg-white -rotate-45 transition-transform" />
              </span>
            ) : (
              <>
                <span className="block w-7 h-px bg-current mb-1.5" />
                <span className="block w-7 h-px bg-current mb-1.5" />
                <span className="block w-5 h-px bg-current ml-auto" />
              </>
            )}
          </button>
        </div>

        {/* Fixed Mobile Overlay Layout */}
        {open && (
          <div className="lg:hidden fixed inset-0 top-0 left-0 w-full h-screen bg-black/30 backdrop-blur-xl z-50 px-8 pt-28 pb-10 flex flex-col items-end overflow-y-auto">
            <nav className="flex flex-col items-end gap-6 text-right w-full max-w-xs">
              {NAV.map((n) => {
                if ("submenu" in n && n.submenu) {
                  return (
                    <div key={n.label} className="w-full flex flex-col items-end gap-3">
                      <Link
                        to={n.to}
                        onClick={() => setOpen(false)}
                        className="text-lg font-medium uppercase tracking-[0.24em] text-white hover:text-accent transition-colors premium-text-glow"
                        activeProps={{ className: "text-accent" }}
                      >
                        {n.label}
                      </Link>
                      <div className="flex flex-col items-end gap-2 pr-2 border-r border-white/20 mr-1 py-1">
                        {n.submenu.map((sub) => (
                          <Link
                            key={sub.to}
                            to={sub.to}
                            onClick={() => setOpen(false)}
                            className="text-xs uppercase tracking-[0.18em] text-white/70 hover:text-accent transition-colors"
                            activeProps={{ className: "text-accent font-bold" }}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={n.to}
                    to={n.to}
                    onClick={() => setOpen(false)}
                    className="text-lg font-medium uppercase tracking-[0.24em] text-white hover:text-accent transition-colors premium-text-glow"
                    activeProps={{ className: "text-accent" }}
                  >
                    {n.label}
                  </Link>
                );
              })}
            </nav>
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
            <p>©️ {new Date().getFullYear()} Casa Exotique. All rights reserved.</p>
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