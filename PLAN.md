# Odio Custom Builders Website - Development Plan

## Feature: Construction Company Website with Repairs-to-Renovation Funnel

### Goals
- Create a premium construction company website targeting realtors and homeowners selling
- Position home repairs as gateway to major renovations (70% conversion model)
- NetJets-inspired design: premium minimalism, navy/gold palette, video-ready
- Deploy to Vercel with Supabase for contact form submissions
- Comprehensive SEO foundation

### Research Findings

**Tech Stack Decision:**
- Next.js 15 (App Router) - Best Vercel integration, RSC for SEO
- Tailwind CSS v4 - Rapid styling with design system
- Supabase - Contact form submissions, future CRM potential
- Vercel - Zero-config deployment, edge functions, analytics

**Design Patterns (from research):**
- Broken grid layouts create visual interest
- Video hero sections (placeholder-ready for Phase 2)
- Custom photography > stock (plan for upgrades)
- 75% of visitors judge credibility on design
- Personalized CTAs convert 202% better

**Architecture Patterns:**
- App Router with nested layouts
- Server Components by default (SEO + performance)
- Client Components only for interactivity
- Metadata API for SEO
- Image optimization with next/image

### Site Architecture

```
/                           # Homepage
/services/                  # Services overview
  /closing-repairs/         # Realtor-focused repairs
  /home-repairs/            # General repairs
  /kitchen-remodeling/      # Kitchen renovations
  /bathroom-remodeling/     # Bathroom renovations
  /additions/               # Additions & custom builds
/our-work/                  # Project gallery
/about/                     # Company story, team
/for-realtors/              # Dedicated realtor landing page
/contact/                   # Contact forms
/blog/                      # Future: content marketing
```

### Design System

**Colors (NetJets-inspired):**
```css
--navy-900: #0f1c2e      /* Darkest - hero backgrounds */
--navy-800: #1c3149      /* Primary brand */
--navy-700: #2a4a6b      /* Secondary */
--gold-500: #c1af7a      /* Accent - CTAs, highlights */
--gold-400: #d4c494      /* Lighter accent */
--neutral-50: #fafafa    /* Backgrounds */
--neutral-100: #f5f5f5
--neutral-200: #e5e5e5
--neutral-800: #262524   /* Text */
--neutral-900: #171717   /* Headings */
```

**Typography:**
- Headings: Inter (clean, modern, widely available)
- Body: Inter
- Scale: 12px → 88px responsive

**Layout Principles:**
- Broken grid: Elements overlap, asymmetrical sections
- Generous white space
- Full-bleed hero images
- Card-based service sections

### Component Architecture

```
/components
  /ui                     # Primitive components
    Button.tsx
    Card.tsx
    Input.tsx
    Badge.tsx
  /layout                 # Layout components
    Header.tsx
    Footer.tsx
    Container.tsx
    Section.tsx
  /sections               # Page sections (composable)
    Hero.tsx
    ServicesGrid.tsx
    RealtorCallout.tsx
    TrustStack.tsx
    TestimonialsCarousel.tsx
    ProjectGallery.tsx
    CTAFooter.tsx
  /forms                  # Form components
    ContactForm.tsx
    RealtorForm.tsx
    QuickRepairForm.tsx
```

### Acceptance Criteria

**Phase 1: Foundation**
- [ ] Next.js 15 project initialized with App Router
- [ ] Tailwind CSS configured with design tokens
- [ ] Base layout (header, footer) implemented
- [ ] Homepage with all sections
- [ ] Responsive down to 375px
- [ ] Lighthouse score > 90 (all categories)
- [ ] Core Web Vitals passing

**Phase 2: Pages**
- [ ] All service pages with unique content
- [ ] /for-realtors/ landing page
- [ ] /about/ page with team section
- [ ] /our-work/ gallery with filtering
- [ ] /contact/ with functional forms

**Phase 3: Backend**
- [ ] Supabase project configured
- [ ] Contact form submissions stored
- [ ] Email notifications on submission
- [ ] Form validation (client + server)

**Phase 4: SEO & Launch**
- [ ] Metadata on all pages
- [ ] Schema markup (LocalBusiness, Service)
- [ ] Sitemap generated
- [ ] robots.txt configured
- [ ] Vercel deployment with custom domain ready

### Implementation Order (Compound Approach)

Each step builds foundation for next:

1. **Project Setup** → Reusable config for all future work
2. **Design Tokens** → Consistent styling everywhere
3. **UI Components** → Building blocks for all pages
4. **Layout Components** → Shared across all routes
5. **Homepage Sections** → Patterns reused on other pages
6. **Service Pages** → Template established
7. **Specialty Pages** → Realtor, About, Contact
8. **Backend Integration** → Forms work everywhere
9. **SEO Layer** → Metadata patterns established
10. **Polish & Deploy** → Final review, launch

### Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| Scope creep | Stick to Phase 1 MVP, iterate |
| Image placeholders | Use high-quality Unsplash construction images |
| Form complexity | Start simple, enhance later |
| SEO gaps | Build metadata into components from start |

---

## Next Steps

1. Initialize Next.js project
2. Configure Tailwind with design tokens
3. Build UI component library
4. Implement layouts
5. Build homepage

Ready to begin Phase 2: Work.
