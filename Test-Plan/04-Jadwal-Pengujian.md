# 4. Jadwal Pengujian (Test Schedule)
## Mukhbitah - Platform Gallery Hijab

**Version:** 1.0  
**Date:** April 2, 2026  
**Prepared by:** QA Team

---

## 4.1 Gambaran Umum Jadwal

| Fase | Durasi | Minggu |
|------|--------|--------|
| Phase 1: Unit Testing | 4 minggu | Minggu 1–4 |
| Phase 2: Integration Testing | 2 minggu | Minggu 5–6 |
| Phase 3: System Testing | 3 minggu | Minggu 7–9 |
| Phase 4: User Acceptance Testing | 1 minggu | Minggu 10 |
| Phase 5: Regression Testing & Release | 1 minggu | Minggu 11 |
| **Total** | **11 minggu** | |

---

## 4.2 Detail Per Fase

### Phase 1: Unit Testing (Minggu 1–4)

**Durasi:** 4 minggu (paralel dengan development)

| Minggu | Aktivitas | Deliverable |
|--------|-----------|-------------|
| 1 | Tulis unit test untuk komponen UI (Navbar, ProductCard, HeroSection) | Unit test suite — UI components |
| 2 | Tulis unit test untuk logika bisnis (kalkulasi harga, validasi, format) | Unit test suite — business logic |
| 3 | Tulis unit test untuk API handlers dan custom hooks | Unit test suite — API & hooks |
| 4 | Capai 80% code coverage, perbaiki test yang gagal | Code coverage report |

**Kriteria Selesai:**
- ✅ 80% code coverage tercapai
- ✅ Semua unit test lulus
- ✅ Tidak ada defect kritis

---

### Phase 2: Integration Testing (Minggu 5–6)

**Durasi:** 2 minggu

| Minggu | Aktivitas | Deliverable |
|--------|-----------|-------------|
| 5 | Integration test komponen + Context API; Integration test API endpoints | Integration test suite — komponen & API |
| 6 | Integration test database operations; Integration test layanan pihak ketiga (payment, email) | Integration test suite — DB & third-party |

**Kriteria Selesai:**
- ✅ Semua integration test lulus
- ✅ Tidak ada defect high/critical terbuka
- ✅ Laporan integration test disetujui

---

### Phase 3: System Testing (Minggu 7–9)

**Durasi:** 3 minggu

| Minggu | Aktivitas | Deliverable |
|--------|-----------|-------------|
| 7 | Pengembangan E2E test scripts; Functional testing — katalog produk & autentikasi | E2E test scripts |
| 8 | Functional testing — checkout, pesanan, admin; Performance testing (load, stress, spike) | Functional test report; Performance test report |
| 9 | Security testing (auth, injection, XSS, CSRF); Compatibility testing (browser, device, OS) | Security test report; Compatibility test report |

**Kriteria Selesai:**
- ✅ 100% critical test cases lulus
- ✅ 95% high priority test cases lulus
- ✅ Tidak ada defect critical/high terbuka
- ✅ Target performa terpenuhi
- ✅ Security tests lulus

---

### Phase 4: User Acceptance Testing (Minggu 10)

**Durasi:** 1 minggu

| Hari | Aktivitas | Deliverable |
|------|-----------|-------------|
| 1–2 | Setup lingkungan UAT; Briefing pengguna tester | UAT environment ready |
| 3–4 | Sesi pengujian dengan pengguna nyata (5–10 orang) | UAT test execution |
| 5 | Pengumpulan dan analisis feedback; Perbaikan minor | UAT feedback report |

**Kriteria Selesai:**
- ✅ Semua UAT test cases dieksekusi
- ✅ Feedback pengguna ditangani
- ✅ Sign-off stakeholder diperoleh

---

### Phase 5: Regression Testing & Release (Minggu 11)

**Durasi:** 1 minggu

| Hari | Aktivitas | Deliverable |
|------|-----------|-------------|
| 1–3 | Eksekusi full regression test suite | Regression test report |
| 4 | Verifikasi semua bug fix | Bug verification report |
| 5 | Final smoke test; Persiapan deployment | Final test summary; Go/No-Go decision |

**Kriteria Selesai:**
- ✅ Semua regression test lulus
- ✅ Semua bug fix terverifikasi
- ✅ Smoke test lulus
- ✅ Deployment checklist lengkap

---

## 4.3 Milestone Pengujian

| Milestone | Target Tanggal | Kriteria |
|-----------|----------------|----------|
| Unit Testing Selesai | Akhir Minggu 4 | 80% coverage, semua test lulus |
| Integration Testing Selesai | Akhir Minggu 6 | Semua integration test lulus |
| System Testing Selesai | Akhir Minggu 9 | Semua critical test lulus |
| UAT Sign-off | Akhir Minggu 10 | Persetujuan stakeholder |
| Production Ready | Akhir Minggu 11 | Semua test lulus, tidak ada critical bug |

---

## 4.4 Dependensi Jadwal

| Dependensi | Dampak jika Terlambat |
|------------|----------------------|
| Development selesai tepat waktu | Menunda Phase 1 |
| Staging environment siap | Menunda Phase 3 |
| Data uji tersedia | Menunda Phase 2 & 3 |
| Pengguna UAT tersedia | Menunda Phase 4 |
| Bug fix dari developer | Menunda Phase 5 |

---

## 4.5 Buffer dan Kontingensi

| Situasi | Rencana Kontingensi |
|---------|---------------------|
| Development terlambat 1 minggu | Mulai unit testing lebih awal untuk modul yang sudah selesai |
| Banyak defect ditemukan | Tambah 1 minggu buffer sebelum UAT |
| UAT memerlukan perubahan besar | Kembali ke Phase 3 untuk modul yang terpengaruh |
| Anggota tim tidak tersedia | Redistribusi tugas ke anggota lain |

---

**Document Control**

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-04-02 | QA Team | Initial version |
