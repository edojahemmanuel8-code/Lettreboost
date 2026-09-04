import { useState } from "react";

export default function PortfolioCard({ item }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group overflow-hidden rounded-2xl border border-navy-900/10 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden bg-navy-900/5">
        {item.image && !imageError ? (
          <img
            src={`${import.meta.env.BASE_URL}portfolio/${encodeURIComponent(item.image)}`}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            onError={() => setImageError(true)}
          />
        ) : (
          <NewsletterGlyph />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-navy-900/10 to-transparent" />

        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-navy-900 backdrop-blur-sm">
          {item.label}
        </span>

        {item.result && (
          <span className="absolute bottom-3 left-3 rounded-full bg-accent px-3 py-1 text-[11px] font-semibold text-white shadow-md">
            {item.result}
          </span>
        )}
      </div>

      <div className="p-5">
        <div className="mb-2 flex items-center justify-between gap-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent">{item.category}</p>
          {item.highlight && (
            <span className="rounded-full border border-navy-900/10 bg-navy-900/5 px-2 py-1 text-[10px] font-medium text-navy-900">
              {item.highlight}
            </span>
          )}
        </div>

        <h3 className="font-display text-2xl font-semibold text-navy-900">{item.title}</h3>
        <p className="mt-2 text-sm leading-6 text-ink/70">{item.description}</p>
      </div>
    </div>
  );
}

function NewsletterGlyph() {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" aria-hidden="true">
      <rect x="10" y="14" width="52" height="44" rx="4" fill="white" stroke="#0E1B3D" strokeOpacity="0.15" strokeWidth="1.5" />
      <path d="M14 20L36 36L58 20" stroke="#2F5FFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="18" y="42" width="20" height="3" rx="1.5" fill="#0E1B3D" fillOpacity="0.15" />
      <rect x="18" y="48" width="30" height="3" rx="1.5" fill="#0E1B3D" fillOpacity="0.15" />
    </svg>
  );
}
