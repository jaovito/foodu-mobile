import {Platform, NativeModules} from 'react-native';
import {I18n as i18n} from 'i18n-js';
import locales from './locales'; // importa o objeto de traduções para o idioma português
import {LanguagePaths} from './enumns/LanguagePaths';

// Função que irá nos auxiliar a normalizar as traduções que serão recebidas pela função getLanguageByDevice
// Isso é necessário pois no android e no iOS o retorno do mesmo idioma pode ser diferente
// Exemplo: no iOS podemos receber pt_US e no android pt_BR para o idioma português Brasil.
const normalizeTranslate = {
  en_US: 'en_US',
  pt_BR: 'pt_BR',
  en: 'en_US',
  pt_US: 'pt_BR',
};

// Função responsável por adquirir o idioma utilizado no device
const getLanguageByDevice = (): keyof typeof normalizeTranslate => {
  if (
    Platform.OS === 'ios' &&
    NativeModules?.SettingsManager?.settings?.AppleLocale
  ) {
    return NativeModules?.SettingsManager?.settings?.AppleLocale;
  } else if (NativeModules?.I18nManager?.localeIdentifier) {
    return NativeModules.I18nManager.localeIdentifier;
  }

  return 'en'; // Adquire o idioma no device Android
};

const I18n = new i18n(locales);

// Função responsável por verificar se o idioma atual do divice está sendo suportado, caso não ele irá setar como 'en_US'
const setLanguageToI18n = () => {
  const language = getLanguageByDevice();
  const translateNormalize = normalizeTranslate[language];
  const iHaveThisLanguage =
    I18n.translations?.hasOwnProperty(translateNormalize);
  iHaveThisLanguage
    ? (I18n.locale = translateNormalize)
    : (I18n.defaultLocale = 'en_US');
};

setLanguageToI18n();

export const translate = (key: `${LanguagePaths}`) => I18n.t(key);
