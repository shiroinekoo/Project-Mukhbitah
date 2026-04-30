# 1. Ruang Lingkup Pengujian (Test Scope)
## Mukhbitah - Platform Gallery Hijab

**Version:** 1.0  
**Date:** April 2, 2026  
**Prepared by:** QA Team

---

## 1.1 In-Scope — Fitur yang Akan Diuji

### 1.1.1 Pengujian Fungsional

#### Katalog Produk
| Fitur | Keterangan |
|-------|------------|
| ✅ Tampilan daftar produk | Grid layout, gambar, nama, harga, rating |
| ✅ Filter produk | Kategori, harga, warna, material, rating, ketersediaan |
| ✅ Pencarian produk | Berdasarkan nama, deskripsi, kategori, material |
| ✅ Pengurutan produk | Harga, popularitas, terbaru, rating |
| ✅ Detail produk | Galeri, info, tab deskripsi/ukuran/perawatan |
| ✅ Visualisasi 3D | Rotasi, zoom, ganti warna |
| ✅ Ulasan & rating | Tampil, filter, tandai membantu |

#### Keranjang Belanja
| Fitur | Keterangan |
|-------|------------|
| ✅ Tambah item | Dengan pilihan warna dan kuantitas |
| ✅ Hapus item | Konfirmasi penghapusan |
| ✅ Update kuantitas | Tombol +/- dan input langsung |
| ✅ Persistensi keranjang | Lintas sesi untuk pengguna terdaftar |
| ✅ Kalkulasi gratis ongkir | Threshold Rp 200.000 |
| ✅ Badge jumlah item | Di navbar, real-time |

#### Manajemen Pengguna
| Fitur | Keterangan |
|-------|------------|
| ✅ Registrasi | Email/password dan akun sosial |
| ✅ Verifikasi email | Link verifikasi via email |
| ✅ Login | Email/password dan OAuth |
| ✅ Reset password | Via email |
| ✅ Edit profil | Nama, email, telepon, foto |
| ✅ Ubah password | Dengan validasi password lama |
| ✅ Logout | Satu perangkat dan semua perangkat |

#### Proses Checkout
| Fitur | Keterangan |
|-------|------------|
| ✅ Manajemen alamat pengiriman | Tambah, edit, hapus, set utama |
| ✅ Pilih metode pengiriman | JNE, J&T, SiCepat dengan estimasi |
| ✅ Pilih metode pembayaran | Transfer bank, e-wallet, kartu kredit |
| ✅ Kode promo | Validasi dan penerapan diskon |
| ✅ Konfirmasi pesanan | Review sebelum bayar |
| ✅ Email konfirmasi | Setelah pembayaran berhasil |
| ✅ Nomor pesanan unik | Format MKH-YYYYMMDD-XXX |

#### Manajemen Pesanan
| Fitur | Keterangan |
|-------|------------|
| ✅ Riwayat pesanan | Daftar semua pesanan dengan status |
| ✅ Detail pesanan | Item, alamat, pengiriman, pembayaran |
| ✅ Pelacakan pesanan | Via nomor resi |
| ✅ Pembatalan pesanan | Dalam 1 jam setelah pemesanan |
| ✅ Update status pesanan | Oleh admin |

#### Dashboard Admin
| Fitur | Keterangan |
|-------|------------|
| ✅ CRUD produk | Tambah, edit, hapus, upload gambar/3D |
| ✅ Manajemen pesanan | Lihat, update status, proses refund |
| ✅ Manajemen pelanggan | Lihat data pelanggan |
| ✅ Analitik & laporan | Penjualan, produk populer, pendapatan |
| ✅ Manajemen inventori | Update stok, peringatan stok rendah |
| ✅ Import produk CSV | Bulk import |

#### Fitur Lainnya
| Fitur | Keterangan |
|-------|------------|
| ✅ Wishlist | Tambah, hapus, pindah ke keranjang |
| ✅ Newsletter | Langganan dan berhenti berlangganan |
| ✅ Tulis ulasan | Untuk produk yang sudah dibeli |

---

### 1.1.2 Pengujian Non-Fungsional

| Kategori | Cakupan |
|----------|---------|
| ✅ **Performa** | Load testing (100–1.000 user), stress testing, page load time, API response time |
| ✅ **Keamanan** | Autentikasi, otorisasi, SQL injection, XSS, CSRF, keamanan pembayaran |
| ✅ **Usability** | Konsistensi UI, alur navigasi, kejelasan pesan error, responsivitas mobile |
| ✅ **Kompatibilitas** | Browser (Chrome, Firefox, Safari, Edge), perangkat (desktop, tablet, mobile), OS |
| ✅ **Aksesibilitas** | WCAG 2.1 Level AA, screen reader, navigasi keyboard |

---

## 1.2 Out-of-Scope — Fitur yang TIDAK Diuji

| Item | Alasan |
|------|--------|
| ❌ Pengujian internal payment gateway (Midtrans/Stripe) | Tanggung jawab penyedia layanan |
| ❌ Pengujian infrastruktur server dan jaringan | Di luar scope tim QA |
| ❌ Pengujian administrasi database | Tanggung jawab DBA |
| ❌ Pengujian konten marketing | Bukan pengujian teknis |
| ❌ Pengujian kepatuhan hukum | Di luar scope teknis |
| ❌ Pengujian layanan email internal (SendGrid) | Tanggung jawab penyedia layanan |
| ❌ Pengujian AI Assistant (fase berikutnya) | Fitur belum diimplementasikan |
| ❌ Pengujian pembayaran internasional (Stripe) | Fase berikutnya |

---

## 1.3 Asumsi Ruang Lingkup

- Semua fitur yang diuji sudah selesai dikembangkan dan siap untuk testing
- Lingkungan staging tersedia dan dikonfigurasi sebelum system testing dimulai
- Data uji sudah disiapkan sesuai spesifikasi
- Payment gateway dalam mode sandbox/test selama pengujian

---

**Document Control**

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-04-02 | QA Team | Initial version |
