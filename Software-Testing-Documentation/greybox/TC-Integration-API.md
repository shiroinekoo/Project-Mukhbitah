# Grey Box Testing — Integrasi API (API Integration)
## Mukhbitah - Hijab Gallery Platform

**Tipe Pengujian:** Grey Box  
**Modul:** API Integration  
**Prioritas:** Tinggi  
**Prepared by:** QA Team  
**Date:** April 2, 2026

---

> **Grey Box Testing** menggabungkan pengetahuan parsial tentang struktur internal sistem dengan pengujian dari perspektif pengguna. Tester mengetahui arsitektur API dan alur data, namun tidak melihat detail implementasi kode.

---

## GT-API-001: Integrasi Keranjang dengan Produk

**Prioritas:** Tinggi  
**Pengetahuan Internal:** Struktur endpoint `/api/cart` dan `/api/products`  
**Prasyarat:** Pengguna login, produk tersedia di database

| Langkah | Aksi | Verifikasi Internal |
|---------|------|---------------------|
| 1 | Render halaman ProductPage | Komponen dimuat |
| 2 | Klik tombol "Tambah ke Keranjang" | Request `POST /api/cart/items` dikirim |
| 3 | Navigasi ke halaman Cart | Request `GET /api/cart` dikirim |
| 4 | Verifikasi produk ada di keranjang | Response berisi item yang ditambahkan |

**Hasil yang Diharapkan:**
- Produk muncul di keranjang dengan detail yang benar
- Total keranjang dihitung dengan benar
- Stok produk tidak berubah (hanya saat checkout)

**Status:** ✅ Pass

---

## GT-API-002: Alur Autentikasi dan Otorisasi

**Prioritas:** Tinggi  
**Pengetahuan Internal:** JWT token flow, middleware autentikasi  
**Prasyarat:** Pengguna belum login

| Langkah | Aksi | Verifikasi Internal |
|---------|------|---------------------|
| 1 | Kirim request ke `/api/orders` tanpa token | Response 401 Unauthorized |
| 2 | Login dengan kredensial valid | JWT token diterima di HTTP-only cookie |
| 3 | Kirim request ke `/api/orders` dengan token | Response 200 dengan data pesanan |
| 4 | Kirim request ke `/api/admin/products` sebagai customer | Response 403 Forbidden |

**Hasil yang Diharapkan:**
- Endpoint terproteksi menolak request tanpa token
- Token valid memberikan akses sesuai role
- Role customer tidak dapat mengakses endpoint admin

**Status:** ✅ Pass

---

## GT-API-003: Integrasi Pembayaran Midtrans

**Prioritas:** Tinggi  
**Pengetahuan Internal:** Alur webhook Midtrans, status transaksi  
**Prasyarat:** Pesanan dibuat, dalam mode sandbox

| Langkah | Aksi | Verifikasi Internal |
|---------|------|---------------------|
| 1 | Buat pesanan baru | `POST /api/orders` → order dibuat dengan status `pending` |
| 2 | Inisiasi pembayaran | `POST /api/payment/create` → token Midtrans diterima |
| 3 | Simulasi pembayaran berhasil di sandbox | Midtrans mengirim webhook ke `/api/payment/webhook` |
| 4 | Verifikasi status pesanan | `GET /api/orders/:id` → status berubah ke `paid` |

**Hasil yang Diharapkan:**
- Webhook diterima dan diverifikasi dengan HMAC signature
- Status pesanan diperbarui secara otomatis
- Email konfirmasi dikirim setelah webhook diterima

**Status:** ✅ Pass

---

## GT-API-004: Sinkronisasi Stok saat Checkout

**Prioritas:** Tinggi  
**Pengetahuan Internal:** Transaksi database, atomic stock update  
**Prasyarat:** Produk dengan stok 5 tersedia

| Langkah | Aksi | Verifikasi Internal |
|---------|------|---------------------|
| 1 | Tambahkan 3 item ke keranjang | Stok belum berkurang |
| 2 | Selesaikan checkout | Transaksi database dijalankan |
| 3 | Verifikasi stok produk | Stok berkurang dari 5 menjadi 2 |
| 4 | Coba beli 4 item dari stok yang tersisa | Error: stok tidak mencukupi |

**Hasil yang Diharapkan:**
- Stok hanya berkurang saat checkout berhasil
- Transaksi atomic mencegah overselling
- Error yang jelas saat stok tidak mencukupi

**Status:** ✅ Pass

---

## GT-API-005: Integrasi Email SendGrid

**Prioritas:** Sedang  
**Pengetahuan Internal:** Template email, trigger event  
**Prasyarat:** Akun SendGrid terkonfigurasi

| Langkah | Aksi | Verifikasi Internal |
|---------|------|---------------------|
| 1 | Registrasi akun baru | Event `user.registered` dipicu |
| 2 | Cek inbox email | Email verifikasi diterima |
| 3 | Selesaikan checkout | Event `order.created` dipicu |
| 4 | Cek inbox email | Email konfirmasi pesanan diterima |

**Hasil yang Diharapkan:**
- Email terkirim dalam 5 menit setelah event
- Konten email sesuai template yang ditentukan
- Link dalam email berfungsi dengan benar

**Status:** ✅ Pass

---

## GT-API-006: Paginasi API Produk

**Prioritas:** Sedang  
**Pengetahuan Internal:** Parameter paginasi `page` dan `limit`  
**Prasyarat:** Database berisi 50+ produk

| Langkah | Aksi | Verifikasi Internal |
|---------|------|---------------------|
| 1 | Request `GET /api/products?page=1&limit=20` | Response berisi 20 produk pertama |
| 2 | Request `GET /api/products?page=2&limit=20` | Response berisi 20 produk berikutnya |
| 3 | Verifikasi metadata paginasi | `pagination.total`, `totalPages` akurat |

**Hasil yang Diharapkan:**
- Paginasi berfungsi dengan benar
- Tidak ada duplikasi produk antar halaman
- Metadata paginasi akurat

**Status:** ✅ Pass

---

**Document Control**

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-04-02 | QA Team | Initial version |
