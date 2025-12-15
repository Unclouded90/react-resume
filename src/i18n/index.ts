import { en } from "./en";
import { pt } from "./pt";
import type { Locale } from "./locales";
import type { I18nKey } from "./keys";

const dictByLocale = { en, pt } as const;

export function createT(locale: Locale) {
  const dict = dictByLocale[locale];
  const fallback = dictByLocale.en;

  return (key: I18nKey): string => dict[key] ?? fallback[key] ?? key;
}
