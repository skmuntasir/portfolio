# Sk Tasrian Muntasir — Portfolio

A modern, Vercel-inspired dark portfolio built with **React + Vite + Tailwind CSS v4** and **Framer Motion**.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`) in your browser.

## Build for production

```bash
npm run build
```

This outputs a static site to `dist/`, ready to deploy to Vercel, Netlify, or any static host.

## Things to customize before you deploy

1. **Profile photo** — drop a photo file named `profile.jpg` into the `public/` folder (square photos crop best). Until you add one, the hero shows a gradient "SM" monogram automatically.
2. **Résumé/CV** — add a `resume.pdf` file to the `public/` folder. Both "Download CV" buttons link to `/resume.pdf` and open it in a new tab.
3. **Contact form (EmailJS)** — the contact form uses [EmailJS](https://www.emailjs.com/) so messages can be sent without a backend:
   - Create a free EmailJS account, an Email Service, and an Email Template.
   - Open `src/components/Contact.jsx` and replace the three placeholder constants near the top of the file with your real values:
     ```js
     const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
     const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
     const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
     ```
   - Make sure your EmailJS template's input field names match the form: `user_name`, `user_email`, `subject`, `message`.
4. **Project screenshots** — each project card in `src/data/projects.js` has an `image: null` field. Add real screenshot paths (e.g. place images in `public/projects/` and set `image: '/projects/aivo.png'`) to replace the "screenshot coming soon" placeholder.

## Project structure

```
src/
  components/     UI sections (Hero, About, Projects, Contact, etc.)
  context/        Theme (dark/light) context
  data/           Editable content: projects, tech stack, education, achievements
  index.css       Tailwind import + design tokens (colors, fonts, glass utility)
  App.jsx         Page composition
  main.jsx        Entry point
```

## Tech stack

React · Vite · Tailwind CSS v4 · Framer Motion · React Icons · EmailJS

## Notes

- Dark mode is the default; the toggle in the navbar persists the choice in `localStorage`.
- Reduced-motion preference is respected — animations are minimized automatically for users who request it at the OS level.
- All content (projects, tech, education, achievements) lives in `src/data/` — edit those files to update the site without touching component code.
