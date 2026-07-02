import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Section, Eyebrow } from "@/components/SiteLayout";
import { useEffect, useRef, useState, type ReactNode } from "react";
import p1 from "@/assets/Intro.jpg"; 
import philosophyImg from "@/assets/philosophy.jpg"; // Philosophy section ke liye nayi photo
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import heroVideo from "@/assets/hero-banner.mp4"; 

// Left side narrative image import
import devShowcase from "@/assets/developer-showcase.jpg"; 

// Service section backgrounds
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

// --- REVERSIBLE TWO-WAY SCROLL REVEAL COMPONENT ---
function ScrollReveal({ 
  children, 
  variant = "fade-up", 
  delay = 0,
  className = "" 
}: { 
  children: ReactNode; 
  variant?: "fade-up" | "fade-left" | "fade-right" | "scale-up";
  delay?: number;
  className?: string;
}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        } else {
          setIsIntersecting(false);
        }
      },
      { threshold: 0.1, rootMargin: "-40px 0px -40px 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const variants = {
    "fade-up": "translate-y-16 opacity-0",
    "fade-left": "translate-x-16 opacity-0",
    "fade-right": "-translate-x-16 opacity-0",
    "scale-up": "scale-[0.97] opacity-0"
  };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: isIntersecting ? `${delay}ms` : "0ms" }}
      className={`transition-all duration-[1100ms] ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform ${
        isIntersecting ? "translate-y-0 translate-x-0 scale-100 opacity-100" : variants[variant]
      } ${className}`}
    >
      {children}
    </div>
  );
}

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
    <SiteLayout transparentHeader={true}>
      <style dangerouslySetInnerHTML={{__html: `
        main {
          padding-top: 0 !important;
          max-width: 100% !important;
          width: 100% !important;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />

      {/* --- SECTION 1: FULL SCREEN DYNAMIC HERO --- */}
      <section className="relative h-screen w-full overflow-hidden bg-black z-10">
        <div className="absolute inset-0 z-0">
          <video
            src={heroVideo}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />
        </div>
        
        <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-24 lg:px-12">
          <div className="max-w-4xl space-y-4">
            <Eyebrow><span className="text-white/80">Luxury Architecture · Interiors · Hospitality · Commercial</span></Eyebrow>
            <h1 className="font-display text-[2.5rem] sm:text-6xl lg:text-[5.5rem] leading-[1.02] tracking-tight text-white font-light">
              We Design <span className="italic text-accent">What Luxury</span> Feels Like.
            </h1>
          </div>
        </div>

        <div className="absolute bottom-6 left-6 right-6 lg:left-12 lg:right-12 flex justify-between text-[0.68rem] uppercase tracking-[0.28em] text-white/60 z-20 font-medium">
          <span>Residence 07 · Golf Course Road</span>
          <span>Gurgaon, IN</span>
        </div>
      </section>

      {/* MAIN INTEGRATED LAYOUT FLOW CONTAINER */}
      <div className="bg-white dark:bg-black text-black dark:text-white transition-colors duration-500 relative z-20">

        {/* --- SECTION 2: INTRO & BRAND CONTEXT (FIRST) --- */}
        <Section className="py-24 lg:py-32 border-b border-neutral-100 dark:border-neutral-900">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* LEFT SIDE: INTRO PHOTO WITH SCALE-UP ANIMATION */}
            <div className="lg:col-span-6">
              <ScrollReveal variant="scale-up">
                <div className="overflow-hidden rounded shadow-2xl aspect-[4/5] bg-neutral-100 dark:bg-neutral-900">
                  <img 
                    src={p1} 
                    alt="Casa Exotique Spatial Narrative" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.5s] ease-out" 
                  />
                </div>
              </ScrollReveal>
            </div>
            
            {/* RIGHT SIDE: MAIN INTRO TEXT & CTA BUTTONS */}
            <div className="lg:col-span-6 space-y-6 lg:pl-6">
              <ScrollReveal variant="fade-left">
                <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 font-light">
                  Casa Exotique is a Gurgaon-based luxury architecture and design-build studio
                  creating bespoke residences, hospitality environments, premium retail spaces,
                  and developer-led experiences across India.
                </p>
              </ScrollReveal>
              
              <ScrollReveal variant="fade-left" delay={150}>
                <p className="text-base leading-relaxed text-neutral-600 dark:text-neutral-400 font-light">
                  From concept to turnkey execution — designed with architectural clarity,
                  emotional intelligence, and precision-led delivery.
                </p>
              </ScrollReveal>

              {/* CALL TO ACTION BUTTONS */}
              <ScrollReveal variant="fade-left" delay={250}>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-7 py-4 font-medium text-[0.72rem] uppercase tracking-[0.28em] hover:bg-accent hover:text-white transition-colors bg-black text-white dark:bg-white dark:text-black"
                  >
                    Begin Your Project
                  </Link>
                  <Link
                    to="/projects"
                    className="inline-flex items-center px-7 py-4 border text-[0.72rem] uppercase tracking-[0.28em] hover:border-accent hover:text-accent transition-colors border-black/30 text-black dark:border-white/30 dark:text-white"
                  >
                    Explore Our Work
                  </Link>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </Section>

        {/* --- SECTION 3: PHILOSOPHY CONTENT BLOCK (NEW EXCLUSIVE SECTION WITH PHOTO) --- */}
        <Section className="py-24 lg:py-32 border-b border-neutral-100 dark:border-neutral-900 bg-neutral-50/50 dark:bg-neutral-950/20">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* LEFT SIDE: PHILOSOPHY PHOTO WITH SCALE-UP ANIMATION */}
            <div className="lg:col-span-6 lg:order-1">
              <ScrollReveal variant="scale-up">
                <div className="overflow-hidden rounded shadow-2xl aspect-[4/5] bg-neutral-100 dark:bg-neutral-900">
                  <img 
                    src={philosophyImg} 
                    alt="Casa Exotique Design Philosophy" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.5s] ease-out" 
                  />
                </div>
              </ScrollReveal>
            </div>

            {/* RIGHT SIDE: PHILOSOPHY CONTENT */}
            <div className="lg:col-span-6 lg:order-2 space-y-6 lg:pr-6">
              <ScrollReveal variant="fade-right">
                <Eyebrow>Philosophy</Eyebrow>
                <h2 className="mt-4 font-display text-3xl lg:text-4xl leading-tight text-neutral-900 dark:text-white font-light">
                  Built for clients who expect more than <em className="text-accent not-italic font-normal">beautiful spaces</em>.
                </h2>
              </ScrollReveal>

              <ScrollReveal variant="fade-right" delay={150}>
                <div className="space-y-4 text-sm font-light leading-relaxed text-neutral-500 dark:text-neutral-400">
                  <p>Luxury is defined by proportion, atmosphere, and precision. Our multidisciplinary team combines architectural development, structural execution, and interior architecture under one simple ecosystem.</p>
                  <p className="text-neutral-900 dark:text-white font-normal mt-2">No chaos. No compromise. No diluted vision.</p>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </Section>

        {/* --- SECTION 4: TRUST META STRIP --- */}
        <div className="bg-neutral-50 dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-900 transition-colors duration-500">
          <Section className="py-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-y-4 gap-x-6 text-center">
              {trust.map((t, idx) => (
                <ScrollReveal key={t} variant="fade-up" delay={idx * 80}>
                  <span className="text-[0.68rem] uppercase tracking-[0.22em] font-medium text-neutral-500 dark:text-neutral-400">
                    {t}
                  </span>
                </ScrollReveal>
              ))}
            </div>
          </Section>
        </div>

        {/* --- SECTION 5: PRACTICE & SERVICES SHOWCASE GRID --- */}
        <Section className="py-24 lg:py-36">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
            <ScrollReveal variant="fade-up">
              <Eyebrow>Practice</Eyebrow>
              <h2 className="mt-4 font-display text-4xl lg:text-5xl text-neutral-900 dark:text-white font-light">
                Luxury architecture & interior services
              </h2>
            </ScrollReveal>
            <ScrollReveal variant="fade-left" delay={150}>
              <Link to="/services" className="text-[0.72rem] uppercase tracking-[0.28em] border-b border-accent pb-0.5 hover:text-accent text-neutral-900 dark:text-white">
                All services
              </Link>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, idx) => (
              <ScrollReveal key={s.n} variant="scale-up" delay={(idx % 3) * 100}>
                <article className="group relative overflow-hidden rounded bg-black aspect-[3/4] cursor-pointer">
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:scale-105 transition-transform duration-1000 ease-out z-0"
                    style={{ backgroundImage: `url(${s.img})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20 z-10 transition-opacity duration-500 group-hover:opacity-90" />
                  
                  <div className="absolute inset-0 z-20 p-8 lg:p-10 flex flex-col justify-between">
                    <div className="flex items-baseline justify-between border-b border-white/10 pb-4">
                      <span className="font-display text-2xl text-accent font-mono">{s.n}</span>
                      <span className="text-[0.65rem] uppercase tracking-widest text-white/50">Service</span>
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="font-display text-2xl text-white font-light">{s.t}</h3>
                      <p className="text-xs leading-relaxed text-white/70 font-light line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                        {s.d}
                      </p>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </Section>

        {/* --- SECTION 6: REFINE PORTFOLIO GRID --- */}
        <Section className="py-24 lg:py-36 bg-neutral-50 dark:bg-neutral-950 border-y border-neutral-200 dark:border-neutral-900 max-w-full">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
              <ScrollReveal variant="fade-up">
                <Eyebrow>Selected Work</Eyebrow>
                <h2 className="mt-4 font-display text-4xl lg:text-5xl text-neutral-900 dark:text-white font-light">A practice of refined environments</h2>
              </ScrollReveal>
              <ScrollReveal variant="fade-left" delay={150}>
                <Link to="/projects" className="text-[0.72rem] uppercase tracking-[0.28em] border-b border-accent pb-0.5 hover:text-accent text-neutral-900 dark:text-white">
                  View all projects
                </Link>
              </ScrollReveal>
            </div>
            
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
              <figure className="lg:col-span-7 group cursor-pointer">
                <ScrollReveal variant="scale-up">
                  <div className="overflow-hidden rounded aspect-[4/3]">
                    <img src={p2} alt="Marble dining room" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.2s] ease-out" />
                  </div>
                  <figcaption className="mt-5 flex justify-between text-sm text-neutral-900 dark:text-white">
                    <span className="font-display text-xl font-light">Penthouse Aria</span>
                    <span className="text-[0.7rem] uppercase tracking-wider text-neutral-500">Residence · Gurgaon</span>
                  </figcaption>
                </ScrollReveal>
              </figure>
              
              <figure className="lg:col-span-5 group cursor-pointer">
                <ScrollReveal variant="scale-up" delay={150}>
                  <div className="overflow-hidden rounded aspect-[4/5]">
                    <img src={p3} alt="Boutique hotel lobby" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.2s] ease-out" />
                  </div>
                  <figcaption className="mt-5 flex justify-between text-sm text-neutral-900 dark:text-white">
                    <span className="font-display text-xl font-light">Maison No. 12</span>
                    <span className="text-[0.7rem] uppercase tracking-wider text-neutral-500">Hospitality · Delhi</span>
                  </figcaption>
                </ScrollReveal>
              </figure>
              
              <figure className="lg:col-span-5 group cursor-pointer">
                <ScrollReveal variant="scale-up">
                  <div className="overflow-hidden rounded aspect-[4/5]">
                    <img src={p4} alt="Luxury retail boutique" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.2s] ease-out" />
                  </div>
                  <figcaption className="mt-5 flex justify-between text-sm text-neutral-900 dark:text-white">
                    <span className="font-display text-xl font-light">Atelier Travertine</span>
                    <span className="text-[0.7rem] uppercase tracking-wider text-neutral-500">Retail · Mumbai</span>
                  </figcaption>
                </ScrollReveal>
              </figure>
              
              <figure className="lg:col-span-7 group cursor-pointer">
                <ScrollReveal variant="scale-up" delay={150}>
                  <div className="overflow-hidden rounded aspect-[4/3]">
                    <img src={s1Bg} alt="Luxury villa exterior" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.2s] ease-out" />
                  </div>
                  <figcaption className="mt-5 flex justify-between text-sm text-neutral-900 dark:text-white">
                    <span className="font-display text-xl font-light">Villa Selene</span>
                    <span className="text-[0.7rem] uppercase tracking-wider text-neutral-500">Architecture · NCR</span>
                  </figcaption>
                </ScrollReveal>
              </figure>
            </div>
          </div>
        </Section>

        {/* --- SECTION 7: TWO-WAY DIRECTIONAL REVEAL FOR DEVELOPERS --- */}
        <Section className="py-24 lg:py-36">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <ScrollReveal variant="scale-up">
                <div className="overflow-hidden rounded shadow-2xl bg-neutral-100 dark:bg-neutral-900 aspect-[4/5]">
                  <img 
                    src={devShowcase} 
                    alt="Developer Showcase" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.5s] ease-out" 
                  />
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <ScrollReveal variant="fade-left" delay={150}>
                <Eyebrow>for developers</Eyebrow>
                <h2 className="font-display text-3xl lg:text-5xl tracking-tight leading-tight font-light mt-2">
                  High-conversion commercial & sample environment masterworks
                </h2>
              </ScrollReveal>
              <ScrollReveal variant="fade-left" delay={250}>
                <p className="text-base font-light leading-relaxed text-neutral-600 dark:text-neutral-400">
                  Casa Exotique helps developers create high-conversion environments through
                  strategically designed sample apartments, experience centers, clubhouses,
                  arrival sequences, sales galleries and branded amenity zones.
                </p>
              </ScrollReveal>
              <ScrollReveal variant="fade-left" delay={355}>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 pt-4 text-sm text-neutral-800 dark:text-neutral-300 font-light">
                  {["Sample apartments","Experience centers","Clubhouses","Premium arrival experiences","Sales galleries","Branded amenity zones"].map((i) => (
                    <li key={i} className="flex gap-3 items-center"><span className="text-accent text-lg">—</span>{i}</li>
                  ))}
                </ul>
              </ScrollReveal>
              <ScrollReveal variant="fade-left" delay={450}>
                <div className="pt-4">
                  <Link to="/services" className="inline-flex items-center text-[0.72rem] uppercase tracking-[0.28em] border-b border-accent pb-0.5 text-black dark:text-white font-medium hover:text-accent transition-colors">
                    Developer Solutions
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Section>

        {/* --- SECTION 8: METHOD / STRATEGY FLOW --- */}
        <Section className="py-24 lg:py-36 bg-neutral-50 dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-900 max-w-full">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mb-16 space-y-3">
              <ScrollReveal variant="fade-up">
                <Eyebrow>Method</Eyebrow>
                <h2 className="font-display text-4xl lg:text-5xl tracking-tight leading-tight text-neutral-900 dark:text-white font-light">
                  Design & execution, in <br className="hidden sm:inline" />six considered movements
                </h2>
              </ScrollReveal>
            </div>
            
            <div className="overflow-x-auto no-scrollbar snap-x snap-mandatory">
              <ol className="flex gap-8 pb-6 w-max">
                {process.map((p, index) => (
                  <li key={p.n} className="snap-start w-[80vw] sm:w-[40vw] lg:w-[22vw] min-w-[280px]">
                    <ScrollReveal variant="fade-up" delay={index * 80}>
                      <div className="border-t pt-8 space-y-4 border-neutral-300 dark:border-neutral-800 hover:border-accent dark:hover:border-accent transition-colors duration-500 group relative">
                        <div className="flex items-baseline justify-between">
                          <span className="font-display text-3xl text-accent font-mono">{p.n}</span>
                          <span className="text-[0.6rem] uppercase tracking-[0.25em] text-neutral-400 group-hover:text-accent transition-colors font-medium">
                            {index !== process.length - 1 ? "Next →" : "Reveal"}
                          </span>
                        </div>

                        <h3 className="font-display text-xl font-light text-neutral-800 dark:text-neutral-100 group-hover:text-neutral-900 dark:group-hover:text-white">
                          {p.t}
                        </h3>
                        
                        <p className="text-xs leading-relaxed font-light text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-800 dark:group-hover:text-neutral-200">
                          {p.d}
                        </p>
                      </div>
                    </ScrollReveal>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Section>

        {/* --- SECTION 9: DIFFERENTIATOR CONTENT BLOCK --- */}
        <Section className="py-24 lg:py-36 border-t border-neutral-200 dark:border-neutral-900">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-4">
              <ScrollReveal variant="fade-right">
                <Eyebrow>Differentiator</Eyebrow>
                <h2 className="font-display text-4xl lg:text-5xl leading-tight text-neutral-900 dark:text-white font-light">
                  Why Casa Exotique <br />Is <em className="text-accent not-italic font-serif">Different</em>
                </h2>
                <p className="text-sm text-neutral-500 font-light max-w-sm leading-relaxed mt-4">
                  We do not believe luxury should feel loud. True luxury feels effortless because every detail has already been considered.
                </p>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-7 space-y-8">
              <ScrollReveal variant="fade-left">
                <p className="text-lg font-light leading-relaxed text-neutral-600 dark:text-neutral-400">
                  Most firms focus only on visual design. Casa Exotique approaches projects through an integrated lens of technical mastery and emotional value.
                </p>
              </ScrollReveal>
              
              <ScrollReveal variant="fade-left" delay={150}>
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4 border-l pl-6 lg:pl-10 py-2 border-neutral-200 dark:border-neutral-800">
                  {[
                    "architecture",
                    "emotional storytelling",
                    "execution intelligence",
                    "hospitality thinking",
                    "material depth",
                    "spatial psychology"
                  ].map((item) => (
                    <li key={item} className="group flex items-center gap-4 text-sm tracking-wide text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors">
                      <span className="w-1.5 h-1.5 bg-accent/60 rounded-full group-hover:bg-accent group-hover:scale-125 transition-all duration-300" />
                      <span className="lowercase font-light tracking-[0.05em]">{item}</span>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>
          </div>
        </Section>

        {/* --- SECTION 10: CALL TO ACTION (CTA) --- */}
        <Section className="py-24 border-t border-neutral-200 dark:border-neutral-800">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-4">
              <ScrollReveal variant="fade-right">
                <Eyebrow>Begin</Eyebrow>
                <h2 className="font-display text-3xl lg:text-5xl leading-tight text-neutral-900 dark:text-white font-light">
                  A residence. A hotel. A flagship. <br />Let's design what comes next.
                </h2>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <ScrollReveal variant="fade-left" delay={150}>
                <Link to="/contact" className="inline-flex items-center px-8 py-5 font-medium text-[0.72rem] uppercase tracking-[0.28em] hover:bg-accent hover:text-white transition-colors bg-black text-white dark:bg-white dark:text-black">
                  Schedule a Design Consultation
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </Section>

      </div>
    </SiteLayout>
  );
}

export default Index;