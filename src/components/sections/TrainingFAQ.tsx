import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, MessageCircle } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export default function TrainingFAQ() {
  const { language } = useLanguage();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const FAQS = [
    {
      q: {
        fr: "Quels sont les prérequis pour intégrer les formations NGG ?",
        en: "What are the prerequisites to enroll in NGG programs?",
      },
      a: {
        fr: "Les prérequis dépendent du niveau du cursus : les formations d'initiation (Développement Web, AutoCAD débutant) ne nécessitent qu'une aisance avec l'ordinateur. Pour les formations avancées (Calcul de structures, BIM Revit Pro, Cybersécurité), une formation technique préalable ou une expérience dans le secteur est recommandée. Un test de positionnement sans frais est proposé.",
        en: "Prerequisites depend on the course level: foundational tracks (Web dev, beginner CAD) only require basic computer literacy. Advanced tracks (Structural design, BIM Revit Pro, Cybersecurity) recommend prior technical coursework or industry experience. A free skills assessment is provided.",
      },
    },
    {
      q: {
        fr: "Comment se déroulent les 70% de pratique et les ateliers chantiers ?",
        en: "How are the 70% practical work and live site workshops organized?",
      },
      a: {
        fr: "Chaque session combine des travaux pratiques sur nos stations informatiques équipées et des immersions réelles sur les chantiers en cours de Nova Group en Guinée. Vous manipulez directement les instruments topographiques (Station Totale, GPS RTK), analysez les ferraillages et pilotez des logiciels professionnels sous licences officielles.",
        en: "Each session blends computer lab practice with real field immersion on active Nova Group construction projects in Guinea. You directly operate surveying gear (Total Station, RTK GPS), review structural reinforcement, and work on licensed industrial software.",
      },
    },
    {
      q: {
        fr: "Proposez-vous des facilités de paiement échelonné ?",
        en: "Do you offer flexible installment payment plans?",
      },
      a: {
        fr: "Oui, Nova Group Guinée propose des facilités de paiement en 2 ou 3 tranches sans frais supplémentaires. Des tarifs préférentiels sont également accordés aux étudiants et demandeurs d'emploi sur présentation de justificatifs.",
        en: "Yes, Nova Group Guinea offers 2 or 3 interest-free monthly installment options. Special discounted rates are also available for verified students and job seekers.",
      },
    },
    {
      q: {
        fr: "Les certificats délivrés sont-ils reconnus par les entreprises ?",
        en: "Are NGG certificates recognized by employers?",
      },
      a: {
        fr: "Absolument. Nos programmes sont conçus en partenariat direct avec les acteurs industriels, miniers et BTP opérant en Guinée. Chaque certificat dispose d'un QR code sécurisé de vérification en ligne permettant aux recruteurs de valider l'authenticité de vos compétences.",
        en: "Absolutely. Our curricula are built directly in alignment with mining, civil engineering, and IT employers across Guinea. Every certificate includes a secure online QR verification code allowing recruiters to instantly validate authenticity.",
      },
    },
    {
      q: {
        fr: "Quels sont les horaires des sessions (soir / weekend / intensif) ?",
        en: "What are the cohort schedules (evening / weekend / intensive)?",
      },
      a: {
        fr: "Nous proposons 3 formats flexibles : Cours du soir (18h00 - 20h30), Cursus Intensif Weekend (Samedi et Dimanche), et Cursus Immersion en semaine pour les étudiants et demandeurs d'emploi.",
        en: "We offer 3 flexible schedules: Evening sessions (6:00 PM - 8:30 PM), Weekend Intensives (Saturday & Sunday), and Weekday Full Immersion for full-time learners.",
      },
    },
  ];

  return (
    <div className="mt-24 pt-16 border-t border-slate-200/80">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-blue bg-brand-blue/10 px-3.5 py-1 rounded-full border border-brand-blue/20">
          <HelpCircle size={12} className="inline mr-1 -mt-0.5" />
          {language === "fr" ? "Questions Fréquentes" : "Frequently Asked Questions"}
        </span>
        <h3 className="text-2xl md:text-3xl font-extrabold text-navy-900 mt-3 mb-2">
          {language === "fr" ? "Tout ce que vous devez savoir" : "Everything You Need to Know"}
        </h3>
        <p className="text-xs md:text-sm text-slate-600">
          {language === "fr"
            ? "Des réponses claires à vos interrogations sur nos formations, certifications et modalités."
            : "Clear answers to your questions about our programs, certifications, and admissions."}
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-3.5">
        {FAQS.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:border-slate-300 transition-colors"
            >
              <button
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
              >
                <span className="font-bold text-navy-900 text-sm md:text-base leading-snug">
                  {faq.q[language]}
                </span>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? "bg-navy-900 text-white" : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-5 pb-5 pt-1 text-xs md:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.a[language]}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      <div className="mt-8 text-center">
        <a
          href="https://wa.me/22400000000?text=Bonjour%20Nova%20Group%20Guin%C3%A9e%2C%20j%27ai%20une%20question%20sur%20les%20formations"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-xs font-bold text-brand-green hover:underline"
        >
          <MessageCircle size={15} />
          {language === "fr"
            ? "Une autre question ? Échangez directement avec un conseiller sur WhatsApp"
            : "Have another question? Chat directly with an advisor on WhatsApp"}
        </a>
      </div>
    </div>
  );
}
