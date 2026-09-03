import Seo from "../components/Seo";
import PageHeader from "../components/PageHeader";
import CTASection from "../components/CTASection";
import siteConfig from "../config/siteConfig";

const values = ["Professionalism", "Clarity", "Creativity", "Consistency", "Customer Focus", "Integrity"];

export default function About() {
  return (
    <>
      <Seo
        title="About LettreBoost | Newsletter & Email Communication"
        description="LettreBoost is a newsletter and email communication service helping businesses, entrepreneurs and organisations build stronger relationships with their audiences."
        path="/about"
      />
      <PageHeader eyebrow="ABOUT LETTREBOOST" title="We Help Brands Communicate Better." />

      <section className="section">
        <div className="container-lb max-w-prose">
          <p className="text-ink/75">
            LettreBoost is a newsletter and email communication service created to help businesses, entrepreneurs,
            organisations and creators build stronger relationships with their audiences. We combine content,
            design, audience research and distribution support so your message reaches the people it's meant for.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            <div>
              <h2 className="font-display font-semibold text-lg text-navy-900">Our Mission</h2>
              <p className="mt-2 text-sm text-ink/70">
                To make professional newsletter communication accessible to businesses, entrepreneurs and
                organisations.
              </p>
            </div>
            <div>
              <h2 className="font-display font-semibold text-lg text-navy-900">Our Vision</h2>
              <p className="mt-2 text-sm text-ink/70">
                To become a trusted newsletter and email communication partner for growing brands and
                organisations across Nigeria and beyond.
              </p>
            </div>
          </div>

          <h2 className="mt-10 font-display font-semibold text-lg text-navy-900">Our Values</h2>
          <ul className="mt-3 grid sm:grid-cols-2 gap-2 text-sm text-ink/70">
            {values.map((v) => (
              <li key={v} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                {v}
              </li>
            ))}
          </ul>

          <div className="mt-12 rounded-lg border border-navy-900/10 bg-white p-6">
            <h2 className="font-display font-semibold text-lg text-navy-900">Who We Are, In Short</h2>
            <p className="mt-2 text-sm text-ink/70">
              LettreBoost helps businesses, brands and organisations create professional newsletters, research
              target audiences and support targeted email campaigns. We serve small businesses, startups,
              entrepreneurs, personal brands, creators, corporate organisations, NGOs, schools, churches and
              community organisations. {siteConfig.serviceArea} You can reach us by email at {siteConfig.contactEmail}{" "}
              or via WhatsApp.
            </p>
          </div>
        </div>
      </section>

      <CTASection title="Ready to Give Your Audience Something Worth Reading?" />
    </>
  );
}
