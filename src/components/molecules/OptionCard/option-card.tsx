import React from 'react';
import {OptionCardProps} from './option-card.props';
import {
  Container,
  InfoContainer,
  Icon,
  ArrowRight,
  Title,
} from './option-card.styles';

export const OptionCard = ({
  name,
  icon = 'settings',
  arrowRightProps,
  ...rest
}: OptionCardProps) => {
  return (
    <Container {...rest}>
      <InfoContainer>
        <Icon name={icon} />

        <Title>{name}</Title>
      </InfoContainer>

      <ArrowRight name="chevron-right" {...arrowRightProps} />
    </Container>
  );
};
