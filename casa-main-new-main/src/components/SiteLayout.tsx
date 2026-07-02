import { Link, useLocation } from "@tanstack/react-router";
import { useState, useEffect, type ReactNode } from "react";

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
      { to: "/portfolio", label: "Portfolio" }
    ]
  },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteLayout({ 
  children, 
  transparentHeader: customTransparentHeader
}: { 
  children: ReactNode;
  transparentHeader?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  
  // --- UPDATED TRANSPARENT ROUTE DETECTION ---
  // Ab isme '/', '/faq', '/contact' ke sath poora '/founder' section bhi transparent list mein include ho gaya hai
  const isTransparentRoute = [
    "/", 
    "/faq", 
    "/contact", 
    "/founder", 
    "/founder/news", 
    "/founder/awards"
  ].includes(location.pathname);
  
  const transparentHeader = customTransparentHeader ?? isTransparentRoute;

  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      return savedTheme ? savedTheme === "dark" : true;
    }
    return true;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden flex flex-col bg-white dark:bg-black text-black dark:text-white selection:bg-accent/30 relative transition-colors duration-500">
      
      <header 
        className={`sticky top-0 z-40 w-full max-w-full transition-all duration-300 ${
          transparentHeader 
            ? "bg-transparent border-b border-transparent mb-[-80px] text-white" 
            : "backdrop-blur bg-white/90 dark:bg-black/90 border-b border-neutral-200 dark:border-neutral-800 text-black dark:text-white"
        }`}
      >
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 h-20 flex items-center gap-16 relative">
          
          <Link to="/" className="flex items-center shrink-0">
            <img
              src="/src/assets/casa-logo-icon.png"
              alt="Casa Exotique"
              className={`h-10 w-auto transition-all ${!transparentHeader && "dark:invert-0 invert dark:bg-transparent"}`}
            />
          </Link>
          
          <nav className="hidden lg:flex items-center gap-9">
            {NAV.map((n) => {
              if ("submenu" in n && n.submenu) {
                return (
                  <div key={n.label} className="relative group/link py-2">
                    <Link 
                      to={n.to}
                      className={`text-[0.78rem] uppercase tracking-[0.2em] hover:text-accent flex items-center gap-2 transition-colors ${transparentHeader ? "text-white" : "text-neutral-800 dark:text-white"}`}
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
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                    
                    <div className="absolute left-1/2 -translate-x-1/2 top-full hidden group-hover/link:flex flex-col min-w-[140px] pt-4 z-50">
                      <div className="flex flex-col gap-1 bg-white/95 dark:bg-neutral-950/95 border border-neutral-200 dark:border-neutral-800 p-2 rounded shadow-xl">
                        {n.submenu.map((sub) => (
                          <Link
                            key={sub.to}
                            to={sub.to}
                            className="block text-center text-[0.75rem] uppercase tracking-[0.15em] text-neutral-700 dark:text-neutral-200 hover:text-accent py-2 transition-colors"
                            activeProps={{ className: "text-accent" }}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={`text-[0.78rem] uppercase tracking-[0.2em] relative hover:text-accent font-medium transition-colors ${transparentHeader ? "text-white" : "text-neutral-800 dark:text-white"}`}
                  activeProps={{ className: "text-accent" }}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>
          
          <Link
            to="/contact"
            className={`hidden lg:inline-flex items-center ml-auto text-[0.72rem] uppercase tracking-[0.28em] border-b border-accent hover:text-accent pb-0.5 transition-colors ${transparentHeader ? "text-white" : "text-black dark:text-white"}`}
          >
            Begin Your Project
          </Link>

          <button
            aria-label="Menu"
            className={`lg:hidden z-[60] relative p-2 ml-auto ${transparentHeader ? "text-white" : "text-black dark:text-white"}`}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <span className="block relative w-6 h-6">
                <span className="block absolute top-3 left-0 w-6 h-0.5 bg-black dark:bg-white rotate-45 transition-transform" />
                <span className="block absolute top-3 left-0 w-6 h-0.5 bg-black dark:bg-white -rotate-45 transition-transform" />
              </span>
            ) : (
              <>
                <span className={`block w-7 h-px mb-1.5 ${transparentHeader ? "bg-white" : "bg-black dark:bg-white"}`} />
                <span className={`block w-7 h-px mb-1.5 ${transparentHeader ? "bg-white" : "bg-black dark:bg-white"}`} />
                <span className={`block w-5 h-px ml-auto ${transparentHeader ? "bg-white" : "bg-black dark:bg-white"}`} />
              </>
            )}
          </button>
        </div>

        {open && (
          <div className="lg:hidden fixed inset-0 top-0 left-0 w-full h-screen bg-white/95 dark:bg-black/95 backdrop-blur-xl z-50 px-8 pt-28 pb-10 flex flex-col items-end overflow-y-auto">
            <nav className="flex flex-col items-end gap-6 text-right w-full max-w-xs">
              {NAV.map((n) => {
                if ("submenu" in n && n.submenu) {
                  return (
                    <div key={n.label} className="w-full flex flex-col items-end gap-3">
                      <Link
                        to={n.to}
                        onClick={() => setOpen(false)}
                        className="text-lg font-medium uppercase tracking-[0.24em] text-neutral-900 dark:text-white hover:text-accent transition-colors"
                        activeProps={{ className: "text-accent" }}
                      >
                        {n.label}
                      </Link>
                      <div className="flex flex-col items-end gap-2 pr-2 border-r border-neutral-200 dark:border-neutral-800 mr-1 py-1">
                        {n.submenu.map((sub) => (
                          <Link
                            key={sub.to}
                            to={sub.to}
                            onClick={() => setOpen(false)}
                            className="text-xs uppercase tracking-[0.18em] text-neutral-600 dark:text-neutral-200 hover:text-accent transition-colors"
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
                    className="text-lg font-medium uppercase tracking-[0.24em] text-neutral-900 dark:text-white hover:text-accent transition-colors"
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

      <main className="flex-1 w-full max-w-full overflow-x-hidden relative transition-colors duration-500">
        {children}
      </main>

      <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 text-black dark:text-white w-full max-w-full transition-colors duration-500">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 py-20 grid gap-14 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center group">
              <img
                src="/src/assets/casa-logo-icon.png"
                alt="Casa Exotique Icon"
                className="h-10 w-auto opacity-90 group-hover:opacity-100 dark:invert-0 invert dark:bg-transparent"
              />
            </Link>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 font-light">
              A luxury architecture and design-build studio creating bespoke residences,
              hospitality environments, and developer-led experiences across India.
            </p>
            <p className="eyebrow mt-10 text-accent font-semibold">— Studio</p>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 font-light">Gurgaon, Haryana, India</p>
          </div>
          <div>
            <p className="eyebrow text-neutral-500 dark:text-neutral-400 font-medium">Navigate</p>
            <ul className="mt-5 space-y-3 text-sm">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-neutral-600 dark:text-neutral-400 hover:text-accent font-light transition-colors">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow text-neutral-500 dark:text-neutral-400 font-medium">Practice</p>
            <ul className="mt-5 space-y-3 text-sm text-neutral-600 dark:text-neutral-400 font-light">
              <li className="hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors">Luxury Residences</li>
              <li className="hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors">Hospitality Design</li>
              <li className="hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors">Premium Retail</li>
              <li className="hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors">Developer Experiences</li>
              <li className="hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors">Turnkey Execution</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-200 dark:border-neutral-900 bg-neutral-100 dark:bg-neutral-900">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500">
            <p>©️ {new Date().getFullYear()} Casa Exotique. All rights reserved.</p>
            <p className="eyebrow text-[0.62rem] text-neutral-400 dark:text-neutral-600 tracking-[0.2em]">Designed in Gurgaon</p>
          </div>
        </div>
      </footer>

      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl border transition-all duration-300 backdrop-blur-md hover:scale-110 active:scale-95 text-xl bg-neutral-100 dark:bg-white/10 text-black dark:text-white border-neutral-300 dark:border-white/20 hover:bg-neutral-200 dark:hover:bg-white/20"
        title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      >
        {isDarkMode ? "🌙" : "☀️"}
      </button>
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
    <section className={`mx-auto w-full max-w-[1400px] px-6 lg:px-12 ${className}`}>
      {children}
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="eyebrow flex items-center gap-3 text-neutral-600 dark:text-neutral-400">
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
    <Section className="pt-36 pb-16 lg:pt-48 lg:pb-24 grid lg:grid-cols-12 gap-12 items-end relative z-10">
      <div className="lg:col-span-7">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-6 font-display text-5xl lg:text-7xl leading-[1.02] text-neutral-900 dark:text-white">{title}</h1>
      </div>
      {intro && (
        <div className="lg:col-span-5">
          <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">{intro}</p>
        </div>
      )}
    </Section>
  );
}