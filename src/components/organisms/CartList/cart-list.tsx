import React from 'react';
import {CartListProps} from './cart-list.props';
import {CartCard, Container} from './cart-list.styles';

export const CartList = ({cart}: CartListProps) => {
  return (
    <Container
      data={cart}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <CartCard
          name={item.name}
          description={item.about}
          price={item.price}
          image={item.file?.file_url}
          onDelete={() => {}}
          counter={item.counter}
        />
      )}
    />
  );
};
