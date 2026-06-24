# 🎨 Visual Design Guide - Mukhbitah

Panduan visual lengkap untuk memahami design system dan UI components Mukhbitah.

## 🎨 Color System

### Primary Palette (Beige Tones)
```
┌─────────────────────────────────────────────────────────┐
│ primary-50   #faf8f5  ░░░░░░░░░░  Lightest             │
│ primary-100  #f5f1ea  ░░░░░░░░░░                        │
│ primary-200  #e8dfd0  ▒▒▒▒▒▒▒▒▒▒  Cards, Backgrounds   │
│ primary-300  #d9c9b0  ▒▒▒▒▒▒▒▒▒▒                        │
│ primary-400  #c9b08f  ▓▓▓▓▓▓▓▓▓▓                        │
│ primary-500  #b89770  ▓▓▓▓▓▓▓▓▓▓  Base                  │
│ primary-600  #a07d5c  ████████████  Buttons, Links      │
│ primary-700  #86654b  ████████████  Hover States        │
│ primary-800  #6d5340  ████████████                      │
│ primary-900  #5a4536  ████████████  Darkest, Text       │
└─────────────────────────────────────────────────────────┘
```

### Accent Colors
```
┌─────────────────────────────────────────────────────────┐
│ Cream       #FAF8F5   ░░░░░░░░░░  Backgrounds          │
│ Beige       #E8DFD0   ▒▒▒▒▒▒▒▒▒▒  Secondary BG         │
│ Gold        #D4AF37   ████████████  Premium Accents     │
│ Soft Pink   #F5E6E8   ▒▒▒▒▒▒▒▒▒▒  Feminine Touch      │
└─────────────────────────────────────────────────────────┘
```

## 📐 Layout Structure

### Homepage Layout
```
┌─────────────────────────────────────────────────────────┐
│                      NAVBAR                             │
│  [Logo]  Home Products Categories About  [🔍 👤 🛒]   │
├─────────────────────────────────────────────────────────┤
│                                                         │
│                   HERO SECTION                          │
│   ┌──────────────┐         ┌──────────────┐           │
│   │              │         │              │           │
│   │  Tagline &   │         │  3D Product  │           │
│   │  CTA         │         │  Viewer      │           │
│   │              │         │              │           │
│   └──────────────┘         └──────────────┘           │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│                 CATEGORY SECTION                        │
│   ┌──────────┐  ┌──────────┐  ┌──────────┐           │
│   │Pashmina  │  │Segi Empat│  │ Instan   │           │
│   │   🧣     │  │   ◻️     │  │   ⚡     │           │
│   └──────────┘  └──────────┘  └──────────┘           │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│              FEATURED PRODUCTS                          │
│   ┌────┐ ┌────┐ ┌────┐ ┌────┐                        │
│   │ P1 │ │ P2 │ │ P3 │ │ P4 │                        │
│   └────┘ └────┘ └────┘ └────┘                        │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│                 TESTIMONIALS                            │
│   ┌────────┐  ┌────────┐  ┌────────┐                 │
│   │Review 1│  │Review 2│  │Review 3│                 │
│   └────────┘  └────────┘  └────────┘                 │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│                   CTA SECTION                           │
│         Newsletter Signup & Social Proof                │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                      FOOTER                             │
│   Brand | Quick Links | Customer Service | Contact     │
└─────────────────────────────────────────────────────────┘
```

## 🎭 Component Anatomy

### Product Card
```
┌─────────────────────────────────┐
│  [Badge]              [❤️ 👁️]  │
│                                 │
│         ┌─────────┐             │
│         │         │             │
│         │  Image  │             │
│         │   or    │             │
│         │   3D    │             │
│         │         │             │
│         └─────────┘             │
│                      [-25%]     │
│                                 │
│  Product Name                   │
│  ★ 4.9 (128 reviews)           │
│  ○ ○ ○ ○  (color variants)    │
│                                 │
│  Rp 189.000  ~~Rp 250.000~~    │
│                                 │
│  [🛒 Tambah ke Keranjang]      │
└─────────────────────────────────┘
```

### Glass Card Effect
```
┌─────────────────────────────────┐
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │  ← Backdrop blur
│ ░                             ░ │
│ ░  Content with transparency  ░ │
│ ░  bg-white/70                ░ │
│ ░  backdrop-blur-md           ░ │
│ ░                             ░ │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
└─────────────────────────────────┘
```

## 🎬 Animation Patterns

### Hover Effects
```
Normal State:
┌─────────┐
│ Product │
│  Card   │
└─────────┘

Hover State:
    ┌─────────┐
    │ Product │  ← Moves up (y: -10px)
    │  Card   │  ← Scales (1.02)
    └─────────┘  ← Shadow increases
```

### Page Transitions
```
Initial:
  opacity: 0
  y: 20px

Animate:
  opacity: 1
  y: 0
  duration: 0.5s
```

### Scroll Animations
```
Before Scroll:
  opacity: 0
  y: 30px

After Scroll (in viewport):
  opacity: 1
  y: 0
  duration: 0.6s
```

## 📱 Responsive Breakpoints

### Mobile (< 640px)
```
┌──────────┐
│  Navbar  │
│  (Menu)  │
├──────────┤
│          │
│  Hero    │
│  Stack   │
│          │
├──────────┤
│ Category │
│  Stack   │
├──────────┤
│ Products │
│  1 Col   │
└──────────┘
```

### Tablet (640px - 1024px)
```
┌────────────────────┐
│      Navbar        │
├────────────────────┤
│  Hero   │  Hero    │
│  Left   │  Right   │
├────────────────────┤
│ Cat 1 │ Cat 2 │ 3 │
├────────────────────┤
│ Prod │ Prod │      │
│  1   │  2   │      │
└────────────────────┘
```

### Desktop (> 1024px)
```
┌──────────────────────────────────┐
│          Navbar                  │
├──────────────────────────────────┤
│  Hero Left    │    Hero Right    │
│               │                  │
├──────────────────────────────────┤
│ Category 1 │ Category 2 │ Cat 3 │
├──────────────────────────────────┤
│ Prod 1 │ Prod 2 │ Prod 3 │ Pr 4 │
└──────────────────────────────────┘
```

## 🎨 Typography Scale

```
┌─────────────────────────────────────────────────────┐
│ H1 - Hero Title                                     │
│ text-5xl md:text-6xl lg:text-7xl                   │
│ font-playfair font-bold                             │
│ "Elegance in Every Layer"                           │
├─────────────────────────────────────────────────────┤
│ H2 - Section Title                                  │
│ text-4xl md:text-5xl                                │
│ font-playfair font-bold                             │
│ "Produk Pilihan"                                    │
├─────────────────────────────────────────────────────┤
│ H3 - Card Title                                     │
│ text-2xl font-playfair font-bold                    │
│ "Pashmina Silk Premium"                             │
├─────────────────────────────────────────────────────┤
│ Body - Regular Text                                 │
│ text-base font-poppins                              │
│ "Temukan koleksi hijab premium..."                 │
├─────────────────────────────────────────────────────┤
│ Small - Meta Text                                   │
│ text-sm text-gray-600                               │
│ "128 reviews"                                       │
└─────────────────────────────────────────────────────┘
```

## 🔘 Button Styles

### Primary Button
```
┌──────────────────────────────┐
│  Belanja Sekarang  →         │  ← bg-primary-600
│                              │  ← hover:bg-primary-700
└──────────────────────────────┘  ← shadow-soft
```

### Secondary Button
```
┌──────────────────────────────┐
│  Pelajari Lebih Lanjut       │  ← bg-white
│                              │  ← border-primary-200
└──────────────────────────────┘  ← hover:bg-gray-50
```

### Icon Button
```
┌────┐
│ ❤️ │  ← w-10 h-10
└────┘  ← rounded-full
        ← hover:bg-gold
```

## 🎯 Spacing System

```
Padding/Margin Scale:
┌────┐ 4px   (p-1)
├────┤ 8px   (p-2)
├────┤ 12px  (p-3)
├────┤ 16px  (p-4)
├────┤ 24px  (p-6)
├────┤ 32px  (p-8)
├────┤ 48px  (p-12)
├────┤ 64px  (p-16)
└────┘ 96px  (p-24)
```

## 🌈 Shadow System

```
shadow-soft:
  0 4px 20px rgba(0, 0, 0, 0.08)
  ▼
  ░░░░░░░░░░░░░░░░░░░░

shadow-soft-lg:
  0 10px 40px rgba(0, 0, 0, 0.12)
  ▼
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
```

## 🎨 Gradient Examples

### Background Gradient
```
bg-gradient-soft:
  linear-gradient(135deg, #FAF8F5 0%, #F5E6E8 100%)
  
  ░░░░░░░░░░░░░░░░░░░░
  ░░░░░░░░░░░░░░░░░░▒▒
  ░░░░░░░░░░░░░░░░▒▒▒▒
  ░░░░░░░░░░░░░░▒▒▒▒▒▒
  ░░░░░░░░░░░░▒▒▒▒▒▒▒▒
```

### Product Card Gradient
```
from-primary-100 to-softPink:
  
  ░░░░░░░░░░░░░░░░░░░░
  ░░░░░░░░░░░░░░░░░▒▒▒
  ░░░░░░░░░░░░░░▒▒▒▒▒▒
  ░░░░░░░░░░░░▒▒▒▒▒▒▒▒
```

## 📐 Border Radius

```
rounded-lg:    12px   ┌─────┐
                      │     │
                      └─────┘

rounded-xl:    16px   ┌──────┐
                      │      │
                      └──────┘

rounded-2xl:   24px   ┌───────┐
                      │       │
                      └───────┘

rounded-3xl:   32px   ┌────────┐
                      │        │
                      └────────┘

rounded-full:  9999px  ●
```

## 🎭 State Variations

### Button States
```
Normal:    [  Button  ]
Hover:     [  Button  ]  ← bg darker, shadow larger
Active:    [  Button  ]  ← scale(0.98)
Disabled:  [  Button  ]  ← opacity-50, cursor-not-allowed
```

### Input States
```
Normal:    [___________]
Focus:     [___________]  ← ring-2 ring-primary-400
Error:     [___________]  ← border-red-500
Success:   [___________]  ← border-green-500
```

## 🎨 Icon System

### Icon Sizes
```
Small:    w-4 h-4   (16px)  ●
Medium:   w-5 h-5   (20px)  ●
Large:    w-6 h-6   (24px)  ●
XLarge:   w-8 h-8   (32px)  ●
```

### Icon Usage
```
Navigation:  Search, User, Cart
Actions:     Heart, Eye, Trash, Plus, Minus
Social:      Instagram, Facebook, Mail
Status:      Check, X, Alert, Info
```

## 📊 Grid System

### Product Grid
```
Mobile (1 col):
┌──────┐
│ Prod │
├──────┤
│ Prod │
└──────┘

Tablet (2 cols):
┌──────┬──────┐
│ Prod │ Prod │
└──────┴──────┘

Desktop (4 cols):
┌────┬────┬────┬────┐
│ P1 │ P2 │ P3 │ P4 │
└────┴────┴────┴────┘
```

## 🎯 Call-to-Action Hierarchy

```
Primary CTA:
  ┌──────────────────────┐
  │ Belanja Sekarang  →  │  ← Most prominent
  └──────────────────────┘

Secondary CTA:
  ┌──────────────────────┐
  │ Pelajari Lebih Lanjut│  ← Less prominent
  └──────────────────────┘

Tertiary CTA:
  Lihat Detail  →           ← Text link
```

## 🎨 Loading States

### Skeleton Loading
```
┌─────────────────────┐
│ ░░░░░░░░░░░░░░░░░░ │  ← Animated shimmer
│ ░░░░░░░░░░░░░░░░░░ │
│ ░░░░░░░░░░░░░░░░░░ │
└─────────────────────┘
```

### Spinner
```
    ●
  ●   ●
●       ●  ← Rotating
  ●   ●
    ●
```

## 🎉 Success Patterns

### Empty State
```
┌─────────────────────┐
│                     │
│        🛒          │
│                     │
│  Keranjang Kosong   │
│                     │
│  [Mulai Belanja]    │
│                     │
└─────────────────────┘
```

### Success Message
```
┌─────────────────────┐
│        ✓            │
│  Berhasil Ditambah  │
│   ke Keranjang!     │
└─────────────────────┘
```

---

**Visual Guide Version**: 1.0.0  
**Last Updated**: 2026-04-30

Gunakan guide ini sebagai referensi saat mengembangkan fitur baru atau melakukan customization!
