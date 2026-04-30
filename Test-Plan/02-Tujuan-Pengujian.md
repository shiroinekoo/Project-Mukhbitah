# 2. Tujuan Pengujian (Test Objectives)
## Mukhbitah - Platform Gallery Hijab

**Version:** 1.0  
**Date:** April 2, 2026  
**Prepared by:** QA Team

---

## 2.1 Tujuan Utama

### 2.1.1 Verifikasi Fungsionalitas

Memastikan bahwa seluruh fitur sistem berfungsi sesuai dengan Software Requirements Specification (SRS):

| Tujuan | Detail |
|--------|--------|
| Validasi fitur | Setiap fitur bekerja sesuai spesifikasi yang didefinisikan |
| Validasi business logic | Aturan bisnis (gratis ongkir, batas pembatalan, dll.) diterapkan dengan benar |
| Validasi integrasi | Sistem berkomunikasi dengan benar dengan payment gateway, email service, dan database |
| Validasi alur pengguna | Semua user workflow dapat diselesaikan dari awal hingga akhir |

---

### 2.1.2 Validasi Kualitas Sistem

| Aspek | Target |
|-------|--------|
| **Performa** | Homepage dimuat < 3 detik, API response < 2 detik, Lighthouse score > 90 |
| **Keamanan** | Tidak ada kerentanan kritis, data pengguna terlindungi, transaksi aman |
| **Keandalan** | Uptime 99.9%, recovery dari kegagalan < 5 menit |
| **Usability** | Pengguna baru dapat menyelesaikan pembelian tanpa bantuan |
| **Aksesibilitas** | Kepatuhan WCAG 2.1 Level AA |

---

### 2.1.3 Identifikasi dan Dokumentasi Defect

- Menemukan bug sebelum sistem masuk ke production
- Mendokumentasikan setiap defect dengan langkah reproduksi yang jelas
- Mengklasifikasikan defect berdasarkan severity dan priority
- Memastikan semua defect kritis terselesaikan sebelum rilis

---

### 2.1.4 Mitigasi Risiko

- Mengidentifikasi area berisiko tinggi (pembayaran, stok, keamanan)
- Melakukan pengujian mendalam pada critical paths
- Memvalidasi mekanisme error handling dan recovery
- Memastikan sistem dapat menangani beban puncak

---

## 2.2 Tujuan Per Modul

| Modul | Tujuan Verifikasi |
|-------|-------------------|
| **Katalog Produk** | Filter, pencarian, dan tampilan produk berfungsi akurat |
| **Keranjang Belanja** | Kalkulasi harga, stok, dan persistensi data benar |
| **Autentikasi** | Login, registrasi, dan keamanan sesi berfungsi dengan aman |
| **Checkout** | Alur pembayaran end-to-end berhasil tanpa data loss |
| **Manajemen Pesanan** | Status pesanan akurat dan notifikasi terkirim |
| **Admin Dashboard** | Operasi CRUD produk dan pesanan berfungsi dengan benar |
| **Keamanan** | Tidak ada celah SQL injection, XSS, CSRF, atau unauthorized access |
| **Performa** | Sistem stabil di bawah beban 1.000 pengguna bersamaan |

---

## 2.3 Kriteria Keberhasilan Pengujian

Pengujian dianggap berhasil jika seluruh kondisi berikut terpenuhi:

| Kriteria | Target |
|----------|--------|
| ✅ Critical test cases | 100% lulus |
| ✅ High priority test cases | 95% lulus |
| ✅ Medium priority test cases | 90% lulus |
| ✅ Defect kritis/tinggi | 0 defect terbuka saat rilis |
| ✅ Code coverage | ≥ 80% |
| ✅ Performa | Semua target Core Web Vitals terpenuhi |
| ✅ Keamanan | Semua kerentanan kritis dan tinggi terselesaikan |
| ✅ UAT | Persetujuan stakeholder diperoleh |

---

## 2.4 Yang Ingin Divalidasi

### Dari Perspektif Pengguna
- Pengguna dapat mendaftar, login, dan mengelola akun dengan mudah
- Pengguna dapat menemukan produk yang diinginkan dengan cepat
- Pengguna dapat menyelesaikan pembelian dalam maksimal 5 langkah
- Pengguna menerima konfirmasi dan notifikasi yang tepat waktu

### Dari Perspektif Bisnis
- Tidak ada transaksi yang gagal karena bug sistem
- Stok produk tidak pernah negatif (overselling tidak terjadi)
- Laporan dan analitik admin akurat
- Integrasi payment gateway berfungsi 100% di mode production

### Dari Perspektif Teknis
- Tidak ada memory leak atau degradasi performa seiring waktu
- Semua API endpoint mengembalikan response yang benar
- Database konsisten setelah setiap operasi
- Sistem pulih otomatis dari kegagalan komponen

---

**Document Control**

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-04-02 | QA Team | Initial version |
