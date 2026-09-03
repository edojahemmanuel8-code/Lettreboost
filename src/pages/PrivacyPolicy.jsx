import Seo from "../components/Seo";
import PageHeader from "../components/PageHeader";
import siteConfig from "../config/siteConfig";

export default function PrivacyPolicy() {
  return (
    <>
      <Seo
        title="Privacy Policy"
        description="How LettreBoost collects, uses and stores information submitted through this website."
        path="/privacy-policy"
      />
      <PageHeader eyebrow="LEGAL" title="Privacy Policy" />

      <section className="section">
        <div className="container-lb max-w-prose space-y-8 text-sm text-ink/75">
          <Block title="Information We Collect">
            <p>When you submit a form on this website, we may collect:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone / WhatsApp number</li>
              <li>Business or organisation name</li>
              <li>Service requested and target niche</li>
              <li>Budget range and preferred contact method</li>
              <li>Project description / requirements</li>
            </ul>
          </Block>

          <Block title="Cookies and Session Storage">
            <p>
              This website uses browser session storage to remember whether the Quick Newsletter Request popup
              has already been shown to you during your current visit. This information is not shared with third
              parties and is cleared when you close your browser session.
            </p>
          </Block>

          <Block title="How Information Is Used">
            <p>
              Information submitted through our contact form or Quick Request popup is used to review your
              request, respond to your enquiry, and — where you proceed with our services — to deliver the
              requested newsletter or campaign support.
            </p>
          </Block>

          <Block title="Data Storage and Third-Party Services">
            <p>
              Form submissions are processed using Google Apps Script and stored in Google Sheets. Confirmation
              and notification emails are sent using Google's mail service. These third-party services are
              subject to Google's own privacy and security practices.
            </p>
          </Block>

          <Block title="Your Rights">
            <p>
              You may request access to, correction of, or deletion of information you have submitted to us by
              contacting {siteConfig.contactEmail}.
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
