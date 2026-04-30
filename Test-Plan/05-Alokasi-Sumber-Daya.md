# 5. Alokasi Sumber Daya (Resource Allocation)
## Mukhbitah - Platform Gallery Hijab

**Version:** 1.0  
**Date:** April 2, 2026  
**Prepared by:** QA Team

---

## 5.1 Tim Pengujian

### 5.1.1 Struktur Tim

| Peran | Alokasi | Tanggung Jawab |
|-------|---------|----------------|
| **QA Lead** | 100% | Perencanaan test, koordinasi tim, pelaporan, review test cases, eskalasi defect |
| **QA Engineer 1** | 100% | Functional testing, penulisan & eksekusi test cases, otomasi E2E |
| **QA Engineer 2** | 100% | Performance testing, security testing, compatibility testing |
| **Developer 1** | 50% | Unit testing, perbaikan bug, code review |
| **Developer 2** | 50% | Unit testing, perbaikan bug, integration testing |
| **Business Analyst** | 25% | Koordinasi UAT, validasi requirements, sign-off |

---

### 5.1.2 Keahlian yang Dibutuhkan

**QA Team:**

| Keahlian | Level |
|----------|-------|
| Manual testing | Expert |
| Test automation (Cypress/Playwright) | Intermediate |
| API testing (Postman) | Intermediate |
| Performance testing (k6/JMeter) | Intermediate |
| Security testing dasar | Basic |
| JavaScript/TypeScript | Intermediate |
| SQL | Basic |
| Git | Intermediate |

**Development Team:**

| Keahlian | Level |
|----------|-------|
| Unit testing (Jest) | Expert |
| React Testing Library | Intermediate |
| Debugging | Expert |
| Code review | Expert |

---

### 5.1.3 Matriks Tanggung Jawab (RACI)

| Aktivitas | QA Lead | QA Eng 1 | QA Eng 2 | Dev 1 | Dev 2 | BA |
|-----------|---------|----------|----------|-------|-------|-----|
| Test planning | **R/A** | C | C | C | C | C |
| Unit testing | I | I | I | **R** | **R** | I |
| Integration testing | A | **R** | C | **R** | **R** | I |
| Functional testing | A | **R** | C | I | I | C |
| Performance testing | A | C | **R** | I | I | I |
| Security testing | A | C | **R** | I | I | I |
| UAT coordination | A | C | I | I | I | **R** |
| Defect reporting | A | **R** | **R** | I | I | I |
| Bug fixing | I | I | I | **R** | **R** | I |
| Test reporting | **R/A** | C | C | I | I | C |

*R = Responsible, A = Accountable, C = Consulted, I = Informed*

---

## 5.2 Tools Pengujian

### 5.2.1 Tools Testing

| Tool | Tujuan | Lisensi | Fase |
|------|--------|---------|------|
| **Jest** | Unit testing | Open Source | Phase 1 |
| **React Testing Library** | Component testing | Open Source | Phase 1 |
| **@testing-library/jest-dom** | DOM assertions | Open Source | Phase 1 |
| **MSW (Mock Service Worker)** | API mocking | Open Source | Phase 2 |
| **Supertest** | API testing | Open Source | Phase 2 |
| **Cypress** | E2E testing | Open Source | Phase 3 |
| **Playwright** | E2E testing (alternatif) | Open Source | Phase 3 |
| **Postman** | API testing manual | Free/Paid | Phase 2–3 |
| **k6** | Performance testing | Open Source | Phase 3 |
| **JMeter** | Performance testing (alternatif) | Open Source | Phase 3 |
| **OWASP ZAP** | Security scanning | Open Source | Phase 3 |
| **Lighthouse** | Performance audit | Open Source | Phase 3 |

### 5.2.2 Tools Manajemen

| Tool | Tujuan |
|------|--------|
| **Jira** | Manajemen test case, bug tracking |
| **Confluence** | Dokumentasi testing |
| **GitHub** | Version control, CI/CD pipeline |
| **Slack** | Komunikasi tim |
| **Google Sheets** | Tracking progress testing |

---

## 5.3 Kebutuhan Infrastruktur

| Kebutuhan | Spesifikasi | Tujuan |
|-----------|-------------|--------|
| Development machines | 4 unit, RAM 16GB, SSD | Unit & integration testing |
| Staging server | Vercel staging deployment | System testing & UAT |
| Firebase/Supabase test project | Terpisah dari production | Data testing terisolasi |
| Payment gateway sandbox | Midtrans test mode | Testing pembayaran |
| Email service test mode | SendGrid sandbox | Testing notifikasi email |
| Browser stack / local browsers | Chrome, Firefox, Safari, Edge | Compatibility testing |
| Mobile devices | iOS dan Android | Mobile testing |

---

## 5.4 Estimasi Effort

| Fase | QA Lead | QA Eng 1 | QA Eng 2 | Dev 1 | Dev 2 | Total |
|------|---------|----------|----------|-------|-------|-------|
| Phase 1 (Unit) | 8 jam | 0 | 0 | 80 jam | 80 jam | 168 jam |
| Phase 2 (Integration) | 16 jam | 40 jam | 16 jam | 40 jam | 40 jam | 152 jam |
| Phase 3 (System) | 24 jam | 80 jam | 80 jam | 16 jam | 16 jam | 216 jam |
| Phase 4 (UAT) | 16 jam | 24 jam | 8 jam | 8 jam | 8 jam | 64 jam |
| Phase 5 (Regression) | 16 jam | 32 jam | 16 jam | 16 jam | 16 jam | 96 jam |
| **Total** | **80 jam** | **176 jam** | **120 jam** | **160 jam** | **160 jam** | **696 jam** |

---

**Document Control**

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-04-02 | QA Team | Initial version |
