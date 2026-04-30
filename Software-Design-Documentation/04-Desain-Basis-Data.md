# 4. Desain Basis Data (Database Design)
## Mukhbitah - Hijab Gallery Platform

---

## 4.1 Skema Basis Data (Database Schema)

### 4.1.1 Users Collection

```typescript
interface User {
  id: string;                    // UUID
  email: string;                 // Unique
  passwordHash: string;          // Bcrypt hashed
  name: string;
  phone: string;
  profilePicture?: string;       // URL
  role: 'customer' | 'admin';
  emailVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}
```

---

### 4.1.2 Products Collection

```typescript
interface Product {
  id: string;                    // UUID
  name: string;
  slug: string;                  // URL-friendly, unique
  description: string;
  category: 'pashmina' | 'segi-empat' | 'instan';
  material: string;
  price: number;                 // In IDR
  discountPrice?: number;        // In IDR
  colors: Color[];
  images: string[];              // URLs
  model3D?: string;              // URL to 3D model
  stock: number;
  sold: number;
  rating: number;                // Average rating
  reviewCount: number;
  featured: boolean;
  active: boolean;
  sizeGuide?: string;
  careInstructions?: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Color {
  name: string;
  hex: string;
  stock: number;
}
```

---

### 4.1.3 Orders Collection

```typescript
interface Order {
  id: string;                    // UUID
  orderNumber: string;           // Unique, e.g., "MKH-20260430-001"
  userId: string;                // Foreign key
  items: OrderItem[];
  shippingAddress: Address;
  shippingMethod: ShippingMethod;
  paymentMethod: string;
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded';
  orderStatus: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  subtotal: number;
  shippingCost: number;
  discount: number;
  total: number;
  notes?: string;
  trackingNumber?: string;
  createdAt: Date;
  updatedAt: Date;
}

interface OrderItem {
  productId: string;
  productName: string;
  productImage: string;
  color: string;
  quantity: number;
  price: number;
  subtotal: number;
}

interface Address {
  fullName: string;
  phone: string;
  address: string;
  province: string;
  city: string;
  district: string;
  postalCode: string;
  notes?: string;
}

interface ShippingMethod {
  name: string;
  cost: number;
  estimatedDays: string;
}
```

---

### 4.1.4 Reviews Collection

```typescript
interface Review {
  id: string;                    // UUID
  productId: string;             // Foreign key
  userId: string;                // Foreign key
  orderId: string;               // Foreign key (verified purchase)
  rating: number;                // 1-5
  comment: string;
  images?: string[];             // URLs
  helpful: number;               // Count of helpful votes
  verified: boolean;             // Verified purchase
  status: 'pending' | 'approved' | 'rejected';
  createdAt: Date;
  updatedAt: Date;
}
```

---

### 4.1.5 Cart Collection

```typescript
interface Cart {
  id: string;                    // UUID
  userId: string;                // Foreign key
  items: CartItem[];
  createdAt: Date;
  updatedAt: Date;
}

interface CartItem {
  productId: string;
  productName: string;
  productImage: string;
  color: string;
  price: number;
  quantity: number;
}
```

---

### 4.1.6 Wishlist Collection

```typescript
interface Wishlist {
  id: string;                    // UUID
  userId: string;                // Foreign key
  productIds: string[];          // Array of product IDs
  createdAt: Date;
  updatedAt: Date;
}
```

---

### 4.1.7 Newsletter Collection

```typescript
interface Newsletter {
  id: string;                    // UUID
  email: string;                 // Unique
  subscribed: boolean;
  createdAt: Date;
  updatedAt: Date;
}
```

---

## 4.2 Diagram Relasi Entitas (ERD)

```
Users (1) ──────< (N) Orders
Users (1) ──────< (N) Reviews
Users (1) ──────< (1) Cart
Users (1) ──────< (1) Wishlist

Products (1) ──────< (N) OrderItems
Products (1) ──────< (N) Reviews
Products (1) ──────< (N) CartItems
```

---

## 4.3 Pola Akses Data (Data Access Patterns)

### 4.3.1 Operasi Baca (Read Operations)

| Operasi | Deskripsi |
|---------|-----------|
| Get all products | Filter berdasarkan kategori, sort berdasarkan harga/popularitas |
| Get product details | Berdasarkan ID atau slug |
| Get user orders | Berdasarkan user ID, diurutkan berdasarkan tanggal |
| Get product reviews | Berdasarkan product ID, dengan paginasi |

### 4.3.2 Operasi Tulis (Write Operations)

| Operasi | Deskripsi |
|---------|-----------|
| Create order | Transaksi dengan pembaruan inventori |
| Update order status | Dengan pemicu notifikasi |
| Add to cart | Upsert cart item |
| Submit review | Setelah verifikasi pesanan |

---

## 4.4 Validasi Data (Data Validation)

### 4.4.1 Validasi Input

- Validasi format email
- Format nomor telepon (Indonesia)
- Validasi rentang harga
- Batas kuantitas (1–10 per item)
- Batas panjang teks

### 4.4.2 Aturan Bisnis (Business Rules)

- Pengecekan ketersediaan stok sebelum pemesanan
- Minimum jumlah pesanan untuk gratis ongkir
- Review hanya untuk pembelian terverifikasi
- Validasi kode diskon

---

## 4.5 Indeks Database (Database Indexes)

```typescript
const indexes = [
  { collection: 'products', fields: ['category', 'price'] },
  { collection: 'orders', fields: ['userId', 'createdAt'] },
  { collection: 'reviews', fields: ['productId', 'rating'] }
];
```

---

**Document Control**

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-04-02 | Development Team | Initial version |
