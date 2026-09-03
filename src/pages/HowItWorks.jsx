import Seo from "../components/Seo";
import PageHeader from "../components/PageHeader";
import CTASection from "../components/CTASection";
import { howItWorksSteps } from "../data/process";

export default function HowItWorks() {
  return (
    <>
      <Seo
        title="How It Works | Our Newsletter Process"
        description="See the step-by-step process LettreBoost follows, from your initial request through to a distribution-ready newsletter."
        path="/how-it-works"
      />
      <PageHeader
        eyebrow="OUR PROCESS"
        title="Simple Process. Professional Results."
      />

      <section className="section">
        <div className="container-lb max-w-3xl">
          <ol className="space-y-8">
            {howItWorksSteps.map((s) => (
              <li key={s.step} className="flex gap-5">
                <span className="shrink-0 flex h-11 w-11 items-center justify-center rounded-full bg-navy-900 text-white font-display font-semibold">
                  {s.step}
                </span>
                <div className="pt-1.5">
                  <h2 className="font-display font-semibold text-lg text-navy-900">{s.title}</h2>
                  <p className="mt-1.5 text-sm text-ink/70">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CTASection title="Ready to Give Your Audience Something Worth Reading?" />
    </>
  );
}
