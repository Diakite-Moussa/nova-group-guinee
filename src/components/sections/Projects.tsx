import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, MapPin, Calendar, Building, Sparkles, X, CheckCircle2 } from "lucide-react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import { PROJECTS, type ProjectCategory, type ProjectItem } from "../../data/projects";
import { useLanguage } from "../../context/LanguageContext";

export default function Projects() {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: "all", label: t.projects.filterAll },
    { id: "numerique", label: t.projects.filterDigital },
    { id: "btp", label: t.projects.filterBtp },
    { id: "services", label: t.projects.filterServices },
    { id: "conseil", label: t.projects.filterConsulting },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 md:py-32 bg-white relative">
      <Container>
        <SectionTitle
          eyebrow={t.projects.eyebrow}
          title={t.projects.title}
          description={t.projects.description}
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mt-12 mb-14">
          {categories.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`relative px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-navy-900 text-white shadow-md shadow-navy-900/20 scale-102"
                    : "bg-mist-100 text-slate-600 hover:bg-slate-200/80 hover:text-navy-900"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer rounded-3xl border border-slate-200/80 bg-white overflow-hidden shadow-xs hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Visual Header with Real Image */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title[language]}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = project.fallbackImage;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-navy-950/10" />

                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-navy-900/80 backdrop-blur-md text-white border border-white/20 shadow-sm">
                      {project.categoryLabel[language]}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-navy-900 transition-all duration-300 shadow-md">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 z-10">
                    <div className="flex items-center gap-3 text-xs text-slate-200 font-medium drop-shadow-sm">
                      <span className="flex items-center gap-1">
                        <MapPin size={13} className="text-brand-green" />
                        {project.location[language]}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Calendar size={13} />
                        {project.year}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-7 flex flex-col flex-grow justify-between gap-4">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold font-display text-navy-900 group-hover:text-brand-blue transition-colors leading-snug">
                      {project.title[language]}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 mt-2 leading-relaxed line-clamp-2">
                      {project.description[language]}
                    </p>
                  </div>

                  {/* Metrics preview */}
                  <div className="grid grid-cols-2 gap-3 py-3 border-y border-slate-100 bg-slate-50/80 rounded-2xl px-3.5">
                    {project.metrics.slice(0, 2).map((m, idx) => (
                      <div key={idx}>
                        <p className="text-sm md:text-base font-extrabold text-navy-900">{m.value}</p>
                        <p className="text-[11px] text-slate-500 font-medium truncate">{m.label[language]}</p>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-mist-100 text-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA to Discuss Custom Project */}
        <div className="mt-16 text-center">
          <p className="text-sm text-slate-600 mb-4 font-medium">
            {language === "fr"
              ? "Vous avez un projet spécifique en cours d'élaboration ?"
              : "Have a specific project in development?"}
          </p>
          <Button href="#contact" variant="primary">
            <Sparkles size={16} />
            {language === "fr"
              ? "Étudier la faisabilité de votre projet"
              : "Explore Your Project Feasibility"}
          </Button>
        </div>
      </Container>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden max-h-[90vh] flex flex-col"
            >
              {/* Modal Image Header */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title[language]}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = selectedProject.fallbackImage;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent" />

                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 hover:bg-white hover:text-navy-900 text-white flex items-center justify-center transition-all duration-200 cursor-pointer z-10"
                  aria-label="Fermer"
                >
                  <X size={18} />
                </button>

                <div className="absolute bottom-4 left-6 right-6">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-green/20 text-brand-green-light border border-brand-green/30 backdrop-blur-md inline-block mb-2">
                    {selectedProject.categoryLabel[language]}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white leading-snug">
                    {selectedProject.title[language]}
                  </h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 md:p-8 overflow-y-auto space-y-6">
                {/* Meta details */}
                <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-mist-50 text-xs text-slate-600">
                  <div>
                    <span className="text-slate-400 block mb-0.5">{t.projects.clientLabel}</span>
                    <strong className="text-navy-900">{selectedProject.client[language]}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block mb-0.5">{t.projects.yearLabel}</span>
                    <strong className="text-navy-900">{selectedProject.year}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block mb-0.5">{t.projects.locationLabel}</span>
                    <strong className="text-navy-900">{selectedProject.location[language]}</strong>
                  </div>
                </div>

                {/* Long Description */}
                <div>
                  <h4 className="font-bold text-navy-900 text-sm mb-2">
                    {language === "fr" ? "Périmètre & Réalisation" : "Scope & Delivery"}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {selectedProject.longDescription[language]}
                  </p>
                </div>

                {/* Key Metrics */}
                <div>
                  <h4 className="font-bold text-navy-900 text-sm mb-3">
                    {language === "fr" ? "Résultats & Impact mesuré" : "Key Metrics & Impact"}
                  </h4>
                  <div className="grid grid-cols-3 gap-3">
                    {selectedProject.metrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-2xl bg-navy-900 text-white text-center flex flex-col justify-center shadow-sm"
                      >
                        <span className="text-lg font-extrabold text-brand-green-light">
                          {metric.value}
                        </span>
                        <span className="text-[11px] text-slate-300 font-medium mt-0.5">
                          {metric.label[language]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Action button */}
                <div className="pt-4 flex justify-end">
                  <Button
                    href="#contact"
                    variant="primary"
                    onClick={() => setSelectedProject(null)}
                    className="w-full sm:w-auto"
                  >
                    {language === "fr"
                      ? "Discuter d'un projet similaire"
                      : "Discuss a Similar Project"}
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
