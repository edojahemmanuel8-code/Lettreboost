import { useEffect } from "react";

/**
 * Tawk.to Live Chat Component
 * 
 * Loads the Tawk.to live chat widget on the website.
 * Requires VITE_TAWKTO_PROPERTY_ID to be set in .env
 * 
 * Tawk.to Documentation: https://www.tawk.to/
 */
export default function TawkToChat() {
  useEffect(() => {
    const propertyId = import.meta.env.VITE_TAWKTO_PROPERTY_ID;
    const widgetId = "1k1h0tpl1";

    if (!propertyId) {
      console.warn("Tawk.to is not configured. Set VITE_TAWKTO_PROPERTY_ID in your .env file.");
      return;
    }

    if (document.querySelector(`script[data-tawk="${propertyId}"]`)) {
      return;
    }

    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://embed.tawk.to/${propertyId}/${widgetId}`;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    script.setAttribute("data-tawk", propertyId);

    const firstScript = document.getElementsByTagName("script")[0];
    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript);
    } else {
      document.body.appendChild(script);
    }
  }, []);

  return null;
}
