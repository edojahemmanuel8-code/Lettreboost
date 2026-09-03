// Central configuration for the LettreBoost website.
// Update these values (or the matching .env variables) rather than
// hard-coding brand details anywhere else in the codebase.

const siteConfig = {
  brandName: "LettreBoost",
  tagline: "Create. Target. Reach. Grow.",
  websiteUrl: "https://lettreboost.com.ng",
  domain: "lettreboost.com.ng",
  socialImage: "https://lettreboost.com.ng/og-image.jpg",
  locale: "en_NG",

  contactEmail: import.meta.env.VITE_CONTACT_EMAIL || "admin@lettreboost.com.ng",

  // Digits only, international format, no leading +.
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || "[LETTREBOOST WHATSAPP NUMBER]",
  whatsappDefaultMessage:
    "Hello LettreBoost, I am interested in your newsletter service and would like to discuss a project.",

  appsScriptUrl: import.meta.env.VITE_APPS_SCRIPT_URL || "",

  // Only populated with real URLs when officially supplied. The footer
  // only renders a social icon once its value here is a real URL.
  socialLinks: {
    instagram: "",
    facebook: "",
    linkedin: "",
    x: "",
  },

  companyAddress: "",

  serviceArea: "Serving clients in Nigeria and internationally.",
  areasServed: ["Nigeria", "International"],
  services: [
    "Newsletter writing",
    "Newsletter design",
    "Audience research",
    "Email campaign support",
  ],

  responseTime: "approximately 5 hours",
};

export const getWhatsAppLink = (message = siteConfig.whatsappDefaultMessage) => {
  const number = siteConfig.whatsappNumber.replace(/[^\d]/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
};

export default siteConfig;
