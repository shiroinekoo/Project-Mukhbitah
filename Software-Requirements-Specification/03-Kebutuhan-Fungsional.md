# 3. Kebutuhan Fungsional (Functional Requirements)
## Mukhbitah - Hijab Gallery Platform

---

## 3.1 Katalog Produk (Product Catalog)

**Prioritas:** Tinggi

**Deskripsi:** Pengguna dapat menjelajah, mencari, dan memfilter katalog produk.

| ID | Kebutuhan |
|----|-----------|
| REQ-3.1.1 | Sistem menampilkan produk dalam layout grid dengan gambar, nama, harga, dan rating |
| REQ-3.1.2 | Sistem memungkinkan filter produk berdasarkan: Kategori (Pashmina, Segi Empat, Instan), rentang harga, warna, material, rating, dan ketersediaan |
| REQ-3.1.3 | Sistem menyediakan fungsi pencarian berdasarkan: nama produk, deskripsi, kategori, dan material |
| REQ-3.1.4 | Sistem memungkinkan pengurutan berdasarkan: harga (rendah ke tinggi / tinggi ke rendah), popularitas, terbaru, dan rating |
| REQ-3.1.5 | Sistem menampilkan detail produk meliputi: beberapa gambar produk, 3D model viewer, deskripsi, harga dan diskon, warna tersedia, informasi material, panduan ukuran, instruksi perawatan, ulasan pelanggan, dan produk terkait |

---

## 3.2 Keranjang Belanja (Shopping Cart)

**Prioritas:** Tinggi

**Deskripsi:** Pengguna dapat mengelola item yang ingin dibeli.

| ID | Kebutuhan |
|----|-----------|
| REQ-3.2.1 | Sistem memungkinkan pengguna menambahkan produk ke keranjang dengan warna dan kuantitas yang dipilih |
| REQ-3.2.2 | Sistem memungkinkan pengguna memperbarui kuantitas item di keranjang |
| REQ-3.2.3 | Sistem memungkinkan pengguna menghapus item dari keranjang |
| REQ-3.2.4 | Sistem menampilkan ringkasan keranjang: daftar item dengan gambar dan detail, subtotal, biaya pengiriman, diskon (jika ada), dan total |
| REQ-3.2.5 | Sistem menyimpan data keranjang untuk pengguna terdaftar lintas sesi |
| REQ-3.2.6 | Sistem menampilkan indikator ambang batas gratis ongkir (minimum Rp 200.000) |
| REQ-3.2.7 | Sistem menampilkan badge jumlah item keranjang di navigation bar |

---

## 3.3 Autentikasi Pengguna (User Authentication)

**Prioritas:** Tinggi

**Deskripsi:** Pengguna dapat membuat akun dan melakukan autentikasi untuk mengakses fitur personal.

| ID | Kebutuhan |
|----|-----------|
| REQ-3.3.1 | Sistem memungkinkan registrasi dengan: email dan password, akun Google, akun Facebook |
| REQ-3.3.2 | Sistem memvalidasi format email dan kekuatan password (minimal 8 karakter, 1 huruf kapital, 1 angka) |
| REQ-3.3.3 | Sistem mengirim verifikasi email setelah registrasi |
| REQ-3.3.4 | Sistem memungkinkan login dengan email/password atau akun sosial |
| REQ-3.3.5 | Sistem menyediakan fungsi reset password melalui email |
| REQ-3.3.6 | Sistem mempertahankan sesi pengguna selama 30 hari dengan opsi "Ingat Saya" |
| REQ-3.3.7 | Sistem memungkinkan pengguna logout dari semua perangkat |

---

## 3.4 Proses Checkout (Checkout Process)

**Prioritas:** Tinggi

**Deskripsi:** Pengguna dapat menyelesaikan pembelian melalui proses checkout multi-langkah.

| ID | Kebutuhan |
|----|-----------|
| REQ-3.4.1 | Sistem mewajibkan autentikasi pengguna sebelum checkout |
| REQ-3.4.2 | Sistem mengumpulkan informasi pengiriman: nama lengkap, nomor telepon, alamat lengkap, provinsi/kota/kecamatan/kode pos, catatan alamat (opsional) |
| REQ-3.4.3 | Sistem memungkinkan pengguna menyimpan beberapa alamat pengiriman |
| REQ-3.4.4 | Sistem menyediakan pilihan metode pengiriman dengan estimasi waktu dan biaya |
| REQ-3.4.5 | Sistem terintegrasi dengan payment gateway: Midtrans (kartu kredit, transfer bank, e-wallet) dan Stripe (pembayaran internasional) |
| REQ-3.4.6 | Sistem menampilkan ringkasan pesanan sebelum pembayaran |
| REQ-3.4.7 | Sistem mengirim email konfirmasi pesanan setelah pembayaran berhasil |
| REQ-3.4.8 | Sistem menghasilkan nomor pesanan unik untuk setiap transaksi |

---

## 3.5 Profil Pengguna (User Profile)

**Prioritas:** Sedang

**Deskripsi:** Pengguna terdaftar dapat mengelola profil dan melihat riwayat pesanan.

| ID | Kebutuhan |
|----|-----------|
| REQ-3.5.1 | Sistem memungkinkan pengguna memperbarui informasi profil: nama, email, nomor telepon, foto profil |
| REQ-3.5.2 | Sistem menampilkan riwayat pesanan: nomor pesanan, tanggal, status, total, dan item yang dipesan |
| REQ-3.5.3 | Sistem memungkinkan pengguna melacak status pesanan |
| REQ-3.5.4 | Sistem memungkinkan pengguna mengelola alamat tersimpan |
| REQ-3.5.5 | Sistem memungkinkan pengguna mengelola item wishlist |
| REQ-3.5.6 | Sistem memungkinkan pengguna mengubah password |

---

## 3.6 Visualisasi Produk 3D (3D Product Visualization)

**Prioritas:** Sedang

**Deskripsi:** Pengguna dapat melihat produk dalam tampilan 3D dengan kontrol interaktif.

| ID | Kebutuhan |
|----|-----------|
| REQ-3.6.1 | Sistem menampilkan model 3D produk menggunakan Three.js |
| REQ-3.6.2 | Sistem memungkinkan pengguna memutar model 3D dengan mouse/sentuhan |
| REQ-3.6.3 | Sistem memungkinkan pengguna zoom in/out pada model 3D |
| REQ-3.6.4 | Sistem memungkinkan pengguna mengganti warna dalam tampilan 3D |
| REQ-3.6.5 | Sistem menyediakan pencahayaan dan bayangan realistis pada model 3D |
| REQ-3.6.6 | Sistem mengoptimalkan loading model 3D untuk performa |

---

## 3.7 AI Assistant

**Prioritas:** Rendah

**Deskripsi:** Chatbot berbasis AI menyediakan rekomendasi produk dan dukungan pelanggan.

| ID | Kebutuhan |
|----|-----------|
| REQ-3.7.1 | Sistem menyediakan antarmuka chatbot yang dapat diakses dari semua halaman |
| REQ-3.7.2 | Sistem merekomendasikan produk berdasarkan: warna kulit, warna pakaian, kesempatan (formal/kasual), bentuk wajah |
| REQ-3.7.3 | Sistem menjawab pertanyaan umum tentang: produk, pengiriman, pengembalian, instruksi perawatan |
| REQ-3.7.4 | Sistem memberikan saran gaya berdasarkan preferensi pengguna |
| REQ-3.7.5 | Sistem mengalihkan pertanyaan kompleks ke dukungan manusia |

---

## 3.8 Dashboard Admin (Admin Dashboard)

**Prioritas:** Tinggi

**Deskripsi:** Administrator dapat mengelola produk, pesanan, dan pelanggan.

| ID | Kebutuhan |
|----|-----------|
| REQ-3.8.1 | Sistem menyediakan autentikasi admin terpisah dari akun pelanggan |
| REQ-3.8.2 | Sistem memungkinkan admin melakukan CRUD produk: tambah produk baru dengan detail dan gambar, edit informasi produk, hapus produk, upload model 3D |
| REQ-3.8.3 | Sistem memungkinkan admin mengelola pesanan: lihat semua pesanan, perbarui status pesanan, proses refund, cetak invoice |
| REQ-3.8.4 | Sistem memungkinkan admin melihat informasi pelanggan |
| REQ-3.8.5 | Sistem menyediakan dashboard analitik: statistik penjualan, produk populer, demografi pelanggan, laporan pendapatan |
| REQ-3.8.6 | Sistem memungkinkan admin mengelola level inventori |
| REQ-3.8.7 | Sistem mengirim peringatan stok rendah ke admin |
| REQ-3.8.8 | Sistem memungkinkan impor produk massal via CSV |

---

## 3.9 Newsletter

**Prioritas:** Rendah

**Deskripsi:** Pengguna dapat berlangganan untuk menerima update koleksi terbaru.

| ID | Kebutuhan |
|----|-----------|
| REQ-3.9.1 | Sistem memungkinkan pengguna berlangganan dengan alamat email |
| REQ-3.9.2 | Sistem memvalidasi format email sebelum berlangganan |
| REQ-3.9.3 | Sistem mengirim email konfirmasi setelah berlangganan |
| REQ-3.9.4 | Sistem memungkinkan pengguna berhenti berlangganan melalui tautan email |
| REQ-3.9.5 | Sistem terintegrasi dengan layanan email marketing |

---

## 3.10 Ulasan dan Rating (Reviews and Ratings)

**Prioritas:** Sedang

**Deskripsi:** Pelanggan dapat memberikan ulasan dan rating untuk produk yang dibeli.

| ID | Kebutuhan |
|----|-----------|
| REQ-3.10.1 | Sistem memungkinkan pembeli terverifikasi mengirim ulasan: rating bintang (1–5), ulasan tertulis, foto (opsional) |
| REQ-3.10.2 | Sistem menampilkan rata-rata rating pada kartu produk dan halaman detail |
| REQ-3.10.3 | Sistem memungkinkan pengguna memfilter ulasan berdasarkan rating |
| REQ-3.10.4 | Sistem memungkinkan pengguna menandai ulasan sebagai membantu |
| REQ-3.10.5 | Sistem memungkinkan admin memoderasi ulasan (setujui/tolak) |

---

## 3.11 Ringkasan Use Case

| Use Case | Aktor | Prioritas |
|----------|-------|-----------|
| Browse & cari produk | Guest, Customer | Tinggi |
| Lihat detail produk + 3D | Guest, Customer | Tinggi |
| Kelola keranjang | Guest, Customer | Tinggi |
| Registrasi & login | Guest | Tinggi |
| Checkout & bayar | Customer | Tinggi |
| Kelola profil & pesanan | Customer | Sedang |
| Tulis ulasan | Customer | Sedang |
| Kelola produk | Admin | Tinggi |
| Kelola pesanan | Admin | Tinggi |
| Lihat analitik | Admin | Sedang |
| Chat dengan AI | Guest, Customer | Rendah |
| Berlangganan newsletter | Guest, Customer | Rendah |

---

**Document Control**

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-04-02 | Development Team | Initial version |
