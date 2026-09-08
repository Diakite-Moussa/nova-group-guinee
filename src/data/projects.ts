export type ProjectCategory = "all" | "numerique" | "btp" | "services" | "conseil";

export interface ProjectItem {
  id: string;
  title: { fr: string; en: string };
  category: "numerique" | "btp" | "services" | "conseil";
  categoryLabel: { fr: string; en: string };
  location: { fr: string; en: string };
  year: string;
  client: { fr: string; en: string };
  description: { fr: string; en: string };
  longDescription: { fr: string; en: string };
  metrics: { label: { fr: string; en: string }; value: string }[];
  tags: string[];
  gradient: string;
  image: string;
  fallbackImage: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "portail-institutionnel",
    title: {
      fr: "Plateforme Intégrée de Gestion Dématérialisée",
      en: "Integrated E-Governance & Workflow Platform",
    },
    category: "numerique",
    categoryLabel: {
      fr: "Numérique & Digital",
      en: "Digital & IT",
    },
    location: {
      fr: "Conakry, Guinée",
      en: "Conakry, Guinea",
    },
    year: "2025",
    client: {
      fr: "Secteur Public & Mixte",
      en: "Public & Mixed Sector",
    },
    description: {
      fr: "Système d'information sécurisé et portail citoyen pour le suivi des requêtes administratives en temps réel.",
      en: "Secure information system and citizen portal for real-time tracking of administrative requests.",
    },
    longDescription: {
      fr: "Conception architecturale, développement full-stack et déploiement d'une infrastructure cloud sécurisée à haute disponibilité garantissant l'intégrité et la traçabilité des flux administratifs.",
      en: "Full architectural design, full-stack development, and high-availability cloud deployment ensuring end-to-end data integrity.",
    },
    metrics: [
      { label: { fr: "Temps de traitement", en: "Processing Time" }, value: "-65%" },
      { label: { fr: "Disponibilité garantie", en: "Uptime SLA" }, value: "99.9%" },
      { label: { fr: "Dossiers traités", en: "Processed Files" }, value: "+45k" },
    ],
    tags: ["Cloud", "React / Next", "Cybersécurité", "API Hub"],
    gradient: "from-blue-600 to-indigo-900",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "complexe-residentiel",
    title: {
      fr: "Complexe Résidentiel & Commercial Haut Standing",
      en: "High-Standard Residential & Commercial Complex",
    },
    category: "btp",
    categoryLabel: {
      fr: "BTP & Génie Civil",
      en: "Civil Engineering & BTP",
    },
    location: {
      fr: "Kipé, Conakry",
      en: "Kipé, Conakry",
    },
    year: "2024 - 2025",
    client: {
      fr: "Investisseur Privé",
      en: "Private Developer",
    },
    description: {
      fr: "Construction d'un complexe moderne R+6 combinant espaces de coworking, bureaux et logements intelligents.",
      en: "Turnkey construction of a 7-story modern mixed-use complex featuring smart offices and luxury apartments.",
    },
    longDescription: {
      fr: "Génie civil, gros œuvre, second œuvre haut de gamme et intégration de panneaux photovoltaïques en toiture avec système de gestion domotique et réserve d'eau autonome.",
      en: "Heavy civil engineering, premium finishes, rooftop solar power array, smart building automation, and backup water reserves.",
    },
    metrics: [
      { label: { fr: "Surface bâtie", en: "Built Area" }, value: "4 200 m²" },
      { label: { fr: "Économie d'énergie", en: "Energy Savings" }, value: "-40%" },
      { label: { fr: "Délai de livraison", en: "Timeline" }, value: "100%" },
    ],
    tags: ["BTP", "Gros Œuvre", "Eco-Construction", "Génie Civil"],
    gradient: "from-emerald-700 to-teal-950",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186156a?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "corridor-logistique",
    title: {
      fr: "Optimisation de la Chaîne Logistique Minière",
      en: "Mining Logistics & Heavy Freight Optimization",
    },
    category: "services",
    categoryLabel: {
      fr: "Services & Logistique",
      en: "Logistics & Services",
    },
    location: {
      fr: "Boké - Kamsar",
      en: "Boké - Kamsar",
    },
    year: "2024",
    client: {
      fr: "Compagnie Minière Internationale",
      en: "International Mining Consortium",
    },
    description: {
      fr: "Gestion opérationnelle de flux logistiques, approvisionnement de sites distants et maintenance de flotte lourde.",
      en: "Operational logistics management, remote site provisioning, and heavy machinery maintenance.",
    },
    longDescription: {
      fr: "Mise en place d'une tour de contrôle logistique connectée par GPS, réduction des temps d'immobilisation des engins et gestion des pièces de rechange critiques.",
      en: "Implementation of a GPS-connected logistics control tower, minimization of equipment downtime, and critical spare parts supply chain.",
    },
    metrics: [
      { label: { fr: "Taux de disponibilité flotte", en: "Fleet Availability" }, value: "98.4%" },
      { label: { fr: "Réduction des retards", en: "Delay Reduction" }, value: "-30%" },
      { label: { fr: "Tonnes acheminées", en: "Delivered Tonnage" }, value: "+120k T" },
    ],
    tags: ["Logistique", "Mines", "Flotte Connectée", "Maintenance"],
    gradient: "from-amber-600 to-amber-950",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "schema-directeur-digital",
    title: {
      fr: "Schéma Directeur de Transformation Numérique",
      en: "Master Plan for Corporate Digital Transformation",
    },
    category: "conseil",
    categoryLabel: {
      fr: "Conseil & Stratégie",
      en: "Strategy & Consulting",
    },
    location: {
      fr: "Conakry, Guinée",
      en: "Conakry, Guinea",
    },
    year: "2024",
    client: {
      fr: "Groupe Industriel Panafricain",
      en: "Pan-African Industrial Group",
    },
    description: {
      fr: "Audit 360°, cadrage stratégique et feuille de route pour la modernisation des processus industriels.",
      en: "360° operational audit, strategic roadmap, and digital architecture modernizing industrial workflows.",
    },
    longDescription: {
      fr: "Cartographie des processus métiers, définition des architectures cibles, sélection des progiciels ERP et accompagnement au changement pour 400 collaborateurs.",
      en: "Business process mapping, target architecture blueprint, ERP vendor selection, and change management for 400 staff members.",
    },
    metrics: [
      { label: { fr: "Processus numérisés", en: "Digitized Workflows" }, value: "100%" },
      { label: { fr: "Adhésion des équipes", en: "Adoption Rate" }, value: "92%" },
      { label: { fr: "ROI estimé à 3 ans", en: "3-Year ROI" }, value: "x2.8" },
    ],
    tags: ["Conseil IT", "Gouvernance", "ERP", "Conduite du Changement"],
    gradient: "from-cyan-700 to-navy-950",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "audit-securite-si",
    title: {
      fr: "Déploiement Réseau Haut Débit & Contrôle d'Accès",
      en: "High-Speed Campus Backbone & Biometric Access",
    },
    category: "numerique",
    categoryLabel: {
      fr: "Numérique & Réseaux",
      en: "Digital & Networks",
    },
    location: {
      fr: "Zone Industrielle Kagbélen",
      en: "Kagbélen Industrial Area",
    },
    year: "2024",
    client: {
      fr: "Site Industriel Agroalimentaire",
      en: "Agri-Industrial Plant",
    },
    description: {
      fr: "Infrastructure fibre optique redondante, vidéosurveillance IP intelligente et sécurisation des accès biométriques.",
      en: "Redundant fiber backbone, AI-powered IP surveillance, and biometric perimeter access security.",
    },
    longDescription: {
      fr: "Pose de 8 km de fibre optique industrielle, installation d'une baie serveur climatisée Tier II, 64 caméras haute définition avec analyse comportementale et supervision 24/7.",
      en: "Deployment of 8 km industrial fiber optic lines, climate-controlled Tier II server racks, 64 AI-assisted cameras, and 24/7 NOC monitoring.",
    },
    metrics: [
      { label: { fr: "Débit fibre garanti", en: "Fiber Bandwidth" }, value: "10 Gbps" },
      { label: { fr: "Temps d'arrêt", en: "Downtime" }, value: "0 min" },
      { label: { fr: "Certification", en: "Tier Rating" }, value: "Tier II+" },
    ],
    tags: ["Fibre Optique", "Réseaux", "Biométrie", "Datacenter"],
    gradient: "from-indigo-700 to-slate-950",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "rehabilitation-voirie",
    title: {
      fr: "Aménagement Urbain & Voiries d'Accès",
      en: "Urban Roadway Construction & Solar Lighting",
    },
    category: "btp",
    categoryLabel: {
      fr: "BTP & Infrastructures",
      en: "Infrastructure & Roads",
    },
    location: {
      fr: "Grand Conakry",
      en: "Greater Conakry",
    },
    year: "2023 - 2024",
    client: {
      fr: "Partenariat Collectivité",
      en: "Public Municipality",
    },
    description: {
      fr: "Travaux d'assainissement, pavage autobloquant, éclairage public solaire et réhabilitation de voies de circulation.",
      en: "Drainage works, interlocking paving stones, solar street lighting, and heavy road rehabilitation.",
    },
    longDescription: {
      fr: "Curage de caniveaux, pose de bordures renforcées, terrassement lourd et installation de 80 lampadaires solaires autonomes dernière génération.",
      en: "Culvert cleaning, reinforced curbing, earthmoving, and installation of 80 autonomous smart solar streetlights.",
    },
    metrics: [
      { label: { fr: "Linéaire aménagé", en: "Roadway Distance" }, value: "3.5 km" },
      { label: { fr: "Lampadaires solaires", en: "Solar Lights" }, value: "80 unités" },
      { label: { fr: "Bénéficiaires", en: "Beneficiaries" }, value: "+20 000" },
    ],
    tags: ["Voirie", "Solaire", "Assainissement", "Génie Urbain"],
    gradient: "from-teal-800 to-navy-900",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80",
  },
];
