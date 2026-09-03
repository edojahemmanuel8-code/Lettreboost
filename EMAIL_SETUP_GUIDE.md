# Email Delivery Setup Guide

Complete setup guide for the email delivery system using Google Apps Script and the contact form.

---

## 🎯 Overview

The email system works like this:

```
Visitor submits form on website
    ↓
Form data sent to Google Apps Script
    ↓
Google Apps Script validates data
    ↓
Creates sequential Request ID (LB-2026-0001)
    ↓
Appends row to Google Sheet
    ↓
Sends 2 emails:
  • Internal notification to admin@lettreboost.com.ng
  • Client confirmation to visitor's email
```

---

## 📋 Prerequisites

- ✅ Google Account (for Google Sheets & Apps Script)
- ✅ Gmail inbox to receive notifications
- ✅ LettreBoost website configured with email: `admin@lettreboost.com.ng`
- ✅ Domain: `lettreboost.com.ng`

---

## Step 1: Prepare Your Google Sheet

### 1.1 Create a New Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Click **"+ New"** → **"Google Sheets"**
3. Name it: **"LettreBoost Leads"**
4. Click **"Create"**

### 1.2 Rename the Default Sheet

1. At the bottom, right-click the default sheet tab
2. Click **"Rename"**
3. Enter: **"Leads"**
4. Press Enter

### 1.3 Get the Google Sheet URL

- Copy the URL from the address bar
- Save it for later (you'll need it to configure Google Apps Script)
- Example: `https://docs.google.com/spreadsheets/d/1ABC123DEF456/edit`

---

## Step 2: Set Up Google Apps Script

### 2.1 Open the Apps Script Editor

1. In your Google Sheet, go to **Extensions** → **Apps Script**
2. A new tab will open with the script editor
3. This is your Google Apps Script project

### 2.2 Replace the Default Code

1. In the script editor, select all the default code
2. Delete it completely
3. Go to: `google-apps-script/Code.gs` in this project
4. Copy ALL the code from that file
5. Paste it into the Google Apps Script editor
6. Click **File** → **Save** (or Ctrl+S)

### 2.3 Configure Your Email Address

1. In the script editor, find the `CONFIG` section (top of the file)
2. Look for this line:
   ```javascript
   BUSINESS_EMAIL: "REPLACE_WITH_LETTREBOOST_EMAIL@example.com",
   ```
3. Replace it with:
   ```javascript
   BUSINESS_EMAIL: "admin@lettreboost.com.ng",
   ```
4. Make sure to keep the quotes and comma
5. Save the file (Ctrl+S)

### 2.4 Configure Your Google Sheet URL

1. In the same CONFIG section, find:
   ```javascript
   SHEET_URL: "REPLACE_WITH_GOOGLE_SHEET_URL",
   ```
2. Replace with your actual Google Sheet URL (from Step 1.3):
   ```javascript
   SHEET_URL: "https://docs.google.com/spreadsheets/d/1ABC123DEF456/edit",
   ```
3. Save the file

### 2.5 Deploy as Web App

1. Click the **"Deploy"** button (top right)
2. Click **"New deployment"** (if this is your first time)
3. In the dropdown, select **"Web app"**
4. Fill in the deployment settings:
   - **Execute as**: `Me` (your Google account)
   - **Who has access**: `Anyone` (⚠️ Important - must be "Anyone" for form submissions to work)
5. Click **"Deploy"**
6. A dialog will appear asking for permissions:
   - Click **"Authorize access"**
   - Select your Google account
   - Grant the required permissions

### 2.6 Copy the Web App URL

1. After deployment, you'll see a **Deployment ID** window
2. Copy the URL that looks like:
   ```
   https://script.google.com/macros/s/XXXXXXXXXXXXXXXXX/exec
   ```
3. Save this URL - you need it for the next step!

---

## Step 3: Configure the Website

### 3.1 Add the Web App URL to .env

1. Open `.env` in your LettreBoost project root
2. Find the line:
   ```
   VITE_APPS_SCRIPT_URL=
   ```
3. Add your Web App URL:
   ```
   VITE_APPS_SCRIPT_URL=https://script.google.com/macros/s/XXXXXXXXXXXXXXXXX/exec
   ```
4. Save the file

### 3.2 Verify Email Configuration

1. Open `src/config/siteConfig.js`
2. Check that the contact email is set:
   ```javascript
   contactEmail: import.meta.env.VITE_CONTACT_EMAIL || "admin@lettreboost.com.ng",
   ```
3. Should already be correct from earlier setup

### 3.3 Restart Your Development Server

```bash
npm run dev
```

---

## Step 4: Test the Email Delivery

### 4.1 Test the Contact Form

1. Go to your local website: `http://localhost:5173/contact`
2. Fill in a test request with:
   - **Name**: Test User
   - **Email**: your.email@gmail.com (use your personal email for testing)
   - **Phone**: +2347043463441
   - **Business**: Test Company
   - **Service**: Newsletter Writing
   - **Target Niche**: Tech Startups
   - **Budget**: $100-250
   - **Description**: This is a test submission for email verification
   - **Contact Method**: Email

3. Click **"Submit"**
4. You should see: **"Request Received! 🎉"** message

### 4.2 Check Google Sheet

1. Go back to your Google Sheet: "LettreBoost Leads"
2. You should see a new row with:
   - ✅ Timestamp
   - ✅ Request ID (e.g., LB-2026-0001)
   - ✅ Your test data

### 4.3 Check Your Emails

1. **Client Confirmation Email**:
   - Check the inbox you used for testing
   - You should receive: "We Received Your LettreBoost Request"
   - Contains your Request ID

2. **Internal Notification Email**:
   - Check the admin@lettreboost.com.ng inbox
   - You should receive: "New LettreBoost Client Request"
   - Contains full request details
   - Includes "View Request in Google Sheet" button

### 4.4 Troubleshooting Emails

**Emails not arriving?**

- Check spam/promotions folders
- Verify email address is correct in Code.gs
- Check Google Apps Script has permission to send emails
  - Go to script → **Run** → Authorize (top left)
- Verify Web App URL is correctly added to .env
- Restart development server

**Wrong email receiving?**

- Double-check `admin@lettreboost.com.ng` in Code.gs
- Make sure you saved the file before deploying
- Redeploy the script if you made changes

---

## Step 5: Set Up Email Notifications (Optional)

### 5.1 Add Additional Admin Emails

To send notifications to multiple team members:

1. In Google Apps Script, modify the `CONFIG` section:
   ```javascript
   BUSINESS_EMAIL: "admin@lettreboost.com.ng, team@lettreboost.com.ng",
   ```
2. Save and redeploy
3. Now both emails will receive notifications

### 5.2 Create Gmail Filters (Optional)

To organize incoming lead emails:

1. Go to [Gmail](https://mail.google.com)
2. Click the **Settings icon** → **See all settings**
3. Go to **Filters and Blocked Addresses** tab
4. Click **"Create a new filter"**
5. In **From** field: enter `noreply@google.com`
6. In **Subject** field: enter `New LettreBoost Client Request`
7. Click **"Create filter"**
8. Check **"Apply label"** and create a label like **"LettreBoost Leads"**
9. Optionally mark as read or skip inbox
10. Click **"Create filter"**

---

## Step 6: Email Customization (Optional)

### 6.1 Customize Brand Colors

In Google Apps Script, modify the CONFIG:

```javascript
BRAND_COLOR: "#0E1B3D",      // Navy blue (your primary brand color)
ACCENT_COLOR: "#2F5FFF",     // Accent blue (your secondary color)
```

### 6.2 Customize Email Text

You can modify:
- `BRAND_NAME`: "LettreBoost"
- `BRAND_TAGLINE`: "Create. Target. Reach. Grow."
- `RESPONSE_TIME_TEXT`: "approximately 5 hours"

Edit these in the CONFIG section, then save and redeploy.

---

## 📊 Complete Checklist

- [ ] Created Google Sheet "LettreBoost Leads"
- [ ] Set sheet tab name to "Leads"
- [ ] Copied Google Sheet URL
- [ ] Created Google Apps Script in the sheet
- [ ] Pasted Code.gs content into the script
- [ ] Updated BUSINESS_EMAIL to admin@lettreboost.com.ng
- [ ] Updated SHEET_URL with your Google Sheet link
- [ ] Saved the script
- [ ] Deployed as Web App (who has access = Anyone)
- [ ] Copied the Web App URL
- [ ] Added Web App URL to .env file (VITE_APPS_SCRIPT_URL)
- [ ] Restarted development server
- [ ] Tested form submission on /contact page
- [ ] Verified row was added to Google Sheet
- [ ] Received client confirmation email
- [ ] Received internal notification email
- [ ] Verified Request ID format (LB-2026-0001)

---

## 🔍 Monitoring & Maintenance

### Daily Tasks
- Check admin@lettreboost.com.ng inbox for new leads
- Update "Status" column in Google Sheet as you progress leads

### Weekly Tasks
- Review Google Sheet for patterns/trends
- Follow up on leads

### Monthly Tasks
- Archive completed requests to a different sheet
- Review analytics in Google Sheet

---

## 🆘 Troubleshooting

### Problem: Form submits but no email received

**Solution**:
1. Verify Web App URL is correct in `.env`
2. Restart dev server: `npm run dev`
3. Check Google Sheet was updated (if yes, email config is wrong)
4. Check spam folder for emails
5. Go to Google Apps Script → **Run** and authorize permissions

### Problem: Emails going to spam

**Solution**:
1. Mark email as "Not Spam" in Gmail
2. Add sender to contacts
3. Create Gmail filter to whitelist emails with subject "New LettreBoost Client Request"

### Problem: Form validation errors

**Solution**:
- Ensure all required fields are filled:
  - Full Name (min 2 characters)
  - Valid email address
  - Service Required
  - Project Description (min 5 characters)

### Problem: Request ID format wrong

**Solution**:
- Check Google Sheet has a "Request ID" column (column B)
- Clear test data from Google Sheet if needed
- Request IDs are generated based on existing data in sheet

---

## 🎯 Form Submission Flow

```
1. User fills contact form on website
   ↓
2. Browser validates form locally
   ↓
3. Form data sent to Google Apps Script (VITE_APPS_SCRIPT_URL)
   ↓
4. Google Apps Script validates:
   - Required fields present
   - Email format valid
   - Honeypot field empty (spam check)
   ↓
5. If valid:
   - Generate Request ID
   - Add row to Google Sheet
   - Send internal email
   - Send client confirmation
   - Return success message
   ↓
6. User sees: "Request Received! 🎉"
```

---

## 📧 Email Templates

The system sends two emails:

### Internal Notification
- **To**: admin@lettreboost.com.ng
- **Subject**: "New LettreBoost Client Request — [Service]"
- **Contains**: Full client & project details, Request ID, button to Google Sheet
- **Purpose**: Alert team to new business opportunity

### Client Confirmation
- **To**: Client's email address
- **Subject**: "We Received Your LettreBoost Request"
- **Contains**: Confirmation, Request ID, next steps, response time estimate
- **Purpose**: Reassure client we received their request

---

## 🚀 Going Live

When deploying to production:

1. Update `VITE_APPS_SCRIPT_URL` in your production environment
2. Test one form submission in production
3. Verify emails arrive at admin@lettreboost.com.ng
4. Enable production traffic

---

## 📞 Support

- **Google Apps Script Docs**: https://developers.google.com/apps-script
- **Gmail Help**: https://support.google.com/mail/
- **Google Sheets Help**: https://support.google.com/docs/

