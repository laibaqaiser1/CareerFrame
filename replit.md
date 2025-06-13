# CareerFrame Landing Page

## Overview

CareerFrame is an AI-powered career development platform that provides personalized coaching, skill gap analysis, and tailored career pathways. This repository contains a React-based landing page built with TypeScript, featuring a modern design system and interactive components to showcase the platform's capabilities.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with custom design system and Shadcn/ui components
- **Router**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management
- **Animation**: Framer Motion for smooth animations and scroll-based reveals

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **API**: RESTful endpoints for newsletter subscription
- **Session Management**: Express sessions with PostgreSQL storage
- **Development**: Hot reload with Vite middleware integration

## Key Components

### Design System
- **UI Library**: Shadcn/ui components with Radix UI primitives
- **Color Scheme**: Navy blue primary (#1E3A8A), fresh green accent (#10B981), soft grey (#6B7280)
- **Typography**: System fonts with careful spacing and hierarchy
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts

### Page Sections
- **Hero Section**: Eye-catching introduction with animated elements and call-to-action buttons
- **Features Section**: Four main platform features with visual mockups and interactive cards
- **How It Works**: Three-step process explanation with gradient background
- **Testimonials**: Social proof section (referenced but not implemented in visible files)
- **Pricing Section**: Subscription tiers with feature comparisons
- **FAQ Section**: Collapsible accordion with common questions
- **Newsletter**: Email subscription with backend integration
- **Footer**: Site navigation and social links

### Interactive Elements
- **Navigation**: Fixed header with smooth scrolling to sections
- **Scroll Animations**: Intersection Observer-based reveal animations
- **Live Chat**: Floating chat widget (placeholder implementation)
- **Form Handling**: Newsletter subscription with validation and feedback
- **Toast Notifications**: User feedback system for form submissions

## Data Flow

### Client-Side Flow
1. User visits landing page
2. React hydrates application with routing and query client
3. Scroll animations trigger based on intersection observer
4. Form submissions send data to Express API endpoints
5. Toast notifications provide user feedback

### Server-Side Flow
1. Express server serves static assets in production
2. Vite middleware handles development hot reload
3. API routes process newsletter subscriptions
4. PostgreSQL session store manages user sessions (configured but not actively used)
5. Response data flows back to client with appropriate status codes

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React, React DOM, React Query for state management
- **UI Components**: Radix UI primitives, class-variance-authority for component variants
- **Styling**: Tailwind CSS, clsx for conditional classes, tailwind-merge for class optimization
- **Database**: Drizzle ORM with PostgreSQL adapter, though database features are minimal
- **Development**: Vite, TypeScript, ESBuild for production builds

### Asset Management
- **Images**: Stored in attached_assets directory with proper imports
- **Icons**: Lucide React for consistent iconography
- **Fonts**: System fonts with fallbacks for performance

## Deployment Strategy

### Production Build
- **Frontend**: Vite builds optimized React bundle to dist/public
- **Backend**: ESBuild bundles server code to dist/index.js
- **Assets**: Static files served from Express in production mode

### Environment Configuration
- **Development**: Vite dev server with Express API proxy
- **Production**: Single Express server serving both static files and API
- **Database**: PostgreSQL connection configured via DATABASE_URL environment variable
- **Session Storage**: PostgreSQL-backed sessions with connect-pg-simple

### Deployment Targets
- **Platform**: Configured for Replit deployment with autoscale
- **Port Configuration**: Internal port 5000 mapped to external port 80
- **Build Process**: npm run build creates production assets
- **Start Command**: npm run start launches production server

## Changelog

- June 13, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.