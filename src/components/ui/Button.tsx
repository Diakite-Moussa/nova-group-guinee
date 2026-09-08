import { type ReactNode } from "react";
import { motion } from "framer-motion";

type ButtonProps = {
    children: ReactNode;
    variant?: "primary" | "outline" | "ghost";
    href?: string;
    onClick?: () => void;
    className?: string;
};

const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold text-sm tracking-wide transition-all duration-300";

const variants = {
    primary:
        "bg-gradient-brand text-white shadow-lg shadow-brand-blue/20 hover:shadow-xl hover:shadow-brand-green/30 hover:-translate-y-0.5",
    outline:
        "border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white",
    ghost: "text-navy-900 hover:text-brand-green",
};

export default function Button({
    children,
    variant = "primary",
    href,
    onClick,
    className = "",
}: ButtonProps) {
    const classes = `${base} ${variants[variant]} ${className}`;

    if (href) {
        return (
            <motion.a
                href={href}
                whileTap={{ scale: 0.97 }}
                className={classes}
            >
                {children}
            </motion.a>
        );
    }

    return (
        <motion.button
            onClick={onClick}
            whileTap={{ scale: 0.97 }}
            className={classes}
        >
            {children}
        </motion.button>
    );
}