# 5. Kebutuhan Non-Fungsional (Non-Functional Requirements)
## Mukhbitah - Hijab Gallery Platform

---

## 5.1 Kebutuhan Performa (Performance Requirements)

| ID | Kebutuhan |
|----|-----------|
| REQ-5.1.1 | Sistem memuat homepage dalam 3 detik pada koneksi 4G |
| REQ-5.1.2 | Sistem mendukung minimal 1.000 pengguna bersamaan |
| REQ-5.1.3 | Sistem memproses checkout dalam 5 detik |
| REQ-5.1.4 | Sistem memuat model 3D dalam 2 detik |
| REQ-5.1.5 | Sistem mencapai skor Lighthouse performa 90+ |

**Target Core Web Vitals:**

| Metrik | Target |
|--------|--------|
| First Contentful Paint (FCP) | < 1.5 detik |
| Largest Contentful Paint (LCP) | < 2.5 detik |
| Time to Interactive (TTI) | < 3.5 detik |
| Cumulative Layout Shift (CLS) | < 0.1 |
| First Input Delay (FID) | < 100ms |

---

## 5.2 Kebutuhan Keselamatan Data (Safety Requirements)

| ID | Kebutuhan |
|----|-----------|
| REQ-5.2.1 | Sistem melakukan backup data setiap hari |
| REQ-5.2.2 | Sistem mempertahankan log transaksi untuk keperluan audit |
| REQ-5.2.3 | Sistem memvalidasi semua input pengguna untuk mencegah korupsi data |

---

## 5.3 Kebutuhan Keamanan (Security Requirements)

| ID | Kebutuhan |
|----|-----------|
| REQ-5.3.1 | Sistem mengenkripsi semua data sensitif dalam transit menggunakan TLS 1.3 |
| REQ-5.3.2 | Sistem meng-hash password menggunakan bcrypt dengan salt |
| REQ-5.3.3 | Sistem mengimplementasikan perlindungan CSRF |
| REQ-5.3.4 | Sistem mengimplementasikan rate limiting untuk mencegah penyalahgunaan |
| REQ-5.3.5 | Sistem mematuhi PCI DSS untuk pemrosesan pembayaran |
| REQ-5.3.6 | Sistem mengimplementasikan role-based access control (RBAC) |
| REQ-5.3.7 | Sistem mencatat semua tindakan admin untuk audit trail |

**Rate Limiting:**

| Endpoint | Batas |
|----------|-------|
| Login | 5 request per 15 menit |
| Register | 3 request per jam |
| API umum | 100 request per menit |
| Payment | 10 request per jam |

---

## 5.4 Atribut Kualitas Perangkat Lunak (Software Quality Attributes)

### 5.4.1 Ketersediaan (Availability)

| ID | Kebutuhan |
|----|-----------|
| REQ-5.4.1 | Sistem memiliki uptime 99.9% |

### 5.4.2 Maintainability

| ID | Kebutuhan |
|----|-----------|
| REQ-5.4.2 | Sistem menggunakan arsitektur modular berbasis komponen |
| REQ-5.4.3 | Sistem menyertakan dokumentasi kode yang komprehensif |

### 5.4.3 Usability

| ID | Kebutuhan |
|----|-----------|
| REQ-5.4.4 | Sistem dapat digunakan oleh pengguna dengan kemampuan browsing web dasar |
| REQ-5.4.5 | Sistem menyediakan pesan error yang jelas dan panduan pengguna |
| REQ-5.4.6 | Sistem menyelesaikan checkout dalam maksimal 5 langkah |

### 5.4.4 Skalabilitas (Scalability)

| ID | Kebutuhan |
|----|-----------|
| REQ-5.4.7 | Sistem dapat melakukan horizontal scaling untuk menangani peningkatan traffic |
| REQ-5.4.8 | Sistem mendukung database sharding untuk dataset besar |

### 5.4.5 Keandalan (Reliability)

| ID | Kebutuhan |
|----|-----------|
| REQ-5.4.9 | Sistem menangani error dengan baik tanpa kehilangan data |
| REQ-5.4.10 | Sistem pulih dari kegagalan dalam 5 menit |

---

## 5.5 Aturan Bisnis (Business Rules)

| ID | Aturan |
|----|--------|
| REQ-5.5.1 | Gratis ongkir berlaku untuk pesanan di atas Rp 200.000 |
| REQ-5.5.2 | Produk hanya dapat diulas oleh pembeli terverifikasi |
| REQ-5.5.3 | Diskon tidak dapat digabungkan kecuali secara eksplisit diizinkan |
| REQ-5.5.4 | Pesanan dapat dibatalkan dalam 1 jam setelah pemesanan |
| REQ-5.5.5 | Pengembalian diterima dalam 7 hari setelah pengiriman |

---

## 5.6 Kebutuhan Internasionalisasi

| ID | Kebutuhan |
|----|-----------|
| REQ-5.6.1 | Sistem mendukung bahasa Indonesia (utama) |
| REQ-5.6.2 | Sistem mendukung bahasa Inggris (masa depan) |
| REQ-5.6.3 | Sistem menampilkan harga dalam Rupiah Indonesia (IDR) |
| REQ-5.6.4 | Sistem menggunakan format tanggal dan waktu Indonesia |

---

## 5.7 Kebutuhan SEO

| ID | Kebutuhan |
|----|-----------|
| REQ-5.7.1 | Sistem menghasilkan URL yang ramah SEO |
| REQ-5.7.2 | Sistem menyertakan meta tag untuk semua halaman |
| REQ-5.7.3 | Sistem menghasilkan sitemap.xml |
| REQ-5.7.4 | Sistem mengimplementasikan structured data (Schema.org) |
| REQ-5.7.5 | Sistem menghasilkan Open Graph tags untuk berbagi di media sosial |

---

## 5.8 Kebutuhan Legal

| ID | Kebutuhan |
|----|-----------|
| REQ-5.8.1 | Sistem mematuhi regulasi galeri dan pameran Indonesia |
| REQ-5.8.2 | Sistem menampilkan syarat dan ketentuan yang jelas |
| REQ-5.8.3 | Sistem menampilkan kebijakan privasi sesuai hukum perlindungan data Indonesia |
| REQ-5.8.4 | Sistem menampilkan kebijakan pengembalian dan refund |

---

**Document Control**

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-04-02 | Development Team | Initial version |
