"use client";
import { useLanguage } from "@/context/LanguageContext";

export function ClientHtml({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage();

  return <html lang={language}>{children}</html>;
}
