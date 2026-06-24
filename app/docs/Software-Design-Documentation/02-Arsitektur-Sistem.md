# 2. Arsitektur Sistem (System Architecture)
## Mukhbitah - Hijab Gallery Platform

---

## 2.1 Diagram Arsitektur Tingkat Tinggi (High-Level Architecture)

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

---

## 2.2 Technology Stack

### 2.2.1 Frontend

| Teknologi | Versi | Fungsi |
|-----------|-------|--------|
| Next.js | 15.2.4 | Framework utama (App Router) |
| React | 19 | UI library |
| TypeScript | 5.0 | Bahasa pemrograman |
| Tailwind CSS | 4.0 | Styling |
| Framer Motion | 11.15.0 | Animasi |
| Three.js + React Three Fiber | Latest | 3D Graphics |
| Lucide React | 0.469.0 | Icon library |
| React Context API | Built-in | State management |
| Zustand | Future | State management (planned) |
| React Hook Form | Latest | Form handling |
| React Query | Future | Data fetching (planned) |

### 2.2.2 Backend

| Teknologi | Fungsi |
|-----------|--------|
| Node.js (via Next.js) | Runtime |
| Next.js API Routes / Edge Functions | API layer |
| Firebase Firestore / Supabase PostgreSQL | Database |
| Firebase Auth / Supabase Auth | Autentikasi |
| Firebase Storage / Supabase Storage | File storage |
| SendGrid / Mailgun | Email service |
| Midtrans, Stripe | Payment gateway |

### 2.2.3 DevOps

| Teknologi | Fungsi |
|-----------|--------|
| Vercel | Hosting & deployment |
| Git + GitHub | Version control |
| Vercel CI/CD | Automatic deployments |
| Vercel Analytics, Sentry | Monitoring |
| Jest, React Testing Library, Cypress | Testing |

---

## 2.3 Pola Arsitektur (Architectural Patterns)

### 2.3.1 Component-Based Architecture
- Komponen UI yang dapat digunakan ulang (reusable)
- Pemisahan tanggung jawab (separation of concerns)
- Aliran data berbasis props
- Komposisi lebih diutamakan daripada pewarisan (composition over inheritance)

### 2.3.2 Server-Side Rendering (SSR)
- Next.js App Router dengan React Server Components
- Static Site Generation (SSG) untuk halaman produk
- Incremental Static Regeneration (ISR)
- Client-side hydration

### 2.3.3 API-First Design
- RESTful API endpoints
- Format data JSON
- Komunikasi stateless
- Autentikasi berbasis token

---

## 2.4 Hubungan Antar Komponen Sistem

```
Browser
  └── Next.js App (SSR/SSG)
        ├── React Components
        │     ├── Pages (App Router)
        │     └── UI Components
        ├── API Routes
        │     ├── Auth Handler
        │     ├── Product Handler
        │     ├── Order Handler
        │     └── Payment Handler
        └── External Integrations
              ├── Firebase/Supabase (DB + Auth + Storage)
              ├── Midtrans/Stripe (Payment)
              └── SendGrid (Email)
```

---

**Document Control**

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-04-02 | Development Team | Initial version |
