import { ShieldCheck, Lightbulb, Award, HeartHandshake } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ValueItem = {
  id: string;
  icon: LucideIcon;
  title: { fr: string; en: string };
  subtitle: { fr: string; en: string };
  description: { fr: string; en: string };
  badge: { fr: string; en: string };
};

export const VALUES: ValueItem[] = [
  {
    id: "excellence",
    icon: Award,
    title: {
      fr: "Excellence Opérationnelle",
      en: "Operational Excellence",
    },
    subtitle: {
      fr: "Rigueur & Standards Mondiaux",
      en: "Rigor & World-Class Standards",
    },
    description: {
      fr: "Chaque livrable, du code informatique aux fondations de génie civil, répond aux plus stricts critères de qualité et de durabilité.",
      en: "Every deliverable, from software engineering to heavy civil foundations, adheres to the most stringent quality and durability standards.",
    },
    badge: {
      fr: "Qualité",
      en: "Quality",
    },
  },
  {
    id: "innovation",
    icon: Lightbulb,
    title: {
      fr: "Innovation & Audace",
      en: "Innovation & Bold Vision",
    },
    subtitle: {
      fr: "Penser l'Avenir",
      en: "Pioneering the Future",
    },
    description: {
      fr: "Nous intégrons les dernières avancées technologiques et méthodologies agiles pour concevoir des solutions avant-gardistes.",
      en: "We incorporate modern digital engineering, cutting-edge tools, and agile workflows to deliver forward-thinking solutions.",
    },
    badge: {
      fr: "Technologie",
      en: "Technology",
    },
  },
  {
    id: "integrite",
    icon: ShieldCheck,
    title: {
      fr: "Intégrité & Transparence",
      en: "Integrity & Transparency",
    },
    subtitle: {
      fr: "Partenariats de Confiance",
      en: "Trust-Based Partnerships",
    },
    description: {
      fr: "Une gouvernance éthique, une communication limpide et un respect absolu de nos engagements contractuels et humains.",
      en: "Ethical leadership, crystal-clear communication, and total dedication to honoring our contractual and human commitments.",
    },
    badge: {
      fr: "Éthique",
      en: "Ethics",
    },
  },
  {
    id: "impact-local",
    icon: HeartHandshake,
    title: {
      fr: "Impact & Ancrage Local",
      en: "Local Impact & National Pride",
    },
    subtitle: {
      fr: "Pour et par la Guinée",
      en: "By and for Guinea",
    },
    description: {
      fr: "Création d'emplois locaux qualifiés, transfert de compétences et participation active au développement socio-économique national.",
      en: "Fostering skilled local employment, empowering Guinean talents, and driving meaningful socio-economic advancement.",
    },
    badge: {
      fr: "Citoyenneté",
      en: "Civic Duty",
    },
  },
];
