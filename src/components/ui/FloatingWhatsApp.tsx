import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

export default function FloatingWhatsApp() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            className="mb-3.5 w-76 sm:w-84 bg-white rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden text-slate-800"
          >
            {/* Header */}
            <div className="bg-gradient-brand p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="relative w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm">
                  NGG
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-navy-950" />
                </div>
                <div>
                  <h4 className="font-bold text-xs leading-tight">Nova Group Guinée</h4>
                  <p className="text-[10px] text-brand-green-light flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-green-light animate-ping" />
                    {language === "fr" ? "En ligne • Réponse rapide" : "Online • Fast Reply"}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white cursor-pointer"
              >
                <X size={15} />
              </button>
            </div>

            {/* Content */}
            <div className="p-4 bg-slate-50 space-y-3 text-xs">
              <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-slate-200/70 shadow-xs text-slate-700 leading-relaxed">
                👋 {language === "fr"
                  ? "Bonjour ! Comment pouvons-nous vous aider aujourd'hui ? Projets BTP, solutions digitales ou formations ?"
                  : "Hello! How can we assist you today? Civil engineering, digital solutions, or professional training?"}
              </div>

              <div className="space-y-1.5 pt-1">
                <a
                  href={`https://wa.me/224600000000?text=${encodeURIComponent(
                    language === "fr"
                      ? "Bonjour Nova Group Guinée, je souhaite obtenir des informations sur vos formations professionnelles (programmes, dates et tarifs)."
                      : "Hello Nova Group Guinea, I would like to get information regarding your professional training programs (courses, schedule, and pricing)."
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="block p-2.5 bg-brand-green/10 hover:bg-brand-green/20 text-brand-green font-bold rounded-xl text-center transition-colors"
                >
                  🎓 {language === "fr" ? "S'inscrire à une formation" : "Enroll in a Program"}
                </a>
                <a
                  href={`https://wa.me/224600000000?text=${encodeURIComponent(
                    language === "fr"
                      ? "Bonjour Nova Group Guinée, je souhaite obtenir des informations et demander un devis pour un projet (BTP, Numérique ou Conseil)."
                      : "Hello Nova Group Guinea, I would like to get information and request a quote for a project (Construction, Digital, or Consulting)."
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="block p-2.5 bg-navy-900 hover:bg-brand-blue text-white font-bold rounded-xl text-center transition-colors"
                >
                  💼 {language === "fr" ? "Demander un devis projet" : "Request a Project Quote"}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group w-14 h-14 rounded-full bg-brand-green text-white flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-108 transition-all duration-300 cursor-pointer"
        aria-label="Contacter sur WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-brand-green animate-ping opacity-25 pointer-events-none" />
        <MessageCircle size={28} className="relative z-10" />
        
        {/* Floating tooltip */}
        {!isOpen && (
          <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-navy-900/90 text-white text-[11px] font-semibold px-3 py-1 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
            {language === "fr" ? "Discuter avec nous" : "Chat with us"}
          </span>
        )}
      </button>
    </div>
  );
}
