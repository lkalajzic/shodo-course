# Japanese Calligraphy School - Launch Checklist

## ✅ COMPLETED

- [x] Sales copy written (see `sales_page_copy.md`)
- [x] Landing page built (Next.js + Tailwind)
- [x] Logo created (SVG + JPG + favicon)
- [x] Meta ads copy written (3 variations in `meta_ads_copy.md`)
- [x] Thank you page created
- [x] Git repo initialized

## 🚀 NEXT STEPS (In Order)

### 1. Create Stripe Payment Link

**Action:** Go to Stripe Dashboard → Payment Links → Create New

**Settings:**
- **Product name:** Japanese Calligraphy School - Shodo Course
- **Price:** $47 USD
- **Success URL:** https://japanesecalligraphy.school/thank-you
- **Collect customer email:** Yes
- **Allow promotion codes:** Optional

**Then:**
- Copy the payment link URL
- Create `/Users/luka/Documents/coding/shodo-course/landing/.env.local`
- Add: `NEXT_PUBLIC_STRIPE_PAYMENT_LINK=https://buy.stripe.com/YOUR_LINK_HERE`

---

### 2. Set Up Domain (Porkbun)

**Buy domain:** japanesecalligraphy.school (if not already purchased)

**DNS Records (add after Vercel deployment):**
- **A Record:** @ → 76.76.21.21
- **CNAME Record:** www → cname.vercel-dns.com

**Email forwarding (optional but recommended):**
- hello@japanesecalligraphy.school → your gmail

---

### 3. Deploy to Vercel

**Steps:**
1. Go to vercel.com
2. Import Git Repository
3. Connect to your GitHub account (push repo there first) OR deploy directly from local
4. Project settings:
   - Framework: Next.js
   - Build command: `bun run build` (or use default)
   - Output directory: `.next`
5. Environment variables:
   - Add `NEXT_PUBLIC_STRIPE_PAYMENT_LINK` with your Stripe URL
6. Deploy!

**After deployment:**
- Add custom domain in Vercel: japanesecalligraphy.school
- Vercel will give you DNS records
- Add those to Porkbun (see step 2)

---

### 4. Facebook Business Setup

**Create FB Page:**
- Page name: Japanese Calligraphy School
- Category: Education / Online Course
- Upload logo.jpg as profile pic
- Bio (see below)

**FB Page Bio:**
```
Learn shodo (書道)—the ancient Japanese art of meditative calligraphy.

Taught by Master Kenji Tanaka, a 40-year practitioner in Kamakura.

Screen-free. Mindful. Real.

Start your practice → japanesecalligraphy.school
```

**Install Facebook Pixel:**
- Create new pixel in Facebook Events Manager
- Copy pixel ID
- Add to GTM (see next step)

---

### 5. Google Tag Manager Setup

**Good news:** GTM is already configured! (`GTM-WL7ZGB88`)

**Add Facebook Pixel in GTM:**

1. **Base Pixel Code:**
   - Tag type: Custom HTML
   - Paste FB Pixel code (get from Events Manager)
   - Trigger: All Pages

2. **InitiateCheckout Event:**
   - Tag type: Custom HTML
   - Code:
   ```html
   <script>
   fbq('track', 'InitiateCheckout', {
     value: 47.00,
     currency: 'USD',
     content_name: 'Shodo Course',
     content_category: 'Online Course'
   });
   </script>
   ```
   - Trigger: Click - Click Text contains "Begin Your Practice"

3. **Purchase Event:**
   - Tag type: Custom HTML
   - Code:
   ```html
   <script>
   fbq('track', 'Purchase', {
     value: 47.00,
     currency: 'USD',
     content_name: 'Shodo Course',
     content_type: 'product'
   });
   </script>
   ```
   - Trigger: Page View → Page Path equals `/thank-you`

4. **Publish** the GTM container

---

### 6. Images Needed

**Before launch, you need these images:**

The landing page expects these files in `/landing/public/`:

1. **`shodohero.jpg`** - Hero section
   - Bold black ink stroke on white washi paper
   - Or: Brush creating a dramatic stroke
   - Size: 1200x900px recommended

2. **`shodo-vs-screen.jpg`** - Problem section
   - Split image: hand creating calligraphy vs scrolling phone
   - Or: Traditional calligraphy setup (brush, ink, paper)
   - Size: 800x800px

3. **`master-tanaka.jpg`** - Story section
   - Elderly Japanese man at calligraphy desk
   - Traditional studio setting, focused on work
   - Size: 1200x1600px (portrait)

4. **`shodo-finished.jpg`** - Above pricing
   - Finished shodo work - bold kanji on washi paper
   - Multiple pieces or single dramatic piece
   - Size: 1200x800px

**Where to get images:**
- **AI generate:** Midjourney, DALL-E 3, Stable Diffusion
- **Stock photos:** Unsplash, Pexels (search "japanese calligraphy" "shodo" "sumi ink")
- **Important:** Make sure they match the minimalist aesthetic (cream/grey/black/red color scheme)

**Prompts for AI image generation:**
1. Hero: "Japanese calligraphy brush creating bold black ink stroke on white washi paper, minimalist, dramatic, close-up, professional photography"
2. Master: "Elderly Japanese calligraphy master working at traditional desk in Kamakura studio, serene, focused, natural lighting, photorealistic"
3. Finished work: "Bold Japanese kanji character in black ink on cream washi paper, minimalist composition, museum quality, overhead shot"

---

### 7. Launch Meta Ads

**See `meta_ads_copy.md` for full details**

**Quick start:**
1. Use Main Primary Text (the one you edited together)
2. Headline: "When Was The Last Time You Created Something Real?"
3. Description: "Learn shodo from a 40-year Kamakura master. Meditative calligraphy with brush and ink."
4. Image: Bold ink stroke (most eye-catching)
5. Budget: $20-30/day for 3-5 days
6. Targeting: See meta_ads_copy.md

---

## 📋 PRE-LAUNCH TESTING

Before running ads, test the full funnel:

1. **Local testing:**
   ```bash
   cd /Users/luka/Documents/coding/shodo-course/landing
   bun install  # if packages need installing
   bun run dev
   ```
   - Visit http://localhost:3001
   - Check all sections render correctly
   - Click CTA buttons (they'll alert about missing Stripe link - that's OK for now)

2. **After Vercel deployment:**
   - Visit japanesecalligraphy.school
   - Test full flow: Landing → Click CTA → Stripe checkout → Thank you page
   - Verify GTM & FB Pixel firing (use Facebook Pixel Helper Chrome extension)
   - Test on mobile (iPhone and Android if possible)

3. **Before ads:**
   - Send link to 2-3 friends for feedback
   - Check load speed (should be fast with Next.js)
   - Proofread all copy one more time

---

## 💰 VALIDATION GOALS

**Success metrics:**
- 5-10 purchases at $47 = Validated demand
- If you hit this, the niche works
- Then decide: Build the course OR refund buyers

**What to watch:**
- Facebook Ads Manager: CTR, CPC, conversions
- Stripe Dashboard: Actual purchases
- If 0 sales after $100 spent → kill it, try next niche

---

## 📁 PROJECT STRUCTURE

```
shodo-course/
├── landing/                    # Next.js app
│   ├── app/
│   │   ├── page.tsx           # Main landing page ✅
│   │   ├── layout.tsx         # SEO + GTM ✅
│   │   ├── components/        # Stripe buttons ✅
│   │   └── thank-you/         # Post-purchase ✅
│   ├── public/                # Images + logo
│   └── .env.local.example     # Stripe link config ✅
├── sales_page_copy.md         # Full sales copy ✅
├── meta_ads_copy.md           # 3 ad variations ✅
└── LAUNCH_CHECKLIST.md        # This file ✅
```

---

## 🎯 ESTIMATED TIME TO LAUNCH

| Task | Time |
|------|------|
| Get images (AI generate or find) | 30-60 min |
| Create Stripe payment link | 5 min |
| Push to GitHub | 2 min |
| Deploy to Vercel | 10 min |
| Configure domain DNS | 5 min |
| Set up FB Page + Pixel | 15 min |
| Configure GTM events | 10 min |
| Test full funnel | 15 min |
| Create Meta ad campaign | 20 min |
| **TOTAL** | **~2 hours** |

DNS propagation may take 1-24 hours, but you can use Vercel URL (*.vercel.app) for ads until domain is live.

---

## 🚨 DON'T FORGET

- [ ] Set Stripe success URL to `/thank-you`
- [ ] Test FB Pixel firing on all pages
- [ ] Make sure .env.local has Stripe link
- [ ] Set up email forwarding (hello@japanesecalligraphy.school)
- [ ] Have a plan for when purchases come in (refund OR build course)

---

Good luck! 🖌️

The positioning is solid, copy is strong, page is beautiful. If this doesn't convert, it's the niche, not the execution.
