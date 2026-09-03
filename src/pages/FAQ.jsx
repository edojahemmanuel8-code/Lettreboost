import Seo from "../components/Seo";
import PageHeader from "../components/PageHeader";
import FAQAccordion from "../components/FAQAccordion";
import CTASection from "../components/CTASection";
import faqItems from "../data/faq";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FAQ() {
  return (
    <>
      <Seo
        title="FAQ | Newsletter Service Questions Answered"
        description="Answers to common questions about LettreBoost's newsletter writing, design, audience research and distribution support services."
        path="/faq"
        jsonLd={jsonLd}
      />
      <PageHeader eyebrow="FAQ" title="Frequently Asked Questions" />

      <section className="section">
        <div className="container-lb max-w-3xl">
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <CTASection title="Still Have a Question?" primaryLabel="Contact Us" />
    </>
  );
}
