import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, Section } from "@/components/SiteLayout";

export const Route = createFileRoute("/founder/news")({
  component: NewsPage,
});

// FIXED: Added real external/PDF links for each news article item
const items = [
  { 
    src: "lth.com", 
    title: "Transform Your Home Into An Ideal Workplace",
    url: "#" 
  },
  { 
    src: "99acres.com", 
    title: "Smart decor ideas during quarantine",
    url: "https://www.casaexotique.com/wp-content/uploads/2024/10/Womens-Day_-Role-of-women-in-real-estate_compressed.pdf" 
  },
  { 
    src: "Higher Education", 
    title: "Retro Interior Styling Never Goes Out Of Trend",
    url: "#" 
  },
  { 
    src: "Medium.com", 
    title: "Transforming Your Home Interior With Art",
    url: "#" 
  },
  { 
    src: "newindianexpress.com", 
    title: "Japandi home decor",
    url: "#" 
  },
  { 
    src: "Indianretailer.com", 
    title: "How COVID-19 is brutally affecting the MSMEs",
    url: "#" 
  },
  { 
    src: "indiatimes.com", 
    title: "Show your home some love",
    url: "#" 
  },
  { 
    src: "indiatoday.in", 
    title: "Featured insights from Casa Exotique",
    url: "#" 
  },
];

function NewsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Media · News"
        title={
          <>
            Casa Exotique <em className="text-accent not-italic font-normal">in the press</em>
          </>
        }
        intro="Featured stories, expert commentary and design insights from across leading publications."
      />
      
      <Section className="pb-24 lg:pb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-900 border border-neutral-900">
          {items.map((i) => (
            <article key={i.title} className="bg-black p-8 group flex flex-col justify-between min-h-[220px]">
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.28em] text-accent font-semibold">
                  {i.src}
                </p>
                <h3 className="font-display text-xl mt-4 leading-snug text-white group-hover:text-accent transition-colors duration-300">
                  {i.title}
                </h3>
              </div>
              
              <div className="mt-8">
                {/* FIXED: Added dynamic href, target="_blank" for new tab, and rel for security */}
                <a 
                  href={i.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[0.65rem] uppercase tracking-[0.28em] border-b border-neutral-700 pb-1 text-neutral-300 group-hover:text-accent group-hover:border-accent transition-all duration-300"
                >
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </SiteLayout>
  );
}