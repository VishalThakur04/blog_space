export const defaultLocale = "en" as const;
export const locales = ["en", "hi", "fr", "es"] as const;
export type Locale = (typeof locales)[number];