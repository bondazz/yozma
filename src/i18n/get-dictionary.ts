import { Locale, defaultLocale } from './config';

const dictionaries = {
    en: () => import('./messages/en.json').then((module) => module.default),
    tr: () => import('./messages/tr.json').then((module) => module.default),
    az: () => import('./messages/az.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
    return dictionaries[locale] ? dictionaries[locale]() : dictionaries[defaultLocale]();
};
