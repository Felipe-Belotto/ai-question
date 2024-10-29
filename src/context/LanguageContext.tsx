/* "use client";
import { setLanguageTag } from "@/paraglide/runtime";
import { languageTag } from "@/paraglide/runtime.js";
import type { FC, ReactNode } from "react";
import { createContext, useContext, useState } from "react";
type SupportedLanguageTag = "pt-BR" | "en-US" | "es-ES" | "zh-CN" | "hi-IN";

type LanguageContextType = {
	language: SupportedLanguageTag;
	setLanguage: (lang: SupportedLanguageTag) => void;
};

const DEFAULT_LANGUAGE: SupportedLanguageTag = "en-US";

const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined,
);

const setLanguageSafely = (
	lang: SupportedLanguageTag,
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
	const [languageState, setLanguageState] = useState<SupportedLanguageTag>(
		setLanguageSafely(
			(languageTag() as SupportedLanguageTag) || DEFAULT_LANGUAGE,
		),
	);

	const setLanguage = (lang: SupportedLanguageTag) => {
		setLanguageState(setLanguageSafely(lang));
	};

	return (
		<LanguageContext.Provider value={{ language: languageState, setLanguage }}>
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
 */
