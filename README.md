# Nandinee Varshney — Portfolio

Production-ready React + Tailwind CSS portfolio homepage based on Figma design. 

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run development server**
   ```bash
   npm run dev
   ```

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Preview production build**
   ```bash
   npm run preview
   ```

## Project Structure

```
src/
  assets.js              # All Figma image asset URLs
  index.css              # Global styles + Tailwind directives
  index.jsx              # React entry point
  App.jsx                # Root component (assembles all sections)
  
  components/
    Navbar.jsx            # Top navigation (desktop + mobile hamburger)
    Hero.jsx              # Full hero section with 3-column cards + responsive headlines
    WorkSection.jsx       # Featured project card with mockup
    AboutSection.jsx      # "Me beyond my resume" with bio text
    PrinciplesSection.jsx # "What guides my decisions" — 3 principle cards
    Footer.jsx            # CTA + social links + copyright
  
  pages/
    HomePage.jsx          # Main landing page
    CreativeCornerPage.jsx # The Laboratory — scattered polaroid gallery with sections:
                           #   • Chromatic Studies (nature gradients)
                           #   • Handmade Accuracy (product design)
                           #   • Observer's Eye (animal photography)
    AboutPage.jsx         # Extended about/bio page
```

## Typography

- **Display/Headings**: Cabinet Grotesk (from Fontshare CDN)
- **Body/UI text**: DM Sans (from Google Fonts)

## Responsive Design

- **Hero Section**: Responsive headline with dynamically scaled gradient lines that adapt to all screen widths
- **Gallery Layouts**: 
  - Desktop (md+): Scattered absolute-positioned Polaroid cards with hover transformations
  - Mobile (< md): Organized 2-column grid layout with consistent spacing
- **Breakpoints**: Mobile-first approach with `md:` (768px) and `lg:` (1024px) breakpoints via Tailwind

## Tech Stack

- **React 18** — UI framework
- **Tailwind CSS 3** — Utility-first styling
- **Vite 5** — Build tool
- **PostCSS + Autoprefixer** — CSS processing

## Notes

- Image assets are hosted on Figma's CDN (valid for 7 days from design export). Replace with your own hosted images for permanent deployment.
- The `noiseTexture` overlay uses the Figma-exported noise pattern — swap with a local PNG for production.
- Colors match the Figma design: black backgrounds, `#5634dd` purple accent, white text at various opacities....

## Deployment

This project deploys instantly to **Vercel**, **Netlify**, or any static host:

```bash
npm run build
# Deploy the generated /dist folder
```
