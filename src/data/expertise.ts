import { Cpu, Building2, Settings, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ExpertiseItem = {
  id: string;
  icon: LucideIcon;
  title: { fr: string; en: string };
  description: { fr: string; en: string };
  points: { fr: string[]; en: string[] };
  color: "blue" | "green";
};

export const EXPERTISES: ExpertiseItem[] = [
  {
    id: "numerique",
    icon: Cpu,
    title: {
      fr: "Numérique & Digitalisation",
      en: "Digital & Information Systems",
    },
    description: {
      fr: "Transformation digitale des entreprises et institutions guinéennes : développement web, applications, systèmes d'information sécurisés.",
      en: "Digital transformation for Guinean enterprises and public institutions: custom software, enterprise web apps, secure IT systems.",
    },
    points: {
      fr: [
        "Développement web & mobile sur-mesure",
        "Digitalisation et automatisation des processus",
        "Conseil en architecture cloud & transformation numérique",
      ],
      en: [
        "Custom web & mobile application engineering",
        "Business process digitization & workflow automation",
        "Cloud architecture consulting & digital strategy",
      ],
    },
    color: "blue",
  },
  {
    id: "btp",
    icon: Building2,
    title: {
      fr: "BTP & Génie Civil",
      en: "Construction & Civil Engineering",
    },
    description: {
      fr: "Conception, construction et supervision de projets d'infrastructure, du bâtiment résidentiel aux ouvrages d'envergure nationale.",
      en: "Design, construction, and structural supervision of infrastructure projects, from residential complexes to large-scale public works.",
    },
    points: {
      fr: [
        "Construction neuve & rénovation haut standing",
        "Génie civil, voiries & réseaux divers (VRD)",
        "Suivi technique rigoureux et supervision de chantiers",
      ],
      en: [
        "High-standard building construction & renovation",
        "Civil engineering, roads & utilities networks",
        "Rigorous technical inspection and site supervision",
      ],
    },
    color: "green",
  },
  {
    id: "services",
    icon: Settings,
    title: {
      fr: "Services & Logistique",
      en: "Corporate Services & Logistics",
    },
    description: {
      fr: "Un ensemble de prestations opérationnelles fiables pour accompagner les entreprises minières et industrielles au quotidien.",
      en: "A reliable suite of mission-critical operational services supporting mining operators and industrial corporations daily.",
    },
    points: {
      fr: [
        "Logistique minière & gestion de flux",
        "Maintenance industrielle & multi-technique",
        "Approvisionnement stratégique et support opérationnel",
      ],
      en: [
        "Mining freight logistics & cargo tracking",
        "Multi-technical industrial facilities maintenance",
        "Strategic procurement and on-site operational support",
      ],
    },
    color: "blue",
  },
  {
    id: "conseil",
    icon: Users,
    title: {
      fr: "Conseil & Stratégie",
      en: "Strategic Consulting & Governance",
    },
    description: {
      fr: "Accompagnement managérial de haut niveau et renforcement des capacités pour les organisations publiques et privées.",
      en: "Executive-level advisory, change management, and institutional capacity building for public and private organizations.",
    },
    points: {
      fr: [
        "Conseil stratégique & audits organisationnels",
        "Conduite du changement & formation des équipes",
        "Accompagnement institutionnel et gouvernance",
      ],
      en: [
        "Strategic advisory & organizational audits",
        "Change management & executive coaching",
        "Institutional capacity building & corporate governance",
      ],
    },
    color: "green",
  },
];