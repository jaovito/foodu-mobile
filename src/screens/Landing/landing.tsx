import React from 'react';
import {OnboardingChef} from '@components/molecules/OnboardingChef';
import {useNavigate} from '@hooks/useNavigate';
import {translate} from '@translations/index';
import {LanguagePaths} from '@translations/enumns/LanguagePaths';
import {LandingProps} from './landing.props';
import {Container} from './landing.styles';

export const Landing = ({}: LandingProps) => {
  const navigation = useNavigate();

  function handleGoSignIn() {
    navigation.navigate('SignIn');
  }

  return (
    <Container>
      <OnboardingChef
        title={translate(LanguagePaths.LANDING_ONBOARDING_TITLE)}
        description={translate(LanguagePaths.LANDING_ONBOARDING_DESCRIPTION)}
        onPress={handleGoSignIn}
      />
    </Container>
  );
};
