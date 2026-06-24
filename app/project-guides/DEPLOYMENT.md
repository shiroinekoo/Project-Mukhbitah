# 🚀 Deployment Guide - Mukhbitah

Panduan lengkap untuk deploy website Mukhbitah ke production.

## 📋 Pre-Deployment Checklist

- [ ] Test semua fitur di local environment
- [ ] Pastikan tidak ada error di console
- [ ] Optimize images (gunakan next/image)
- [ ] Setup environment variables
- [ ] Test responsive di berbagai device
- [ ] Setup analytics (Google Analytics, dll)
- [ ] Setup SEO meta tags
- [ ] Test performance dengan Lighthouse

## 🌐 Deployment Options

### 1. Vercel (Recommended)

Vercel adalah platform terbaik untuk Next.js karena dibuat oleh tim yang sama.

#### Steps:

1. **Push ke GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy ke Vercel**
   - Kunjungi [vercel.com](https://vercel.com)
   - Sign in dengan GitHub
   - Import repository Mukhbitah
   - Configure project (biasanya auto-detect)
   - Add environment variables jika ada
   - Click "Deploy"

3. **Custom Domain (Optional)**
   - Beli domain (Namecheap, GoDaddy, dll)
   - Di Vercel dashboard, masuk ke Settings > Domains
   - Add custom domain
   - Update DNS records sesuai instruksi Vercel

#### Environment Variables di Vercel:
```
NEXT_PUBLIC_SITE_URL=https://mukhbitah.com
NEXT_PUBLIC_SITE_NAME=Mukhbitah
```

### 2. Netlify

Alternative yang bagus untuk static sites.

#### Steps:

1. **Build Command**: `npm run build`
2. **Publish Directory**: `.next`
3. **Environment Variables**: Sama seperti Vercel

### 3. VPS (DigitalOcean, AWS, dll)

Untuk kontrol penuh atas server.

#### Steps:

1. **Setup Server**
   ```bash
   # Install Node.js
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt-get install -y nodejs
   
   # Install PM2
   sudo npm install -g pm2
   ```

2. **Clone & Build**
   ```bash
   git clone <your-repo-url>
   cd mukhbitah
   npm install
   npm run build
   ```

3. **Run with PM2**
   ```bash
   pm2 start npm --name "mukhbitah" -- start
   pm2 save
   pm2 startup
   ```

4. **Setup Nginx**
   ```nginx
   server {
       listen 80;
       server_name mukhbitah.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

5. **SSL Certificate**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d mukhbitah.com
   ```

## 🔧 Post-Deployment

### 1. Setup Analytics

**Google Analytics:**
```typescript
// app/layout.tsx
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
```

### 2. Setup Monitoring

- **Vercel Analytics**: Built-in di Vercel
- **Sentry**: Error tracking
- **LogRocket**: Session replay

### 3. Performance Optimization

```typescript
// next.config.js
module.exports = {
  images: {
    domains: ['your-image-domain.com'],
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
  poweredByHeader: false,
}
```

### 4. SEO Optimization

```typescript
// app/layout.tsx
export const metadata = {
  metadataBase: new URL('https://mukhbitah.com'),
  title: {
    default: 'Mukhbitah - Elegance in Every Layer',
    template: '%s | Mukhbitah'
  },
  description: 'Premium hijab collection for modern muslimah',
  openGraph: {
    title: 'Mukhbitah',
    description: 'Premium hijab collection',
    url: 'https://mukhbitah.com',
    siteName: 'Mukhbitah',
    images: ['/og-image.jpg'],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mukhbitah',
    description: 'Premium hijab collection',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}
```

## 🔒 Security

1. **Environment Variables**: Jangan commit .env ke Git
2. **API Keys**: Simpan di environment variables
3. **HTTPS**: Selalu gunakan SSL certificate
4. **Headers**: Setup security headers

```typescript
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}
```

## 📊 Monitoring & Maintenance

### Weekly Tasks:
- [ ] Check error logs
- [ ] Monitor performance metrics
- [ ] Review user feedback
- [ ] Update content

### Monthly Tasks:
- [ ] Update dependencies
- [ ] Security audit
- [ ] Backup database
- [ ] Review analytics

### Quarterly Tasks:
- [ ] Major feature updates
- [ ] Design refresh
- [ ] SEO audit
- [ ] Performance optimization

## 🆘 Troubleshooting

### Build Errors
```bash
# Clear cache
rm -rf .next
npm run build
```

### Deployment Failed
- Check build logs
- Verify environment variables
- Check Node.js version compatibility

### Performance Issues
- Enable caching
- Optimize images
- Use CDN for static assets
- Enable compression

## 📞 Support

Jika ada masalah saat deployment:
1. Check documentation: [Next.js Deployment](https://nextjs.org/docs/deployment)
2. Vercel Support: [vercel.com/support](https://vercel.com/support)
3. Community: [Next.js Discord](https://nextjs.org/discord)

---

**Good luck with your deployment! 🚀**
