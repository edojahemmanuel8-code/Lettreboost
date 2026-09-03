import Button from "./Button";

export default function PricingCard({ plan }) {
  return (
    <div
      className={`relative rounded-lg border p-7 h-full flex flex-col bg-white ${
        plan.badge ? "border-accent shadow-card" : "border-navy-900/10 shadow-card"
      }`}
    >
      {plan.badge && (
        <span className="absolute -top-3 left-7 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
          {plan.badge}
        </span>
      )}
      <h3 className="font-display font-semibold text-xl text-navy-900">{plan.name}</h3>
      <p className="mt-2 text-3xl font-display font-bold text-navy-900">{plan.price}</p>
      <p className="mt-2 text-sm text-ink/60">{plan.audience}</p>

      <ul className="mt-6 space-y-2 text-sm text-ink/75 flex-1">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" aria-hidden="true" />
            {f}
          </li>
        ))}
      </ul>

      <Button to="/contact" variant={plan.badge ? "primary" : "outline"} className="mt-7 w-full">
        {plan.cta}
      </Button>
    </div>
  );
}
