import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Section, PageHero, Eyebrow } from "@/components/SiteLayout";
import img from "@/assets/project-5.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Casa Exotique — Luxury Design-Build Studio in Gurgaon" },
      { name: "description", content: "Casa Exotique is a Gurgaon-based luxury architecture and interior design-build studio creating refined residential, hospitality, retail and developer-led environments across India." },
      { property: "og:title", content: "About Casa Exotique" },
      { property: "og:description", content: "A multidisciplinary luxury studio combining architecture, interiors, custom manufacturing and turnkey execution." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      {/* 1. HERO VIDEO BANNER - Completely Safe Render */}
      <div className="relative w-full h-[50vh] lg:h-[70vh] overflow-hidden bg-black">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-80"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-luxury-interior-design-of-a-living-room-41618-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/40 pointer-events-none" />
      </div>

      <PageHero
        eyebrow="The Studio"
        title="A practice built on vision and execution."
        intro="Established in 2019, Casa Exotique has evolved into a multidisciplinary studio creating environments where architecture, atmosphere and craft meet."
      />

      <Section className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        <div className="lg:col-span-7 order-2 lg:order-1 space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            Casa Exotique is a Gurgaon-based luxury architecture and interior design-build
            studio known for creating refined residential, hospitality, retail and
            developer-led environments across India.
          </p>
          <p className="text-foreground font-display text-2xl leading-snug">
            “Exceptional spaces require both creative vision and execution control.”
          </p>
          <p>
            Over the years, the studio has grown into a multidisciplinary practice combining
            architecture, luxury interiors, turnkey execution, custom furniture, fit-outs,
            developer solutions and hospitality environments.
          </p>
          <p>
            Every project is approached through the lens of timeless design, emotional
            experience and technical precision — quietly, deliberately, without compromise.
          </p>
        </div>
        <figure className="lg:col-span-5 order-1 lg:order-2">
          <img src={img} alt="Casa Exotique residential project" loading="lazy" width={1100} height={1400} className="w-full h-[60vh] lg:h-[78vh] object-cover" />
        </figure>
      </Section>

      <Section className="mt-32">
        <div className="grid lg:grid-cols-4 gap-10 border-t border-border/60 pt-16">
          {[
            { k: "2019", v: "Studio established in Gurgaon" },
            { k: "60+", v: "Bespoke environments delivered" },
            { k: "1", v: "Integrated team — design to delivery" },
            { k: "India", v: "Practicing across NCR & beyond" },
          ].map((s) => (
            <div key={s.k}>
              <div className="font-display text-5xl text-accent">{s.k}</div>
              <p className="mt-3 text-sm text-muted-foreground">{s.v}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 2. WHAT WE PRACTICE - Fallback Pure CSS Hover & Mobile Active Background Effect */}
      <Section className="mt-32">
        <div className="relative grid lg:grid-cols-12 gap-12 p-8 lg:p-12 overflow-hidden group transition-all duration-500 rounded-xl bg-black/10 dark:bg-white/[0.02]">
          
          {/* Dynamic Background: Mobile par halka sa visible rahega aur hover/active karne par perfect fade in karega */}
          <div 
            className="absolute inset-0 z-0 pointer-events-none transition-all duration-700 bg-cover bg-center opacity-25 lg:opacity-0 group-hover:opacity-40 group-active:opacity-40 scale-100 group-hover:scale-105"
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80')` 
            }}
          />
          
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-transparent z-0 pointer-events-none" />

          {/* Left Column */}
          <div className="relative z-10 lg:col-span-5">
            <Eyebrow>What We Practice</Eyebrow>
            <h2 className="mt-6 font-display text-4xl">Disciplines under one roof.</h2>
          </div>

          {/* Right Column List */}
          <ul className="relative z-10 lg:col-span-7 grid sm:grid-cols-2 gap-x-10 gap-y-5 text-base">
            {["Architecture","Luxury Interiors","Turnkey Execution","Custom Furniture","Fit-outs","Developer Solutions","Hospitality Environments","Material & Lighting Curation"].map((i) => (
              <li key={i} className="border-b border-border/60 pb-4 flex justify-between items-center transition-colors duration-300 hover:border-accent">
                <span>{i}</span>
                <span className="text-accent">—</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section className="mt-32 mb-10">
        <div className="border-t border-border/60 pt-16 flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-3xl lg:text-5xl max-w-2xl">Meet the founder behind the practice.</h2>
          <Link to="/founder" className="inline-flex items-center px-7 py-4 border border-foreground/30 text-[0.72rem] uppercase tracking-[0.28em] hover:border-accent hover:text-accent">
            Bhawana Bhatnagar
          </Link>
        </div>
      </Section>
    </SiteLayout>
  );
}