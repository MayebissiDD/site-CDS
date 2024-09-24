import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Traductions de base
const resources = {
  en: {
    translation: {
      "Accueil": "Home",
      "À propos": "About",
      "Services": "Services",
      "Portefolio": "Portfolio",
      "Contact": "Contact",
      "Demander un devis": "Request a Quote",
      // Ajoutez ici les autres traductions...
    }
  },
  fr: {
    translation: {
      "Accueil": "Accueil",
      "À propos": "À propos",
      "Services": "Services",
      "Portefolio": "Portefolio",
      "Contact": "Contact",
      "Demander un devis": "Demander un devis",
      // Ajoutez ici les autres traductions...
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      // Détecte uniquement la langue sans le code du pays
      lookupQuerystring: 'lng',
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage'],
      order: ['querystring', 'cookie', 'localStorage', 'navigator'],
      lookupFromPathIndex: 0,
      checkWhitelist: true,
    },
    supportedLngs: ['fr', 'en'], // Langues supportées
    load: 'languageOnly', // Charge uniquement 'fr' ou 'en', sans sous-codes (comme 'fr-FR')
  });

export default i18n;
