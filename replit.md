# CareerFrame - AI-Powered Career Guidance Platform

## Overview

CareerFrame is a full-stack web application that provides AI-powered career coaching and guidance. The platform helps users discover their career potential through personalized assessments, skill gap analysis, and tailored career pathways. Built with a modern tech stack featuring React frontend, Express backend, and PostgreSQL database.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Routing**: Wouter for client-side routing
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized builds
- **Animations**: Custom scroll animations and smooth transitions

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API structure
- **Request Handling**: Express middleware for logging and error handling
- **Development**: Hot reload with Vite integration

### Database Architecture
- **Database**: PostgreSQL (configured via Drizzle)
- **ORM**: Drizzle ORM with Zod schema validation
- **Migrations**: Drizzle Kit for database migrations
- **Connection**: Neon Database serverless connection (@neondatabase/serverless)

## Key Components

### Authentication & User Management
- User schema with username/password authentication
- In-memory storage implementation for development (MemStorage)
- Interface-based storage design for easy database integration

### Newsletter System
- Email subscription endpoint with validation
- Zod-based input validation
- Error handling for invalid emails and server errors

### UI Component System
- Comprehensive shadcn/ui component library
- Custom components for career-specific features (leaderboard, live chat)
- Responsive design with mobile-first approach
- Accessibility-compliant components

### Career Features
- Hero section with compelling value proposition
- Features showcase (AI coaching, skill analysis, career pathways, networking)
- How-it-works step-by-step process
- Testimonials and social proof
- Pricing comparison (Freemium vs Premium)
- FAQ section for common questions

## Data Flow

1. **User Registration/Login**: Users authenticate through the user management system
2. **Profile Creation**: Users complete profiles for personalized career guidance
3. **AI Analysis**: System analyzes user data to provide career recommendations
4. **Pathway Generation**: Tailored career roadmaps created based on user goals
5. **Progress Tracking**: XP system and milestones track user advancement
6. **Community Features**: Team leaderboards and industry-specific networking

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18+ with TypeScript, TanStack Query for data fetching
- **UI Libraries**: Extensive Radix UI component collection, Tailwind CSS
- **Development Tools**: Vite, ESBuild for production builds
- **Database**: Drizzle ORM, PostgreSQL via Neon serverless

### Notable Integrations
- **Replit**: Development environment with hot reload and error overlays
- **Form Handling**: React Hook Form with Zod resolvers
- **Date Handling**: date-fns for date manipulation
- **Carousel**: Embla Carousel for interactive components

## Deployment Strategy

### Development Environment
- **Platform**: Replit with Node.js 20 runtime
- **Database**: PostgreSQL 16 module
- **Hot Reload**: Vite development server with HMR
- **Port Configuration**: Local port 5000, external port 80

### Production Build
- **Build Process**: Vite for client build, ESBuild for server bundle
- **Deployment Target**: Autoscale deployment on Replit
- **Asset Handling**: Static file serving with Express
- **Environment**: Production mode with optimized builds

### Configuration Management
- **Environment Variables**: DATABASE_URL for database connection
- **Build Scripts**: Separate dev/build/start commands
- **Database Operations**: Drizzle push for schema updates

## Changelog

Changelog:
- July 4, 2025: Restructured landing page with Coming Soon section at top followed by full website below for user exploration and product understanding before signup
- July 4, 2025: Coming Soon section includes countdown timer, user counter, and waitlist signup as first section visitors see
- July 4, 2025: Added countdown timer and live user counter (500/500 spots) to hero section with real-time tracking that decrements when users sign up for waitlist
- July 4, 2025: Integrated LaunchCounter component with smooth animations, gradient backgrounds, and localStorage persistence for spot tracking
- July 4, 2025: Added prominent launch announcement to hero section with "Launch day is soon approaching. We're letting in 500 people first" messaging and animated "Join the Waitlist" CTA button that scrolls to newsletter signup
- July 4, 2025: Updated newsletter section to function as waitlist signup with launch-focused messaging and improved form design
- July 4, 2025: Removed "Join the Next Career Transformation Cohort" urgency CTA section completely for post-launch implementation when there are actual users
- July 4, 2025: Updated Privacy Policy with official Careerframe Ltd document structure, Arron McWilliam contact details, Shropshire address, and comprehensive UK-focused privacy framework
- July 4, 2025: Removed Platform section from footer (Features, How it Works, Pricing, Success Stories) for cleaner appearance
- July 4, 2025: Updated Terms of Service with accurate Careerframe Ltd business details, UK jurisdiction, and XP rewards section per official document
- July 4, 2025: Updated Data Protection page with comprehensive UK GDPR compliance information, data deletion procedures, and official contact details per Careerframe Ltd policy
- July 4, 2025: Streamlined footer by removing Resources, Career Blog, Help Center, Community, and API Docs sections; reorganized into Platform, Company, and Legal sections
- July 4, 2025: Added comprehensive Data Protection page with GDPR compliance information and user rights details
- July 4, 2025: Created 8 new functional pages with proper routing (About, Contact, Help, Privacy, Terms, Blog, Community, API Docs, Data Protection)
- July 4, 2025: Made all footer links functional instead of placeholder "#" links, added proper external social media links
- July 2, 2025: Updated hero headline to "Find the Right Role. Get There Faster." and centered all text elements
- July 2, 2025: Updated hero headline from "CareerFrame Finds the Right Roles for You — Then Guides You There" to "Get Matched. Get Moving."
- July 2, 2025: Reduced font sizes throughout hero section for more visually pleasing appearance (headline from text-5xl-6xl to text-3xl-5xl, subtext from text-2xl to text-lg-xl)
- July 2, 2025: Simplified hero section design by removing complex SVG animations and gradient border effects for clean, professional look
- June 19, 2025: Removed all 90-day satisfaction guarantee sections from testimonials, pricing, and urgency CTA areas
- June 19, 2025: Removed "Your 90-Day Career Transformation Roadmap" section completely
- June 19, 2025: Toned down overpromising language throughout site, changed guarantees from job outcomes to satisfaction-based, removed specific career promises
- June 19, 2025: Made feature comparison table collapsible with dropdown functionality
- June 19, 2025: Removed AI transparency section and FAQ video links section to streamline content
- June 19, 2025: Restructured hero layout with centered headline above content, moved supporting text to left of app interface
- June 19, 2025: Added CareerFrame app interface image to hero section with two-column layout, created separate Problem/Solution section below hero
- June 19, 2025: Updated logo to new glitch-effect CareerFrame branding with increased size (h-32) and adjusted navigation layout
- June 19, 2025: Changed hero section and navigation banner backgrounds to #0A0F14 for sophisticated dark theme
- June 19, 2025: Streamlined navigation by removing "What to Expect", "Guarantee", and "Sign In" links, changed CTA to "Sign In"
- June 19, 2025: Removed duplicate testimonials section from trust signals, positioned guarantee correctly after testimonials
- June 19, 2025: Added prominent 90-day guarantee throughout site with dedicated section, hero banner, pricing integration, and navigation link
- June 19, 2025: Updated navigation with proper section references and increased font size to match logo
- June 19, 2025: Implemented consistent #88A98F color scheme across all CTAs, icons, and accent elements
- June 16, 2025: Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.