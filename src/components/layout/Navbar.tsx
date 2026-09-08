import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import logo from "../../assets/logo.jpeg";
import { useLanguage } from "../../context/LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { label: t.nav.home, href: "#hero" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.expertise, href: "#expertise" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.trainings, href: "#formations" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <Container className="flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Nova Group Guinée"
            className="h-12 w-12 sm:h-13 sm:w-13 md:h-14 md:w-14 rounded-xl bg-white p-1 shadow-md object-contain transition-transform group-hover:scale-105"
          />
          <span
            className={`font-display text-xl sm:text-2xl font-black tracking-tight hidden sm:inline transition-colors ${
              scrolled ? "text-navy-900" : "text-white"
            }`}
          >
            NGG<span className="text-brand-green-light">.</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-brand-green ${
                scrolled ? "text-navy-900" : "text-white/90"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          {/* Switcher de langue interactif */}
          <div
            className={`flex items-center rounded-full p-0.5 border text-[11px] font-bold transition-colors ${
              scrolled
                ? "bg-slate-100 border-slate-300 text-slate-700"
                : "bg-white/10 border-white/20 text-white"
            }`}
          >
            <button
              type="button"
              onClick={() => setLanguage("fr")}
              className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                language === "fr"
                  ? "bg-brand-green text-white shadow-sm font-extrabold"
                  : scrolled
                  ? "text-slate-600 hover:text-navy-900"
                  : "text-white/80 hover:text-white"
              }`}
              aria-label="Passer en français"
            >
              FR
            </button>
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                language === "en"
                  ? "bg-brand-green text-white shadow-sm font-extrabold"
                  : scrolled
                  ? "text-slate-600 hover:text-navy-900"
                  : "text-white/80 hover:text-white"
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
          </div>

          <Button href="#contact" variant="primary" className="!py-2.5 !px-5 text-xs">
            {t.nav.cta}
          </Button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          {/* Switcher de langue Mobile */}
          <div className="flex items-center rounded-full bg-white/10 p-0.5 border border-white/20 text-[11px] font-bold">
            <button
              type="button"
              onClick={() => setLanguage("fr")}
              className={`px-2 py-0.5 rounded-full ${
                language === "fr" ? "bg-brand-green text-white" : scrolled ? "text-navy-900" : "text-white/80"
              }`}
            >
              FR
            </button>
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`px-2 py-0.5 rounded-full ${
                language === "en" ? "bg-brand-green text-white" : scrolled ? "text-navy-900" : "text-white/80"
              }`}
            >
              EN
            </button>
          </div>

          <button
            className={scrolled ? "text-navy-900" : "text-white"}
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white overflow-hidden shadow-xl"
          >
            <Container className="flex flex-col gap-4 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-navy-900 hover:text-brand-green transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2">
                <Button href="#contact" variant="primary" onClick={() => setOpen(false)} className="w-full">
                  {t.nav.cta}
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}