import { useState } from "react";
import { MessageSquare, Phone, X, ArrowUpRight, GraduationCap, Building2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const { language } = useLanguage();

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Popover Card */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            className="mb-4 w-76 sm:w-84 rounded-3xl bg-white border border-slate-200/90 shadow-2xl p-5 text-navy-900 overflow-hidden relative"
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-green animate-ping" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  Nova Group Guinée
                </span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-slate-400 hover:text-navy-900 text-xs cursor-pointer"
                aria-label="Fermer"
              >
                <X size={16} />
              </button>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              {language === "fr"
                ? "Bonjour ! Un projet BTP, une solution digitale ou une inscription en formation ? Nos conseillers vous répondent directement."
                : "Hello! A civil engineering project, digital solution, or course enrollment? Our advisors are ready to assist you."}
            </p>

            <div className="flex flex-col gap-2">
              <a
                href={`https://wa.me/224600000000?text=${encodeURIComponent(
                  language === "fr"
                    ? "Bonjour Nova Group Guinée, je souhaite obtenir des informations sur vos formations professionnelles (programmes, dates et tarifs)."
                    : "Hello Nova Group Guinea, I would like to get information regarding your professional training programs (courses, schedule, and pricing)."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-4 py-2.5 rounded-2xl bg-brand-green/10 hover:bg-brand-green/20 text-brand-green font-semibold text-xs transition-all"
              >
                <span className="flex items-center gap-2">
                  <GraduationCap size={16} />
                  {language === "fr" ? "Formations BTP & Tech" : "Trainings (BTP & Tech)"}
                </span>
                <ArrowUpRight size={15} />
              </a>

              <a
                href={`https://wa.me/224600000000?text=${encodeURIComponent(
                  language === "fr"
                    ? "Bonjour Nova Group Guinée, je souhaite obtenir des informations et demander un devis pour un projet (BTP, Numérique ou Conseil)."
                    : "Hello Nova Group Guinea, I would like to get information and request a quote for a project (Construction, Digital, or Consulting)."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-4 py-2.5 rounded-2xl bg-[#25D366] text-white font-semibold text-xs shadow-md hover:brightness-105 transition-all"
              >
                <span className="flex items-center gap-2">
                  <Building2 size={16} />
                  {language === "fr" ? "Devis Projet d'Entreprise" : "Corporate Project Quote"}
                </span>
                <ArrowUpRight size={15} />
              </a>

              <a
                href="tel:+224600000000"
                className="flex items-center justify-between px-4 py-2 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-all"
              >
                <span className="flex items-center gap-2">
                  <Phone size={14} className="text-brand-blue" />
                  {language === "fr" ? "Appel direct (+224)" : "Direct Call (+224)"}
                </span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-gradient-brand text-white flex items-center justify-center shadow-xl shadow-brand-green/30 focus:outline-none focus:ring-4 focus:ring-brand-green/30 transition-transform cursor-pointer"
        aria-label="Ouvrir le contact direct WhatsApp"
      >
        {open ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>
    </div>
  );
}
