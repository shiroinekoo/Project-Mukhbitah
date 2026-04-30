# Black Box Testing — Dashboard Admin (Admin Dashboard)
## Mukhbitah - Hijab Gallery Platform

**Tipe Pengujian:** Black Box  
**Modul:** Admin Dashboard  
**Prioritas:** Tinggi  
**Prepared by:** QA Team  
**Date:** April 2, 2026

---

## TC-AD-001: Login Admin

**Prioritas:** Tinggi  
**Prasyarat:** Akun admin tersedia

| Langkah | Aksi |
|---------|------|
| 1 | Navigasi ke `/admin/login` |
| 2 | Masukkan kredensial admin |
| 3 | Klik "Masuk" |

**Hasil yang Diharapkan:**
- Admin berhasil diautentikasi
- Diarahkan ke dashboard admin
- Menu admin dapat diakses

**Status:** ✅ Pass

---

## TC-AD-002: Tambah Produk Baru

**Prioritas:** Tinggi  
**Prasyarat:** Admin sudah login

| Langkah | Aksi |
|---------|------|
| 1 | Navigasi ke bagian Produk |
| 2 | Klik "Tambah Produk" |
| 3 | Isi detail produk |
| 4 | Upload gambar |
| 5 | Klik "Simpan" |

**Hasil yang Diharapkan:**
- Produk dibuat di database
- Produk muncul di daftar produk
- Pesan sukses ditampilkan

**Status:** ✅ Pass

---

## TC-AD-003: Edit Produk

**Prioritas:** Tinggi  
**Prasyarat:** Admin sudah login, produk tersedia

| Langkah | Aksi |
|---------|------|
| 1 | Navigasi ke bagian Produk |
| 2 | Klik "Edit" pada produk |
| 3 | Ubah detail produk |
| 4 | Klik "Simpan" |

**Hasil yang Diharapkan:**
- Produk diperbarui di database
- Perubahan langsung tercermin
- Pesan sukses ditampilkan

**Status:** ✅ Pass

---

## TC-AD-004: Hapus Produk

**Prioritas:** Tinggi  
**Prasyarat:** Admin sudah login, produk tersedia

| Langkah | Aksi |
|---------|------|
| 1 | Navigasi ke bagian Produk |
| 2 | Klik "Hapus" pada produk |
| 3 | Konfirmasi penghapusan |

**Hasil yang Diharapkan:**
- Dialog konfirmasi muncul
- Produk dihapus dari database
- Produk dihapus dari daftar
- Pesan sukses ditampilkan

**Status:** ✅ Pass

---

## TC-AD-005: Perbarui Status Pesanan

**Prioritas:** Tinggi  
**Prasyarat:** Admin sudah login, pesanan tersedia

| Langkah | Aksi |
|---------|------|
| 1 | Navigasi ke bagian Pesanan |
| 2 | Klik pada pesanan |
| 3 | Ubah status menjadi "Dikirim" |
| 4 | Masukkan nomor resi |
| 5 | Klik "Perbarui" |

**Hasil yang Diharapkan:**
- Status pesanan diperbarui
- Pelanggan menerima notifikasi email
- Nomor resi tersimpan

**Status:** ✅ Pass

---

## TC-AD-006: Akses Admin Ditolak untuk Pelanggan

**Prioritas:** Tinggi  
**Prasyarat:** Pengguna login sebagai pelanggan biasa

| Langkah | Aksi |
|---------|------|
| 1 | Coba akses `/admin/dashboard` secara langsung |

**Hasil yang Diharapkan:**
- Akses ditolak (403 Forbidden)
- Diarahkan ke halaman utama atau halaman error

**Status:** ✅ Pass

---

## TC-AD-007: Peringatan Stok Rendah

**Prioritas:** Sedang  
**Prasyarat:** Admin sudah login, produk dengan stok rendah tersedia

| Langkah | Aksi |
|---------|------|
| 1 | Atur stok produk ke 3 |
| 2 | Amati dashboard admin |

**Hasil yang Diharapkan:**
- Notifikasi stok rendah muncul di dashboard
- Email peringatan dikirim ke admin

**Status:** ✅ Pass

---

## TC-AD-008: Lihat Analitik Penjualan

**Prioritas:** Sedang  
**Prasyarat:** Admin sudah login

| Langkah | Aksi |
|---------|------|
| 1 | Navigasi ke bagian Analitik |
| 2 | Pilih rentang tanggal |
| 3 | Amati laporan |

**Hasil yang Diharapkan:**
- Statistik penjualan ditampilkan
- Grafik pendapatan tersedia
- Produk terpopuler ditampilkan

**Status:** ✅ Pass

---

**Document Control**

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-04-02 | QA Team | Initial version |
