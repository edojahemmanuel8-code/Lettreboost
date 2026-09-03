import Seo from "../components/Seo";
import PageHeader from "../components/PageHeader";
import ServiceCard from "../components/ServiceCard";
import CTASection from "../components/CTASection";
import services from "../data/services";
import siteConfig from "../config/siteConfig";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: services.map((s, i) => ({
    "@type": "Service",
    position: i + 1,
    name: s.title,
    description: s.description,
    provider: { "@type": "Organization", name: siteConfig.brandName },
  })),
};

export default function Services() {
  return (
    <>
      <Seo
        title="Services | Newsletter Writing & Design"
        description="Newsletter writing, design, audience research, strategy and targeted distribution support from LettreBoost."
        path="/services"
        jsonLd={jsonLd}
      />
      <PageHeader
        eyebrow="OUR SERVICES"
        title="Professional Newsletter Services for Modern Organisations."
        text="From newsletter writing and design to audience research and targeted campaign support, LettreBoost helps you communicate professionally from creation to distribution."
      />

      <section className="section">
        <div className="container-lb grid sm:grid-cols-2 gap-6">
          {services.map((s) => (
            <ServiceCard
              key={s.slug}
              title={s.title}
              summary={s.summary}
              description={s.description}
              includes={s.includes}
            />
          ))}
        </div>
      </section>

      <CTASection
        title="Not Sure Which Service You Need?"
        text="Tell us about your organisation and what you'd like to communicate — we'll recommend the right combination of services."
        primaryLabel="Discuss My Campaign"
      />
    </>
  );
}
