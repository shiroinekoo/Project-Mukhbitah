# Software Design Documentation (SDD)
## Mukhbitah - Hijab E-Commerce Platform

**Version:** 1.0  
**Date:** April 30, 2026  
**Prepared by:** Development Team  
**Project:** Mukhbitah E-Commerce Website

---

## Table of Contents

1. [Introduction](#1-introduction)
2. [System Architecture](#2-system-architecture)
3. [Data Design](#3-data-design)
4. [Component Design](#4-component-design)
5. [Interface Design](#5-interface-design)
6. [Security Design](#6-security-design)
7. [Performance Design](#7-performance-design)

---

## 1. Introduction

### 1.1 Purpose
This Software Design Documentation (SDD) describes the technical design of the Mukhbitah e-commerce platform. It provides detailed information about the system architecture, component design, data structures, and interfaces.

### 1.2 Scope
This document covers the design of:
- Frontend architecture (Next.js + React)
- Backend services (Firebase/Supabase)
- Database schema
- Component structure
- API design
- Security mechanisms
- Performance optimizations

### 1.3 Design Goals
- **Modularity**: Component-based architecture for reusability
- **Scalability**: Horizontal scaling capability
- **Performance**: Fast loading and responsive UI
- **Security**: Secure data handling and authentication
- **Maintainability**: Clean code with comprehensive documentation
- **Accessibility**: WCAG 2.1 Level AA compliance

---

## 2. System Architecture

### 2.1 High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        Client Layer                          │
│  ┌──────────────────────────────────────────────────────┐  │
│  │         Web Browser (Chrome, Firefox, Safari)         │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                            ↓ HTTPS
┌─────────────────────────────────────────────────────────────┐
│                    Presentation Layer                        │
│  ┌──────────────────────────────────────────────────────┐  │
│  │              Next.js 15 (App Router)                  │  │
│  │  ┌────────────┐  ┌────────────┐  ┌────────────┐    │  │
│  │  │   Pages    │  │ Components │  │   Styles   │    │  │
│  │  └────────────┘  └────────────┘  └────────────┘    │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                            ↓ API Calls
┌─────────────────────────────────────────────────────────────┐
│                     Application Layer                        │
│  ┌──────────────────────────────────────────────────────┐  │
│  │              Next.js API Routes / Edge Functions      │  │
│  │  ┌────────────┐  ┌────────────┐  ┌────────────┐    │  │
│  │  │   Auth     │  │  Products  │  │   Orders   │    │  │
│  │  └────────────┘  └────────────┘  └────────────┘    │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                            ↓ SDK/API
┌─────────────────────────────────────────────────────────────┐
│                       Data Layer                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │         Firebase/Supabase Services                    │  │
│  │  ┌────────────┐  ┌────────────┐  ┌────────────┐    │  │
│  │  │  Firestore │  │    Auth    │  │  Storage   │    │  │
│  │  └────────────┘  └────────────┘  └────────────┘    │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                            ↓ Integration
┌─────────────────────────────────────────────────────────────┐
│                   External Services                          │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
│  │ Midtrans │  │  Stripe  │  │ SendGrid │  │ Analytics│  │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘  │
└─────────────────────────────────────────────────────────────┘
```

### 2.2 Technology Stack

#### 2.2.1 Frontend
- **Framework**: Next.js 15.2.4 (React 19)
- **Language**: TypeScript 5.0
- **Styling**: Tailwind CSS 4.0
- **Animations**: Framer Motion 11.15.0
- **3D Graphics**: Three.js + React Three Fiber
- **Icons**: Lucide React 0.469.0
- **State Management**: React Context API + Zustand (future)
- **Form Handling**: React Hook Form
- **Data Fetching**: React Query (future)

#### 2.2.2 Backend
- **Runtime**: Node.js (via Next.js)
- **API**: Next.js API Routes / Edge Functions
- **Database**: Firebase Firestore or Supabase PostgreSQL
- **Authentication**: Firebase Auth or Supabase Auth
- **Storage**: Firebase Storage or Supabase Storage
- **Email**: SendGrid or Mailgun
- **Payment**: Midtrans, Stripe

#### 2.2.3 DevOps
- **Hosting**: Vercel
- **Version Control**: Git + GitHub
- **CI/CD**: Vercel automatic deployments
- **Monitoring**: Vercel Analytics, Sentry
- **Testing**: Jest, React Testing Library, Cypress

### 2.3 Architectural Patterns

#### 2.3.1 Component-Based Architecture
- Reusable UI components
- Separation of concerns
- Props-based data flow
- Composition over inheritance

#### 2.3.2 Server-Side Rendering (SSR)
- Next.js App Router with React Server Components
- Static Site Generation (SSG) for product pages
- Incremental Static Regeneration (ISR)
- Client-side hydration

#### 2.3.3 API-First Design
- RESTful API endpoints
- JSON data format
- Stateless communication
- Token-based authentication

---

## 3. Data Design

### 3.1 Database Schema

#### 3.1.1 Users Collection
```typescript
interface User {
  id: string;                    // UUID
  email: string;                 // Unique
  passwordHash: string;          // Bcrypt hashed
  name: string;
  phone: string;
  profilePicture?: string;       // URL
  role: 'customer' | 'admin';
  emailVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}
```

#### 3.1.2 Products Collection
```typescript
interface Product {
  id: string;                    // UUID
  name: string;
  slug: string;                  // URL-friendly, unique
  description: string;
  category: 'pashmina' | 'segi-empat' | 'instan';
  material: string;
  price: number;                 // In IDR
  discountPrice?: number;        // In IDR
  colors: Color[];
  images: string[];              // URLs
  model3D?: string;              // URL to 3D model
  stock: number;
  sold: number;
  rating: number;                // Average rating
  reviewCount: number;
  featured: boolean;
  active: boolean;
  sizeGuide?: string;
  careInstructions?: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Color {
  name: string;
  hex: string;
  stock: number;
}
```

#### 3.1.3 Orders Collection
```typescript
interface Order {
  id: string;                    // UUID
  orderNumber: string;           // Unique, e.g., "MKH-20260430-001"
  userId: string;                // Foreign key
  items: OrderItem[];
  shippingAddress: Address;
  shippingMethod: ShippingMethod;
  paymentMethod: string;
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded';
  orderStatus: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  subtotal: number;
  shippingCost: number;
  discount: number;
  total: number;
  notes?: string;
  trackingNumber?: string;
  createdAt: Date;
  updatedAt: Date;
}

interface OrderItem {
  productId: string;
  productName: string;
  productImage: string;
  color: string;
  quantity: number;
  price: number;
  subtotal: number;
}

interface Address {
  fullName: string;
  phone: string;
  address: string;
  province: string;
  city: string;
  district: string;
  postalCode: string;
  notes?: string;
}

interface ShippingMethod {
  name: string;
  cost: number;
  estimatedDays: string;
}
```

#### 3.1.4 Reviews Collection
```typescript
interface Review {
  id: string;                    // UUID
  productId: string;             // Foreign key
  userId: string;                // Foreign key
  orderId: string;               // Foreign key (verified purchase)
  rating: number;                // 1-5
  comment: string;
  images?: string[];             // URLs
  helpful: number;               // Count of helpful votes
  verified: boolean;             // Verified purchase
  status: 'pending' | 'approved' | 'rejected';
  createdAt: Date;
  updatedAt: Date;
}
```

#### 3.1.5 Cart Collection
```typescript
interface Cart {
  id: string;                    // UUID
  userId: string;                // Foreign key
  items: CartItem[];
  createdAt: Date;
  updatedAt: Date;
}

interface CartItem {
  productId: string;
  productName: string;
  productImage: string;
  color: string;
  price: number;
  quantity: number;
}
```

#### 3.1.6 Wishlist Collection
```typescript
interface Wishlist {
  id: string;                    // UUID
  userId: string;                // Foreign key
  productIds: string[];          // Array of product IDs
  createdAt: Date;
  updatedAt: Date;
}
```

#### 3.1.7 Newsletter Collection
```typescript
interface Newsletter {
  id: string;                    // UUID
  email: string;                 // Unique
  subscribed: boolean;
  createdAt: Date;
  updatedAt: Date;
}
```

### 3.2 Data Relationships

```
Users (1) ──────< (N) Orders
Users (1) ──────< (N) Reviews
Users (1) ──────< (1) Cart
Users (1) ──────< (1) Wishlist

Products (1) ──────< (N) OrderItems
Products (1) ──────< (N) Reviews
Products (1) ──────< (N) CartItems
```

### 3.3 Data Access Patterns

#### 3.3.1 Read Operations
- **Get all products**: Filter by category, sort by price/popularity
- **Get product details**: By ID or slug
- **Get user orders**: By user ID, sorted by date
- **Get product reviews**: By product ID, paginated

#### 3.3.2 Write Operations
- **Create order**: Transaction with inventory update
- **Update order status**: With notification trigger
- **Add to cart**: Upsert cart item
- **Submit review**: After order verification

### 3.4 Data Validation

#### 3.4.1 Input Validation
- Email format validation
- Phone number format (Indonesian)
- Price range validation
- Quantity limits (1-10 per item)
- Text length limits

#### 3.4.2 Business Rules
- Stock availability check before order
- Minimum order amount for free shipping
- Review only for verified purchases
- Discount code validation

---

## 4. Component Design

### 4.1 Component Hierarchy

```
App (layout.tsx)
├── Navbar
│   ├── Logo
│   ├── NavLinks
│   ├── SearchBar
│   ├── UserMenu
│   └── CartIcon
│
├── Page Content
│   ├── HomePage
│   │   ├── HeroSection
│   │   ├── CategorySection
│   │   │   └── CategoryCard (x3)
│   │   ├── FeaturedProducts
│   │   │   └── ProductCard (x8)
│   │   ├── TestimonialSection
│   │   │   └── TestimonialCard (x3)
│   │   └── CTASection
│   │
│   ├── ProductsPage
│   │   ├── FilterSidebar
│   │   │   ├── CategoryFilter
│   │   │   ├── PriceFilter
│   │   │   ├── ColorFilter
│   │   │   └── MaterialFilter
│   │   ├── ProductGrid
│   │   │   └── ProductCard (multiple)
│   │   └── Pagination
│   │
│   ├── ProductDetailPage
│   │   ├── ProductGallery
│   │   │   ├── ImageViewer
│   │   │   └── Product3DViewer
│   │   ├── ProductInfo
│   │   │   ├── ProductTitle
│   │   │   ├── ProductPrice
│   │   │   ├── ColorSelector
│   │   │   ├── QuantitySelector
│   │   │   └── AddToCartButton
│   │   ├── ProductTabs
│   │   │   ├── DescriptionTab
│   │   │   ├── SizeGuideTab
│   │   │   └── CareTab
│   │   ├── ReviewSection
│   │   │   └── ReviewCard (multiple)
│   │   └── RelatedProducts
│   │       └── ProductCard (x4)
│   │
│   ├── CartPage
│   │   ├── CartItems
│   │   │   └── CartItem (multiple)
│   │   ├── OrderSummary
│   │   └── CheckoutButton
│   │
│   ├── CheckoutPage
│   │   ├── CheckoutSteps
│   │   ├── ShippingForm
│   │   ├── ShippingMethodSelector
│   │   ├── PaymentMethodSelector
│   │   └── OrderReview
│   │
│   └── ProfilePage
│       ├── ProfileSidebar
│       ├── ProfileInfo
│       ├── OrderHistory
│       │   └── OrderCard (multiple)
│       ├── AddressBook
│       │   └── AddressCard (multiple)
│       └── Wishlist
│           └── ProductCard (multiple)
│
└── Footer
    ├── BrandInfo
    ├── QuickLinks
    ├── CustomerService
    └── ContactInfo
```

### 4.2 Component Specifications

#### 4.2.1 ProductCard Component
```typescript
interface ProductCardProps {
  product: {
    id: string;
    name: string;
    slug: string;
    image: string;
    price: number;
    discountPrice?: number;
    rating: number;
    reviewCount: number;
    colors: Color[];
  };
  variant?: 'grid' | 'list';
  showQuickView?: boolean;
}

// Features:
// - Hover animation (scale, shadow)
// - Wishlist toggle button
// - Quick view button
// - Color swatches
// - Discount badge
// - Rating display
```

#### 4.2.2 Product3DViewer Component
```typescript
interface Product3DViewerProps {
  modelUrl: string;
  color: string;
  onColorChange?: (color: string) => void;
}

// Features:
// - Three.js canvas
// - Orbit controls (rotate, zoom)
// - Color switching
// - Lighting controls
// - Loading state
// - Fallback to 2D image
```

#### 4.2.3 CartItem Component
```typescript
interface CartItemProps {
  item: CartItem;
  onQuantityChange: (quantity: number) => void;
  onRemove: () => void;
}

// Features:
// - Product image and details
// - Quantity controls (+/-)
// - Remove button
// - Subtotal calculation
// - Stock availability indicator
```

### 4.3 State Management

#### 4.3.1 Local State (useState)
- Component-specific UI state
- Form inputs
- Toggle states
- Loading states

#### 4.3.2 Global State (Context API)
```typescript
// AuthContext
interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
}

// CartContext
interface CartContextType {
  cart: Cart | null;
  itemCount: number;
  total: number;
  addItem: (item: CartItem) => Promise<void>;
  updateQuantity: (itemId: string, quantity: number) => Promise<void>;
  removeItem: (itemId: string) => Promise<void>;
  clearCart: () => Promise<void>;
}

// WishlistContext
interface WishlistContextType {
  wishlist: string[];
  addToWishlist: (productId: string) => Promise<void>;
  removeFromWishlist: (productId: string) => Promise<void>;
  isInWishlist: (productId: string) => boolean;
}
```

#### 4.3.3 Server State (React Query - Future)
- Product data
- Order data
- User profile data
- Caching and invalidation

---

## 5. Interface Design

### 5.1 API Endpoints

#### 5.1.1 Authentication
```
POST   /api/auth/register        - Register new user
POST   /api/auth/login           - Login user
POST   /api/auth/logout          - Logout user
POST   /api/auth/forgot-password - Request password reset
POST   /api/auth/reset-password  - Reset password
GET    /api/auth/verify-email    - Verify email
```

#### 5.1.2 Products
```
GET    /api/products             - Get all products (with filters)
GET    /api/products/:id         - Get product by ID
GET    /api/products/slug/:slug  - Get product by slug
POST   /api/products             - Create product (admin)
PUT    /api/products/:id         - Update product (admin)
DELETE /api/products/:id         - Delete product (admin)
```

#### 5.1.3 Cart
```
GET    /api/cart                 - Get user cart
POST   /api/cart/items           - Add item to cart
PUT    /api/cart/items/:id       - Update cart item
DELETE /api/cart/items/:id       - Remove cart item
DELETE /api/cart                 - Clear cart
```

#### 5.1.4 Orders
```
GET    /api/orders               - Get user orders
GET    /api/orders/:id           - Get order details
POST   /api/orders               - Create order
PUT    /api/orders/:id/status    - Update order status (admin)
POST   /api/orders/:id/cancel    - Cancel order
```

#### 5.1.5 Reviews
```
GET    /api/reviews              - Get reviews (by product)
POST   /api/reviews              - Submit review
PUT    /api/reviews/:id          - Update review
DELETE /api/reviews/:id          - Delete review
POST   /api/reviews/:id/helpful  - Mark review as helpful
```

#### 5.1.6 Payment
```
POST   /api/payment/create       - Create payment
POST   /api/payment/webhook      - Payment webhook
GET    /api/payment/status/:id   - Check payment status
```

### 5.2 API Request/Response Format

#### 5.2.1 Success Response
```json
{
  "success": true,
  "data": {
    // Response data
  },
  "message": "Operation successful"
}
```

#### 5.2.2 Error Response
```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Error description",
    "details": {}
  }
}
```

#### 5.2.3 Pagination Response
```json
{
  "success": true,
  "data": [],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 100,
    "totalPages": 5
  }
}
```

### 5.3 External API Integration

#### 5.3.1 Midtrans Payment Gateway
```typescript
// Create transaction
POST https://api.midtrans.com/v2/charge
{
  "payment_type": "bank_transfer",
  "transaction_details": {
    "order_id": "ORDER-123",
    "gross_amount": 150000
  },
  "customer_details": {
    "email": "customer@email.com",
    "first_name": "John",
    "last_name": "Doe",
    "phone": "08123456789"
  }
}

// Webhook notification
POST /api/payment/webhook
{
  "transaction_status": "settlement",
  "order_id": "ORDER-123",
  "gross_amount": "150000.00"
}
```

#### 5.3.2 Email Service (SendGrid)
```typescript
// Send email
POST https://api.sendgrid.com/v3/mail/send
{
  "personalizations": [{
    "to": [{"email": "customer@email.com"}],
    "subject": "Order Confirmation"
  }],
  "from": {"email": "noreply@mukhbitah.com"},
  "content": [{
    "type": "text/html",
    "value": "<html>...</html>"
  }]
}
```

---

## 6. Security Design

### 6.1 Authentication & Authorization

#### 6.1.1 JWT Token Structure
```typescript
interface JWTPayload {
  userId: string;
  email: string;
  role: 'customer' | 'admin';
  iat: number;  // Issued at
  exp: number;  // Expiration
}
```

#### 6.1.2 Token Storage
- Access token: HTTP-only cookie (15 minutes expiry)
- Refresh token: HTTP-only cookie (30 days expiry)
- CSRF token: Local storage

#### 6.1.3 Role-Based Access Control (RBAC)
```typescript
const permissions = {
  customer: [
    'products:read',
    'cart:manage',
    'orders:create',
    'orders:read:own',
    'reviews:create',
    'profile:manage:own'
  ],
  admin: [
    'products:*',
    'orders:*',
    'users:read',
    'reviews:moderate',
    'analytics:read'
  ]
};
```

### 6.2 Data Protection

#### 6.2.1 Encryption
- **In Transit**: TLS 1.3 for all communications
- **At Rest**: Database encryption (Firebase/Supabase)
- **Passwords**: Bcrypt with salt (cost factor 12)
- **Sensitive Data**: AES-256 encryption

#### 6.2.2 Input Validation
```typescript
// Example validation schema (Zod)
const productSchema = z.object({
  name: z.string().min(3).max(100),
  price: z.number().positive().max(10000000),
  category: z.enum(['pashmina', 'segi-empat', 'instan']),
  stock: z.number().int().nonnegative()
});
```

#### 6.2.3 Output Sanitization
- HTML escaping for user-generated content
- XSS prevention
- SQL injection prevention (parameterized queries)

### 6.3 Security Measures

#### 6.3.1 CSRF Protection
- CSRF tokens for state-changing operations
- SameSite cookie attribute
- Origin header validation

#### 6.3.2 Rate Limiting
```typescript
const rateLimits = {
  login: '5 requests per 15 minutes',
  register: '3 requests per hour',
  api: '100 requests per minute',
  payment: '10 requests per hour'
};
```

#### 6.3.3 Security Headers
```typescript
const securityHeaders = {
  'Content-Security-Policy': "default-src 'self'",
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'geolocation=(), microphone=()'
};
```

---

## 7. Performance Design

### 7.1 Frontend Optimization

#### 7.1.1 Code Splitting
- Route-based code splitting (automatic with Next.js)
- Component lazy loading
- Dynamic imports for heavy components

```typescript
// Example: Lazy load 3D viewer
const Product3DViewer = dynamic(
  () => import('@/components/Product3DViewer'),
  { ssr: false, loading: () => <LoadingSpinner /> }
);
```

#### 7.1.2 Image Optimization
- Next.js Image component with automatic optimization
- WebP format with fallback
- Responsive images with srcset
- Lazy loading below the fold
- Blur placeholder

```typescript
<Image
  src="/product.jpg"
  alt="Product"
  width={800}
  height={800}
  placeholder="blur"
  loading="lazy"
/>
```

#### 7.1.3 CSS Optimization
- Tailwind CSS purging (automatic)
- Critical CSS inlining
- CSS minification
- Unused CSS removal

#### 7.1.4 JavaScript Optimization
- Minification and compression
- Tree shaking
- Dead code elimination
- Bundle size monitoring

### 7.2 Backend Optimization

#### 7.2.1 Database Optimization
- Indexing on frequently queried fields
- Query optimization
- Connection pooling
- Caching frequently accessed data

```typescript
// Example: Firestore indexes
const indexes = [
  { collection: 'products', fields: ['category', 'price'] },
  { collection: 'orders', fields: ['userId', 'createdAt'] },
  { collection: 'reviews', fields: ['productId', 'rating'] }
];
```

#### 7.2.2 Caching Strategy
- **Browser Cache**: Static assets (1 year)
- **CDN Cache**: Images and 3D models
- **API Cache**: Product listings (5 minutes)
- **Database Cache**: Redis for hot data (future)

#### 7.2.3 API Optimization
- Response compression (gzip/brotli)
- Pagination for large datasets
- Field selection (return only requested fields)
- Batch requests

### 7.3 Performance Metrics

#### 7.3.1 Target Metrics
- **First Contentful Paint (FCP)**: < 1.5s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Time to Interactive (TTI)**: < 3.5s
- **Cumulative Layout Shift (CLS)**: < 0.1
- **First Input Delay (FID)**: < 100ms
- **Lighthouse Score**: > 90

#### 7.3.2 Monitoring
- Vercel Analytics for Core Web Vitals
- Real User Monitoring (RUM)
- Synthetic monitoring
- Error tracking with Sentry

---

## Appendix A: Design Patterns

### A.1 Component Patterns
- **Container/Presentational**: Separate logic from UI
- **Compound Components**: Related components working together
- **Render Props**: Share code between components
- **Higher-Order Components**: Enhance component functionality

### A.2 State Management Patterns
- **Lifting State Up**: Share state between components
- **Context Provider**: Global state management
- **Custom Hooks**: Reusable stateful logic

### A.3 API Patterns
- **Repository Pattern**: Abstract data access
- **Service Layer**: Business logic separation
- **Middleware Pattern**: Request/response processing

---

## Appendix B: Diagrams

### B.1 Component Diagram
[To be added: Detailed component interaction diagram]

### B.2 Sequence Diagrams
[To be added: User flows and API interactions]

### B.3 Deployment Diagram
[To be added: Infrastructure and deployment architecture]

---

**Document Control**

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-04-30 | Development Team | Initial version |

---

**Approval**

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Technical Lead | | | |
| Software Architect | | | |
| Project Manager | | | |
