import {ArrowButton} from '@components/atoms/ArrowButton';
import {ImageBackground} from '@components/atoms/ImageBackground';
import React from 'react';
import {OnboardingChefProps} from './onboarding-chef.props';
import {Container, Description, Title} from './onboarding-chef.styles';

export const OnboardingChef = ({
  title,
  description,
  onPress,
  ...rest
}: OnboardingChefProps) => {
  return (
    <ImageBackground {...rest}>
      <Container>
        <Title>{title}</Title>
        <Description>{description}</Description>

        <ArrowButton onPress={onPress} />
      </Container>
    </ImageBackground>
  );
};
