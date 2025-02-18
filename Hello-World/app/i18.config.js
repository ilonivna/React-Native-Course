import { mainEn, mainUa } from "../localization";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { getLocales } from "expo-localization";

const resources = {
    en: {
        main: mainEn,
    },
    ua: {
        main: mainUa, 
    }
};

i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng: getLocales()[0].languageCode,
    fallbackLng: 'en',
    resources,
    ns: ['main'],
    defaultNS: 'main',
    initImmediate: false,
  });

export default i18n;
