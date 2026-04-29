# Contributing to Mukhbitah Documentation

Terima kasih atas minat Anda untuk berkontribusi pada dokumentasi Mukhbitah! Dokumen ini menjelaskan cara berkontribusi dan standar yang harus diikuti.

---

## 📋 Table of Contents

1. [Getting Started](#getting-started)
2. [Documentation Structure](#documentation-structure)
3. [Writing Guidelines](#writing-guidelines)
4. [Updating Documentation](#updating-documentation)
5. [Review Process](#review-process)

---

## Getting Started

### Prerequisites

- Akses ke repository Mukhbitah
- Text editor (VS Code recommended)
- Basic knowledge of Markdown
- Pemahaman tentang project Mukhbitah

### Setup

1. Clone repository
```bash
git clone https://github.com/mukhbitah/mukhbitah.git
cd mukhbitah
```

2. Create a new branch
```bash
git checkout -b docs/your-update-description
```

3. Make your changes

4. Commit and push
```bash
git add docs/
git commit -m "docs: your update description"
git push origin docs/your-update-description
```

5. Create a Pull Request

---

## Documentation Structure

```
docs/
├── README.md                                    # Overview
├── DOCUMENTATION_INDEX.md                       # Index lengkap
├── DOCUMENTATION_SUMMARY.md                     # Summary
├── CONTRIBUTING_TO_DOCS.md                      # File ini
│
├── 01-Software-Requirements-Specification/
│   └── SRS.md                                   # Requirements
│
├── 02-Software-Design-Documentation/
│   └── SDD.md                                   # Design
│
├── 03-Software-Testing-Documentation/
│   └── STD.md                                   # Testing
│
├── 04-Software-User-Documentation/
│   └── USER_GUIDE.md                            # User Guide
│
└── 05-Test-Plan/
    └── TEST_PLAN.md                             # Test Plan
```

---

## Writing Guidelines

### General Principles

1. **Clarity**: Tulis dengan jelas dan mudah dipahami
2. **Consistency**: Ikuti format dan style yang ada
3. **Completeness**: Pastikan informasi lengkap
4. **Accuracy**: Verifikasi semua informasi teknis
5. **Relevance**: Hanya tambahkan informasi yang relevan

### Language

- **SRS, SDD, STD, Test Plan**: Bahasa Inggris (technical)
- **User Guide**: Bahasa Indonesia (user-facing)
- Gunakan bahasa formal dan profesional
- Hindari jargon yang tidak perlu

### Formatting

#### Headers
```markdown
# Level 1 - Document Title
## Level 2 - Main Section
### Level 3 - Subsection
#### Level 4 - Detail
```

#### Lists
```markdown
**Unordered:**
- Item 1
- Item 2
  - Sub-item 2.1
  - Sub-item 2.2

**Ordered:**
1. First step
2. Second step
3. Third step
```

#### Tables
```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data 1   | Data 2   | Data 3   |
| Data 4   | Data 5   | Data 6   |
```

#### Code Blocks
````markdown
```typescript
// TypeScript code
interface Example {
  id: string;
  name: string;
}
```

```bash
# Shell commands
npm install
npm run dev
```
````

#### Emphasis
```markdown
**Bold** for important terms
*Italic* for emphasis
`code` for inline code
```

#### Links
```markdown
[Link Text](URL)
[Internal Link](#section-id)
```

#### Images
```markdown
![Alt Text](image-url)
```

---

## Updating Documentation

### When to Update

Update dokumentasi ketika:
- ✅ Menambah fitur baru
- ✅ Mengubah fitur existing
- ✅ Memperbaiki bug yang mempengaruhi behavior
- ✅ Mengubah API atau interface
- ✅ Menemukan kesalahan dalam dokumentasi
- ✅ Menambah informasi yang berguna

### What to Update

#### SRS (Software Requirements Specification)
Update ketika:
- Menambah/mengubah functional requirements
- Menambah/mengubah non-functional requirements
- Mengubah system features
- Menambah external interfaces

**Sections to update:**
- System Features (Section 3)
- External Interface Requirements (Section 4)
- Non-Functional Requirements (Section 5)

#### SDD (Software Design Documentation)
Update ketika:
- Mengubah arsitektur sistem
- Menambah/mengubah database schema
- Menambah/mengubah API endpoints
- Mengubah component design
- Mengubah security design

**Sections to update:**
- System Architecture (Section 2)
- Data Design (Section 3)
- Component Design (Section 4)
- Interface Design (Section 5)

#### STD (Software Testing Documentation)
Update ketika:
- Menambah test cases baru
- Mengubah test strategy
- Update test results
- Menambah robustness tests

**Sections to update:**
- Test Cases (Section 3)
- Robustness Testing (Section 4)
- Test Results (Section 7)

#### User Guide
Update ketika:
- Menambah fitur baru yang user-facing
- Mengubah user flow
- Menambah FAQ
- Memperbaiki instruksi yang tidak jelas

**Sections to update:**
- Relevant feature sections
- FAQ (Section 7)

#### Test Plan
Update ketika:
- Mengubah test strategy
- Menambah test phases
- Update test schedule
- Mengubah test resources

**Sections to update:**
- Test Strategy (Section 4)
- Test Schedule (Section 5)
- Test Resources (Section 6)

---

## Version Control

### Version Numbering

Gunakan Semantic Versioning:
- **Major** (1.0): Perubahan besar, breaking changes
- **Minor** (1.1): Penambahan fitur, backward compatible
- **Patch** (1.0.1): Perbaikan kecil, typo, clarifications

### Document Control Section

Setiap dokumen memiliki Document Control section di akhir:

```markdown
**Document Control**

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-04-30 | Development Team | Initial version |
| 1.1 | 2026-05-15 | John Doe | Added new feature X |
```

Update section ini setiap kali ada perubahan.

---

## Review Process

### Before Submitting

Checklist sebelum submit PR:

- [ ] Baca ulang untuk typo dan grammar
- [ ] Verifikasi semua link berfungsi
- [ ] Pastikan format konsisten
- [ ] Update version number
- [ ] Update Document Control section
- [ ] Update DOCUMENTATION_INDEX.md jika perlu
- [ ] Test code examples (jika ada)

### Pull Request

**PR Title Format:**
```
docs: brief description of changes

Examples:
docs: add new API endpoint documentation
docs: update user guide for checkout flow
docs: fix typo in SRS section 3.2
```

**PR Description Template:**
```markdown
## Changes Made
- List of changes

## Sections Updated
- Document name - Section number

## Reason for Changes
- Why these changes are needed

## Checklist
- [ ] Documentation updated
- [ ] Version number updated
- [ ] Links verified
- [ ] Format consistent
```

### Review Criteria

Reviewer akan check:
- ✅ Accuracy: Informasi teknis benar
- ✅ Clarity: Mudah dipahami
- ✅ Completeness: Informasi lengkap
- ✅ Consistency: Format dan style konsisten
- ✅ Grammar: Tidak ada typo atau grammar error

---

## Style Guide

### Technical Terms

Gunakan konsisten:
- **Frontend** (not Front-end or front end)
- **Backend** (not Back-end or back end)
- **E-commerce** (not ecommerce or e-Commerce)
- **API** (all caps)
- **ID** (not Id or id in prose)
- **URL** (not url or Url)

### Code Examples

```typescript
// ✅ Good: Clear, commented, complete
interface Product {
  id: string;           // Unique identifier
  name: string;         // Product name
  price: number;        // Price in IDR
}

// ❌ Bad: No comments, unclear
interface Product {
  id: string;
  name: string;
  price: number;
}
```

### Screenshots

Jika menambah screenshots:
- Gunakan resolusi yang jelas
- Highlight area penting
- Tambahkan caption
- Simpan di folder `docs/images/`
- Format: PNG atau JPG
- Naming: `feature-name-description.png`

---

## Common Mistakes to Avoid

### ❌ Don't

- Jangan copy-paste tanpa review
- Jangan gunakan bahasa informal
- Jangan skip version update
- Jangan commit tanpa test
- Jangan update tanpa reason

### ✅ Do

- Review sebelum commit
- Gunakan bahasa profesional
- Update version number
- Test semua changes
- Explain why changes needed

---

## Templates

### New Feature Documentation Template

```markdown
### Feature Name

#### Description
[Brief description of the feature]

#### Priority
High/Medium/Low

#### Functional Requirements

**REQ-XX.X.X:** [Requirement description]

**REQ-XX.X.X:** [Requirement description]

#### User Story
As a [user type], I want to [action] so that [benefit].

#### Acceptance Criteria
- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3

#### Technical Details
[Technical implementation details]

#### Test Cases
- TC-XX-XXX: [Test case description]
```

### Bug Fix Documentation Template

```markdown
### Bug Fix: [Bug Title]

#### Issue
[Description of the bug]

#### Root Cause
[What caused the bug]

#### Solution
[How it was fixed]

#### Impact
[What changed in the system]

#### Documentation Updates
- Updated: [Document] - [Section]
- Reason: [Why update was needed]
```

---

## Questions?

Jika ada pertanyaan tentang contributing to documentation:

**Email**: dev@mukhbitah.com  
**Slack**: #mukhbitah-docs  
**GitHub Issues**: Tag with `documentation` label

---

## Recognition

Contributors yang berkontribusi pada dokumentasi akan dicantumkan di:
- CONTRIBUTORS.md
- Release notes
- Documentation credits

---

**Thank you for contributing to Mukhbitah documentation!** 📚✨

Your contributions help make Mukhbitah better for everyone.
