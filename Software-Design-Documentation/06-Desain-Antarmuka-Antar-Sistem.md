# 6. Desain Antarmuka Antar Sistem (External Interface Design)
## Mukhbitah - Hijab Gallery Platform

---

## 6.1 API Endpoints Internal

### 6.1.1 Autentikasi (Authentication)

| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| POST | `/api/auth/register` | Registrasi pengguna baru |
| POST | `/api/auth/login` | Login pengguna |
| POST | `/api/auth/logout` | Logout pengguna |
| POST | `/api/auth/forgot-password` | Permintaan reset password |
| POST | `/api/auth/reset-password` | Reset password |
| GET | `/api/auth/verify-email` | Verifikasi email |

### 6.1.2 Produk (Products)

| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| GET | `/api/products` | Ambil semua produk (dengan filter) |
| GET | `/api/products/:id` | Ambil produk berdasarkan ID |
| GET | `/api/products/slug/:slug` | Ambil produk berdasarkan slug |
| POST | `/api/products` | Buat produk baru (admin) |
| PUT | `/api/products/:id` | Perbarui produk (admin) |
| DELETE | `/api/products/:id` | Hapus produk (admin) |

### 6.1.3 Keranjang (Cart)

| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| GET | `/api/cart` | Ambil keranjang pengguna |
| POST | `/api/cart/items` | Tambah item ke keranjang |
| PUT | `/api/cart/items/:id` | Perbarui item keranjang |
| DELETE | `/api/cart/items/:id` | Hapus item keranjang |
| DELETE | `/api/cart` | Kosongkan keranjang |

### 6.1.4 Pesanan (Orders)

| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| GET | `/api/orders` | Ambil pesanan pengguna |
| GET | `/api/orders/:id` | Ambil detail pesanan |
| POST | `/api/orders` | Buat pesanan baru |
| PUT | `/api/orders/:id/status` | Perbarui status pesanan (admin) |
| POST | `/api/orders/:id/cancel` | Batalkan pesanan |

### 6.1.5 Ulasan (Reviews)

| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| GET | `/api/reviews` | Ambil ulasan (berdasarkan produk) |
| POST | `/api/reviews` | Kirim ulasan |
| PUT | `/api/reviews/:id` | Perbarui ulasan |
| DELETE | `/api/reviews/:id` | Hapus ulasan |
| POST | `/api/reviews/:id/helpful` | Tandai ulasan sebagai membantu |

### 6.1.6 Pembayaran (Payment)

| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| POST | `/api/payment/create` | Buat transaksi pembayaran |
| POST | `/api/payment/webhook` | Webhook notifikasi pembayaran |
| GET | `/api/payment/status/:id` | Cek status pembayaran |

---

## 6.2 Format Request/Response API

### 6.2.1 Response Sukses

```json
{
  "success": true,
  "data": {
    // Response data
  },
  "message": "Operation successful"
}
```

### 6.2.2 Response Error

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Error description",
    "details": {}
  }
}
```

### 6.2.3 Response Paginasi

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

## 6.3 Integrasi Layanan Eksternal (External API Integration)

### 6.3.1 Midtrans Payment Gateway

**Membuat Transaksi:**
```typescript
// Request
POST https://api.midtrans.com/v2/charge
{
  "payment_type": "bank_transfer",
  "transaction_details": {
    "order_id": "ORDER-123",
    "gross_amount": 150000
  },
  "customer_details": {
    "email": "customer@email.com",
    "first_name": "John",
    "last_name": "Doe",
    "phone": "08123456789"
  }
}
```

**Webhook Notifikasi:**
```typescript
// Incoming webhook
POST /api/payment/webhook
{
  "transaction_status": "settlement",
  "order_id": "ORDER-123",
  "gross_amount": "150000.00"
}
```

### 6.3.2 Email Service (SendGrid)

```typescript
// Request
POST https://api.sendgrid.com/v3/mail/send
{
  "personalizations": [{
    "to": [{"email": "customer@email.com"}],
    "subject": "Order Confirmation"
  }],
  "from": {"email": "noreply@mukhbitah.com"},
  "content": [{
    "type": "text/html",
    "value": "<html>...</html>"
  }]
}
```

### 6.3.3 Firebase / Supabase

| Layanan | Fungsi | SDK |
|---------|--------|-----|
| Firestore | Database dokumen | `firebase/firestore` |
| Firebase Auth | Autentikasi pengguna | `firebase/auth` |
| Firebase Storage | Penyimpanan file/gambar | `firebase/storage` |
| Supabase DB | PostgreSQL database | `@supabase/supabase-js` |
| Supabase Auth | Autentikasi alternatif | `@supabase/supabase-js` |

---

## 6.4 Header Keamanan API (Security Headers)

```typescript
const securityHeaders = {
  'Content-Security-Policy': "default-src 'self'",
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'geolocation=(), microphone=()'
};
```

---

## 6.5 Rate Limiting

| Endpoint | Batas |
|----------|-------|
| Login | 5 request per 15 menit |
| Register | 3 request per jam |
| API umum | 100 request per menit |
| Payment | 10 request per jam |

---

**Document Control**

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-04-02 | Development Team | Initial version |
