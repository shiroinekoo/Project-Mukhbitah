# White Box Testing — Unit Test Komponen (Component Unit Tests)
## Mukhbitah - Hijab Gallery Platform

**Tipe Pengujian:** White Box  
**Modul:** React Components  
**Tools:** Jest + React Testing Library  
**Coverage Target:** 80%  
**Prepared by:** QA Team  
**Date:** April 2, 2026

---

> **White Box Testing** menguji struktur internal kode, logika cabang, dan alur eksekusi. Tester memiliki akses penuh ke source code.

---

## WT-COMP-001: ProductCard Component

**File:** `components/ProductCard.tsx`  
**Fungsi yang Diuji:** Render, discount badge, wishlist toggle

```typescript
describe('ProductCard', () => {
  it('should render product information correctly', () => {
    const product = {
      id: '1',
      name: 'Pashmina Premium Beige',
      price: 150000,
      image: '/product.jpg',
      rating: 4.5,
      reviewCount: 10
    };

    render(<ProductCard product={product} />);

    expect(screen.getByText('Pashmina Premium Beige')).toBeInTheDocument();
    expect(screen.getByText('Rp 150.000')).toBeInTheDocument();
    expect(screen.getByText('4.5')).toBeInTheDocument();
  });

  it('should show discount badge when discountPrice exists', () => {
    const product = {
      id: '1',
      name: 'Pashmina Premium',
      price: 150000,
      discountPrice: 120000,
      image: '/product.jpg'
    };

    render(<ProductCard product={product} />);

    // Diskon = (150000 - 120000) / 150000 * 100 = 20%
    expect(screen.getByText('20%')).toBeInTheDocument();
    expect(screen.getByText('Rp 120.000')).toBeInTheDocument();
  });

  it('should NOT show discount badge when discountPrice is undefined', () => {
    const product = {
      id: '1',
      name: 'Pashmina Premium',
      price: 150000,
      image: '/product.jpg'
    };

    render(<ProductCard product={product} />);

    expect(screen.queryByTestId('discount-badge')).not.toBeInTheDocument();
  });

  it('should call onWishlistToggle when wishlist button clicked', async () => {
    const mockToggle = jest.fn();
    const product = { id: '1', name: 'Test', price: 100000, image: '/img.jpg' };

    render(<ProductCard product={product} onWishlistToggle={mockToggle} />);

    await userEvent.click(screen.getByRole('button', { name: /wishlist/i }));

    expect(mockToggle).toHaveBeenCalledWith('1');
  });
});
```

**Cabang yang Diuji:**
- ✅ Render dengan data lengkap
- ✅ Render dengan `discountPrice` (badge diskon muncul)
- ✅ Render tanpa `discountPrice` (badge tidak muncul)
- ✅ Klik wishlist button

**Status:** ✅ Pass

---

## WT-COMP-002: Navbar Component

**File:** `components/Navbar.tsx`  
**Fungsi yang Diuji:** Render link, cart badge, user menu

```typescript
describe('Navbar', () => {
  it('should render navigation links', () => {
    render(<Navbar />);

    expect(screen.getByRole('link', { name: /produk/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /tentang/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /kontak/i })).toBeInTheDocument();
  });

  it('should display cart item count badge', () => {
    // Mock CartContext dengan 3 item
    const mockCartContext = { itemCount: 3, total: 450000 };

    render(
      <CartContext.Provider value={mockCartContext}>
        <Navbar />
      </CartContext.Provider>
    );

    expect(screen.getByText('3')).toBeInTheDocument();
  });

  it('should show login button when user is not authenticated', () => {
    const mockAuthContext = { user: null, loading: false };

    render(
      <AuthContext.Provider value={mockAuthContext}>
        <Navbar />
      </AuthContext.Provider>
    );

    expect(screen.getByRole('button', { name: /masuk/i })).toBeInTheDocument();
  });

  it('should show user menu when authenticated', () => {
    const mockAuthContext = {
      user: { name: 'Siti', email: 'siti@example.com' },
      loading: false
    };

    render(
      <AuthContext.Provider value={mockAuthContext}>
        <Navbar />
      </AuthContext.Provider>
    );

    expect(screen.getByText('Siti')).toBeInTheDocument();
  });
});
```

**Cabang yang Diuji:**
- ✅ Render link navigasi
- ✅ Badge keranjang dengan item
- ✅ Tampilan saat tidak login
- ✅ Tampilan saat sudah login

**Status:** ✅ Pass

---

## WT-COMP-003: HeroSection Component

**File:** `components/HeroSection.tsx`  
**Fungsi yang Diuji:** Render konten, CTA button

```typescript
describe('HeroSection', () => {
  it('should render headline and CTA button', () => {
    render(<HeroSection />);

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /belanja sekarang/i })).toBeInTheDocument();
  });

  it('should have correct href on CTA button', () => {
    render(<HeroSection />);

    const ctaLink = screen.getByRole('link', { name: /belanja sekarang/i });
    expect(ctaLink).toHaveAttribute('href', '/products');
  });
});
```

**Status:** ✅ Pass

---

## WT-COMP-004: ProductCard Kalkulasi Diskon

**File:** `components/ProductCard.tsx`  
**Fungsi yang Diuji:** Logika kalkulasi persentase diskon

```typescript
describe('ProductCard discount calculation', () => {
  const testCases = [
    { price: 150000, discountPrice: 120000, expected: '20%' },
    { price: 200000, discountPrice: 150000, expected: '25%' },
    { price: 100000, discountPrice: 90000, expected: '10%' },
    { price: 100000, discountPrice: 50000, expected: '50%' },
  ];

  testCases.forEach(({ price, discountPrice, expected }) => {
    it(`should show ${expected} discount for price ${price} and discountPrice ${discountPrice}`, () => {
      const product = { id: '1', name: 'Test', price, discountPrice, image: '/img.jpg' };
      render(<ProductCard product={product} />);
      expect(screen.getByText(expected)).toBeInTheDocument();
    });
  });
});
```

**Status:** ✅ Pass

---

**Document Control**

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-04-02 | QA Team | Initial version |
