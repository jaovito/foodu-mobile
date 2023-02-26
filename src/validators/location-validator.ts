import {LanguagePaths} from '@translations/enumns/LanguagePaths';
import {translate} from '@translations/index';
import * as yup from 'yup';

export const locationValidator = yup
  .object({
    address: yup
      .string()
      .required(translate(LanguagePaths.LOCATION_ERROR_ADDRESS_REQUIRED)),
  })
  .required();
