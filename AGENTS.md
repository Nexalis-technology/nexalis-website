# AGENTS.md - Nexalis Next.js Development Guidelines

This file contains development guidelines for agentic coding agents working in the Nexalis Next.js codebase.

## Build & Development Commands

```bash
# Development
npm run dev          # Start development server (localhost:3000)

# Build & Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
```

**Note**: No test framework is currently configured. Add testing setup before implementing tests.

## Project Architecture

- **Framework**: Next.js 16.1.1 with App Router
- **Language**: TypeScript (strict mode enabled)
- **Styling**: Tailwind CSS v4 with custom theme
- **Animation**: Framer Motion 12.x
- **State Management**: React Context API
- **AI Integration**: Google Gemini AI (@google/genai)

## Code Style Guidelines

### TypeScript Configuration
- **Strict mode** enabled - all types must be properly defined
- **Path aliasing**: `@/*` maps to root directory
- **Target**: ES2017 with modern module resolution

### Import Organization
```typescript
// 1. React and core libraries
import React, { useState, useEffect, useRef } from 'react';

// 2. Third-party libraries
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ArrowRight, Code2, BrainCircuit } from 'lucide-react';

// 3. Local imports (relative paths)
import { useCursor } from '../contexts/CursorContext';
import { ChatMessage } from '../types';
```

### Component Structure
```typescript
'use client'; // Required for client-side interactivity

const ComponentName: React.FC = () => {
  // Hooks
  const { setCursorType } = useCursor();
  const [state, setState] = useState<Type>();
  
  // Event handlers
  const handleEvent = () => { /* ... */ };
  
  // Effects
  useEffect(() => { /* ... */ }, []);
  
  // Render
  return (
    <motion.div>
      {/* JSX content */}
    </motion.div>
  );
};

export default ComponentName;
```

## Naming Conventions

### Components
- **PascalCase** for component names
- **Descriptive names** that reflect functionality
- **Default exports** for components

### Files & Directories
- **PascalCase** for component files (`ComponentName.tsx`)
- **camelCase** for utility files (`helperFunctions.ts`)
- **kebab-case** for directories if needed

### Variables & Functions
- **camelCase** for variables and functions
- **Descriptive names** that indicate purpose
- **Boolean prefixes**: `is`, `has`, `should` (`isLoading`, `hasError`)

### Types & Interfaces
- **PascalCase** for type names
- **Interface prefix**: `I` avoided (use descriptive names)
- **Type exports**: Centralized in `types.ts`

## Styling Guidelines

### Tailwind CSS v4 Custom Theme
```css
/* Custom colors available */
--color-lumina-dark: #030712;    /* Primary dark background */
--color-lumina-light: #f9fafb;   /* Light text/accent */
--color-lumina-accent: #6366f1;  /* Primary accent color */
--color-lumina-accent-glow: #818cf8; /* Accent glow effect */
```

### Styling Patterns
- **Dark theme** as default approach
- **Responsive design** with Tailwind breakpoints
- **Custom animations** via Framer Motion
- **Smooth scrolling** behavior
- **Custom scrollbar** styling

### Font Usage
- **Font-sans**: Outfit (Google Fonts)
- **Font-display**: Space Grotesk (headings)

## Error Handling Patterns

### Async Operations
```typescript
try {
  const response = await apiCall();
  setResult(response.data);
} catch (error) {
  console.error("Operation failed:", error);
  setError(true);
  // User-friendly error message with branded language
  setErrorMessage("Signal interrupted. Nexalis systems are recalibrating.");
} finally {
  setIsLoading(false);
}
```

### Error States
- **Track error state** in component state
- **User-friendly messages** with Nexalis branding
- **Graceful fallbacks** for API failures
- **Console logging** for debugging

## State Management

### Context API Usage
```typescript
// Custom hook pattern with error boundary
export const useCursor = () => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error('useCursor must be used within a CursorProvider');
  }
  return context;
};
```

### State Patterns
- **Local state** for component-specific data
- **Context API** for global state (cursor, theme)
- **Async state** with loading/error tracking

## Performance Guidelines

### Next.js Optimizations
- **'use client' directive** only when necessary
- **Image optimization** for external domains
- **Static generation** where applicable
- **App Router** benefits for performance

### Animation Performance
- **Framer Motion** for smooth animations
- **Spring animations** for natural movement
- **Viewport-based animations** to reduce renders

## Accessibility Requirements

### SEO & Meta
- **Comprehensive metadata** in layout.tsx
- **Open Graph** and Twitter Card support
- **Semantic HTML5** structure
- **Alt text** for images

### Interaction
- **Custom cursor hidden** on touch devices
- **Keyboard navigation** support
- **Focus states** for interactive elements
- **ARIA labels** where needed

## Development Workflow

### Environment Variables
```env
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key_here
```

### Git Workflow
- **Feature branches** for new development
- **Clean commits** with descriptive messages
- **Lint before commit**: `npm run lint`

## Code Quality Standards

### ESLint Configuration
- **Next.js recommended** configuration
- **TypeScript support** enabled
- **Core Web Vitals** checks included
- **Custom ignores** for build artifacts

### Type Safety
- **Strict TypeScript** - no implicit any
- **Interface definitions** for all data structures
- **Generic types** where appropriate
- **Type exports** centralized in `types.ts`

## Testing Guidelines

**Note**: Testing framework not yet configured. When adding tests:
1. Choose appropriate framework (Jest, Vitest, etc.)
2. Configure for Next.js App Router
3. Add component testing patterns
4. Include integration tests for AI features

## AI Integration Guidelines

### Google Gemini AI
- **API key** via environment variable
- **Error handling** for API failures
- **Loading states** during AI responses
- **Branded error messages** for failures

### Chat Interface Patterns
- **Message history** in component state
- **Role-based messages** ('user' | 'model')
- **Error state tracking** for failed requests
- **Streaming responses** if implemented

## Component Library Patterns

### Reusable Components
- **Props interfaces** for all components
- **Default props** where appropriate
- **Children prop** for flexible composition
- **Motion components** for animations

### Custom Hooks
- **use prefix** for custom hooks
- **Error boundaries** in context hooks
- **Type safety** for hook returns
- **Documentation** for complex hooks

## File Structure Best Practices

```
components/          # Reusable UI components
├── ComponentName.tsx
├── SubComponent.tsx

contexts/           # React contexts
├── ContextName.tsx

app/               # Next.js App Router
├── layout.tsx     # Root layouts
├── page.tsx       # Route components
├── globals.css    # Global styles

types.ts           # Centralized type definitions
```

## Security Considerations

- **API keys** in environment variables only
- **No sensitive data** in client-side code
- **Input validation** for user inputs
- **HTTPS required** for production

## Brand Guidelines

### Nexalis Voice & Tone
- **Futuristic, professional language**
- **System-themed metaphors** ("signal", "core", "systems")
- **Technical elegance** in messaging
- **Confident, precise communication**

### Color Usage
- **Lumina-dark** for primary backgrounds
- **Lumina-accent** for CTAs and highlights
- **High contrast** for accessibility
- **Consistent theming** throughout

---

**Last Updated**: 2026-01-21
**Framework Version**: Next.js 16.1.1
**Agent Compatibility**: Designed for agentic coding workflows