import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  X,
  Download,
  Printer,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  HardHat,
  Laptop,
  Box,
  Share2,
} from "lucide-react";
import logo from "../../assets/logo.jpeg";
import { TRAININGS } from "../../data/trainings";
import { useLanguage } from "../../context/LanguageContext";

interface TrainingCatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TrainingCatalogModal({ isOpen, onClose }: TrainingCatalogModalProps) {
  const { language } = useLanguage();
  const printableRef = useRef<HTMLDivElement>(null);

  const btpTrainings = TRAININGS.filter((t) => t.category === "btp");
  const techTrainings = TRAININGS.filter((t) => t.category === "tech");
  const bimTrainings = TRAININGS.filter((t) => t.category === "bim");

  const [isExporting, setIsExporting] = useState(false);

  const handleExportPDF = () => {
    setIsExporting(true);
    const content = document.getElementById("printable-catalog");
    if (!content) {
      window.print();
      setIsExporting(false);
      return;
    }

    try {
      const printWindow = window.open("", "_blank", "width=920,height=850");
      if (printWindow) {
        printWindow.document.write(`
          <!DOCTYPE html>
          <html lang="${language}">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Catalogue-Formations-2026-Nova-Group-Guinee.pdf</title>
            <script src="https://cdn.tailwindcss.com"></script>
            <style>
              @page { size: A4 portrait; margin: 12mm; }
              body { font-family: system-ui, -apple-system, sans-serif; background: #ffffff; color: #0f172a; margin: 0; padding: 10px; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
              .page-break-inside-avoid { break-inside: avoid; page-break-inside: avoid; margin-bottom: 20px; }
            </style>
          </head>
          <body>
            <div style="max-width: 850px; margin: 0 auto;">
              ${content.innerHTML}
            </div>
            <script>
              window.onload = function() {
                setTimeout(function() {
                  window.focus();
                  window.print();
                }, 500);
              };
            </script>
          </body>
          </html>
        `);
        printWindow.document.close();
      } else {
        window.print();
      }
    } catch (e) {
      window.print();
    } finally {
      setTimeout(() => setIsExporting(false), 1000);
    }
  };

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(
      language === "fr"
        ? "Bonjour Nova Group Guinée, je viens de consulter votre Catalogue Officiel des Formations 2026. Je souhaite m'inscrire."
        : "Hello Nova Group Guinea, I just reviewed your 2026 Official Training Catalog. I would like to enroll."
    );
    window.open(`https://wa.me/22400000000?text=${text}`, "_blank");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-navy-950/85 backdrop-blur-md overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-slate-100 rounded-3xl w-full max-w-5xl h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden"
      >
        {/* Top Control Bar */}
        <div className="bg-navy-950 text-white p-4 sm:px-6 flex items-center justify-between border-b border-white/10 shrink-0 print:hidden">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white p-1 flex items-center justify-center shadow-md">
              <img src={logo} alt="Nova Group Guinée" className="h-full w-full object-contain" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base flex items-center gap-2">
                <span>{language === "fr" ? "Catalogue Officiel des Formations 2026" : "Official Training Catalog 2026"}</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-brand-green/20 text-brand-green-light border border-brand-green/30 font-bold hidden sm:inline">
                  Export PDF Prêt
                </span>
              </h3>
              <p className="text-xs text-slate-400">Nova Group Guinée • Pôles BTP, Technologies & BIM</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            {/* Bouton Export PDF Cliquable */}
            <button
              onClick={handleExportPDF}
              disabled={isExporting}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-green text-white text-xs sm:text-sm font-extrabold hover:bg-emerald-600 transition-all shadow-lg hover:shadow-brand-green/30 active:scale-95 cursor-pointer"
            >
              <Download size={16} className={isExporting ? "animate-bounce" : ""} />
              <span>{language === "fr" ? "Exporter en PDF" : "Export to PDF"}</span>
            </button>

            <button
              onClick={() => window.print()}
              className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors cursor-pointer"
            >
              <Printer size={15} />
              <span>{language === "fr" ? "Imprimer" : "Print"}</span>
            </button>

            <button
              onClick={handleWhatsAppShare}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors cursor-pointer"
            >
              <Share2 size={15} />
              <span className="hidden sm:inline">WhatsApp</span>
            </button>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Fermer"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Container */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-slate-200/60 print:bg-white print:p-0 print:overflow-visible">
          <div
            ref={printableRef}
            className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-12 border border-slate-200/80 print:shadow-none print:border-none print:p-8 print:max-w-none print:rounded-none"
            id="printable-catalog"
          >
            {/* ===================== COUVERTURE & EN-TÊTE OFFICIEL ===================== */}
            <div className="border-b-2 border-navy-900 pb-8 mb-10">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <img
                    src={logo}
                    alt="Nova Group Guinée"
                    className="h-16 w-16 rounded-2xl bg-white p-1.5 shadow-md border border-slate-200 object-contain"
                  />
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-black text-navy-900 tracking-tight">
                      NOVA GROUP <span className="text-brand-green">GUINÉE</span>
                    </h1>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-0.5">
                      ACADEMY & CENTRE D'EXCELLENCE MULTISECTORIEL
                    </p>
                  </div>
                </div>

                <div className="text-left sm:text-right text-xs text-slate-600 space-y-1">
                  <p className="flex items-center sm:justify-end gap-1.5 font-medium">
                    <MapPin size={13} className="text-brand-green" /> Conakry, République de Guinée
                  </p>
                  <p className="flex items-center sm:justify-end gap-1.5 font-medium">
                    <Mail size={13} className="text-brand-blue" /> contact@novagroupguinee.com
                  </p>
                  <p className="flex items-center sm:justify-end gap-1.5 font-medium">
                    <Phone size={13} className="text-amber-500" /> +224 620 00 00 00 / WhatsApp
                  </p>
                </div>
              </div>

              {/* Titre du document */}
              <div className="mt-8 pt-6 border-t border-slate-100 bg-gradient-to-r from-navy-950 to-navy-900 rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-green-light bg-brand-green/20 px-3 py-1 rounded-full border border-brand-green/30 inline-block mb-3">
                    CATALOGUE GÉNÉRAL 2026
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                    {language === "fr"
                      ? "Formations Professionnelles & Certifiantes"
                      : "Certified Professional Training Programs"}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
                    {language === "fr"
                      ? "Génie Civil & BTP • Technologies & Numérique • BIM & Pilotage de Projets"
                      : "Civil Engineering & BTP • Technology & Digital • BIM & Project Management"}
                  </p>
                </div>
              </div>

              {/* Engagement pédagogique bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 text-center">
                  <span className="text-lg font-black text-brand-green block">70%</span>
                  <span className="text-[11px] text-slate-600 font-semibold">{language === "fr" ? "Pratique Terrain & Labs" : "Hands-On Field"}</span>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 text-center">
                  <span className="text-lg font-black text-brand-blue block">100%</span>
                  <span className="text-[11px] text-slate-600 font-semibold">{language === "fr" ? "Licences Officielles" : "Licensed Tools"}</span>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 text-center">
                  <span className="text-lg font-black text-amber-500 block">QR Code</span>
                  <span className="text-[11px] text-slate-600 font-semibold">{language === "fr" ? "Certificat Vérifiable" : "Verified Diploma"}</span>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 text-center">
                  <span className="text-lg font-black text-navy-900 block">50+</span>
                  <span className="text-[11px] text-slate-600 font-semibold">{language === "fr" ? "Entreprises Partenaires" : "Corporate Partners"}</span>
                </div>
              </div>
            </div>

            {/* ===================== SECTION 1 : PÔLE BTP & GÉNIE CIVIL ===================== */}
            <div className="mb-12 page-break-inside-avoid">
              <div className="flex items-center gap-3 mb-6 pb-2 border-b border-brand-green/30">
                <div className="w-9 h-9 rounded-xl bg-brand-green text-white flex items-center justify-center">
                  <HardHat size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-navy-900">
                    1. {language === "fr" ? "PÔLE BTP & GÉNIE CIVIL" : "CIVIL ENGINEERING & BTP POLE"}
                  </h3>
                  <p className="text-xs text-slate-500">Conduite de chantiers, topographie appliquée et calcul de structures béton</p>
                </div>
              </div>

              <div className="space-y-6">
                {btpTrainings.map((course, idx) => (
                  <div
                    key={course.id}
                    className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/90 flex flex-col gap-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <h4 className="text-base font-bold text-navy-900 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-brand-green/20 text-brand-green font-bold text-xs flex items-center justify-center">
                          1.{idx + 1}
                        </span>
                        {course.title[language]}
                      </h4>
                      <div className="flex items-center gap-2 text-xs font-semibold">
                        <span className="px-2.5 py-0.5 rounded-full bg-brand-green text-white">
                          {course.duration[language]}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-700">
                          {course.level[language]}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-700 leading-relaxed">{course.description[language]}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-slate-200/60">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                          Compétences clés acquises :
                        </span>
                        <ul className="space-y-1 text-xs text-slate-700">
                          {course.skills[language].map((s, si) => (
                            <li key={si} className="flex items-center gap-1.5">
                              <CheckCircle2 size={12} className="text-brand-green shrink-0" />
                              <span>{s}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="text-xs text-slate-600 space-y-1 bg-white p-3 rounded-xl border border-slate-100">
                        <p>
                          <strong>Public :</strong> {course.audience[language]}
                        </p>
                        <p>
                          <strong>Format :</strong> {course.format[language]}
                        </p>
                        <p>
                          <strong>Prérequis :</strong> {course.prerequisites[language]}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ===================== SECTION 2 : PÔLE TECHNOLOGIES & DIGITAL ===================== */}
            <div className="mb-12 page-break-inside-avoid">
              <div className="flex items-center gap-3 mb-6 pb-2 border-b border-brand-blue/30">
                <div className="w-9 h-9 rounded-xl bg-brand-blue text-white flex items-center justify-center">
                  <Laptop size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-navy-900">
                    2. {language === "fr" ? "PÔLE TECHNOLOGIES & DIGITAL" : "TECHNOLOGY & DIGITAL POLE"}
                  </h3>
                  <p className="text-xs text-slate-500">Développement web, cybersécurité réseaux & business intelligence IA</p>
                </div>
              </div>

              <div className="space-y-6">
                {techTrainings.map((course, idx) => (
                  <div
                    key={course.id}
                    className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/90 flex flex-col gap-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <h4 className="text-base font-bold text-navy-900 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-brand-blue/20 text-brand-blue font-bold text-xs flex items-center justify-center">
                          2.{idx + 1}
                        </span>
                        {course.title[language]}
                      </h4>
                      <div className="flex items-center gap-2 text-xs font-semibold">
                        <span className="px-2.5 py-0.5 rounded-full bg-brand-blue text-white">
                          {course.duration[language]}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-700">
                          {course.level[language]}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-700 leading-relaxed">{course.description[language]}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-slate-200/60">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                          Compétences clés acquises :
                        </span>
                        <ul className="space-y-1 text-xs text-slate-700">
                          {course.skills[language].map((s, si) => (
                            <li key={si} className="flex items-center gap-1.5">
                              <CheckCircle2 size={12} className="text-brand-blue shrink-0" />
                              <span>{s}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="text-xs text-slate-600 space-y-1 bg-white p-3 rounded-xl border border-slate-100">
                        <p>
                          <strong>Public :</strong> {course.audience[language]}
                        </p>
                        <p>
                          <strong>Format :</strong> {course.format[language]}
                        </p>
                        <p>
                          <strong>Prérequis :</strong> {course.prerequisites[language]}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ===================== SECTION 3 : PÔLE BIM & GESTION DE PROJETS ===================== */}
            <div className="mb-12 page-break-inside-avoid">
              <div className="flex items-center gap-3 mb-6 pb-2 border-b border-amber-500/30">
                <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center">
                  <Box size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-navy-900">
                    3. {language === "fr" ? "PÔLE BIM & GESTION DE PROJETS" : "BIM & PROJECT MANAGEMENT"}
                  </h3>
                  <p className="text-xs text-slate-500">Revit 3D, Civil 3D infrastructures, ordonnancement MS Project & Primavera</p>
                </div>
              </div>

              <div className="space-y-6">
                {bimTrainings.map((course, idx) => (
                  <div
                    key={course.id}
                    className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/90 flex flex-col gap-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <h4 className="text-base font-bold text-navy-900 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-600 font-bold text-xs flex items-center justify-center">
                          3.{idx + 1}
                        </span>
                        {course.title[language]}
                      </h4>
                      <div className="flex items-center gap-2 text-xs font-semibold">
                        <span className="px-2.5 py-0.5 rounded-full bg-amber-500 text-white">
                          {course.duration[language]}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-700">
                          {course.level[language]}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-700 leading-relaxed">{course.description[language]}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-slate-200/60">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                          Compétences clés acquises :
                        </span>
                        <ul className="space-y-1 text-xs text-slate-700">
                          {course.skills[language].map((s, si) => (
                            <li key={si} className="flex items-center gap-1.5">
                              <CheckCircle2 size={12} className="text-amber-500 shrink-0" />
                              <span>{s}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="text-xs text-slate-600 space-y-1 bg-white p-3 rounded-xl border border-slate-100">
                        <p>
                          <strong>Public :</strong> {course.audience[language]}
                        </p>
                        <p>
                          <strong>Format :</strong> {course.format[language]}
                        </p>
                        <p>
                          <strong>Prérequis :</strong> {course.prerequisites[language]}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ===================== SECTION 4 : SOLUTIONS ENTREPRISES B2B & CONTACT ===================== */}
            <div className="bg-navy-950 text-white rounded-2xl p-6 sm:p-8 border border-white/10 page-break-inside-avoid">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-green-light">
                    SOLUTIONS INTRA-ENTREPRISE & SUR-MESURE
                  </span>
                  <h4 className="text-lg sm:text-xl font-bold text-white mt-1 mb-2">
                    {language === "fr"
                      ? "Formez vos équipes directement sur vos chantiers ou dans nos labs"
                      : "Train your teams on-site or in our technical labs"}
                  </h4>
                  <p className="text-xs text-slate-300 max-w-xl leading-relaxed">
                    {language === "fr"
                      ? "Modules personnalisés, audits de compétences préalables, calendrier adapté à vos contraintes d'exploitation et attestations d'entreprises."
                      : "Custom modules, prior skills audit, flexible schedules aligned with your operational deadlines."}
                  </p>
                </div>

                <div className="shrink-0 text-left sm:text-right">
                  <p className="text-xs font-bold text-brand-green-light">Nova Group Guinée - Conakry</p>
                  <p className="text-xs text-slate-400 mt-0.5">WhatsApp : +224 620 00 00 00</p>
                  <p className="text-xs text-slate-400">Email : contact@novagroupguinee.com</p>
                </div>
              </div>
            </div>

            {/* Bottom Download & WhatsApp Action Card (Print Hidden) */}
            <div className="mt-8 p-6 bg-slate-100 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 print:hidden">
              <div>
                <h5 className="font-bold text-navy-900 text-sm">
                  {language === "fr" ? "Vous souhaitez conserver ce document ?" : "Would you like to save this catalog?"}
                </h5>
                <p className="text-xs text-slate-600">
                  {language === "fr"
                    ? "Téléchargez la version PDF complète ou échangez directement avec nos conseillers."
                    : "Download the complete PDF version or speak directly with our training advisors."}
                </p>
              </div>

              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <button
                  onClick={handleExportPDF}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-green text-white font-bold text-xs hover:bg-emerald-600 shadow-md cursor-pointer transition-all"
                >
                  <Download size={16} />
                  <span>{language === "fr" ? "Exporter en PDF" : "Export to PDF"}</span>
                </button>
                <button
                  onClick={handleWhatsAppShare}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-navy-900 text-white font-bold text-xs hover:bg-brand-blue shadow-md cursor-pointer transition-all"
                >
                  <Share2 size={16} />
                  <span>{language === "fr" ? "S'inscrire sur WhatsApp" : "Enroll on WhatsApp"}</span>
                </button>
              </div>
            </div>

            {/* Footer Signature */}
            <div className="mt-8 pt-4 border-t border-slate-200 text-center text-[10px] text-slate-400">
              © {new Date().getFullYear()} Nova Group Guinée. Tous droits réservés. Document officiel certifié.
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
