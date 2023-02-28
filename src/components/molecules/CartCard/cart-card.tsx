import React, {useCallback, useEffect, useState} from 'react';

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
import {store} from '@store/index';

export const CartCard = ({
  image,
  counter,
  description,
  name,
  price,
  onDelete,
  id,
}: CartCardProps) => {
  const [foodCounter, setFoodCounter] = useState(counter);
  const {updateCounterFood} = store.cart;

  useEffect(() => {
    return () => {
      setFoodCounter(1);
    };
  }, []);

  const handleIncrementCounter = useCallback(() => {
    if (foodCounter <= 0) {
      updateCounterFood(id, 1);
      return setFoodCounter(1);
    }

    if (foodCounter + 1 > 99) {
      return;
    }

    return setFoodCounter(state => {
      updateCounterFood(id, state + 1);
      return state + 1;
    });
  }, [foodCounter, counter]);

  const handleDecrementCounter = useCallback(() => {
    if (foodCounter - 1 <= 0) {
      updateCounterFood(id, 1);
      return setFoodCounter(1);
    }

    return setFoodCounter(state => {
      updateCounterFood(id, state - 1);
      return state - 1;
    });
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
            <PrimaryButton
              testID="DecrementCounterButtonID"
              iconName="minus"
              onPress={handleDecrementCounter}
            />
            <PrimaryButton
              testID="IncrementCounterButtonID"
              iconName="plus"
              onPress={handleIncrementCounter}
            />

            {foodCounter <= 10 && (
              <PrimaryButton
                testID="DeleteCartButtonID"
                onPress={onDelete}
                iconName="trash"
                color="red"
              />
            )}
          </ActionButtons>
        </PriceContainer>
      </FoodInfo>
    </Container>
  );
};
