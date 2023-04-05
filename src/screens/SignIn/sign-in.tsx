import {useNavigate} from '@hooks/useNavigate';
import {loginValidator} from '@validators/login-validators';
import {yupResolver} from '@hookform/resolvers/yup';
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';

import {IFormValues, LandingProps} from './sign-in.props';
import {Container, TextButton} from './sign-in.styles';
import {Form} from '@components/organisms/Form';
import {InputProps} from '@components/molecules/Input/input.props';
import {translate} from '@translations/index';
import {LanguagePaths} from '@translations/enumns/LanguagePaths';
import {api} from '../../services/api';
import {store} from '../../store';
import {Loading} from '@components/atoms/Loading';
import {getError} from '@utils/get-error';

export const SignIn = ({}: LandingProps) => {
  const {navigate} = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: {errors},
    setError,
  } = useForm<IFormValues>({
    resolver: yupResolver(loginValidator),
  });

  async function handleGoSignIn(data: IFormValues) {
    setIsLoading(true);
    try {
      const response = await api.post('auth/login', data);
      await store.signIn(response.data);

      navigate('Location');
    } catch (err) {
      console.log(err);
      const error = getError(err);
      console.log(error);

      switch (error.response?.status) {
        case 400:
          return setError('password', {
            message: translate(LanguagePaths.SIGNIN_ERROR_400),
          });
        case 401:
          return setError('password', {
            message: translate(LanguagePaths.SIGNIN_ERROR_400),
          });
        case 500:
          return setError('password', {
            message: translate(LanguagePaths.SIGNIN_ERROR_500),
          });
      }
    } finally {
      setIsLoading(false);
    }
  }

  function handleGoSignUp() {
    navigate('SignUp');
  }

  const inputs: InputProps[] = [
    {
      name: 'email',
      placeholder: translate(LanguagePaths.SIGNIN_EMAIL_PLACEHOLDER),
      control,
      error: errors.email?.message,
      label: translate(LanguagePaths.SIGNIN_EMAIL_LABEL),
      autoCapitalize: 'none',
      keyboardType: 'email-address',
      textContentType: 'emailAddress',
    },
    {
      name: 'password',
      placeholder: translate(LanguagePaths.SIGNIN_PASSWORD_PLACEHOLDER),
      control,
      error: errors.password?.message,
      label: translate(LanguagePaths.SIGNIN_PASSWORD_LABEL),
      autoCapitalize: 'none',
      textContentType: 'password',
      keyboardType: 'email-address',
      secureTextEntry: true,
    },
  ];

  return (
    <Container>
      <Form
        inputs={inputs}
        title={translate(LanguagePaths.SIGNIN_TITLE)}
        buttonText={translate(LanguagePaths.SIGNIN_BUTTON_TEXT)}
        onSubmit={handleSubmit(handleGoSignIn)}
      />

      <TextButton onPress={handleGoSignUp}>
        {translate(LanguagePaths.SIGNIN_SIGN_UP)}
      </TextButton>

      {isLoading && <Loading />}
    </Container>
  );
};
