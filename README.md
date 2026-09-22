# Rahat's Portfolio

A modern, responsive, and interactive personal portfolio website showcasing my experience, testing expertise, projects, certifications, and technical skills as an SQA Engineer.

Built with **React, TypeScript, Tailwind CSS, GSAP, and Framer Motion**, the portfolio combines a clean UI with smooth animations, interactive components, and a dark/light theme system.

---

## 🌐 Live Portfolio

🔗 **Portfolio:** [Visit My Portfolio](https://rahat-qa.vercel.app/)

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Color System](#color-system)
- [Live Sections & Features](#live-sections--features)
- [Project Structure](#project-structure)
- [Deployment](#deployment)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript + Vite 5 |
| Styling | Tailwind CSS v3, shadcn-ui |
| Animation | Framer Motion, GSAP |
| Icons | Lucide React, Devicon CDN, Icons8 |
| Form → Email | FormSubmit AJAX (no server code) |
| Theme | Custom `ThemeContext` with localStorage persistence |

---

## Color System

| Token | Value | Usage |
|---|---|---|
| Dark background | `#030712` | Deep black base |
| Accent (primary) | `#F25912` | Orange highlights |
| Accent (secondary) | `#0E21A0` | Blue highlights |
| Light mode | Navy blue | Text highlights |

> All colors are semantic tokens defined in `src/index.css` — never hardcoded inside components.

---

## Live Sections & Features

### 1. Preloader
- Full-screen overlay shown for exactly **1 second** on page load
- "RAHAT" handwritten letter-by-letter stroke animation (SVG stroke-dash technique) with gradient fill, glow filter, orbiting sparkles, and a left-to-right growing underline
- Fades out with a slight scale-up and unmounts itself
- Self-contained, reusable component: `src/components/Preloader.tsx`

### 2. Navbar
- Glassmorphism sticky navbar with logo (`src/assets/Logo.png`) + "Rahat" text
- Desktop links + mobile hamburger menu (with delayed scroll fix for mobile navigation)
- Dark/light theme toggle (persisted in `localStorage`)

### 3. Hero Section
- **Left:** intro text, typing animation cycling through roles, two equal-width CTA buttons:
  - **Review CV** → opens Google Drive CV link in a new tab
  - **View Projects** → smooth scrolls to Projects section
- **Right:** `RobotVisual` (`src/components/RobotVisual.tsx`, max width 440px) — an interactive SQA-themed SVG robot:
  - Mouse-following eyes & head rotation
  - Proximity detection (260px radius):
    - Near cursor → "Finding Bugs", `bug_found`, tests-passed states
    - Far cursor → "WHO'S THERE?" with a `ScanSearch` icon, "paused: observing"
  - Bug scanning, magnifying glass, and test coverage bars

### 4. About Me
- Profile photo in a styled rotating frame
- Animated **Stats Counter** (`src/components/CountUp.tsx`) — counts up when scrolled into view:
  - 8+ Projects Tested
  - 320+ Bugs Found & Documented
  - 4 Certifications Earned
  - 0.5+ Years of Experience

### 5. My Journey
- Three tabs: **Education**, **Certification**, **Experience**
- Alternating left/right timeline cards with an animated orange vertical line that fills on scroll
- **Certifications:** 4 HackerRank / Complete Coding certificates with visible Credential IDs
- **Experience:** bullet-point descriptions, company name in primary color, subtitle in neutral color

### 6. Skills & Tools
- Circular logo grid (Devicon CDN + Icons8 fallbacks) for all tools:
  - Excel, TestRail, Jira, Postman, JMeter, Selenium, Playwright, Cypress, WebDriverIO, MySQL, MongoDB, GitHub, HTML, CSS, Tailwind CSS, JavaScript, React
- Categorized proficiency bars with **actual logos** (no letter placeholders) and percentages:
  - Testing Tools, API & Performance, Project Management, Web Technologies
- Theme-aware logo inversion for dark-mode visibility (Cypress, GitHub)

### 7. Services
9 service cards with Lucide icons:
Manual Testing, Automation Testing, API Testing, Performance Testing, Test Case Design, Bug Tracking & Reporting, Functional Testing, GUI Testing, Defect Validation

### 8. Projects
- 8 SQA projects in serial order: BurgerShop, Greg.Olsen.PhotoStudio, FlutterQuiz, Calculator Menu, Voicemail, Forkify, BDTrip, Health Care Application
- Each card: image (padded, rounded), tags, and two buttons — **GitHub** & **View Details**
- **View Details** opens a styled modal (`Dialog`) with full structured description, headings, bullet points, notes, highlighted Result box, tags, and action buttons
- **Pagination:** 6 projects shown by default → **Show More** reveals 3 at a time → **Show Less** collapses back to 6 and scrolls back to the section top

### 9. Contact
- Contact form (Name, Email, Subject, Message) with client-side validation
- **Email sending:** [FormSubmit](https://formsubmit.co) AJAX endpoint — no backend plugin needed; submissions are forwarded to `rahat.bin.israil@gmail.com`:
```
  POST https://formsubmit.co/ajax/rahat.bin.israil@gmail.com
```
- Info card: Email, Phone (+8801828353322), Location (Mirpur, Dhaka, Bangladesh), Availability (freelance & full-time, worldwide remote)

### 10. Footer
- Logo + "Rahat" branding, bio
- **Connect With Me:** GitHub, LinkedIn, Facebook
- Contact Info block
- Copyright: `© [Year] Rahat Bin Israil | All Rights Reserved`

### 11. Floating WhatsApp Button
- Glowing, pinging WhatsApp button fixed at bottom-right
- Links to `https://wa.me/8801828353322`

---

## Project Structure

```
src/
├── assets/                 # Logo, Profile photo, Projects photo
├── components/
│   ├── Preloader.tsx       # 1s handwritten "RAHAT" intro
│   ├── Navbar.tsx          # Sticky glass nav + theme toggle
│   ├── HeroSection.tsx     # Typing intro + Review CV / View Projects
│   ├── RobotVisual.tsx     # Interactive SQA robot (mouse tracking)
│   ├── AboutSection.tsx    # Photo frame + stats counter
│   ├── CountUp.tsx         # Animated number counter
│   ├── JourneySection.tsx  # Education / Certification / Experience tabs
│   ├── SkillsSection.tsx   # Logo grid + proficiency bars
│   ├── ServicesSection.tsx
│   ├── ProjectsSection.tsx # Cards + details modal + show more/less
│   ├── ContactSection.tsx  # FormSubmit-powered contact form
│   ├── Footer.tsx
│   └── WhatsAppButton.tsx
├── contexts/
│   └── ThemeContext.tsx
├── pages/
│   └── Index.tsx
└── index.css                # Design tokens (colors, glass, glow effects)
```

---

## Deployment

This project is deployed on **[Vercel](https://rahat-qa.vercel.app/)**.

- Every push to the connected Git branch triggers an automatic build & deploy
- Framework preset: **Vite**
- Build command: `npm run build`
- Output directory: `dist`
