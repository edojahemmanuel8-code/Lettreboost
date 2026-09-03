import Seo from "../components/Seo";
import PageHeader from "../components/PageHeader";
import ContactForm from "../components/ContactForm";
import siteConfig from "../config/siteConfig";

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact | Start Your Newsletter Campaign"
        description="Tell LettreBoost what you want to communicate and we'll help turn it into a professional newsletter campaign."
        path="/contact"
      />
      <PageHeader
        eyebrow="CONTACT"
        title="Let's Create Your Next Newsletter."
        text="Tell us what you want to communicate and LettreBoost will help turn it into a professional newsletter campaign."
      />

      <section className="section">
        <div className="container-lb grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <ContactForm source="contact" />
          </div>
          <aside className="lg:col-span-2 space-y-6">
            <div className="rounded-lg border border-navy-900/10 bg-white p-6">
              <h2 className="font-display font-semibold text-navy-900">Get in Touch</h2>
              <p className="mt-2 text-sm text-ink/70">{siteConfig.contactEmail}</p>
              <p className="mt-1 text-sm text-ink/70">{siteConfig.serviceArea}</p>
            </div>
            <div className="rounded-lg border border-navy-900/10 bg-white p-6">
              <h2 className="font-display font-semibold text-navy-900">What Happens Next?</h2>
              <p className="mt-2 text-sm text-ink/70">
                Your request is reviewed by our team, and a member of LettreBoost will contact you with next
                steps. You should expect feedback within {siteConfig.responseTime}.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
