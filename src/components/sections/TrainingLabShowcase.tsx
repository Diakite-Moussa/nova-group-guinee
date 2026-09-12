import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Monitor, Compass, HardHat, Award, CheckCircle2, ShieldCheck, Sparkles, ChevronRight } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export default function TrainingLabShowcase() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);

  const FACILITIES = [
    {
      id: "cad-lab",
      icon: Monitor,
      title: {
        fr: "Laboratoire Informatique Haute Performance",
        en: "High-Performance CAD & Tech Lab",
      },
      badge: { fr: "Stations i9 & RTX", en: "i9 & RTX Stations" },
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
      fallbackImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
      tagline: {
        fr: "Un poste dédié par apprenant équipé de doubles écrans 4K et de licences logicielles officielles Autodesk & Microsoft.",
        en: "One dedicated workstation per student equipped with dual 4K monitors and official Autodesk & Microsoft licenses.",
      },
      points: {
        fr: [
          "Licences officielles Autodesk Revit, Civil 3D et AutoCAD",
          "Environnements de développement complets (Docker, Node, Python IA)",
          "Connexion fibre optique dédiée très haut débit sans coupure",
          "Onduleurs et groupe électrogène de secours garantissant 100% de disponibilité",
        ],
        en: [
          "Official Autodesk Revit, Civil 3D & AutoCAD licenses",
          "Full developer suites (Docker, Node.js, Python AI, PostgreSQL)",
          "Dedicated high-speed fiber optic internet connection",
          "Heavy UPS power backup ensuring uninterrupted sessions",
        ],
      },
      stats: {
        val1: "24+",
        lbl1: { fr: "Stations CAO / DAO", en: "CAD Workstations" },
        val2: "100%",
        lbl2: { fr: "Licences Officielles", en: "Licensed Software" },
      },
    },
    {
      id: "topo-gear",
      icon: Compass,
      title: {
        fr: "Parc d'Instruments Topographiques de Précision",
        en: "Precision Surveying & GPS Instrument Fleet",
      },
      badge: { fr: "Matériel Terrain Leica & Trimble", en: "Leica & Trimble Gear" },
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80",
      fallbackImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
      tagline: {
        fr: "Apprenez à manipuler les instruments de mesure géodésiques les plus perfectionnés utilisés sur les grands chantiers en Guinée.",
        en: "Master high-end geodetic measuring instruments deployed on major infrastructure projects across Guinea.",
      },
      points: {
        fr: [
          "Stations Totales optiques numériques de haute précision millimétrique",
          "Récepteurs GNSS différentiels RTK bibande avec carnet de terrain",
          "Niveaux automatiques et lasers de guidage de terrassement",
          "Mire télescopique, prismes et accessoires professionnels complets",
        ],
        en: [
          "High-precision millimeter optical electronic Total Stations",
          "Dual-frequency GNSS/RTK GPS base & rover receivers",
          "Automatic optical levels and earthwork laser guides",
          "Complete professional prisms, tripods, and geomatics rods",
        ],
      },
      stats: {
        val1: "0.1mm",
        lbl1: { fr: "Précision Relevés", en: "Survey Accuracy" },
        val2: "75%",
        lbl2: { fr: "Pratique sur le terrain", en: "Fieldwork Practice" },
      },
    },
    {
      id: "active-sites",
      icon: HardHat,
      title: {
        fr: "Chantiers Écoles & Immersion Opérationnelle",
        en: "Active Construction Sites & Field Immersion",
      },
      badge: { fr: "Immersion Réelle", en: "Real Job Sites" },
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
      fallbackImage: "https://images.unsplash.com/photo-1541888946425-d0fbb186156a?auto=format&fit=crop&w=1200&q=80",
      tagline: {
        fr: "Participez directement aux réunions de chantier, au contrôle qualité du béton et au suivi des équipes sur les projets actifs de Nova Group.",
        en: "Directly take part in site coordination meetings, concrete quality testing, and subcontractor supervision on live NGG projects.",
      },
      points: {
        fr: [
          "Équipements de Protection Individuelle (EPI) fournis à chaque apprenant",
          "Participation aux réceptions de ferraillages et coulage de béton",
          "Contrôle de sécurité HSE et conformité aux plans d'exécution",
          "Mise en situation de conduite de travaux en conditions réelles",
        ],
        en: [
          "Complete PPE safety equipment provided for every student",
          "Inspection of rebar frameworks and live concrete pours",
          "HSE safety compliance and execution blueprint audits",
          "Real site management roleplay under real operational deadlines",
        ],
      },
      stats: {
        val1: "+12",
        lbl1: { fr: "Chantiers partenaires", en: "Active Site Hubs" },
        val2: "100%",
        lbl2: { fr: "Sécurité & Normes HSE", en: "Safety Compliance" },
      },
    },
    {
      id: "certification",
      icon: Award,
      title: {
        fr: "Certification Sécurisée & Référencement Employeurs",
        en: "Official Competency Certificate & Employer Referral",
      },
      badge: { fr: "Vérifiable par QR Code", en: "QR Code Verified" },
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
      fallbackImage: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80",
      tagline: {
        fr: "Un certificat de compétences officiel valorisé auprès des recruteurs guinéens et internationaux de l'écosystème minier et BTP.",
        en: "An accredited competency certificate trusted by major mining, civil engineering, and corporate recruiters in Guinea.",
      },
      points: {
        fr: [
          "Certificat infalsifiable avec identifiant unique et QR code de vérification",
          "Évaluation finale basée sur la soutenance d'un projet réel devant jury",
          "Recommandation directe auprès de nos entreprises partenaires",
          "Accès à vie au réseau des diplômés et aux offres d'emploi exclusives",
        ],
        en: [
          "Tamper-proof certificate with unique UUID and online verification QR code",
          "Capstone project defense judged by industry panel of senior engineers",
          "Direct priority recommendation across corporate partner networks",
          "Lifetime access to NGG alumni network and private job boards",
        ],
      },
      stats: {
        val1: "94%",
        lbl1: { fr: "Taux d'insertion professionnelle", en: "Employment Rate" },
        val2: "50+",
        lbl2: { fr: "Entreprises partenaires", en: "Hiring Partners" },
      },
    },
  ];

  const current = FACILITIES[activeTab];

  return (
    <div className="mt-24 pt-16 border-t border-slate-200/80">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-green bg-brand-green/10 px-3.5 py-1 rounded-full border border-brand-green/20">
          {language === "fr" ? "Infrastructures & Moyens Pédagogiques" : "Facilities & Technical Infrastructure"}
        </span>
        <h3 className="text-2xl md:text-3xl font-extrabold text-navy-900 mt-3 mb-2">
          {language === "fr"
            ? "Des équipements de pointe pour apprendre en conditions réelles"
            : "Cutting-edge equipment to learn under real-world conditions"}
        </h3>
        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
          {language === "fr"
            ? "Nous mettons à votre disposition des laboratoires informatiques dernière génération et du matériel de chantier professionnel pour garantir une autonomie immédiate."
            : "We provide modern computer labs, survey instruments, and live site access to guarantee immediate professional autonomy."}
        </p>
      </div>

      {/* Tabs navigation */}
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-10">
        {FACILITIES.map((fac, idx) => {
          const Icon = fac.icon;
          const isActive = activeTab === idx;
          return (
            <button
              key={fac.id}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs md:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                isActive
                  ? "bg-navy-900 text-white shadow-lg shadow-navy-900/20 scale-102"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              <Icon size={16} className={isActive ? "text-brand-green-light" : "text-slate-500"} />
              <span>{fac.title[language].split(" ")[0]} {fac.title[language].split(" ")[1]}</span>
            </button>
          );
        })}
      </div>

      {/* Main Feature Showcase Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12"
        >
          {/* Left Column: Image with overlay and badges */}
          <div className="lg:col-span-6 relative min-h-[300px] lg:min-h-[440px] bg-slate-900 overflow-hidden">
            <img
              src={current.image}
              alt={current.title[language]}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = current.fallbackImage;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />

            <div className="absolute top-4 left-4">
              <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-brand-green/90 text-white backdrop-blur-md shadow-md flex items-center gap-1.5">
                <Sparkles size={12} />
                {current.badge[language]}
              </span>
            </div>

            {/* Quick stats floating in bottom left */}
            <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-3 bg-navy-950/80 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 text-white">
              <div>
                <p className="text-xl font-extrabold text-brand-green-light">{current.stats.val1}</p>
                <p className="text-[11px] text-slate-300 font-medium">{current.stats.lbl1[language]}</p>
              </div>
              <div>
                <p className="text-xl font-extrabold text-sky-400">{current.stats.val2}</p>
                <p className="text-[11px] text-slate-300 font-medium">{current.stats.lbl2[language]}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed description and points */}
          <div className="lg:col-span-6 p-8 md:p-10 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-navy-900 text-xs font-bold mb-3">
                <ShieldCheck size={14} className="text-brand-blue" />
                {language === "fr" ? "Garantie Pédagogique Nova Group" : "Nova Group Quality Guarantee"}
              </div>

              <h4 className="text-xl md:text-2xl font-extrabold text-navy-900 mb-3 leading-snug">
                {current.title[language]}
              </h4>

              <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-6">
                {current.tagline[language]}
              </p>

              <div className="space-y-3 mb-8">
                {current.points[language].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs md:text-sm text-slate-700">
                    <CheckCircle2 size={16} className="text-brand-green shrink-0 mt-0.5" />
                    <span className="leading-snug">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium">
                {language === "fr" ? "Visites possibles sur rendez-vous" : "Facility visits available on request"}
              </span>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue hover:text-navy-900 transition-colors"
              >
                <span>{language === "fr" ? "Prendre rendez-vous" : "Schedule a Visit"}</span>
                <ChevronRight size={14} />
              </a>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
