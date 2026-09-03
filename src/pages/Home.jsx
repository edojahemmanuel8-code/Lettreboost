import Seo from "../components/Seo";
import Button from "../components/Button";
import ServiceCard from "../components/ServiceCard";
import PricingCard from "../components/PricingCard";
import CTASection from "../components/CTASection";
import FAQAccordion from "../components/FAQAccordion";
import services from "../data/services";
import pricingPlans from "../data/pricing";
import faqItems from "../data/faq";
import { homeProcess, createTargetReachGrow } from "../data/process";
import siteConfig from "../config/siteConfig";

const whoWeHelp = [
  { title: "Businesses", text: "Promote products, services, offers and company updates." },
  { title: "Entrepreneurs", text: "Build authority and communicate consistently with your audience." },
  { title: "Creators", text: "Share content, projects, announcements and ideas." },
  { title: "NGOs & Organisations", text: "Communicate campaigns, projects, achievements and updates." },
  { title: "Schools & Educational Organisations", text: "Share events, announcements and achievements." },
  { title: "Churches & Community Organisations", text: "Communicate programmes, announcements and important information." },
];

const valueProps = [
  { title: "Professional Writing", text: "Clear, engaging and audience-focused newsletter content." },
  { title: "Modern Design", text: "Professional newsletter layouts that reflect the client's brand." },
  { title: "Audience Research", text: "Understand the niche and audience the campaign is intended to reach." },
  { title: "Campaign Support", text: "Support from newsletter creation through appropriate distribution." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "LettreBoost",
  url: siteConfig.websiteUrl,
  description:
    "LettreBoost is a professional newsletter and email communication service helping businesses, brands and organisations create newsletters, research audiences and support targeted email campaigns.",
  email: siteConfig.contactEmail.startsWith("[") ? undefined : siteConfig.contactEmail,
  areaServed: siteConfig.areasServed,
  serviceType: siteConfig.services,
  knowsAbout: ["Newsletter writing", "Newsletter design", "Audience research", "Email campaigns"],
};

export default function Home() {
  return (
    <>
      <Seo
        title="Professional Newsletter Writing & Email Campaign Services"
        description="LettreBoost helps businesses, entrepreneurs and organisations create professional newsletters, research target audiences and support targeted email campaigns."
        path="/"
        jsonLd={jsonLd}
      />

      {/* HERO */}
      <section className="bg-navy-900 text-white">
        <div className="container-lb py-20 sm:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-accent-light">NEWSLETTER • AUDIENCE • DISTRIBUTION</p>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-display font-bold leading-tight text-white">
              We Create Newsletters. We Find the Right Audience. We Help You Reach Them.
            </h1>
            <p className="mt-6 text-lg text-white/75 max-w-xl">
              LettreBoost helps businesses, brands and organisations create professional newsletters, research
              their target audience and prepare campaigns for targeted distribution.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/contact" variant="primary">Start My Campaign</Button>
              <Button to="/services" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-navy-900">
                Explore Our Services
              </Button>
            </div>
          </div>
          <NewsletterHeroVisual />
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="section">
        <div className="container-lb">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-display font-bold">
              Your Message Deserves More Than an Ordinary Email.
            </h2>
            <p className="mt-4 text-ink/70">
              Your audience receives countless messages every day. LettreBoost helps make yours worth opening —
              combining professional writing, modern design, audience research and campaign preparation with
              support for targeted distribution.
            </p>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {valueProps.map((v) => (
              <div key={v.title} className="rounded-lg border border-navy-900/10 bg-white p-6 shadow-card">
                <h3 className="font-display font-semibold text-navy-900">{v.title}</h3>
                <p className="mt-2 text-sm text-ink/70">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CREATE TARGET REACH GROW */}
      <section className="section bg-navy-900 text-white">
        <div className="container-lb">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-center text-white">
            CREATE. TARGET. REACH. GROW.
          </h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {createTargetReachGrow.map((stage, i) => (
              <div key={stage.word} className="relative pl-5 border-l-2 border-accent">
                <p className="text-xs text-white/50">{String(i + 1).padStart(2, "0")}</p>
                <p className="mt-1 font-display font-bold text-xl">{stage.word}</p>
                <p className="mt-2 text-sm text-white/70">{stage.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button to="/contact" variant="primary">Start My Campaign</Button>
          </div>
        </div>
      </section>

      {/* WHO WE HELP */}
      <section className="section">
        <div className="container-lb">
          <h2 className="text-2xl sm:text-3xl font-display font-bold max-w-xl">
            Built for Organisations That Have Something to Say.
          </h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whoWeHelp.map((w) => (
              <div key={w.title} className="rounded-lg border border-navy-900/10 bg-white p-6 shadow-card">
                <h3 className="font-display font-semibold text-navy-900">{w.title}</h3>
                <p className="mt-2 text-sm text-ink/70">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section bg-white">
        <div className="container-lb">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2 className="text-2xl sm:text-3xl font-display font-bold">What We Do</h2>
            <Button to="/services" variant="ghost">View All Services →</Button>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <ServiceCard key={s.slug} title={s.title} summary={s.summary} description={s.summary} />
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <div className="container-lb">
          <h2 className="text-2xl sm:text-3xl font-display font-bold max-w-xl">
            From Your Idea to Their Inbox.
          </h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {homeProcess.map((p) => (
              <div key={p.step}>
                <p className="text-sm font-semibold text-accent">{p.step}</p>
                <h3 className="mt-1 font-display font-semibold text-navy-900">{p.title}</h3>
                <p className="mt-2 text-sm text-ink/70">{p.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button to="/how-it-works" variant="outline">See How It Works</Button>
          </div>
        </div>
      </section>

      {/* PORTFOLIO TEASER */}
      <section className="section bg-white">
        <div className="container-lb">
          <h2 className="text-2xl sm:text-3xl font-display font-bold max-w-xl">
            See What LettreBoost Can Create.
          </h2>
          <p className="mt-3 text-ink/70 max-w-xl">
            A selection of sample concepts and demo newsletters across different industries and audiences.
          </p>
          <div className="mt-8">
            <Button to="/portfolio" variant="outline">View Our Portfolio</Button>
          </div>
        </div>
      </section>

      {/* PRICING TEASER */}
      <section className="section">
        <div className="container-lb">
          <h2 className="text-2xl sm:text-3xl font-display font-bold">Simple, Flexible Newsletter Packages.</h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricingPlans.slice(0, 3).map((plan) => (
              <PricingCard key={plan.name} plan={plan} />
            ))}
          </div>
          <div className="mt-10">
            <Button to="/pricing" variant="outline">View Full Pricing</Button>
          </div>
        </div>
      </section>

      {/* FAQ TEASER */}
      <section className="section bg-white">
        <div className="container-lb max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-display font-bold">Frequently Asked Questions</h2>
          <div className="mt-8">
            <FAQAccordion items={faqItems.slice(0, 4)} />
          </div>
          <div className="mt-8">
            <Button to="/faq" variant="outline">View All FAQs</Button>
          </div>
        </div>
      </section>

      <CTASection title="Ready to Give Your Audience Something Worth Reading?" />
    </>
  );
}

function NewsletterHeroVisual() {
  return (
    <div className="relative">
      <svg viewBox="0 0 480 380" className="w-full h-auto" role="img" aria-label="Newsletter preview displayed across desktop and mobile">
        <rect x="20" y="20" width="360" height="240" rx="8" fill="#132650" stroke="#2F5FFF" strokeOpacity="0.4" />
        <rect x="44" y="48" width="312" height="20" rx="3" fill="#2F5FFF" fillOpacity="0.6" />
        <rect x="44" y="84" width="200" height="10" rx="2" fill="white" fillOpacity="0.5" />
        <rect x="44" y="102" width="230" height="10" rx="2" fill="white" fillOpacity="0.3" />
        <rect x="44" y="120" width="180" height="10" rx="2" fill="white" fillOpacity="0.3" />
        <rect x="44" y="150" width="140" height="80" rx="4" fill="white" fillOpacity="0.08" />
        <rect x="196" y="150" width="140" height="80" rx="4" fill="white" fillOpacity="0.08" />
        <rect x="44" y="210" width="90" height="24" rx="4" fill="#2F5FFF" />

        <rect x="300" y="150" width="140" height="210" rx="14" fill="#0A1330" stroke="#2F5FFF" strokeOpacity="0.5" />
        <rect x="316" y="172" width="108" height="14" rx="2" fill="#2F5FFF" fillOpacity="0.7" />
        <rect x="316" y="196" width="90" height="8" rx="2" fill="white" fillOpacity="0.5" />
        <rect x="316" y="210" width="100" height="8" rx="2" fill="white" fillOpacity="0.3" />
        <rect x="316" y="230" width="108" height="50" rx="4" fill="white" fillOpacity="0.08" />
        <rect x="316" y="292" width="70" height="18" rx="4" fill="#2F5FFF" />
      </svg>
    </div>
  );
}
