# Big Wheeler Crossings - Image Manifest

This document maps every image used in the project page to its location and purpose.

## Directory Structure

```
/public/images/wheeler-crossings/
├── photos/                    # Main project photos
│   ├── project-hero.jpg
│   ├── project-assignment.jpg
│   ├── project-plan.jpg
│   └── project-pitch.jpg
├── market-factors-map.jpg     # Market analysis images
├── vacancy-chart.jpg
├── submarket-aerial.jpg
├── site-aerial.jpg
├── rent-comps.jpg            # Underwriting images
├── construction-costs.jpg
├── sewer-map.jpg
├── sensitivity-table.jpg
└── closing-site.jpg
```

---

## Image Usage Map

### Section 1: Hero Section
**File:** `/images/wheeler-crossings/photos/project-hero.jpg`  
**Location:** Line 76 in `page.tsx`  
**Section:** Hero - Right side project picture  
**Description:** Main hero image showing the Wheeler Crossings project  
**Display:** Aspect ratio 4:3, rounded with shadow, slight rotation effect  
**Status:** ✅ Required

---

### Section 2: The Assignment
**File:** `/images/wheeler-crossings/photos/project-assignment.jpg`  
**Location:** Line 142 in `page.tsx`  
**Section:** The Assignment - Right side  
**Description:** Summer Analyst Project Overview - U.S. Market Selection  
**Display:** Full width, maintains aspect ratio (no fixed aspect container)  
**Status:** ✅ Required

---

### Section 3: Why Columbus?
**File:** `/images/wheeler-crossings/market-factors-map.jpg`  
**Location:** Line 169 in `page.tsx`  
**Section:** Why Columbus? - Left side image  
**Description:** Market Factors - Midwest Growth map  
**Display:** Height 400px, rounded, shadow  
**Status:** ✅ Required

---

### Section 4: Submarket Selection
**File:** `/images/wheeler-crossings/vacancy-chart.jpg`  
**Location:** Line 237 in `page.tsx`  
**Section:** Submarket Selection - Right side chart  
**Description:** Licking County Modern Bulk Vacancy chart  
**Display:** Height 300px, rounded, shadow  
**Status:** ✅ Required

**File:** `/images/wheeler-crossings/submarket-aerial.jpg`  
**Location:** Line 249 in `page.tsx`  
**Section:** Submarket Selection - Full width aerial  
**Description:** Pataskala Corporate Park and Big Wheeler Crossings  
**Display:** Height 500px, rounded, shadow  
**Status:** ✅ Required

---

### Section 5: Finding the Site
**File:** `/images/wheeler-crossings/site-aerial.jpg`  
**Location:** Line 294 in `page.tsx`  
**Section:** Finding the Site - Full width aerial  
**Description:** Site Aerial with Add-On Parcel  
**Display:** Height 500px, rounded, shadow  
**Status:** ✅ Required

---

### Section 6: Site Plan & Product
**File:** `/images/wheeler-crossings/photos/project-plan.jpg`  
**Location:** Line 351 in `page.tsx`  
**Section:** Site Plan & Product - Full site plan  
**Description:** Full Site Plan - Buildings 1 & 2  
**Display:** Height 600px, rounded, object-contain (preserves aspect ratio)  
**Status:** ✅ Required

---

### Section 7: Underwriting
**Files:** 
- `/images/wheeler-crossings/rent-comps.jpg` (Line 425)
- `/images/wheeler-crossings/construction-costs.jpg` (Line 425)
- `/images/wheeler-crossings/sewer-map.jpg` (Line 425)

**Location:** Line 425 in `page.tsx` (dynamic array)  
**Section:** Underwriting - 3-image grid  
**Description:** Due Diligence images showing rent comps, construction costs, and sewer map  
**Display:** Height 280px each, rounded, shadow, hover effect  
**Status:** ✅ All 3 Required

---

### Section 8: Return Sensitivity
**File:** `/images/wheeler-crossings/sensitivity-table.jpg`  
**Location:** Line 495 in `page.tsx`  
**Section:** Return Sensitivity - The "Money Slide"  
**Description:** Return Sensitivity Analysis table  
**Display:** Height 500px, rounded, object-contain (preserves aspect ratio)  
**Status:** ✅ Required

---

### Section 9: Investment Committee
**File:** `/images/wheeler-crossings/photos/project-pitch.jpg`  
**Location:** Line 546 in `page.tsx`  
**Section:** Investment Committee - Presentation image  
**Description:** Investment Committee Presentation  
**Display:** Height 500px, rounded, shadow  
**Status:** ✅ Required

---

### Section 10: Closing
**File:** `/images/wheeler-crossings/closing-site.jpg`  
**Location:** Line 577 in `page.tsx`  
**Section:** Closing - Background image  
**Description:** Wheeler Crossings Site  
**Display:** Full bleed background with 60% opacity overlay  
**Status:** ✅ Required

---

## Summary

**Total Images Required:** 13 images

**In `/photos/` subdirectory:** 4 images
- project-hero.jpg
- project-assignment.jpg
- project-plan.jpg
- project-pitch.jpg

**In root `/wheeler-crossings/` directory:** 9 images
- market-factors-map.jpg
- vacancy-chart.jpg
- submarket-aerial.jpg
- site-aerial.jpg
- rent-comps.jpg
- construction-costs.jpg
- sewer-map.jpg
- sensitivity-table.jpg
- closing-site.jpg

---

## Notes

- All images should be optimized for web (JPG format recommended)
- Hero and closing images should be high resolution (1920px+ width)
- Charts and tables should have readable text at display size
- Aerial images should be high quality for professional presentation

---

**Last Updated:** Based on current `page.tsx` implementation
