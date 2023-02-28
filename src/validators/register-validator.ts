import {LanguagePaths} from '@translations/enumns/LanguagePaths';
import {translate} from '@translations/index';
import * as yup from 'yup';

export const registerValidator = yup
  .object({
    email: yup
      .string()
      .email(translate(LanguagePaths.SIGNUP_EMAIL_ERROR_VALID))
      .required(translate(LanguagePaths.SIGNUP_EMAIL_ERROR_REQUIRED)),
    name: yup
      .string()
      .required(translate(LanguagePaths.SIGNUP_NAME_ERROR_REQUIRED)),
    password: yup
      .string()
      .min(6, translate(LanguagePaths.SIGNUP_PASSWORD_ERROR_LENGTH))
      .required(translate(LanguagePaths.SIGNUP_PASSWORD_ERROR_REQUIRED)),
    cel: yup
      .string()
      .min(14, translate(LanguagePaths.SIGNUP_CEL_ERROR_LENGTH))
      .required(translate(LanguagePaths.SIGNUP_CEL_ERROR_REQUIRED)),
  })
  .required();
