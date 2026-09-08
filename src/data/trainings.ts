import {
  HardHat,
  Laptop,
  Box,
  Layers,
  ShieldCheck,
  Compass,
  Cpu,
  BarChart3,
  Flame,
  type LucideIcon,
} from "lucide-react";

export type TrainingCategory = "all" | "btp" | "tech" | "bim";

export type TrainingItem = {
  id: string;
  category: "btp" | "tech" | "bim";
  title: { fr: string; en: string };
  badge?: { fr: string; en: string };
  level: { fr: string; en: string };
  duration: { fr: string; en: string };
  format: { fr: string; en: string };
  nextSession: { fr: string; en: string };
  icon: LucideIcon;
  image: string;
  fallbackImage: string;
  color: "green" | "blue" | "amber";
  description: { fr: string; en: string };
  skills: { fr: string[]; en: string[] };
  audience: { fr: string; en: string };
  prerequisites: { fr: string; en: string };
};

export const TRAINING_CATEGORIES: {
  id: TrainingCategory;
  label: { fr: string; en: string };
  icon: LucideIcon;
}[] = [
  { id: "all", label: { fr: "Toutes les formations", en: "All Programs" }, icon: Flame },
  { id: "btp", label: { fr: "BTP & Génie Civil", en: "Civil Engineering & BTP" }, icon: HardHat },
  { id: "tech", label: { fr: "Technologies & Digital", en: "Technology & Digital" }, icon: Laptop },
  { id: "bim", label: { fr: "BIM & Gestion de Projets", en: "BIM & Project Management" }, icon: Box },
];

export const TRAININGS: TrainingItem[] = [
  // ===================== BTP & GÉNIE CIVIL =====================
  {
    id: "btp-conducteur-travaux",
    category: "btp",
    title: {
      fr: "Conducteur de Travaux & Gestion de Chantier",
      en: "Site Manager & Construction Operations",
    },
    badge: {
      fr: "Haute Demande",
      en: "High Demand",
    },
    level: {
      fr: "Intermédiaire à Confirmé",
      en: "Intermediate to Advanced",
    },
    duration: {
      fr: "6 Semaines (120h)",
      en: "6 Weeks (120h)",
    },
    format: {
      fr: "Présentiel & Chantiers réels",
      en: "On-Site & Active Job Sites",
    },
    nextSession: {
      fr: "Sessions mensuelles",
      en: "Monthly Cohorts",
    },
    icon: HardHat,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
    color: "green",
    description: {
      fr: "Maîtrisez le pilotage opérationnel des chantiers BTP : planification, gestion des équipes, contrôle budgétaire, approvisionnement et respect strict des normes de sécurité.",
      en: "Master operational oversight of construction projects: scheduling, labor coordination, budget control, procurement, and strict HSE compliance.",
    },
    skills: {
      fr: [
        "Planification de chantier (MS Project / Gantt)",
        "Gestion des sous-traitants et équipes travaux",
        "Suivi des coûts, métrés et approvisionnements",
        "Contrôle qualité et sécurité chantier (HSE)",
      ],
      en: [
        "Construction scheduling (MS Project / Gantt)",
        "Subcontractor & site crew management",
        "Cost control, quantity surveying & procurement",
        "Quality assurance and site safety standards (HSE)",
      ],
    },
    audience: {
      fr: "Techniciens BTP, jeunes ingénieurs, chefs d'équipes",
      en: "Civil technicians, junior engineers, site supervisors",
    },
    prerequisites: {
      fr: "Notions de base en bâtiment ou génie civil",
      en: "Foundational knowledge in building or civil engineering",
    },
  },
  {
    id: "btp-topographie-gps",
    category: "btp",
    title: {
      fr: "Topographie Appliquée & Implantation GPS / Station Totale",
      en: "Applied Topography, Total Station & GPS RTK",
    },
    badge: {
      fr: "Terrain & Pratique",
      en: "Fieldwork",
    },
    level: {
      fr: "Pratique",
      en: "Practical",
    },
    duration: {
      fr: "3 Semaines (60h)",
      en: "3 Weeks (60h)",
    },
    format: {
      fr: "75% Pratique sur le terrain",
      en: "75% Field Operations",
    },
    nextSession: {
      fr: "Places limitées",
      en: "Limited Seats",
    },
    icon: Compass,
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    color: "green",
    description: {
      fr: "Acquérir une parfaite autonomie sur les instruments de topographie de dernière génération : relevés par Station Totale optique, GPS différentiel RTK et traitement Covadis.",
      en: "Achieve complete autonomy on modern surveying instruments: optical Total Station surveys, differential GNSS/RTK GPS, and Covadis data processing.",
    },
    skills: {
      fr: [
        "Manipulation des Stations Totales et récepteurs GNSS/GPS",
        "Levés topographiques, polygonation et nivellement",
        "Implantation d'ouvrages, terrassements et voiries",
        "Traitement des nuages de points sous Covadis / AutoCAD",
      ],
      en: [
        "Total Station & GNSS/GPS instrument operations",
        "Topographical surveys, traversing, and precision leveling",
        "Structural staking, earthworks, and roadway layout",
        "Point cloud and CAD mapping processing",
      ],
    },
    audience: {
      fr: "Topographes juniors, géomètres, techniciens VRD et TP",
      en: "Junior surveyors, geomatics techs, civil technicians",
    },
    prerequisites: {
      fr: "Bac technique ou équivalent scientifique",
      en: "Technical diploma or scientific high school background",
    },
  },
  {
    id: "btp-calcul-structure",
    category: "btp",
    title: {
      fr: "Calcul de Structures & Dimensionnement Béton Armé",
      en: "Structural Analysis & Reinforced Concrete Design",
    },
    badge: {
      fr: "Ingénierie Avancée",
      en: "Advanced Engineering",
    },
    level: {
      fr: "Avancé",
      en: "Advanced",
    },
    duration: {
      fr: "5 Semaines (90h)",
      en: "5 Weeks (90h)",
    },
    format: {
      fr: "Lab Calculs & Logiciels Spécialisés",
      en: "Structural Lab & Software",
    },
    nextSession: {
      fr: "Prochaine session",
      en: "Upcoming Session",
    },
    icon: Layers,
    image: "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    color: "green",
    description: {
      fr: "Maîtrisez les méthodes de dimensionnement des structures en béton armé et charpentes selon les normes Eurocodes et BAEL avec modélisation aux éléments finis.",
      en: "Master sizing and structural engineering methods for reinforced concrete and steel frames under Eurocode/BAEL standards using finite element modeling.",
    },
    skills: {
      fr: [
        "Descente de charges et calcul des sollicitations",
        "Ferraillage des poutres, poteaux, semelles et dalles",
        "Modélisation Robot Structural Analysis / Arche",
        "Vérification des états limites (ELU / ELS)",
      ],
      en: [
        "Load takedown calculations and structural stress analysis",
        "Rebar detailing for beams, columns, foundations & slabs",
        "Robot Structural Analysis & finite element modeling",
        "Limit states verification (ULS / SLS)",
      ],
    },
    audience: {
      fr: "Ingénieurs génie civil, calculateurs de structures, bureaux d'études",
      en: "Civil engineers, structural calculators, design consultants",
    },
    prerequisites: {
      fr: "Formation ingénieur ou licence en génie civil",
      en: "Civil engineering bachelor's degree or equivalent",
    },
  },

  // ===================== TECHNOLOGIES & DIGITAL =====================
  {
    id: "tech-fullstack",
    category: "tech",
    title: {
      fr: "Développement Web & Solutions d'Entreprise",
      en: "Full-Stack Web Development & Enterprise Apps",
    },
    badge: {
      fr: "Programme Élite",
      en: "Elite Track",
    },
    level: {
      fr: "Débutant à Intermédiaire",
      en: "Beginner to Intermediate",
    },
    duration: {
      fr: "8 Semaines (160h)",
      en: "8 Weeks (160h)",
    },
    format: {
      fr: "Hybride (Lab & Projets réels)",
      en: "Hybrid (Lab & Live Projects)",
    },
    nextSession: {
      fr: "Prochaine cohorte imminente",
      en: "Upcoming Cohort Open",
    },
    icon: Laptop,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    color: "blue",
    description: {
      fr: "Devenez opérationnel sur les technologies web modernes : React, Node.js, bases de données SQL/NoSQL et conception d'applications d'entreprise adaptées au contexte africain.",
      en: "Become production-ready with modern web technologies: React, Node.js, SQL/NoSQL databases, and custom business application development.",
    },
    skills: {
      fr: [
        "Frontend moderne : React, TypeScript, Tailwind CSS",
        "Backend robuste : Node.js, APIs REST & Express",
        "Bases de données PostgreSQL & MongoDB",
        "Déploiement cloud, Git & bonnes pratiques DevOps",
      ],
      en: [
        "Modern frontend: React, TypeScript, Tailwind CSS",
        "Robust backend: Node.js, REST APIs & Express",
        "Databases: PostgreSQL & MongoDB",
        "Cloud deployment, Git & DevOps best practices",
      ],
    },
    audience: {
      fr: "Étudiants, professionnels en reconversion, développeurs juniors",
      en: "Students, career switchers, junior software engineers",
    },
    prerequisites: {
      fr: "Aisance avec l'outil informatique et logique algorithmique",
      en: "Computer literacy and basic algorithmic thinking",
    },
  },
  {
    id: "tech-reseaux-cyber",
    category: "tech",
    title: {
      fr: "Administration Réseaux & Cybersécurité Opérationnelle",
      en: "Network Administration & Operational Cybersecurity",
    },
    badge: {
      fr: "Haute Demande",
      en: "High Demand",
    },
    level: {
      fr: "Intermédiaire",
      en: "Intermediate",
    },
    duration: {
      fr: "5 Semaines (100h)",
      en: "5 Weeks (100h)",
    },
    format: {
      fr: "Présentiel & Simulateurs",
      en: "Lab & Virtual Simulators",
    },
    nextSession: {
      fr: "Sessions du soir / weekend",
      en: "Evening / Weekend Slots",
    },
    icon: Cpu,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
    color: "blue",
    description: {
      fr: "Apprenez à concevoir, déployer et sécuriser des infrastructures réseaux d'entreprises : pare-feux, serveurs Linux/Windows, VPN et politiques de protection contre les cyberattaques.",
      en: "Learn to design, deploy, and secure corporate network architectures: firewalls, Linux/Windows servers, site-to-site VPNs, and active cyber threat defense.",
    },
    skills: {
      fr: [
        "Configuration routeurs & commutateurs (Cisco / MikroTik)",
        "Administration des serveurs Windows Server & Linux Debian",
        "Sécurisation des accès, firewalls et audits de vulnérabilités",
        "Sauvegardes automatisées et plan de reprise d'activité (PRA)",
      ],
      en: [
        "Router & switch configuration (Cisco / MikroTik)",
        "Windows Server & Linux Debian system administration",
        "Access control, firewall policies & vulnerability auditing",
        "Automated backup strategies and Disaster Recovery Plans (DRP)",
      ],
    },
    audience: {
      fr: "Administrateurs juniors, techniciens support, responsables IT",
      en: "Junior sysadmins, IT support technicians, network engineers",
    },
    prerequisites: {
      fr: "Bases solides en informatique et protocoles réseau",
      en: "Solid IT fundamentals and networking protocol knowledge",
    },
  },
  {
    id: "tech-data-ia",
    category: "tech",
    title: {
      fr: "Data Analytics, Business Intelligence & IA Appliquée",
      en: "Data Analytics, Business Intelligence & Applied AI",
    },
    badge: {
      fr: "Futur & IA",
      en: "Future & AI",
    },
    level: {
      fr: "Tous niveaux",
      en: "All Levels",
    },
    duration: {
      fr: "4 Semaines (70h)",
      en: "4 Weeks (70h)",
    },
    format: {
      fr: "Lab Pratique & Dashboards Réels",
      en: "Hands-on Lab & Live Dashboards",
    },
    nextSession: {
      fr: "Inscriptions ouvertes",
      en: "Enrollment Open",
    },
    icon: BarChart3,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    color: "blue",
    description: {
      fr: "Exploitez la puissance des données et de l'intelligence artificielle : tableaux de bord Power BI dynamiques, analyse statistique sous Python et automatisation décisionnelle.",
      en: "Harness the power of enterprise data and artificial intelligence: interactive Power BI dashboards, Python data processing, and smart business automation.",
    },
    skills: {
      fr: [
        "Conception de tableaux de bord interactifs sous Power BI / Tableau",
        "Manipulation et nettoyage de données avec Python & Pandas",
        "Requêtage SQL avancé pour bases de données relationnelles",
        "Intégration d'outils d'IA générative pour booster la productivité",
      ],
      en: [
        "Interactive dashboard design with Power BI & Tableau",
        "Data cleaning and analysis using Python & Pandas",
        "Advanced SQL querying for enterprise relational databases",
        "Generative AI integration for enterprise productivity",
      ],
    },
    audience: {
      fr: "Analystes, gestionnaires de projets, financiers, ingénieurs",
      en: "Analysts, project managers, financial analysts, engineers",
    },
    prerequisites: {
      fr: "Bonne maîtrise d'Excel et curiosité pour l'analyse de données",
      en: "Proficiency in Excel and an analytical mindset",
    },
  },

  // ===================== BIM & GESTION DE PROJETS =====================
  {
    id: "bim-revit-autocad",
    category: "bim",
    title: {
      fr: "BIM, Modélisation 3D & Conception sous Revit",
      en: "BIM, 3D Architectural Modeling with Revit",
    },
    badge: {
      fr: "Certifiante",
      en: "Certified",
    },
    level: {
      fr: "Tous niveaux",
      en: "All Levels",
    },
    duration: {
      fr: "4 Semaines (80h)",
      en: "4 Weeks (80h)",
    },
    format: {
      fr: "100% Pratique en Lab Informatique",
      en: "100% Hands-on in CAD Lab",
    },
    nextSession: {
      fr: "Inscriptions ouvertes",
      en: "Enrollment Open",
    },
    icon: Box,
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
    color: "amber",
    description: {
      fr: "Passez à l'ingénierie 4.0 en maîtrisant la méthodologie BIM, la maquette numérique 3D et les logiciels de référence Autodesk Revit et AutoCAD pour la conception de bâtiments.",
      en: "Step into engineering 4.0 by mastering BIM methodologies, 3D digital building twins, and industry-standard Autodesk Revit and AutoCAD software.",
    },
    skills: {
      fr: [
        "Modélisation architecturale et structurelle 3D sous Revit",
        "Extraction automatique des métrés et plans 2D/3D",
        "Détection de conflits et coordination pluridisciplinaire",
        "Production des livrables de permis et plans d'exécution",
      ],
      en: [
        "3D architectural & structural modeling in Revit",
        "Automated quantity takeoffs and 2D/3D blueprints",
        "Clash detection and multidisciplinary BIM coordination",
        "Production of building permits and execution drawings",
      ],
    },
    audience: {
      fr: "Architectes, projeteurs, ingénieurs génie civil, dessinateurs",
      en: "Architects, structural engineers, draftspersons",
    },
    prerequisites: {
      fr: "Connaissance du dessin technique ou d'un logiciel CAD",
      en: "Basic knowledge of technical drawing or CAD software",
    },
  },
  {
    id: "bim-gestion-projet",
    category: "bim",
    title: {
      fr: "Pilotage & Suivi de Projets BTP avec MS Project & Primavera",
      en: "Civil Project Scheduling with MS Project & Primavera",
    },
    badge: {
      fr: "Management",
      en: "Executive",
    },
    level: {
      fr: "Professionnel",
      en: "Professional",
    },
    duration: {
      fr: "3 Semaines (50h)",
      en: "3 Weeks (50h)",
    },
    format: {
      fr: "Hybride ou Intensif Weekend",
      en: "Hybrid / Intensive Weekend",
    },
    nextSession: {
      fr: "Session cadres & managers",
      en: "Executive Cohort",
    },
    icon: BarChart3,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
    color: "amber",
    description: {
      fr: "Perfectionnez vos compétences en gestion de projet complexe : structuration WBS, ordonnancement, gestion du chemin critique, courbes en S et maîtrise des délais contractuels.",
      en: "Sharpen your advanced project management skills: WBS structuring, Critical Path Method (CPM), S-curves, and contractual timeline optimization.",
    },
    skills: {
      fr: [
        "Modélisation des plannings prévisionnels (MS Project & P6)",
        "Affectation des ressources, analyse des charges et goulets",
        "Suivi de l'avancement physique vs financier (courbes en S)",
        "Reporting stratégique et gestion des risques de retard",
      ],
      en: [
        "Baseline scheduling models (MS Project & Primavera P6)",
        "Resource allocation, leveling & bottleneck mitigation",
        "Physical vs. financial progress tracking (S-curves & EVM)",
        "Executive reporting and delay risk management",
      ],
    },
    audience: {
      fr: "Chefs de projets, directeurs techniques, ingénieurs d'affaires",
      en: "Project managers, technical directors, civil project leads",
    },
    prerequisites: {
      fr: "Expérience en gestion ou coordination de projets",
      en: "Prior experience in project management or coordination",
    },
  },
  {
    id: "bim-infra-civil3d",
    category: "bim",
    title: {
      fr: "BIM Infrastructure, Routes & VRD sous Autodesk Civil 3D",
      en: "BIM Infrastructure, Roadways & VRD with Civil 3D",
    },
    badge: {
      fr: "Grands Travaux",
      en: "Infrastructure",
    },
    level: {
      fr: "Intermédiaire à Avancé",
      en: "Intermediate to Advanced",
    },
    duration: {
      fr: "4 Semaines (80h)",
      en: "4 Weeks (80h)",
    },
    format: {
      fr: "Lab Numérique & Études de Cas",
      en: "Digital Lab & Case Studies",
    },
    nextSession: {
      fr: "Prochaine cohorte",
      en: "Upcoming Cohort",
    },
    icon: Box,
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    color: "amber",
    description: {
      fr: "Concevez et modélisez des projets linéaires et d'infrastructures : profils en long/travers, cubatures de terrassement, réseaux d'assainissement et carrefours routiers.",
      en: "Design and model linear infrastructure projects: longitudinal & cross sections, cut-and-fill earthwork calculations, drainage networks, and road corridors.",
    },
    skills: {
      fr: [
        "Modélisation des axes en plan, profils en long et profils types",
        "Calcul des cubatures de déblais / remblais automatisés",
        "Conception des réseaux d'assainissement et écoulements VRD",
        "Exportation BIM IFC pour coordination globale de chantier",
      ],
      en: [
        "Horizontal alignments, vertical profiles & corridor modeling",
        "Automated cut and fill earthwork volume calculations",
        "Gravity pipe and stormwater drainage network layout",
        "IFC BIM export for multidisciplinary project collaboration",
      ],
    },
    audience: {
      fr: "Ingénieurs VRD, projeteurs routiers, techniciens d'infrastructures",
      en: "Infrastructure engineers, roadway designers, civil modelers",
    },
    prerequisites: {
      fr: "Maîtrise d'AutoCAD ou bases en topographie routière",
      en: "Proficiency in AutoCAD or highway surveying fundamentals",
    },
  },
];

export const TRAINING_HIGHLIGHTS = [
  {
    title: {
      fr: "70% de Pratique Terrain & Labs",
      en: "70% Hands-On Field & Labs",
    },
    description: {
      fr: "Des ateliers réels sur nos chantiers en cours et dans nos laboratoires informatiques équipés de logiciels sous licences officielles.",
      en: "Live field workshops on active construction projects and fully equipped computer labs with licensed engineering software.",
    },
    icon: HardHat,
  },
  {
    title: {
      fr: "Formateurs Experts du Secteur",
      en: "Industry Expert Instructors",
    },
    description: {
      fr: "Tous nos formateurs sont des ingénieurs, architectes et experts IT en activité sur des projets d'envergure en Guinée et à l'international.",
      en: "All instructors are practicing engineers, architects, and IT specialists actively leading major projects in Guinea.",
    },
    icon: Layers,
  },
  {
    title: {
      fr: "Certificats Reconnus & Validation",
      en: "Recognized Skill Certifications",
    },
    description: {
      fr: "Chaque cursus débouche sur une certification de compétences Nova Group Guinée facilitant l'insertion professionnelle et l'évolution de carrière.",
      en: "Every course grants an official Nova Group Guinea competency certificate that accelerates employability and career growth.",
    },
    icon: ShieldCheck,
  },
  {
    title: {
      fr: "Placement & Réseau Partenaires",
      en: "Career Placement & Partners",
    },
    description: {
      fr: "Mise en relation directe des meilleurs apprenants avec notre réseau d'entreprises partenaires et opportunités de recrutement chez NGG.",
      en: "Direct placement assistance and recruitment opportunities across our trusted network of industrial partner companies.",
    },
    icon: Flame,
  },
];
