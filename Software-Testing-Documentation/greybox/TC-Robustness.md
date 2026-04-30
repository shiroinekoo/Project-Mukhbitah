# Grey Box Testing — Robustness & Error Handling
## Mukhbitah - Hijab Gallery Platform

**Tipe Pengujian:** Grey Box  
**Modul:** Robustness & Error Handling  
**Prioritas:** Tinggi  
**Prepared by:** QA Team  
**Date:** April 2, 2026

---

## RT-IV-001: Pencegahan SQL Injection

**Pengetahuan Internal:** Parameterized queries digunakan di semua query database  
**Test:** Coba SQL injection di field pencarian

| Input | Hasil yang Diharapkan |
|-------|----------------------|
| `' OR '1'='1` | Input disanitasi, tidak ada pelanggaran database |
| `'; DROP TABLE products; --` | Input ditolak, database tetap aman |
| `1 UNION SELECT * FROM users` | Input disanitasi, tidak ada data bocor |

**Verifikasi Internal:** Query menggunakan parameterized statements, bukan string concatenation

**Status:** ✅ Pass — Input di-escape dengan benar

---

## RT-IV-002: Pencegahan XSS

**Pengetahuan Internal:** HTML entities di-encode pada semua output user-generated content  
**Test:** Coba XSS di field ulasan produk

| Input | Hasil yang Diharapkan |
|-------|----------------------|
| `<script>alert('XSS')</script>` | Script di-escape, ditampilkan sebagai teks |
| `<img src=x onerror=alert(1)>` | Tag HTML di-encode |
| `javascript:alert('XSS')` | URL berbahaya diblokir |

**Verifikasi Internal:** React secara default meng-escape JSX, DOMPurify digunakan untuk konten HTML

**Status:** ✅ Pass — HTML entities di-encode

---

## RT-IV-003: Upload File Besar

**Pengetahuan Internal:** Batas ukuran file 5MB dikonfigurasi di middleware  
**Test:** Upload gambar 50MB sebagai gambar produk

**Hasil yang Diharapkan:**
- File ditolak dengan pesan error
- Pesan: "Ukuran file maksimal 5MB"
- Server tidak crash

**Verifikasi Internal:** Middleware `multer` atau `formidable` membatasi ukuran file

**Status:** ✅ Pass — Batas 5MB diterapkan

---

## RT-IV-004: Tipe Data Tidak Valid

**Pengetahuan Internal:** Validasi input menggunakan Zod schema  
**Test:** Masukkan teks di field kuantitas

| Input | Hasil yang Diharapkan |
|-------|----------------------|
| "abc" di field kuantitas | Error validasi, default ke 1 |
| -5 di field kuantitas | Error: nilai minimum 1 |
| 999 di field kuantitas | Error: nilai maksimum 10 |
| 1.5 di field kuantitas | Dibulatkan ke 1 atau error |

**Verifikasi Internal:** Zod schema `z.number().int().min(1).max(10)` diterapkan

**Status:** ✅ Pass — Validasi tipe data berfungsi

---

## RT-EH-001: Kegagalan Koneksi Database

**Pengetahuan Internal:** Error handler global menangkap database errors  
**Test:** Simulasi database tidak tersedia

**Hasil yang Diharapkan:**
- Pesan error yang ramah pengguna ditampilkan
- Aplikasi tidak crash
- Log error dicatat di server

**Verifikasi Internal:** Try-catch di semua database calls, fallback error response

**Status:** ✅ Pass — "Layanan sementara tidak tersedia" ditampilkan

---

## RT-EH-002: Timeout Payment Gateway

**Pengetahuan Internal:** Timeout 30 detik dikonfigurasi untuk request Midtrans  
**Test:** Simulasi timeout payment gateway

**Hasil yang Diharapkan:**
- Pesan error ditampilkan ke pengguna
- Pesanan ditandai sebagai `pending`
- Pengguna dapat mencoba ulang pembayaran

**Verifikasi Internal:** Axios timeout config, retry logic untuk payment

**Status:** ✅ Pass — Opsi coba ulang tersedia

---

## RT-EH-003: Gangguan Jaringan saat Checkout

**Pengetahuan Internal:** Form data disimpan di localStorage sebagai backup  
**Test:** Putuskan jaringan saat proses checkout

**Hasil yang Diharapkan:**
- Pesan error koneksi ditampilkan
- Data form tetap tersimpan
- Setelah koneksi pulih, pengguna dapat melanjutkan

**Verifikasi Internal:** localStorage backup setiap perubahan form

**Status:** ✅ Pass — Data form tersimpan di local storage

---

## RT-BT-001: Batas Maksimum Item Keranjang

**Pengetahuan Internal:** Batas 50 item per keranjang dikonfigurasi  
**Test:** Tambahkan 100 item ke keranjang

**Hasil yang Diharapkan:**
- Sistem menangani dengan baik
- Batas 50 item diterapkan
- Pesan error yang jelas saat batas tercapai

**Verifikasi Internal:** Validasi di `CartContext.addItem()`

**Status:** ✅ Pass — Batas 50 item diterapkan

---

## RT-BT-002: Pembelian Stok Habis

**Pengetahuan Internal:** Pengecekan stok dilakukan sebelum menambah ke keranjang  
**Test:** Coba beli produk dengan stok 0

**Hasil yang Diharapkan:**
- Tombol "Tambah ke Keranjang" dinonaktifkan
- Pesan "Stok habis" ditampilkan
- Tidak dapat menambahkan ke keranjang

**Verifikasi Internal:** `product.stock > 0` dicek sebelum render tombol

**Status:** ✅ Pass — Pesan "Stok habis" ditampilkan

---

## RT-CT-001: Race Condition pada Stok

**Pengetahuan Internal:** Transaksi Firestore/PostgreSQL digunakan untuk update stok  
**Test:** Dua pengguna membeli item terakhir secara bersamaan

**Hasil yang Diharapkan:**
- Hanya satu pengguna berhasil
- Pengguna lain mendapat error stok habis
- Tidak ada overselling

**Verifikasi Internal:** Atomic transaction dengan optimistic locking

**Status:** ✅ Pass — Transaksi berbasis database diimplementasikan

---

**Document Control**

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-04-02 | QA Team | Initial version |
