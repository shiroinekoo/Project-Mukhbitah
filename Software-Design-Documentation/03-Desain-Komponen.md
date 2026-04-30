# 3. Desain Komponen (Component Design)
## Mukhbitah - Hijab Gallery Platform

---

## 3.1 Hierarki Komponen (Component Hierarchy)

```
App (layout.tsx)
├── Navbar
│   ├── Logo
│   ├── NavLinks
│   ├── SearchBar
│   ├── UserMenu
│   └── CartIcon
│
├── Page Content
│   ├── HomePage
│   │   ├── HeroSection
│   │   ├── CategorySection
│   │   │   └── CategoryCard (x3)
│   │   ├── FeaturedProducts
│   │   │   └── ProductCard (x8)
│   │   ├── TestimonialSection
│   │   │   └── TestimonialCard (x3)
│   │   └── CTASection
│   │
│   ├── ProductsPage
│   │   ├── FilterSidebar
│   │   │   ├── CategoryFilter
│   │   │   ├── PriceFilter
│   │   │   ├── ColorFilter
│   │   │   └── MaterialFilter
│   │   ├── ProductGrid
│   │   │   └── ProductCard (multiple)
│   │   └── Pagination
│   │
│   ├── ProductDetailPage
│   │   ├── ProductGallery
│   │   │   ├── ImageViewer
│   │   │   └── Product3DViewer
│   │   ├── ProductInfo
│   │   │   ├── ProductTitle
│   │   │   ├── ProductPrice
│   │   │   ├── ColorSelector
│   │   │   ├── QuantitySelector
│   │   │   └── AddToCartButton
│   │   ├── ProductTabs
│   │   │   ├── DescriptionTab
│   │   │   ├── SizeGuideTab
│   │   │   └── CareTab
│   │   ├── ReviewSection
│   │   │   └── ReviewCard (multiple)
│   │   └── RelatedProducts
│   │       └── ProductCard (x4)
│   │
│   ├── CartPage
│   │   ├── CartItems
│   │   │   └── CartItem (multiple)
│   │   ├── OrderSummary
│   │   └── CheckoutButton
│   │
│   ├── CheckoutPage
│   │   ├── CheckoutSteps
│   │   ├── ShippingForm
│   │   ├── ShippingMethodSelector
│   │   ├── PaymentMethodSelector
│   │   └── OrderReview
│   │
│   └── ProfilePage
│       ├── ProfileSidebar
│       ├── ProfileInfo
│       ├── OrderHistory
│       │   └── OrderCard (multiple)
│       ├── AddressBook
│       │   └── AddressCard (multiple)
│       └── Wishlist
│           └── ProductCard (multiple)
│
└── Footer
    ├── BrandInfo
    ├── QuickLinks
    ├── CustomerService
    └── ContactInfo
```

---

## 3.2 Spesifikasi Komponen (Component Specifications)

### 3.2.1 ProductCard Component

```typescript
interface ProductCardProps {
  product: {
    id: string;
    name: string;
    slug: string;
    image: string;
    price: number;
    discountPrice?: number;
    rating: number;
    reviewCount: number;
    colors: Color[];
  };
  variant?: 'grid' | 'list';
  showQuickView?: boolean;
}
```

**Fitur:**
- Animasi hover (scale, shadow)
- Tombol toggle wishlist
- Tombol quick view
- Color swatches
- Badge diskon
- Tampilan rating

---

### 3.2.2 Product3DViewer Component

```typescript
interface Product3DViewerProps {
  modelUrl: string;
  color: string;
  onColorChange?: (color: string) => void;
}
```

**Fitur:**
- Canvas Three.js
- Orbit controls (rotate, zoom)
- Pergantian warna
- Kontrol pencahayaan
- Loading state
- Fallback ke gambar 2D

---

### 3.2.3 CartItem Component

```typescript
interface CartItemProps {
  item: CartItem;
  onQuantityChange: (quantity: number) => void;
  onRemove: () => void;
}
```

**Fitur:**
- Gambar dan detail produk
- Kontrol kuantitas (+/-)
- Tombol hapus
- Kalkulasi subtotal
- Indikator ketersediaan stok

---

## 3.3 Manajemen State (State Management)

### 3.3.1 Local State (useState)
- State UI spesifik komponen
- Input form
- Toggle state
- Loading state

### 3.3.2 Global State (Context API)

```typescript
// AuthContext
interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
}

// CartContext
interface CartContextType {
  cart: Cart | null;
  itemCount: number;
  total: number;
  addItem: (item: CartItem) => Promise<void>;
  updateQuantity: (itemId: string, quantity: number) => Promise<void>;
  removeItem: (itemId: string) => Promise<void>;
  clearCart: () => Promise<void>;
}

// WishlistContext
interface WishlistContextType {
  wishlist: string[];
  addToWishlist: (productId: string) => Promise<void>;
  removeFromWishlist: (productId: string) => Promise<void>;
  isInWishlist: (productId: string) => boolean;
}
```

### 3.3.3 Server State (React Query - Future)
- Data produk
- Data pesanan
- Data profil pengguna
- Caching dan invalidasi

---

## 3.4 Pola Desain Komponen (Component Design Patterns)

| Pola | Deskripsi | Penggunaan |
|------|-----------|------------|
| Container/Presentational | Memisahkan logika dari UI | Halaman produk, cart |
| Compound Components | Komponen terkait bekerja bersama | ProductTabs, CheckoutSteps |
| Render Props | Berbagi kode antar komponen | Filter, sorting |
| Higher-Order Components | Meningkatkan fungsionalitas komponen | Auth guard, loading wrapper |
| Custom Hooks | Logika stateful yang dapat digunakan ulang | useCart, useWishlist, useAuth |

---

**Document Control**

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-04-02 | Development Team | Initial version |
