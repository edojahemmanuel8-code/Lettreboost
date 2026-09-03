import siteConfig from "../config/siteConfig";

/**
 * Submits a lead to the LettreBoost Google Apps Script backend.
 * The script validates the payload, generates a Request ID, writes a row
 * to Google Sheets, and sends the internal + client confirmation emails.
 *
 * Expected payload fields (all strings unless noted):
 *  fullName, email, phone, business, serviceRequired, targetNiche,
 *  budgetRange, preferredContactMethod, projectDescription, source, website (honeypot)
 */
export async function submitLead(payload) {
  if (!siteConfig.appsScriptUrl) {
    throw new Error(
      "VITE_APPS_SCRIPT_URL is not configured. Add it to your .env file once the Google Apps Script web app is deployed."
    );
  }

  // Honeypot: if this hidden field is filled, silently treat as spam.
  if (payload.website) {
    return { success: true, requestId: null, spam: true };
  }

  const response = await fetch(siteConfig.appsScriptUrl, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    // Apps Script web apps read POST bodies most reliably as plain text.
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  const data = await response.json();

  if (!data || data.success !== true) {
    throw new Error((data && data.message) || "Submission was not successful.");
  }

  return data; // { success: true, requestId: "LB-2026-0001" }
}

export function validateLeadForm(fields) {
  const errors = {};

  if (!fields.fullName || fields.fullName.trim().length < 2) {
    errors.fullName = "Please enter your full name.";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!fields.email || !emailPattern.test(fields.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!fields.serviceRequired) {
    errors.serviceRequired = "Please select the service you need.";
  }

  if (!fields.projectDescription || fields.projectDescription.trim().length < 10) {
    errors.projectDescription = "Please describe your requirement in a little more detail.";
  }

  return errors;
}
