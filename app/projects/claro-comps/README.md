# Claro Comps Project Page

## Overview
A simplified, story-focused project page for the Claro Comps AI-powered PDF extraction tool.

## Design Philosophy
- **Story over features** - Personal narrative about solving a real problem
- **Humble and authentic** - Not a sales pitch, just honest storytelling
- **Visual proof** - Demo video and product screenshots show, don't tell
- **Clean and minimal** - Less text, more impact

---

## Page Structure (5 Sections)

### 1. Hero Section
**Purpose:** Hook with value proposition and demo  
**Key Elements:**
- Product name and tagline
- Prominent demo video button
- Two key stats (<45s processing, 99%+ accuracy)
- Dashboard screenshot placeholder
- Scroll indicator to story

**Tone:** Professional but approachable

---

### 2. Why I Built This (The Story)
**Purpose:** Personal connection - the Friday night problem  
**Key Elements:**
- Summer 2025 internship context
- The 3-hour manual process problem
- Why existing AI tools weren't enough
- Decision to build it myself
- Before/after comparison image

**Tone:** Personal, humble, relatable

---

### 3. How It Works
**Purpose:** Show the solution simply  
**Key Elements:**
- Three-step process (Upload Excel → Drop PDFs → Get Data)
- The key insight (structure, not reading, was the bottleneck)
- Template engine explanation
- Product screenshots (template upload, results review)

**Tone:** Clear and straightforward

---

### 4. What I Built
**Purpose:** Technical credibility and validation  
**Key Elements:**
- Tech stack (Next.js, Supabase, GPT-4o, Tailwind)
- Results (200+ docs, 99%+ accuracy, 38s avg time, 4 firms)
- One genuine testimonial

**Tone:** Factual, no embellishment

---

### 5. Closing
**Purpose:** Humble wrap-up  
**Key Elements:**
- "Saw a problem, built a solution"
- "Not perfect, but functional"
- "Proof you can take action"

**Tone:** Humble, reflective, action-oriented

---

## Key Differences from Original

### Removed Sections:
- ❌ "The Insight" (merged into "How It Works")
- ❌ "Being Proactive with AI" (too preachy)
- ❌ "The Lesson" (redundant with closing)
- ❌ Separate tech stack section (merged with results)

### Content Changes:
- ✅ 60% less text overall
- ✅ More prominent demo video link
- ✅ Clearer product image placeholders
- ✅ More personal, less corporate tone
- ✅ Removed granular feature lists
- ✅ Simplified testimonials (1 instead of 2+)

### Why These Changes:
- Story flows better without interruption
- Removes repetitive messaging
- Makes it feel like a personal project, not a sales page
- Easier to scan and understand quickly
- Images show the product better than words

---

## Media Assets Needed

### Critical:
1. **Demo Video** - 2-3 minute walkthrough
   - Update link on line 43 in `page.tsx`
   
2. **Dashboard Screenshot** - Main product interface
   - File: `claro-dashboard.png`
   - Location: Line 72 in `page.tsx`

### Recommended:
3. **Before/After Comparison** - Shows the problem/solution
   - File: `before-after.png`
   - Location: Line 132 in `page.tsx`

4. **Template Upload** - Shows key functionality
   - File: `template-upload.png`
   - Location: Line 205 in `page.tsx`

5. **Results Screen** - Shows the output
   - File: `results-screen.png`
   - Location: Line 213 in `page.tsx`

See `IMAGE-MANIFEST.md` for detailed specifications.

---

## Content Guidelines

### Voice & Tone:
- First person ("I built", "I saw")
- Humble ("not perfect", "proof I could")
- Personal ("my Friday nights", "ten weeks")
- Action-oriented ("saw a problem, built a solution")

### What to Avoid:
- Corporate buzzwords
- Over-selling features
- Preachy AI philosophy
- Long explanations
- Multiple testimonials or social proof dumps

### What Works:
- Short paragraphs
- Specific details (Friday, 3 hours, 40-80 pages)
- Honest limitations ("not perfect")
- Clear problem → solution narrative
- One strong testimonial

---

## Design Consistency

### Colors:
- Primary: Forest green (#047857)
- Text: Slate grays
- Backgrounds: White and slate-50
- Accents: Forest tints for highlights

### Typography:
- Headings: Serif (elegant, personal)
- Body: Sans-serif (readable, modern)
- Clear hierarchy

### Spacing:
- Generous padding between sections (py-24)
- Clean grid layouts
- Consistent rounded corners (rounded-xl)

---

## Technical Notes

### Dependencies:
- Next.js (App Router)
- AnimateOnScroll component (custom)
- Tailwind CSS

### Performance:
- All placeholders are lightweight SVGs
- Images lazy-load when added
- Smooth scroll animations

### Responsive:
- Mobile-first design
- Grid collapses on mobile (md:grid-cols-2)
- Font sizes scale with viewport

---

## Future Enhancements

### When Time Permits:
- [ ] Add actual product screenshots
- [ ] Record and upload demo video
- [ ] Consider adding one "how it works" animation
- [ ] Add real before/after comparison

### Keep It Simple:
- Don't add more sections
- Don't add more testimonials
- Don't expand explanations
- Don't add feature lists

**Remember:** Story over features, always.

---

**Last Updated:** After simplification  
**Word Count:** ~300 (down from ~800)  
**Sections:** 5 (down from 9)  
**Reading Time:** ~2 minutes
