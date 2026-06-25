import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Section, Eyebrow } from "@/components/SiteLayout";
import founder from "@/assets/founder.jpg";

export const Route = createFileRoute("/founder")({
  head: () => ({
    meta: [
      { title: "Bhawana Bhatnagar — Founder & Creative Director, Casa Exotique" },
      { name: "description", content: "Bhawana Bhatnagar is the founder and creative director of Casa Exotique, a luxury design-build studio in Gurgaon known for highly personalized residential, hospitality and developer-led environments." },
      { property: "og:title", content: "Bhawana Bhatnagar — Founder, Casa Exotique" },
      { property: "og:description", content: "Design as atmosphere, emotion, and the invisible relationship between people and space." },
      { property: "og:url", content: "/founder" },
    ],
    links: [{ rel: "canonical", href: "/founder" }],
  }),
  component: FounderPage,
});

function FounderPage() {
  return (
    <SiteLayout>
      {/* 1. Full Page Dark Container for Ultra-Cool Premium Look */}
      <div className="relative w-full min-h-screen bg-black overflow-hidden py-16 lg:py-24">
        
        {/* 2. Background Image Layer with Luxury Overlay Blur */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-[0.16] mix-blend-luminosity pointer-events-none scale-105"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80')` 
          }}
        />
        
        {/* 3. Deep Cinematic Masking Gradients */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/85 to-neutral-900/40 z-0 pointer-events-none" />

        {/* Main Grid Content Area */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          
          <Section className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center mt-12 lg:mt-20">
            
            {/* Left Side: Editorial Image & Magazine Style Captions */}
            <div className="lg:col-span-5 group relative">
              
              {/* Image Glow Element behind the picture */}
              <div className="absolute -inset-1.5 bg-gradient-to-b from-accent/20 to-transparent rounded-lg blur-2xl opacity-70 group-hover:opacity-100 transition duration-1000 pointer-events-none" />
              
              <figure className="relative bg-neutral-900/50 p-3 rounded-lg border border-neutral-800/40 backdrop-blur-sm">
                <div className="overflow-hidden rounded-md">
                  <img 
                    src={founder} 
                    alt="Bhawana Bhatnagar, founder of Casa Exotique" 
                    loading="lazy" 
                    width={1000} 
                    height={1300} 
                    className="w-full object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700 ease-out" 
                  />
                </div>
                <figcaption className="mt-5 flex justify-between items-baseline text-sm px-1">
                  <span className="font-display text-xl text-neutral-100 tracking-wide">Bhawana Bhatnagar</span>
                  <span className="text-[0.62rem] uppercase tracking-[0.25em] text-accent font-medium">— Founder & CD</span>
                </figcaption>
              </figure>
            </div>
            
            {/* Right Side: Strong Elegant Text Typography */}
            <div className="lg:col-span-7 space-y-8">
              <span className="text-[0.68rem] uppercase tracking-[0.3em] text-accent font-semibold block">— Founder Profile</span>
              
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white font-light tracking-tight leading-[1.1]">
                Design as <em className="text-accent not-italic font-normal">atmosphere</em> — and the invisible relationship between people and space.
              </h1>
              
              <div className="space-y-6 text-base lg:text-lg leading-relaxed text-neutral-400 font-light">
                <p>
                  For Bhawana Bhatnagar, design is not simply about aesthetics. It is about
                  atmosphere. Emotion. Human behavior. And the quiet, invisible relationship
                  between people and the spaces they inhabit.
                </p>
                <p>
                  Under her leadership, Casa Exotique has developed into a luxury design-build
                  studio recognized for highly personalized environments that balance
                  architectural sophistication with execution excellence.
                </p>
                <p>
                  Her design philosophy draws inspiration from hospitality, global luxury culture,
                  material storytelling and modern architectural minimalism.
                </p>
                <p className="text-neutral-100 font-normal">
                  Rather than following trends, she focuses on creating environments with
                  <em className="not-italic text-accent italic"> emotional permanence</em> — spaces that
                  continue to feel relevant, calm and deeply human over time.
                </p>
              </div>

              {/* Action Luxury Call-to-action Button */}
              <div className="pt-4">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center px-8 py-5 bg-white text-black font-medium text-[0.72rem] uppercase tracking-[0.28em] hover:bg-accent hover:text-white transition-all duration-300 active:scale-95 shadow-xl"
                >
                  Work with the studio
                </Link>
              </div>
            </div>

          </Section>
        </div>
      </div>
    </SiteLayout>
  );
}