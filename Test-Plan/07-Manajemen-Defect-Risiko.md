# 7. Manajemen Defect & Risiko
## Mukhbitah - Platform Gallery Hijab

**Version:** 1.0  
**Date:** April 2, 2026  
**Prepared by:** QA Team

---

## 7.1 Manajemen Defect

### 7.1.1 Siklus Hidup Defect

```
New (Baru)
    ↓
Assigned (Ditugaskan ke Developer)
    ↓
In Progress (Sedang Diperbaiki)
    ↓
Fixed (Sudah Diperbaiki)
    ↓
Verified (Diverifikasi QA)
    ↓
Closed (Ditutup)

Dari New → Rejected (Bukan Bug / Duplikat)
Dari Verified → Reopened (Perbaikan Tidak Berhasil)
```

---

### 7.1.2 Klasifikasi Severity

| Severity | Deskripsi | Contoh | Response Time |
|----------|-----------|--------|---------------|
| 🔴 **Critical** | Sistem crash, data loss, tidak bisa digunakan | Pembayaran gagal total, database corrupt | 4 jam |
| 🟠 **High** | Fitur utama tidak berfungsi | Tidak bisa tambah ke keranjang, login gagal | 1 hari kerja |
| 🟡 **Medium** | Fitur sebagian tidak berfungsi | Filter tidak bekerja, loading lambat | 3 hari kerja |
| 🟢 **Low** | Masalah minor, kosmetik | Typo, alignment sedikit meleset | 1 minggu |

---

### 7.1.3 Klasifikasi Priority

| Priority | Deskripsi | Tindakan |
|----------|-----------|----------|
| **P1** | Harus diperbaiki sebelum rilis | Blokir rilis |
| **P2** | Sebaiknya diperbaiki sebelum rilis | Tunda rilis jika tidak diperbaiki |
| **P3** | Bisa diperbaiki setelah rilis | Masukkan ke rilis berikutnya |
| **P4** | Nice to have | Backlog |

---

### 7.1.4 Prosedur Pelaporan Bug

**Informasi Wajib dalam Laporan Bug:**

```markdown
**Defect ID**: BUG-XXX
**Judul**: [Deskripsi singkat dan jelas]
**Severity**: Critical / High / Medium / Low
**Priority**: P1 / P2 / P3 / P4
**Status**: New

**Lingkungan**:
- Browser: [Chrome 124]
- OS: [Windows 11]
- Perangkat: [Desktop]
- URL: [https://mukhbitah-staging.vercel.app/...]

**Langkah Reproduksi**:
1. [Langkah 1]
2. [Langkah 2]
3. [Langkah 3]

**Hasil yang Diharapkan**:
[Apa yang seharusnya terjadi]

**Hasil Aktual**:
[Apa yang sebenarnya terjadi]

**Screenshot/Video**:
[Lampirkan bukti]

**Log Error**:
[Lampirkan log jika ada]

**Dilaporkan oleh**: [Nama]
**Tanggal**: [Tanggal]
```

---

### 7.1.5 Alur Eskalasi Defect

| Kondisi | Eskalasi ke |
|---------|-------------|
| Defect Critical tidak diperbaiki dalam 4 jam | QA Lead → Project Manager |
| Defect High tidak diperbaiki dalam 1 hari | QA Lead → Technical Lead |
| Defect P1 mengancam jadwal rilis | Project Manager → Stakeholder |
| Defect keamanan ditemukan | QA Lead → Technical Lead → Segera |

---

### 7.1.6 Tools Manajemen Defect

| Tool | Fungsi |
|------|--------|
| **Jira** | Tracking defect, assignment, status update |
| **GitHub Issues** | Defect terkait kode |
| **Slack** | Notifikasi defect kritis |
| **Confluence** | Dokumentasi defect patterns |

---

## 7.2 Manajemen Risiko

### 7.2.1 Risiko Area Tinggi

#### Risiko 1: Kegagalan Integrasi Pembayaran

| Atribut | Detail |
|---------|--------|
| **Risiko** | Payment gateway gagal atau tidak merespons |
| **Dampak** | Kritis — bisnis tidak bisa menerima pembayaran |
| **Probabilitas** | Rendah |
| **Mitigasi** | Testing ekstensif di sandbox; fallback payment method; error handling dan retry logic; monitoring payment success rate |

---

#### Risiko 2: Masalah Performa 3D Viewer

| Atribut | Detail |
|---------|--------|
| **Risiko** | 3D model loading lambat atau tidak kompatibel di semua browser |
| **Dampak** | Sedang — pengalaman pengguna terganggu |
| **Probabilitas** | Sedang |
| **Mitigasi** | Optimasi ukuran model 3D; lazy loading; fallback ke gambar 2D; testing di berbagai perangkat |

---

#### Risiko 3: Race Condition pada Stok

| Atribut | Detail |
|---------|--------|
| **Risiko** | Dua pengguna membeli item terakhir secara bersamaan (overselling) |
| **Dampak** | Tinggi — masalah inventori dan kepercayaan pelanggan |
| **Probabilitas** | Sedang |
| **Mitigasi** | Transaksi atomic di database; optimistic locking; concurrency testing ekstensif |

---

#### Risiko 4: Kerentanan Keamanan

| Atribut | Detail |
|---------|--------|
| **Risiko** | Data breach, unauthorized access, atau serangan injeksi |
| **Dampak** | Kritis — legal, reputasi, dan kepercayaan pengguna |
| **Probabilitas** | Rendah |
| **Mitigasi** | Security testing di semua level; penetration testing; audit keamanan berkala; ikuti panduan OWASP |

---

### 7.2.2 Risiko Jadwal

| Risiko | Dampak | Probabilitas | Mitigasi |
|--------|--------|--------------|----------|
| Development terlambat | Tinggi | Sedang | Buffer waktu di jadwal; mulai testing lebih awal untuk modul yang selesai |
| Waktu UAT tidak cukup | Sedang | Rendah | Perencanaan UAT lebih awal; demo pre-UAT; kriteria penerimaan yang jelas |
| Banyak defect ditemukan | Tinggi | Sedang | Shift-left testing; code review; automated testing sejak awal |

---

### 7.2.3 Risiko Sumber Daya

| Risiko | Dampak | Probabilitas | Mitigasi |
|--------|--------|--------------|----------|
| Anggota tim kunci tidak tersedia | Tinggi | Rendah | Cross-training; dokumentasi proses; backup resources |
| Tools atau environment tidak tersedia | Sedang | Rendah | Backup tools; setup lokal; tools berbasis cloud |
| Kurangnya test coverage | Tinggi | Sedang | Monitoring code coverage; risk-based testing; peer review test cases |

---

### 7.2.4 Pemantauan Risiko

**Review Risiko Mingguan:**
- Nilai status risiko saat ini
- Perbarui status risiko
- Identifikasi risiko baru
- Tinjau efektivitas mitigasi

**Laporan Risiko:**

| Frekuensi | Penerima | Isi |
|-----------|----------|-----|
| Mingguan | QA Lead, Project Manager | Status risiko, risiko baru, tindakan mitigasi |
| Bulanan | Stakeholder | Ringkasan risiko, tren, rekomendasi |
| Segera | Project Manager | Risiko Critical/High yang baru ditemukan |

---

**Document Control**

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-04-02 | QA Team | Initial version |
