# 2. Deskripsi Umum Sistem (Overall Description)
## Mukhbitah - Hijab Gallery Platform

---

## 2.1 Perspektif Produk (Product Perspective)

Mukhbitah adalah aplikasi web gallery mandiri (standalone) yang terintegrasi dengan layanan-layanan berikut:

```
┌─────────────────────────────────────────────────────────┐
│                  Mukhbitah Platform                      │
│                                                         │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐             │
│  │ Frontend │  │ Backend  │  │ Database │             │
│  │ Next.js  │  │ API      │  │ Firebase │             │
│  └──────────┘  └──────────┘  └──────────┘             │
└─────────────────────────────────────────────────────────┘
         │              │              │
         ▼              ▼              ▼
  ┌──────────┐   ┌──────────┐   ┌──────────┐
  │ Midtrans │   │ SendGrid │   │ Firebase │
  │  Stripe  │   │ Mailgun  │   │ Storage  │
  └──────────┘   └──────────┘   └──────────┘
         │
         ▼
  ┌──────────┐   ┌──────────┐
  │Instagram │   │ Google   │
  │ Social   │   │Analytics │
  └──────────┘   └──────────┘
```

**Integrasi Eksternal:**
- Payment gateways (Midtrans, Stripe)
- Layanan email (SendGrid/Mailgun)
- Cloud storage (Firebase/Supabase)
- Platform media sosial (Instagram)
- Layanan analitik (Google Analytics)

---

## 2.2 Fungsi Utama Produk (Product Functions)

| No | Fungsi | Deskripsi |
|----|--------|-----------|
| 1 | **Manajemen Produk** | Browse, cari, filter, dan lihat detail produk dengan model 3D |
| 2 | **Keranjang Belanja** | Tambah/hapus item, update kuantitas, kalkulasi total |
| 3 | **Manajemen Pengguna** | Registrasi, autentikasi, profil, riwayat pesanan, wishlist |
| 4 | **Proses Checkout** | Manajemen alamat pengiriman, pemrosesan pembayaran, konfirmasi pesanan |
| 5 | **Fungsi Admin** | CRUD produk, manajemen pesanan, manajemen pelanggan, analitik |
| 6 | **AI Assistant** | Rekomendasi produk, saran gaya, chatbot dukungan pelanggan |
| 7 | **Ulasan & Rating** | Ulasan dari pembeli terverifikasi, rating bintang, moderasi |
| 8 | **Newsletter** | Langganan email untuk update koleksi terbaru |

---

## 2.3 Karakteristik Pengguna (User Classes and Characteristics)

### 2.3.1 Guest Users (Pengguna Tamu)

| Atribut | Detail |
|---------|--------|
| Deskripsi | Pengunjung yang menjelajah tanpa membuat akun |
| Keahlian Teknis | Kemampuan browsing web dasar |
| Frekuensi Penggunaan | Sesekali |
| Fungsi yang Tersedia | Browse produk, lihat detail, tambah ke keranjang |

### 2.3.2 Registered Customers (Pelanggan Terdaftar)

| Atribut | Detail |
|---------|--------|
| Deskripsi | Pengguna dengan akun yang dapat melakukan pembelian |
| Keahlian Teknis | Dasar hingga menengah |
| Frekuensi Penggunaan | Reguler |
| Fungsi yang Tersedia | Semua fungsi tamu + checkout, pelacakan pesanan, wishlist |

### 2.3.3 Administrators (Administrator)

| Atribut | Detail |
|---------|--------|
| Deskripsi | Staf yang mengelola platform |
| Keahlian Teknis | Menengah hingga mahir |
| Frekuensi Penggunaan | Harian |
| Fungsi yang Tersedia | Manajemen produk, pemrosesan pesanan, analitik |

---

## 2.4 Lingkungan Operasi (Operating Environment)

| Komponen | Spesifikasi |
|----------|-------------|
| **Client-side** | Browser modern (Chrome, Firefox, Safari, Edge) |
| **Server-side** | Node.js runtime environment |
| **Database** | Firebase Firestore atau Supabase PostgreSQL |
| **Hosting** | Vercel atau platform cloud sejenis |
| **Mobile** | Desain responsif untuk browser iOS dan Android |

---

## 2.5 Batasan Desain dan Implementasi (Design and Implementation Constraints)

- Harus menggunakan Next.js 15+ dengan App Router
- Harus responsif (desain mobile-first)
- Harus mendukung browser modern (2 versi terakhir)
- Harus mematuhi regulasi galeri dan pameran Indonesia
- Harus terintegrasi dengan payment gateway Indonesia
- Harus dimuat dalam 3 detik pada koneksi 4G

---

## 2.6 Asumsi dan Dependensi (Assumptions and Dependencies)

### Asumsi

| Asumsi |
|--------|
| Pengguna memiliki koneksi internet |
| Pengguna memiliki browser web modern |
| Payment gateway beroperasi normal |
| Layanan pihak ketiga (email, storage) tersedia |

### Dependensi

| Dependensi | Tipe |
|------------|------|
| Next.js framework | Framework utama |
| React library | UI library |
| Tailwind CSS | Styling |
| Firebase/Supabase services | Backend services |
| Payment gateway APIs | Pembayaran |
| Email service provider | Notifikasi |

---

**Document Control**

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-04-02 | Development Team | Initial version |
