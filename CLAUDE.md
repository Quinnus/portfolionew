# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start dev server (Vite, localhost:5173)
pnpm build      # Production build
pnpm preview    # Preview production build
pnpm lint       # Run ESLint
```

No test suite is configured.

## Architecture

Single-page React 19 portfolio site built with Vite. The page is a linear scroll of sections rendered in `src/App.jsx`:

**Header → About → Projects → Skills → Footer → Contact**

### Key patterns

- **Data-driven sections** — `src/data/projects.js` and `src/data/skills.js` are the only places to add/edit portfolio content. Each project entry has `id`, `name`, `desc`, `url`, `stack[]`, and `image` (path under `public/screenshots/`).
- **Scroll animations** — `framer-motion` `<motion.div>` with `whileInView` drives the slide-in animations in the Projects section. Cards alternate left/right based on index parity.
- **Contact modal** — Lives in `src/footer/` (not `src/components/`). `Footer.jsx` owns the `modalIsVisible` state and renders `contact/Modal.jsx`, which sends email via EmailJS using three `VITE_EMAILJS_*` env vars. `ConfirmationMessage.jsx` is shown after a successful send.
- **CSS co-location** — Each component has a `.css` file alongside it; no CSS modules or utility framework.

### Environment variables (`.env`)

```
VITE_EMAILJS_SERVICE_ID
VITE_EMAILJS_TEMPLATE_ID
VITE_EMAILJS_PUBLIC_KEY
```

These are required for the contact form to function. Obtain from [emailjs.com](https://emailjs.com).
