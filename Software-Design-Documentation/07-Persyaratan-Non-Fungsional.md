# 7. Persyaratan Non-Fungsional (Non-Functional Requirements)
## Mukhbitah - Hijab Gallery Platform

---

## 7.1 Performa (Performance)

### 7.1.1 Target Metrik Core Web Vitals

| Metrik | Target | Deskripsi |
|--------|--------|-----------|
| First Contentful Paint (FCP) | < 1.5 detik | Waktu hingga konten pertama tampil |
| Largest Contentful Paint (LCP) | < 2.5 detik | Waktu hingga elemen terbesar tampil |
| Time to Interactive (TTI) | < 3.5 detik | Waktu hingga halaman dapat diinteraksi |
| Cumulative Layout Shift (CLS) | < 0.1 | Stabilitas visual layout |
| First Input Delay (FID) | < 100ms | Responsivitas terhadap input pertama |
| Lighthouse Score | > 90 | Skor keseluruhan performa |

### 7.1.2 Optimasi Frontend

**Code Splitting:**
- Route-based code splitting (otomatis dengan Next.js)
- Lazy loading komponen
- Dynamic imports untuk komponen berat

```typescript
// Contoh: Lazy load 3D viewer
const Product3DViewer = dynamic(
  () => import('@/components/Product3DViewer'),
  { ssr: false, loading: () => <LoadingSpinner /> }
);
```

**Optimasi Gambar:**
- Komponen Next.js Image dengan optimasi otomatis
- Format WebP dengan fallback
- Responsive images dengan srcset
- Lazy loading untuk konten di bawah fold
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

**Optimasi CSS:**
- Tailwind CSS purging (otomatis)
- Critical CSS inlining
- CSS minification
- Penghapusan CSS yang tidak digunakan

**Optimasi JavaScript:**
- Minifikasi dan kompresi
- Tree shaking
- Dead code elimination
- Pemantauan ukuran bundle

### 7.1.3 Optimasi Backend

**Strategi Caching:**

| Layer | Durasi | Deskripsi |
|-------|--------|-----------|
| Browser Cache | 1 tahun | Aset statis |
| CDN Cache | Variabel | Gambar dan model 3D |
| API Cache | 5 menit | Daftar produk |
| Database Cache (Redis) | Future | Data yang sering diakses |

**Optimasi API:**
- Kompresi response (gzip/brotli)
- Paginasi untuk dataset besar
- Field selection (hanya kembalikan field yang diminta)
- Batch requests

---

## 7.2 Keamanan (Security)

### 7.2.1 Autentikasi & Otorisasi

**Struktur JWT Token:**
```typescript
interface JWTPayload {
  userId: string;
  email: string;
  role: 'customer' | 'admin';
  iat: number;  // Issued at
  exp: number;  // Expiration
}
```

**Penyimpanan Token:**
- Access token: HTTP-only cookie (kedaluwarsa 15 menit)
- Refresh token: HTTP-only cookie (kedaluwarsa 30 hari)
- CSRF token: Local storage

**Role-Based Access Control (RBAC):**
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

### 7.2.2 Perlindungan Data

**Enkripsi:**
- In Transit: TLS 1.3 untuk semua komunikasi
- At Rest: Enkripsi database (Firebase/Supabase)
- Password: Bcrypt dengan salt (cost factor 12)
- Data sensitif: Enkripsi AES-256

**Validasi Input:**
```typescript
// Contoh schema validasi (Zod)
const productSchema = z.object({
  name: z.string().min(3).max(100),
  price: z.number().positive().max(10000000),
  category: z.enum(['pashmina', 'segi-empat', 'instan']),
  stock: z.number().int().nonnegative()
});
```

**Sanitasi Output:**
- HTML escaping untuk konten yang dibuat pengguna
- Pencegahan XSS
- Pencegahan SQL injection (parameterized queries)

### 7.2.3 Langkah-Langkah Keamanan Tambahan

**Perlindungan CSRF:**
- CSRF token untuk operasi yang mengubah state
- Atribut SameSite pada cookie
- Validasi header Origin

**Rate Limiting:**

| Endpoint | Batas |
|----------|-------|
| Login | 5 request per 15 menit |
| Register | 3 request per jam |
| API umum | 100 request per menit |
| Payment | 10 request per jam |

---

## 7.3 Skalabilitas (Scalability)

| Aspek | Strategi |
|-------|----------|
| Horizontal scaling | Vercel serverless functions |
| Database scaling | Firebase/Supabase auto-scaling |
| CDN | Vercel Edge Network |
| Static assets | CDN distribution |
| API | Edge functions untuk latensi rendah |

---

## 7.4 Ketahanan Sistem (Reliability)

| Aspek | Target |
|-------|--------|
| Uptime | 99.9% |
| Error rate | < 0.1% |
| Recovery time | < 5 menit |
| Data backup | Harian otomatis |

---

## 7.5 Pemantauan (Monitoring)

| Tool | Fungsi |
|------|--------|
| Vercel Analytics | Core Web Vitals & traffic |
| Real User Monitoring (RUM) | Performa dari sisi pengguna nyata |
| Synthetic Monitoring | Pemantauan terjadwal |
| Sentry | Error tracking & alerting |

---

**Document Control**

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-04-02 | Development Team | Initial version |
