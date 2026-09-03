import Seo from "../components/Seo";
import PageHeader from "../components/PageHeader";
import siteConfig from "../config/siteConfig";

export default function AcceptableUse() {
  return (
    <>
      <Seo
        title="Acceptable Use Policy"
        description="LettreBoost's policy against spam, unsolicited bulk email, phishing and misuse of email campaigns."
        path="/acceptable-use"
      />
      <PageHeader eyebrow="LEGAL" title="Acceptable Use / Anti-Spam Policy" />

      <section className="section">
        <div className="container-lb max-w-prose space-y-8 text-sm text-ink/75">
          <Block title="What We Do Not Support">
            <p>LettreBoost does not support the use of our services for:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Spam or unsolicited bulk email</li>
              <li>Phishing</li>
              <li>Fraud</li>
              <li>Misleading campaigns</li>
              <li>Illegal content</li>
              <li>Abuse of email marketing platforms</li>
            </ul>
          </Block>

          <Block title="Client Responsibility">
            <p>
              Clients are responsible for the lawfulness of their campaign content and for ensuring they have
              appropriate permission from recipients before any distribution takes place.
            </p>
          </Block>

          <Block title="Our Right to Decline">
            <p>
              LettreBoost may decline to work on, or distribute, campaigns that violate applicable laws,
              regulations, or the policies of the email marketing platforms used.
            </p>
          </Block>

          <Block title="Contact">
            <p>Questions about this policy can be sent to {siteConfig.contactEmail}.</p>
          </Block>
        </div>
      </section>
    </>
  );
}

function Block({ title, children }) {
  return (
    <div>
      <h2 className="font-display font-semibold text-lg text-navy-900 mb-2">{title}</h2>
      {children}
    </div>
  );
}
