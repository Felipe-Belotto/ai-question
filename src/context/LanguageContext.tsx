"use client";
import { setLanguageTag } from "@/paraglide/runtime";
import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

export const SUPPORTED_LANGUAGES = ["en-US", "es-ES", "pt-BR"] as const;
export type SupportedLanguageTag = (typeof SUPPORTED_LANGUAGES)[number];

type LanguageContextType = {
  language: SupportedLanguageTag;
  setLanguage: (lang: SupportedLanguageTag) => void;
};

const DEFAULT_LANGUAGE: SupportedLanguageTag = "en-US";

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const setLanguageSafely = (
  lang: SupportedLanguageTag
): SupportedLanguageTag => {
  try {
    setLanguageTag(lang);
    return lang;
  } catch (error) {
    console.error("Error setting language tag:", error);
    return DEFAULT_LANGUAGE;
  }
};

export const LanguageProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] =
    useState<SupportedLanguageTag>(DEFAULT_LANGUAGE);

  useEffect(() => {
    if (typeof navigator !== "undefined") {
      const browserLang = navigator.language.toLowerCase();
      const supportedLang = SUPPORTED_LANGUAGES.find((lang) =>
        browserLang.startsWith(lang.split("-")[0])
      );
      setLanguageState(setLanguageSafely(supportedLang || DEFAULT_LANGUAGE));
    }
  }, []);

  const setLanguage = (lang: SupportedLanguageTag) => {
    setLanguageState(setLanguageSafely(lang));
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
