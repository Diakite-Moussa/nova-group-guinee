import { useState } from "react";
import { motion } from "framer-motion";
import { Award, Sparkles, QrCode, ShieldCheck, GraduationCap } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const COURSES_OPTIONS = [
  { id: "btp-conducteur", title: "Conducteur de Travaux & Gestion de Chantier", pole: "BTP & Génie Civil" },
  { id: "tech-fullstack", title: "Développement Web Full-Stack & Solutions Cloud", pole: "Technologies & Digital" },
  { id: "bim-revit", title: "BIM & Modélisation 3D sous Autodesk Revit", pole: "BIM & Projets" },
  { id: "btp-topo", title: "Topographie Appliquée & Implantation GPS / Station Totale", pole: "BTP & Génie Civil" },
  { id: "tech-cyber", title: "Administration Réseaux & Cybersécurité Opérationnelle", pole: "Technologies & Digital" },
  { id: "bim-p6", title: "Pilotage & Suivi de Projets avec MS Project & Primavera P6", pole: "BIM & Projets" },
];

export default function CertificateSimulator() {
  const { language } = useLanguage();
  const [studentName, setStudentName] = useState("Mamadou Diallo");
  const [selectedCourseIndex, setSelectedCourseIndex] = useState(0);

  const selectedCourse = COURSES_OPTIONS[selectedCourseIndex];
  const currentDate = new Date().toLocaleDateString(language === "fr" ? "fr-FR" : "en-US", {
    month: "long",
    year: "numeric",
  });

  const handleDownloadIntent = () => {
    const message = encodeURIComponent(
      language === "fr"
        ? `Bonjour Nova Group Guinée, je souhaite réserver ma place pour obtenir le certificat : "${selectedCourse.title}". Nom : ${studentName}`
        : `Hello Nova Group Guinea, I would like to enroll to obtain the certificate in: "${selectedCourse.title}". Name: ${studentName}`
    );
    window.open(`https://wa.me/224600000000?text=${message}`, "_blank");
  };

  return (
    <div className="mt-24 pt-16 border-t border-slate-200/80">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-500 bg-amber-500/10 px-3.5 py-1 rounded-full border border-amber-500/20">
          {language === "fr" ? "Simulateur de Certification" : "Certificate Simulator"}
        </span>
        <h3 className="text-2xl md:text-3xl font-extrabold text-navy-900 mt-3 mb-2">
          {language === "fr"
            ? "Visualisez votre futur Certificat de Compétences NGG"
            : "Preview your upcoming NGG Competency Certificate"}
        </h3>
        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
          {language === "fr"
            ? "Tapez votre nom et sélectionnez votre formation pour générer l'aperçu officiel de votre titre de compétences."
            : "Enter your name and select your track to generate the live preview of your accredited certificate."}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Form: Customizer */}
        <div className="lg:col-span-5 bg-white p-6 md:p-8 rounded-3xl border border-slate-200/90 shadow-md flex flex-col justify-between">
          <div className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                {language === "fr" ? "Votre Nom & Prénom :" : "Your Full Name :"}
              </label>
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="Ex: Mamadou Diallo"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-semibold text-navy-900 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                {language === "fr" ? "Programme Sélectionné :" : "Selected Track :"}
              </label>
              <select
                value={selectedCourseIndex}
                onChange={(e) => setSelectedCourseIndex(Number(e.target.value))}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs font-semibold text-navy-900 focus:outline-none focus:border-brand-blue bg-white"
              >
                {COURSES_OPTIONS.map((c, i) => (
                  <option key={c.id} value={i}>
                    [{c.pole}] {c.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-2xl text-xs text-amber-950 space-y-1.5">
              <div className="flex items-center gap-1.5 font-bold text-amber-900">
                <Sparkles size={14} className="text-amber-600" />
                <span>{language === "fr" ? "Caractéristiques du Diplôme :" : "Certificate Features :"}</span>
              </div>
              <p>• {language === "fr" ? "Identifiant unique & code de vérification blockchain / QR" : "Unique UUID & QR verification"}</p>
              <p>• {language === "fr" ? "Reconnaissance auprès des entreprises partenaires BTP & Tech" : "Recognized by top corporate hiring partners"}</p>
            </div>
          </div>

          <div className="pt-6">
            <button
              onClick={handleDownloadIntent}
              className="w-full py-3.5 px-6 rounded-2xl bg-gradient-brand text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-brand-blue/20 hover:shadow-xl transition-all cursor-pointer"
            >
              <GraduationCap size={18} />
              {language === "fr" ? "Réserver ma place pour cette session" : "Enroll to Earn This Certificate"}
            </button>
          </div>
        </div>

        {/* Right Preview: Live Holographic/Gold Certificate Card */}
        <div className="lg:col-span-7">
          <motion.div
            layout
            className="relative rounded-3xl p-6 sm:p-8 md:p-10 bg-gradient-to-br from-slate-900 via-navy-950 to-slate-900 text-white border-2 border-amber-400/40 shadow-2xl overflow-hidden"
          >
            {/* Holographic Watermark glow */}
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-brand-green/15 rounded-full blur-3xl pointer-events-none" />

            {/* Guilloche border motif */}
            <div className="border border-amber-400/30 rounded-2xl p-6 relative bg-navy-950/70 backdrop-blur-md">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-amber-400/20 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center border border-amber-400/40">
                    <Award size={22} />
                  </div>
                  <div>
                    <h5 className="text-xs font-black tracking-widest uppercase text-amber-300">
                      NOVA GROUP GUINÉE
                    </h5>
                    <p className="text-[10px] text-slate-400 tracking-wider">ACADEMY & CENTER OF EXCELLENCE</p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-mono text-amber-400/80 bg-amber-400/10 px-2.5 py-1 rounded-md border border-amber-400/20">
                    NGG-CERT-2026-{(selectedCourseIndex + 1042).toString(16).toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Certificate Main Title */}
              <div className="text-center my-6">
                <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400 mb-1">
                  {language === "fr" ? "CERTIFICAT OFFICIEL DE COMPÉTENCES" : "OFFICIAL COMPETENCY CERTIFICATE"}
                </p>
                <p className="text-xs text-slate-400 italic">
                  {language === "fr" ? "Le présent titre est décerné à :" : "This is to certify that :"}
                </p>
                <h4 className="text-2xl md:text-3xl font-serif font-black text-amber-300 my-2 tracking-wide">
                  {studentName || (language === "fr" ? "Votre Nom Ici" : "Your Name Here")}
                </h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                  {language === "fr"
                    ? "Pour avoir complété avec succès le cursus professionnel et validé l'ensemble des compétences pratiques en :"
                    : "For successfully completing the professional program and validating all hands-on requirements in :"}
                </p>
                <div className="inline-block mt-3 px-4 py-1.5 rounded-full bg-brand-green/20 border border-brand-green/40 text-brand-green-light font-bold text-xs md:text-sm">
                  {selectedCourse.title}
                </div>
              </div>

              {/* Footer: Date, Seals, Signatures, QR */}
              <div className="flex items-end justify-between border-t border-amber-400/20 pt-4 mt-6 text-xs text-slate-400">
                <div>
                  <p className="text-[10px] text-slate-500 uppercase">{language === "fr" ? "Délivré le :" : "Issued on :"}</p>
                  <p className="font-semibold text-slate-200">{currentDate}</p>
                  <p className="text-[10px] text-slate-500 mt-1">Conakry, Guinée</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-amber-300 border border-white/10">
                    <QrCode size={28} />
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-bold text-amber-400 flex items-center gap-1 justify-end">
                      <ShieldCheck size={12} />
                      <span>Sceau Officiel NGG</span>
                    </div>
                    <p className="text-[10px] text-slate-500 font-mono">Status: Authentifié</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
