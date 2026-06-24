# 🚀 Git Commands - Ready to Copy & Paste

Perintah-perintah Git yang siap dijalankan untuk upload project ke GitHub.

## 📋 Step-by-Step Commands

### 1️⃣ Buat Repository di GitHub Dulu!

Buka https://github.com/new dan buat repository baru dengan nama `mukhbitah`

### 2️⃣ Jalankan Commands Berikut

Buka terminal di folder `mukhbitah` dan jalankan satu per satu:

```bash
# Initialize git
git init

# Add all files
git add .

# First commit
git commit -m "Initial commit: Mukhbitah hijab gallery website"

# Add remote (GANTI yourusername dengan username GitHub Anda!)
git remote add origin https://github.com/yourusername/mukhbitah.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

## ✅ Selesai!

Buka https://github.com/yourusername/mukhbitah untuk melihat repository Anda.

---

## 🔄 Update Setelah Perubahan

Setiap kali ada perubahan:

```bash
git add .
git commit -m "Deskripsi perubahan"
git push
```

## 🌿 Contoh Commit Messages

```bash
# Fitur baru
git commit -m "Add: newsletter subscription feature"

# Perbaikan bug
git commit -m "Fix: navbar mobile menu not closing"

# Update konten
git commit -m "Update: product images and descriptions"

# Styling
git commit -m "Style: improve responsive design on mobile"

# Dokumentasi
git commit -m "Docs: update README with installation guide"
```

## 🔑 Jika Diminta Password

Gunakan **Personal Access Token** sebagai password:

1. Buka: https://github.com/settings/tokens
2. Generate new token (classic)
3. Pilih scope: **repo**
4. Copy token
5. Paste sebagai password saat push

## 🐛 Troubleshooting

### Error: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/yourusername/mukhbitah.git
```

### Error: "failed to push"
```bash
git pull origin main --rebase
git push origin main
```

### Lihat status
```bash
git status
```

### Lihat history
```bash
git log --oneline
```

### Undo last commit (keep changes)
```bash
git reset --soft HEAD~1
```

---

**Pro Tip**: Commit sering dengan pesan yang jelas! 🎯
