"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/context/LanguageContext";
import { languageTag } from "@/paraglide/runtime";
import Image from "next/image";

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
  const { setLanguage } = useLanguage();
  const currentLanguage = LANGUAGE_OPTIONS.find(
    (lang) => lang.code === languageTag()
  );

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage as "pt-BR" | "en-US" | "es-ES");
  };

  return (
    <Select value={languageTag()} onValueChange={handleLanguageChange}>
      <SelectTrigger className="bg-primary/5 border-primary/10 backdrop-blur-sm">
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
      <SelectContent className="bg-background/60 backdrop-blur-sm border-primary/10">
        {LANGUAGE_OPTIONS.map(({ code, label, flagUrl }) => (
          <SelectItem
            key={code}
            value={code}
            className="focus:bg-primary/10 cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <Image   
               src={flagUrl}
                    alt={label}
                    className="object-contain"
                    width={24}
                    height={24} />
              <span>{label}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
