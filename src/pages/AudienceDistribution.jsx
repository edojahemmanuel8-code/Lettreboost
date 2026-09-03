import Seo from "../components/Seo";
import PageHeader from "../components/PageHeader";
import CTASection from "../components/CTASection";

const sections = [
  { title: "Audience Research", text: "Understand the people and organisations the campaign is intended to reach." },
  { title: "Niche Research", text: "Identify relevant market segments and communication opportunities." },
  { title: "Audience Segmentation", text: "Organise audiences according to relevant characteristics and campaign objectives." },
  { title: "Campaign Preparation", text: "Structure the newsletter for its intended audience." },
  { title: "Targeted Distribution", text: "Support distribution through appropriate email marketing channels." },
  { title: "Performance Review", text: "Where campaign platforms provide analytics, we review available information and make recommendations." },
];

export default function AudienceDistribution() {
  return (
    <>
      <Seo
        title="Audience & Distribution | Newsletter Targeting Support"
        description="LettreBoost researches your audience and niche, then supports targeted, permission-based newsletter distribution."
        path="/audience-distribution"
      />
      <PageHeader
        eyebrow="AUDIENCE & DISTRIBUTION"
        title="The Right Message Matters. So Does the Right Audience."
        text="A great newsletter is only useful when it reaches people who are relevant to the message."
      />

      <section className="section">
        <div className="container-lb grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((s) => (
            <div key={s.title} className="rounded-lg border border-navy-900/10 bg-white p-6 shadow-card">
              <h2 className="font-display font-semibold text-lg text-navy-900">{s.title}</h2>
              <p className="mt-2 text-sm text-ink/70">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-lb max-w-prose">
          <h2 className="text-2xl font-display font-bold">A Note on Distribution</h2>
          <p className="mt-4 text-ink/70">
            LettreBoost supports targeted newsletter distribution using appropriate and legitimate channels, such
            as client-provided lists, permission-based audiences and reputable email marketing platforms. We do
            not promote or support unsolicited bulk email. Distribution is designed to maximize your campaign's
            potential — it does not guarantee sales, leads, open rates or a specific level of engagement.
          </p>
        </div>
      </section>

      <CTASection title="Ready to Give Your Audience Something Worth Reading?" primaryLabel="Discuss My Campaign" />
    </>
  );
}
