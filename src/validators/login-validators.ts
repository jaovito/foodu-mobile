import {LanguagePaths} from '@translations/enumns/LanguagePaths';
import {translate} from '@translations/index';
import * as yup from 'yup';

export const loginValidator = yup
  .object({
    email: yup
      .string()
      .email(translate(LanguagePaths.SIGNIN_EMAIL_ERROR_VALID))
      .required(translate(LanguagePaths.SIGNIN_EMAIL_ERROR_REQUIRED)),
    password: yup
      .string()
      .min(6, translate(LanguagePaths.SIGNIN_PASSWORD_ERROR_LENGTH))
      .required(translate(LanguagePaths.SIGNIN_PASSWORD_ERROR_REQUIRED)),
  })
  .required();
