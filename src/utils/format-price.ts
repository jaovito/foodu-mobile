import {LanguagePaths} from '@translations/enumns/LanguagePaths';
import {translate} from '@translations/index';

const defaultValues = {
  language: 'en-US',
  currency: 'USD',
};

function getDefaultValues() {
  if (translate(LanguagePaths.GENERAL_LANGUAGE) === 'general.language') {
    return defaultValues;
  }

  return {
    language: translate(LanguagePaths.GENERAL_LANGUAGE),
    currency: translate(LanguagePaths.GENERAL_CURRENCY),
  };
}

export function formatPrice(price: number) {
  return price.toLocaleString(getDefaultValues().language, {
    style: 'currency',
    currency: getDefaultValues().currency,
  });
}
