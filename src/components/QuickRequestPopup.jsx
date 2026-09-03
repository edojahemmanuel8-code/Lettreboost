import { useEffect, useRef, useState } from "react";
import ContactForm from "./ContactForm";
import { getWhatsAppLink } from "../config/siteConfig";

const SESSION_KEY = "lb_quick_request_shown";
const SHOW_DELAY_MS = 10000;

export default function QuickRequestPopup() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef(null);
  const previouslyFocused = useRef(null);

  useEffect(() => {
    let alreadyShown = false;
    try {
      alreadyShown = sessionStorage.getItem(SESSION_KEY) === "true";
    } catch {
      alreadyShown = false;
    }
    if (alreadyShown) return;

    const timer = setTimeout(() => {
      previouslyFocused.current = document.activeElement;
      setOpen(true);
      try {
        sessionStorage.setItem(SESSION_KEY, "true");
      } catch {
        /* sessionStorage unavailable — popup just won't be remembered */
      }
    }, SHOW_DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(e) {
      if (e.key === "Escape") {
        close();
      }
      if (e.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll(
          'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    const firstField = dialogRef.current?.querySelector("input, select, textarea, button");
    firstField?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  function close() {
    setOpen(false);
    previouslyFocused.current?.focus?.();
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div
        className="absolute inset-0 bg-navy-950/60"
        onClick={close}
        aria-hidden="true"
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="quick-request-title"
        className="relative w-full sm:max-w-md max-h-[90vh] overflow-y-auto rounded-t-xl sm:rounded-xl bg-white p-6 shadow-xl fade-up"
      >
        <button
          type="button"
          onClick={close}
          aria-label="Close quick request form"
          className="absolute right-4 top-4 h-8 w-8 flex items-center justify-center rounded-full text-ink/50 hover:text-ink hover:bg-navy-900/5"
        >
          ✕
        </button>

        <h2 id="quick-request-title" className="font-display text-xl font-bold text-navy-900 pr-8">
          Quick Newsletter Request
        </h2>
        <p className="mt-1 text-sm text-ink/60">
          Share a few details and our team will get back to you shortly.
        </p>

        <div className="mt-5">
          <ContactForm source="popup" compact onSuccess={() => {}} />
        </div>

        <div className="mt-5 pt-5 border-t border-navy-900/10 text-center">
          <p className="text-sm text-ink/60 mb-3">Prefer WhatsApp?</p>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-navy-900/15 px-5 py-2.5 text-sm font-semibold text-navy-900 hover:border-navy-900"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
