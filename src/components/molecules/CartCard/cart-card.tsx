import React, {useCallback, useState} from 'react';

import {CartCardProps} from './cart-card.props';
import {
  Container,
  CartImage,
  FoodInfo,
  Title,
  Description,
  PriceContainer,
  Price,
  ActionButtons,
  PrimaryButton,
  ImageContainer,
  CounterContainer,
  Counter,
} from './cart-card.styles';

import defaultChefImg from '../../../assets/defaultChef.png';

export const CartCard = ({
  image,
  counter,
  description,
  name,
  price,
}: CartCardProps) => {
  const [foodCounter, setFoodCounter] = useState(counter);

  const handleIncrementCounter = useCallback(() => {
    if (foodCounter <= 0) {
      return setFoodCounter(1);
    }

    if (foodCounter + 1 > 99) {
      return;
    }

    return setFoodCounter(state => state + 1);
  }, [foodCounter, counter]);

  const handleDecrementCounter = useCallback(() => {
    if (foodCounter - 1 <= 0) {
      return setFoodCounter(1);
    }

    return setFoodCounter(state => state - 1);
  }, [foodCounter, counter]);

  return (
    <Container>
      <ImageContainer>
        <CartImage source={image ? {uri: image} : defaultChefImg} />

        <CounterContainer>
          <Counter fontWeight="bold">{foodCounter}</Counter>
        </CounterContainer>
      </ImageContainer>

      <FoodInfo>
        <Title fontWeight="bold">{name}</Title>
        <Description numberOfLines={3} fontWeight="regular">
          {description}
        </Description>

        <PriceContainer>
          <Price>${Number(price * foodCounter || 0).toFixed(2)}</Price>

          <ActionButtons>
            <PrimaryButton iconName="minus" onPress={handleDecrementCounter} />
            <PrimaryButton iconName="plus" onPress={handleIncrementCounter} />

            {foodCounter <= 10 && (
              <PrimaryButton iconName="trash" color="red" />
            )}
          </ActionButtons>
        </PriceContainer>
      </FoodInfo>
    </Container>
  );
};
