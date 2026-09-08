import { motion } from "framer-motion";
import Container from "../ui/Container";
import { useLanguage } from "../../context/LanguageContext";

export default function Vision() {
    const { t } = useLanguage();

    return (
        <section id="vision" className="relative py-24 md:py-32 bg-navy-950 overflow-hidden">
            {/* Décor */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-blue/20 blur-[120px] rounded-full" />
            </div>

            <Container className="text-center max-w-3xl">
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green"
                >
                    {t.vision.eyebrow}
                </motion.span>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    className="text-3xl md:text-5xl font-bold text-white mt-4 leading-tight"
                >
                    {t.vision.title}{" "}
                    <span className="text-gradient-brand">{t.vision.titleHighlight}</span>{" "}
                    {t.vision.titleEnd}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-slate-300 mt-6 text-lg leading-relaxed"
                >
                    {t.vision.description}
                </motion.p>
            </Container>
        </section>
    );
}