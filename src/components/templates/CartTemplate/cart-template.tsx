import {CartList} from '@components/organisms/CartList/cart-list';
import React from 'react';
import {CartTemplateProps} from './cart-template.props';
import {Container} from './cart-template.styles';

export const CartTemplate = ({cart, onDelete}: CartTemplateProps) => {
  return (
    <Container>
      <CartList cart={cart} onDelete={onDelete} />
    </Container>
  );
};
