# Premium AI Engineering Portfolio - Phase 1

This repository contains the foundation for a premium, production-grade personal portfolio for an AI/ML Engineer. It is built using modern web technologies and optimized for performance, accessibility, and clean architecture to easily accommodate Phase 2 (Advanced Project Intelligence) and Phase 3 (Deployment Hardening).

## Technology Stack

* **Framework:** Next.js (App Router), React, TypeScript
* **Styling:** Tailwind CSS v4, custom "Dark Premium AI Laboratory" theme
* **Components:** Custom accessible UI components (inspired by shadcn/ui)
* **Icons:** Lucide React
* **Forms:** React Hook Form + Zod validation
* **Animations:** Tailwind CSS keyframes & transitions (motion-ready architecture)

## Project Structure

```
/app          - Next.js application routes, layout, and global CSS.
/components   - React components.
  /layout     - Navbar, Footer.
  /sections   - Page sections (Hero, About, Capabilities, etc.).
  /ui         - Reusable foundation components (Button, Card, Input, etc.).
/data         - Centralized data configurations (Profile, Site, Experience, etc.).
/lib          - Utility functions.
/types        - TypeScript interfaces for data models.
```

## Local Setup

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Environment Variables:**
   Copy the example environment file and configure it if needed (currently for Phase 3 planning).
   ```bash
   cp .env.example .env.local
   ```

3. **Run Development Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization Guide

All portfolio content is centralized in the `/data` directory to make customization easy without editing React components.

* **`/data/profile.ts`**: Update your name, role, bio, social links, and resume URL.
* **`/data/capabilities.ts`**: Update your core capabilities and grouped skills.
* **`/data/experience.ts`**: Update your professional timeline.
* **`/data/site.ts`**: Modify navigation links and global SEO metadata.

### Image Replacement
Replace images in the `public/` directory (e.g., `public/resume.pdf` or profile images) and reference them in the data files.

## Security Rules

* **DO NOT** commit API keys, tokens, or credentials.
* `.env` files are ignored by git.
* Sensitive backend integrations will be handled securely in Phase 3.
