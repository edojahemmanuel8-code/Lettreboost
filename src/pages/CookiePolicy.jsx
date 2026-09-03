import Seo from "../components/Seo";
import PageHeader from "../components/PageHeader";
import siteConfig from "../config/siteConfig";

export default function CookiePolicy() {
  return (
    <>
      <Seo
        title="Cookie Policy"
        description="How LettreBoost uses session storage and cookies on this website."
        path="/cookie-policy"
      />
      <PageHeader eyebrow="LEGAL" title="Cookie Policy" />

      <section className="section">
        <div className="container-lb max-w-prose space-y-8 text-sm text-ink/75">
          <Block title="Essential Website Functionality">
            <p>
              This website uses your browser's session storage to remember whether the Quick Newsletter Request
              popup has already been shown during your current visit, so it does not repeatedly interrupt you.
            </p>
          </Block>

          <Block title="Analytics and Tracking">
            <p>
              LettreBoost may use Google Analytics 4 to understand website traffic, page visits, and general
              usage patterns. Analytics is configured through the website environment and is only active when a
              valid Google Analytics Measurement ID is enabled. Google may process this information according to
              its own privacy policy.
            </p>
          </Block>

          <Block title="Your Choices">
            <p>
              You can clear your browser's session storage at any time, or use your browser settings to control
              cookies and site data more generally.
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
