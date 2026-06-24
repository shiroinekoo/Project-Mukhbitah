# 🚀 Cara Menjalankan Website Mukhbitah

## Langkah 1: Buka Terminal/Command Prompt

### Windows:
- Tekan `Win + R`
- Ketik `cmd` atau `powershell`
- Tekan Enter

### Atau di VS Code:
- Tekan `Ctrl + ~` (backtick)
- Atau menu: Terminal → New Terminal

## Langkah 2: Masuk ke Folder Project

```bash
cd D:\Code\Mukhbitah\mukhbitah
```

## Langkah 3: Jalankan Development Server

```bash
npm run dev
```

## Langkah 4: Buka Browser

Tunggu sampai muncul pesan:
```
✓ Ready in ...
- Local:   http://localhost:3000
```

Kemudian buka browser dan akses:
```
http://localhost:3000
```

## 🎉 Selesai!

Website akan terbuka dan Anda akan melihat:
- Homepage dengan hero section
- Kategori produk
- Featured products
- Testimonials
- Newsletter section

## 🔄 Untuk Stop Server

Tekan `Ctrl + C` di terminal

## 📱 Akses dari HP/Device Lain

Jika ingin akses dari HP di network yang sama:
```
http://16.7.4.200:3000
```

## ⚠️ Troubleshooting

### Port 3000 sudah digunakan?
```bash
# Gunakan port lain
npm run dev -- -p 3001
```

### Error "Module not found"?
```bash
# Install ulang dependencies
npm install
```

### Error lainnya?
```bash
# Hapus cache dan install ulang
rm -rf node_modules .next
npm install
npm run dev
```

## 📚 Perintah Lainnya

```bash
# Build untuk production
npm run build

# Jalankan production server
npm start

# Check linting
npm run lint
```

## 🎯 Halaman yang Tersedia

- Homepage: http://localhost:3000
- Products: http://localhost:3000/products
- Cart: http://localhost:3000/cart
- About: http://localhost:3000/about
- Contact: http://localhost:3000/contact

---

**Happy Coding! 🚀**
