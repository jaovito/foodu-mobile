import React from 'react';
import {FoodDescriptionProps} from './food-description.props';
import {Container, Title, Description} from './food-description.styles';

export const FoodDescription = ({
  title,
  description,
  titleProps,
  descriptionProps,
  ...rest
}: FoodDescriptionProps) => {
  return (
    <Container {...rest}>
      <Title fontWeight="medium" {...titleProps}>
        {title}
      </Title>

      <Description fontWeight="regular" {...descriptionProps}>
        {description}
      </Description>
    </Container>
  );
};
