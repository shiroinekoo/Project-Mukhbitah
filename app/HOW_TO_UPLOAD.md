# 📤 Cara Upload Dokumentasi ke GitHub

> **Panduan sederhana untuk upload folder docs ke repository**

---

## 🚀 Langkah-langkah Upload

### **Metode 1: Upload Folder Docs Saja (Recommended)**

Source code tetap aman, hanya menambahkan dokumentasi.

```bash
# 1. Masuk ke folder mukhbitah
cd mukhbitah

# 2. Add folder docs
git add docs/

# 3. Commit
git commit -m "docs: add complete software documentation

- Add Software Requirements Specification (SRS)
- Add Software Design Documentation (SDD)
- Add Software Testing Documentation (STD) with Robustness Testing
- Add Software User Documentation (User Guide)
- Add Test Plan

Total: 5 documents, ~210 pages, 100% coverage"

# 4. Push ke GitHub
git push origin main
```

**Note**: Ganti `main` dengan nama branch Anda jika berbeda (misalnya `master`)

---

### **Metode 2: Replace Semua dengan Docs (Destructive)**

⚠️ **PERINGATAN**: Ini akan menghapus semua source code!

```bash
# 1. BACKUP DULU! (WAJIB!)
cd ~
git clone https://github.com/shiroinekoo/Mukhbitah.git Mukhbitah-backup

# 2. Masuk ke repository
cd mukhbitah

# 3. Hapus semua file dari git
git rm -rf .

# 4. Siapkan README untuk docs
cp README-DOCS.md README.md

# 5. Add folder docs dan file pendukung
git add docs/
git add README.md
git add DOCUMENTATION_INDEX.md
git add .gitignore

# 6. Commit
git commit -m "docs: replace repository with complete documentation"

# 7. Force push
git push origin main --force
```

---

## 📋 Verifikasi Setelah Upload

### Cek di GitHub

Buka: https://github.com/shiroinekoo/Mukhbitah

Pastikan:
- ✅ Folder `docs/` muncul di repository
- ✅ Semua file dokumentasi ter-upload
- ✅ Link di README.md berfungsi

---

## 🔍 Troubleshooting

### Problem: Authentication Failed

```bash
# Solution 1: Gunakan Personal Access Token
git remote set-url origin https://YOUR_TOKEN@github.com/shiroinekoo/Mukhbitah.git

# Solution 2: Gunakan SSH
git remote set-url origin git@github.com:shiroinekoo/Mukhbitah.git
```

### Problem: Git Push Rejected

```bash
# Solution: Pull dulu
git pull origin main

# Jika ada conflict, resolve dulu
git status
# Edit file yang conflict
git add .
git commit -m "resolve conflicts"
git push origin main
```

---

## ✅ Selesai!

Dokumentasi Anda sekarang tersedia di:
**https://github.com/shiroinekoo/Mukhbitah/tree/main/docs**

---

**Good luck!** 🚀📚✨
