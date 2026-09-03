export default function PageHeader({ eyebrow, title, text }) {
  return (
    <header className="bg-navy-900 text-white">
      <div className="container-lb py-16 sm:py-20">
        {eyebrow && (
          <p className="text-sm font-semibold tracking-wide text-accent-light/90 mb-3">{eyebrow}</p>
        )}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white max-w-3xl">
          {title}
        </h1>
        {text && <p className="mt-5 text-lg text-white/75 max-w-2xl">{text}</p>}
      </div>
    </header>
  );
}
