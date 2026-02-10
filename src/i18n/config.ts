export const locales = ['en', 'tr', 'az'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'az';
