/**
 * Source unique de vérité pour tout le contenu du site.
 * Modifier ce fichier suffit pour mettre le portfolio à jour.
 */

export const site = {
  name: "Emilio Demarny",
  firstName: "Emilio",
  lastName: "Demarny",
  role: "Étudiant en BTS Métiers de l'Audiovisuel",
  tagline: "cadreur • monteur • technicien image",
  // Option du BTS à ajuster : Image / Montage et Postproduction / Son /
  // Gestion de production / Techniques d'ingénierie et exploitation des équipements
  option: "Option Image",
  school: "BTS Métiers de l'Audiovisuel",
  location: "France",
  email: "contact@emiliodemarny.com",
  phone: "+33 6 00 00 00 00",
  url: "https://emiliodemarny.vercel.app",
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "YouTube", href: "https://www.youtube.com/" },
    { label: "Vimeo", href: "https://vimeo.com/" },
  ],
} as const;

export const nav = [
  { label: "Accueil", href: "/" },
  { label: "Réalisations", href: "/realisations" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
] as const;

/** Vidéo de fond du hero. Déposer le fichier dans /public/videos/. */
export const hero = {
  video: "/videos/showreel.mp4",
  poster: "https://picsum.photos/seed/emilio-hero/1920/1080",
  kicker: "Showreel 2026",
  titleLines: ["Chaque plan", "raconte", "quelque chose"],
  intro:
    "Étudiant en BTS Métiers de l'Audiovisuel, je cadre, je monte et je façonne des images qui transmettent une émotion plutôt qu'une simple information.",
};

export const about = {
  overline: "Qui suis-je",
  title: ["Là où l'image", "devient", "un récit"],
  image: "https://picsum.photos/seed/emilio-portrait/1200/1600",
  paragraphs: [
    "Je m'appelle Emilio Demarny, je suis étudiant en BTS Métiers de l'Audiovisuel. Depuis mes premiers tournages, j'ai appris le métier sur le terrain : la caméra à l'épaule, les contraintes de lumière, les imprévus et ce moment précis où une scène devient juste.",
    "Cadrage, lumière, montage, étalonnage, son : je travaille chaque étape de la chaîne pour livrer des films cohérents de bout en bout. Clips, captations d'événements, courts métrages, formats courts pour les réseaux sociaux — chaque projet est une nouvelle grammaire visuelle à inventer.",
    "Disponible en alternance, en stage et sur des projets freelance, j'aime les équipes qui avancent vite et les tournages où il faut trouver des solutions.",
  ],
  stats: [
    { value: "40+", label: "Projets réalisés" },
    { value: "5", label: "Années de pratique" },
    { value: "4K", label: "Captation & livraison" },
    { value: "100%", label: "Post-prod maison" },
  ],
};

export const services = [
  {
    index: "01",
    title: "Image & Cadrage",
    description:
      "Captation 4K, choix des optiques, mouvements d'appareil, lumière naturelle ou éclairage plateau. Je construis le cadre au service du récit.",
    tags: ["Caméra", "Lumière", "Multi-cam", "Gimbal"],
    image: "https://picsum.photos/seed/emilio-image/1200/1500",
  },
  {
    index: "02",
    title: "Montage & Post-production",
    description:
      "Dérushage, rythme, narration, habillage graphique et étalonnage. C'est là que le film trouve son souffle et son identité visuelle.",
    tags: ["Premiere Pro", "DaVinci", "After Effects", "Étalonnage"],
    image: "https://picsum.photos/seed/emilio-montage/1200/1500",
  },
  {
    index: "03",
    title: "Son & Finalisation",
    description:
      "Prise de son terrain, nettoyage, mixage et sound design. Un film se regarde autant qu'il s'écoute.",
    tags: ["Prise de son", "Mixage", "Sound design", "Livraison"],
    image: "https://picsum.photos/seed/emilio-son/1200/1500",
  },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  role: string;
  description: string;
  cover: string;
  /** Extrait muet en boucle joué au survol. Dossier /public/videos/. */
  preview?: string;
  /** ID YouTube ou Vimeo si le projet est visionnable en ligne. */
  youtubeId?: string;
  href?: string;
};

export const projects: Project[] = [
  {
    slug: "nuit-blanche",
    title: "Nuit Blanche",
    category: "Court métrage",
    year: "2025",
    role: "Cadre · Montage",
    description:
      "Un court métrage nocturne tourné en une seule nuit, en lumière disponible, sur le thème de l'attente.",
    cover: "https://picsum.photos/seed/emilio-p1/1400/1750",
    preview: "/videos/projets/nuit-blanche.mp4",
  },
  {
    slug: "festival-live",
    title: "Festival Live",
    category: "Captation",
    year: "2025",
    role: "Multi-cam · Post-prod",
    description:
      "Captation multi-caméras d'un festival local, aftermovie livré en 48h et formats courts pour les réseaux.",
    cover: "https://picsum.photos/seed/emilio-p2/1400/1750",
    preview: "/videos/projets/festival-live.mp4",
  },
  {
    slug: "atelier-artisan",
    title: "Atelier",
    category: "Documentaire",
    year: "2024",
    role: "Réalisation · Image",
    description:
      "Portrait documentaire d'un artisan : le geste, la matière, le temps long filmé en plans serrés.",
    cover: "https://picsum.photos/seed/emilio-p3/1400/1750",
    preview: "/videos/projets/atelier-artisan.mp4",
  },
  {
    slug: "clip-echo",
    title: "Echo",
    category: "Clip musical",
    year: "2024",
    role: "Image · Étalonnage",
    description:
      "Clip tourné en décor naturel, étalonnage contrasté et montage calé au rythme du morceau.",
    cover: "https://picsum.photos/seed/emilio-p4/1400/1750",
    preview: "/videos/projets/clip-echo.mp4",
  },
  {
    slug: "marque-corporate",
    title: "Brand Film",
    category: "Corporate",
    year: "2024",
    role: "Cadre · Montage",
    description:
      "Film de marque pour une entreprise locale : interviews, plans d'illustration et habillage graphique.",
    cover: "https://picsum.photos/seed/emilio-p5/1400/1750",
    preview: "/videos/projets/marque-corporate.mp4",
  },
  {
    slug: "sport-session",
    title: "Session",
    category: "Sport",
    year: "2023",
    role: "Image · Montage",
    description:
      "Film sportif en extérieur, ralentis, suivi au gimbal et sound design immersif.",
    cover: "https://picsum.photos/seed/emilio-p6/1400/1750",
    preview: "/videos/projets/sport-session.mp4",
  },
];

/**
 * Trois univers présentés en vidéos muettes qui tournent en boucle.
 * Déposer des extraits de 4 à 8 secondes dans /public/videos/univers/.
 */
export const showcase = {
  overline: "Univers",
  statement: [
    "Au plus proche du mouvement,",
    "là où l'image cesse d'être une vue",
    "pour devenir un ressenti.",
  ],
  items: [
    {
      title: "Événementiel",
      meta: "Captation · Aftermovie",
      poster: "https://picsum.photos/seed/emilio-univers-event/900/1200",
      video: "/videos/univers/evenementiel.mp4",
    },
    {
      title: "Clip & Musique",
      meta: "Réalisation · Étalonnage",
      poster: "https://picsum.photos/seed/emilio-univers-clip/900/1200",
      video: "/videos/univers/clip.mp4",
    },
    {
      title: "Documentaire",
      meta: "Portrait · Immersion",
      poster: "https://picsum.photos/seed/emilio-univers-doc/900/1200",
      video: "/videos/univers/documentaire.mp4",
    },
  ],
};

export const showreel = {
  overline: "Showreel",
  title: "Explorez autrement",
  /** ID de la vidéo YouTube du showreel. Laisser vide affiche le visuel d'attente. */
  youtubeId: "",
  poster: "https://picsum.photos/seed/emilio-showreel/1920/1080",
  caption:
    "Une sélection de plans et de séquences tournés ces deux dernières années, montés en un seul souffle.",
};

export const testimonials = [
  {
    quote:
      "Emilio comprend très vite l'intention d'un projet. Il est force de proposition et ses images ont une vraie identité.",
    author: "Camille R.",
    role: "Chargée de communication",
  },
  {
    quote:
      "Sérieux, ponctuel et créatif. Le montage est rythmé et la livraison a été plus rapide que prévu.",
    author: "Thomas L.",
    role: "Organisateur d'événement",
  },
  {
    quote:
      "Un vrai œil de cadreur. Il sait se faire oublier pendant le tournage et capter les moments justes.",
    author: "Sarah M.",
    role: "Artiste",
  },
  {
    quote:
      "Très agréable à encadrer en stage. Autonome sur le matériel et curieux de toutes les étapes de la post-prod.",
    author: "Julien P.",
    role: "Chef opérateur",
  },
  {
    quote:
      "Le rendu final dépassait nos attentes. On a retrouvé exactement l'atmosphère qu'on voulait transmettre.",
    author: "Léa B.",
    role: "Association culturelle",
  },
];

export const toolbox = [
  "Sony FX3",
  "Blackmagic",
  "DaVinci Resolve",
  "Premiere Pro",
  "After Effects",
  "Pro Tools",
  "DJI Ronin",
  "Aputure",
  "Photoshop",
  "Audition",
];

export const timeline = [
  {
    period: "2024 — 2026",
    title: "BTS Métiers de l'Audiovisuel",
    place: "Option Image",
    description:
      "Formation technique complète : prise de vues, éclairage, montage, post-production, son et gestion de production.",
  },
  {
    period: "2025",
    title: "Stage — Société de production",
    place: "Assistant image",
    description:
      "Préparation du matériel, assistanat caméra sur tournages publicitaires et institutionnels, dérushage.",
  },
  {
    period: "2023 — aujourd'hui",
    title: "Projets freelance",
    place: "Clips, événements, portraits",
    description:
      "Réalisation complète de films courts, de la note d'intention à la livraison finale étalonnée.",
  },
  {
    period: "2021 — 2024",
    title: "Autodidacte",
    place: "Premiers tournages",
    description:
      "Apprentissage du cadre et du montage sur des projets personnels et des collaborations amateurs.",
  },
];
