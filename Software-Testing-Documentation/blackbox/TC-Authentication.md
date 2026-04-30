# Black Box Testing — Autentikasi Pengguna (User Authentication)
## Mukhbitah - Hijab Gallery Platform

**Tipe Pengujian:** Black Box  
**Modul:** User Authentication  
**Prioritas:** Tinggi  
**Prepared by:** QA Team  
**Date:** April 2, 2026

---

## TC-UA-001: Registrasi Pengguna

**Prioritas:** Tinggi  
**Prasyarat:** Pengguna belum login

| Langkah | Aksi |
|---------|------|
| 1 | Navigasi ke halaman registrasi |
| 2 | Isi email, password, nama, nomor telepon |
| 3 | Klik "Daftar" |

**Hasil yang Diharapkan:**
- Validasi berhasil untuk input yang valid
- Akun pengguna dibuat
- Email verifikasi dikirim
- Pengguna diarahkan ke halaman verifikasi email

**Status:** ✅ Pass

---

## TC-UA-002: Validasi Format Email

**Prioritas:** Tinggi  
**Prasyarat:** Pengguna berada di halaman registrasi

| Langkah | Aksi |
|---------|------|
| 1 | Masukkan email tidak valid (misal: "bukanemail") |
| 2 | Coba submit form |

**Hasil yang Diharapkan:**
- Pesan error: "Masukkan email yang valid"
- Form tidak tersubmit

**Status:** ✅ Pass

---

## TC-UA-003: Validasi Kekuatan Password

**Prioritas:** Tinggi  
**Prasyarat:** Pengguna berada di halaman registrasi

| Langkah | Aksi |
|---------|------|
| 1 | Masukkan password lemah (misal: "123") |
| 2 | Coba submit form |

**Hasil yang Diharapkan:**
- Pesan error: "Password minimal 8 karakter dengan 1 huruf kapital dan 1 angka"
- Form tidak tersubmit

**Status:** ✅ Pass

---

## TC-UA-004: Login Pengguna

**Prioritas:** Tinggi  
**Prasyarat:** Pengguna memiliki akun yang sudah diverifikasi

| Langkah | Aksi |
|---------|------|
| 1 | Navigasi ke halaman login |
| 2 | Masukkan email dan password yang benar |
| 3 | Klik "Masuk" |

**Hasil yang Diharapkan:**
- Pengguna berhasil diautentikasi
- Diarahkan ke homepage atau halaman sebelumnya
- Menu pengguna menampilkan status login

**Status:** ✅ Pass

---

## TC-UA-005: Kredensial Login Tidak Valid

**Prioritas:** Tinggi  
**Prasyarat:** Pengguna berada di halaman login

| Langkah | Aksi |
|---------|------|
| 1 | Masukkan email atau password yang salah |
| 2 | Klik "Masuk" |

**Hasil yang Diharapkan:**
- Pesan error: "Email atau password tidak valid"
- Pengguna tetap di halaman login
- Tidak ada informasi sensitif yang bocor

**Status:** ✅ Pass

---

## TC-UA-006: Reset Password

**Prioritas:** Sedang  
**Prasyarat:** Pengguna memiliki akun

| Langkah | Aksi |
|---------|------|
| 1 | Klik "Lupa Password" |
| 2 | Masukkan email |
| 3 | Klik "Kirim Link Reset" |
| 4 | Cek email dan klik link reset |
| 5 | Masukkan password baru |
| 6 | Submit |

**Hasil yang Diharapkan:**
- Email reset dikirim
- Link reset valid selama 1 jam
- Password berhasil diperbarui
- Pengguna dapat login dengan password baru

**Status:** ✅ Pass

---

## TC-UA-007: Login dengan Google

**Prioritas:** Sedang  
**Prasyarat:** Pengguna memiliki akun Google

| Langkah | Aksi |
|---------|------|
| 1 | Klik tombol "Login dengan Google" |
| 2 | Pilih akun Google |
| 3 | Izinkan akses |

**Hasil yang Diharapkan:**
- Pengguna berhasil login
- Profil diisi dari data Google
- Diarahkan ke homepage

**Status:** ✅ Pass

---

## TC-UA-008: Logout dari Semua Perangkat

**Prioritas:** Sedang  
**Prasyarat:** Pengguna login di beberapa perangkat

| Langkah | Aksi |
|---------|------|
| 1 | Navigasi ke pengaturan akun |
| 2 | Klik "Logout dari Semua Perangkat" |
| 3 | Konfirmasi |

**Hasil yang Diharapkan:**
- Semua sesi aktif dihentikan
- Pengguna diarahkan ke halaman login
- Perangkat lain juga ter-logout

**Status:** ✅ Pass

---

**Document Control**

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-04-02 | QA Team | Initial version |
