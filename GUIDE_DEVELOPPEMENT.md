# Guide de Développement - Portfolio

## Prérequis

### Outils nécessaires
- Node.js 18+ 
- npm ou pnpm
- Git
- Éditeur de code (VS Code recommandé)

### Extensions VS Code recommandées
- Astro
- Tailwind CSS IntelliSense
- Auto Rename Tag
- Prettier - Code formatter
- GitLens

## Installation et Setup

### 1. Initialisation du projet
```bash
npm create astro@latest portfolio
cd portfolio
npm install
```

### 2. Ajout des dépendances
```bash
npm install @astrojs/tailwind @astrojs/mdx
npm install @tailwindcss/typography
npm install @astrojs/sitemap @astrojs/rss
```

### 3. Configuration initiale
Voir les fichiers de configuration dans `/config/`

## Structure du projet

```
portfolio/
├── src/
│   ├── components/        # Composants réutilisables
│   │   ├── ui/           # Composants UI de base
│   │   ├── layout/       # Composants de layout
│   │   └── sections/     # Sections de page
│   ├── content/          # Contenu Markdown
│   │   ├── blog/         # Articles de blog
│   │   └── config.ts     # Schema des collections
│   ├── layouts/          # Layouts de page
│   ├── pages/            # Pages du site
│   ├── styles/           # Styles globaux
│   └── utils/            # Utilitaires
├── public/               # Assets statiques
│   ├── images/           # Images du site
│   └── icons/            # Icônes
└── docs/                 # Documentation
```

## Conventions de code

### Nommage des fichiers
- Composants: `PascalCase.astro`
- Pages: `kebab-case.astro`
- Utilitaires: `camelCase.ts`
- Assets: `kebab-case.ext`

### Structure des composants
```astro
---
// Imports et logique TypeScript
interface Props {
  title: string;
  description?: string;
}

const { title, description } = Astro.props;
---

<!-- HTML avec classes Tailwind -->
<section class="container mx-auto px-4">
  <h2 class="text-2xl font-bold">{title}</h2>
  {description && <p class="text-gray-600">{description}</p>}
</section>

<style>
  /* Styles CSS si nécessaire */
</style>
```

### Classes Tailwind recommandées
```css
/* Conteneurs */
.container { @apply mx-auto max-w-7xl px-4 sm:px-6 lg:px-8; }

/* Typographie */
.heading-1 { @apply text-4xl md:text-5xl font-bold; }
.heading-2 { @apply text-2xl md:text-3xl font-semibold; }
.body-text { @apply text-base text-gray-600 dark:text-gray-300; }

/* Cartes */
.card { @apply bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6; }
```

## Workflow de développement

### 1. Démarrage du serveur de développement
```bash
npm run dev
```

### 2. Création d'un nouvel article
```bash
# Créer le fichier dans src/content/blog/
touch src/content/blog/mon-article.md
```

Structure de l'article:
```markdown
---
title: "Titre de l'article"
description: "Description courte"
pubDate: 2025-08-19
author: "Votre nom"
image: "/images/article-cover.jpg"
tags: ["tech", "web"]
category: "Development"
readTime: 5
---

Contenu de l'article en Markdown...
```

### 3. Ajout d'un composant
```astro
---
// src/components/ui/Button.astro
interface Props {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
}

const { variant = 'primary', size = 'md', href } = Astro.props;

const baseClasses = 'inline-flex items-center justify-center font-medium transition-colors';
const variants = {
  primary: 'bg-blue-600 hover:bg-blue-700 text-white',
  secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-900'
};
const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg'
};

const classes = `${baseClasses} ${variants[variant]} ${sizes[size]}`;
---

{href ? (
  <a href={href} class={classes}>
    <slot />
  </a>
) : (
  <button class={classes}>
    <slot />
  </button>
)}
```

## Testing et qualité

### Tests de build
```bash
npm run build
npm run preview
```

### Vérification du code
```bash
# Linting (si configuré)
npm run lint

# Formatage
npm run format
```

### Audit de performance
- Utiliser Lighthouse dans Chrome DevTools
- Tester sur différents appareils
- Vérifier les Core Web Vitals

## Déploiement

### Build de production
```bash
npm run build
```

### Test local du build
```bash
npm run preview
```

### Déploiement automatique
Le déploiement se fait automatiquement via GitHub Actions lors d'un push sur la branche `main`.

## Bonnes pratiques

### Performance
- Optimiser les images (WebP, tailles multiples)
- Utiliser le lazy loading
- Minimiser les requêtes externes
- Précharger les ressources critiques

### SEO
- Remplir tous les meta tags
- Utiliser des URLs propres
- Ajouter du contenu alt aux images
- Structurer le contenu avec les balises heading

### Accessibilité
- Contraste suffisant pour les couleurs
- Navigation au clavier
- Textes alternatifs pour les images
- Structure sémantique HTML

### Maintenance
- Commenter le code complexe
- Documenter les nouvelles fonctionnalités
- Tester sur plusieurs navigateurs
- Garder les dépendances à jour
