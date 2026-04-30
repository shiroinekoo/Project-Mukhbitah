# 6. Lingkungan Pengujian (Test Environment)
## Mukhbitah - Platform Gallery Hijab

**Version:** 1.0  
**Date:** April 2, 2026  
**Prepared by:** QA Team

---

## 6.1 Gambaran Lingkungan

| Lingkungan | Tujuan | Fase |
|------------|--------|------|
| **Development** | Unit & integration testing | Phase 1–2 |
| **Staging** | System testing & UAT | Phase 3–4 |
| **Production** | Smoke testing & monitoring | Phase 5 |

---

## 6.2 Lingkungan Development

**Tujuan:** Unit testing dan integration testing

| Komponen | Spesifikasi |
|----------|-------------|
| **Mesin** | Local development machines (4 unit) |
| **OS** | Windows 11 / macOS Ventura |
| **RAM** | Minimal 16 GB |
| **Storage** | SSD 256 GB+ |
| **Node.js** | v18.0+ |
| **npm** | v9.0+ |
| **Database** | Firebase Emulator / Supabase local |
| **External Services** | Mock dengan MSW (Mock Service Worker) |
| **Browser** | Chrome terbaru (untuk development) |

**Konfigurasi:**
```env
NODE_ENV=test
NEXT_PUBLIC_APP_URL=http://localhost:3000
DATABASE_URL=firebase-emulator / supabase-local
PAYMENT_MODE=mock
EMAIL_MODE=mock
```

---

## 6.3 Lingkungan Staging

**Tujuan:** System testing, performance testing, security testing, UAT

**URL:** `https://mukhbitah-staging.vercel.app`

| Komponen | Spesifikasi |
|----------|-------------|
| **Hosting** | Vercel (staging deployment) |
| **Database** | Firebase/Supabase project terpisah (test) |
| **Payment Gateway** | Midtrans sandbox mode |
| **Email Service** | SendGrid sandbox mode |
| **Storage** | Firebase Storage test bucket |
| **CDN** | Vercel Edge Network |

**Konfigurasi:**
```env
NODE_ENV=staging
NEXT_PUBLIC_APP_URL=https://mukhbitah-staging.vercel.app
MIDTRANS_IS_PRODUCTION=false
SENDGRID_SANDBOX=true
```

---

## 6.4 Lingkungan Production

**Tujuan:** Smoke testing setelah deployment, monitoring

**URL:** `https://www.mukhbitah.com`

| Komponen | Spesifikasi |
|----------|-------------|
| **Hosting** | Vercel (production) |
| **Database** | Firebase/Supabase production |
| **Payment Gateway** | Midtrans production |
| **Email Service** | SendGrid production |
| **Monitoring** | Vercel Analytics + Sentry |

> ⚠️ **Hanya smoke test yang dijalankan di production. Tidak ada data uji yang dibuat.**

---

## 6.5 Spesifikasi Browser

### Browser yang Diuji

| Browser | Versi | Platform | Prioritas |
|---------|-------|----------|-----------|
| Google Chrome | Terbaru (2 versi terakhir) | Windows, macOS, Android | 🔴 Tinggi |
| Mozilla Firefox | Terbaru (2 versi terakhir) | Windows, macOS | 🔴 Tinggi |
| Safari | Terbaru (2 versi terakhir) | macOS, iOS | 🔴 Tinggi |
| Microsoft Edge | Terbaru (2 versi terakhir) | Windows | 🟡 Sedang |
| Samsung Internet | v13+ | Android | 🟢 Rendah |

### Matriks Kompatibilitas Browser

| Fitur | Chrome | Firefox | Safari | Edge |
|-------|--------|---------|--------|------|
| Layout & CSS | ✅ | ✅ | ✅ | ✅ |
| JavaScript | ✅ | ✅ | ✅ | ✅ |
| 3D Viewer (WebGL) | ✅ | ✅ | ✅ | ✅ |
| Payment Pop-up | ✅ | ✅ | ✅ | ✅ |
| Animasi (Framer Motion) | ✅ | ✅ | ✅ | ✅ |
| File Upload | ✅ | ✅ | ✅ | ✅ |

---

## 6.6 Spesifikasi Perangkat

### Desktop / Laptop

| Resolusi | Kategori | Pengujian |
|----------|----------|-----------|
| 1920×1080 | Full HD Desktop | ✅ Wajib |
| 1440×900 | Laptop | ✅ Wajib |
| 1280×800 | Laptop kecil | ✅ Wajib |
| 2560×1440 | QHD Desktop | 🟡 Opsional |

### Tablet

| Perangkat | Resolusi | OS | Pengujian |
|-----------|----------|----|-----------|
| iPad (9th gen) | 2160×1620 | iPadOS 16 | ✅ Wajib |
| Samsung Galaxy Tab | 1600×2560 | Android 12 | ✅ Wajib |

### Mobile

| Perangkat | Resolusi | OS | Pengujian |
|-----------|----------|----|-----------|
| iPhone 14 | 390×844 | iOS 16 | ✅ Wajib |
| iPhone SE | 375×667 | iOS 15 | ✅ Wajib |
| Samsung Galaxy S22 | 360×780 | Android 12 | ✅ Wajib |
| Xiaomi Redmi Note | 393×851 | Android 11 | 🟡 Opsional |

---

## 6.7 Spesifikasi Sistem Operasi

| OS | Versi | Browser | Prioritas |
|----|-------|---------|-----------|
| Windows | 11 | Chrome, Firefox, Edge | 🔴 Tinggi |
| Windows | 10 | Chrome, Firefox, Edge | 🟡 Sedang |
| macOS | Ventura (13) | Chrome, Firefox, Safari | 🔴 Tinggi |
| iOS | 16+ | Safari, Chrome | 🔴 Tinggi |
| Android | 12+ | Chrome | 🔴 Tinggi |
| Android | 10–11 | Chrome | 🟡 Sedang |

---

## 6.8 Koneksi Jaringan untuk Testing

| Tipe Koneksi | Kecepatan | Tujuan |
|--------------|-----------|--------|
| WiFi cepat | 100 Mbps | Baseline performance |
| 4G LTE | ~20 Mbps | Target pengguna mobile |
| 3G | ~1 Mbps | Minimum requirement |
| Throttled (Chrome DevTools) | Simulasi | Testing kondisi jaringan buruk |

---

## 6.9 Data Uji

### Akun Pengguna

| Tipe | Jumlah | Keterangan |
|------|--------|------------|
| Customer accounts | 10 | Berbagai profil dan riwayat |
| Admin accounts | 3 | Berbagai level akses |
| Akun dengan riwayat pesanan | 5 | Berbagai status pesanan |
| Akun dengan wishlist | 2 | Produk tersimpan |

### Produk

| Kategori | Jumlah | Keterangan |
|----------|--------|------------|
| Pashmina | 20 | Berbagai harga dan warna |
| Segi Empat | 15 | Berbagai material |
| Instan | 15 | Termasuk yang habis stok |
| Produk dengan 3D model | 10 | Untuk testing 3D viewer |
| Produk dengan diskon | 10 | Untuk testing kalkulasi diskon |

### Pesanan

| Status | Jumlah |
|--------|--------|
| Selesai | 20 |
| Menunggu Pembayaran | 5 |
| Diproses | 5 |
| Dibatalkan | 3 |

---

**Document Control**

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-04-02 | QA Team | Initial version |
