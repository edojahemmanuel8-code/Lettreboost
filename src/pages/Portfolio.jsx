import { useState } from "react";
import Seo from "../components/Seo";
import PageHeader from "../components/PageHeader";
import PortfolioCard from "../components/PortfolioCard";
import CTASection from "../components/CTASection";
import portfolioItems from "../data/portfolio";

const categories = ["All", "Business", "Promotional", "Corporate", "Events", "Education", "NGO", "Creator"];

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? portfolioItems : portfolioItems.filter((p) => p.category === active);

  return (
    <>
      <Seo
        title="Portfolio | Newsletter Design Examples"
        description="Sample newsletter concepts and demo layouts from LettreBoost, spanning business, promotional, corporate, education, NGO and creator campaigns."
        path="/portfolio"
      />
      <PageHeader eyebrow="PORTFOLIO" title="Proof of Work That Shows Results." />

      <section className="section">
        <div className="container-lb">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter portfolio by category">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                aria-pressed={active === c}
                className={`rounded-full px-4 py-2 text-sm font-medium border transition-colors ${
                  active === c
                    ? "bg-navy-900 text-white border-navy-900"
                    : "border-navy-900/15 text-navy-900 hover:border-navy-900"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <PortfolioCard key={item.id} item={item} />
            ))}
          </div>

          <p className="mt-8 text-xs text-ink/50 max-w-prose">
            These real examples show how strategic newsletter positioning, clearer messaging, and audience-focused
            promotion can improve visibility and campaign performance over time.
          </p>
        </div>
      </section>

      <CTASection title="Want Something Like This For Your Brand?" primaryLabel="Discuss My Campaign" />
    </>
  );
}
