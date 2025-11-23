# Big Wheeler Crossings - Project Page

## Overview

This is a dedicated, scroll-based project page for the Wheeler Crossings industrial development project. The page is designed to tell the complete story from market selection through Investment Committee approval.

## Project URL

Once deployed: `yourdomain.com/projects/wheeler-crossings`

Local development: `http://localhost:3000/projects/wheeler-crossings`

## Structure

The page is organized into 10 flowing sections:

1. **Hero/Project Snapshot** - Full-screen hero with key statistics
2. **The Assignment** - The summer analyst challenge
3. **Why Columbus?** - Market thesis with 5 key factors
4. **Submarket Selection** - Etna Township analysis
5. **Finding the Site** - The story of acquiring the land
6. **Site Plan & Product** - Building specifications
7. **Underwriting & Assumptions** - Your analytical work
8. **Return Sensitivity** - The "money slide"
9. **Investment Committee Pitch Day** - The presentation
10. **Closing** - Final impact statement

## Adding Your Images

All images should be placed in: `/public/images/wheeler-crossings/`

See `IMAGE-MANIFEST.md` in that directory for the complete list of required images with descriptions and sources.

### Required Images (13 total):

1. `hero-aerial-map.jpg` - Site aerial with yellow outline
2. `assignment-map.jpg` - U.S. market selection map
3. `market-factors-map.jpg` - Midwest growth map
4. `vacancy-chart.jpg` - Licking County vacancy chart
5. `submarket-aerial.jpg` - Pataskala Corporate Park context
6. `site-aerial.jpg` - Site with add-on parcel
7. `site-plan.jpg` - Full site plan with both buildings
8. `rent-comps.jpg` - Rent comparison grid
9. `construction-costs.jpg` - Construction cost analysis
10. `sewer-map.jpg` - Sewer extension map
11. `sensitivity-table.jpg` - Return sensitivity matrix
12. `building-renderings.jpg` - Building elevations/renderings
13. `closing-site.jpg` - Final site photo or aerial

## Design Features

### Visual Elements
- Full-bleed hero with gradient overlay
- Smooth scroll animations
- Responsive grid layouts
- Statistics highlighted in cards with backdrop blur
- Red accent color (Tesla red: `#DC2626`) for key metrics
- Dark background for sensitivity section
- Professional typography hierarchy

### Responsive Design
- Mobile-first approach
- Breakpoints at `md:` (768px) for tablet/desktop
- Grid layouts adapt from 1 column (mobile) to 2-3 columns (desktop)
- Images scale appropriately on all devices

### Color Palette
- Primary: White (`#FFFFFF`)
- Secondary backgrounds: Gray-50, Gray-900
- Accent: Red-600 (`#DC2626`)
- Text: Gray-900, Gray-700, Gray-600
- Borders: Red-600 for emphasis

## Customization

### Update Stats
All key statistics are hardcoded in the hero section. Update as needed:
- Acreage and price per acre
- Total project cost
- Rent projections
- IRR and equity multiple
- Exit cap rate

### Modify Colors
The red accent color appears throughout. To change it globally, find and replace:
- `bg-red-600` / `text-red-600` / `border-red-600`
- `bg-red-400` / `text-red-400` (lighter variants)

### Adjust Spacing
Each section uses `py-24` (96px vertical padding). Adjust for tighter/looser spacing.

## Navigation

The page includes:
- Back to Portfolio link at the bottom
- The project card on the homepage now links directly to this page
- No navbar (full immersive experience)

## Testing Checklist

Before sharing:
- [ ] All 13 images added and displaying correctly
- [ ] All statistics are accurate
- [ ] Text reads smoothly with good flow
- [ ] Mobile responsive (test on phone)
- [ ] Links work (home ↔ project page)
- [ ] Images load at appropriate sizes
- [ ] No console errors
- [ ] Smooth scrolling performance

## Future Enhancements

Consider adding:
- Scroll progress indicator
- Parallax effects on images
- Intersection Observer animations (fade-in on scroll)
- PDF download of IC memo
- Embedded video walkthrough
- Interactive site map

## File Structure

```
/app/projects/wheeler-crossings/
  ├── page.tsx           # Main project page component
  └── README.md          # This file

/public/images/wheeler-crossings/
  ├── IMAGE-MANIFEST.md  # Complete image guide
  ├── hero-aerial-map.jpg
  ├── assignment-map.jpg
  └── ... (11 more images)
```

## Notes

- The page is built with Next.js 14+ App Router
- Uses Tailwind CSS for all styling
- All images use Next.js `Image` component for optimization
- Client-side only (no SSR considerations needed)





