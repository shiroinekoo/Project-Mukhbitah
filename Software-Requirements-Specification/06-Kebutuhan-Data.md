# 6. Kebutuhan Data (Data Requirements)
## Mukhbitah - Hijab Gallery Platform

---

## 6.1 Definisi Basis Data (Database Definition)

Sistem menggunakan **Firebase Firestore** (NoSQL document database) atau **Supabase PostgreSQL** (relational database) sebagai penyimpanan data utama.

| Aspek | Detail |
|-------|--------|
| Tipe Database | NoSQL (Firestore) atau Relational (PostgreSQL) |
| Hosting | Firebase / Supabase (cloud-managed) |
| Enkripsi at-rest | Dikelola oleh Firebase/Supabase |
| Backup | Otomatis harian |
| Replikasi | Multi-region (sesuai konfigurasi Firebase/Supabase) |

---

## 6.2 Entitas Data Utama (Data Entities)

### 6.2.1 Users

| Field | Tipe | Keterangan |
|-------|------|------------|
| id | string (UUID) | Primary key |
| email | string | Unik, tervalidasi |
| passwordHash | string | Bcrypt hashed |
| name | string | Nama lengkap |
| phone | string | Format Indonesia |
| profilePicture | string? | URL gambar |
| role | enum | `customer` / `admin` |
| emailVerified | boolean | Status verifikasi |
| createdAt | Date | Timestamp pembuatan |
| updatedAt | Date | Timestamp pembaruan |

### 6.2.2 Products

| Field | Tipe | Keterangan |
|-------|------|------------|
| id | string (UUID) | Primary key |
| name | string | Nama produk |
| slug | string | URL-friendly, unik |
| description | string | Deskripsi produk |
| category | enum | `pashmina` / `segi-empat` / `instan` |
| material | string | Bahan produk |
| price | number | Harga dalam IDR |
| discountPrice | number? | Harga diskon dalam IDR |
| colors | Color[] | Array warna tersedia |
| images | string[] | Array URL gambar |
| model3D | string? | URL model 3D |
| stock | number | Total stok |
| sold | number | Total terjual |
| rating | number | Rata-rata rating |
| reviewCount | number | Jumlah ulasan |
| featured | boolean | Produk unggulan |
| active | boolean | Status aktif |
| createdAt | Date | Timestamp pembuatan |
| updatedAt | Date | Timestamp pembaruan |

### 6.2.3 Orders

| Field | Tipe | Keterangan |
|-------|------|------------|
| id | string (UUID) | Primary key |
| orderNumber | string | Unik, format `MKH-YYYYMMDD-XXX` |
| userId | string | Foreign key → Users |
| items | OrderItem[] | Array item pesanan |
| shippingAddress | Address | Alamat pengiriman |
| shippingMethod | ShippingMethod | Metode pengiriman |
| paymentMethod | string | Metode pembayaran |
| paymentStatus | enum | `pending` / `paid` / `failed` / `refunded` |
| orderStatus | enum | `pending` / `processing` / `shipped` / `delivered` / `cancelled` |
| subtotal | number | Subtotal dalam IDR |
| shippingCost | number | Biaya pengiriman |
| discount | number | Jumlah diskon |
| total | number | Total dalam IDR |
| trackingNumber | string? | Nomor resi |
| createdAt | Date | Timestamp pembuatan |
| updatedAt | Date | Timestamp pembaruan |

### 6.2.4 Reviews

| Field | Tipe | Keterangan |
|-------|------|------------|
| id | string (UUID) | Primary key |
| productId | string | Foreign key → Products |
| userId | string | Foreign key → Users |
| orderId | string | Foreign key → Orders (pembelian terverifikasi) |
| rating | number | 1–5 |
| comment | string | Teks ulasan |
| images | string[]? | Array URL foto |
| helpful | number | Jumlah vote membantu |
| verified | boolean | Status pembelian terverifikasi |
| status | enum | `pending` / `approved` / `rejected` |
| createdAt | Date | Timestamp pembuatan |
| updatedAt | Date | Timestamp pembaruan |

### 6.2.5 Cart

| Field | Tipe | Keterangan |
|-------|------|------------|
| id | string (UUID) | Primary key |
| userId | string | Foreign key → Users |
| items | CartItem[] | Array item keranjang |
| createdAt | Date | Timestamp pembuatan |
| updatedAt | Date | Timestamp pembaruan |

### 6.2.6 Wishlist

| Field | Tipe | Keterangan |
|-------|------|------------|
| id | string (UUID) | Primary key |
| userId | string | Foreign key → Users |
| productIds | string[] | Array ID produk |
| createdAt | Date | Timestamp pembuatan |
| updatedAt | Date | Timestamp pembaruan |

### 6.2.7 Newsletter

| Field | Tipe | Keterangan |
|-------|------|------------|
| id | string (UUID) | Primary key |
| email | string | Unik |
| subscribed | boolean | Status langganan |
| createdAt | Date | Timestamp pembuatan |
| updatedAt | Date | Timestamp pembaruan |

---

## 6.3 Format Data (Data Formats)

### 6.3.1 Format Standar

| Tipe Data | Format |
|-----------|--------|
| Tanggal/Waktu | ISO 8601 (`YYYY-MM-DDTHH:mm:ssZ`) |
| Harga | Integer dalam IDR (tanpa desimal) |
| UUID | RFC 4122 v4 |
| Nomor Telepon | Format Indonesia (`08XXXXXXXXXX`) |
| URL Gambar | HTTPS URL |
| Slug | Lowercase, hyphen-separated |

### 6.3.2 Format Nomor Pesanan

```
MKH-{YYYYMMDD}-{XXX}
Contoh: MKH-20260430-001
```

### 6.3.3 Format Response API

**Sukses:**
```json
{
  "success": true,
  "data": { ... },
  "message": "Operation successful"
}
```

**Error:**
```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Deskripsi error",
    "details": {}
  }
}
```

**Paginasi:**
```json
{
  "success": true,
  "data": [],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 100,
    "totalPages": 5
  }
}
```

---

## 6.4 Validasi Data (Data Validation)

### 6.4.1 Aturan Validasi Input

| Field | Aturan Validasi |
|-------|-----------------|
| Email | Format RFC 5322, unik di sistem |
| Password | Min 8 karakter, 1 huruf kapital, 1 angka |
| Nomor Telepon | Format Indonesia (`08XXXXXXXXXX`) |
| Harga | Angka positif, max Rp 10.000.000 |
| Kuantitas | Integer, 1–10 per item |
| Rating | Integer, 1–5 |
| Nama Produk | Min 3, max 100 karakter |
| Deskripsi | Max 2000 karakter |
| Komentar Ulasan | Min 10, max 500 karakter |

### 6.4.2 Aturan Bisnis Data

| Aturan | Detail |
|--------|--------|
| Stok | Harus dicek sebelum pemesanan; tidak boleh negatif |
| Ulasan | Hanya untuk pembeli terverifikasi (orderId valid) |
| Diskon | Tidak dapat melebihi harga asli |
| Gratis ongkir | Berlaku untuk subtotal ≥ Rp 200.000 |
| Pembatalan | Hanya dalam 1 jam setelah pemesanan |

---

## 6.5 Persyaratan Keamanan Data (Data Security Requirements)

| Aspek | Persyaratan |
|-------|-------------|
| **Enkripsi Transit** | TLS 1.3 untuk semua komunikasi |
| **Enkripsi at-rest** | Dikelola Firebase/Supabase |
| **Password** | Bcrypt dengan salt, cost factor 12 |
| **Data Sensitif** | AES-256 encryption |
| **Token Akses** | JWT, HTTP-only cookie, kedaluwarsa 15 menit |
| **Refresh Token** | HTTP-only cookie, kedaluwarsa 30 hari |
| **PII** | Tidak disimpan dalam log atau cache |
| **Audit Log** | Semua operasi admin dicatat |
| **Backup** | Harian otomatis, retensi 30 hari |
| **Akses Database** | Hanya melalui server-side API, tidak langsung dari client |

---

## 6.6 Indeks Database (Database Indexes)

| Koleksi | Field yang Diindeks | Tujuan |
|---------|---------------------|--------|
| products | `category`, `price` | Filter dan sorting produk |
| products | `slug` | Lookup produk berdasarkan slug |
| products | `featured`, `active` | Produk unggulan aktif |
| orders | `userId`, `createdAt` | Riwayat pesanan pengguna |
| orders | `orderStatus` | Filter pesanan berdasarkan status |
| reviews | `productId`, `rating` | Ulasan per produk |
| reviews | `userId` | Ulasan per pengguna |
| newsletter | `email` | Lookup langganan |

---

**Document Control**

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-04-02 | Development Team | Initial version |
