import { motion } from "framer-motion";

type SectionTitleProps = {
    eyebrow?: string;
    title: string;
    description?: string;
    align?: "left" | "center";
};

export default function SectionTitle({
    eyebrow,
    title,
    description,
    align = "center",
}: SectionTitleProps) {
    const alignment = align === "center" ? "text-center mx-auto items-center" : "text-left items-start";

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`flex flex-col gap-4 max-w-2xl ${alignment}`}
        >
            {eyebrow && (
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green">
                    {eyebrow}
                </span>
            )}
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900">
                {title}
            </h2>
            {description && (
                <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                    {description}
                </p>
            )}
        </motion.div>
    );
}