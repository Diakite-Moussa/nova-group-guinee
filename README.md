# 🇬🇳 Nova Group Guinée — Portail Web Officiel

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8.2-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?logo=tailwind-css&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-3D-000000?logo=three.js&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-Animations-88CE02?logo=greensock&logoColor=white)

> **Nova Group Guinée** est un groupe multisectoriel guinéen conjuguant **innovation numérique**, **excellence en BTP & Génie Civil**, **services & logistique** et **conseil stratégique** pour accompagner le développement durable et l'émergence économique de la Guinée.

---

## 🌟 Fonctionnalités Clés

- **Expérience Visuelle & 3D Interactive** : Rendu Three.js interactif (Globe 3D et modélisation hybride BTP/Digital), micro-animations fluides propulsées par GSAP et Framer Motion.
- **Multilingue (FR / EN)** : Système complet d'internationalisation réactif avec persistance.
- **Catalogue & Simulateur de Formations** : Présentation dynamique des formations professionnelles certifiantes avec simulateur de certificat en temps réel.
- **Showcase des Projets & Réalisations** : Filtrage par pôle d'activité (Numérique, BTP, Conseil, Services).
- **Intégration Contact & WhatsApp** : Prise de contact directe et bouton d'action rapide WhatsApp flottant.
- **Design Ultra-Moderne & Responsive** : Optimisé pour mobile, tablette et desktop avec Tailwind CSS v4.

---

## 🛠️ Stack Technique

- **Framework & Rendu** : [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Outillage** : [Vite 8](https://vite.dev/)
- **Styling** : [Tailwind CSS v4](https://tailwindcss.com/)
- **3D & Canvas** : [Three.js](https://threejs.org/)
- **Animations** : [GSAP](https://gsap.com/) & [Framer Motion](https://motion.dev/)
- **Icônes** : [Lucide React](https://lucide.dev/)
- **Linter de nouvelle génération** : [Oxlint](https://oxc.rs/)

---

## 📋 Prérequis

Avant de cloner et de lancer le projet, assurez-vous d'avoir installé sur votre machine :

- [Node.js](https://nodejs.org/) (version **18.x** ou supérieure recommandée)
- [Git](https://git-scm.com/)
- Un gestionnaire de paquets : `npm` (inclus avec Node.js), `yarn` ou `pnpm`

---

## 🚀 Installation & Exécution Locale

Suivez ces étapes simples pour faire fonctionner le projet localement :

### 1. Cloner le dépôt

Ouvrez votre terminal et exécutez :

```bash
git clone https://github.com/Diakite-Moussa/nova-group-guinee.git
```

### 2. Accéder au répertoire du projet

```bash
cd nova-group-guinee
```

### 3. Installer les dépendances

```bash
npm install
```

*(ou `pnpm install` / `yarn install` selon votre gestionnaire)*

### 4. Démarrer le serveur de développement

```bash
npm run dev
```

Une fois le serveur démarré, ouvrez votre navigateur à l'adresse indiquée (généralement `http://localhost:5173`).

---

## 📦 Scripts Disponibles

Dans le fichier `package.json`, vous trouverez les commandes suivantes :

| Commande | Description |
| :--- | :--- |
| `npm run dev` | Démarre le serveur local de développement Vite avec Hot Module Replacement (HMR). |
| `npm run build` | Vérifie les types TypeScript (`tsc -b`) et génère les fichiers optimisés pour la production dans le dossier `/dist`. |
| `npm run preview` | Prévisualise localement le build de production. |
| `npm run lint` | Analyse le code à la recherche d'erreurs et d'incohérences avec [Oxlint](https://oxc.rs/). |

---

## 📁 Structure du Projet

```text
nova-group-guinee/
├── public/                 # Assets statiques publics (favicons, SVG)
├── src/
│   ├── assets/             # Images, logos et illustrations
│   ├── components/
│   │   ├── layout/         # Navbar, Footer
│   │   ├── sections/       # Hero, About, Expertise, Projets, Formations, Contact...
│   │   ├── three/          # Composants de rendu 3D Three.js
│   │   └── ui/             # Composants réutilisables (Boutons, Modales, Conteneurs)
│   ├── context/            # Contextes React (ex: gestion de la langue FR/EN)
│   ├── data/               # Données statiques (expertises, projets, formations, valeurs)
│   ├── i18n/               # Fichiers de traductions (FR / EN)
│   ├── lib/                # Configuration des librairies tierces (ex: GSAP)
│   ├── pages/              # Page d'accueil et vues principales
│   ├── App.tsx             # Composant racine
│   ├── index.css           # Feuille de styles globale Tailwind CSS
│   └── main.tsx            # Point d'entrée de l'application
├── package.json            # Dépendances et scripts
├── tsconfig.json           # Configuration TypeScript
└── vite.config.ts          # Configuration du bundler Vite
```

---

## 🚢 Déploiement en Production

Pour créer un livrable prêt pour la production :

```bash
npm run build
```

Le dossier `dist/` généré peut être déployé directement sur n'importe quel hébergeur moderne tel que :
- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [GitHub Pages](https://pages.github.com/)
- [Cloudflare Pages](https://pages.cloudflare.com/)

---

## 📄 Licence

Ce projet est sous licence propriétaire — **Nova Group Guinée**. Tous droits réservés.
