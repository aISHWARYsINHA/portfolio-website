# Portfolio Website

## Overview

This is a modern, single-page portfolio website built to showcase a developer's work, skills, and professional background. The application features a clean, contemporary design with sections for hero introduction, about information, project showcase, and contact functionality. The site follows modern web development best practices with a focus on user experience, responsive design, and visual appeal inspired by industry-leading design systems.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server, providing fast hot module replacement
- Wouter for lightweight client-side routing (single-page application pattern)
- TanStack Query (React Query) for server state management and API interactions

**UI Component System**
- Shadcn/ui component library (New York style variant) providing pre-built, accessible components
- Radix UI primitives as the foundation for interactive elements (dialogs, forms, dropdowns, etc.)
- Tailwind CSS for utility-first styling with a custom design system
- Class Variance Authority (CVA) for managing component variants and conditional styling

**Design System**
- Custom color palette based on HSL values with support for light/dark modes via CSS variables
- Typography system using Inter font family from Google Fonts
- Spacing primitives following a consistent scale (4, 6, 8, 12, 16, 20, 24 units)
- Component styling includes elevation effects (hover-elevate, active-elevate-2 classes)
- Purple gradient theme used prominently in hero section

**Layout Strategy**
- Mobile-first responsive design with breakpoints (md, lg prefixes)
- Grid-based layouts for projects section (1-2-3 column responsive grid)
- Flexbox for navigation, forms, and component-level layouts
- Full-viewport hero section with centered content
- Smooth scroll behavior for navigation between sections

### Backend Architecture

**Server Framework**
- Express.js server handling API routes and static file serving
- Development mode uses Vite middleware for hot reloading and SSR capabilities
- Production mode serves pre-built static assets from dist/public directory

**API Design**
- RESTful endpoints under `/api` prefix
- POST `/api/contact` - Accepts contact form submissions with validation
- GET `/api/contact` - Retrieves all contact submissions (admin/testing endpoint)
- Request/response use JSON format with proper status codes (201 for creation, 400 for validation errors, 500 for server errors)

**Development vs Production**
- Separate entry points (index-dev.ts vs index-prod.ts)
- Dev mode integrates Vite server with Express for seamless development experience
- Prod mode requires build step to generate static assets and bundled server code
- ESBuild used for server-side bundling in production

### Data Storage

**Current Implementation**
- In-memory storage using Map data structure (MemStorage class)
- Implements IStorage interface for future database migration flexibility
- Contact submissions stored with auto-generated UUIDs and timestamps

**Database Schema (Configured but Not Active)**
- Drizzle ORM configured for PostgreSQL with schema defined
- Contact submissions table with fields: id, name, email, subject, message, submittedAt
- Database connection expects DATABASE_URL environment variable
- Migration files configured to output to `./migrations` directory
- Neon serverless PostgreSQL adapter included in dependencies

**Data Models**
- TypeScript types generated from Drizzle schema using `$inferSelect`
- Zod schemas for runtime validation extending Drizzle insert schemas
- Email validation, minimum length requirements for name and message fields

### Form Handling & Validation

**Form Management**
- React Hook Form for form state management and validation
- Hookform resolvers integrate Zod schemas for validation
- Field-level error messages displayed inline
- Controlled components pattern for all form inputs

**Validation Rules**
- Email must be valid email format
- Name minimum 2 characters
- Message minimum 10 characters
- Subject field is optional

### External Dependencies

**Third-Party UI Libraries**
- @radix-ui/* - Complete suite of accessible, unstyled UI primitives (accordion, alert-dialog, avatar, checkbox, dialog, dropdown-menu, hover-card, label, navigation-menu, popover, progress, radio-group, scroll-area, select, separator, slider, switch, tabs, toast, toggle, tooltip)
- embla-carousel-react - Carousel/slider functionality
- lucide-react - Icon library providing consistent iconography throughout the application
- cmdk - Command menu component
- vaul - Drawer component primitive
- date-fns - Date manipulation and formatting utilities
- input-otp - One-time password input component
- react-day-picker - Calendar/date picker component
- recharts - Charting library for data visualization

**Styling & Design Tools**
- tailwindcss - Utility-first CSS framework
- autoprefixer - CSS vendor prefix automation
- tailwind-merge - Utility for merging Tailwind classes
- clsx - Conditional className utility
- class-variance-authority - Component variant management

**Database & ORM**
- drizzle-orm - TypeScript ORM for SQL databases
- drizzle-kit - Schema management and migrations tool
- drizzle-zod - Integration between Drizzle and Zod for validation
- @neondatabase/serverless - Neon serverless PostgreSQL driver
- connect-pg-simple - PostgreSQL session store (included but not actively used)

**Development Tools**
- @replit/vite-plugin-runtime-error-modal - Development error overlay
- @replit/vite-plugin-cartographer - Replit integration for navigation
- @replit/vite-plugin-dev-banner - Development environment banner
- tsx - TypeScript execution for development server
- esbuild - Fast JavaScript bundler for production builds

**Assets Management**
- Images stored in `attached_assets/generated_images/` directory
- Vite configured with alias `@assets` pointing to attached_assets folder
- Images include professional headshot and project showcase images (e-commerce, task management, weather app, analytics dashboard, recipe platform, fitness tracking)

**Font Loading**
- Google Fonts CDN for Inter font family (weights: 400, 500, 600, 700, 800, 900)
- Preconnect links for performance optimization