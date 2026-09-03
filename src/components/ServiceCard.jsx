export default function ServiceCard({ title, summary, includes, description }) {
  return (
    <div className="rounded-lg border border-navy-900/10 bg-white p-6 shadow-card h-full flex flex-col">
      <h3 className="font-display font-semibold text-lg text-navy-900">{title}</h3>
      <p className="mt-2 text-sm text-ink/70">{description || summary}</p>
      {includes && includes.length > 0 && (
        <ul className="mt-4 space-y-1.5 text-sm text-ink/70">
          {includes.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
