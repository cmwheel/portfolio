# Wheeler Crossings - Image Status

## Current File Structure

All images are currently located in `/public/images/wheeler-crossings/photos/`

## What the Code Expects

The code references images in TWO locations:
1. `/photos/` subfolder (4 images)
2. Root `/wheeler-crossings/` folder (9 images)

## Mapping: Existing Files → Code Expectations

### ✅ Files That Match Code Expectations

| Existing File | Code Expects | Status |
|--------------|--------------|--------|
| `photos/project-hero.jpg` | `photos/project-hero.jpg` | ✅ Match |
| `photos/project-assignment.jpg` | `photos/project-assignment.jpg` | ✅ Match |
| `photos/project-plan.jpg` | `photos/project-plan.jpg` | ✅ Match |
| `photos/project-pitch.jpg` | `photos/project-pitch.jpg` | ✅ Match |

### ⚠️ Files That Need to Be Moved/Renamed

| Existing File | Code Expects | Action Needed |
|--------------|--------------|---------------|
| `photos/project-site.jpg` | `site-aerial.jpg` (root) | Move & rename |
| `photos/project-submarket.jpg` | `submarket-aerial.jpg` (root) | Move & rename |
| `photos/project-sensitivity.jpg` | `sensitivity-table.jpg` (root) | Move & rename |
| `photos/project-closing.jpg` | `closing-site.jpg` (root) | Move & rename |

### ❌ Missing Files (Not Found in Photos Folder)

These files are referenced in code but don't exist yet:

| Code Expects | Location | Section |
|-------------|----------|---------|
| `market-factors-map.jpg` | Root folder | Why Columbus |
| `vacancy-chart.jpg` | Root folder | Submarket Selection |
| `rent-comps.jpg` | Root folder | Underwriting grid |
| `construction-costs.jpg` | Root folder | Underwriting grid |
| `sewer-map.jpg` | Root folder | Underwriting grid |

### 📝 Unused Files (Exist but Not Referenced in Code)

These files exist but aren't currently used:

| File | Potential Use |
|------|---------------|
| `photos/project-columbus.jpg` | Could be used for Why Columbus section |
| `photos/project-summary.jpg` | Not currently referenced |
| `photos/project-underwriting.jpg` | Could be used in Underwriting section |

---

## Recommended Actions

### Option 1: Move Files to Match Code Structure

1. **Move these files from `/photos/` to root `/wheeler-crossings/`:**
   ```bash
   photos/project-site.jpg → site-aerial.jpg
   photos/project-submarket.jpg → submarket-aerial.jpg
   photos/project-sensitivity.jpg → sensitivity-table.jpg
   photos/project-closing.jpg → closing-site.jpg
   ```

2. **Create/obtain missing files in root folder:**
   - `market-factors-map.jpg`
   - `vacancy-chart.jpg`
   - `rent-comps.jpg`
   - `construction-costs.jpg`
   - `sewer-map.jpg`

### Option 2: Update Code to Match Current File Structure

Alternatively, you could update `page.tsx` to reference files in their current locations, but Option 1 is recommended to keep the organized structure.

---

## Quick Fix Commands

If you want to move/rename files to match code expectations:

```bash
cd "/Users/charliewheeler/Portfolio V.4/public/images/wheeler-crossings"

# Move and rename files
mv photos/project-site.jpg site-aerial.jpg
mv photos/project-submarket.jpg submarket-aerial.jpg
mv photos/project-sensitivity.jpg sensitivity-table.jpg
mv photos/project-closing.jpg closing-site.jpg
```

---

## Summary

- **4 images** are correctly located ✅
- **4 images** need to be moved/renamed ⚠️
- **5 images** are missing and need to be created/added ❌
- **3 images** exist but aren't currently used 📝

**Total needed:** 13 images  
**Currently correct:** 4 images  
**Action required:** 9 images

---

**Last Updated:** Based on current file structure and code analysis



