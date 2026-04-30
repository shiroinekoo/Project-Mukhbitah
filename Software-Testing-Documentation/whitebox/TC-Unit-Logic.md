# White Box Testing — Unit Test Logika Bisnis (Business Logic)
## Mukhbitah - Hijab Gallery Platform

**Tipe Pengujian:** White Box  
**Modul:** Business Logic & Utility Functions  
**Tools:** Jest  
**Coverage Target:** 80%  
**Prepared by:** QA Team  
**Date:** April 2, 2026

---

## WT-LOGIC-001: Kalkulasi Total Keranjang

**File:** `lib/cart.utils.ts`  
**Fungsi yang Diuji:** `calculateCartTotal(items, shippingCost)`

```typescript
describe('calculateCartTotal', () => {
  it('should calculate subtotal correctly', () => {
    const items = [
      { price: 150000, quantity: 2 },
      { price: 100000, quantity: 1 }
    ];
    const result = calculateCartTotal(items, 0);
    expect(result.subtotal).toBe(400000);
  });

  it('should apply free shipping when subtotal >= 200000', () => {
    const items = [{ price: 200000, quantity: 1 }];
    const result = calculateCartTotal(items, 15000);
    expect(result.shippingCost).toBe(0);
    expect(result.total).toBe(200000);
  });

  it('should charge shipping when subtotal < 200000', () => {
    const items = [{ price: 150000, quantity: 1 }];
    const result = calculateCartTotal(items, 15000);
    expect(result.shippingCost).toBe(15000);
    expect(result.total).toBe(165000);
  });

  it('should return zero for empty cart', () => {
    const result = calculateCartTotal([], 0);
    expect(result.subtotal).toBe(0);
    expect(result.total).toBe(0);
  });

  it('should handle discount correctly', () => {
    const items = [{ price: 300000, quantity: 1 }];
    const result = calculateCartTotal(items, 0, 50000);
    expect(result.discount).toBe(50000);
    expect(result.total).toBe(250000);
  });
});
```

**Cabang yang Diuji:**
- ✅ Subtotal dengan beberapa item
- ✅ Gratis ongkir saat subtotal ≥ Rp 200.000
- ✅ Biaya pengiriman saat subtotal < Rp 200.000
- ✅ Keranjang kosong
- ✅ Kalkulasi dengan diskon

**Status:** ✅ Pass

---

## WT-LOGIC-002: Validasi Password

**File:** `lib/validation.ts`  
**Fungsi yang Diuji:** `validatePassword(password)`

```typescript
describe('validatePassword', () => {
  it('should accept valid password', () => {
    expect(validatePassword('Password1')).toBe(true);
    expect(validatePassword('SecurePass123')).toBe(true);
    expect(validatePassword('MyP@ssw0rd')).toBe(true);
  });

  it('should reject password shorter than 8 characters', () => {
    expect(validatePassword('Pass1')).toBe(false);
    expect(validatePassword('Ab1')).toBe(false);
  });

  it('should reject password without uppercase', () => {
    expect(validatePassword('password1')).toBe(false);
    expect(validatePassword('mypassword1')).toBe(false);
  });

  it('should reject password without number', () => {
    expect(validatePassword('Password')).toBe(false);
    expect(validatePassword('MyPassword')).toBe(false);
  });

  it('should reject empty password', () => {
    expect(validatePassword('')).toBe(false);
    expect(validatePassword(null)).toBe(false);
  });
});
```

**Cabang yang Diuji:**
- ✅ Password valid
- ✅ Terlalu pendek (< 8 karakter)
- ✅ Tanpa huruf kapital
- ✅ Tanpa angka
- ✅ Password kosong/null

**Status:** ✅ Pass

---

## WT-LOGIC-003: Format Harga

**File:** `lib/format.ts`  
**Fungsi yang Diuji:** `formatPrice(amount)`

```typescript
describe('formatPrice', () => {
  it('should format price in IDR correctly', () => {
    expect(formatPrice(150000)).toBe('Rp 150.000');
    expect(formatPrice(1500000)).toBe('Rp 1.500.000');
    expect(formatPrice(0)).toBe('Rp 0');
  });

  it('should handle large amounts', () => {
    expect(formatPrice(10000000)).toBe('Rp 10.000.000');
  });

  it('should handle decimal amounts', () => {
    expect(formatPrice(150000.5)).toBe('Rp 150.001');
  });
});
```

**Status:** ✅ Pass

---

## WT-LOGIC-004: Generate Nomor Pesanan

**File:** `lib/order.utils.ts`  
**Fungsi yang Diuji:** `generateOrderNumber(date)`

```typescript
describe('generateOrderNumber', () => {
  it('should generate correct format', () => {
    const date = new Date('2026-04-30');
    const orderNumber = generateOrderNumber(date, 1);
    expect(orderNumber).toBe('MKH-20260430-001');
  });

  it('should pad sequence number to 3 digits', () => {
    const date = new Date('2026-04-30');
    expect(generateOrderNumber(date, 5)).toBe('MKH-20260430-005');
    expect(generateOrderNumber(date, 99)).toBe('MKH-20260430-099');
    expect(generateOrderNumber(date, 100)).toBe('MKH-20260430-100');
  });

  it('should use current date if no date provided', () => {
    const orderNumber = generateOrderNumber();
    expect(orderNumber).toMatch(/^MKH-\d{8}-\d{3}$/);
  });
});
```

**Status:** ✅ Pass

---

## WT-LOGIC-005: Validasi Stok

**File:** `lib/inventory.utils.ts`  
**Fungsi yang Diuji:** `checkStockAvailability(product, quantity)`

```typescript
describe('checkStockAvailability', () => {
  it('should return true when stock is sufficient', () => {
    const product = { stock: 10 };
    expect(checkStockAvailability(product, 5)).toBe(true);
    expect(checkStockAvailability(product, 10)).toBe(true);
  });

  it('should return false when stock is insufficient', () => {
    const product = { stock: 3 };
    expect(checkStockAvailability(product, 5)).toBe(false);
  });

  it('should return false when stock is zero', () => {
    const product = { stock: 0 };
    expect(checkStockAvailability(product, 1)).toBe(false);
  });

  it('should return false for negative quantity', () => {
    const product = { stock: 10 };
    expect(checkStockAvailability(product, -1)).toBe(false);
    expect(checkStockAvailability(product, 0)).toBe(false);
  });
});
```

**Cabang yang Diuji:**
- ✅ Stok mencukupi
- ✅ Stok tidak mencukupi
- ✅ Stok nol
- ✅ Kuantitas negatif/nol

**Status:** ✅ Pass

---

## WT-LOGIC-006: Kalkulasi Rating Rata-rata

**File:** `lib/review.utils.ts`  
**Fungsi yang Diuji:** `calculateAverageRating(reviews)`

```typescript
describe('calculateAverageRating', () => {
  it('should calculate average correctly', () => {
    const reviews = [
      { rating: 5 },
      { rating: 4 },
      { rating: 3 }
    ];
    expect(calculateAverageRating(reviews)).toBe(4.0);
  });

  it('should return 0 for empty reviews', () => {
    expect(calculateAverageRating([])).toBe(0);
  });

  it('should round to 1 decimal place', () => {
    const reviews = [{ rating: 5 }, { rating: 4 }, { rating: 4 }];
    expect(calculateAverageRating(reviews)).toBe(4.3);
  });
});
```

**Status:** ✅ Pass

---

**Document Control**

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-04-02 | QA Team | Initial version |
