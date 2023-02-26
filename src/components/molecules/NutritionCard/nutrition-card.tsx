import React from 'react';
import {NutritionCardProps} from './nutrition-card.props';
import {Container, Title, Info} from './nutrition-card.styles';

export const NutritionCard = ({title, info, ...rest}: NutritionCardProps) => {
  return (
    <Container {...rest}>
      <Title>{title}</Title>

      <Info>{info}</Info>
    </Container>
  );
};
