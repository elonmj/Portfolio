# Documentation Technique - Portfolio Astro

## Stack Technique

### Framework Principal: Astro.js
- **Version**: Latest (v4+)
- **Avantages**: 
  - Génération statique ultra-rapide
  - Support natif du Markdown
  - Composants modulaires
  - SEO optimisé par défaut
  - Intégration facile avec Tailwind

### Styling: Tailwind CSS
- **Configuration**: Utilisation des classes utilitaires
- **Dark Mode**: Configuré avec la classe `dark`
- **Responsive**: Mobile-first approach
- **Typographie**: Police Manrope (Google Fonts)

### Content Management
- **Blog**: Collections Astro avec Markdown
- **Assets**: Optimisation automatique des images
- **SEO**: Meta tags générés automatiquement

## Structure de données

### Configuration Astro (astro.config.mjs)
```javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [tailwind(), mdx()],
  site: 'https://votre-username.github.io',
  base: '/votre-repo',
});
```

### Structure des contenus
```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()),
    category: z.string(),
    readTime: z.number(),
  }),
});

export const collections = { blog };
```

## Composants Principaux

### Layout de base
- Header avec navigation
- Footer simple
- Support dark mode
- Meta tags SEO

### Composants UI
- `Navigation.astro`: Menu responsive
- `BlogCard.astro`: Carte d'article
- `ProjectCard.astro`: Carte de projet
- `Section.astro`: Sections réutilisables
- `ThemeToggle.astro`: Sélecteur de thème

### Pages principales
- `index.astro`: Page d'accueil
- `about.astro`: À propos
- `blog/index.astro`: Liste des articles
- `blog/[...slug].astro`: Article individuel
- `projects.astro`: Portfolio projets

## Performance

### Optimisations
- Images optimisées (WebP, AVIF)
- CSS critique inline
- Lazy loading
- Minification automatique
- Preload des fonts

### Métriques cibles
- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Cumulative Layout Shift: < 0.1

## SEO

### Meta tags
```astro
---
const { title, description, image } = Astro.props;
---
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:image" content={image} />
<meta name="twitter:card" content="summary_large_image" />
```

### Sitemap & RSS
- Génération automatique du sitemap.xml
- Feed RSS pour le blog
- Structured data (JSON-LD)

## Responsive Design

### Breakpoints Tailwind
- `sm`: 640px+
- `md`: 768px+
- `lg`: 1024px+
- `xl`: 1280px+

### Stratégie Mobile-First
1. Design mobile par défaut
2. Progressive enhancement pour desktop
3. Navigation adaptative
4. Images responsive

## Déploiement

### GitHub Pages
```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: actions/deploy-pages@v1
        with:
          path: ./dist
```

### Variables d'environnement
- `SITE_URL`: URL de production
- `BASE_PATH`: Chemin de base si nécessaire

## Maintenance

### Scripts npm
```json
{
  "dev": "astro dev",
  "build": "astro build",
  "preview": "astro preview",
  "astro": "astro"
}
```

### Outils de développement
- ESLint pour la qualité du code
- Prettier pour le formatage
- TypeScript pour le typage
- Husky pour les pre-commit hooks
