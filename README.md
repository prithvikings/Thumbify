<div align="center">

# 🎨 Thumbify

**AI-Powered Thumbnail Generator for Content Creators**

Generate high-CTR, studio-quality thumbnails directly from your video script — zero design skills required.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)

</div>

---

## ✨ Features

- **🤖 AI Image Generation** — Describe your video content and let AI generate stunning thumbnails using the Pollinations API with multiple style models (Cinematic, Anime, 3D Render, Minimalist).
- **🔐 Google OAuth** — Secure authentication via NextAuth.js with Google provider. Protected routes ensure only authenticated users access the dashboard.
- **🎛️ Studio Dashboard** — A full-featured workspace with a collapsible sidebar, project management, and a real-time generation canvas.
- **📐 Aspect Ratio Support** — Create thumbnails in `16:9` (YouTube), `9:16` (Shorts/TikTok), and `1:1` (Instagram) formats.
- **⚡ Style Presets** — Choose from 4 aesthetic models: _Cinematic_, _Anime_, _3D Render_, and _Minimalist_ — each mapped to a specialized AI model.
- **📥 One-Click Download** — Download generated thumbnails instantly from the canvas with auto-named files.
- **💎 Landing Page** — Marketing-ready landing page with Hero, Bento Grid workflow section, Testimonials, Pricing, FAQ, CTA, and Logo Ticker.

---

## 🛠️ Tech Stack

| Layer          | Technology                                                                 |
| -------------- | -------------------------------------------------------------------------- |
| **Framework**  | [Next.js 16](https://nextjs.org/) (App Router)                             |
| **Language**   | [TypeScript 5](https://www.typescriptlang.org/)                            |
| **UI**         | [React 19](https://react.dev/), [Tailwind CSS 4](https://tailwindcss.com/) |
| **Auth**       | [NextAuth.js v4](https://next-auth.js.org/) (Google OAuth)                 |
| **AI / Image** | [Pollinations API](https://pollinations.ai/)                               |
| **Icons**      | [Lucide React](https://lucide.dev/)                                        |
| **Animations** | [Motion](https://motion.dev/) (Framer Motion)                              |
| **Fonts**      | Geist Sans, Geist Mono, Space Grotesk (via `next/font`)                    |

---

## 📁 Project Structure

```
thumbnail/
├── public/                    # Static assets (SVGs, favicon)
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── auth/[...nextauth]/route.ts   # NextAuth API route
│   │   │   └── generate/route.ts             # AI image generation endpoint
│   │   ├── dashboard/page.tsx                # Main dashboard (Studio)
│   │   ├── login/page.tsx                    # Login page (Google OAuth)
│   │   ├── ProjectEditor/                    # Project editor route
│   │   ├── Settings/                         # Settings route
│   │   ├── layout.tsx                        # Root layout with fonts & providers
│   │   ├── page.tsx                          # Landing page
│   │   ├── providers.tsx                     # NextAuth SessionProvider wrapper
│   │   ├── globals.css                       # Global styles
│   │   └── not-found.tsx                     # Custom 404 page
│   ├── component/
│   │   ├── Navbar.tsx                        # Navigation bar
│   │   ├── Hero.tsx                          # Hero section
│   │   ├── BentoGrid.tsx                     # Feature workflow grid
│   │   ├── LogoTicker.tsx                    # Scrolling logo ticker
│   │   ├── Testimonial.tsx                   # User testimonials (masonry)
│   │   ├── Pricing.tsx                       # Pricing plans (Starter / Pro)
│   │   ├── Faq.tsx                           # Accordion FAQ
│   │   ├── Cta.tsx                           # Call-to-action section
│   │   ├── Footer.tsx                        # Footer
│   │   ├── ImageModal.tsx                    # Image preview modal
│   │   ├── UpgradeModal.tsx                  # Upgrade prompt modal
│   │   └── dashboard/
│   │       ├── StudioView.tsx                # AI generation canvas + controls
│   │       ├── ProjectsView.tsx              # Project library grid
│   │       ├── NewProjectModal.tsx           # Create new project modal
│   │       ├── SettingsView.tsx              # User settings panel
│   │       └── BillingView.tsx               # Billing & plan management
│   ├── lib/
│   │   └── auth.ts                           # NextAuth configuration
│   ├── types/
│   │   └── index.ts                          # TypeScript interfaces (Project)
│   └── proxy.ts                              # Middleware (route protection)
├── .env                                       # Environment variables (git-ignored)
├── .gitignore
├── next.config.ts
├── tailwind.config.ts
├── postcss.config.mjs
├── tsconfig.json
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm**, **yarn**, **pnpm**, or **bun**
- A [Google Cloud Console](https://console.cloud.google.com/) project with OAuth 2.0 credentials
- A [Pollinations](https://pollinations.ai/) API key

### 1. Clone the Repository

```bash
git clone https://github.com/prithvikings/Thumbify.git
cd Thumbify
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root:

```env
# Google OAuth (NextAuth)
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXTAUTH_SECRET=your_random_secret_string
NEXTAUTH_URL=http://localhost:3000

# AI Image Generation
GEMINI_API_KEY=your_gemini_api_key
HUGGINGFACE_API_TOKEN=your_huggingface_token
POLLINATIONS_API_KEY=your_pollinations_api_key
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

---

## 📸 App Overview

### Landing Page

The marketing homepage features a dark, premium aesthetic with:

- **Navbar** — Sticky navigation with a "Open Studio" CTA linking to the login/dashboard.
- **Hero** — Bold headline ("Viral thumbnails. Zero design skills required.") with primary and secondary action buttons.
- **Logo Ticker** — Scrolling strip of partner/integration logos.
- **Bento Grid** — A 3-step workflow showcase (Paste Script → AI Visualization → Export & Ship) with system capability cards.
- **Testimonials** — Masonry grid of user reviews with star ratings.
- **Pricing** — Two-tier plan layout (Starter $0/mo vs Pro Creator $19/mo) with a monthly/annual toggle.
- **FAQ** — Animated accordion for common questions.
- **CTA** — Full-width call-to-action banner.

### Dashboard

A fully interactive workspace accessible after Google sign-in:

- **Collapsible Sidebar** — Navigate between Home (Studio), Projects, and Settings.
- **Studio View** — The core generation interface:
  - Editable project title
  - Aspect ratio and status badges
  - **Aesthetic Model Selector** — Choose from Cinematic, Anime, 3D Render, or Minimalist
  - Prompt textarea with character counter
  - Generate / Regenerate button with loading animation
  - Canvas with hover actions (Download, Fullscreen, Delete)
- **Projects View** — Grid of all projects with status indicators and search.
- **Settings View** — Account and billing management.

---

## 🔌 API Reference

### `POST /api/generate`

Generates a thumbnail image using the Pollinations AI API.

**Auth:** Requires an active NextAuth session.

**Request Body:**

```json
{
  "prompt": "A dramatic cinematic shot of a tech reviewer...",
  "aspectRatio": "16:9",
  "style": "Cinematic"
}
```

**Response:**

```json
{
  "success": true,
  "imageUrl": "data:image/jpeg;base64,...",
  "model": "flux-realism"
}
```

| Style      | AI Model       |
| ---------- | -------------- |
| Cinematic  | `flux-realism` |
| Anime      | `flux-anime`   |
| 3D Render  | `flux-3d`      |
| Minimalist | `flux-pro`     |

---

## 🔒 Authentication Flow

1. User clicks **"Open Studio"** or **"Continue with Google"** on the login page.
2. NextAuth redirects to Google OAuth consent screen.
3. On success, the user is redirected to `/dashboard`.
4. Middleware (`proxy.ts`) protects `/dashboard`, `/projects`, and `/settings` — unauthenticated users are redirected to `/login`.
5. Logged-in users visiting `/login` are automatically redirected to `/dashboard`.

---

## 📜 Available Scripts

| Command         | Description                   |
| --------------- | ----------------------------- |
| `npm run dev`   | Start the development server  |
| `npm run build` | Build the production bundle   |
| `npm run start` | Start the production server   |
| `npm run lint`  | Run ESLint across the project |

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is private. All rights reserved.

---

<div align="center">

**Built with ❤️ by [prithvikings](https://github.com/prithvikings)**

</div>
