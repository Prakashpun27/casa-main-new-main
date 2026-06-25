import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Section, Eyebrow } from "@/components/SiteLayout";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Casa Exotique — Luxury Design-Build Studio, Gurgaon" },
      { name: "description", content: "Begin your luxury residential, hospitality, retail or developer project with Casa Exotique. Schedule a design consultation with the Gurgaon studio." },
      { property: "og:title", content: "Begin Your Project — Casa Exotique" },
      { property: "og:description", content: "Architecture, design and execution under one integrated vision." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      {/* Main Container jiske background mein IMAGE compulsory dikhegi */}
      <div className="relative w-full min-h-screen bg-black overflow-hidden">
        
        {/* 1. Background Image Layer */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80')` 
          }}
        />
        
        {/* 2. Premium Dark Mask Overlay taaki text white hokar luxury look de */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90 z-0 pointer-events-none" />

        {/* Content Layer (Pure text ko white aur golden accent mein badla hai taaki dark image par chamke) */}
        <div className="relative z-10 text-white">
          
          {/* INLINE HERO SECTION (No component blocking) */}
          <header className="px-6 lg:px-16 pt-32 pb-12 max-w-5xl">
            <span className="text-[0.68rem] uppercase tracking-[0.3em] text-accent/90 font-medium block mb-6">— Contact</span>
            <h1 className="font-display text-5xl lg:text-7xl font-light tracking-tight text-white">
              Begin your project.
            </h1>
            <p className="mt-8 text-lg lg:text-xl text-neutral-300 font-light leading-relaxed max-w-3xl">
              Whether you are developing a luxury residence, hospitality concept, retail environment or large-scale turnkey project — Casa Exotique brings architecture, design and execution together under one vision.
            </p>
          </header>

          {/* Info and Form Grid */}
          <Section className="grid lg:grid-cols-12 gap-12 lg:gap-20 pt-4 pb-20">
            
            {/* Left Side: Studio Info */}
            <div className="lg:col-span-5 space-y-10">
              <div>
                <span className="text-[0.68rem] uppercase tracking-[0.3em] text-accent/90 font-medium block mb-3">— Studio</span>
                <p className="font-display text-2xl lg:text-3xl leading-snug text-neutral-100">
                  Design and Experience Center<br/>Plot No.110, Pace City 1, Sector 37, Gurgaon<br/>Haryana, India
                </p>
              </div>
              <div>
                <span className="text-[0.68rem] uppercase tracking-[0.3em] text-accent/90 font-medium block mb-3">— Enquiries</span>
                <p className="text-xl text-neutral-200">+91 9999766655</p>
                <p className="text-xl text-neutral-200 mt-2">info@casaexotique.com</p>
                <p className="text-sm text-neutral-400 mt-2">For new projects, collaborations & press</p>
              </div>
              <div>
                <span className="text-[0.68rem] uppercase tracking-[0.3em] text-accent/90 font-medium block mb-3">— Hours</span>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Monday — Saturday<br/>By appointment only
                </p>
              </div>
            </div>

            {/* Right Side: Luxury Contact Form */}
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="lg:col-span-7 space-y-8 border-t border-neutral-700/50 pt-10"
            >
              {sent ? (
                <div className="py-20 text-center">
                  <span className="text-[0.68rem] uppercase tracking-[0.3em] text-accent/90 font-medium block">— Thank you</span>
                  <h3 className="mt-6 font-display text-4xl text-white">We've received your enquiry.</h3>
                  <p className="mt-4 text-neutral-400">A member of the studio will be in touch shortly.</p>
                </div>
              ) : (
                <>
                  <div className="grid sm:grid-cols-2 gap-8">
                    <Field label="Your Name" name="name" />
                    <Field label="Email" name="email" type="email" />
                    <Field label="Phone" name="phone" />
                    <Field label="City" name="city" />
                  </div>
                  <Field label="Project Type" name="type" placeholder="Residence · Hospitality · Retail · Developer · Other" />
                  <Field label="Tell us about your project" name="message" textarea />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full lg:w-auto px-8 py-5 bg-white text-black hover:bg-accent hover:text-white text-[0.72rem] uppercase tracking-[0.28em] font-medium transition-all duration-300 active:scale-95 mt-4"
                  >
                    Schedule a Design Consultation
                  </button>
                </>
              )}
            </form>
          </Section>
        </div>
      </div>
    </SiteLayout>
  );
}

// Custom Premium Input Field Layout
function Field({
  label,
  name,
  type = "text",
  textarea,
  placeholder,
}: { label: string; name: string; type?: string; textarea?: boolean; placeholder?: string }) {
  const cls = "w-full bg-transparent border-b border-neutral-700 focus:border-accent outline-none py-3 text-base text-white placeholder:text-neutral-500 transition-colors";
  return (
    <label className="block">
      <span className="text-[0.62rem] uppercase tracking-[0.25em] text-accent/80 font-medium block">{label}</span>
      {textarea ? (
        <textarea name={name} rows={4} placeholder={placeholder} className={`${cls} resize-none mt-2`} />
      ) : (
        <input name={name} type={type} placeholder={placeholder} className={`${cls} mt-2`} />
      )}
    </label>
  );
}