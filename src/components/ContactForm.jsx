import { useState } from "react";
import Button from "./Button";
import { submitLead, validateLeadForm } from "../utils/formSubmission";
import { getWhatsAppLink } from "../config/siteConfig";
import siteConfig from "../config/siteConfig";

const serviceOptions = [
  "Newsletter Writing",
  "Newsletter Design",
  "Writing + Design",
  "Audience/Niche Research",
  "Newsletter Distribution",
  "Complete Newsletter Campaign",
  "Monthly Newsletter Service",
  "Custom Requirement",
];

const budgetOptions = ["Not sure yet", "Under $50", "$50 – $100", "$100 – $250", "$250+", "Custom"];

const initialState = {
  fullName: "",
  email: "",
  phone: "",
  business: "",
  serviceRequired: "",
  targetNiche: "",
  budgetRange: "",
  preferredContactMethod: "Email",
  projectDescription: "",
  website: "", // honeypot
};

/**
 * Shared contact form used on the /contact page and inside the
 * Quick Request popup. `source` records where the lead originated
 * (e.g. "contact", "homepage", "popup") for tracking in Google Sheets.
 * `compact` renders a shorter field set for the popup.
 */
export default function ContactForm({ source = "contact", compact = false, onSuccess }) {
  const [fields, setFields] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [requestId, setRequestId] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  function update(key, value) {
    setFields((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const validation = validateLeadForm(fields);
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    setStatus("loading");
    try {
      const result = await submitLead({ ...fields, source });
      setRequestId(result.requestId);
      setStatus("success");
      if (onSuccess) onSuccess(result);
    } catch (err) {
      setErrorMessage(err.message || "Something went wrong.");
      setStatus("error");
    }
  }

  function resetForm() {
    setFields(initialState);
    setErrors({});
    setStatus("idle");
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-navy-900/10 bg-white p-8 text-center">
        <h3 className="font-display text-2xl font-bold text-navy-900">Request Received! 🎉</h3>
        <p className="mt-3 text-ink/70">
          Thank you for contacting {siteConfig.brandName}. We've received your request and sent a confirmation
          copy to your email.
        </p>
        {requestId && (
          <p className="mt-4 font-semibold text-navy-900">Request ID: {requestId}</p>
        )}
        <p className="mt-2 text-sm text-ink/60">
          You should expect feedback from {siteConfig.brandName} within {siteConfig.responseTime}.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button href={getWhatsAppLink()} variant="outline">
            Chat on WhatsApp
          </Button>
          <Button variant="ghost" onClick={resetForm}>
            Send another request
          </Button>
        </div>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="rounded-lg border border-red-200 bg-red-50 p-8 text-center">
        <h3 className="font-display text-2xl font-bold text-navy-900">Something Went Wrong</h3>
        <p className="mt-3 text-ink/70">We couldn't send your request right now. Please try again or contact us directly through WhatsApp.</p>
        {errorMessage && <p className="mt-2 text-xs text-red-500">{errorMessage}</p>}
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button variant="primary" onClick={() => setStatus("idle")}>
            Try Again
          </Button>
          <Button href={getWhatsAppLink()} variant="outline">
            Chat on WhatsApp
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Honeypot field — hidden from real visitors, catches basic bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={fields.website}
          onChange={(e) => update("website", e.target.value)}
        />
      </div>

      <Field label="Full Name" required error={errors.fullName}>
        <input
          type="text"
          value={fields.fullName}
          onChange={(e) => update("fullName", e.target.value)}
          className={inputClass(errors.fullName)}
          autoComplete="name"
        />
      </Field>

      <Field label="Email Address" required error={errors.email}>
        <input
          type="email"
          value={fields.email}
          onChange={(e) => update("email", e.target.value)}
          className={inputClass(errors.email)}
          autoComplete="email"
        />
      </Field>

      <Field label="Phone / WhatsApp">
        <input
          type="tel"
          value={fields.phone}
          onChange={(e) => update("phone", e.target.value)}
          className={inputClass()}
          autoComplete="tel"
        />
      </Field>

      <Field label="Business / Organisation">
        <input
          type="text"
          value={fields.business}
          onChange={(e) => update("business", e.target.value)}
          className={inputClass()}
        />
      </Field>

      <Field label="Service Required" required error={errors.serviceRequired}>
        <select
          value={fields.serviceRequired}
          onChange={(e) => update("serviceRequired", e.target.value)}
          className={inputClass(errors.serviceRequired)}
        >
          <option value="">Select a service</option>
          {serviceOptions.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </Field>

      {!compact && (
        <>
          <Field label="Target Niche">
            <input
              type="text"
              value={fields.targetNiche}
              onChange={(e) => update("targetNiche", e.target.value)}
              className={inputClass()}
              placeholder="e.g. skincare brands, faith-based community"
            />
          </Field>

          <Field label="Budget Range">
            <select
              value={fields.budgetRange}
              onChange={(e) => update("budgetRange", e.target.value)}
              className={inputClass()}
            >
              <option value="">Select a range</option>
              {budgetOptions.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </Field>

          <Field label="Preferred Contact Method">
            <div className="flex flex-wrap gap-4 pt-1">
              {["Email", "WhatsApp", "Phone"].map((m) => (
                <label key={m} className="flex items-center gap-2 text-sm text-ink/80">
                  <input
                    type="radio"
                    name="preferredContactMethod"
                    value={m}
                    checked={fields.preferredContactMethod === m}
                    onChange={(e) => update("preferredContactMethod", e.target.value)}
                  />
                  {m}
                </label>
              ))}
            </div>
          </Field>
        </>
      )}

      <Field label={compact ? "Requirement" : "Project Requirement"} required error={errors.projectDescription}>
        <textarea
          rows={compact ? 3 : 5}
          value={fields.projectDescription}
          onChange={(e) => update("projectDescription", e.target.value)}
          className={inputClass(errors.projectDescription)}
          placeholder="Tell us what you'd like to communicate and any details that will help us understand your project."
        />
      </Field>

      <Button type="submit" variant="primary" className="w-full" disabled={status === "loading"}>
        {status === "loading" ? "Sending…" : "Send My Request"}
      </Button>

      {!compact && (
        <p className="text-xs text-ink/50 text-center">
          Expect feedback from {siteConfig.brandName} within {siteConfig.responseTime}.
        </p>
      )}
    </form>
  );
}

function Field({ label, required, error, children }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-navy-900 mb-1.5">
        {label} {required && <span className="text-accent">*</span>}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-500">{error}</span>}
    </label>
  );
}

function inputClass(error) {
  return `w-full rounded-md border ${
    error ? "border-red-400" : "border-navy-900/15"
  } bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/35 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent`;
}
