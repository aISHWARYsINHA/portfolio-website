# Portfolio Website Design Guidelines

## Design Approach
**Reference-Based**: Drawing inspiration from modern developer portfolios (Linear, Vercel, Stripe careers) - emphasizing bold typography, generous whitespace, and visual hierarchy through scale and spacing rather than decoration.

## Typography System
- **Primary Font**: Inter or Manrope via Google Fonts
- **Hero Heading**: text-5xl md:text-7xl, font-bold, tracking-tight
- **Section Headings**: text-3xl md:text-5xl, font-bold
- **Subheadings**: text-xl md:text-2xl, font-semibold
- **Body Text**: text-base md:text-lg, leading-relaxed
- **Labels/Captions**: text-sm, uppercase tracking-wide

## Layout System
**Spacing Primitives**: Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Section padding: py-20 md:py-32
- Component gaps: gap-6 md:gap-8
- Container: max-w-7xl mx-auto px-6 md:px-8

## Hero Section (Full Viewport)
- Full-height section (min-h-screen) with purple gradient background
- Centered content layout with large typographic hierarchy
- Name: Oversized heading (text-6xl md:text-8xl)
- Title/Role: Medium weight subheading below name
- Brief tagline: Single sentence in regular weight
- Two CTAs: "View Projects" (primary) + "Contact Me" (secondary with blurred background)
- Subtle scroll indicator at bottom

## About Section
- Two-column layout on desktop (grid-cols-1 md:grid-cols-2, gap-12)
- Left column: Professional headshot (rounded-2xl, aspect-square)
- Right column: Bio paragraph + skills grid
- Skills display: Grid of badges/pills (grid-cols-2 md:grid-cols-3, gap-4)
- Each skill: Rounded container with icon + label

## Projects Grid
- Three-column grid on desktop (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- Each project card: Aspect-video image, title, description, tech stack tags, "View Project" link
- Card styling: Rounded corners (rounded-xl), subtle border
- Hover state: Slight elevation/scale transform
- Tech tags: Small pills below description (flex flex-wrap gap-2)
- 6-9 project cards for comprehensive portfolio showcase

## Contact Form
- Centered, max-w-2xl container
- Section heading above form
- Fields: Full Name, Email, Subject (optional dropdown), Message (textarea)
- Each field: Label above, full-width input, consistent padding (p-4)
- Submit button: Full-width on mobile, auto-width on desktop, right-aligned
- Success/error messaging area below form
- Alternative contact methods below form (email, LinkedIn, GitHub icons with links)

## Images
**Hero Section**: No background image - use pure purple gradient (from-purple-600 via-purple-700 to-purple-900 or similar)

**About Section**: 
- Professional headshot: Square format, should show personality/professionalism

**Projects Grid** (6-9 images total):
- Project screenshots/mockups showing actual work
- Each image aspect-video ratio (16:9)
- High-quality, clean interface screenshots or project visuals
- Variety of project types (web apps, websites, mobile designs, etc.)

## Component Enrichment
- **Navigation**: Sticky header with logo + navigation links, "Contact" CTA button
- **Footer**: Three columns - Quick Links, Social Media, Newsletter signup with description
- **Project Cards**: Include live demo + GitHub links where applicable
- **Contact Section**: Add response time expectation ("I'll reply within 24 hours")

## Icons
Use **Heroicons** via CDN for all interface icons (menu, external links, social media, skills)