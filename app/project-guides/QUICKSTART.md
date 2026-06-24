# ⚡ Quick Start Guide - Mukhbitah

Panduan cepat untuk menjalankan website Mukhbitah di local environment Anda.

## 📋 Prerequisites

Pastikan Anda sudah menginstall:
- **Node.js** 18.x atau lebih tinggi ([Download](https://nodejs.org/))
- **npm** atau **yarn** (included dengan Node.js)
- **Git** ([Download](https://git-scm.com/))

## 🚀 Installation (5 Menit)

### 1. Clone Repository

```bash
git clone <repository-url>
cd mukhbitah
```

### 2. Install Dependencies

```bash
npm install
```

Ini akan menginstall semua package yang diperlukan:
- Next.js 15
- React 19
- Tailwind CSS
- Framer Motion
- Three.js & React Three Fiber
- Lucide React (icons)

### 3. Setup Environment Variables (Optional)

```bash
cp .env.example .env.local
```

Edit `.env.local` jika diperlukan (untuk development, default values sudah cukup).

### 4. Run Development Server

```bash
npm run dev
```

### 5. Open Browser

Buka [http://localhost:3000](http://localhost:3000)

🎉 **Done!** Website sudah berjalan di local Anda.

## 📁 Project Structure

```
mukhbitah/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── products/          # Product pages
│   ├── cart/              # Shopping cart
│   ├── about/             # About page
│   └── contact/           # Contact page
├── components/            # React components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── ProductCard.tsx
│   └── ...
├── public/                # Static assets
└── tailwind.config.ts     # Tailwind configuration
```

## 🎨 Available Pages

| Page | URL | Description |
|------|-----|-------------|
| Homepage | `/` | Hero, categories, featured products |
| Products | `/products` | Product listing with filters |
| Cart | `/cart` | Shopping cart |
| About | `/about` | About Mukhbitah |
| Contact | `/contact` | Contact form |

## 🛠️ Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## 🎯 Next Steps

### 1. Customize Content

Edit file-file berikut untuk menyesuaikan konten:

- **Brand Info**: `components/Footer.tsx`
- **Products**: `components/FeaturedProducts.tsx`
- **Categories**: `components/CategorySection.tsx`
- **Testimonials**: `components/TestimonialSection.tsx`

### 2. Add Real Products

Buat file `lib/products.ts` untuk data produk:

```typescript
export const products = [
  {
    id: 1,
    name: "Pashmina Silk Premium",
    price: 189000,
    // ... data lainnya
  },
  // ... produk lainnya
];
```

### 3. Integrate 3D Models

Lihat `components/Product3DViewer.tsx` untuk panduan integrasi model 3D.

### 4. Setup Backend

Pilih salah satu:
- **Firebase**: Authentication, Firestore, Storage
- **Supabase**: PostgreSQL, Authentication, Storage
- **Custom API**: Express.js, NestJS, dll

### 5. Add Payment Gateway

Integrate payment:
- **Midtrans**: Untuk Indonesia
- **Stripe**: Untuk international

## 🎨 Customization

### Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    // Your custom colors
  },
  gold: '#D4AF37',
  // ...
}
```

### Fonts

Edit `app/globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font');
```

### Logo

Ganti placeholder dengan logo Anda:
- Edit `components/Navbar.tsx`
- Add logo image di `public/logo.png`

## 🐛 Troubleshooting

### Port 3000 Already in Use

```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```

### Module Not Found

```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors

```bash
rm -rf .next
npm run build
```

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Three.js](https://threejs.org/docs/)

## 💬 Need Help?

- 📧 Email: hello@mukhbitah.com
- 📖 Full Documentation: `README.md`
- 🐛 Report Issues: GitHub Issues
- 💡 Feature Requests: GitHub Discussions

---

**Happy Coding! 🚀**
