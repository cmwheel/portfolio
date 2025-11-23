# Portfolio

A personal portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Adding Your Headshot

Replace the placeholder headshot by adding your image file to:
- `public/images/headshot.jpg` (or `.png`)

The image should be square and at least 400x400 pixels for best results.

## Adding Your Resume

Add your resume PDF to:
- `public/resume/resume.pdf`

You can then link to it in your components using `/resume/resume.pdf`.

## Project Structure

- `app/` - Next.js app directory with pages and layouts
- `components/` - React components (Hero, ProjectCard, etc.)
- `hooks/` - Custom React hooks (useTypewriter)
- `public/` - Static assets (images, resume)

## Customization

The color scheme uses:
- Light backgrounds (white, gray-50, gray-100)
- Gray text accents (#4A5568, #718096 range)
- Gold highlights (#D4AF37 range) for emphasis

Modify colors in `tailwind.config.ts` to adjust the theme.

