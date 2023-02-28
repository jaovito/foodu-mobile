import React, {useCallback} from 'react';
import {CartList} from '@components/organisms/CartList/cart-list';
import {store} from '@store/index';
import {Container} from './cart.styles';
import {observer} from 'mobx-react';
import {useFocusEffect} from '@react-navigation/native';

export const Cart = observer(() => {
  const {
    cart: {allFoods, refreshFoods},
  } = store;

  const refresh = useCallback(() => {
    refreshFoods();
  }, []);

  useFocusEffect(refresh);

  return (
    <Container>
      <CartList cart={allFoods} />
    </Container>
  );
});
