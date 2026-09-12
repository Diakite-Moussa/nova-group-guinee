import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  Clock,
  Layers,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Download,
  Phone,
  X,
  Send,
  Building,
  Search,
  Award,
  Target,
  Rocket,
  Compass,
} from "lucide-react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import {
  TRAININGS,
  TRAINING_CATEGORIES,
  TRAINING_HIGHLIGHTS,
  type TrainingCategory,
  type TrainingItem,
} from "../../data/trainings";
import { useLanguage } from "../../context/LanguageContext";
import TrainingLabShowcase from "./TrainingLabShowcase";
import TrainingFAQ from "./TrainingFAQ";
import TrainingCatalogModal from "./TrainingCatalogModal";

export default function Training() {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<TrainingCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTraining, setSelectedTraining] = useState<TrainingItem | null>(null);
  const [enrolledTraining, setEnrolledTraining] = useState<TrainingItem | null>(null);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [enrollName, setEnrollName] = useState("");
  const [enrollPhone, setEnrollPhone] = useState("");
  const [enrollStatus, setEnrollStatus] = useState<"idle" | "success">("idle");

  // Filtering by category + search query
  const filteredTrainings = useMemo(() => {
    return TRAININGS.filter((item) => {
      const matchCat = activeCategory === "all" || item.category === activeCategory;
      if (!matchCat) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      const title = item.title[language].toLowerCase();
      const desc = item.description[language].toLowerCase();
      const skills = item.skills[language].join(" ").toLowerCase();
      const audience = item.audience[language].toLowerCase();

      return (
        title.includes(q) ||
        desc.includes(q) ||
        skills.includes(q) ||
        audience.includes(q)
      );
    });
  }, [activeCategory, searchQuery, language]);

  const handleEnrollSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!enrollName || !enrollPhone) return;

    setEnrollStatus("success");
    const message = encodeURIComponent(
      language === "fr"
        ? `Bonjour Nova Group Guinée, je souhaite m'inscrire à la formation : "${enrolledTraining?.title.fr}". Nom : ${enrollName}, Téléphone : ${enrollPhone}`
        : `Hello Nova Group Guinea, I want to enroll in the program: "${enrolledTraining?.title.en}". Name: ${enrollName}, Phone: ${enrollPhone}`
    );
    setTimeout(() => {
      window.open(`https://wa.me/224600000000?text=${message}`, "_blank");
    }, 1200);
  };

  const ROADMAP_STEPS = [
    {
      num: "01",
      icon: Target,
      color: "from-blue-500 to-indigo-600",
      title: t.trainings.step1Title,
      desc: t.trainings.step1Desc,
    },
    {
      num: "02",
      icon: Compass,
      color: "from-emerald-500 to-teal-600",
      title: t.trainings.step2Title,
      desc: t.trainings.step2Desc,
    },
    {
      num: "03",
      icon: Rocket,
      color: "from-amber-500 to-orange-600",
      title: t.trainings.step3Title,
      desc: t.trainings.step3Desc,
    },
    {
      num: "04",
      icon: Award,
      color: "from-purple-500 to-pink-600",
      title: t.trainings.step4Title,
      desc: t.trainings.step4Desc,
    },
  ];

  return (
    <section id="formations" className="py-24 md:py-32 bg-slate-50/80 relative overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-slate-200/40 rounded-full blur-3xl pointer-events-none" />

      <Container>
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionTitle
            eyebrow={t.trainings.eyebrow}
            title={t.trainings.title}
            description={t.trainings.description}
            align="center"
          />
        </div>

        {/* 4 Highlights Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {TRAINING_HIGHLIGHTS.map((hl, idx) => (
            <motion.div
              key={hl.title.fr}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center text-white mb-4 shadow-md shadow-brand-blue/10 group-hover:scale-108 transition-transform">
                  <hl.icon size={22} />
                </div>
                <h4 className="font-bold text-navy-900 text-base mb-2">{hl.title[language]}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{hl.description[language]}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3 Dedicated Domain Visual Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1: BTP & Génie Civil */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onClick={() => {
              setActiveCategory(activeCategory === "btp" ? "all" : "btp");
              setSearchQuery("");
            }}
            className={`group relative rounded-3xl overflow-hidden cursor-pointer border transition-all duration-400 shadow-md hover:shadow-2xl ${
              activeCategory === "btp"
                ? "ring-3 ring-brand-green border-brand-green shadow-brand-green/20 scale-[1.02]"
                : "border-slate-200 hover:border-brand-green/50"
            }`}
          >
            <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
                alt="BTP & Génie Civil"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/45 to-navy-950/15" />
              
              <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                <span className="bg-brand-green/90 backdrop-blur-md text-white font-extrabold text-[11px] px-3 py-1 rounded-full shadow-md flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  {language === "fr" ? "Pôle BTP & Génie Civil" : "Civil Engineering Pole"}
                </span>
              </div>

              <div className="absolute bottom-3.5 left-4 right-4">
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-brand-green-light transition-colors flex items-center justify-between">
                  <span>{language === "fr" ? "BTP & Génie Civil" : "Civil Engineering & BTP"}</span>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-white">
                    3 {language === "fr" ? "modules" : "tracks"}
                  </span>
                </h3>
                <p className="text-xs text-slate-300 line-clamp-1">
                  {language === "fr"
                    ? "Chantiers, topographie GPS & calcul béton armé"
                    : "Site operations, GPS surveying & structural design"}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Technologies & Digital */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onClick={() => {
              setActiveCategory(activeCategory === "tech" ? "all" : "tech");
              setSearchQuery("");
            }}
            className={`group relative rounded-3xl overflow-hidden cursor-pointer border transition-all duration-400 shadow-md hover:shadow-2xl ${
              activeCategory === "tech"
                ? "ring-3 ring-brand-blue border-brand-blue shadow-brand-blue/20 scale-[1.02]"
                : "border-slate-200 hover:border-brand-blue/50"
            }`}
          >
            <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
                alt="Technologies & Digital"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/45 to-navy-950/15" />
              
              <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                <span className="bg-brand-blue/90 backdrop-blur-md text-white font-extrabold text-[11px] px-3 py-1 rounded-full shadow-md flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />
                  {language === "fr" ? "Pôle Tech & Digital" : "Tech & Digital Pole"}
                </span>
              </div>

              <div className="absolute bottom-3.5 left-4 right-4">
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                  <span>{language === "fr" ? "Technologies & Digital" : "Technology & Digital"}</span>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-white">
                    3 {language === "fr" ? "modules" : "tracks"}
                  </span>
                </h3>
                <p className="text-xs text-slate-300 line-clamp-1">
                  {language === "fr"
                    ? "Full-stack web, cybersécurité & Data / IA"
                    : "Full-stack web, cybersecurity & Data / AI"}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 3: BIM & Gestion de Projets */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={() => {
              setActiveCategory(activeCategory === "bim" ? "all" : "bim");
              setSearchQuery("");
            }}
            className={`group relative rounded-3xl overflow-hidden cursor-pointer border transition-all duration-400 shadow-md hover:shadow-2xl ${
              activeCategory === "bim"
                ? "ring-3 ring-amber-500 border-amber-500 shadow-amber-500/20 scale-[1.02]"
                : "border-slate-200 hover:border-amber-500/50"
            }`}
          >
            <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80"
                alt="BIM & Gestion de Projets"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/45 to-navy-950/15" />
              
              <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                <span className="bg-amber-600/90 backdrop-blur-md text-white font-extrabold text-[11px] px-3 py-1 rounded-full shadow-md flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-200 animate-pulse" />
                  {language === "fr" ? "Pôle BIM & Management" : "BIM & Management Pole"}
                </span>
              </div>

              <div className="absolute bottom-3.5 left-4 right-4">
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-amber-300 transition-colors flex items-center justify-between">
                  <span>{language === "fr" ? "BIM & Gestion de Projets" : "BIM & Management"}</span>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-white">
                    3 {language === "fr" ? "modules" : "tracks"}
                  </span>
                </h3>
                <p className="text-xs text-slate-300 line-clamp-1">
                  {language === "fr"
                    ? "Revit 3D/4D, Civil 3D & Primavera P6"
                    : "Revit 3D/4D, Civil 3D & Primavera P6"}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Search Bar & Category Filters */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 bg-white/70 backdrop-blur-md p-3.5 rounded-3xl border border-slate-200/90 shadow-sm">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto justify-center md:justify-start">
            {TRAINING_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-2xl text-xs md:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-navy-900 text-white shadow-md shadow-navy-900/20 scale-102"
                      : "bg-slate-100/80 text-slate-700 hover:bg-slate-200/80"
                  }`}
                >
                  <Icon size={15} className={isActive ? "text-brand-green-light" : "text-slate-500"} />
                  {cat.label[language]}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.trainings.searchPlaceholder}
              className="w-full pl-9.5 pr-8 py-2 rounded-2xl bg-slate-100/90 border border-slate-200/80 text-xs focus:outline-none focus:border-brand-blue focus:bg-white transition-all text-slate-800 placeholder:text-slate-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-navy-900 text-xs w-4 h-4 rounded-full flex items-center justify-center cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Results indicator if searching */}
        {searchQuery && (
          <div className="mb-6 flex items-center justify-between text-xs text-slate-600 px-2">
            <span>
              {filteredTrainings.length} {language === "fr" ? "formation(s) trouvée(s) pour" : "program(s) matching"} "
              <strong>{searchQuery}</strong>"
            </span>
            <button
              onClick={() => setSearchQuery("")}
              className="text-brand-blue hover:underline font-semibold cursor-pointer"
            >
              {language === "fr" ? "Effacer le filtre" : "Clear filter"}
            </button>
          </div>
        )}

        {/* Training Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredTrainings.map((item, idx) => {
              const Icon = item.icon;
              const colorClasses =
                item.color === "green"
                  ? {
                      badge: "bg-brand-green/90 text-white backdrop-blur-md",
                      accent: "bg-brand-green",
                      glow: "hover:border-brand-green/50 hover:shadow-brand-green/15",
                      catLabel: language === "fr" ? "BTP & Génie Civil" : "Civil Engineering",
                    }
                  : item.color === "blue"
                  ? {
                      badge: "bg-brand-blue/90 text-white backdrop-blur-md",
                      accent: "bg-brand-blue",
                      glow: "hover:border-brand-blue/50 hover:shadow-brand-blue/15",
                      catLabel: language === "fr" ? "Technologies & Digital" : "Technology & Digital",
                    }
                  : {
                      badge: "bg-amber-600/90 text-white backdrop-blur-md",
                      accent: "bg-amber-500",
                      glow: "hover:border-amber-500/50 hover:shadow-amber-500/15",
                      catLabel: language === "fr" ? "BIM & Projets" : "BIM & Management",
                    };

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.04 }}
                  className={`group relative bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden ${colorClasses.glow}`}
                >
                  {/* Top Accent Strip */}
                  <div className={`h-1.5 w-full ${colorClasses.accent}`} />

                  {/* Header Image de la formation */}
                  <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                    <img
                      src={item.image}
                      alt={item.title[language]}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-600 ease-out"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = item.fallbackImage;
                      }}
                    />
                    {/* Dégradé d'ombre et lisibilité */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/35 to-transparent" />

                    {/* Badges en superposition sur la photo */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
                      <span className={`text-[11px] font-extrabold px-3 py-1 rounded-full shadow-md ${colorClasses.badge}`}>
                        {colorClasses.catLabel}
                      </span>
                      {item.badge && (
                        <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-navy-900/80 backdrop-blur-md text-white border border-white/20 flex items-center gap-1 shadow-md">
                          <Sparkles size={11} className="text-amber-400" />
                          {item.badge[language]}
                        </span>
                      )}
                    </div>

                    {/* Icône dans pastille flottante en bas de l'image */}
                    <div className="absolute bottom-3 left-4 flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md flex items-center justify-center text-navy-900 shadow-lg group-hover:rotate-6 transition-transform">
                        <Icon size={20} />
                      </div>
                      <span className="text-xs font-semibold text-white drop-shadow-md">
                        {item.format[language]}
                      </span>
                    </div>
                  </div>

                  {/* Corps de la carte */}
                  <div className="p-6 md:p-7 flex-1 flex flex-col">
                    {/* Title & Description */}
                    <h3 className="text-lg font-bold text-navy-900 mb-2.5 group-hover:text-brand-blue transition-colors leading-snug">
                      {item.title[language]}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-5 line-clamp-3">
                      {item.description[language]}
                    </p>

                    {/* Meta information tags */}
                    <div className="grid grid-cols-2 gap-2.5 py-3 border-y border-slate-100 text-xs text-slate-600 mb-5 bg-slate-50/80 rounded-2xl px-3.5">
                      <div className="flex items-center gap-2">
                        <Clock size={14} className="text-brand-blue shrink-0" />
                        <span className="truncate font-medium">{item.duration[language]}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Layers size={14} className="text-brand-green shrink-0" />
                        <span className="truncate font-medium">{item.level[language]}</span>
                      </div>
                      <div className="flex items-center gap-2 col-span-2 pt-1 border-t border-slate-200/50">
                        <Calendar size={14} className="text-amber-500 shrink-0" />
                        <span className="truncate font-semibold text-navy-900">{item.nextSession[language]}</span>
                      </div>
                    </div>

                    {/* Key skills list */}
                    <div className="space-y-2 mb-5">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        {t.trainings.keySkills}
                      </div>
                      {item.skills[language].slice(0, 3).map((skill, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2
                            size={14}
                            className={
                              item.color === "green"
                                ? "text-brand-green shrink-0 mt-0.5"
                                : item.color === "blue"
                                ? "text-brand-blue shrink-0 mt-0.5"
                                : "text-amber-500 shrink-0 mt-0.5"
                            }
                          />
                          <span className="line-clamp-1">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions footer */}
                  <div className="p-6 pt-0 flex items-center gap-3">
                    <button
                      onClick={() => setSelectedTraining(item)}
                      className="flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors cursor-pointer text-center"
                    >
                      {t.trainings.btnDetails}
                    </button>
                    <button
                      onClick={() => {
                        setEnrolledTraining(item);
                        setEnrollStatus("idle");
                      }}
                      className="flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold bg-navy-900 text-white hover:bg-brand-blue transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-navy-900/10 group-hover:scale-102"
                    >
                      {t.trainings.btnEnroll}
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* 4-Step Career Excellence Journey Roadmap */}
        <div className="mt-24 pt-16 border-t border-slate-200/80">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-blue bg-brand-blue/10 px-3.5 py-1 rounded-full border border-brand-blue/20">
              {t.trainings.roadmapEyebrow}
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-navy-900 mt-3 mb-2">
              {t.trainings.roadmapTitle}
            </h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
              {t.trainings.roadmapSub}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ROADMAP_STEPS.map((step, sIdx) => {
              const StepIcon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: sIdx * 0.1, duration: 0.5 }}
                  className="relative bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-slate-200 group-hover:text-navy-900 transition-colors">
                      {step.num}
                    </span>
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${step.color} text-white flex items-center justify-center shadow-md`}
                    >
                      <StepIcon size={22} />
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-navy-900 text-base mb-2">{step.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-brand-blue">
                    <span>Étape {step.num}/04</span>
                    <CheckCircle2 size={14} className="text-brand-green" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Technical Facilities & High Performance Labs Showcase */}
        <TrainingLabShowcase />

        {/* Frequently Asked Questions Accordion */}
        <TrainingFAQ />

        {/* Enterprise & Custom Training Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 rounded-3xl p-8 md:p-12 text-white border border-white/10 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute -right-16 -bottom-16 w-80 h-80 bg-brand-green/20 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green/20 text-brand-green-light border border-brand-green/30 text-xs font-bold mb-4">
                <Building size={14} />
                {t.trainings.b2bBadge}
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
                {t.trainings.b2bTitle}
              </h3>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                {t.trainings.b2bDesc}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3.5 shrink-0">
              <Button href="#contact" variant="primary" className="!py-3 !px-6 text-sm">
                {t.trainings.btnB2bPlan}
              </Button>
              <button
                type="button"
                onClick={() => setIsCatalogOpen(true)}
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold text-sm tracking-wide border border-white/20 text-white hover:bg-white/10 transition-all cursor-pointer shadow-md"
              >
                <Download size={16} className="text-brand-green" />
                {t.trainings.btnB2bCatalog}
              </button>
            </div>
          </div>
        </motion.div>
      </Container>

      {/* Modal: Détails complets de la formation */}
      <AnimatePresence>
        {selectedTraining && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative flex flex-col"
            >
              {/* Header Image de la modal */}
              <div className="relative h-56 w-full shrink-0 overflow-hidden bg-slate-900">
                <img
                  src={selectedTraining.image}
                  alt={selectedTraining.title[language]}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = selectedTraining.fallbackImage;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent" />
                
                <button
                  onClick={() => setSelectedTraining(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 hover:bg-white text-white hover:text-navy-900 backdrop-blur-md flex items-center justify-center transition-colors cursor-pointer z-10"
                  aria-label="Fermer"
                >
                  <X size={18} />
                </button>

                <div className="absolute bottom-4 left-6 right-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-green-light bg-brand-green/20 backdrop-blur-md px-3 py-0.5 rounded-full border border-brand-green/30">
                      {selectedTraining.category === "btp"
                        ? t.trainings.tabBtp
                        : selectedTraining.category === "tech"
                        ? t.trainings.tabTech
                        : t.trainings.tabBim}
                    </span>
                    {selectedTraining.badge && (
                      <span className="text-xs font-bold text-sky-300 bg-sky-500/20 backdrop-blur-md px-3 py-0.5 rounded-full border border-sky-400/30">
                        {selectedTraining.badge[language]}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white leading-snug">
                    {selectedTraining.title[language]}
                  </h3>
                </div>
              </div>

              {/* Corps de la modal */}
              <div className="p-6 md:p-8 space-y-6">
                <p className="text-sm text-slate-700 leading-relaxed">{selectedTraining.description[language]}</p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 bg-slate-50 rounded-2xl text-xs text-slate-700">
                  <div>
                    <span className="text-slate-400 block mb-0.5">{t.trainings.modalDuration}</span>
                    <strong className="text-navy-900">{selectedTraining.duration[language]}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block mb-0.5">{t.trainings.modalFormat}</span>
                    <strong className="text-navy-900">{selectedTraining.format[language]}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block mb-0.5">{t.trainings.modalLevel}</span>
                    <strong className="text-navy-900">{selectedTraining.level[language]}</strong>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-navy-900 text-sm mb-3">{t.trainings.modalProgram}</h4>
                  <ul className="space-y-2.5">
                    {selectedTraining.skills[language].map((skill, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-700">
                        <CheckCircle2 size={16} className="text-brand-green shrink-0 mt-0.5" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl text-xs text-slate-600 space-y-2">
                  <p>
                    <strong>{t.trainings.modalAudience}</strong> {selectedTraining.audience[language]}
                  </p>
                  <p>
                    <strong>{t.trainings.modalPrereq}</strong> {selectedTraining.prerequisites[language]}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    onClick={() => {
                      const tr = selectedTraining;
                      setSelectedTraining(null);
                      setEnrolledTraining(tr);
                      setEnrollStatus("idle");
                    }}
                    className="flex-1 py-3 px-6 rounded-full bg-gradient-brand text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-brand-blue/20 hover:shadow-xl transition-all cursor-pointer"
                  >
                    <GraduationCap size={18} />
                    {t.trainings.modalReserve}
                  </button>
                  <button
                    onClick={() => setSelectedTraining(null)}
                    className="py-3 px-6 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-colors cursor-pointer"
                  >
                    {t.trainings.modalClose}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Modal: Formulaire d'inscription rapide */}
      <AnimatePresence>
        {enrolledTraining && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl max-w-lg w-full p-6 md:p-8 shadow-2xl relative"
            >
              <button
                onClick={() => setEnrolledTraining(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors cursor-pointer"
                aria-label="Fermer"
              >
                <X size={18} />
              </button>

              <div className="w-12 h-12 rounded-2xl bg-brand-green/10 text-brand-green flex items-center justify-center mb-4">
                <GraduationCap size={24} />
              </div>

              <h3 className="text-xl font-bold text-navy-900 mb-1">{t.trainings.enrollTitle}</h3>
              <p className="text-xs text-brand-blue font-semibold mb-6">{enrolledTraining.title[language]}</p>

              {enrollStatus === "success" ? (
                <div className="p-6 bg-brand-green/10 border border-brand-green/20 rounded-2xl text-center">
                  <CheckCircle2 size={36} className="text-brand-green mx-auto mb-2" />
                  <h4 className="font-bold text-navy-900 mb-1">{t.trainings.enrollSuccessTitle}</h4>
                  <p className="text-xs text-slate-600">
                    {t.trainings.enrollSuccessDesc}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleEnrollSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      {t.trainings.enrollNameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Mamadou Diallo"
                      value={enrollName}
                      onChange={(e) => setEnrollName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-blue"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      {t.trainings.enrollPhoneLabel}
                    </label>
                    <div className="relative">
                      <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="tel"
                        required
                        placeholder="+224 6XX XX XX XX"
                        value={enrollPhone}
                        onChange={(e) => setEnrollPhone(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-blue"
                      />
                    </div>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-500">
                    <span className="font-semibold text-navy-900">Session :</span> {enrolledTraining.nextSession[language]} — {enrolledTraining.duration[language]}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-xl bg-gradient-brand text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-brand-blue/20 hover:shadow-xl transition-all cursor-pointer"
                  >
                    <Send size={16} />
                    {t.trainings.enrollSubmit}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Modal: Catalogue PDF Interactif & Imprimable */}
      <TrainingCatalogModal isOpen={isCatalogOpen} onClose={() => setIsCatalogOpen(false)} />
    </section>
  );
}
