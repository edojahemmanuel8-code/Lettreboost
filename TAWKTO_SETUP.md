# Tawk.to Live Chat Setup Guide

## 🚀 Quick Start

Live chat is now integrated into your LettreBoost website! Follow these steps to activate it.

---

## 📝 Step 1: Create a Tawk.to Account

1. Go to [https://www.tawk.to/](https://www.tawk.to/)
2. Click **"Start for Free"** or **"Sign Up"**
3. Create an account with your email
4. Verify your email
5. Complete the onboarding process

---

## 🏢 Step 2: Create a Website/Property

1. After signing in, go to the **Dashboard**
2. Click **"Add a New Website"** or **"Add Property"**
3. Fill in your website details:
   - **Website Name**: LettreBoost
   - **Website URL**: `https://lettreboost.com.ng`
   - **Industry**: Select appropriate category (e.g., "Marketing" or "Services")
4. Click **"Create"**

---

## 🔑 Step 3: Get Your Property ID

1. Once your property/website is created, you'll be in the dashboard
2. Look for your **Property ID** (also called "Site ID")
3. It looks like: `abc12345/1h0qqsq87` or similar
4. Copy the first part (the hash) - example: `abc12345`

**Alternative way to find it:**
- Go to **Settings** → **Installation Code** or **Code & Settings**
- You'll see a script tag with `https://embed.tawk.to/YOUR_PROPERTY_ID/1h0qqsq87`
- Copy the Property ID portion

---

## ⚙️ Step 4: Add Property ID to Your Website

### Option A: Using Environment Variables (Recommended)

1. Open the `.env` file in your project root
2. Find the line: `VITE_TAWKTO_PROPERTY_ID=`
3. Add your Property ID:
   ```
   VITE_TAWKTO_PROPERTY_ID=abc12345
   ```
4. Save the file
5. **Restart your development server** (if running locally)
   - Press `Ctrl+C` to stop
   - Run `npm run dev` to restart

### Option B: Using .env.local (For Local Development Only)

1. Create a file named `.env.local` in the project root
2. Add:
   ```
   VITE_TAWKTO_PROPERTY_ID=your_property_id_here
   ```
3. Save and restart the dev server

---

## ✅ Step 5: Verify the Installation

1. Go to your website: `https://lettreboost.com.ng` (or your local dev URL)
2. You should see the Tawk.to chat widget in the **bottom-right corner**
3. The widget shows a message icon by default
4. Click it to open the chat

---

## 🎨 Step 6: Customize Your Chat Widget (Optional)

In your **Tawk.to Dashboard**:

1. Go to **Settings** → **Appearance**
2. Customize:
   - **Chat Widget Color**: Choose your brand colors (matches navy blue #0E1B3D)
   - **Welcome Message**: Greet visitors
   - **Offline Message**: Set message for when agents are offline
   - **Position**: Choose widget position (bottom-right is default)

### Recommended Settings:
- **Primary Color**: `#0E1B3D` (your brand navy)
- **Secondary Color**: `#2F5FFF` (your accent blue)
- **Welcome Message**: "Hi! 👋 Welcome to LettreBoost. How can we help you today?"
- **Offline Message**: "We're not available right now, but feel free to send us a message and we'll get back to you shortly."

---

## 👥 Step 7: Set Up Your Team

1. In **Tawk.to Dashboard**, go to **Agents**
2. Click **"Invite Agents"** or **"Add Team Member"**
3. Enter email addresses of team members who will handle chat
4. Set their roles:
   - **Agent**: Can chat with visitors
   - **Supervisor**: Can manage agents and view reports
   - **Admin**: Full access

---

## 🔔 Step 8: Enable Notifications

1. Go to **Settings** → **Notifications**
2. Enable notifications for:
   - New chat messages (email)
   - Chat alerts (browser/app)
   - Offline form submissions

---

## 📊 Step 9: Monitor Chats

1. In the **Dashboard**, you can see:
   - **Online Visitors**: Currently browsing your site
   - **Chat History**: All past conversations
   - **Analytics**: Chat volume, response times, etc.
2. Click on a visitor to start a conversation
3. Use canned responses for quick replies

---

## 🔧 Technical Details

### How It Works

The Tawk.to chat is loaded via the `TawkToChat` component (`src/components/TawkToChat.jsx`):

1. Reads your Property ID from the `.env` file
2. Loads the Tawk.to script automatically
3. Displays the chat widget on all pages
4. Persists across page navigation (single-page app behavior)

### Files Involved

- **Component**: `src/components/TawkToChat.jsx`
- **Integration**: `src/App.jsx` (imports and uses TawkToChat)
- **Configuration**: `.env` file (VITE_TAWKTO_PROPERTY_ID)

### Script Loading

```javascript
// The component loads this script:
https://embed.tawk.to/YOUR_PROPERTY_ID/1h0qqsq87
```

---

## 🐛 Troubleshooting

### Chat widget not showing?

1. **Check if Property ID is set**:
   - Open `.env` file
   - Verify `VITE_TAWKTO_PROPERTY_ID` has a value
   - Check browser console for warnings

2. **Restart the dev server**:
   ```bash
   npm run dev
   ```

3. **Clear browser cache**:
   - Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)

4. **Check Tawk.to status**:
   - Go to https://www.tawk.to/dashboard
   - Verify your property is active

### Widget showing but not working?

1. Check your **Tawk.to Settings** → **Channels**
2. Ensure "Web" channel is enabled
3. Verify your website URL matches in Tawk.to dashboard
4. Check for JavaScript errors in browser console

### Not receiving chat messages?

1. Go to **Tawk.to Dashboard** → **Agents**
2. Verify your agent account is online
3. Check email notifications are enabled
4. Add more agents if needed

---

## 📋 Complete Checklist

- [ ] Create Tawk.to account
- [ ] Create website property in Tawk.to
- [ ] Copy Property ID
- [ ] Add Property ID to `.env` file
- [ ] Restart development server
- [ ] Test chat widget on your website
- [ ] Customize appearance to match brand
- [ ] Add team members/agents
- [ ] Enable notifications
- [ ] Test incoming chat message
- [ ] Set up offline message

---

## 💡 Pro Tips

1. **Mobile Support**: Chat widget automatically adapts to mobile screens
2. **Multiple Languages**: Tawk.to supports 45+ languages
3. **Canned Responses**: Create quick reply templates for common questions
4. **Pre-chat Form**: Collect visitor info before chat starts
5. **Visitor Analytics**: See what page visitors are on when they chat
6. **Integration**: Tawk.to integrates with CRM, email, Slack, etc.

---

## 🔗 Useful Links

- **Tawk.to Dashboard**: https://www.tawk.to/dashboard
- **Tawk.to Documentation**: https://docs.tawk.to/
- **API Reference**: https://developer.tawk.to/
- **Community Forum**: https://help.tawk.to/

---

## 🚀 Going Live

When deploying to production:

1. Ensure `VITE_TAWKTO_PROPERTY_ID` is set in your production environment
2. Test the chat widget on your live URL
3. Verify agents can receive messages
4. Monitor chat analytics

---

## ❓ FAQ

**Q: Can I use Tawk.to for free?**  
A: Yes! Tawk.to has a free plan with up to 5 team members. Paid plans available for additional features.

**Q: Will the chat widget slow down my website?**  
A: No, Tawk.to is optimized and loaded asynchronously. It has minimal performance impact.

**Q: Can I customize the chat widget further?**  
A: Yes! Tawk.to offers extensive customization in Settings → Appearance & Behavior.

**Q: What if I want to remove Tawk.to later?**  
A: Simply remove or comment out the Property ID in `.env`, then restart the server.

**Q: Can I track chat conversations?**  
A: Yes, all conversations are stored in Tawk.to dashboard with full history and analytics.

---

**Need help?** Contact Tawk.to support at https://help.tawk.to/ or check their community forums.
