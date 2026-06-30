import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Section, PageHero } from "@/components/SiteLayout";
import { useState } from "react";

// Aapki local services-banner image perfect import ho jayegi
import servicesBanner from "@/assets/services-banner.jpg"; 
import archImg from "@/assets/casa-logo-original.webp";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Luxury Architecture, Interiors & Turnkey Execution | Casa Exotique" },
      { name: "description", content: "Architecture, luxury residential interiors, hospitality design, premium retail, developer solutions and end-to-end turnkey execution by Casa Exotique, Gurgaon." },
      { property: "og:title", content: "Casa Exotique — Services" },
      { property: "og:description", content: "Architecture, interiors, hospitality, retail, developer solutions and turnkey execution." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  {
    n: "01",
    t: "Architecture",
    d: "Thoughtfully designed architectural environments that balance spatial planning, natural light, materiality and long-term usability.",
    items: ["Luxury residences", "Villas", "Hospitality environments", "Boutique commercial spaces", "Developer-led architectural concepts"],
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    n: "02",
    t: "Luxury Residential Interiors",
    d: "Highly bespoke homes designed around the client's lifestyle, routines and emotional connection to space.",
    items: ["Penthouses", "Private villas", "High-end apartments", "Personal material narratives", "Timeless detailing"],
    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    n: "03",
    t: "Hospitality Design",
    d: "Immersive hospitality environments that create emotional memory and elevate the guest experience.",
    items: ["Boutique hotels", "Cafés", "Restaurants & lounges", "Luxury dining concepts", "Experiential spaces"],
    img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
  },
  {
    n: "04",
    t: "Luxury Retail Design",
    d: "Retail environments that increase engagement, customer experience and premium brand perception.",
    items: ["Flagship stores", "Brand boutiques", "Pop-up environments", "Showroom concepts", "Display & lighting design"],
    img: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    n: "05",
    t: "Developer Solutions",
    d: "Emotionally persuasive environments that accelerate buyer confidence and enhance project positioning.",
    items: ["Sample apartments", "Sales galleries", "Experience centers", "Clubhouses & lobbies", "Amenity & investor environments"],
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
  },
  {
    n: "06",
    t: "Turnkey Project Execution",
    d: "End-to-end execution with complete project accountability — under a single, integrated system.",
    items: ["Civil & technical coordination", "Custom furniture", "Procurement & lighting", "Fit-outs & finishing", "Project management"],
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
  },
];

function ServicesPage() {
  const [activeTouchId, setActiveTouchId] = useState<string | null>(null);

  return (
    <SiteLayout>
      {/* Dynamic Header Overrides taaki banner top screen tak poora cover kare */}
      <style dangerouslySetInnerHTML={{__html: `
        header {
          background: transparent !important;
          background-color: transparent !important;
          backdrop-filter: none !important;
          -webkit-backdrop-filter: none !important;
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          width: 100% !important;
          z-index: 100 !important;
          box-shadow: none !important;
          border-bottom: 1px solid rgba(255, 255, 255, 0.12) !important;
        }

        header a, header span, header button, nav a, nav span {
          color: #ffffff !important;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4) !important;
        }

        main {
          padding-top: 0 !important;
          max-width: 100% !important;
          width: 100% !important;
        }
      `}} />

      {/* HERO IMAGE BANNER - Full Bleed merged to the top view */}
      <div className="absolute left-0 right-0 w-screen h-[50vh] lg:h-[65vh] overflow-hidden bg-black z-0">
        <img 
          src={servicesBanner} 
          alt="Services Banner" 
          className="w-full h-full object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/50 pointer-events-none" />
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      </div>

      {/* Spacer taaki texts sections thik banner ke neeche slide ho kar aayein */}
      <div className="h-[50vh] lg:h-[65vh] w-full invisible pointer-events-none" />

      <PageHero
        eyebrow="Practice"
        title="Architecture, interiors and execution — under one studio."
        intro="From private residences to large-scale developer environments, Casa Exotique brings the entire design and delivery process under one accountable team."
      />

      <Section className="space-y-16 lg:space-y-24 mb-20">
        {services.map((s, i) => {
          const isActive = activeTouchId === s.n;
          return (
            <article 
              key={s.n} 
              onTouchStart={() => setActiveTouchId(s.n)}
              className="relative grid lg:grid-cols-12 gap-6 lg:gap-10 border-t border-border/60 pt-8 lg:pt-12 transition-all duration-500 p-6 overflow-hidden group min-h-[300px]"
            >
              {/* Background Cards Effects */}
              <div 
                className={`absolute inset-0 z-0 pointer-events-none transition-all duration-700 bg-cover bg-center ${
                  isActive 
                    ? "opacity-50 scale-105" 
                    : "opacity-25 lg:opacity-20 lg:group-hover:opacity-60 lg:group-hover:scale-105"
                }`}
                style={{ backgroundImage: `url(${s.img})` }}
              />
              
              {/* Gradient Setup for Clean Visibility */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent lg:from-background lg:via-background/80 z-0 pointer-events-none" />

              {/* Number Layout */}
              <div className={`relative z-10 lg:col-span-2 font-display text-4xl lg:text-5xl transition-colors duration-300 ${
                isActive ? "text-accent scale-105" : "text-accent"
              }`}>
                {s.n}
              </div>

              {/* Grid Titles */}
              <div className="relative z-10 lg:col-span-5">
                <h2 className="font-display text-2xl lg:text-4xl text-white lg:text-foreground">{s.t}</h2>
                <p className="mt-3 lg:mt-5 text-base lg:text-lg leading-relaxed text-gray-300 lg:text-muted-foreground">{s.d}</p>
              </div>

              {/* Item Mapping lists */}
              <ul className="relative z-10 lg:col-span-5 space-y-2 lg:space-y-3 lg:pt-3">
                {s.items.map((it) => (
                  <li key={it} className="flex gap-4 border-b border-white/10 lg:border-border/40 pb-2.5 lg:pb-3 text-sm">
                    <span className="text-accent font-bold">—</span>
                    <span className="text-gray-200 lg:text-foreground/90">{it}</span>
                  </li>
                ))}
              </ul>

              {/* Final Footer Button Component trigger */}
              {i === services.length - 1 && (
                <div className="relative z-10 lg:col-start-3 lg:col-span-10 pt-4 w-full">
                  <Link to="/contact" className="inline-flex items-center justify-center w-full lg:w-auto text-center px-7 py-4 bg-primary text-primary-foreground text-[0.72rem] uppercase tracking-[0.28em] hover:bg-accent transition-colors active:scale-95">
                    Discuss your project
                  </Link>
                </div>
              )}
            </article>
          );
        })}
      </Section>
    </SiteLayout>
  );
}