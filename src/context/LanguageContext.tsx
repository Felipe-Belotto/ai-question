// context/LanguageContext.tsx
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
    if (typeof window !== "undefined") {
      setLanguageTag(lang);
    }
    return lang;
  } catch (error) {
    console.error("Error setting language tag:", error);
    return DEFAULT_LANGUAGE;
  }
};

export const LanguageProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] =
    useState<SupportedLanguageTag>(DEFAULT_LANGUAGE);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    if (typeof navigator !== "undefined") {
      const browserLang = navigator.language;
      const supportedLang = SUPPORTED_LANGUAGES.find((lang) =>
        browserLang.toLowerCase().startsWith(lang.split("-")[0].toLowerCase())
      );
      setLanguageState(setLanguageSafely(supportedLang || DEFAULT_LANGUAGE));
    }
  }, []);

  const setLanguage = (lang: SupportedLanguageTag) => {
    setLanguageState(setLanguageSafely(lang));
  };

  // Se não estivermos no cliente, renderize com o idioma padrão
  if (!isClient) {
    return (
      <LanguageContext.Provider
        value={{ language: DEFAULT_LANGUAGE, setLanguage }}
      >
        {children}
      </LanguageContext.Provider>
    );
  }

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
