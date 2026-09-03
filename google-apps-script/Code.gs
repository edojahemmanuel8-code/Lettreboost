/**
 * LETTREBOOST — LEAD COLLECTION BACKEND
 * ---------------------------------------------------------------
 * Deploy this file as a Google Apps Script Web App bound to the
 * LettreBoost Google Sheet. It:
 *   1. Receives form submissions (POST) from the website
 *   2. Validates required fields + a honeypot spam check
 *   3. Generates a sequential Request ID (LB-YYYY-0001)
 *   4. Appends a row to the "Leads" sheet
 *   5. Emails the LettreBoost team a branded internal notification
 *   6. Emails the client a branded confirmation
 *
 * See SETUP_INSTRUCTIONS.md in this folder for full deployment steps.
 */

/* ============================= CONFIG ============================= */

const CONFIG = {
  SHEET_NAME: "Leads",
  BUSINESS_EMAIL: "admin@lettreboost.com.ng",
  BRAND_NAME: "LettreBoost",
  BRAND_TAGLINE: "Create. Target. Reach. Grow.",
  BRAND_COLOR: "#0E1B3D",
  ACCENT_COLOR: "#2F5FFF",
  RESPONSE_TIME_TEXT: "approximately 5 hours",
  SHEET_URL: "https://docs.google.com/spreadsheets/d/1gddkR9zekRkSeJVIUa85R8LFJPGMvX6-jfl8YL7z1os/edit?pli=1&gid=0#gid=0", // used in the "View in Google Sheet" email button
};

const COLUMNS = [
  "Timestamp",
  "Request ID",
  "Full Name",
  "Email",
  "Phone / WhatsApp",
  "Business / Organisation",
  "Service Requested",
  "Target Niche",
  "Budget Range",
  "Project Description",
  "Preferred Contact Method",
  "Source",
  "Status",
  "Admin Notes",
];

/* ============================= ENTRY POINT ============================= */

function doPost(e) {
  try {
    const payload = parseRequestBody(e);

    // Silently accept (but do not process) obvious bot submissions.
    if (payload.website) {
      return jsonResponse({ success: true, requestId: null, spam: true });
    }

    const errors = validatePayload(payload);
    if (errors.length > 0) {
      return jsonResponse({ success: false, message: errors.join(" ") }, 400);
    }

    const sheet = getSheet();
    const requestId = generateRequestId(sheet);
    const timestamp = new Date();

    appendLeadRow(sheet, timestamp, requestId, payload);

    sendInternalNotification(requestId, timestamp, payload);
    sendClientConfirmation(requestId, payload);

    return jsonResponse({ success: true, requestId });
  } catch (err) {
    return jsonResponse({ success: false, message: "Server error: " + err.message }, 500);
  }
}

// Simple health check for GET requests (visiting the deployed URL directly).
function doGet() {
  return ContentService.createTextOutput("LettreBoost lead endpoint is running.").setMimeType(
    ContentService.MimeType.TEXT
  );
}

/* ============================= HELPERS ============================= */

function parseRequestBody(e) {
  if (!e || !e.postData || !e.postData.contents) {
    throw new Error("No form data received.");
  }
  return JSON.parse(e.postData.contents);
}

function validatePayload(payload) {
  const errors = [];
  if (!payload.fullName || payload.fullName.trim().length < 2) {
    errors.push("Full name is required.");
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!payload.email || !emailPattern.test(payload.email)) {
    errors.push("A valid email address is required.");
  }
  if (!payload.serviceRequired) {
    errors.push("Service required is missing.");
  }
  if (!payload.projectDescription || payload.projectDescription.trim().length < 5) {
    errors.push("Project description is required.");
  }
  return errors;
}

function getSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(CONFIG.SHEET_NAME);
  if (!sheet) {
    sheet = spreadsheet.insertSheet(CONFIG.SHEET_NAME);
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(COLUMNS);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

/**
 * Generates a sequential ID in the format LB-2026-0001, based on how
 * many leads already exist for the current year.
 */
function generateRequestId(sheet) {
  const year = new Date().getFullYear();
  const lastRow = sheet.getLastRow();
  let countThisYear = 0;

  if (lastRow > 1) {
    const ids = sheet.getRange(2, 2, lastRow - 1, 1).getValues(); // column B = Request ID
    ids.forEach((row) => {
      const id = String(row[0] || "");
      if (id.indexOf("LB-" + year + "-") === 0) {
        countThisYear += 1;
      }
    });
  }

  const next = String(countThisYear + 1).padStart(4, "0");
  return `LB-${year}-${next}`;
}

function appendLeadRow(sheet, timestamp, requestId, payload) {
  sheet.appendRow([
    timestamp,
    requestId,
    payload.fullName || "",
    payload.email || "",
    payload.phone || "",
    payload.business || "",
    payload.serviceRequired || "",
    payload.targetNiche || "",
    payload.budgetRange || "",
    payload.projectDescription || "",
    payload.preferredContactMethod || "",
    payload.source || "website",
    "New",
    "",
  ]);
}

function jsonResponse(obj, status) {
  const output = ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
  return output;
}

/* ============================= EMAILS ============================= */

function sendInternalNotification(requestId, timestamp, payload) {
  const subject = `New LettreBoost Client Request — ${payload.serviceRequired}`;
  const html = internalEmailTemplate(requestId, timestamp, payload);
  MailApp.sendEmail({
    to: CONFIG.BUSINESS_EMAIL,
    subject,
    htmlBody: html,
  });
}

function sendClientConfirmation(requestId, payload) {
  if (!payload.email) return;
  const subject = "We Received Your LettreBoost Request";
  const html = clientEmailTemplate(requestId, payload);
  MailApp.sendEmail({
    to: payload.email,
    subject,
    htmlBody: html,
  });
}

function internalEmailTemplate(requestId, timestamp, payload) {
  return `
  <div style="font-family: Arial, Helvetica, sans-serif; background:#F7F8FA; padding:24px;">
    <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:8px;overflow:hidden;border:1px solid #E5E8F0;">
      <div style="background:${CONFIG.BRAND_COLOR};padding:24px 28px;">
        <p style="margin:0;color:#ffffff;font-size:13px;letter-spacing:1px;text-transform:uppercase;opacity:0.7;">${CONFIG.BRAND_NAME}</p>
        <h1 style="margin:6px 0 0;color:#ffffff;font-size:20px;">New Client Request</h1>
      </div>
      <div style="padding:28px;">
        <h2 style="font-size:15px;color:${CONFIG.BRAND_COLOR};margin:0 0 8px;">Client Information</h2>
        ${row("Full Name", payload.fullName)}
        ${row("Email", payload.email)}
        ${row("Phone / WhatsApp", payload.phone)}
        ${row("Business / Organisation", payload.business)}
        ${row("Preferred Contact Method", payload.preferredContactMethod)}

        <h2 style="font-size:15px;color:${CONFIG.BRAND_COLOR};margin:20px 0 8px;">Project Information</h2>
        ${row("Service Requested", payload.serviceRequired)}
        ${row("Target Niche", payload.targetNiche)}
        ${row("Budget Range", payload.budgetRange)}
        ${row("Source", payload.source)}

        <h2 style="font-size:15px;color:${CONFIG.BRAND_COLOR};margin:20px 0 8px;">Requirement</h2>
        <p style="font-size:14px;color:#333;line-height:1.5;background:#F7F8FA;padding:12px 14px;border-radius:6px;">${escapeHtml(
          payload.projectDescription
        )}</p>

        <h2 style="font-size:15px;color:${CONFIG.BRAND_COLOR};margin:20px 0 8px;">Request Information</h2>
        ${row("Request ID", requestId)}
        ${row("Timestamp", timestamp.toString())}
        ${row("Status", "New")}

        <div style="margin-top:26px;text-align:center;">
          <a href="${CONFIG.SHEET_URL}" style="background:${CONFIG.ACCENT_COLOR};color:#ffffff;text-decoration:none;padding:12px 22px;border-radius:6px;font-size:14px;font-weight:600;display:inline-block;">View Request in Google Sheet</a>
        </div>
      </div>
      <div style="background:#F7F8FA;padding:16px 28px;text-align:center;">
        <p style="margin:0;font-size:12px;color:#8A93A6;">${CONFIG.BRAND_NAME} — ${CONFIG.BRAND_TAGLINE}</p>
      </div>
    </div>
  </div>`;
}

function clientEmailTemplate(requestId, payload) {
  return `
  <div style="font-family: Arial, Helvetica, sans-serif; background:#F7F8FA; padding:24px;">
    <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:8px;overflow:hidden;border:1px solid #E5E8F0;">
      <div style="background:${CONFIG.BRAND_COLOR};padding:28px;">
        <p style="margin:0;color:#ffffff;font-size:13px;letter-spacing:1px;text-transform:uppercase;opacity:0.7;">${CONFIG.BRAND_NAME}</p>
        <h1 style="margin:6px 0 0;color:#ffffff;font-size:20px;">We Received Your Request</h1>
      </div>
      <div style="padding:28px;">
        <p style="font-size:14px;color:#333;">Hello ${escapeHtml(payload.fullName || "there")},</p>
        <p style="font-size:14px;color:#333;line-height:1.6;">
          Thank you for contacting ${CONFIG.BRAND_NAME}. We've successfully received your newsletter service request.
        </p>

        <h2 style="font-size:15px;color:${CONFIG.BRAND_COLOR};margin:20px 0 8px;">Your Request</h2>
        ${row("Service", payload.serviceRequired)}
        ${row("Business/Organisation", payload.business)}
        ${row("Request ID", requestId)}

        <h2 style="font-size:15px;color:${CONFIG.BRAND_COLOR};margin:20px 0 8px;">What Happens Next?</h2>
        <p style="font-size:14px;color:#333;line-height:1.6;">
          Your request has been received by our team and is now being reviewed. A member of the ${CONFIG.BRAND_NAME}
          team will contact you with the next steps. You should expect feedback within ${CONFIG.RESPONSE_TIME_TEXT}.
        </p>
        <p style="font-size:14px;color:#333;line-height:1.6;">
          If you need to provide additional information, you can reply to this email or contact us through WhatsApp.
        </p>
        <p style="font-size:14px;color:#333;line-height:1.6;">Thank you for choosing ${CONFIG.BRAND_NAME}.</p>
      </div>
      <div style="background:#F7F8FA;padding:16px 28px;text-align:center;">
        <p style="margin:0;font-size:12px;color:#8A93A6;">${CONFIG.BRAND_NAME} — ${CONFIG.BRAND_TAGLINE}</p>
      </div>
    </div>
  </div>`;
}

function row(label, value) {
  return `<p style="margin:0 0 6px;font-size:14px;color:#333;"><strong style="color:${CONFIG.BRAND_COLOR};">${label}:</strong> ${escapeHtml(
    value || "—"
  )}</p>`;
}

function escapeHtml(str) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
