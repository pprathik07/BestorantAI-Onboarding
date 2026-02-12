# BestorantAI Onboarding - Demo Pages

BestorantAI Onboarding is a set of high-performance, A/B testing demo landing pages built with Astro, React, and TailwindCSS. The project showcases two distinct variations designed to test different user engagement strategies: pain-point amplification and dashboard preview trust-building.

## Overview

This project implements a modern, responsive web application for onboarding new restaurant clients to the BestorantAI platform. It features a robust theme system (Dark/Light mode), interactive React components, and optimized performance metrics.

### Key Features

- **A/B Testing Framework**: Two distinct landing page variations to test user conversion hypotheses.
    - **Variation 1 (Pain Point Amplification)**: Focuses on customer pain points with a sticky sidebar form.
    - **Variation 2 (Dashboard Preview)**: Highlights product features with an interactive dashboard mock-up and trust signals.
- **Theming System**: Comprehensive Dark and Light mode support with a toggle switch, persisting user preference via local storage and preventing Flash of Unstyled Content (FOUC).
- **Responsive Design**: Fully responsive layouts optimized for mobile, tablet, and desktop viewports.
- **Interactive Components**:
    - Multi-step forms with validation.
    - Animated dashboard previews and activity feeds.
    - Interactive feature pills and testimonials.
- **Performance Optimized**: Built with Astro for static site generation, ensuring fast load times and optimal SEO.
- **Type Safety**: Developed with TypeScript for robust and maintainable code.

## Tech Stack

- **Framework**: Astro (v5)
- **UI Library**: React (v19)
- **Styling**: TailwindCSS (v4)
- **Animations**: Framer Motion & CSS Animations
- **Language**: TypeScript

## Project Structure

```
/
├── public/             # Static assets (favicons, images)
├── src/
│   ├── components/     # Reusable UI components (React & Astro)
│   │   ├── DashboardPreview.tsx
│   │   ├── DemoForm.tsx
│   │   ├── FeaturePills.tsx
│   │   ├── Footer.astro
│   │   ├── LiveActivityFeed.tsx
│   │   ├── MultiStepForm.tsx
│   │   ├── Navbar.astro
│   │   ├── Testimonial.astro
│   │   ├── ThemeToggle.tsx
│   │   └── TrustBadges.astro
│   ├── layouts/        # Shared page layouts
│   │   └── DemoLayout.astro
│   ├── pages/          # Application routes
│   │   ├── index.astro        # Hub page
│   │   ├── demo-start-1.astro # Variation 1
│   │   └── demo-start-2.astro # Variation 2
│   └── styles/         # Global styles and theme definitions
│       └── global.css
├── package.json        # Project dependencies and scripts
├── tsconfig.json       # TypeScript configuration
└── astro.config.mjs    # Astro configuration
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd BestorantAI-Onboarding
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

To start the local development server:

```bash
npm run dev
```

The application will be available at `http://localhost:4321`.

### Building for Production

To build the project for production:

```bash
npm run build
```

This will generate a static build in the `dist/` directory.

### Previewing the Build

To preview the production build locally:

```bash
npm run preview
```

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the project for production.
- `npm run preview`: Previews the production build.
- `npm run astro`: Runs the Astro CLI.

## License

This project is proprietary and confidential. Unauthorized copying or distribution is strictly prohibited.
