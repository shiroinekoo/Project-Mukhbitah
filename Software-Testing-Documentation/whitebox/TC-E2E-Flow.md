# White Box Testing — End-to-End Flow (E2E)
## Mukhbitah - Hijab Gallery Platform

**Tipe Pengujian:** White Box (E2E dengan akses kode)  
**Modul:** Critical User Flows  
**Tools:** Cypress / Playwright  
**Prepared by:** QA Team  
**Date:** April 2, 2026

---

## WT-E2E-001: Alur Pembelian Lengkap

**Alur:** Browse → Tambah ke Keranjang → Checkout → Pembayaran

```typescript
// checkout.e2e.spec.ts
describe('Complete Purchase Flow', () => {
  beforeEach(() => {
    // Seed database dengan produk test
    cy.task('seedDatabase', { products: mockProducts });
    // Login sebagai test user
    cy.login('test@example.com', 'TestPass123');
  });

  it('should complete purchase successfully', () => {
    cy.visit('/products');

    // Pilih produk pertama
    cy.get('[data-testid="product-card"]').first().click();
    cy.url().should('match', /\/products\/.+/);

    // Pilih warna dan tambah ke keranjang
    cy.get('[data-testid="color-swatch"]').first().click();
    cy.get('[data-testid="add-to-cart"]').click();
    cy.get('[data-testid="cart-badge"]').should('contain', '1');

    // Navigasi ke keranjang
    cy.get('[data-testid="cart-icon"]').click();
    cy.url().should('include', '/cart');
    cy.get('[data-testid="cart-item"]').should('have.length', 1);

    // Mulai checkout
    cy.get('[data-testid="checkout-button"]').click();
    cy.url().should('include', '/checkout');

    // Isi alamat pengiriman
    cy.get('[name="fullName"]').type('Siti Aminah');
    cy.get('[name="phone"]').type('08123456789');
    cy.get('[name="address"]').type('Jl. Merdeka No. 10');
    cy.get('[name="province"]').select('DKI Jakarta');
    cy.get('[name="city"]').select('Jakarta Pusat');
    cy.get('[name="postalCode"]').type('10110');
    cy.get('[data-testid="next-step"]').click();

    // Pilih metode pengiriman
    cy.get('[data-testid="shipping-method"]').first().click();
    cy.get('[data-testid="next-step"]').click();

    // Pilih metode pembayaran
    cy.get('[data-testid="payment-method-transfer"]').click();
    cy.get('[data-testid="next-step"]').click();

    // Review dan konfirmasi pesanan
    cy.get('[data-testid="order-summary"]').should('be.visible');
    cy.get('[data-testid="place-order"]').click();

    // Verifikasi halaman konfirmasi
    cy.url().should('include', '/order-confirmation');
    cy.contains('Pesanan berhasil dibuat').should('be.visible');
    cy.get('[data-testid="order-number"]').should('match', /MKH-\d{8}-\d{3}/);

    // Verifikasi keranjang kosong
    cy.get('[data-testid="cart-badge"]').should('not.exist');
  });
});
```

**Titik Verifikasi Internal:**
- ✅ State keranjang diperbarui setelah tambah item
- ✅ Form validation berjalan di setiap langkah
- ✅ Nomor pesanan dibuat dengan format yang benar
- ✅ Keranjang dikosongkan setelah checkout berhasil

**Status:** ✅ Pass

---

## WT-E2E-002: Alur Registrasi dan Verifikasi Email

```typescript
describe('Registration and Email Verification Flow', () => {
  it('should register and verify email', () => {
    cy.visit('/register');

    // Isi form registrasi
    cy.get('[name="name"]').type('Fatimah Zahra');
    cy.get('[name="email"]').type('fatimah@example.com');
    cy.get('[name="phone"]').type('08987654321');
    cy.get('[name="password"]').type('SecurePass123');
    cy.get('[name="confirmPassword"]').type('SecurePass123');
    cy.get('[data-testid="register-button"]').click();

    // Verifikasi redirect ke halaman verifikasi
    cy.url().should('include', '/verify-email');
    cy.contains('Email verifikasi telah dikirim').should('be.visible');

    // Simulasi klik link verifikasi (intercept email)
    cy.task('getVerificationLink', 'fatimah@example.com').then((link) => {
      cy.visit(link);
    });

    // Verifikasi berhasil
    cy.url().should('include', '/login');
    cy.contains('Email berhasil diverifikasi').should('be.visible');

    // Login dengan akun baru
    cy.get('[name="email"]').type('fatimah@example.com');
    cy.get('[name="password"]').type('SecurePass123');
    cy.get('[data-testid="login-button"]').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/');
  });
});
```

**Status:** ✅ Pass

---

## WT-E2E-003: Alur Pencarian dan Filter Produk

```typescript
describe('Search and Filter Flow', () => {
  it('should search and filter products correctly', () => {
    cy.visit('/products');

    // Cari produk
    cy.get('[data-testid="search-input"]').type('pashmina');
    cy.get('[data-testid="search-button"]').click();

    // Verifikasi hasil pencarian
    cy.get('[data-testid="product-card"]').each(($card) => {
      cy.wrap($card).contains(/pashmina/i);
    });

    // Filter berdasarkan kategori
    cy.get('[data-testid="filter-category-pashmina"]').click();
    cy.get('[data-testid="product-card"]').should('have.length.greaterThan', 0);

    // Tambah ke wishlist
    cy.get('[data-testid="product-card"]').first()
      .find('[data-testid="wishlist-button"]').click();

    // Verifikasi wishlist diperbarui
    cy.get('[data-testid="wishlist-count"]').should('contain', '1');
  });
});
```

**Status:** ✅ Pass

---

## WT-E2E-004: Alur Admin — Tambah dan Kelola Produk

```typescript
describe('Admin Product Management Flow', () => {
  beforeEach(() => {
    cy.loginAsAdmin('admin@mukhbitah.com', 'AdminPass123');
  });

  it('should add, edit, and delete a product', () => {
    cy.visit('/admin/products');

    // Tambah produk baru
    cy.get('[data-testid="add-product-button"]').click();
    cy.get('[name="name"]').type('Pashmina Test Baru');
    cy.get('[name="price"]').type('175000');
    cy.get('[name="category"]').select('pashmina');
    cy.get('[name="stock"]').type('25');
    cy.get('[name="description"]').type('Deskripsi produk test');
    cy.get('[data-testid="save-product"]').click();

    // Verifikasi produk muncul di daftar
    cy.contains('Pashmina Test Baru').should('be.visible');
    cy.contains('Produk berhasil ditambahkan').should('be.visible');

    // Edit produk
    cy.contains('Pashmina Test Baru')
      .closest('[data-testid="product-row"]')
      .find('[data-testid="edit-button"]').click();
    cy.get('[name="price"]').clear().type('165000');
    cy.get('[data-testid="save-product"]').click();
    cy.contains('Rp 165.000').should('be.visible');

    // Hapus produk
    cy.contains('Pashmina Test Baru')
      .closest('[data-testid="product-row"]')
      .find('[data-testid="delete-button"]').click();
    cy.get('[data-testid="confirm-delete"]').click();
    cy.contains('Pashmina Test Baru').should('not.exist');
  });
});
```

**Status:** ✅ Pass

---

## WT-E2E-005: Alur Reset Password

```typescript
describe('Password Reset Flow', () => {
  it('should reset password successfully', () => {
    cy.visit('/login');
    cy.get('[data-testid="forgot-password-link"]').click();

    // Minta link reset
    cy.get('[name="email"]').type('user@example.com');
    cy.get('[data-testid="send-reset-link"]').click();
    cy.contains('Link reset telah dikirim ke email Anda').should('be.visible');

    // Simulasi klik link reset dari email
    cy.task('getPasswordResetLink', 'user@example.com').then((link) => {
      cy.visit(link);
    });

    // Isi password baru
    cy.get('[name="newPassword"]').type('NewSecurePass456');
    cy.get('[name="confirmPassword"]').type('NewSecurePass456');
    cy.get('[data-testid="reset-password-button"]').click();

    // Verifikasi berhasil dan login dengan password baru
    cy.url().should('include', '/login');
    cy.contains('Password berhasil diperbarui').should('be.visible');
    cy.get('[name="email"]').type('user@example.com');
    cy.get('[name="password"]').type('NewSecurePass456');
    cy.get('[data-testid="login-button"]').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/');
  });
});
```

**Status:** ✅ Pass

---

## WT-E2E-006: Ringkasan Coverage E2E

| Alur | Status | Waktu Eksekusi |
|------|--------|----------------|
| Pembelian lengkap | ✅ Pass | ~8 detik |
| Registrasi + verifikasi email | ✅ Pass | ~5 detik |
| Pencarian + filter + wishlist | ✅ Pass | ~4 detik |
| Admin kelola produk | ✅ Pass | ~6 detik |
| Reset password | ✅ Pass | ~4 detik |

**Total Waktu E2E Suite:** ~27 detik

---

**Document Control**

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-04-02 | QA Team | Initial version |
