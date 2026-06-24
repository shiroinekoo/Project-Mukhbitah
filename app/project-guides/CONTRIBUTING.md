# 🤝 Contributing to Mukhbitah

Terima kasih atas minat Anda untuk berkontribusi pada Mukhbitah! Kami sangat menghargai setiap kontribusi, baik itu bug report, feature request, atau pull request.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)

## 📜 Code of Conduct

Proyek ini mengikuti prinsip:
- Bersikap hormat dan profesional
- Menerima kritik konstruktif
- Fokus pada yang terbaik untuk komunitas
- Menunjukkan empati terhadap anggota komunitas lainnya

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x atau lebih tinggi
- npm atau yarn
- Git

### Setup Development Environment

1. **Fork repository**
   ```bash
   # Fork via GitHub UI, kemudian clone
   git clone https://github.com/YOUR_USERNAME/mukhbitah.git
   cd mukhbitah
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment file**
   ```bash
   cp .env.example .env.local
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open browser**
   ```
   http://localhost:3000
   ```

## 💻 Development Workflow

### Branch Naming Convention

- `feature/nama-fitur` - Untuk fitur baru
- `fix/nama-bug` - Untuk bug fixes
- `docs/nama-doc` - Untuk dokumentasi
- `refactor/nama-refactor` - Untuk refactoring
- `test/nama-test` - Untuk testing

### Example:
```bash
git checkout -b feature/ai-assistant
git checkout -b fix/cart-calculation
git checkout -b docs/api-documentation
```

## 📝 Coding Standards

### TypeScript

- Gunakan TypeScript untuk semua file baru
- Definisikan types/interfaces dengan jelas
- Hindari `any` type kecuali benar-benar diperlukan

```typescript
// ✅ Good
interface Product {
  id: number;
  name: string;
  price: number;
}

// ❌ Bad
const product: any = { ... };
```

### React Components

- Gunakan functional components dengan hooks
- Pisahkan logic dan presentation
- Gunakan meaningful component names

```typescript
// ✅ Good
export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  // ...
}

// ❌ Bad
export default function PC({ p }: any) {
  // ...
}
```

### Styling

- Gunakan Tailwind CSS classes
- Ikuti design system yang ada
- Gunakan custom classes di globals.css untuk reusable styles

```typescript
// ✅ Good
<button className="btn-primary">
  Click Me
</button>

// ❌ Bad
<button style={{ backgroundColor: 'blue', padding: '10px' }}>
  Click Me
</button>
```

### File Organization

```
components/
  ├── ComponentName.tsx       # Component file
  └── ComponentName.test.tsx  # Test file (jika ada)

app/
  ├── page.tsx               # Page component
  └── layout.tsx             # Layout component
```

## 📝 Commit Guidelines

Gunakan conventional commits format:

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types:
- `feat`: Fitur baru
- `fix`: Bug fix
- `docs`: Dokumentasi
- `style`: Formatting, missing semicolons, etc
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks

### Examples:

```bash
feat(cart): add quantity selector
fix(navbar): resolve mobile menu overflow
docs(readme): update installation steps
style(product-card): improve hover animation
refactor(api): simplify product fetching logic
test(cart): add unit tests for cart calculations
chore(deps): update dependencies
```

## 🔄 Pull Request Process

### Before Submitting

1. **Update your fork**
   ```bash
   git remote add upstream https://github.com/original/mukhbitah.git
   git fetch upstream
   git merge upstream/main
   ```

2. **Run tests** (jika ada)
   ```bash
   npm run test
   ```

3. **Check linting**
   ```bash
   npm run lint
   ```

4. **Build project**
   ```bash
   npm run build
   ```

### Submitting PR

1. **Push to your fork**
   ```bash
   git push origin feature/your-feature
   ```

2. **Create Pull Request**
   - Buka GitHub repository
   - Click "New Pull Request"
   - Select your branch
   - Fill in PR template

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tested locally
- [ ] Added/updated tests
- [ ] All tests passing

## Screenshots (if applicable)
Add screenshots here

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Commented complex code
- [ ] Documentation updated
- [ ] No new warnings
```

### Review Process

1. Maintainer akan review PR Anda
2. Mungkin ada request untuk perubahan
3. Setelah approved, PR akan di-merge
4. Branch akan dihapus setelah merge

## 🐛 Bug Reports

Gunakan GitHub Issues dengan template:

```markdown
**Describe the bug**
Clear description of the bug

**To Reproduce**
Steps to reproduce:
1. Go to '...'
2. Click on '...'
3. See error

**Expected behavior**
What you expected to happen

**Screenshots**
If applicable

**Environment:**
- OS: [e.g. Windows 10]
- Browser: [e.g. Chrome 96]
- Version: [e.g. 1.0.0]
```

## 💡 Feature Requests

Gunakan GitHub Issues dengan template:

```markdown
**Feature Description**
Clear description of the feature

**Problem it Solves**
What problem does this solve?

**Proposed Solution**
How should it work?

**Alternatives Considered**
Other solutions you've considered

**Additional Context**
Any other context or screenshots
```

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Three.js Documentation](https://threejs.org/docs)

## 🙏 Thank You!

Terima kasih telah berkontribusi pada Mukhbitah! Setiap kontribusi, sekecil apapun, sangat berarti bagi kami.

---

**Questions?** Feel free to reach out:
- Email: hello@mukhbitah.com
- GitHub Issues: [Create an issue](https://github.com/mukhbitah/mukhbitah/issues)
