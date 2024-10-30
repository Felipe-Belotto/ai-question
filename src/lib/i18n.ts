import type { AvailableLanguageTag } from "@/paraglide/runtime";

import {
  DetectionStrategy,
  Middleware,
  Navigation,
} from "@inlang/paraglide-next";

const strategy = DetectionStrategy<AvailableLanguageTag>();

export const middleware = Middleware({ strategy });
export const { Link, useRouter, usePathname, redirect, permanentRedirect } =
  Navigation({ strategy });
