import { useEffect } from "react";
import siteConfig from "../config/siteConfig";

function setMeta(name, content, attr = "name") {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function setJsonLd(id, data) {
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

/**
 * Lightweight, dependency-free SEO helper.
 * Sets the document title, meta description, canonical URL,
 * Open Graph / Twitter tags and optional JSON-LD structured data.
 */
export default function Seo({ title, description, path = "/", jsonLd }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${siteConfig.brandName}` : siteConfig.brandName;
    document.title = fullTitle;

    setMeta("description", description);
    setMeta("og:title", fullTitle, "property");
    setMeta("og:description", description, "property");
    setMeta("og:url", `${siteConfig.websiteUrl}${path}`, "property");
    setMeta("og:type", "website", "property");
    setMeta("og:locale", siteConfig.locale, "property");
    setMeta("og:image", siteConfig.socialImage, "property");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);
    setMeta("twitter:image", siteConfig.socialImage);

    setCanonical(`${siteConfig.websiteUrl}${path}`);

    if (jsonLd) {
      setJsonLd("lb-page-jsonld", jsonLd);
    } else {
      const pageSchema = document.getElementById("lb-page-jsonld");
      if (pageSchema) pageSchema.remove();
    }

    window.scrollTo(0, 0);
  }, [title, description, path, jsonLd]);

  return null;
}
