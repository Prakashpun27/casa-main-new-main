import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Section, Eyebrow } from "@/components/SiteLayout";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import heroVideo from "@/assets/hero-banner.mp4"; 

// Har service ke liye background image imports
import s1Bg from "@/assets/project-4.jpg"; 
import s2Bg from "@/assets/project-1.jpg"; 
import s3Bg from "@/assets/project-2.jpg"; 
import s4Bg from "@/assets/project-3.jpg"; 
import s5Bg from "@/assets/project-1.jpg"; 
import s6Bg from "@/assets/project-2.jpg"; 

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Casa Exotique | Luxury Interior Designers & Turnkey Design Build, Gurgaon" },
      { name: "description", content: "Casa Exotique is a Gurgaon-based luxury architecture and design-build studio creating bespoke residences, hospitality environments, premium retail, and developer-led experiences across India." },
    ],
  }),
  component: Index,
});

const trust = [
  "Luxury Residences",
  "Hospitality Environments",
  "Developer Experience Centers",
  "Premium Retail Spaces",
  "Turnkey Execution",
];

const services = [
  { n: "01", t: "Architecture", d: "Spatial planning, natural light and materiality composed for long-term usability — for villas, residences, hospitality and boutique commercial spaces.", img: s1Bg },
  { n: "02", t: "Luxury Residential Interiors", d: "Penthouses, villas and high-end apartments crafted around personal rituals, with timeless detailing and personalized material narratives.", img: s2Bg },
  { n: "03", t: "Hospitality Design", d: "Boutique hotels, restaurants, cafés and lounges designed to create emotional memory and elevate the guest experience.", img: s3Bg },
  { n: "04", t: "Luxury Retail", d: "Brand-immersive retail environments that increase engagement, dwell time and the perception of premium quality.", img: s4Bg },
  { n: "05", t: "Developer Solutions", d: "Sample apartments, sales galleries, clubhouses and amenity zones engineered to accelerate buyer conviction.", img: s5Bg },
  { n: "06", t: "Turnkey Execution", d: "Civil, technical coordination, custom furniture, procurement, lighting and finishing — all managed under one accountable system.", img: s6Bg },
];

const process = [
  { n: "01", t: "Discovery", d: "Understanding the client's vision, lifestyle, business goals and spatial requirements." },
  { n: "02", t: "Spatial Strategy", d: "Architectural planning, circulation, zoning and experiential mapping developed with precision." },
  { n: "03", t: "Design Development", d: "Material palettes, lighting, furniture language and detailing refined into a cohesive environment." },
  { n: "04", t: "Technical Resolution", d: "Execution drawings, services coordination, procurement planning and structured timelines." },
  { n: "05", t: "Turnkey Execution", d: "Site delivery, vendor coordination, custom manufacturing, fit-outs and finishing." },
  { n: "06", t: "Final Styling & Reveal", d: "Every final layer curated so the space feels complete, balanced and emotionally resonant." },
];

function Index() {
  return (
    <SiteLayout>
      {/* Dynamic Header Overrides for Transparent Home Hero Section */}
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

        .premium-text-glow {
          text-shadow: 0 2px 12px rgba(0, 0, 0, 0.9) !important;
        }
      `}} />

      {/* Hero Video Section */}
      <div className="absolute left-0 right-0 w-screen h-[85vh] lg:h-screen bg-black overflow-hidden z-0">
        <video
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        
        {/* Lower Canvas Labels */}
        <div className="absolute bottom-6 left-10 right-10 flex justify-between text-xs uppercase tracking-[0.28em] text-white z-20 font-medium">
          <span>Residence 07 · Golf Course Road</span>
          <span>Gurgaon, IN</span>
        </div>
      </div>

      {/* Invisible Grid Spacer */}
      <div className="h-[85vh] lg:h-screen w-full invisible pointer-events-none" />

      {/* Main Content Title (Heading) */}
      <Section className="mt-20 lg:mt-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-7">
            <Eyebrow>Luxury Architecture · Interiors · Hospitality</Eyebrow>
            <h1 className="mt-6 font-display text-[2.75rem] sm:text-6xl lg:text-[5.5rem] leading-[0.98] tracking-tight">
              We Design <span className="italic text-accent">What Luxury</span> Feels Like.
            </h1>
          </div>
          <div className="lg:col-span-5 space-y-8">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Casa Exotique is a Gurgaon-based luxury architecture and design-build studio
              creating bespoke residences, hospitality environments, premium retail spaces,
              and developer-led experiences across India.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              From concept to turnkey execution — designed with architectural clarity,
              emotional intelligence, and precision-led delivery.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center px-7 py-4 bg-primary text-primary-foreground text-[0.72rem] uppercase tracking-[0.28em] hover:bg-accent transition-colors"
              >
                Begin Your Project
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center px-7 py-4 border border-foreground/30 text-[0.72rem] uppercase tracking-[0.28em] hover:border-accent hover:text-accent transition-colors"
              >
                Explore Our Work
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Trust strip */}
      <Section className="mt-20">
        <div className="border-y border-border/70 py-8 grid grid-cols-2 md:grid-cols-5 gap-y-4 gap-x-6 text-center">
          {trust.map((t) => (
            <span key={t} className="text-[0.72rem] uppercase tracking-[0.22em] text-foreground/70">
              {t}
            </span>
          ))}
        </div>
      </Section>

      {/* Philosophy */}
      <Section className="mt-32 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <Eyebrow>Philosophy</Eyebrow>
          <h2 className="mt-6 font-display text-4xl lg:text-5xl leading-tight">
            Built for clients who expect more than <em className="text-accent not-italic">beautiful spaces</em>.
          </h2>
        </div>
        <div className="lg:col-span-7 space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            At Casa Exotique, we believe luxury is not defined by excess. It is defined by
            precision. By proportion. By atmosphere. By how a space makes people feel long
            after they leave it.
          </p>
          <p>
            Our multidisciplinary team combines architecture, interior design, technical
            execution, custom manufacturing, and turnkey project management under one
            integrated ecosystem.
          </p>
          <p className="text-foreground">
            No chaos. No compromise. No diluted vision.
          </p>
        </div>
      </Section>

      {/* Services */}
      <Section className="mt-32">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <Eye-brow>Practice</Eye-brow>
            <h2 className="mt-6 font-display text-4xl lg:text-5xl">
              Luxury architecture & interior services
            </h2>
          </div>
          <Link to="/services" className="text-[0.72rem] uppercase tracking-[0.28em] border-b border-accent pb-0.5 hover:text-accent">
            All services
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-border/60">
          {services.map((s) => (
            <article 
              key={s.n} 
              className="border-r border-b border-border/60 p-8 lg:p-10 group relative overflow-hidden bg-cover bg-center transition-all duration-500"
              style={{ backgroundImage: `url(${s.img})` }}
            >
              <div className="absolute inset-0 bg-background/90 md:bg-background/85 group-hover:bg-background/65 transition-colors duration-300 z-0" />
              
              <div className="relative z-10">
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-3xl text-accent">{s.n}</span>
                  <span className="text-xs uppercase tracking-[0.28em] text-muted-foreground/80">Service</span>
                </div>
                <h3 className="mt-6 font-display text-2xl text-foreground">{s.t}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {s.d}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Featured projects */}
      <Section className="mt-32">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <Eyebrow>Selected Work</Eyebrow>
            <h2 className="mt-6 font-display text-4xl lg:text-5xl">A practice of refined environments</h2>
          </div>
          <Link to="/projects" className="text-[0.72rem] uppercase tracking-[0.28em] border-b border-accent pb-0.5 hover:text-accent">
            View all projects
          </Link>
        </div>
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10">
          <figure className="lg:col-span-7 group overflow-hidden">
            <div className="overflow-hidden">
              <img src={p1} alt="Marble dining room" loading="lazy" width={1100} height={1400} className="w-full h-[60vh] object-cover group-hover:scale-[1.03] transition-transform duration-700" />
            </div>
            <figcaption className="mt-5 flex justify-between text-sm">
              <span className="font-display text-xl">Penthouse Aria</span>
              <span className="eyebrow">Residence · Gurgaon</span>
            </figcaption>
          </figure>
          <figure className="lg:col-span-5 group overflow-hidden">
            <div className="overflow-hidden">
              <img src={p2} alt="Boutique hotel lobby" loading="lazy" width={1400} height={1000} className="w-full h-[60vh] object-cover group-hover:scale-[1.03] transition-transform duration-700" />
            </div>
            <figcaption className="mt-5 flex justify-between text-sm">
              <span className="font-display text-xl">Maison No. 12</span>
              <span className="eyebrow">Hospitality · Delhi</span>
            </figcaption>
          </figure>
          <figure className="lg:col-span-5 group overflow-hidden">
            <div className="overflow-hidden">
              <img src={p3} alt="Luxury retail boutique" loading="lazy" width={1100} height={1400} className="w-full h-[55vh] object-cover group-hover:scale-[1.03] transition-transform duration-700" />
            </div>
            <figcaption className="mt-5 flex justify-between text-sm">
              <span className="font-display text-xl">Atelier Travertine</span>
              <span className="eyebrow">Retail · Mumbai</span>
            </figcaption>
          </figure>
          <figure className="lg:col-span-7 group overflow-hidden">
            <div className="overflow-hidden">
              <img src={p4} alt="Luxury villa exterior" loading="lazy" width={1400} height={1000} className="w-full h-[55vh] object-cover group-hover:scale-[1.03] transition-transform duration-700" />
            </div>
            <figcaption className="mt-5 flex justify-between text-sm">
              <span className="font-display text-xl">Villa Selene</span>
              <span className="eyebrow">Architecture · NCR</span>
            </figcaption>
          </figure>
        </div>
      </Section>

      {/* Developer positioning */}
      <Section className="mt-32">
        <div className="bg-primary text-primary-foreground p-10 lg:p-20 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <p className="eyebrow text-bone/70">For Developers</p>
            <h2 className="mt-6 font-display text-4xl lg:text-5xl leading-tight">
              Today's buyers do not purchase square footage. They purchase <em className="text-accent not-italic">aspiration</em>.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-bone/80 leading-relaxed">
            <p>
              Casa Exotique helps developers create high-conversion environments through
              strategically designed sample apartments, experience centers, clubhouses,
              arrival sequences, sales galleries and branded amenity zones.
            </p>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 pt-4 text-sm">
              {["Sample apartments","Experience centers","Clubhouses","Premium arrival experiences","Sales galleries","Branded amenity zones"].map((i) => (
                <li key={i} className="flex gap-3"><span className="text-accent">—</span>{i}</li>
              ))}
            </ul>
            <Link to="/services" className="inline-flex mt-4 items-center text-[0.72rem] uppercase tracking-[0.28em] border-b border-accent pb-0.5">
              Developer Solutions
            </Link>
          </div>
        </div>
      </Section>

      {/* --- Method/Process Section with Premium Full-Width Background Image --- */}
      <section className="relative overflow-hidden bg-black text-white py-24 px-6 lg:px-16 mt-32 rounded-xl">
        {/* 1. Background Image using pre-imported asset p4 (Villa Selene) */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-[0.22] mix-blend-luminosity scale-105 pointer-events-none"
          style={{ backgroundImage: `url(${p4})` }}
        />
        
        {/* 2. Premium Linear Mask Layer for seamless reading comfort */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/85 to-transparent z-0 pointer-events-none" />

        {/* Content Box */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <span className="text-[0.68rem] uppercase tracking-[0.3em] text-accent font-medium block mb-4">— Method</span>
            <h2 className="font-display text-4xl lg:text-5xl tracking-tight text-white leading-tight">
              Design & execution, in <br className="hidden sm:inline" />six considered movements
            </h2>
          </div>
          
          <ol className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {process.map((p) => (
              <li key={p.n} className="group border-t border-neutral-800/60 pt-6 space-y-4 hover:border-accent transition-colors duration-300">
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-3xl text-accent transition-transform duration-300 group-hover:translate-x-1 inline-block">
                    {p.n}
                  </span>
                  <span className="text-[0.6rem] uppercase tracking-[0.25em] text-neutral-500 font-medium">Movement</span>
                </div>
                <h3 className="font-display text-2xl text-neutral-100 font-light">{p.t}</h3>
                <p className="text-sm leading-relaxed text-neutral-400 font-light group-hover:text-neutral-200 transition-colors duration-300">
                  {p.d}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <Section className="mt-32 mb-10">
        <div className="border-t border-border/60 pt-20 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <Eyebrow>Begin</Eyebrow>
            <h2 className="mt-6 font-display text-4xl lg:text-6xl leading-tight">
              A residence. A hotel. A flagship. Let's design what comes next.
            </h2>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <Link to="/contact" className="inline-flex items-center px-8 py-5 bg-primary text-primary-foreground text-[0.72rem] uppercase tracking-[0.28em] hover:bg-accent transition-colors">
              Schedule a Design Consultation
            </Link>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}