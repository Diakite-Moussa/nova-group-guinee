import Container from "../ui/Container";
import logo from "../../assets/logo.jpeg";
import { useLanguage } from "../../context/LanguageContext";

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="bg-navy-950 text-white pt-16 pb-8">
            <Container className="grid grid-cols-1 md:grid-cols-4 gap-10">
                <div className="md:col-span-2">
                    <div className="flex items-center gap-3.5 mb-4">
                        <img
                            src={logo}
                            alt="Nova Group Guinée"
                            className="h-12 w-12 rounded-xl bg-white p-1 shadow-md object-contain"
                        />
                        <h3 className="font-display text-2xl font-extrabold">
                            NOVA GROUP <span className="text-brand-green">GUINÉE</span>
                        </h3>
                    </div>
                    <p className="text-slate-400 max-w-sm text-sm leading-relaxed">
                        {t.footer.description}
                    </p>
                </div>

                <div>
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-slate-300">
                        {t.footer.navTitle}
                    </h4>
                    <ul className="space-y-2 text-sm text-slate-400">
                        <li><a href="#about" className="hover:text-brand-green">{t.nav.about}</a></li>
                        <li><a href="#expertise" className="hover:text-brand-green">{t.nav.expertise}</a></li>
                        <li><a href="#projects" className="hover:text-brand-green">{t.nav.projects}</a></li>
                        <li><a href="#formations" className="hover:text-brand-green">{t.nav.trainings}</a></li>
                        <li><a href="#contact" className="hover:text-brand-green">{t.nav.contact}</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-slate-300">
                        {t.footer.contactTitle}
                    </h4>
                    <ul className="space-y-2 text-sm text-slate-400">
                        <li>Conakry, République de Guinée</li>
                        <li>contact@novagroupguinee.com</li>
                        <li>+224 620 00 00 00</li>
                    </ul>
                </div>
            </Container>

            <div className="border-t border-white/10 mt-12 pt-6">
                <Container>
                    <p className="text-xs text-slate-500 text-center">
                        © {new Date().getFullYear()} {t.footer.copyright}
                    </p>
                </Container>
            </div>
        </footer>
    );
}