# 4. Kebutuhan Antarmuka Eksternal (External Interface Requirements)
## Mukhbitah - Hijab Gallery Platform

---

## 4.1 Antarmuka Pengguna (User Interfaces)

### 4.1.1 Kebutuhan UI Umum

| Kebutuhan | Detail |
|-----------|--------|
| Desain | Bersih dan elegan dengan palet warna lembut (beige, krem, emas) |
| Efek Visual | Glassmorphism pada kartu dan komponen |
| Animasi | Transisi dan animasi yang halus |
| Responsivitas | Desain responsif untuk mobile, tablet, dan desktop |
| Aksesibilitas | Kepatuhan WCAG 2.1 Level AA |

### 4.1.2 Navigasi

| Elemen | Deskripsi |
|--------|-----------|
| Navbar tetap | Logo, menu, pencarian, akun, dan ikon keranjang |
| Menu hamburger | Untuk tampilan mobile |
| Breadcrumb | Navigasi pada halaman produk |
| Footer | Quick links dan informasi kontak |

### 4.1.3 Halaman Utama

| Halaman | Deskripsi |
|---------|-----------|
| Homepage | Hero, kategori, produk unggulan, testimoni |
| Product Listing | Filter, sorting, dan grid produk |
| Product Detail | 3D viewer, info produk, ulasan |
| Shopping Cart | Daftar item dan ringkasan pesanan |
| Checkout | Pengiriman, pembayaran, konfirmasi |
| User Account | Profil, pesanan, wishlist |
| Admin Dashboard | Manajemen produk, pesanan, analitik |
| About, Contact, FAQ | Halaman informasi |

---

## 4.2 Antarmuka Perangkat Keras (Hardware Interfaces)

Tidak berlaku — aplikasi berbasis web.

---

## 4.3 Antarmuka Perangkat Lunak (Software Interfaces)

### 4.3.1 Database

| Atribut | Detail |
|---------|--------|
| Sistem | Firebase Firestore atau Supabase PostgreSQL |
| Tujuan | Menyimpan data pengguna, produk, pesanan, ulasan |
| Antarmuka | REST API atau SDK |

### 4.3.2 Payment Gateway

| Atribut | Detail |
|---------|--------|
| Sistem | Midtrans, Stripe |
| Tujuan | Memproses pembayaran |
| Antarmuka | REST API dengan webhooks |
| Metode Pembayaran | Kartu kredit, transfer bank, e-wallet, pembayaran internasional |

### 4.3.3 Layanan Email

| Atribut | Detail |
|---------|--------|
| Sistem | SendGrid, Mailgun, atau sejenis |
| Tujuan | Mengirim email transaksional |
| Antarmuka | REST API atau SMTP |
| Jenis Email | Konfirmasi pesanan, verifikasi akun, reset password, newsletter |

### 4.3.4 Cloud Storage

| Atribut | Detail |
|---------|--------|
| Sistem | Firebase Storage atau Supabase Storage |
| Tujuan | Menyimpan gambar produk dan model 3D |
| Antarmuka | SDK atau REST API |

### 4.3.5 Analitik

| Atribut | Detail |
|---------|--------|
| Sistem | Google Analytics, Mixpanel |
| Tujuan | Melacak perilaku pengguna dan konversi |
| Antarmuka | JavaScript SDK |

---

## 4.4 Antarmuka Komunikasi (Communications Interfaces)

### 4.4.1 HTTP/HTTPS

| Atribut | Detail |
|---------|--------|
| Protokol | HTTPS untuk semua komunikasi |
| Arsitektur | RESTful API |
| Format Data | JSON |
| Autentikasi | JWT Bearer token |

### 4.4.2 WebSocket

| Atribut | Detail |
|---------|--------|
| Penggunaan | Update status pesanan real-time |
| Penggunaan | Dukungan live chat |

---

## 4.5 Spesifikasi Integrasi Eksternal

### 4.5.1 Midtrans

```
Endpoint: https://api.midtrans.com/v2/charge
Method: POST
Auth: Server Key (Basic Auth)
Webhook: POST /api/payment/webhook
```

**Event Webhook:**

| Event | Deskripsi |
|-------|-----------|
| `settlement` | Pembayaran berhasil |
| `pending` | Menunggu pembayaran |
| `deny` | Pembayaran ditolak |
| `expire` | Pembayaran kedaluwarsa |
| `cancel` | Pembayaran dibatalkan |

### 4.5.2 SendGrid

```
Endpoint: https://api.sendgrid.com/v3/mail/send
Method: POST
Auth: API Key (Bearer)
```

**Template Email:**

| Template | Trigger |
|----------|---------|
| Order Confirmation | Setelah pembayaran berhasil |
| Email Verification | Setelah registrasi |
| Password Reset | Permintaan reset password |
| Newsletter | Jadwal marketing |
| Low Stock Alert | Stok produk rendah |

### 4.5.3 Firebase / Supabase SDK

| Layanan | Package | Fungsi |
|---------|---------|--------|
| Firestore | `firebase/firestore` | Database dokumen |
| Firebase Auth | `firebase/auth` | Autentikasi |
| Firebase Storage | `firebase/storage` | File storage |
| Supabase | `@supabase/supabase-js` | Database + Auth + Storage |

---

**Document Control**

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-04-02 | Development Team | Initial version |
