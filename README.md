# Portfolio Personnel

Un portfolio moderne et performant développé avec Astro.js et Tailwind CSS.

## 🚀 Fonctionnalités

- ⚡ **Performance optimale** avec Astro.js
- 🎨 **Design responsive** avec Tailwind CSS
- 📝 **Blog intégré** avec support Markdown/MDX
- 🌙 **Mode sombre/clair** automatique
- 🔍 **SEO optimisé** avec meta tags et sitemap
- 📱 **Mobile-first** design
- 🚀 **Déploiement automatique** sur GitHub Pages

## 🛠 Technologies

- [Astro.js](https://astro.build/) - Framework de génération de sites statiques
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitaire
- [TypeScript](https://www.typescriptlang.org/) - Typage statique JavaScript
- [MDX](https://mdxjs.com/) - Markdown enrichi avec composants

## 📦 Installation

1. **Cloner le repository**
   ```bash
   git clone https://github.com/votre-username/portfolio.git
   cd portfolio
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Démarrer le serveur de développement**
   ```bash
   npm run dev
   ```

4. **Ouvrir dans le navigateur**
   ```
   http://localhost:4321
   ```

## 📝 Scripts disponibles

- `npm run dev` - Démarrer le serveur de développement
- `npm run build` - Construire le site pour la production
- `npm run preview` - Prévisualiser le build de production
- `npm run astro` - Lancer les commandes Astro CLI

## 📁 Structure du projet

```
├── src/
│   ├── components/          # Composants réutilisables
│   │   ├── ui/             # Composants UI de base
│   │   ├── Navigation.astro
│   │   └── Footer.astro
│   ├── content/            # Contenu du blog (Markdown)
│   │   ├── blog/           # Articles de blog
│   │   └── config.ts       # Configuration des collections
│   ├── layouts/            # Layouts de page
│   │   └── Layout.astro
│   ├── pages/              # Pages du site
│   │   ├── index.astro     # Page d'accueil
│   │   ├── projects.astro  # Page projets
│   │   └── blog/           # Pages du blog
│   └── styles/             # Styles globaux
│       └── global.css
├── public/                 # Assets statiques
│   └── images/             # Images du site
└── docs/                   # Documentation
```

## ✍️ Ajouter un article de blog

1. **Créer un nouveau fichier** dans `src/content/blog/`
   ```bash
   touch src/content/blog/mon-article.md
   ```

2. **Ajouter le front matter** et le contenu
   ```markdown
   ---
   title: "Titre de l'article"
   description: "Description courte"
   pubDate: 2025-08-19
   author: "Votre Nom"
   image: "/images/article-cover.jpg"
   tags: ["tech", "web"]
   category: "Development"
   readTime: 5
   ---

   Contenu de l'article en Markdown...
   ```

## 🎨 Personnalisation

### Couleurs
Les couleurs principales peuvent être modifiées dans `src/styles/global.css` :
```css
.text-gradient {
  background: linear-gradient(to right, #2563eb, #9333ea);
}
```

### Navigation
Modifier les liens de navigation dans `src/components/Navigation.astro` :
```javascript
const navItems = [
  { name: 'Resume', href: '/', icon: '📝' },
  { name: 'Blog', href: '/blog', icon: '📖' },
  // Ajouter vos liens...
];
```

### Informations personnelles
Mettre à jour les informations dans :
- `src/layouts/Layout.astro` (meta tags)
- `src/pages/index.astro` (contenu de la page d'accueil)
- `src/components/Footer.astro` (nom et liens)

## 🚀 Déploiement

### GitHub Pages (Automatique)

1. **Pousser sur GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Activer GitHub Pages** dans les paramètres du repository
   - Aller dans Settings > Pages
   - Source: GitHub Actions

3. **Le site sera disponible** à `https://votre-username.github.io/portfolio`

### Autres plateformes

- **Vercel** : Connecter le repository GitHub
- **Netlify** : Glisser-déposer le dossier `dist/` après `npm run build`
- **Cloudflare Pages** : Connecter le repository GitHub

## 📈 Performance

Ce portfolio est optimisé pour la performance :
- Score Lighthouse 95+ attendu
- Images optimisées automatiquement
- CSS et JavaScript minifiés
- Génération de sitemap automatique
- Meta tags SEO complets

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## � Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Contact

- **Email** : votre.email@example.com
- **LinkedIn** : [Votre Profil](https://linkedin.com/in/votre-profile)
- **GitHub** : [Votre Username](https://github.com/votre-username)

---

⭐ N'hésitez pas à donner une étoile si ce projet vous a aidé !
