import Button from "./Button";

export default function CTASection({
  title = "Ready to Give Your Audience Something Worth Reading?",
  text = "Let LettreBoost help you create professional newsletters, reach the right audience and build stronger communication with your customers and community.",
  primaryLabel = "Start My Campaign",
  primaryTo = "/contact",
  secondaryLabel = "Contact Us",
  secondaryTo = "/contact",
}) {
  return (
    <section className="section bg-navy-900 text-white">
      <div className="container-lb text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white max-w-2xl mx-auto">
          {title}
        </h2>
        <p className="mt-4 text-white/75 max-w-xl mx-auto">{text}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button to={primaryTo} variant="primary">
            {primaryLabel}
          </Button>
          <Button to={secondaryTo} variant="outline" className="border-white/30 text-white hover:bg-white hover:text-navy-900">
            {secondaryLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
