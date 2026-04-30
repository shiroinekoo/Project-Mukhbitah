# Black Box Testing — Katalog Produk (Product Catalog)
## Mukhbitah - Hijab Gallery Platform

**Tipe Pengujian:** Black Box  
**Modul:** Product Catalog  
**Prioritas:** Tinggi  
**Prepared by:** QA Team  
**Date:** April 2, 2026

---

> **Black Box Testing** menguji fungsionalitas sistem dari perspektif pengguna akhir, tanpa melihat kode internal. Fokus pada input dan output yang diharapkan.

---

## TC-PC-001: Tampilkan Daftar Produk

**Prioritas:** Tinggi  
**Prasyarat:** Pengguna berada di halaman produk

| Langkah | Aksi |
|---------|------|
| 1 | Navigasi ke `/products` |
| 2 | Amati tampilan grid produk |

**Hasil yang Diharapkan:**
- Produk ditampilkan dalam layout grid
- Setiap produk menampilkan gambar, nama, harga, dan rating
- Halaman dimuat dalam 3 detik

**Status:** ✅ Pass

---

## TC-PC-002: Filter Produk Berdasarkan Kategori

**Prioritas:** Tinggi  
**Prasyarat:** Pengguna berada di halaman produk

| Langkah | Aksi |
|---------|------|
| 1 | Klik filter kategori "Pashmina" |
| 2 | Amati hasil yang difilter |

**Hasil yang Diharapkan:**
- Hanya produk Pashmina yang ditampilkan
- Filter terlihat aktif secara visual
- Jumlah produk diperbarui

**Status:** ✅ Pass

---

## TC-PC-003: Pencarian Produk

**Prioritas:** Tinggi  
**Prasyarat:** Pengguna berada di halaman produk

| Langkah | Aksi |
|---------|------|
| 1 | Masukkan "beige" di kotak pencarian |
| 2 | Tekan Enter atau klik tombol cari |

**Hasil yang Diharapkan:**
- Produk yang cocok dengan "beige" ditampilkan
- Kata kunci pencarian disorot
- Pesan "Tidak ada hasil" jika tidak ada yang cocok

**Status:** ✅ Pass

---

## TC-PC-004: Urutkan Produk Berdasarkan Harga

**Prioritas:** Sedang  
**Prasyarat:** Pengguna berada di halaman produk

| Langkah | Aksi |
|---------|------|
| 1 | Pilih "Harga: Rendah ke Tinggi" dari dropdown sort |
| 2 | Amati urutan produk |

**Hasil yang Diharapkan:**
- Produk diurutkan berdasarkan harga naik
- Pilihan sort dipertahankan

**Status:** ✅ Pass

---

## TC-PC-005: Lihat Detail Produk

**Prioritas:** Tinggi  
**Prasyarat:** Pengguna berada di halaman produk

| Langkah | Aksi |
|---------|------|
| 1 | Klik pada kartu produk |
| 2 | Amati halaman detail produk |

**Hasil yang Diharapkan:**
- Halaman detail produk dimuat
- Semua informasi produk ditampilkan
- 3D viewer dimuat (jika tersedia)
- Produk terkait ditampilkan

**Status:** ✅ Pass

---

## TC-PC-006: Filter Produk Berdasarkan Rentang Harga

**Prioritas:** Sedang  
**Prasyarat:** Pengguna berada di halaman produk

| Langkah | Aksi |
|---------|------|
| 1 | Atur slider harga minimum ke Rp 50.000 |
| 2 | Atur slider harga maksimum ke Rp 200.000 |
| 3 | Amati hasil filter |

**Hasil yang Diharapkan:**
- Hanya produk dalam rentang harga yang ditampilkan
- Produk di luar rentang tidak muncul

**Status:** ✅ Pass

---

## TC-PC-007: Filter Produk Berdasarkan Warna

**Prioritas:** Sedang  
**Prasyarat:** Pengguna berada di halaman produk

| Langkah | Aksi |
|---------|------|
| 1 | Pilih warna "Hitam" dari filter warna |
| 2 | Amati hasil filter |

**Hasil yang Diharapkan:**
- Hanya produk dengan warna hitam yang ditampilkan
- Filter warna aktif secara visual

**Status:** ✅ Pass

---

## TC-PC-008: Pencarian Tanpa Hasil

**Prioritas:** Sedang  
**Prasyarat:** Pengguna berada di halaman produk

| Langkah | Aksi |
|---------|------|
| 1 | Masukkan kata kunci yang tidak ada, misal "xyz123" |
| 2 | Tekan Enter |

**Hasil yang Diharapkan:**
- Pesan "Tidak ada produk ditemukan" ditampilkan
- Saran pencarian lain ditampilkan (opsional)

**Status:** ✅ Pass

---

**Document Control**

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-04-02 | QA Team | Initial version |
