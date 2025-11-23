# Off-Grid Robotaxi Charging - Image Manifest

This document maps every image needed for the project page.

---

## Required Images

### 1. Hero Section - Concept Rendering
**File:** `/images/off-grid-charging/concept-rendering.png`  
**Location:** Line 61 in `page.tsx`  
**Description:** Visual concept of the off-grid charging station  
**Suggested Content:** 
- Solar panel canopy over charging bays
- Battery storage units (stylized)
- Robotaxis charging (could be generic EVs)
- Desert/sunny setting (Phoenix-style)
- Clean, modern aesthetic
**Dimensions:** 4:3 aspect ratio (1600x1200px recommended)  
**Status:** 🔴 NEEDED - Primary hero image

---

### 2. Financial Model - Pro Forma Overview
**File:** `/images/off-grid-charging/financial-model.png`  
**Location:** Line 382 in `page.tsx` (Financial Model section)  
**Description:** Screenshot of the complete 20-year financial model showing cash flows and key metrics  
**Suggested Content:** 
- 20-year cash flow projection
- Equity NPV calculation
- IRR (Internal Rate of Return)
- Annual revenue, operating costs, depreciation
- Debt service schedule (4% loan over 20 years)
- Degradation modeling over time
- Round-trip efficiency calculations
- Clean, professional Excel formatting with clear labels
**Dimensions:** 16:9 aspect ratio (1920x1080px recommended) or 4:3 (1600x1200px)  
**Status:** 🔴 NEEDED - Core financial analysis proof

---

### 4. Model Section - Cost Breakdown (Optional)
**File:** `/images/off-grid-charging/costs-breakdown.png`  
**Location:** Optional - could add to Financial Model section  
**Description:** Capital and operating cost assumptions breakdown  
**Suggested Content:** 
- Solar panel costs ($/kW)
- Battery storage costs ($/kWh)
- Charging infrastructure costs
- Land, permitting, installation
- Maintenance and insurance (annual)
- Total CapEx summary
**Dimensions:** 4:3 aspect ratio (1600x1200px recommended)  
**Status:** 🟡 OPTIONAL - Supports credibility but not critical

---

### 3. Sensitivity Analysis - Returns Matrix
**File:** `/images/off-grid-charging/sensitivity-returns.png`  
**Location:** Add to Financial Model section or Conclusion section  
**Description:** Sensitivity analysis showing how returns (IRR/NPV) vary based on key input assumptions  
**Suggested Content:** 
- **Return Matrix Format:** Two-variable sensitivity table showing IRR or NPV
- **Key Variables to Test:**
  - Battery cost ($/kWh) - rows (e.g., $80, $100, $120, $140, $160)
  - Utilization rate (%) - columns (e.g., 50%, 60%, 70%, 80%, 90%)
  - Or: Solar cost vs. Battery cost
  - Or: Grid rate vs. Utilization rate
- **Output Metrics:** IRR (%) or Equity NPV ($) in each cell
- Color-coded results:
  - Green: Positive returns (IRR > hurdle rate, NPV > 0)
  - Yellow: Marginal returns
  - Red: Negative returns
- Clear axis labels and headers
- Highlight the base case scenario
- Include conclusion thresholds (e.g., "Breakeven at $120/kWh battery cost and 70% utilization")
**Dimensions:** 16:9 aspect ratio (1920x1080px recommended) or square (1200x1200px)  
**Status:** 🔴 NEEDED - Critical for showing project viability analysis

---

## Image Guidelines

### For Concept Rendering:
- Option 1: Create in Canva/Figma (simple, clean design)
- Option 2: AI-generated (Midjourney, DALL-E)
- Option 3: Find stock imagery and composite
- Keep it aspirational but realistic
- Focus on solar panels + batteries + charging bays

### For Excel Screenshots:
- Use clear, professional formatting
- Ensure formulas/numbers are readable
- Highlight key outputs
- Use consistent color scheme (forest green accents)
- Export at high resolution
- Clean up any extraneous tabs/clutter

### For Sensitivity Analysis Returns Matrix:
- **Format:** Two-way data table in Excel
- **Structure Example:**
  ```
              Utilization Rate
              50%   60%   70%   80%   90%
  Battery    $80   X.X%  X.X%  X.X%  X.X%
  Cost       $100  X.X%  X.X%  X.X%  X.X%
  ($/kWh)    $120  X.X%  X.X%  X.X%  X.X%
             $140  X.X%  X.X%  X.X%  X.X%
             $160  X.X%  X.X%  X.X%  X.X%
  ```
- Use conditional formatting to color-code cells by IRR threshold
- Include clear title: "IRR Sensitivity Analysis" or "Equity NPV Sensitivity"
- Highlight base case with border or different background
- Add note explaining key findings (e.g., "Breakeven at $120/kWh and 70% utilization")

### Priority Order:
1. **Concept Rendering** - Makes the idea visual and concrete
2. **Financial Model** - Shows the complete 20-year pro forma analysis
3. **Sensitivity Analysis (Returns)** - Critical for showing project viability and key thresholds
4. **Cost Breakdown** - Optional, supports credibility

---

## Directory Structure

```
/public/images/off-grid-charging/
├── concept-rendering.png       ✅ EXISTS
├── financial-model.png         🔴 NEEDED
├── sensitivity-returns.png     🔴 NEEDED
└── costs-breakdown.png         🟡 OPTIONAL
```

---

## Alternative Concept Rendering Ideas

If you don't have a rendering tool:

### Option A: Simple Diagram
- Use Figma/Canva to create clean diagram
- Solar panels (icon) → Batteries (icon) → Charging (icon)
- Add simple car silhouettes
- Professional but not photorealistic

### Option B: AI-Generated
- Prompt: "Modern solar charging station with battery storage in desert setting, clean architectural rendering, multiple electric vehicles charging, professional concept art"
- Try Midjourney, DALL-E, or similar

### Option C: Photo Composite
- Find stock photos of:
  - Solar panel array
  - EV charging stations
  - Battery storage units
- Composite in Photoshop/Figma
- Add text overlays for labels

---

## Notes

- Concept rendering is most important for visual storytelling
- Excel screenshots prove you did the analysis
- Keep all images professional and clean
- Consistent visual style across images
- Focus on clarity over complexity

---

**Last Updated:** Updated for financial model and sensitivity analysis  
**Total Images:** 4  
**Critical:** 3 (concept rendering, financial model, sensitivity returns)  
**Optional:** 1 (cost breakdown)

