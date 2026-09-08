import { motion } from "framer-motion";
import { ArrowRight, PhoneCall, Sparkles, CheckCircle } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { useLanguage } from "../../context/LanguageContext";

export default function CTA() {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-navy-950">
      {/* Dynamic Background Halos */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-blue/20 rounded-full blur-[130px]" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-brand-green/20 rounded-full blur-[130px]" />
      </div>

      <Container>
        <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 md:p-14 text-center max-w-4xl mx-auto shadow-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-brand-green/10 border border-brand-green/20 px-4 py-1.5 text-xs font-semibold text-brand-green mb-6"
          >
            <Sparkles size={14} />
            {t.cta.badge}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight"
          >
            {t.cta.titleStart}{" "}
            <span className="text-gradient-brand">{t.cta.titleHighlight}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-slate-300 mt-5 max-w-2xl mx-auto leading-relaxed"
          >
            {t.cta.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 mt-9"
          >
            <Button href="#contact" variant="primary" className="!py-3.5 !px-8 text-base">
              {t.cta.btnPrimary}
              <ArrowRight size={18} />
            </Button>
            <Button
              href="tel:+22400000000"
              variant="outline"
              className="!border-white/20 !text-white hover:!bg-white/10 !py-3.5 !px-8 text-base"
            >
              <PhoneCall size={18} className="text-brand-green" />
              {t.cta.btnSecondary}
            </Button>
          </motion.div>

          {/* Guarantee Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10 pt-8 border-t border-white/10 text-xs text-slate-400">
            <span className="flex items-center gap-2">
              <CheckCircle size={15} className="text-brand-green" />
              {t.cta.badge1}
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle size={15} className="text-brand-green" />
              {t.cta.badge2}
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle size={15} className="text-brand-green" />
              {t.cta.badge3}
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}

