# Sjeffy - Turborepo Monorepo

Een Turborepo monorepo met Astro frontend en Sanity Studio backend.

## Project Structuur

```
sjeffy/
├── apps/
│   ├── astro-sjeffy/      # Frontend - Astro applicatie
│   └── studio-sjeffy/     # Backend - Sanity Studio CMS
├── turbo.json             # Turborepo configuratie
├── package.json           # Root workspace
└── pnpm-workspace.yaml    # Workspace definitie
```

## 🚀 Getting Started

### Installatie

```bash
# Installeer alle dependencies
pnpm install
```

### Development

```bash
# Start beide apps in dev mode (parallel)
pnpm dev

# Start alleen frontend
pnpm dev --filter=astro-sjeffy

# Start alleen studio
pnpm dev --filter=studio-sjeffy
```

De apps draaien op:
- **Frontend (Astro)**: http://localhost:4321
- **Backend (Sanity Studio)**: http://localhost:3333

### Build

```bash
# Build alle apps
pnpm build

# Build alleen frontend
pnpm build --filter=astro-sjeffy

# Build alleen studio
pnpm build --filter=studio-sjeffy
```

### Preview

```bash
# Preview de frontend build
pnpm preview --filter=astro-sjeffy
```

## 📦 Wat is Turborepo?

Turborepo is een high-performance build system voor monorepos met:

- **⚡ Parallel execution**: Bouwt meerdere packages tegelijk
- **🎯 Smart caching**: Skip werk dat al gedaan is
- **🔄 Incremental builds**: Alleen veranderde code wordt gerebuild
- **📊 Task pipelines**: Automatisch de juiste volgorde

## 🛠️ Tech Stack

- **Frontend**: Astro + TailwindCSS
- **Backend**: Sanity Studio
- **Monorepo**: Turborepo
- **Package Manager**: pnpm

## 📚 Resources

- [Turborepo Documentation](https://turbo.build/repo/docs)
- [Astro Documentation](https://docs.astro.build)
- [Sanity Documentation](https://www.sanity.io/docs)
