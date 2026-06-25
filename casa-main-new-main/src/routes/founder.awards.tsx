import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, Section } from "@/components/SiteLayout";

export const Route = createFileRoute("/founder/awards")({
  component: AwardsPage,
});

const awards = [
  {
    title: "Interior Designer of the Year (Asia) 2022",
    body: "Ms. Bhawana Bhatnagar, founder of Casa Exotique, was honored with the prestigious 'Interior Designer of the Year (Asia) 2022' award by WBR Corp, UK Ltd, at the House of Commons, London. Her relentless hard work and innovative vision in revolutionizing the interior decoration segment have earned her recognition beyond borders, making the nation proud.",
  },
  {
    title: "Times Visionary Leaders",
    body: "Bhawana Bhatnagar, a business extraordinaire and virtuoso. Casa Exotique is the aptly named interior design company that can make any living space the pinnacle of luxury and comfort. Having completed the Management Programme in International Business from IIFT, Bhawana has sharpened her skills in International Business Management, Foreign Trade, Overseas Procurement, and Offshore Resource Management.",
  },
  {
    title: "Times 40 Under 40 North — 2022",
    body: "Ms. Bhatnagar's efforts were recognized with the eminent Times 40 Under 40 North-2022 for her excellence in interior design — highlighting her remarkable contributions and dedication to revolutionizing the interior decoration industry.",
  },
  {
    title: "Outlook Women Entrepreneur of the Year",
    body: "Success comes to those who work hard, and Bhawana Bhatnagar exemplifies this truth. Her relentless dedication has been honored by Outlook, naming her Women Entrepreneur of the Year.",
  },
  {
    title: "ASSOCHAM — Outstanding Contribution Interior Design 2021",
    body: "Heartfelt gratitude to ASSOCHAM India for the prestigious felicitation certification — an achievement made all the sweeter by occurring on the auspicious occasion of International Women's Day.",
  },
  {
    title: "The Times Exemplary Leaders — Outstanding Interior Designer of the Year 2022",
    body: "Recognised among the country's most exemplary leaders for outstanding contributions to interior design.",
  },
  {
    title: "ET Inspiring Women Leaders — 2023",
    body: "Honored among India's most inspiring women leaders for visionary leadership in luxury interiors.",
  },
  {
    title: "The CEO Magazine — 2023",
    body: "Featured by The CEO Magazine for transformative leadership in the luxury design industry.",
  },
  {
    title: "Top 10 Women Leaders in Startups — 2023",
    body: "Listed among the top women leaders building category-defining startups in India.",
  },
];

function AwardsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Media · Awards"
        title={
          <>
            Our awards and <em className="text-accent not-italic font-normal">achievements</em>
          </>
        }
        intro="Honored as Interior Designer of the Year (Asia) by House of Commons, London and Times Visionary Leaders 2022, Casa Exotique has redefined luxury interiors."
      />
      
      <Section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto space-y-12 px-4">
          {awards.map((a) => (
            <article key={a.title} className="border-b border-neutral-900 pb-12 last:border-0 group">
              <p className="text-[0.65rem] uppercase tracking-[0.25em] text-accent font-semibold">
                Award
              </p>
              <h2 className="font-display text-2xl md:text-3xl mt-3 text-white group-hover:text-accent transition-colors duration-300">
                {a.title}
              </h2>
              <div className="w-8 h-[2px] bg-accent/60 my-5 group-hover:w-16 transition-all duration-300" />
              <p className="text-neutral-400 leading-relaxed font-light text-sm md:text-base">
                {a.body}
              </p>
            </article>
          ))}
        </div>
      </Section>
    </SiteLayout>
  );
}