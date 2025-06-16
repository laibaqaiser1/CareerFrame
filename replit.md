# CareerFrame - AI-Powered Career Development Platform

## Overview

CareerFrame is a comprehensive career development platform that combines AI-powered coaching, skill gap analysis, and personalized career pathways to help users transform their professional lives. The application provides both free and premium tiers, offering features like CV generation, networking opportunities, and gamified progress tracking through XP points and leaderboards.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and production builds
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Query (TanStack Query) for server state management
- **UI Components**: Radix UI primitives with custom styling

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript throughout the stack
- **API Design**: RESTful endpoints with structured error handling
- **Development**: Hot module replacement with Vite middleware integration

### Database Architecture
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured but flexible - can use other databases)
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Connection**: Neon Database serverless driver for cloud deployment

## Key Components

### User Management
- User authentication system with username/password
- User profile management with skill tracking
- In-memory storage implementation with interface for easy database switching

### Career Development Features
- AI-powered career coaching and recommendations
- Skill gap analysis and improvement suggestions
- Personalized career pathway generation
- CV and cover letter AI generation
- Role exploration and matching

### Social Features
- Team-based leaderboards for gamification
- Industry-specific networking groups
- XP points and rewards system
- Community engagement features

### Newsletter System
- Email subscription management
- Backend API endpoint for newsletter signups
- Frontend form with validation and user feedback

## Data Flow

1. **User Registration/Login**: Users create accounts and complete profiles
2. **Profile Analysis**: AI analyzes user skills, goals, and aspirations
3. **Pathway Generation**: System creates personalized career roadmaps
4. **Progress Tracking**: Users complete milestones and earn XP points
5. **Social Interaction**: Users join teams and compete on leaderboards
6. **Continuous Coaching**: AI provides ongoing guidance and recommendations

## External Dependencies

### UI Components
- **Radix UI**: Comprehensive set of accessible, unstyled components
- **Lucide React**: Icon library for consistent iconography
- **Tailwind CSS**: Utility-first CSS framework
- **Class Variance Authority**: For component variant management

### Database & Backend
- **Drizzle ORM**: Type-safe database operations
- **Neon Database**: Serverless PostgreSQL provider
- **Zod**: Runtime type validation and schema validation
- **Connect PG Simple**: PostgreSQL session store

### Development Tools
- **ESLint & TypeScript**: Code quality and type safety
- **Vite**: Fast build tool and development server
- **PostCSS**: CSS processing and optimization

## Deployment Strategy

### Replit Environment
- **Modules**: Configured for Node.js 20, web development, and PostgreSQL 16
- **Development**: Hot reload with `npm run dev`
- **Build Process**: Vite builds client, esbuild bundles server
- **Production**: `npm run start` serves built application

### Build Configuration
- **Client Build**: Vite compiles React app to `dist/public`
- **Server Build**: esbuild bundles Express server to `dist`
- **Asset Management**: Static assets served from build directory
- **Environment**: Supports both development and production modes

### Database Setup
- **Environment Variables**: `DATABASE_URL` required for database connection
- **Schema Management**: `npm run db:push` applies schema changes
- **Migrations**: Stored in `./migrations` directory

## Changelog

```
Changelog:
- June 16, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```