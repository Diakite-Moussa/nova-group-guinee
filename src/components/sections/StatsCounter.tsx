import { motion } from "framer-motion";
import { Award, CheckCircle2, TrendingUp, Users } from "lucide-react";
import Container from "../ui/Container";
import { useLanguage } from "../../context/LanguageContext";

export default function StatsCounter() {
  const { t } = useLanguage();

  const stats = [
    {
      icon: CheckCircle2,
      value: t.stats.stat1Value,
      label: t.stats.stat1Label,
      subtext: t.stats.stat1Sub,
      color: "from-blue-600 to-indigo-600",
    },
    {
      icon: Users,
      value: t.stats.stat2Value,
      label: t.stats.stat2Label,
      subtext: t.stats.stat2Sub,
      color: "from-emerald-500 to-green-600",
    },
    {
      icon: Award,
      value: t.stats.stat3Value,
      label: t.stats.stat3Label,
      subtext: t.stats.stat3Sub,
      color: "from-blue-700 to-teal-600",
    },
    {
      icon: TrendingUp,
      value: t.stats.stat4Value,
      label: t.stats.stat4Label,
      subtext: t.stats.stat4Sub,
      color: "from-green-600 to-emerald-700",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-mist-100 border-b border-slate-200/70">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-7 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-mist-100 flex items-center justify-center text-navy-900 shadow-xs">
                  <stat.icon size={22} className="text-brand-green" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {t.stats.performance}
                </span>
              </div>

              <div>
                <p className="text-4xl md:text-5xl font-extrabold font-display text-navy-900 tracking-tight">
                  {stat.value}
                </p>
                <h3 className="text-base font-bold text-slate-800 mt-2">
                  {stat.label}
                </h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  {stat.subtext}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100">
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                    className={`h-full bg-gradient-to-r ${stat.color}`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

