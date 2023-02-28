import {useNavigate} from '@hooks/useNavigate';
import {yupResolver} from '@hookform/resolvers/yup';
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';

import {IFormValues, LandingProps} from './sign-up.props';
import {Container, TextButton} from './sign-up.styles';
import {Form} from '@components/organisms/Form';
import {InputProps} from '@components/molecules/Input/input.props';
import {translate} from '@translations/index';
import {LanguagePaths} from '@translations/enumns/LanguagePaths';
import {api} from '../../services/api';
import {store} from '../../store';
import {Loading} from '@components/atoms/Loading';
import {registerValidator} from '@validators/register-validator';

export const SignUp = ({}: LandingProps) => {
  const {navigate, goBack} = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<IFormValues>({
    resolver: yupResolver(registerValidator),
  });

  async function handleGoSignIn(data: IFormValues) {
    setIsLoading(true);
    try {
      const response = await api.post('users', data);
      await store.signIn(response.data);

      navigate('SignIn');
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  function handleGoBack() {
    goBack();
  }

  const inputs: InputProps[] = [
    {
      name: 'name',
      placeholder: translate(LanguagePaths.SIGNUP_NAME_PLACEHOLDER),
      control,
      error: errors.name?.message,
      label: translate(LanguagePaths.SIGNUP_NAME_LABEL),
      autoCapitalize: 'none',
      keyboardType: 'email-address',
      textContentType: 'emailAddress',
    },
    {
      name: 'cel',
      placeholder: translate(LanguagePaths.SIGNUP_CEL_PLACEHOLDER),
      control,
      error: errors.cel?.message,
      label: translate(LanguagePaths.SIGNUP_CEL_LABEL),
      autoCapitalize: 'none',
      keyboardType: 'email-address',
      textContentType: 'emailAddress',
      mask: {},
    },
    {
      name: 'email',
      placeholder: translate(LanguagePaths.SIGNUP_EMAIL_PLACEHOLDER),
      control,
      error: errors.email?.message,
      label: translate(LanguagePaths.SIGNUP_EMAIL_LABEL),
      autoCapitalize: 'none',
      keyboardType: 'email-address',
      textContentType: 'emailAddress',
    },
    {
      name: 'password',
      placeholder: translate(LanguagePaths.SIGNUP_PASSWORD_PLACEHOLDER),
      control,
      error: errors.password?.message,
      label: translate(LanguagePaths.SIGNUP_PASSWORD_LABEL),
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
        title={translate(LanguagePaths.SIGNUP_TITLE)}
        buttonText={translate(LanguagePaths.SIGNUP_BUTTON_TEXT)}
        onSubmit={handleSubmit(handleGoSignIn)}
      />

      <TextButton onPress={handleGoBack}>
        {translate(LanguagePaths.SIGNUP_SIGN_IN)}
      </TextButton>

      {isLoading && <Loading />}
    </Container>
  );
};
