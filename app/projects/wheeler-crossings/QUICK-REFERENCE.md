# Wheeler Crossings - Quick Reference

## 📍 URLs
- **Live page**: `/projects/wheeler-crossings`
- **Local dev**: `http://localhost:3000/projects/wheeler-crossings`

## 📸 Image Locations

All images go here: `/public/images/wheeler-crossings/`

| Filename | Section | What You Need |
|----------|---------|---------------|
| `hero-aerial-map.jpg` | Hero | Aerial map with yellow site outline |
| `assignment-map.jpg` | Assignment | U.S. map with market dots |
| `market-factors-map.jpg` | Why Columbus | Midwest map with Columbus arrow |
| `vacancy-chart.jpg` | Submarket | Licking County vacancy chart |
| `submarket-aerial.jpg` | Submarket | Pataskala Corporate Park context |
| `site-aerial.jpg` | Finding Site | Site with add-on parcel callout |
| `site-plan.jpg` | Site Plan | Technical site plan (both buildings) |
| `rent-comps.jpg` | Underwriting | Rent comparison grid |
| `construction-costs.jpg` | Underwriting | Construction cost analysis |
| `sewer-map.jpg` | Underwriting | Sewer extension map |
| `sensitivity-table.jpg` | Sensitivity | Return sensitivity matrix |
| `building-renderings.jpg` | IC Pitch | Building elevations/renderings |
| `closing-site.jpg` | Closing | Final site photo/aerial |

## 🎯 Key Stats to Verify

Make sure these numbers are correct in the hero section:

- **Acreage**: 47.7 acres @ $115,000/acre
- **Land Basis**: $5.485M
- **Total Cost**: $63.0M ($89.56 PSF)
- **Rent**: $6.98 NNN
- **YOC**: 7.80%
- **IRR**: 23.9%
- **EM**: 1.60x
- **Exit Cap**: 6.25%

## 🏗️ Building Specs

**Building 1:**
- 170,100 SF
- 54 docks
- 210' depth
- Rear-load small-bay

**Building 2:**
- 533,520 SF
- 128 docks
- 470' depth
- 156 trailer spaces
- Cross-dock

## 🎨 Brand Colors

- **Primary Red**: `#DC2626` (Tesla red)
- **Dark**: `#111827` (Gray-900)
- **Light**: `#F9FAFB` (Gray-50)

## 📱 Test Devices

- **Mobile**: iPhone (375px)
- **Tablet**: iPad (768px)
- **Desktop**: MacBook (1440px)

## ⚡ Quick Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🔗 Navigation

- Home → Wheeler Crossings: Click project card
- Wheeler Crossings → Home: "Back to Portfolio" link at bottom

## 📝 Source Files

- **Main page**: `/app/projects/wheeler-crossings/page.tsx`
- **Project card**: `/components/ProjectCard.tsx`
- **Homepage**: `/app/page.tsx`
- **Images**: `/public/images/wheeler-crossings/`

## 🚀 Deploy Checklist

- [ ] All images added and optimized
- [ ] Stats verified
- [ ] Mobile tested
- [ ] No console errors
- [ ] Smooth scrolling works
- [ ] Links work both ways
- [ ] Text proofread
- [ ] Load time < 3 seconds

## 💡 Quick Fixes

**Images not showing?**
→ Check `/public/images/wheeler-crossings/` and verify exact filenames

**Layout broken?**
→ Clear cache (Cmd+Shift+R) and restart dev server

**Text needs editing?**
→ Edit `/app/projects/wheeler-crossings/page.tsx` directly

**Colors need changing?**
→ Find/replace `red-600` with your color

## 📞 Where to Find What

| Need to change... | Edit this... |
|------------------|--------------|
| Statistics | Hero section in `page.tsx` |
| Story text | Each section in `page.tsx` |
| Images | Add to `/public/images/wheeler-crossings/` |
| Card on homepage | `/app/page.tsx` line 34-48 |
| Colors | Find/replace color classes in `page.tsx` |
| Spacing | Change `py-24` values in `page.tsx` |

---

**Ready to launch!** 🎉





