# CareerFrame Landing Page

## Overview

CareerFrame is an AI-powered career development platform that provides personalized coaching, skill gap analysis, and tailored career pathways. This is a modern full-stack web application built with React/TypeScript for the frontend, Express.js for the backend, and designed as a marketing landing page to showcase the platform's features and drive user signups.

## System Architecture

The application follows a modern full-stack architecture with clear separation between client and server components:

- **Frontend**: React 18 with TypeScript, using Vite as the build tool
- **Backend**: Express.js server with TypeScript
- **Styling**: Tailwind CSS with custom color scheme
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Database**: Configured for PostgreSQL with Drizzle ORM (schema ready but minimal implementation)
- **Deployment**: Optimized for Replit with autoscale deployment

## Key Components

### Frontend Architecture
- **Single-page application** with wouter for client-side routing
- **Component-based architecture** with reusable UI components
- **Responsive design** with mobile-first approach
- **Custom animations** using Framer Motion and scroll-based reveal effects
- **Modern React patterns** including hooks and context providers

### Backend Architecture
- **RESTful API** structure with Express.js
- **Middleware-based** request handling with logging and error handling
- **Newsletter subscription endpoint** as the primary API functionality
- **Development/production environment** handling with Vite integration

### UI/UX Design System
- **Custom color palette**: Navy blue primary, fresh green accent, soft grey text
- **Professional branding** with consistent logo usage
- **Accessibility-focused** components from Radix UI
- **Responsive breakpoints** for mobile, tablet, and desktop

## Data Flow

1. **Static Content Delivery**: Homepage serves as a marketing landing page with sections for hero, features, how-it-works, testimonials, pricing, FAQ, and newsletter
2. **Newsletter Subscription**: Primary user interaction captures email addresses via API endpoint
3. **User Registration Flow**: Prepared for future implementation with user authentication schema
4. **Asset Management**: Images stored in attached_assets directory and imported through Vite aliases

## External Dependencies

### Core Framework Dependencies
- React 18 ecosystem (React DOM, React Query for future API calls)
- Express.js with TypeScript support
- Vite for development and build tooling

### UI/Styling Dependencies
- Tailwind CSS for styling with custom configuration
- Radix UI primitives for accessible components
- shadcn/ui component library for consistent design
- Framer Motion for animations
- Lucide React for icons

### Database & Validation
- Drizzle ORM with PostgreSQL adapter
- Zod for schema validation
- Neon Database serverless driver

### Development Tools
- TypeScript for type safety
- ESBuild for production bundling
- PostCSS for CSS processing

## Deployment Strategy

The application is configured for deployment on Replit with the following setup:

- **Development**: `npm run dev` starts both Vite dev server and Express backend
- **Build**: `npm run build` creates optimized production bundles
- **Production**: `npm run start` serves the built application
- **Port Configuration**: Server runs on port 5000, mapped to external port 80
- **Environment**: Uses PostgreSQL module for database functionality

### Build Process
1. Vite builds the React frontend to `dist/public`
2. ESBuild bundles the Express server to `dist/index.js`
3. Static assets are served from the built frontend
4. API routes are handled by the Express server

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- June 16, 2025. Initial setup