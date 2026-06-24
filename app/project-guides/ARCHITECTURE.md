# 🏗️ Architecture Documentation - Mukhbitah

Dokumentasi arsitektur teknis website Mukhbitah.

## 📊 Technology Stack

### Frontend
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4.0
- **Animations**: Framer Motion
- **3D Graphics**: Three.js + React Three Fiber
- **Icons**: Lucide React

### Future Backend (Planned)
- **Database**: Firebase Firestore / Supabase PostgreSQL
- **Authentication**: Firebase Auth / Supabase Auth
- **Storage**: Firebase Storage / Supabase Storage
- **Payment**: Midtrans / Stripe

## 🗂️ Project Structure

```
mukhbitah/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout (Navbar + Footer)
│   ├── page.tsx                 # Homepage
│   ├── globals.css              # Global styles
│   ├── products/
│   │   └── page.tsx            # Product listing
│   ├── cart/
│   │   └── page.tsx            # Shopping cart
│   ├── about/
│   │   └── page.tsx            # About page
│   └── contact/
│       └── page.tsx            # Contact page
│
├── components/                   # Reusable components
│   ├── Navbar.tsx               # Navigation bar
│   ├── Footer.tsx               # Footer
│   ├── HeroSection.tsx          # Hero section
│   ├── CategorySection.tsx      # Category cards
│   ├── FeaturedProducts.tsx     # Featured products grid
│   ├── ProductCard.tsx          # Product card component
│   ├── TestimonialSection.tsx   # Testimonials
│   ├── CTASection.tsx           # Call-to-action
│   └── Product3DViewer.tsx      # 3D product viewer
│
├── public/                       # Static assets
│   └── models/                  # 3D models (future)
│
├── tailwind.config.ts           # Tailwind configuration
├── next.config.ts               # Next.js configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies
```

## 🎨 Design System

### Color Palette

```typescript
// Primary Colors
primary: {
  50: '#faf8f5',   // Lightest
  100: '#f5f1ea',
  200: '#e8dfd0',
  300: '#d9c9b0',
  400: '#c9b08f',
  500: '#b89770',
  600: '#a07d5c',
  700: '#86654b',
  800: '#6d5340',
  900: '#5a4536',  // Darkest
}

// Accent Colors
cream: '#FAF8F5'
beige: '#E8DFD0'
gold: '#D4AF37'
softPink: '#F5E6E8'
```

### Typography

```css
/* Headings */
font-family: 'Playfair Display', serif;

/* Body Text */
font-family: 'Poppins', sans-serif;
```

### Spacing Scale

```
4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px, 128px
```

### Border Radius

```
sm: 8px
md: 12px
lg: 16px
xl: 24px
2xl: 32px
3xl: 48px
```

## 🧩 Component Architecture

### Component Hierarchy

```
App (layout.tsx)
├── Navbar
│   ├── Logo
│   ├── Navigation Links
│   ├── Search
│   ├── User Icon
│   └── Cart Icon
│
├── Page Content
│   ├── Homepage
│   │   ├── HeroSection
│   │   ├── CategorySection
│   │   ├── FeaturedProducts
│   │   │   └── ProductCard (multiple)
│   │   ├── TestimonialSection
│   │   └── CTASection
│   │
│   ├── Products Page
│   │   ├── Search & Filters
│   │   └── ProductCard (grid/list)
│   │
│   └── Cart Page
│       ├── Cart Items
│       └── Order Summary
│
└── Footer
    ├── Brand Info
    ├── Quick Links
    ├── Customer Service
    └── Contact Info
```

### Component Patterns

#### 1. Server Components (Default)
```typescript
// app/page.tsx
export default function HomePage() {
  return <div>...</div>;
}
```

#### 2. Client Components (Interactive)
```typescript
// components/ProductCard.tsx
"use client";

import { useState } from "react";

export default function ProductCard() {
  const [isHovered, setIsHovered] = useState(false);
  // ...
}
```

#### 3. Reusable Components
```typescript
// components/Button.tsx
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

export default function Button({ children, onClick, variant }: ButtonProps) {
  // ...
}
```

## 🔄 Data Flow

### Current (Static)
```
Component → Static Data → Render
```

### Future (Dynamic)
```
Component → API Call → Database → Response → State Update → Render
```

### State Management

Currently using React's built-in state:
- `useState` for local state
- `useEffect` for side effects

Future considerations:
- **Zustand**: Lightweight state management
- **React Query**: Server state management
- **Context API**: Global state (theme, auth)

## 🎭 Animation Strategy

### Framer Motion Patterns

#### 1. Page Transitions
```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
```

#### 2. Hover Effects
```typescript
<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
```

#### 3. Scroll Animations
```typescript
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
>
```

## 🎨 Styling Strategy

### Tailwind CSS Approach

1. **Utility-First**: Use Tailwind utilities directly
2. **Component Classes**: Define in `globals.css` for reusable patterns
3. **Custom Classes**: For complex, repeated patterns

```css
/* globals.css */
@layer components {
  .btn-primary {
    @apply bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg;
  }
  
  .glass-card {
    @apply bg-white/70 backdrop-blur-md border border-white/20;
  }
}
```

## 🔐 Security Considerations

### Current
- No sensitive data stored
- Client-side only
- No authentication

### Future Implementation
- **Authentication**: JWT tokens, secure cookies
- **Authorization**: Role-based access control
- **Data Validation**: Input sanitization
- **HTTPS**: SSL/TLS encryption
- **CORS**: Proper CORS configuration
- **Rate Limiting**: API rate limiting
- **XSS Protection**: Content Security Policy

## ⚡ Performance Optimization

### Current Optimizations
- Next.js automatic code splitting
- Image optimization ready (next/image)
- CSS purging (Tailwind)
- Gzip compression

### Future Optimizations
- Lazy loading images
- Route prefetching
- CDN for static assets
- Database query optimization
- Caching strategy (Redis)
- Service Worker (PWA)

## 📱 Responsive Design

### Breakpoints
```typescript
sm: '640px'   // Mobile landscape
md: '768px'   // Tablet
lg: '1024px'  // Desktop
xl: '1280px'  // Large desktop
2xl: '1536px' // Extra large
```

### Mobile-First Approach
```typescript
// Default: Mobile
<div className="text-sm">

// Tablet and up
<div className="text-sm md:text-base">

// Desktop and up
<div className="text-sm md:text-base lg:text-lg">
```

## 🧪 Testing Strategy (Future)

### Unit Tests
- Component testing with Jest + React Testing Library
- Utility function tests

### Integration Tests
- API integration tests
- User flow tests

### E2E Tests
- Cypress or Playwright
- Critical user journeys

## 📦 Deployment Architecture

### Development
```
Local Machine → npm run dev → localhost:3000
```

### Production (Vercel)
```
GitHub → Vercel → Edge Network → Users
```

### Alternative (VPS)
```
GitHub → CI/CD → VPS → Nginx → PM2 → Node.js
```

## 🔄 CI/CD Pipeline (Future)

```yaml
# .github/workflows/deploy.yml
1. Code Push to GitHub
2. Run Tests
3. Build Application
4. Deploy to Staging
5. Run E2E Tests
6. Deploy to Production
```

## 📊 Monitoring & Analytics (Future)

- **Performance**: Vercel Analytics, Lighthouse
- **Errors**: Sentry
- **User Analytics**: Google Analytics, Mixpanel
- **Session Replay**: LogRocket
- **Uptime**: UptimeRobot

## 🔮 Future Architecture Enhancements

### Microservices Approach
```
Frontend (Next.js)
├── Product Service (API)
├── User Service (API)
├── Order Service (API)
├── Payment Service (API)
└── Notification Service (API)
```

### Serverless Functions
```
Vercel Edge Functions
├── /api/products
├── /api/cart
├── /api/checkout
└── /api/webhooks
```

## 📚 References

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [Three.js](https://threejs.org)

---

**Architecture Version**: 1.0.0  
**Last Updated**: 2026-04-30
