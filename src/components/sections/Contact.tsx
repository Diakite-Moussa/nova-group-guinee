import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle2, Clock } from "lucide-react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import { useLanguage } from "../../context/LanguageContext";

export default function Contact() {
  const { language, t } = useLanguage();
  const [selectedPole, setSelectedPole] = useState("Numérique & SI");
  const [sent, setSent] = useState(false);

  const contactInfo = [
    {
      icon: MapPin,
      label: t.contact.infoHQ,
      value: t.contact.infoHQVal,
      subtext: t.contact.infoHQSub,
    },
    {
      icon: Mail,
      label: t.contact.infoEmail,
      value: "contact@novagroupguinee.com",
      subtext: t.contact.infoEmailSub,
    },
    {
      icon: Phone,
      label: t.contact.infoPhone,
      value: "+224 620 00 00 00",
      subtext: t.contact.infoPhoneSub,
    },
    {
      icon: Clock,
      label: t.contact.infoAvail,
      value: t.contact.infoAvailVal,
      subtext: t.contact.infoAvailSub,
    },
  ];

  const poles =
    language === "fr"
      ? [
          "Numérique & SI",
          "BTP & Génie Civil",
          "Services & Logistique",
          "Conseil & Stratégie",
          "Formations Professionnelles",
          "Partenariat / Autre",
        ]
      : [
          "Digital & IT Systems",
          "Civil Works & Construction",
          "Logistics & Services",
          "Strategic Consulting",
          "Professional Training",
          "Partnership / Other",
        ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-mist-100 relative">
      <Container>
        <SectionTitle
          eyebrow={t.contact.eyebrow}
          title={t.contact.title}
          description={t.contact.description}
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mt-16">
          {/* Informations de contact */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div className="p-8 rounded-3xl bg-navy-950 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-green/20 rounded-full blur-3xl pointer-events-none" />
              <h3 className="text-xl font-bold font-display text-white mb-2">
                Nova Group Guinée
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                {language === "fr"
                  ? "Construire durablement, innover avec audace."
                  : "Building sustainably, innovating boldly."}
              </p>

              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 shrink-0 rounded-xl bg-white/10 flex items-center justify-center text-brand-green">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        {item.label}
                      </p>
                      <p className="text-sm font-semibold text-white mt-0.5">
                        {item.value}
                      </p>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        {item.subtext}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Formulaire accessible et qualifié */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 bg-white rounded-3xl border border-slate-200/80 shadow-lg p-7 md:p-10"
          >
            {sent ? (
              <div className="py-12 text-center flex flex-col items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl font-bold font-display text-navy-900">
                  {t.contact.successTitle}
                </h3>
                <p className="text-sm text-slate-600 max-w-md leading-relaxed">
                  {t.contact.successDesc}
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="text-xs font-semibold text-brand-blue hover:underline mt-4 cursor-pointer"
                >
                  {t.contact.sendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Sélecteur de pôle */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    {t.contact.sectorLabel}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {poles.map((pole) => (
                      <button
                        type="button"
                        key={pole}
                        onClick={() => setSelectedPole(pole)}
                        className={`text-xs font-semibold px-3.5 py-2 rounded-xl border transition-all cursor-pointer ${
                          selectedPole === pole
                            ? "bg-navy-900 border-navy-900 text-white shadow-xs"
                            : "bg-mist-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                        }`}
                      >
                        {pole}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Champs identité */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-semibold text-slate-700">
                      {t.contact.nameLabel}
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      type="text"
                      placeholder="Ex: Amadou Diallo"
                      autoComplete="name"
                      className="rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/40"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-semibold text-slate-700">
                      {t.contact.emailLabel}
                    </label>
                    <input
                      id="email"
                      name="email"
                      required
                      type="email"
                      placeholder="contact@company.com"
                      autoComplete="email"
                      className="rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/40"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-xs font-semibold text-slate-700">
                      {t.contact.phoneLabel}
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+224 6XX XX XX XX"
                      autoComplete="tel"
                      className="rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/40"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="company" className="text-xs font-semibold text-slate-700">
                      {t.contact.companyLabel}
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder={language === "fr" ? "Nom de votre structure" : "Your organization / company"}
                      className="rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/40"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-slate-700">
                    {t.contact.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder={t.contact.messagePlaceholder}
                    className="rounded-xl border border-slate-200 px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-brand-blue/40"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <p className="text-xs text-slate-500">
                    {t.contact.privacy}
                  </p>
                  <Button variant="primary" className="w-full sm:w-auto">
                    {t.contact.submitBtn}
                    <Send size={16} />
                  </Button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

