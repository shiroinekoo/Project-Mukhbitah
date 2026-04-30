# 5. Desain Antarmuka Pengguna (UI/UX Design)
## Mukhbitah - Hijab Gallery Platform

---

## 5.1 Prinsip Desain

| Prinsip | Deskripsi |
|---------|-----------|
| **Konsistensi** | Elemen UI yang seragam di seluruh halaman |
| **Aksesibilitas** | Kepatuhan WCAG 2.1 Level AA |
| **Responsivitas** | Tampilan optimal di semua ukuran layar |
| **Kecepatan** | Interaksi yang terasa cepat dan responsif |
| **Estetika** | Tampilan elegan yang mencerminkan brand Mukhbitah |

---

## 5.2 Alur Navigasi Aplikasi (Navigation Flow)

```
Landing Page (/)
├── Navbar
│   ├── Logo → /
│   ├── Produk → /products
│   ├── Tentang → /about
│   ├── Kontak → /contact
│   ├── Keranjang → /cart
│   └── Login/Profil → /auth atau /profile
│
├── Hero Section → CTA ke /products
├── Category Section → Filter produk per kategori
├── Featured Products → Detail produk
└── Footer
    ├── Quick Links
    └── Social Media

/products
├── Filter Sidebar (kategori, harga, warna, material)
├── Product Grid
│   └── ProductCard → /products/[slug]
└── Pagination

/products/[slug]
├── Product Gallery (gambar + 3D viewer)
├── Product Info (harga, warna, kuantitas)
├── Add to Cart → /cart
├── Product Tabs (deskripsi, panduan ukuran, perawatan)
├── Review Section
└── Related Products

/cart
├── Cart Items
├── Order Summary
└── Checkout → /checkout

/checkout
├── Step 1: Alamat Pengiriman
├── Step 2: Metode Pengiriman
├── Step 3: Metode Pembayaran
└── Step 4: Konfirmasi Pesanan → /orders/[id]

/profile
├── Informasi Profil
├── Riwayat Pesanan → /orders/[id]
├── Buku Alamat
└── Wishlist → /products/[slug]
```

---

## 5.3 Wireframe & Layout

### 5.3.1 Halaman Utama (Home Page)

```
┌─────────────────────────────────────────────┐
│  NAVBAR: Logo | Nav Links | Cart | User      │
├─────────────────────────────────────────────┤
│                                             │
│           HERO SECTION                      │
│   [Gambar/Video] + Headline + CTA Button    │
│                                             │
├─────────────────────────────────────────────┤
│         CATEGORY SECTION                    │
│  [Pashmina]  [Segi Empat]  [Instan]         │
├─────────────────────────────────────────────┤
│         FEATURED PRODUCTS                   │
│  [Card] [Card] [Card] [Card]                │
│  [Card] [Card] [Card] [Card]                │
├─────────────────────────────────────────────┤
│         TESTIMONIAL SECTION                 │
│  [Review] [Review] [Review]                 │
├─────────────────────────────────────────────┤
│         CTA SECTION                         │
│   Headline + Subscribe / Shop Now           │
├─────────────────────────────────────────────┤
│  FOOTER: Brand | Links | Contact | Social   │
└─────────────────────────────────────────────┘
```

### 5.3.2 Halaman Produk (Products Page)

```
┌─────────────────────────────────────────────┐
│  NAVBAR                                     │
├──────────────┬──────────────────────────────┤
│              │                              │
│   FILTER     │      PRODUCT GRID            │
│   SIDEBAR    │  [Card][Card][Card]          │
│              │  [Card][Card][Card]          │
│  Kategori    │  [Card][Card][Card]          │
│  Harga       │                              │
│  Warna       │      PAGINATION              │
│  Material    │  < 1  2  3  4  5 >          │
│              │                              │
└──────────────┴──────────────────────────────┘
```

### 5.3.3 Halaman Detail Produk (Product Detail Page)

```
┌─────────────────────────────────────────────┐
│  NAVBAR                                     │
├──────────────────┬──────────────────────────┤
│                  │                          │
│  PRODUCT GALLERY │  PRODUCT INFO            │
│  [Gambar Utama]  │  Nama Produk             │
│  [3D Viewer]     │  Harga / Diskon          │
│  [Thumbnail x4]  │  Rating ★★★★☆           │
│                  │  Pilih Warna: ● ● ●      │
│                  │  Kuantitas: [-] 1 [+]    │
│                  │  [Tambah ke Keranjang]   │
│                  │  [Wishlist]              │
├──────────────────┴──────────────────────────┤
│  TABS: Deskripsi | Panduan Ukuran | Perawatan│
├─────────────────────────────────────────────┤
│  ULASAN PELANGGAN                           │
│  [Review Card] [Review Card]                │
├─────────────────────────────────────────────┤
│  PRODUK TERKAIT                             │
│  [Card] [Card] [Card] [Card]                │
└─────────────────────────────────────────────┘
```

---

## 5.4 Sistem Desain (Design System)

### 5.4.1 Palet Warna

| Token | Warna | Penggunaan |
|-------|-------|------------|
| Primary | `#8B5E3C` (coklat hangat) | CTA, aksen utama |
| Secondary | `#F5E6D3` (krem) | Background section |
| Accent | `#D4A574` (emas muda) | Highlight, badge |
| Text Primary | `#1A1A1A` | Teks utama |
| Text Secondary | `#6B7280` | Teks sekunder |
| Background | `#FFFFFF` | Background halaman |
| Border | `#E5E7EB` | Garis pembatas |
| Error | `#EF4444` | Pesan error |
| Success | `#10B981` | Pesan sukses |

### 5.4.2 Tipografi

| Elemen | Font | Ukuran | Weight |
|--------|------|--------|--------|
| Heading 1 | Inter | 48px | 700 |
| Heading 2 | Inter | 36px | 600 |
| Heading 3 | Inter | 24px | 600 |
| Body | Inter | 16px | 400 |
| Small | Inter | 14px | 400 |
| Caption | Inter | 12px | 400 |

### 5.4.3 Breakpoints Responsif

| Breakpoint | Lebar | Deskripsi |
|------------|-------|-----------|
| `sm` | 640px | Mobile landscape |
| `md` | 768px | Tablet |
| `lg` | 1024px | Desktop kecil |
| `xl` | 1280px | Desktop |
| `2xl` | 1536px | Desktop besar |

---

## 5.5 Animasi & Interaksi

| Elemen | Animasi | Durasi |
|--------|---------|--------|
| ProductCard hover | Scale 1.02 + shadow | 200ms |
| Page transition | Fade in | 300ms |
| Modal open/close | Slide up + fade | 250ms |
| Button click | Scale 0.97 | 100ms |
| Navbar scroll | Background blur | 200ms |
| 3D Viewer | Orbit rotation | Continuous |

---

**Document Control**

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-04-02 | Development Team | Initial version |
