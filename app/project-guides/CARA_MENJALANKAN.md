# 🎯 CARA MENJALANKAN WEBSITE MUKHBITAH

## ✅ STATUS SEKARANG: SERVER SUDAH BERJALAN!

Website Mukhbitah sudah berjalan di komputer Anda!

---

## 🌐 CARA AKSES WEBSITE

### **Langkah 1: Buka Browser**
Buka browser favorit Anda (Chrome, Firefox, Edge, dll)

### **Langkah 2: Ketik URL**
Ketik salah satu URL ini di address bar:

```
http://localhost:3000
```

atau

```
http://127.0.0.1:3000
```

### **Langkah 3: Tekan Enter**
Website akan terbuka! 🎉

---

## 📱 HALAMAN YANG BISA DIKUNJUNGI

Setelah website terbuka, Anda bisa navigasi ke:

| Halaman | URL | Isi |
|---------|-----|-----|
| **Homepage** | `http://localhost:3000` | Hero, Kategori, Produk Pilihan |
| **Produk** | `http://localhost:3000/products` | Semua produk dengan filter |
| **Keranjang** | `http://localhost:3000/cart` | Shopping cart |
| **Tentang** | `http://localhost:3000/about` | About Mukhbitah |
| **Kontak** | `http://localhost:3000/contact` | Form kontak |

---

## 🔄 JIKA SERVER BERHENTI

Jika website tidak bisa diakses, ikuti langkah ini:

### **1. Buka Terminal/Command Prompt**

**Windows:**
- Tekan tombol `Windows + R`
- Ketik `cmd` atau `powershell`
- Tekan Enter

**Atau di VS Code:**
- Tekan `Ctrl + ~` (tilde/backtick)
- Atau klik menu: Terminal → New Terminal

### **2. Masuk ke Folder Project**

Ketik perintah ini:
```bash
cd D:\Code\Mukhbitah\mukhbitah
```
Tekan Enter

### **3. Jalankan Server**

Ketik perintah ini:
```bash
npm run dev
```
Tekan Enter

### **4. Tunggu Sampai Muncul Pesan**

Tunggu beberapa detik sampai muncul:
```
▲ Next.js 16.2.4 (Turbopack)
- Local:   http://localhost:3000
✓ Ready in ...
```

### **5. Buka Browser**

Sekarang buka browser dan akses:
```
http://localhost:3000
```

---

## 🛑 CARA STOP SERVER

Jika ingin stop server:

1. Klik di terminal/command prompt
2. Tekan `Ctrl + C`
3. Ketik `Y` jika diminta konfirmasi
4. Tekan Enter

---

## 📱 AKSES DARI HP/TABLET

Jika ingin buka website dari HP/tablet di WiFi yang sama:

1. Pastikan HP dan komputer terhubung ke WiFi yang sama
2. Buka browser di HP
3. Ketik URL ini:
   ```
   http://16.7.4.200:3000
   ```
4. Website akan terbuka di HP! 📱

---

## ⚠️ TROUBLESHOOTING

### **Problem 1: "This site can't be reached"**

**Solusi:**
- Pastikan server sudah jalan (lihat cara di atas)
- Cek apakah ada typo di URL
- Coba refresh browser (F5)

### **Problem 2: "Port 3000 is already in use"**

**Solusi:**
```bash
# Gunakan port lain
npm run dev -- -p 3001
```
Lalu akses: `http://localhost:3001`

### **Problem 3: Error saat `npm run dev`**

**Solusi:**
```bash
# Install ulang dependencies
npm install
npm run dev
```

### **Problem 4: Halaman blank/error**

**Solusi:**
```bash
# Clear cache dan restart
rm -rf .next
npm run dev
```

---

## 🎨 APA YANG AKAN ANDA LIHAT?

Setelah website terbuka, Anda akan melihat:

### **Homepage:**
```
┌─────────────────────────────────────┐
│         NAVBAR                      │
│  Mukhbitah  Home Products About     │
├─────────────────────────────────────┤
│                                     │
│  HERO SECTION                       │
│  "Elegance in Every Layer"          │
│  [Belanja Sekarang]                 │
│                                     │
├─────────────────────────────────────┤
│  KATEGORI                           │
│  🧣 Pashmina  ◻️ Segi Empat  ⚡ Instan│
├─────────────────────────────────────┤
│  PRODUK PILIHAN                     │
│  [Product 1] [Product 2] [Product 3]│
├─────────────────────────────────────┤
│  TESTIMONIAL                        │
│  ⭐⭐⭐⭐⭐ Customer Reviews          │
├─────────────────────────────────────┤
│  NEWSLETTER                         │
│  Dapatkan Penawaran Spesial         │
└─────────────────────────────────────┘
```

### **Fitur yang Bisa Dicoba:**
- ✅ Klik kategori produk
- ✅ Hover mouse di product card (ada animasi!)
- ✅ Klik "Tambah ke Keranjang"
- ✅ Buka halaman Products
- ✅ Coba filter dan search
- ✅ Toggle Grid/List view
- ✅ Buka Shopping Cart
- ✅ Ubah quantity produk
- ✅ Coba di mobile (responsive!)

---

## 🎯 QUICK COMMANDS

```bash
# Jalankan development server
npm run dev

# Stop server
Ctrl + C

# Build untuk production
npm run build

# Jalankan production server
npm start

# Check code quality
npm run lint
```

---

## 📞 BUTUH BANTUAN?

Jika masih ada masalah:

1. **Cek dokumentasi lengkap:**
   - `README.md` - Dokumentasi utama
   - `QUICKSTART.md` - Panduan cepat
   - `TROUBLESHOOTING.md` - Solusi masalah

2. **Cek terminal:**
   - Lihat pesan error di terminal
   - Screenshot dan cari solusinya

3. **Restart dari awal:**
   ```bash
   # Stop server (Ctrl + C)
   # Hapus cache
   rm -rf .next node_modules
   # Install ulang
   npm install
   # Jalankan lagi
   npm run dev
   ```

---

## 🎉 SELAMAT MENCOBA!

Website Mukhbitah siap digunakan!

**Tips:**
- Buka di Chrome untuk pengalaman terbaik
- Coba resize browser untuk lihat responsive design
- Buka DevTools (F12) untuk lihat animasi
- Coba di mobile untuk lihat mobile version

**Enjoy! 🚀🧕✨**

---

**Last Updated:** April 30, 2026
