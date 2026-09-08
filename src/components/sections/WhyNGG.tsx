import { motion } from "framer-motion";
import { Layers, MapPin, TrendingUp, ShieldCheck, Zap, Globe2 } from "lucide-react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { useLanguage } from "../../context/LanguageContext";

export default function WhyNGG() {
  const { t } = useLanguage();

  return (
    <section id="why-ngg" className="py-24 md:py-32 bg-white">
      <Container>
        <SectionTitle
          eyebrow={t.why.eyebrow}
          title={t.why.title}
          description={t.why.description}
        />

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
          {/* Bento Card 1: Large Integrated Group */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-span-2 rounded-3xl bg-gradient-to-br from-navy-950 to-navy-900 text-white p-8 md:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none" />
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-brand-green mb-6 backdrop-blur-md">
                <Layers size={26} />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-green">
                {t.why.card1Badge}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold font-display mt-2 mb-4 leading-tight">
                {t.why.card1Title}
              </h3>
              <p className="text-sm md:text-base text-slate-300 leading-relaxed max-w-lg">
                {t.why.card1Desc}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 mt-8 pt-6 border-t border-white/10 text-center">
              <div>
                <p className="text-xl md:text-2xl font-extrabold text-white font-display">1</p>
                <p className="text-[11px] text-slate-400">{t.why.card1Stat1}</p>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-extrabold text-brand-green font-display">4</p>
                <p className="text-[11px] text-slate-400">{t.why.card1Stat2}</p>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-extrabold text-white font-display">100%</p>
                <p className="text-[11px] text-slate-400">{t.why.card1Stat3}</p>
              </div>
            </div>
          </motion.div>

          {/* Bento Card 2: Local Anchor */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-1 lg:col-span-2 rounded-3xl bg-mist-50 border border-slate-200/80 p-8 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green mb-6">
                <MapPin size={26} />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                {t.why.card2Badge}
              </span>
              <h3 className="text-xl md:text-2xl font-bold font-display text-navy-900 mt-2 mb-3">
                {t.why.card2Title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t.why.card2Desc}
              </p>
            </div>

            <div className="flex items-center gap-3 mt-6 p-3 rounded-2xl bg-white border border-slate-200/60">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-green animate-pulse" />
              <span className="text-xs font-semibold text-navy-900">
                {t.why.card2Hub}
              </span>
            </div>
          </motion.div>

          {/* Bento Card 3: International Standards */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-1 lg:col-span-2 rounded-3xl bg-mist-50 border border-slate-200/80 p-8 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-6">
                <Globe2 size={26} />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                {t.why.card3Badge}
              </span>
              <h3 className="text-xl md:text-2xl font-bold font-display text-navy-900 mt-2 mb-3">
                {t.why.card3Title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t.why.card3Desc}
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-bold text-brand-green mt-6">
              <ShieldCheck size={16} />
              {t.why.card3Check}
            </div>
          </motion.div>

          {/* Bento Card 4: High Scalability */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 lg:col-span-2 rounded-3xl bg-gradient-brand text-white p-8 md:p-10 flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-white mb-6 backdrop-blur-md">
                <TrendingUp size={26} />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-white/80">
                {t.why.card4Badge}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold font-display mt-2 mb-3 leading-tight">
                {t.why.card4Title}
              </h3>
              <p className="text-sm md:text-base text-white/90 leading-relaxed">
                {t.why.card4Desc}
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-white/90 mt-6">
              <Zap size={15} />
              {t.why.card4Fast}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}