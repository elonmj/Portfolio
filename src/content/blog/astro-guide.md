---
title: "Guide complet d'Astro.js"
description: "Découvrez pourquoi Astro.js est le framework parfait pour créer des sites web rapides et modernes"
pubDate: 2025-08-18
author: "Votre Nom"
image: "/images/astro-guide.jpg"
tags: ["astro", "javascript", "framework", "performance"]
category: "Tech"
readTime: 8
draft: false
---

# Pourquoi j'ai choisi Astro.js pour mon portfolio

Astro.js est devenu mon framework de choix pour créer des sites web statiques performants. Voici pourquoi.

## Les avantages d'Astro

### 1. Performance native
Astro génère du HTML statique par défaut, ce qui signifie :
- Temps de chargement ultra-rapides
- Scores Lighthouse excellents
- Pas de JavaScript inutile côté client

### 2. Flexibilité des composants
```astro
---
// Logique TypeScript/JavaScript
const greeting = "Hello World";
---

<!-- Template HTML -->
<h1>{greeting}</h1>

<style>
  h1 {
    color: blue;
  }
</style>
```

### 3. Écosystème riche
- Support de React, Vue, Svelte
- Intégrations officielles (Tailwind, MDX, etc.)
- Déploiement facile sur Vercel, Netlify, GitHub Pages

## Architecture Island
Le concept d'**Island Architecture** permet de :
- Hydrater seulement les composants interactifs
- Réduire le bundle JavaScript
- Améliorer les performances globales

## Collections de contenu
Les collections permettent de gérer le contenu de manière type-safe :

```typescript
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    tags: z.array(z.string()),
  }),
});
```

## Conclusion

Astro.js offre le meilleur des deux mondes : la simplicité du développement moderne et la performance des sites statiques. C'est le choix idéal pour un portfolio ou un blog.
