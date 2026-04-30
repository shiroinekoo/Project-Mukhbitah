# Grey Box Testing — Keamanan (Security Testing)
## Mukhbitah - Hijab Gallery Platform

**Tipe Pengujian:** Grey Box  
**Modul:** Security  
**Prioritas:** Tinggi  
**Prepared by:** QA Team  
**Date:** April 2, 2026

---

## ST-AS-001: Hashing Password

**Pengetahuan Internal:** Bcrypt dengan cost factor 12 digunakan  
**Test:** Verifikasi password di-hash sebelum disimpan

| Verifikasi | Detail |
|------------|--------|
| Cek database | Password tidak tersimpan sebagai plaintext |
| Cek algoritma | Bcrypt dengan salt digunakan |
| Cek cost factor | Cost factor = 12 |

**Hasil yang Diharapkan:**
- Password tersimpan sebagai hash bcrypt
- Hash berbeda untuk password yang sama (karena salt)
- Tidak ada plaintext password di database atau log

**Status:** ✅ Pass — Bcrypt cost factor 12

---

## ST-AS-002: Manajemen Sesi

**Pengetahuan Internal:** JWT disimpan di HTTP-only cookie dengan flag Secure  
**Test:** Verifikasi konfigurasi cookie yang aman

| Verifikasi | Hasil |
|------------|-------|
| HTTP-only flag | ✅ Aktif — tidak dapat diakses via JavaScript |
| Secure flag | ✅ Aktif — hanya dikirim via HTTPS |
| SameSite | ✅ `Strict` — mencegah CSRF |
| Expiry | ✅ Access token 15 menit, refresh token 30 hari |

**Status:** ✅ Pass — Cookie dikonfigurasi dengan benar

---

## ST-AS-003: Perlindungan Brute Force

**Pengetahuan Internal:** Rate limiting 5 percobaan per 15 menit di endpoint login  
**Test:** Coba 10 kali login yang gagal berturut-turut

| Percobaan | Hasil yang Diharapkan |
|-----------|----------------------|
| 1–5 | Login gagal dengan pesan error normal |
| 6 | Rate limit aktif, akun terkunci sementara |
| 7–10 | Pesan: "Terlalu banyak percobaan, coba lagi dalam 15 menit" |

**Verifikasi Internal:** Middleware rate limiting di `/api/auth/login`

**Status:** ✅ Pass — Rate limiting aktif

---

## ST-AZ-001: Akses Berbasis Role

**Pengetahuan Internal:** Middleware RBAC memeriksa role dari JWT payload  
**Test:** Customer mencoba mengakses endpoint admin

| Endpoint | Role | Hasil yang Diharapkan |
|----------|------|----------------------|
| `GET /api/admin/users` | customer | 403 Forbidden |
| `POST /api/products` | customer | 403 Forbidden |
| `DELETE /api/products/:id` | customer | 403 Forbidden |
| `GET /api/admin/analytics` | customer | 403 Forbidden |
| `POST /api/products` | admin | 200 OK |

**Verifikasi Internal:** `checkRole('admin')` middleware di semua admin routes

**Status:** ✅ Pass — 403 Forbidden untuk akses tidak sah

---

## ST-AZ-002: Direct Object Reference

**Pengetahuan Internal:** Setiap query pesanan memfilter berdasarkan `userId` dari token  
**Test:** Pengguna A mencoba mengakses pesanan pengguna B

| Langkah | Aksi | Hasil yang Diharapkan |
|---------|------|----------------------|
| 1 | Login sebagai User A | Token User A diterima |
| 2 | Request `GET /api/orders/ORDER-B-123` | 403 Forbidden atau 404 Not Found |

**Verifikasi Internal:** Query: `WHERE orderId = ? AND userId = ?`

**Status:** ✅ Pass — Pengecekan otorisasi berhasil

---

## ST-DS-001: Penegakan HTTPS

**Pengetahuan Internal:** HSTS header dikonfigurasi, HTTP redirect ke HTTPS  
**Test:** Coba koneksi HTTP

| Aksi | Hasil yang Diharapkan |
|------|----------------------|
| Request ke `http://mukhbitah.com` | Redirect 301 ke `https://mukhbitah.com` |
| Cek header HSTS | `Strict-Transport-Security: max-age=31536000` |

**Status:** ✅ Pass — HSTS aktif

---

## ST-DS-002: Paparan Data Sensitif

**Pengetahuan Internal:** Serializer API mengecualikan field sensitif  
**Test:** Periksa response API untuk data sensitif

| Field | Harus Ada di Response |
|-------|----------------------|
| `passwordHash` | ❌ Tidak boleh ada |
| `refreshToken` | ❌ Tidak boleh ada |
| `paymentToken` | ❌ Tidak boleh ada |
| `email` | ✅ Boleh ada (data pengguna sendiri) |

**Verifikasi Internal:** DTO (Data Transfer Object) mengecualikan field sensitif

**Status:** ✅ Pass — Field sensitif difilter

---

## ST-PS-001: Kepatuhan PCI DSS

**Pengetahuan Internal:** Data kartu tidak pernah menyentuh server Mukhbitah  
**Test:** Verifikasi tidak ada data kartu yang disimpan

| Verifikasi | Hasil |
|------------|-------|
| Database tidak menyimpan nomor kartu | ✅ Hanya token Midtrans yang disimpan |
| Log tidak berisi data kartu | ✅ Data kartu tidak di-log |
| Tokenisasi digunakan | ✅ Midtrans menangani data kartu |

**Status:** ✅ Pass — Tokenisasi digunakan

---

## ST-PS-002: Verifikasi Webhook Pembayaran

**Pengetahuan Internal:** HMAC-SHA512 signature verification di webhook handler  
**Test:** Kirim webhook palsu tanpa signature yang valid

| Aksi | Hasil yang Diharapkan |
|------|----------------------|
| Kirim webhook tanpa header signature | 401 Unauthorized |
| Kirim webhook dengan signature salah | 401 Unauthorized |
| Kirim webhook dengan signature valid | 200 OK, pesanan diperbarui |

**Verifikasi Internal:** `crypto.createHmac('sha512', serverKey).update(payload).digest('hex')`

**Status:** ✅ Pass — Verifikasi HMAC diimplementasikan

---

## ST-SEC-001: Security Headers

**Pengetahuan Internal:** Security headers dikonfigurasi di `next.config.ts`  
**Test:** Periksa response headers

| Header | Nilai yang Diharapkan |
|--------|----------------------|
| `Content-Security-Policy` | `default-src 'self'` |
| `X-Frame-Options` | `DENY` |
| `X-Content-Type-Options` | `nosniff` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |

**Status:** ✅ Pass — Semua security headers dikonfigurasi

---

**Document Control**

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-04-02 | QA Team | Initial version |
