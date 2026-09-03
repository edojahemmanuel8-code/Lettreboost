# LettreBoost — Google Apps Script Setup

This connects the website's contact form and Quick Request popup to a
Google Sheet, with automatic branded email notifications.

**For a complete step-by-step guide with troubleshooting, see: `EMAIL_SETUP_GUIDE.md`**

## Quick Summary

1. Create a Google Sheet named "LettreBoost Leads"
2. Open Extensions → Apps Script
3. Paste the code from `Code.gs`
4. Update the Google Sheet URL in the CONFIG
5. Deploy as a Web App (who has access: **Anyone**)
6. Copy the Web App URL
7. Add it to your `.env` file as `VITE_APPS_SCRIPT_URL`
8. Test by submitting a form

## Detailed Steps

### Step 1 — Create a Google Sheet
Create a new Google Sheet (e.g. "LettreBoost Leads").

### Step 2 — Rename the sheet tab
Rename the first tab to `Leads`. The script will create columns automatically.

### Step 3 — Open the script editor
In the Sheet, go to **Extensions → Apps Script**.

### Step 4 — Paste the backend code
Delete the default `Code.gs` content and paste in the contents of
`Code.gs` from this folder.

### Step 5 — Configure the Google Sheet URL
In `Code.gs`, update:
```js
SHEET_URL: "REPLACE_WITH_GOOGLE_SHEET_URL",
```
with the actual URL of your Google Sheet (copy from address bar).
Example: `https://docs.google.com/spreadsheets/d/1ABC123DEF456/edit`

**Note**: The email (admin@lettreboost.com.ng) is already configured in Code.gs

### Step 6 — Deploy as a Web App
Click **Deploy → New deployment**.
- Type: **Web app**
- Execute as: **Me**
- Who has access: **Anyone** (⚠️ Important!)

### Step 7 — Configure access correctly
Confirm "Who has access" is set to **Anyone** (not "Anyone with a
Google account") so the public website can submit without requiring sign-in.

### Step 8 — Copy the Web App URL
After deploying, copy the URL ending in `/exec`:
```
https://script.google.com/macros/s/XXXXXXXX/exec
```

### Step 9 — Add it to your environment variables
In the website project, set in `.env`:
```
VITE_APPS_SCRIPT_URL=https://script.google.com/macros/s/XXXXXXXX/exec
```

### Step 10 — Restart and test
1. Restart your dev server: `npm run dev`
2. Submit a test form at `/contact` page
3. Check Google Sheet for the new row
4. Check emails:
   - Client confirmation should arrive at the email you submitted
   - Internal notification should arrive at admin@lettreboost.com.ng

### Step 11 — Verify everything works
Confirm that:
- [ ] The Google Sheet receives a new row
- [ ] Internal notification email arrives at admin@lettreboost.com.ng
- [ ] Client confirmation email arrives at your test email
- [ ] Request ID follows the `LB-2026-0001` format
- [ ] Website shows "Request Received!" success state

## Features

- ✅ Sequential Request ID generation (LB-YYYY-0001)
- ✅ Branded internal notification emails
- ✅ Client confirmation emails
- ✅ Server-side validation (required fields, email format)
- ✅ Spam protection (honeypot field)
- ✅ All data stored in Google Sheet
- ✅ Direct link to Google Sheet in email for easy access

## Notes

- Request IDs reset yearly based on calendar year
- If you need to use a different email, update `BUSINESS_EMAIL` in Code.gs
- You can add multiple emails by separating with commas: `"email1@example.com, email2@example.com"`
- See `EMAIL_SETUP_GUIDE.md` for complete documentation and troubleshooting
