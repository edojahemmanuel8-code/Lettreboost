import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const measurementId = import.meta.env.VITE_GA4_MEASUREMENT_ID;

function sendPageView(path) {
  if (typeof window.gtag !== "function") return;

  window.gtag("config", measurementId, {
    page_path: path,
  });
}

export default function GoogleAnalytics() {
  const location = useLocation();
  const isFirstPage = useRef(true);

  useEffect(() => {
    if (!measurementId || !/^G-[A-Z0-9]+$/i.test(measurementId)) return;

    if (isFirstPage.current) {
      isFirstPage.current = false;
      return;
    }

    sendPageView(`${location.pathname}${location.search}`);
  }, [location.pathname, location.search]);

  return null;
}