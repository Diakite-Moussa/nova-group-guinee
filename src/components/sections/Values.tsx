import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { VALUES } from "../../data/values";
import { useLanguage } from "../../context/LanguageContext";

export default function Values() {
  const { language, t } = useLanguage();

  return (
    <section id="values" className="py-24 md:py-32 bg-mist-100 relative">
      <Container>
        <SectionTitle
          eyebrow={t.values.eyebrow}
          title={t.values.title}
          description={t.values.description}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {VALUES.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group relative rounded-3xl bg-white border border-slate-200/70 p-8 shadow-xs hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-brand flex items-center justify-center text-white shadow-md shadow-brand-blue/20 group-hover:scale-110 transition-transform duration-300">
                    <item.icon size={26} />
                  </div>
                  <span className="text-[11px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-brand-green/10 text-brand-green">
                    {item.badge[language]}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-display text-navy-900 mb-1">
                  {item.title[language]}
                </h3>
                <p className="text-xs font-semibold text-brand-blue mb-4">
                  {item.subtitle[language]}
                </p>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description[language]}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-400 group-hover:text-brand-green transition-colors">
                <span>{language === "fr" ? `Pilier ${i + 1}` : `Pillar ${i + 1}`}</span>
                <span className="h-0.5 w-6 bg-slate-200 group-hover:bg-brand-green transition-colors rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

