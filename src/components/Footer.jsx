import { Link } from "react-router-dom";
import siteConfig, { getWhatsAppLink } from "../config/siteConfig";

const explore = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Audience & Distribution", to: "/audience-distribution" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Pricing", to: "/pricing" },
  { label: "About", to: "/about" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

const legal = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms of Service", to: "/terms" },
  { label: "Cookie Policy", to: "/cookie-policy" },
  { label: "Acceptable Use", to: "/acceptable-use" },
];

export default function Footer() {
  const socials = [
    { label: "WhatsApp", url: getWhatsAppLink() },
    { label: "Instagram", url: siteConfig.socialLinks.instagram },
    { label: "Facebook", url: siteConfig.socialLinks.facebook },
    { label: "LinkedIn", url: siteConfig.socialLinks.linkedin },
    { label: "X", url: siteConfig.socialLinks.x },
  ].filter((s) => s.url);

  return (
    <footer className="bg-navy-900 text-white/80">
      <div className="container-lb py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display font-bold text-lg text-white">{siteConfig.brandName}</p>
          <p className="mt-3 text-sm text-white/60 max-w-xs">
            Professional newsletter writing, design, audience research and email campaign support for
            businesses and organisations.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-white mb-3">Explore</p>
          <ul className="space-y-2 text-sm">
            {explore.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-accent-light">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white mb-3">Legal</p>
          <ul className="space-y-2 text-sm">
            {legal.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-accent-light">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white mb-3">Get in Touch</p>
          <ul className="space-y-2 text-sm">
            <li>{siteConfig.contactEmail}</li>
            <li>{siteConfig.serviceArea}</li>
          </ul>
          {socials.length > 0 && (
            <ul className="flex gap-4 mt-4 text-sm">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="hover:text-accent-light">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-lb py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/50">
          <p>© 2026 {siteConfig.brandName}. All Rights Reserved.</p>
          <p className="font-semibold text-white/70">{siteConfig.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
