import { useEffect, useRef } from "react";
import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
    useScroll,
} from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRight, Sparkles, HardHat, Laptop, CheckCircle, ExternalLink, Activity } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import HeroHybrid3D from "../three/HeroHybrid3D";
import { useLanguage } from "../../context/LanguageContext";

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.8, delay: 0.2 + i * 0.1, ease: "easeOut" },
    }),
};

export default function Hero() {
    const sectionRef = useRef<HTMLElement>(null);
    const { language, t } = useLanguage();

    // --- Parallax de scroll ---
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"],
    });
    const scrollY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
    const scrollScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

    // --- Parallax de souris ---
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const smoothX = useSpring(mouseX, { stiffness: 45, damping: 20, mass: 0.6 });
    const smoothY = useSpring(mouseY, { stiffness: 45, damping: 20, mass: 0.6 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set((e.clientX / window.innerWidth - 0.5) * 2);
            mouseY.set((e.clientY / window.innerHeight - 0.5) * 2);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    const photoX = useTransform(smoothX, [-1, 1], [-8, 8]);
    const photoY = useTransform(smoothY, [-1, 1], [-6, 6]);
    const sceneX = useTransform(smoothX, [-1, 1], [-20, 20]);
    const sceneY = useTransform(smoothY, [-1, 1], [-14, 14]);

    return (
        <section
            ref={sectionRef}
            id="hero"
            className="relative isolate min-h-screen flex items-center overflow-hidden bg-navy-950 py-28 md:py-24"
        >
            {/* Arrière-plan 3D Hybride & Photos BTP + Digital */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{ y: scrollY, scale: scrollScale }}
            >
                {/* 1. Double fond photographique panoramique */}
                <motion.div
                    className="absolute inset-0 w-[110%] h-[110%] -left-[5%] -top-[5%] flex"
                    style={{ x: photoX, y: photoY }}
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    {/* Fond BTP (Chantiers & Grues) */}
                    <div className="w-1/2 h-full relative overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80"
                            alt="Chantier de construction BTP et génie civil"
                            className="w-full h-full object-cover brightness-[0.55] contrast-[1.1] saturate-[0.9]"
                            onError={(e) => {
                                (e.currentTarget as HTMLImageElement).src = "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80";
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/70 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/60" />
                    </div>

                    {/* Fond Tech (Ordinateurs, Code & Data) */}
                    <div className="w-1/2 h-full relative overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80"
                            alt="Ordinateurs, programmation et transformation digitale"
                            className="w-full h-full object-cover brightness-[0.52] contrast-[1.15] saturate-[1.05]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-l from-navy-950 via-navy-950/70 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/60" />
                    </div>

                    {/* Laser de démarcation central */}
                    <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-transparent via-brand-green/50 to-transparent" />
                </motion.div>

                {/* 2. Scène 3D WebGL Three.js BTP & Digital */}
                <motion.div
                    className="absolute inset-0 opacity-[0.78] mix-blend-screen"
                    style={{ x: sceneX, y: sceneY }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.78 }}
                    transition={{ duration: 1.4, delay: 0.3 }}
                >
                    <HeroHybrid3D />
                </motion.div>

                {/* Voile d'ambiance */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(10,17,40,0.8)_100%)] pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/30" />
            </motion.div>

            <Container className="relative z-10 pt-16 md:pt-10">
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
                    
                    {/* COLONNE GAUCHE : Textes & CTA */}
                    <div className="lg:col-span-7 flex flex-col gap-6">
                        {/* Badge Groupe */}
                        <motion.div
                            custom={0}
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                            className="inline-flex items-center gap-2 self-start rounded-full bg-white/10 backdrop-blur-md border border-white/15 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-green-light shadow-sm"
                        >
                            <Sparkles size={14} />
                            {t.hero.badge}
                        </motion.div>

                        {/* Titre principal */}
                        <motion.h1
                            custom={1}
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-white tracking-tight"
                        >
                            {t.hero.titleStart}{" "}
                            <span className="bg-gradient-to-r from-brand-green-light via-teal-300 to-brand-blue-light bg-clip-text text-transparent">
                                {t.hero.titleHighlight}
                            </span>{" "}
                            {t.hero.titleEnd}
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            custom={2}
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                            className="text-base md:text-lg text-slate-300 leading-relaxed max-w-xl"
                        >
                            {t.hero.description}
                        </motion.p>

                        {/* Boutons d'action */}
                        <motion.div
                            custom={3}
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                            className="flex flex-wrap gap-4 mt-1"
                        >
                            <Button href="#expertise" variant="primary">
                                {t.hero.ctaPrimary}
                                <ArrowRight size={16} />
                            </Button>
                            <Button
                                href="#contact"
                                variant="outline"
                                className="!border-white/40 !text-white hover:!bg-white hover:!text-navy-900 backdrop-blur-md"
                            >
                                {t.hero.ctaSecondary}
                            </Button>
                        </motion.div>

                        {/* Chiffres clés */}
                        <motion.div
                            custom={4}
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                            className="flex gap-8 mt-4 pt-6 border-t border-white/15"
                        >
                            {[
                                { value: t.hero.stat1Value, label: t.hero.stat1Label },
                                { value: t.hero.stat2Value, label: t.hero.stat2Label },
                                { value: t.hero.stat3Value, label: t.hero.stat3Label },
                            ].map((stat) => (
                                <div key={stat.label}>
                                    <p className="text-2xl font-extrabold text-white font-display">
                                        {stat.value}
                                    </p>
                                    <p className="text-xs text-slate-400">{stat.label}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* COLONNE DROITE : VITRINES VISUELLES HYBRIDES (BTP & INFORMATIQUE) */}
                    <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-5">
                        
                        {/* 🏗️ CARTE VISUELLE 1 : PÔLE BTP & GÉNIE CIVIL */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="group relative rounded-3xl bg-white/[0.08] backdrop-blur-xl border border-white/15 p-4 overflow-hidden shadow-2xl hover:border-amber-500/50 hover:bg-white/[0.12] transition-all duration-300"
                        >
                            <div className="flex gap-4 items-center">
                                {/* Photo BTP nette et visible */}
                                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shrink-0 relative border border-white/20 shadow-md bg-slate-800">
                                    <img
                                        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80"
                                        alt="Chantier BTP et grues"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        onError={(e) => {
                                            (e.currentTarget as HTMLImageElement).src = "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=600&q=80";
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                                    <span className="absolute bottom-1.5 left-2 text-[10px] font-bold text-amber-300 flex items-center gap-1">
                                        <HardHat size={12} />
                                        BTP
                                    </span>
                                </div>

                                {/* Texte & détails BTP */}
                                <div className="flex-1">
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-bold uppercase tracking-wider mb-2">
                                        <Activity size={10} className="animate-pulse" />
                                        {language === "fr" ? "Génie Civil & Chantiers" : "Civil Engineering"}
                                    </div>
                                    <h3 className="text-base font-bold text-white leading-snug group-hover:text-amber-300 transition-colors">
                                        {language === "fr"
                                            ? "Construction & Infrastructures"
                                            : "Construction & Infrastructure"}
                                    </h3>
                                    <p className="text-xs text-slate-300 mt-1 line-clamp-2 leading-relaxed">
                                        {language === "fr"
                                            ? "Gros œuvre, voiries, rénovation et supervision de chantiers d'envergure en Guinée."
                                            : "Heavy civil works, roadway construction, and structural supervision in Guinea."}
                                    </p>
                                    <a
                                        href="#expertise"
                                        className="inline-flex items-center gap-1 text-xs font-semibold text-amber-300 hover:text-white mt-2.5 transition-colors"
                                    >
                                        <span>{language === "fr" ? "Découvrir le pôle BTP" : "Explore Civil Works"}</span>
                                        <ExternalLink size={12} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* 💻 CARTE VISUELLE 2 : PÔLE NUMÉRIQUE, ORDINATEURS & TECH */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.45 }}
                            className="group relative rounded-3xl bg-white/[0.08] backdrop-blur-xl border border-white/15 p-4 overflow-hidden shadow-2xl hover:border-sky-400/50 hover:bg-white/[0.12] transition-all duration-300"
                        >
                            <div className="flex gap-4 items-center">
                                {/* Photo Ordinateurs / Tech nette et visible */}
                                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shrink-0 relative border border-white/20 shadow-md">
                                    <img
                                        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80"
                                        alt="Ordinateurs et développement informatique"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                    <span className="absolute bottom-1.5 left-2 text-[10px] font-bold text-sky-300 flex items-center gap-1">
                                        <Laptop size={12} />
                                        TECH & IT
                                    </span>
                                </div>

                                {/* Texte & détails Informatique */}
                                <div className="flex-1">
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30 text-[10px] font-bold uppercase tracking-wider mb-2">
                                        <Activity size={10} className="animate-pulse" />
                                        {language === "fr" ? "Informatique & Digital" : "IT & Software Systems"}
                                    </div>
                                    <h3 className="text-base font-bold text-white leading-snug group-hover:text-sky-300 transition-colors">
                                        {language === "fr"
                                            ? "Numérique & Solutions Métiers"
                                            : "Digital Solutions & Software"}
                                    </h3>
                                    <p className="text-xs text-slate-300 mt-1 line-clamp-2 leading-relaxed">
                                        {language === "fr"
                                            ? "Développement web & mobile, réseaux d'entreprise, cybersécurité et digitalisation."
                                            : "Custom web apps, enterprise cloud architectures, IT networks, and cybersecurity."}
                                    </p>
                                    <a
                                        href="#expertise"
                                        className="inline-flex items-center gap-1 text-xs font-semibold text-sky-300 hover:text-white mt-2.5 transition-colors"
                                    >
                                        <span>{language === "fr" ? "Découvrir le pôle Tech" : "Explore Digital & IT"}</span>
                                        <ExternalLink size={12} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                    </div>

                </div>
            </Container>
        </section>
    );
}
