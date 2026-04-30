# Black Box Testing — Proses Checkout (Checkout Process)
## Mukhbitah - Hijab Gallery Platform

**Tipe Pengujian:** Black Box  
**Modul:** Checkout  
**Prioritas:** Tinggi  
**Prepared by:** QA Team  
**Date:** April 2, 2026

---

## TC-CO-001: Pencegahan Checkout Tamu

**Prioritas:** Tinggi  
**Prasyarat:** Pengguna belum login, memiliki item di keranjang

| Langkah | Aksi |
|---------|------|
| 1 | Navigasi ke keranjang |
| 2 | Klik "Checkout" |

**Hasil yang Diharapkan:**
- Pengguna diarahkan ke halaman login
- Pesan: "Silakan login untuk melanjutkan"
- Keranjang tetap ada setelah login

**Status:** ✅ Pass

---

## TC-CO-002: Validasi Form Alamat Pengiriman

**Prioritas:** Tinggi  
**Prasyarat:** Pengguna login, berada di halaman checkout

| Langkah | Aksi |
|---------|------|
| 1 | Biarkan field wajib kosong |
| 2 | Coba lanjut ke langkah berikutnya |

**Hasil yang Diharapkan:**
- Pesan error untuk setiap field wajib
- Tidak dapat melanjutkan ke langkah berikutnya
- Form menyorot field yang tidak valid

**Status:** ✅ Pass

---

## TC-CO-003: Alur Checkout Lengkap

**Prioritas:** Tinggi  
**Prasyarat:** Pengguna login, memiliki item di keranjang

| Langkah | Aksi |
|---------|------|
| 1 | Navigasi ke checkout |
| 2 | Isi alamat pengiriman |
| 3 | Pilih metode pengiriman |
| 4 | Pilih metode pembayaran |
| 5 | Review pesanan |
| 6 | Klik "Buat Pesanan" |

**Hasil yang Diharapkan:**
- Setiap langkah tervalidasi dengan benar
- Pesanan dibuat dengan nomor pesanan unik
- Pembayaran diproses
- Email konfirmasi dikirim
- Pengguna diarahkan ke halaman konfirmasi
- Keranjang dikosongkan

**Status:** ✅ Pass

---

## TC-CO-004: Simpan Alamat Pengiriman

**Prioritas:** Sedang  
**Prasyarat:** Pengguna login, berada di halaman checkout

| Langkah | Aksi |
|---------|------|
| 1 | Isi form alamat pengiriman |
| 2 | Centang "Simpan alamat ini" |
| 3 | Selesaikan checkout |
| 4 | Lakukan checkout berikutnya |

**Hasil yang Diharapkan:**
- Alamat tersimpan di profil pengguna
- Alamat tersedia sebagai pilihan di checkout berikutnya

**Status:** ✅ Pass

---

## TC-CO-005: Pilih Metode Pengiriman

**Prioritas:** Tinggi  
**Prasyarat:** Pengguna berada di langkah pengiriman checkout

| Langkah | Aksi |
|---------|------|
| 1 | Amati pilihan metode pengiriman |
| 2 | Pilih salah satu metode |
| 3 | Amati perubahan total |

**Hasil yang Diharapkan:**
- Beberapa pilihan pengiriman ditampilkan dengan estimasi waktu dan biaya
- Total diperbarui sesuai biaya pengiriman yang dipilih

**Status:** ✅ Pass

---

## TC-CO-006: Pembatalan Pesanan dalam 1 Jam

**Prioritas:** Sedang  
**Prasyarat:** Pengguna baru saja membuat pesanan

| Langkah | Aksi |
|---------|------|
| 1 | Navigasi ke riwayat pesanan |
| 2 | Klik pesanan yang baru dibuat |
| 3 | Klik "Batalkan Pesanan" |
| 4 | Konfirmasi pembatalan |

**Hasil yang Diharapkan:**
- Pesanan berhasil dibatalkan
- Status pesanan berubah menjadi "Dibatalkan"
- Email konfirmasi pembatalan dikirim

**Status:** ✅ Pass

---

## TC-CO-007: Konfirmasi Email Pesanan

**Prioritas:** Tinggi  
**Prasyarat:** Pengguna berhasil menyelesaikan checkout

| Langkah | Aksi |
|---------|------|
| 1 | Selesaikan proses checkout |
| 2 | Cek email yang terdaftar |

**Hasil yang Diharapkan:**
- Email konfirmasi diterima dalam 5 menit
- Email berisi nomor pesanan, detail item, total, dan estimasi pengiriman

**Status:** ✅ Pass

---

**Document Control**

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-04-02 | QA Team | Initial version |
