import React from 'react';
import {CartList} from '@components/organisms/CartList/cart-list';
import {store} from '@store/index';
import {Container} from './cart.styles';

export const Cart = () => {
  const {
    cart: {allFoods},
  } = store;

  console.log({allFoods});

  return (
    <Container>
      <CartList cart={allFoods} />
    </Container>
  );
};
