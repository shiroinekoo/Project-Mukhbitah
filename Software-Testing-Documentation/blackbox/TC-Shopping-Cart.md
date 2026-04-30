# Black Box Testing — Keranjang Belanja (Shopping Cart)
## Mukhbitah - Hijab Gallery Platform

**Tipe Pengujian:** Black Box  
**Modul:** Shopping Cart  
**Prioritas:** Tinggi  
**Prepared by:** QA Team  
**Date:** April 2, 2026

---

## TC-SC-001: Tambah Produk ke Keranjang

**Prioritas:** Tinggi  
**Prasyarat:** Pengguna berada di halaman detail produk

| Langkah | Aksi |
|---------|------|
| 1 | Pilih warna produk |
| 2 | Atur kuantitas ke 2 |
| 3 | Klik "Tambah ke Keranjang" |

**Hasil yang Diharapkan:**
- Pesan sukses ditampilkan
- Badge ikon keranjang diperbarui dengan jumlah item
- Produk ditambahkan ke keranjang dengan detail yang benar

**Status:** ✅ Pass

---

## TC-SC-002: Perbarui Kuantitas Item Keranjang

**Prioritas:** Tinggi  
**Prasyarat:** Pengguna memiliki item di keranjang

| Langkah | Aksi |
|---------|------|
| 1 | Navigasi ke halaman keranjang |
| 2 | Klik tombol "+" pada item keranjang |
| 3 | Amati kuantitas dan total |

**Hasil yang Diharapkan:**
- Kuantitas bertambah 1
- Subtotal diperbarui dengan benar
- Total diperbarui dengan benar

**Status:** ✅ Pass

---

## TC-SC-003: Hapus Item dari Keranjang

**Prioritas:** Tinggi  
**Prasyarat:** Pengguna memiliki item di keranjang

| Langkah | Aksi |
|---------|------|
| 1 | Navigasi ke halaman keranjang |
| 2 | Klik tombol hapus pada item keranjang |
| 3 | Konfirmasi penghapusan |

**Hasil yang Diharapkan:**
- Item dihapus dari keranjang
- Total keranjang diperbarui
- Badge ikon keranjang diperbarui
- Pesan keranjang kosong jika tidak ada item tersisa

**Status:** ✅ Pass

---

## TC-SC-004: Ambang Batas Gratis Ongkir

**Prioritas:** Sedang  
**Prasyarat:** Pengguna memiliki item di keranjang

| Langkah | Aksi |
|---------|------|
| 1 | Tambahkan produk dengan total Rp 180.000 |
| 2 | Amati biaya pengiriman |
| 3 | Tambahkan produk hingga melebihi Rp 200.000 |
| 4 | Amati biaya pengiriman |

**Hasil yang Diharapkan:**
- Biaya pengiriman ditampilkan saat subtotal < Rp 200.000
- Biaya pengiriman menjadi Rp 0 saat subtotal ≥ Rp 200.000
- Indikator gratis ongkir ditampilkan

**Status:** ✅ Pass

---

## TC-SC-005: Persistensi Keranjang Lintas Sesi

**Prioritas:** Sedang  
**Prasyarat:** Pengguna terdaftar dan login

| Langkah | Aksi |
|---------|------|
| 1 | Tambahkan produk ke keranjang |
| 2 | Logout dari akun |
| 3 | Login kembali |
| 4 | Navigasi ke halaman keranjang |

**Hasil yang Diharapkan:**
- Item keranjang tetap ada setelah login ulang
- Kuantitas dan detail produk tetap sama

**Status:** ✅ Pass

---

## TC-SC-006: Badge Jumlah Item Keranjang

**Prioritas:** Sedang  
**Prasyarat:** Pengguna berada di halaman mana saja

| Langkah | Aksi |
|---------|------|
| 1 | Tambahkan 3 item berbeda ke keranjang |
| 2 | Amati ikon keranjang di navbar |

**Hasil yang Diharapkan:**
- Badge menampilkan angka 3
- Badge diperbarui secara real-time saat item ditambah/dihapus

**Status:** ✅ Pass

---

## TC-SC-007: Keranjang Kosong

**Prioritas:** Rendah  
**Prasyarat:** Pengguna tidak memiliki item di keranjang

| Langkah | Aksi |
|---------|------|
| 1 | Navigasi ke halaman keranjang |

**Hasil yang Diharapkan:**
- Pesan "Keranjang Anda kosong" ditampilkan
- Tombol "Mulai Belanja" tersedia
- Tidak ada error

**Status:** ✅ Pass

---

**Document Control**

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-04-02 | QA Team | Initial version |
