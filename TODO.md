# Sun Power Solar Services - Overall Task Checklist

This is the central task tracking checklist for the Sun Power Solar Services web application. This file is located in the root folder and will be updated as each task is completed. Every completed task will be checked off (`[x]`) and committed to Git.

## Phase 1: Project Foundation & Setup
- [ ] Initialize Next.js 15 project with TypeScript, Tailwind CSS, and App Router
- [ ] Install required core dependencies (`gsap`, `@gsap/react`, `lucide-react`, `react-hook-form`, `zod`)
- [ ] Configure Design System in `tailwind.config.ts` (colors, typography, radii)
  - [ ] Colors: Primary (`#FFC72C`), Secondary (`#1DA1F2`), Dark (`#0B1220`), Background (`#F8FAFC`), Accent (`#3BB273`)
  - [ ] Typography: Headings (Manrope), Body (Inter), Numbers (Space Grotesk)
  - [ ] Radius: `16px`
- [ ] Set up global CSS with base typography rules and fonts
- [ ] Set up layout structure (Header navigation, footer, responsive grids)
- [ ] Add SEO foundation (metadata configuration, robots.txt, sitemap generator template)

## Phase 2: Design System & Core UI Components
- [ ] Create reusable Button components (Primary, Secondary, Accent, Icon)
- [ ] Create generic Card components (with 16px radius and smooth shadow systems)
- [ ] Create Badge, Tag, and Label components
- [ ] Create reusable Input, Select, and Form Field elements
- [ ] Implement Mobile Navigation Drawer / Menu toggle

## Phase 3: Homepage Sections (Section-by-Section)
- [ ] **Hero Section**
  - [ ] Implement layout (copy: "Stop Paying Electricity Bills. Let the Sun Pay Instead.")
  - [ ] Add primary CTA ("Get Free Site Inspection") and secondary CTA ("Calculate Savings")
- [ ] **Trust Strip Section**
  - [ ] Implement sub-hero trust indicator bar (partnerships, ratings, certificates)
- [ ] **Why Solar Section**
  - [ ] Highlight key financial and environmental benefits
- [ ] **How Solar Works Section**
  - [ ] Implement 5-step workflow layout (Sunlight -> Inverter -> Power Home -> Grid -> App Monitoring)
- [ ] **Residential Section**
  - [ ] Highlight home rooftop packages, benefits, and customized solutions
- [ ] **Commercial Section**
  - [ ] Highlight ROI, grid systems, business branding benefits
- [ ] **Government Subsidy Guide Section**
  - [ ] Guide on PM Surya Ghar Muft Bijli Yojana (claiming up to ₹78,000)
- [ ] **Loan Process & Journey Section**
  - [ ] Show 10% upfront payment, 90% loan path, loan payoff in 5 years, and 20+ years of free electricity
- [ ] **Installation Timeline Section**
  - [ ] Process timeline: Site Survey -> Design -> Permits -> Installation -> Grid Connection -> Handover
- [ ] **Project Showcase Section**
  - [ ] Create a showcase grid displaying past installations using extracted assets
- [ ] **Testimonials Section**
  - [ ] Display verified customer reviews (Ravinder, Narayana Reddy, Sridevi)
- [ ] **FAQ Section**
  - [ ] Implement accordion for primary objections (Cost, Trust, Subsidy, Maintenance, ROI)
- [ ] **Contact CTA & Form Section**
  - [ ] Build form with fields: First Name, Phone Number, Commercial/Residential, Message
  - [ ] Integrate React Hook Form and Zod schema validation

## Phase 4: Solar Savings Calculator
- [ ] Build stateful calculator component
  - [ ] Inputs: Average monthly electricity bill (slider/input), customer type (Residential vs. Commercial)
  - [ ] Outputs: Estimated system size (kW), estimated cost, government subsidy amount, net cost, monthly loan EMI, annual savings, payback period (years)
- [ ] Integrate real-time validation and clean formatting

## Phase 5: Interactions & GSAP Motion System
- [ ] Implement smooth ScrollTrigger entry animations for each content section
- [ ] Build Hero reveal animation sequence
- [ ] Create count-up animations for key metrics (e.g. system size, annual savings, number of projects)
- [ ] Create visual transitions for timeline steps and savings calculator feedback

## Phase 6: Lead Capture, Integration, & Verification
- [ ] Connect contact form and calculator CTA to validation schemas
- [ ] Set up interactive WhatsApp redirect link (`https://wa.link/ekh221`) and click handlers
- [ ] Implement email action mailto (`sunpowersolarservice@gmail.com`) and phone handlers
- [ ] Verify form validation UI alerts and successful state responses

## Phase 7: Optimization & Launch Checklist
- [ ] Perform responsive design sweep (cross-device verification, 4-column mobile grid vs 12-column desktop grid)
- [ ] Check accessibility conformance (forced contrast media-query layout, keyboard navigability, focus rings, aria-labels)
- [ ] Perform SEO optimization (schema markups, meta tags, OpenGraph images, robots, sitemaps)
- [ ] Audit application performance (Lighthouse budget score > 95 across performance, accessibility, best practices, and SEO)
- [ ] Conduct final end-to-end form and WhatsApp link testing
