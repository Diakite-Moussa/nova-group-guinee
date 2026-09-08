import React, { createContext, useContext, useState, useEffect } from "react";
import { TRANSLATIONS, type Language } from "../i18n/translations";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (typeof TRANSLATIONS)["fr"];
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem("ngg_language") as Language;
      return saved === "en" || saved === "fr" ? saved : "fr";
    } catch {
      return "fr";
    }
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("ngg_language", lang);
      document.documentElement.lang = lang;
    } catch (e) {
      console.warn("Could not save language preference to localStorage", e);
    }
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = {
    language,
    setLanguage,
    t: TRANSLATIONS[language],
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
