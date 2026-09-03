import Seo from "../components/Seo";
import PageHeader from "../components/PageHeader";
import siteConfig from "../config/siteConfig";

export default function Terms() {
  return (
    <>
      <Seo
        title="Terms of Service"
        description="The terms that apply to newsletter and email campaign services provided by LettreBoost."
        path="/terms"
      />
      <PageHeader eyebrow="LEGAL" title="Terms of Service" />

      <section className="section">
        <div className="container-lb max-w-prose space-y-8 text-sm text-ink/75">
          <Block title="Description of Services">
            <p>
              LettreBoost provides newsletter writing, newsletter design, audience/niche research, newsletter
              strategy, targeted newsletter distribution support and monthly newsletter management, as described
              on our Services page.
            </p>
          </Block>

          <Block title="Client Responsibilities">
            <p>
              Clients are responsible for providing accurate information, timely feedback, and any content,
              branding or audience lists required to complete a project. Clients are responsible for ensuring
              they have appropriate permission to distribute newsletters to any list they provide.
            </p>
          </Block>

          <Block title="Revisions and Delivery">
            <p>
              The number of included revisions varies by package, as described on the Pricing page. Delivery
              timelines depend on project scope and are confirmed after a request is reviewed.
            </p>
          </Block>

          <Block title="Payments and Cancellation">
            <p>
              Payment terms will be confirmed with each client prior to project commencement. Cancellation terms
              will be agreed on a project basis.
            </p>
          </Block>

          <Block title="Intellectual Property">
            <p>
              Unless otherwise agreed, final newsletter content and design becomes the property of the client
              upon full payment. LettreBoost may retain the right to display sample or demo work for portfolio
              purposes unless the client requests otherwise.
            </p>
          </Block>

          <Block title="Third-Party Platforms">
            <p>
              Where distribution or design involves third-party email marketing platforms, use of those platforms
              is also subject to the platform's own terms and policies.
            </p>
          </Block>

          <Block title="No Guaranteed Results">
            <p>
              LettreBoost does not guarantee sales, revenue, leads, ROI, conversions, open rates or any specific
              level of campaign performance. Distribution support is designed to maximize your campaign's
              potential, but results depend on many factors outside our control.
            </p>
          </Block>

          <Block title="Limitation of Liability">
            <p>
              To the extent permitted by law, LettreBoost's liability in connection with any service is limited
              to the amount paid for that service.
            </p>
          </Block>

          <Block title="Changes to Services">
            <p>LettreBoost may update or change the services offered on this website from time to time.</p>
          </Block>

          <Block title="Contact">
            <p>Questions about these terms can be sent to {siteConfig.contactEmail}.</p>
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
