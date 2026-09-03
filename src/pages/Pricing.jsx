import Seo from "../components/Seo";
import PageHeader from "../components/PageHeader";
import PricingCard from "../components/PricingCard";
import CTASection from "../components/CTASection";
import Button from "../components/Button";
import pricingPlans from "../data/pricing";

export default function Pricing() {
  return (
    <>
      <Seo
        title="Pricing | Newsletter Services"
        description="LettreBoost newsletter packages, priced in USD, from single-newsletter design to full campaign and audience research support."
        path="/pricing"
      />
      <PageHeader eyebrow="PRICING" title="Simple, Flexible Newsletter Packages." />

      <section className="section">
        <div className="container-lb">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricingPlans.slice(0, 3).map((plan) => (
              <PricingCard key={plan.name} plan={plan} />
            ))}
          </div>

          <div className="mt-6 grid sm:grid-cols-2 gap-6">
            {pricingPlans.slice(3).map((plan) => (
              <PricingCard key={plan.name} plan={plan} />
            ))}
          </div>

          <div className="mt-10 rounded-lg border border-navy-900/10 bg-white p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h2 className="font-display font-semibold text-lg text-navy-900">Custom Projects</h2>
              <p className="mt-1 text-sm text-ink/70 max-w-md">
                Have a unique requirement? Tell us what you want to achieve and we'll create a custom solution.
              </p>
            </div>
            <Button to="/contact" variant="primary">Request Custom Quote</Button>
          </div>

          <div className="mt-10 space-y-2 text-xs text-ink/50 max-w-prose">
            <p>
              Prices shown are starting prices. Final pricing may vary depending on project requirements, audience
              research, newsletter complexity, distribution requirements and campaign scope.
            </p>
            <p>All public prices are displayed in USD.</p>
          </div>
        </div>
      </section>

      <CTASection title="Ready to Give Your Audience Something Worth Reading?" />
    </>
  );
}
