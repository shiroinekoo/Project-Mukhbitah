# 1. Panduan Instalasi dan Konfigurasi
## Mukhbitah - Platform Gallery Hijab

**Version:** 1.0  
**Date:** April 2, 2026  
**Untuk:** Pengguna & Developer

---

## 1.1 Gambaran Umum

Mukhbitah adalah aplikasi web berbasis browser. Tidak diperlukan instalasi perangkat lunak khusus untuk pengguna akhir — cukup buka browser dan akses website. Bagian ini mencakup kebutuhan sistem, konfigurasi browser, dan panduan setup untuk developer.

---

## 1.2 Kebutuhan Sistem Minimum

### Untuk Pengguna Akhir

| Komponen | Minimum | Rekomendasi |
|----------|---------|-------------|
| **Browser** | Chrome 90+, Firefox 88+, Safari 14+, Edge 90+ | Versi terbaru |
| **Koneksi Internet** | 3G (1 Mbps) | 4G/WiFi (10 Mbps+) |
| **RAM Perangkat** | 2 GB | 4 GB+ |
| **Layar** | 320px lebar | 1280px+ |
| **JavaScript** | Harus diaktifkan | — |
| **Cookies** | Harus diaktifkan | — |

### Untuk Perangkat Mobile

| Platform | Versi Minimum |
|----------|---------------|
| iOS (Safari) | iOS 14+ |
| Android (Chrome) | Android 8.0+ |
| Samsung Internet | Versi 13+ |

---

## 1.3 Konfigurasi Browser

### Mengaktifkan JavaScript

**Google Chrome:**
1. Buka `chrome://settings/content/javascript`
2. Pastikan "Situs dapat menggunakan JavaScript" aktif

**Mozilla Firefox:**
1. Ketik `about:config` di address bar
2. Cari `javascript.enabled`
3. Pastikan nilainya `true`

**Safari:**
1. Buka **Preferensi** → **Keamanan**
2. Centang "Aktifkan JavaScript"

### Mengaktifkan Cookies

**Google Chrome:**
1. Buka `chrome://settings/cookies`
2. Pilih "Izinkan semua cookie"

**Mozilla Firefox:**
1. Buka **Pengaturan** → **Privasi & Keamanan**
2. Pilih "Standar" atau "Kustom" dengan cookies diizinkan

### Mengizinkan Pop-up (untuk Pembayaran)

Beberapa metode pembayaran memerlukan pop-up:

**Chrome:**
1. Klik ikon kunci di address bar saat di mukhbitah.com
2. Pilih **Pop-up dan pengalihan** → **Izinkan**

---

## 1.4 Mengakses Website

```
URL: https://www.mukhbitah.com
```

1. Buka browser pilihan Anda
2. Ketik `www.mukhbitah.com` di address bar
3. Tekan **Enter**
4. Website akan dimuat dalam 2–3 detik

> **Catatan:** Pastikan koneksi internet aktif. Untuk pengalaman terbaik, gunakan koneksi WiFi atau 4G.

---

## 1.5 Setup untuk Developer (Local Development)

### Prasyarat

| Tools | Versi |
|-------|-------|
| Node.js | 18.0+ |
| npm | 9.0+ atau yarn 1.22+ |
| Git | 2.30+ |

### Langkah Instalasi

```bash
# 1. Clone repository
git clone https://github.com/mukhbitah/mukhbitah-web.git
cd mukhbitah-web

# 2. Install dependencies
npm install

# 3. Salin file environment
cp .env.example .env.local

# 4. Isi variabel environment di .env.local
# (lihat bagian 1.6 untuk detail)

# 5. Jalankan development server
npm run dev

# 6. Buka browser
# http://localhost:3000
```

### Build untuk Production

```bash
# Build
npm run build

# Jalankan production server
npm start
```

---

## 1.6 Konfigurasi Environment Variables

Salin `.env.example` menjadi `.env.local` dan isi nilai berikut:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Midtrans Payment Gateway
MIDTRANS_SERVER_KEY=your_server_key
NEXT_PUBLIC_MIDTRANS_CLIENT_KEY=your_client_key
MIDTRANS_IS_PRODUCTION=false

# SendGrid Email
SENDGRID_API_KEY=your_sendgrid_key
EMAIL_FROM=noreply@mukhbitah.com

# JWT Secret
JWT_SECRET=your_jwt_secret_min_32_chars
JWT_REFRESH_SECRET=your_refresh_secret_min_32_chars

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

> ⚠️ **Jangan pernah commit file `.env.local` ke repository.**

---

## 1.7 Deployment ke Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Login ke Vercel
vercel login

# Deploy
vercel --prod
```

Atau hubungkan repository GitHub ke Vercel Dashboard untuk auto-deploy.

---

## 1.8 Pembaruan Aplikasi

Mukhbitah diperbarui secara otomatis di server. Pengguna tidak perlu melakukan apa pun — cukup refresh browser untuk mendapatkan versi terbaru.

**Untuk developer:**
```bash
git pull origin main
npm install
npm run build
```

---

**Document Control**

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-04-02 | Development Team | Initial version |
