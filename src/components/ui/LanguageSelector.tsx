"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { languageTag, setLanguageTag } from "@/paraglide/runtime";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useState, useEffect } from "react";

type SupportedLanguageTag = "pt-BR" | "en-US" | "es-ES";

const LANGUAGE_OPTIONS = [
  {
    code: "en-US",
    label: "English",
    flagUrl: "/flags/us.svg",
  },
  {
    code: "es-ES",
    label: "Español",
    flagUrl: "/flags/es.svg",
  },
  {
    code: "pt-BR",
    label: "Português",
    flagUrl: "/flags/br.svg",
  },
] as const;

export function LanguageSelector() {
  const [currentLanguageTag, setCurrentLanguageTag] =
    useState<SupportedLanguageTag>(() => languageTag() as SupportedLanguageTag);
  const router = useRouter();

  const currentLanguage = LANGUAGE_OPTIONS.find(
    (lang) => lang.code === currentLanguageTag
  );

  const handleLanguageChange = useCallback(
    (newLanguage: string) => {
      const lang = newLanguage as SupportedLanguageTag;

      if (lang === currentLanguageTag) return;

      try {
        document.cookie = `NEXT_LOCALE=${lang}; path=/; max-age=31536000`;

        setLanguageTag(lang);

        setCurrentLanguageTag(lang);

        document.documentElement.lang = lang;

        router.refresh();
      } catch (error) {
        console.error("Error changing language:", error);
      }
    },
    [currentLanguageTag, router]
  );

  useEffect(() => {
    const currentTag = languageTag() as SupportedLanguageTag;
    if (currentTag !== currentLanguageTag) {
      setCurrentLanguageTag(currentTag);
    }
  }, [currentLanguageTag]);

  return (
    <Select
      value={currentLanguageTag}
      onValueChange={handleLanguageChange}
      data-cy="language-selector"
    >
      <SelectTrigger
        className="bg-transparent border-primary/10 backdrop-blur-xs"
        aria-label={`Change language. Current language: ${currentLanguage?.label}`}
      >
        <div className="flex items-center gap-2">
          <SelectValue
            placeholder={
              <span className="flex items-center gap-2">
                {currentLanguage && (
                  <Image
                    src={currentLanguage.flagUrl}
                    alt={currentLanguage.label}
                    className="object-contain"
                    width={24}
                    height={24}
                  />
                )}
                {currentLanguage?.label}
              </span>
            }
          />
        </div>
      </SelectTrigger>
      <SelectContent className="bg-background/60 backdrop-blur-xs border-primary/10">
        {LANGUAGE_OPTIONS.map(({ code, label, flagUrl }) => (
          <SelectItem
            key={code}
            value={code}
            className="focus:bg-primary/10 cursor-pointer"
            role="menuitemradio"
            aria-checked={code === currentLanguageTag}
            lang={code}
          >
            <div className="flex items-center gap-2">
              <Image
                src={flagUrl}
                alt={label}
                className="object-contain"
                width={24}
                height={24}
              />
              <span>{label}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
