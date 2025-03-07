import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpApi) // Pour charger les fichiers de traduction
  .use(LanguageDetector) // Pour détecter la langue
  .use(initReactI18next) // Pour utiliser avec React
  .init({
    fallbackLng: 'en', // Langue par défaut
    debug: false, // Activez pour le débogage
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Chemin vers vos fichiers de traduction
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['cookie'], // Sauvegarde la langue dans un cookie
    },
    interpolation: {
      escapeValue: false, // React gère déjà l'échappement des valeurs
    },
  });

export default i18n;
