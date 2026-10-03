# Portfolio — Emilio Demarny

Portfolio audiovisuel (BTS Métiers de l'Audiovisuel) : Next.js 15 (App Router), TypeScript, Tailwind CSS v4, Framer Motion et Lenis. Prêt à déployer sur Vercel.

## Démarrer

```bash
npm install
npm run dev
```

Le site est disponible sur http://localhost:3000.

## Modifier le contenu

Tout le contenu éditorial est centralisé dans [src/data/content.ts](src/data/content.ts) :

| Clé | Rôle |
| --- | --- |
| `site` | Nom, email, téléphone, réseaux sociaux, URL de production |
| `hero` | Vidéo de fond, titre d'accroche, texte d'intro |
| `about` | Portrait, paragraphes de présentation, chiffres clés |
| `services` | Les trois pôles de savoir-faire |
| `projects` | Les projets affichés sur l'accueil et la page Réalisations |
| `showreel` | ID de la vidéo YouTube du showreel |
| `testimonials` | Témoignages affichés dans le carrousel |
| `toolbox` | Matériel et logiciels affichés dans le bandeau défilant |
| `timeline` | Parcours affiché sur la page À propos |

## Remplacer les médias

Les images sont actuellement des placeholders (`picsum.photos`). Pour les vrais visuels :

1. Déposer les fichiers dans `public/images/` et `public/videos/`.
2. Remplacer les URL dans `src/data/content.ts` par des chemins locaux (ex. `/images/projets/nuit-blanche.jpg`).
3. Vidéo du hero : `public/videos/showreel.mp4` (H.264, ~1920×1080, 5–10 Mo max, sans audio). Tant que le fichier est absent, l'image poster s'affiche.
4. Une fois les placeholders retirés, supprimer `remotePatterns` dans [next.config.mjs](next.config.mjs) (garder `img.youtube.com` si la miniature YouTube est utilisée).

Formats recommandés : `.webp` ou `.jpg` en 1400×1750 pour les vignettes de projets, 1200×1600 pour le portrait.

## Formulaire de contact

La route [src/app/api/contact/route.ts](src/app/api/contact/route.ts) envoie les messages via [Resend](https://resend.com).

1. Créer un compte Resend et générer une clé API.
2. Copier `.env.example` vers `.env.local` et renseigner les variables.
3. Sur Vercel : **Settings → Environment Variables** → ajouter `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`.

Sans clé configurée, le formulaire propose automatiquement un lien d'envoi direct par mail.

## Déploiement Vercel

```bash
git init && git add . && git commit -m "init"
# puis pousser sur GitHub et importer le repo sur vercel.com
```

Vercel détecte Next.js automatiquement — aucune configuration de build n'est nécessaire. Penser ensuite à mettre à jour `site.url` dans `src/data/content.ts` avec le domaine final (utile pour le SEO, l'Open Graph et le sitemap).

## Structure

```
src/
  app/              pages (accueil, réalisations, à propos, contact, mentions légales)
    api/contact/    route d'envoi du formulaire
  components/       header, footer, sections de l'accueil, composants réutilisables
  data/content.ts   contenu éditorial
```
