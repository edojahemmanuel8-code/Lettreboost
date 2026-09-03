# Portfolio Upload & Edit Guide

## 📁 File Structure
```
lettreboost/
├── public/
│   └── portfolio/              ← Add your images here
│       ├── business-newsletter.webp
│       ├── event-newsletter.webp
│       └── ... (more images)
└── src/
    └── data/
        └── portfolio.js        ← Edit this to add/modify portfolio items
```

---

## 🚀 Quick Start

### Step 1: Prepare Your Images
1. Take screenshots or create mockups of your newsletter designs
2. Save as `.webp` or `.jpg` format (WebP recommended - smaller file size)
3. Resize to **4:3 aspect ratio** (e.g., 800×600px, 1200×900px)
4. Compress images (keep under 200KB each)

### Step 2: Upload Images to Public Folder
1. Navigate to: `public/portfolio/`
2. Upload/paste your image files here
3. Note the exact filename (including extension)

### Step 3: Add to Portfolio Data
1. Open: `src/data/portfolio.js`
2. Add a new object to the `portfolioItems` array
3. Save the file

---

## ✏️ Detailed Instructions

### Adding a New Portfolio Item

**File:** `src/data/portfolio.js`

**Current Example Structure:**
```javascript
{
  id: "p1",                    // Unique ID (p1, p2, p3, etc.)
  title: "Quarterly Business Update",  // Portfolio item name
  category: "Business",        // Category for filtering
  label: "Sample Concept",     // Displayed on card (e.g., "Demo Newsletter", "Sample Concept")
  description: "A concept newsletter layout for a company sharing quarterly performance and product updates with customers.",
  image: "lettreboost-business-newsletter-concept.webp",  // Filename in public/portfolio/
}
```

**Step-by-Step:**

1. **Open** `src/data/portfolio.js` in VS Code
2. **Find** the `portfolioItems` array
3. **Add** a new object before the closing bracket `]`

**Example - Adding a new item:**
```javascript
const portfolioItems = [
  // ... existing items ...
  {
    id: "p8",                              // New unique ID
    title: "Your Newsletter Title",        // What you're showing
    category: "Business",                  // Category: Business, Promotional, Corporate, Events, Education, NGO, Creator
    label: "Demo Newsletter",              // Label: "Sample Concept" or "Demo Newsletter"
    description: "Brief description of what this newsletter demonstrates or represents.",
    image: "your-image-filename.webp",    // File in public/portfolio/
  },
];
```

---

## 🎨 Categories (For Filtering)

Choose from these categories when adding items:
- **Business** - Company updates, quarterly reports
- **Promotional** - Product launches, special offers
- **Corporate** - Formal business communication
- **Events** - Conference, webinar, event promotions
- **Education** - School announcements, course updates
- **NGO** - Nonprofit organization communications
- **Creator** - Personal brand, content creator newsletters

---

## 📸 Image Specifications

| Aspect | Recommendation |
|--------|-----------------|
| **Aspect Ratio** | 4:3 (800×600, 1200×900, 1600×1200) |
| **Format** | `.webp` (best compression) or `.jpg` |
| **File Size** | Under 200KB per image |
| **Location** | `public/portfolio/` folder |
| **Naming** | Use descriptive names: `business-newsletter.webp` |

**How to Create/Prepare Images:**
1. Screenshot your newsletter design
2. Crop to 4:3 ratio
3. Use online tools to convert to WebP:
   - https://cloudconvert.com/
   - https://ezgif.com/png-to-webp
   - Use any image editor (Photoshop, GIMP, Figma)

---

## 🔧 Editing Existing Portfolio Items

**To Modify an Item:**

1. Open `src/data/portfolio.js`
2. Find the item by `id` (e.g., `p1`, `p2`)
3. Edit the fields:
   - `title` - Change the portfolio item name
   - `description` - Update the description
   - `category` - Change category for filtering
   - `label` - Update label (Sample Concept / Demo Newsletter)
   - `image` - Change image filename (make sure image exists in `public/portfolio/`)

**Example - Editing an existing item:**
```javascript
// Before
{
  id: "p1",
  title: "Quarterly Business Update",
  category: "Business",
  label: "Sample Concept",
  description: "A concept newsletter layout for a company sharing quarterly performance and product updates with customers.",
  image: "lettreboost-business-newsletter-concept.webp",
},

// After
{
  id: "p1",
  title: "Q4 Financial Report Newsletter",  // Changed title
  category: "Corporate",                    // Changed category
  label: "Demo Newsletter",                 // Changed label
  description: "Professional quarterly financial report newsletter with charts and metrics.", // Changed description
  image: "financial-report-newsletter.webp", // Changed image (must exist in public/portfolio/)
},
```

---

## 🗑️ Deleting a Portfolio Item

Simply remove the entire object from the `portfolioItems` array:

```javascript
const portfolioItems = [
  { id: "p1", ... },  // Keep
  // { id: "p2", ... }, <- Delete this line and all its content
  { id: "p3", ... },  // Keep
];
```

---

## 🎯 Complete Example - Adding a Full Portfolio Item

### Step 1: Prepare Image
- Screenshot or design your newsletter
- Save as `client-pitch-newsletter.webp` (800×600px, under 200KB)

### Step 2: Upload Image
- Copy `client-pitch-newsletter.webp` to `public/portfolio/` folder

### Step 3: Add to Data
Open `src/data/portfolio.js` and add:

```javascript
{
  id: "p8",
  title: "Client Pitch Presentation",
  category: "Business",
  label: "Sample Concept",
  description: "A professional newsletter layout designed to pitch new business ideas and services to potential clients.",
  image: "client-pitch-newsletter.webp",
},
```

### Step 4: Save & View
1. Save the file
2. The portfolio page will automatically update in the browser
3. Your image will display in the 4:3 container
4. It will be responsive on all devices

---

## ✅ Checklist Before Going Live

- [ ] All images are in `public/portfolio/` folder
- [ ] Image filenames match exactly in `portfolio.js` (case-sensitive on Linux)
- [ ] All images are 4:3 aspect ratio
- [ ] All images are under 200KB
- [ ] All required fields filled in `portfolio.js` (id, title, category, label, description, image)
- [ ] No duplicate IDs (p1, p2, p3, etc. should be unique)
- [ ] Categories match the predefined list
- [ ] Descriptions are clear and benefit-focused

---

## 🐛 Troubleshooting

### Images Not Showing?
1. **Check filename**: Make sure it matches exactly in `portfolio.js`
2. **Check location**: Images must be in `public/portfolio/` folder
3. **Check capitalization**: Filenames are case-sensitive on some systems
4. **Check extension**: Make sure file has correct extension (.webp, .jpg, etc.)

### Site Not Updating?
1. Hard refresh browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. Clear browser cache
3. Restart development server if running locally

### Image Quality Issues?
1. Ensure original image is high resolution
2. Use proper image editing software
3. Compress with online tools while maintaining quality
4. Try WebP format (better compression)

---

## 💡 Pro Tips

1. **Batch Upload**: Prepare multiple images at once
2. **Consistent Styling**: Keep newsletter designs visually similar
3. **Use WebP**: Significantly smaller file sizes than JPG
4. **Descriptive Names**: Name files clearly for easy management
5. **Categories**: Distribute items across categories for better UX
6. **Labels**: Alternate between "Sample Concept" and "Demo Newsletter" for variety

---

## 🔗 Related Files
- Component: `src/components/PortfolioCard.jsx`
- Page: `src/pages/Portfolio.jsx`
- Data: `src/data/portfolio.js`
- Images: `public/portfolio/`
