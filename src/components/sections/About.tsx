import { motion } from "framer-motion";
import { Target, Rocket, ShieldCheck } from "lucide-react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { useLanguage } from "../../context/LanguageContext";

export default function About() {
    const { t } = useLanguage();

    const pillars = [
        {
            icon: Target,
            title: t.about.missionTitle,
            text: t.about.missionText,
        },
        {
            icon: Rocket,
            title: t.about.ambitionTitle,
            text: t.about.ambitionText,
        },
        {
            icon: ShieldCheck,
            title: t.about.commitmentTitle,
            text: t.about.commitmentText,
        },
    ];

    return (
        <section id="about" className="py-24 md:py-32">
            <Container>
                <SectionTitle
                    eyebrow={t.about.eyebrow}
                    title={t.about.title}
                    description={t.about.description}
                />

                <div className="grid md:grid-cols-3 gap-6 mt-16">
                    {pillars.map((pillar, i) => (
                        <motion.div
                            key={pillar.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            className="group relative rounded-2xl bg-white border border-slate-100 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                                <pillar.icon size={22} className="text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-navy-900 mb-2">
                                {pillar.title}
                            </h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                {pillar.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}