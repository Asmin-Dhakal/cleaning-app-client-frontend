# Cleaning Client

Client-facing web application for the cleaning service platform.

## Features

- Client registration (pending admin approval)
- Authentication with JWT
- Dashboard for managing bookings
- Multi-language support (i18n)

## Tech Stack

- React 19
- TypeScript
- Vite
- TailwindCSS v4
- React Query (TanStack Query)
- Zustand (State Management)
- React Hook Form + Zod
- i18next

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── app/              # App setup, layout, providers, routes
├── features/         # Feature-based modules (auth, dashboard, etc.)
├── shared/           # Shared components, utils, API client
├── i18n/             # Internationalization
└── styles/           # Global styles and themes
```
