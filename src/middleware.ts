import { middleware as paraglide } from "@/lib/i18n";
import type { NextRequest } from "next/server";

type SupportedLanguageTag = "pt-BR" | "en-US" | "es-ES";

function detectLanguage(request: NextRequest): SupportedLanguageTag {
  const defaultLang: SupportedLanguageTag = "en-US";
  const acceptLanguage = request.headers.get("accept-language");

  if (!acceptLanguage) return defaultLang;

  const userLanguages = acceptLanguage
    .split(",")
    .map((lang) => lang.split(";")[0].trim());

  for (const lang of userLanguages) {
    switch (lang.split("-")[0]) {
      case "pt":
        return "pt-BR";
      case "es":
        return "es-ES";
      case "en":
        return "en-US";
    }
  }

  return defaultLang;
}

export function middleware(request: NextRequest) {
  const lang = detectLanguage(request);
  request.headers.set("accept-language", lang);
  return paraglide(request);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
