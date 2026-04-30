# 3. Strategi Pengujian (Test Strategy)
## Mukhbitah - Platform Gallery Hijab

**Version:** 1.0  
**Date:** April 2, 2026  
**Prepared by:** QA Team

---

## 3.1 Level Pengujian

### 3.1.1 Unit Testing

| Atribut | Detail |
|---------|--------|
| **Tujuan** | Menguji komponen dan fungsi secara terisolasi |
| **Pendekatan** | Test-Driven Development (TDD), mock external dependencies |
| **Target Coverage** | 80% code coverage |
| **Penanggung Jawab** | Development Team |
| **Tools** | Jest, React Testing Library, @testing-library/jest-dom |
| **Waktu** | Berkelanjutan selama development |

**Cakupan:**
- Komponen React (ProductCard, Navbar, HeroSection, dll.)
- Fungsi utilitas (kalkulasi harga, validasi, format)
- Custom hooks (useCart, useAuth, useWishlist)
- API handlers

---

### 3.1.2 Integration Testing

| Atribut | Detail |
|---------|--------|
| **Tujuan** | Menguji interaksi antar komponen dan layanan |
| **Pendekatan** | Mock external services dengan MSW |
| **Penanggung Jawab** | Development Team + QA Team |
| **Tools** | Jest, MSW (Mock Service Worker), Supertest |
| **Waktu** | Setelah unit testing selesai |

**Cakupan:**
- Integrasi komponen dengan Context API
- Integrasi API dengan database
- Integrasi payment gateway (sandbox)
- Integrasi email service (test mode)

---

### 3.1.3 System Testing (E2E)

| Atribut | Detail |
|---------|--------|
| **Tujuan** | Menguji alur pengguna lengkap dari awal hingga akhir |
| **Pendekatan** | Otomasi browser nyata di staging environment |
| **Penanggung Jawab** | QA Team |
| **Tools** | Cypress / Playwright, Postman |
| **Waktu** | Setelah integration testing selesai |

**Critical User Flows:**
1. Browse produk → Tambah ke keranjang → Checkout → Pembayaran
2. Registrasi → Verifikasi email → Login
3. Cari produk → Filter → Lihat detail → Tambah ke wishlist
4. Admin login → Tambah produk → Update inventori
5. Pengguna → Tulis ulasan → Admin moderasi

---

### 3.1.4 User Acceptance Testing (UAT)

| Atribut | Detail |
|---------|--------|
| **Tujuan** | Validasi sistem memenuhi kebutuhan bisnis |
| **Pendekatan** | Pengguna nyata menguji alur kritis |
| **Penanggung Jawab** | Business Team + Pengguna Terpilih |
| **Tools** | Manual testing, formulir feedback |
| **Waktu** | Sebelum deployment ke production |

---

## 3.2 Tipe Pengujian

### 3.2.1 Functional Testing

| Tipe | Deskripsi |
|------|-----------|
| **Black Box Testing** | Uji fungsionalitas tanpa melihat kode internal, fokus pada input/output |
| **Regression Testing** | Uji ulang setelah perubahan kode untuk memastikan tidak ada bug baru |
| **Smoke Testing** | Sanity check cepat pada critical paths setelah setiap deployment |
| **Exploratory Testing** | Pengujian bebas untuk menemukan bug yang tidak terduga |

---

### 3.2.2 Non-Functional Testing

**Performance Testing:**

| Tipe | Deskripsi | Target |
|------|-----------|--------|
| Load Testing | Beban normal pengguna | 100 user, response < 2 detik |
| Stress Testing | Kapasitas maksimum | Temukan titik kegagalan |
| Spike Testing | Lonjakan traffic mendadak | Penanganan graceful |
| Endurance Testing | Beban berkelanjutan | 1 jam, performa stabil |

**Security Testing:**

| Tipe | Deskripsi |
|------|-----------|
| Vulnerability Scanning | Pemindaian kerentanan otomatis (OWASP ZAP) |
| Authentication Testing | Login, sesi, token JWT |
| Authorization Testing | RBAC, akses berdasarkan role |
| Input Validation | SQL injection, XSS, CSRF |
| Payment Security | PCI DSS, tokenisasi, webhook verification |

**Usability Testing:**

| Aspek | Kriteria |
|-------|----------|
| Learnability | Pengguna baru dapat menyelesaikan pembelian tanpa panduan |
| Efficiency | Checkout selesai dalam < 5 menit |
| Error Recovery | Pesan error jelas dan mudah diperbaiki |
| Satisfaction | Tampilan konsisten dan menyenangkan |

---

## 3.3 Teknik Pengujian

### 3.3.1 Equivalence Partitioning

Membagi data input menjadi partisi valid dan tidak valid.

**Contoh — Kuantitas Produk:**

| Partisi | Nilai | Hasil |
|---------|-------|-------|
| Valid | 1–10 | ✅ Diterima |
| Invalid (terlalu kecil) | 0, -1 | ❌ Error |
| Invalid (terlalu besar) | 11, 100 | ❌ Error |
| Invalid (bukan angka) | "abc", null | ❌ Error |

---

### 3.3.2 Boundary Value Analysis

Menguji pada batas-batas rentang input.

**Contoh — Threshold Gratis Ongkir:**

| Nilai | Hasil yang Diharapkan |
|-------|----------------------|
| Rp 199.999 | ❌ Ongkir dikenakan |
| Rp 200.000 | ✅ Gratis ongkir |
| Rp 200.001 | ✅ Gratis ongkir |

---

### 3.3.3 Decision Table Testing

Menguji kombinasi kondisi.

**Contoh — Validasi Checkout:**

| Login | Keranjang | Alamat | Pembayaran | Hasil |
|-------|-----------|--------|------------|-------|
| ✅ | ✅ | ✅ | ✅ | ✅ Sukses |
| ❌ | ✅ | ✅ | ✅ | ❌ Perlu login |
| ✅ | ❌ | ✅ | ✅ | ❌ Keranjang kosong |
| ✅ | ✅ | ❌ | ✅ | ❌ Alamat tidak valid |
| ✅ | ✅ | ✅ | ❌ | ❌ Pembayaran tidak valid |

---

### 3.3.4 State Transition Testing

Menguji perubahan status sistem.

**Contoh — Status Pesanan:**

```
Menunggu Pembayaran
        ↓
    Diproses
        ↓
    Dikirim
        ↓
    Selesai

Menunggu Pembayaran / Diproses → Dibatalkan
```

---

## 3.4 Strategi Otomasi

### 3.4.1 Prioritas Otomasi

| Prioritas | Tipe Test | Alasan |
|-----------|-----------|--------|
| 🔴 Tinggi | Regression tests | Dijalankan setiap perubahan kode |
| 🔴 Tinggi | Smoke tests | Dijalankan setiap deployment |
| 🔴 Tinggi | API tests | Cepat dan stabil |
| 🔴 Tinggi | Performance tests | Membutuhkan data volume besar |
| 🟡 Sedang | E2E critical flows | Alur bisnis kritis |
| 🟢 Rendah | Exploratory testing | Membutuhkan kreativitas manusia |
| 🟢 Rendah | Usability testing | Membutuhkan penilaian subjektif |

### 3.4.2 Pipeline CI/CD

```
Code Commit
    ↓
Unit Tests (Jest)
    ↓
Integration Tests (Jest + MSW)
    ↓
Build (Next.js)
    ↓
E2E Tests (Cypress/Playwright)
    ↓
Deploy ke Staging
    ↓
Smoke Tests
    ↓
Performance Tests (Nightly)
    ↓
Security Scan (Nightly)
    ↓
Deploy ke Production
```

**Trigger Otomasi:**

| Trigger | Test yang Dijalankan |
|---------|---------------------|
| Setiap commit | Unit tests |
| Pull request | Unit + Integration tests |
| Merge ke main | Full test suite |
| Nightly | Performance + Security tests |
| Sebelum deployment | Smoke tests |

---

**Document Control**

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-04-02 | QA Team | Initial version |
