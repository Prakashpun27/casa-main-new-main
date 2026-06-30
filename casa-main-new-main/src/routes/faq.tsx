import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Section } from "@/components/SiteLayout";

// Dono assets bilkul sahi folder mein hain aapke
import stoneDarkImg from "@/assets/stone-dark.jpg"; 
import faqBannerImg from "@/assets/faq-banner.jpg"; 

const faqs = [
  {
    q: "What makes Casa Exotique different from other luxury interior designers in Gurgaon?",
    a: "Casa Exotique combines architecture, interior design, turnkey execution and developer solutions under one integrated system — allowing clients to experience seamless project delivery with greater design consistency and execution control.",
  },
  {
    q: "Does Casa Exotique handle turnkey luxury interior projects?",
    a: "Yes. We provide complete turnkey project execution including civil work, lighting, HVAC coordination, custom furniture, procurement, fit-outs, project management and final styling.",
  },
  {
    q: "Does Casa Exotique design hospitality and retail spaces?",
    a: "Yes. The studio specializes in luxury hospitality environments, boutique commercial spaces, cafés, restaurants and premium retail experiences designed to enhance customer engagement and brand perception.",
  },
  {
    q: "Does Casa Exotique work with real estate developers?",
    a: "Yes. We partner with developers for sample apartments, sales galleries, clubhouses, experience centers and premium amenity environments designed to improve buyer engagement and project positioning.",
  },
  {
    q: "Where is Casa Exotique based and where do you take on projects?",
    a: "Our studio is based in Gurgaon, Haryana. We undertake luxury residential, hospitality, retail and developer projects across Delhi NCR and India.",
  },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Luxury Interior Designers Gurgaon | Casa Exotique" },
      { name: "description", content: "Answers to common questions about Casa Exotique's luxury design-build process, turnkey execution, hospitality and developer work." },
      { property: "og:title", content: "Frequently Asked Questions — Casa Exotique" },
      { property: "og:description", content: "About our process, turnkey execution and hospitality work." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map(f => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }),
    }],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <SiteLayout>
      <div className="relative w-full min-h-screen bg-black overflow-hidden">
        
        {/* PICHLA GLOBAL STICKY BACKGROUND (STONE TEXTURE) */}
        <div className="fixed inset-0 top-0 z-0 opacity-[0.12] mix-blend-screen pointer-events-none w-full h-full">
          <img 
            src={stoneDarkImg} 
            alt="Casa Exotique Luxury Stone Texture" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#000_90%)]" />
        </div>

        {/* CONTENT ENVELOPE */}
        <div className="relative z-10 w-full -mt-24 pt-24">
          
          {/* CUSTOM CUSTOM HERO BANNER BLOCK (Replaced PageHero entirely) */}
          <div className="relative w-full min-h-[50vh] flex items-center overflow-hidden py-20 lg:py-32 px-4 sm:px-8 lg:px-16 border-b border-neutral-900">
            
            {/* Banner Background Image Rendered Directly */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <img 
                src={faqBannerImg} 
                alt="FAQ Banner Background" 
                className="w-full h-full object-cover object-center opacity-30" 
              />
              {/* Premium dark shading overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
            </div>

            {/* Recreated exact layout from PageHero inside the grid */}
            <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-[1px] bg-accent/60 inline-block"></span>
                  <p className="text-[0.68rem] uppercase tracking-[0.3em] text-neutral-400 font-medium">
                    Journal · FAQ
                  </p>
                </div>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
                  Frequently asked questions.
                </h1>
              </div>
              <div className="lg:col-span-5 lg:pl-12">
                <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed max-w-md">
                  A closer look at how Casa Exotique works — from first conversation to final reveal.
                </p>
              </div>
            </div>
          </div>

          {/* QUESTIONS LIST */}
          <Section>
            <div className="border-t border-neutral-800/80 mt-12">
              {faqs.map((f, i) => (
                <details key={i} className="group border-b border-neutral-800/80 py-8 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex justify-between items-start gap-8 cursor-pointer list-none select-none">
                    <h2 className="font-display text-2xl lg:text-3xl pr-6 text-neutral-100 group-hover:text-accent transition-colors duration-300">
                      {f.q}
                    </h2>
                    <span className="font-display text-3xl text-accent transition-transform duration-300 group-open:rotate-45 shrink-0">
                      +
                    </span>
                  </summary>
                  <p className="mt-6 max-w-3xl text-base lg:text-lg leading-relaxed text-neutral-400 font-light transition-all duration-300">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </Section>

          <Section className="mt-32 mb-10">
            <div className="bg-neutral-900/60 backdrop-blur-md border border-neutral-800 p-10 lg:p-16 flex flex-wrap items-end justify-between gap-8">
              <h2 className="font-display text-3xl lg:text-5xl max-w-2xl text-white">
                Have a project in mind?
              </h2>
              <Link to="/contact" className="inline-flex items-center px-7 py-4 border border-accent/60 text-[0.72rem] uppercase tracking-[0.28em] text-white hover:border-accent hover:text-accent transition-colors duration-300">
                Begin Your Project
              </Link>
            </div>
          </Section>

        </div>
      </div>
    </SiteLayout>
  );
}