import { useEffect, useRef } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { EXPERTISES } from "../../data/expertise";
import { gsap, ScrollTrigger } from "../../lib/gsap";
import { useLanguage } from "../../context/LanguageContext";

export default function Expertise() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { language, t } = useLanguage();

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray<HTMLElement>(".expertise-card");

            gsap.set(cards, { opacity: 0, y: 50 });

            ScrollTrigger.batch(cards, {
                start: "top 85%",
                onEnter: (batch) =>
                    gsap.to(batch, {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        ease: "power3.out",
                        stagger: 0.15,
                        overwrite: true,
                    }),
                once: true,
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="expertise" ref={sectionRef} className="py-24 md:py-32 bg-mist-100">
            <Container>
                <SectionTitle
                    eyebrow={t.expertise.eyebrow}
                    title={t.expertise.title}
                    description={t.expertise.description}
                />

                <div className="grid md:grid-cols-2 gap-6 mt-16">
                    {EXPERTISES.map((item) => (
                        <div
                            key={item.id}
                            className="expertise-card group relative rounded-3xl bg-white p-8 md:p-10 border border-slate-100 shadow-sm hover:shadow-2xl transition-shadow duration-500 overflow-hidden"
                        >
                            <div
                                className={`absolute -top-20 -right-20 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${item.color === "blue" ? "bg-brand-blue" : "bg-brand-green"
                                    }`}
                            />

                            <div className="relative flex items-start justify-between mb-6">
                                <div
                                    className={`w-14 h-14 rounded-2xl flex items-center justify-center ${item.color === "blue"
                                        ? "bg-brand-blue/10"
                                        : "bg-brand-green/10"
                                        }`}
                                >
                                    <item.icon
                                        size={26}
                                        className={
                                            item.color === "blue"
                                                ? "text-brand-blue"
                                                : "text-brand-green"
                                        }
                                    />
                                </div>
                                <ArrowUpRight
                                    size={20}
                                    className="text-slate-300 group-hover:text-navy-900 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                                />
                            </div>

                            <h3 className="relative text-xl font-bold text-navy-900 mb-3">
                                {item.title[language]}
                            </h3>
                            <p className="relative text-sm text-slate-600 leading-relaxed mb-6">
                                {item.description[language]}
                            </p>

                            <ul className="relative space-y-2">
                                {item.points[language].map((point) => (
                                    <li
                                        key={point}
                                        className="flex items-center gap-2 text-sm text-slate-700"
                                    >
                                        <Check
                                            size={15}
                                            className={
                                                item.color === "blue"
                                                    ? "text-brand-blue"
                                                    : "text-brand-green"
                                            }
                                        />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}