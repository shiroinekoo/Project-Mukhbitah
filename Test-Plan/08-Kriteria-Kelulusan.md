# 8. Kriteria Kelulusan (Exit Parameters)
## Mukhbitah - Platform Gallery Hijab

**Version:** 1.0  
**Date:** April 2, 2026  
**Prepared by:** QA Team

---

## 8.1 Kriteria Masuk (Entry Criteria)

Sebelum memulai setiap fase, kondisi berikut harus terpenuhi:

### Unit Testing
- ✅ Pengembangan modul selesai
- ✅ Code review sudah dilakukan
- ✅ Unit test cases sudah ditulis

### Integration Testing
- ✅ Unit testing selesai dengan hasil lulus
- ✅ Komponen sudah diintegrasikan
- ✅ Lingkungan integration testing siap

### System Testing
- ✅ Integration testing selesai
- ✅ Staging environment siap dan dikonfigurasi
- ✅ Data uji sudah disiapkan
- ✅ E2E test scripts sudah ditulis

### UAT
- ✅ System testing selesai
- ✅ Semua defect Critical dan High sudah diperbaiki
- ✅ Lingkungan UAT siap
- ✅ Pengguna tester sudah di-briefing

---

## 8.2 Kriteria Kelulusan Per Fase

### 8.2.1 Unit Testing — Lulus Jika:

| Kriteria | Target | Kondisi Gagal |
|----------|--------|---------------|
| Code coverage | ≥ 80% | < 80% |
| Unit test pass rate | 100% | Ada test yang gagal |
| Defect Critical | 0 terbuka | Ada defect critical |

---

### 8.2.2 Integration Testing — Lulus Jika:

| Kriteria | Target | Kondisi Gagal |
|----------|--------|---------------|
| Integration test pass rate | 100% | Ada test yang gagal |
| Defect High/Critical | 0 terbuka | Ada defect high/critical |
| Laporan integration test | Disetujui QA Lead | Belum disetujui |

---

### 8.2.3 System Testing — Lulus Jika:

| Kriteria | Target | Kondisi Gagal |
|----------|--------|---------------|
| Critical test cases | 100% lulus | Ada yang gagal |
| High priority test cases | ≥ 95% lulus | < 95% |
| Medium priority test cases | ≥ 90% lulus | < 90% |
| Defect Critical/High | 0 terbuka | Ada yang terbuka |
| Lighthouse Performance score | ≥ 90 semua halaman | Ada halaman < 90 |
| Page load time | < 3 detik (4G) | > 3 detik |
| Security tests | Semua lulus | Ada yang gagal |
| Compatibility tests | Semua browser utama lulus | Ada browser utama gagal |

---

### 8.2.4 UAT — Lulus Jika:

| Kriteria | Target | Kondisi Gagal |
|----------|--------|---------------|
| UAT test cases dieksekusi | 100% | Ada yang belum dieksekusi |
| Feedback pengguna ditangani | Semua feedback P1/P2 | Ada feedback P1/P2 yang diabaikan |
| Sign-off stakeholder | Diperoleh | Belum diperoleh |

---

### 8.2.5 Production Release — Lulus Jika:

| Kriteria | Target | Kondisi Gagal |
|----------|--------|---------------|
| Semua exit criteria fase sebelumnya | Terpenuhi | Ada yang belum terpenuhi |
| Regression testing | Semua lulus | Ada yang gagal |
| Smoke tests | Semua lulus | Ada yang gagal |
| Deployment checklist | Lengkap | Ada item yang belum selesai |
| Rollback plan | Tersedia dan diuji | Belum tersedia |

---

## 8.3 Definisi Pass / Fail per Test Case

### Test Case PASS jika:
- Semua langkah dieksekusi sesuai prosedur
- Hasil aktual sesuai dengan hasil yang diharapkan
- Tidak ada error atau exception yang tidak terduga
- Performa dalam batas yang ditentukan

### Test Case FAIL jika:
- Hasil aktual berbeda dari hasil yang diharapkan
- Sistem crash atau menampilkan error yang tidak seharusnya
- Performa melebihi batas yang ditentukan
- Data tidak tersimpan atau tersimpan dengan tidak benar

### Test Case BLOCKED jika:
- Prasyarat tidak terpenuhi
- Lingkungan testing tidak tersedia
- Dependensi pada test case lain yang gagal

---

## 8.4 Kriteria Kelulusan Per Fitur

### Katalog Produk — Lulus Jika:
- Filter menghasilkan produk yang tepat untuk setiap kombinasi filter
- Pencarian mengembalikan hasil yang relevan
- Detail produk menampilkan semua informasi dengan benar
- 3D viewer berfungsi di semua browser utama

### Keranjang Belanja — Lulus Jika:
- Kalkulasi subtotal, ongkir, dan total akurat 100%
- Gratis ongkir diterapkan tepat pada threshold Rp 200.000
- Keranjang persisten setelah logout dan login ulang
- Stok tidak berkurang saat item ditambah ke keranjang (hanya saat checkout)

### Autentikasi — Lulus Jika:
- Login berhasil dengan kredensial valid
- Login gagal dengan kredensial tidak valid (tanpa informasi sensitif bocor)
- Email verifikasi terkirim dalam 5 menit
- Reset password berfungsi dan link kedaluwarsa setelah 1 jam
- Rate limiting aktif setelah 5 percobaan gagal

### Checkout & Pembayaran — Lulus Jika:
- Alur checkout lengkap berhasil dari awal hingga konfirmasi
- Nomor pesanan unik dibuat dengan format yang benar
- Email konfirmasi terkirim dalam 5 menit setelah pembayaran
- Stok berkurang secara atomic setelah checkout berhasil
- Webhook pembayaran diverifikasi dengan HMAC signature

### Keamanan — Lulus Jika:
- Tidak ada SQL injection yang berhasil
- Tidak ada XSS yang berhasil
- CSRF protection aktif
- Endpoint admin tidak dapat diakses oleh customer
- Password tersimpan sebagai bcrypt hash (bukan plaintext)
- Semua komunikasi menggunakan HTTPS

---

## 8.5 Kondisi Penghentian Pengujian (Suspension Criteria)

Pengujian dihentikan sementara jika:

| Kondisi | Tindakan |
|---------|----------|
| Lebih dari 30% test cases gagal dalam satu sesi | Hentikan, laporkan ke QA Lead dan Developer |
| Defect Critical ditemukan yang memblokir semua testing | Hentikan, eskalasi segera |
| Lingkungan testing tidak stabil | Hentikan, perbaiki environment |
| Data uji rusak atau tidak konsisten | Hentikan, reset data uji |

**Kondisi Melanjutkan Pengujian:**
- Defect yang memblokir sudah diperbaiki dan diverifikasi
- Lingkungan testing stabil kembali
- Data uji sudah di-reset dan diverifikasi

---

## 8.6 Keputusan Go / No-Go

### GO (Lanjut ke Production) jika:
- ✅ Semua kriteria kelulusan terpenuhi
- ✅ Tidak ada defect Critical/High yang terbuka
- ✅ UAT sign-off diperoleh
- ✅ Rollback plan tersedia
- ✅ Tim on-call siap untuk monitoring post-deployment

### NO-GO (Tunda Deployment) jika:
- ❌ Ada defect Critical yang terbuka
- ❌ Critical test cases pass rate < 100%
- ❌ UAT sign-off belum diperoleh
- ❌ Performance targets tidak terpenuhi
- ❌ Security vulnerabilities kritis belum ditangani

---

## 8.7 Sign-off Pengujian

Dokumen Test Plan ini telah ditinjau dan disetujui oleh:

| Peran | Nama | Tanda Tangan | Tanggal |
|-------|------|--------------|---------|
| QA Lead | | | |
| Technical Lead | | | |
| Project Manager | | | |
| Product Owner | | | |

---

**Document Control**

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-04-02 | QA Team | Initial version |
