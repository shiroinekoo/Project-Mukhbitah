# 📤 Panduan Upload ke GitHub

Panduan lengkap untuk meng-upload project Mukhbitah ke GitHub.

## 📋 Prerequisites

1. **Git** sudah terinstall ([Download](https://git-scm.com/))
2. **GitHub Account** ([Sign up](https://github.com/signup))
3. **Git configured** dengan username dan email Anda

```bash
# Check git configuration
git config --global user.name
git config --global user.email

# Jika belum di-set, jalankan:
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## 🚀 Langkah-langkah Upload

### 1. Buat Repository Baru di GitHub

1. Buka [GitHub](https://github.com)
2. Klik tombol **"+"** di pojok kanan atas → **"New repository"**
3. Isi form:
   - **Repository name**: `mukhbitah` (atau nama lain yang Anda inginkan)
   - **Description**: `Galeri koleksi kerudung - Hijab Style & Fashion`
   - **Visibility**: Pilih **Public** atau **Private**
   - **JANGAN** centang "Initialize this repository with a README" (karena kita sudah punya)
4. Klik **"Create repository"**

### 2. Initialize Git di Project Lokal

Buka terminal/command prompt di folder `mukhbitah`:

```bash
# Masuk ke folder mukhbitah
cd mukhbitah

# Initialize git repository
git init

# Add semua file ke staging
git add .

# Commit pertama
git commit -m "Initial commit: Mukhbitah gallery website"
```

### 3. Connect ke GitHub Repository

Ganti `yourusername` dan `mukhbitah` dengan username GitHub dan nama repository Anda:

```bash
# Add remote repository
git remote add origin https://github.com/yourusername/mukhbitah.git

# Verify remote
git remote -v
```

### 4. Push ke GitHub

```bash
# Push ke branch main
git branch -M main
git push -u origin main
```

Masukkan username dan password GitHub Anda jika diminta.

> **Note**: Jika menggunakan 2FA, Anda perlu menggunakan **Personal Access Token** sebagai password.

## 🔑 Setup Personal Access Token (Jika Diperlukan)

Jika GitHub meminta token:

1. Buka [GitHub Settings → Developer settings → Personal access tokens](https://github.com/settings/tokens)
2. Klik **"Generate new token (classic)"**
3. Beri nama: `Mukhbitah Project`
4. Pilih scope: **repo** (full control of private repositories)
5. Klik **"Generate token"**
6. **COPY TOKEN** (Anda tidak akan bisa melihatnya lagi!)
7. Gunakan token ini sebagai password saat push

## ✅ Verifikasi Upload

1. Buka repository Anda di GitHub: `https://github.com/yourusername/mukhbitah`
2. Pastikan semua file sudah ter-upload
3. README.md akan otomatis ditampilkan di halaman utama

## 📝 Update Repository (Setelah Perubahan)

Setiap kali Anda membuat perubahan:

```bash
# Check status
git status

# Add perubahan
git add .

# Commit dengan pesan yang jelas
git commit -m "Update: deskripsi perubahan"

# Push ke GitHub
git push
```

## 🌿 Branching Strategy (Optional)

Untuk development yang lebih terorganisir:

```bash
# Buat branch baru untuk fitur
git checkout -b feature/nama-fitur

# Setelah selesai, merge ke main
git checkout main
git merge feature/nama-fitur

# Push branch
git push origin feature/nama-fitur
```

## 📸 Menambahkan Screenshot

1. Ambil screenshot website Anda
2. Simpan di folder `public/screenshots/`
3. Update README.md dengan link screenshot:

```markdown
![Homepage](./public/screenshots/homepage.png)
```

## 🔗 Setup GitHub Pages (Optional)

Untuk hosting gratis di GitHub Pages:

1. Buka repository settings
2. Scroll ke **"Pages"**
3. Source: Deploy from a branch
4. Branch: `main` → folder: `/(root)`
5. Save

> **Note**: Untuk Next.js, lebih baik deploy ke Vercel atau Netlify.

## 🚀 Deploy ke Vercel (Recommended)

1. Buka [Vercel](https://vercel.com)
2. Sign in dengan GitHub
3. Klik **"New Project"**
4. Import repository `mukhbitah`
5. Klik **"Deploy"**
6. Done! Website Anda live dalam 2 menit

## 📋 Checklist Sebelum Upload

- [ ] Hapus file/folder yang tidak perlu (node_modules sudah di .gitignore)
- [ ] Update README.md dengan informasi yang benar
- [ ] Pastikan .env tidak ter-commit (sudah di .gitignore)
- [ ] Test build: `npm run build`
- [ ] Update package.json dengan informasi yang benar
- [ ] Tambahkan LICENSE file (optional)

## 🐛 Troubleshooting

### Error: "remote origin already exists"

```bash
git remote remove origin
git remote add origin https://github.com/yourusername/mukhbitah.git
```

### Error: "failed to push some refs"

```bash
# Pull dulu, lalu push
git pull origin main --rebase
git push origin main
```

### Error: "Permission denied"

- Pastikan username/password atau token benar
- Pastikan Anda punya akses ke repository

### File terlalu besar

Jika ada file >100MB:

```bash
# Remove dari git
git rm --cached path/to/large/file

# Add ke .gitignore
echo "path/to/large/file" >> .gitignore

# Commit
git commit -m "Remove large file"
```

## 📚 Resources

- [GitHub Docs](https://docs.github.com)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
- [Vercel Deployment](https://vercel.com/docs)

## 💡 Tips

1. **Commit sering** dengan pesan yang jelas
2. **Gunakan branch** untuk fitur baru
3. **Write good commit messages**: 
   - ✅ "Add contact form validation"
   - ❌ "update"
4. **Review changes** sebelum commit: `git diff`
5. **Backup** repository secara berkala

---

**Happy Coding! 🚀**

Jika ada pertanyaan, silakan buka issue di repository atau hubungi developer.
