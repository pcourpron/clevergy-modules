import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import translationES from "./public/locales/es/translation.json";

const i18n = i18next.createInstance();

// the translations
const resources = {
  es: {
    translation: translationES,
  },
};
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "es",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export { i18n };
