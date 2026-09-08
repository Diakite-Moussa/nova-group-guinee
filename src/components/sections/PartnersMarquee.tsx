import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

const PARTNERS = [
  {
    name: { fr: "Ministère & Administrations Publiques", en: "Ministries & Public Institutions" },
    tag: { fr: "Institutionnel", en: "Public Sector" },
  },
  {
    name: { fr: "Banques & Institutions Financières", en: "Banks & Financial Institutions" },
    tag: { fr: "Finance", en: "Finance" },
  },
  {
    name: { fr: "Opérateurs Miniers & Énergie", en: "Mining & Energy Corporations" },
    tag: { fr: "Mines & Énergie", en: "Mining & Energy" },
  },
  {
    name: { fr: "Groupes de Télécommunications", en: "Telecom & Tech Operators" },
    tag: { fr: "Télécoms", en: "Telecoms" },
  },
  {
    name: { fr: "Consortiums Immobiliers & BTP", en: "Real Estate & Construction Groups" },
    tag: { fr: "Construction", en: "Construction" },
  },
  {
    name: { fr: "Entreprises Agro-Industrielles", en: "Agro-Industrial Enterprises" },
    tag: { fr: "Agrobusiness", en: "Agribusiness" },
  },
  {
    name: { fr: "Chambres de Commerce & Industrie", en: "Chambers of Commerce & Trade" },
    tag: { fr: "Négoce", en: "Trade" },
  },
  {
    name: { fr: "Bailleurs & Partenaires Internationaux", en: "International Development Donors" },
    tag: { fr: "Développement", en: "Development" },
  },
];

export default function PartnersMarquee() {
  const { language } = useLanguage();

  return (
    <div className="py-8 bg-white border-y border-slate-200/80 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 mb-4 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
          {language === "fr"
            ? "Ils font confiance à notre expertise multisectorielle en Guinée"
            : "Trusted by leading institutions & enterprises across Guinea"}
        </p>
      </div>

      <div className="relative w-full flex overflow-x-hidden mask-gradient">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 28,
            ease: "linear",
          }}
          className="flex items-center gap-6 whitespace-nowrap will-change-transform"
        >
          {[...PARTNERS, ...PARTNERS].map((partner, index) => (
            <div
              key={`${partner.name.fr}-${index}`}
              className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-mist-50 border border-slate-200/60 shadow-xs hover:border-brand-green/40 hover:bg-white transition-all duration-300"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-gradient-brand shrink-0" />
              <span className="font-semibold text-sm text-navy-900">
                {partner.name[language]}
              </span>
              <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-brand-blue/10 text-brand-blue">
                {partner.tag[language]}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

