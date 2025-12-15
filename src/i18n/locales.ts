export type Locale = "en" | "pt";

export const LOCALES: Locale[] = ["en", "pt"];

export function getInitialLocale(): Locale {
    const stored = localStorage.getItem("locale");
    return stored === "pt" || stored === "en" ? stored : "en";
}

export function setStoredLocale(locale: Locale) {
    localStorage.setItem("locale", locale);
}
