import {TextButton} from '@components/atoms/TextButton';
import {LanguagePaths} from '@translations/enumns/LanguagePaths';
import {translate} from '@translations/index';
import React from 'react';
import {CartListProps} from './cart-list.props';
import {CartCard, Container} from './cart-list.styles';

export const CartList = ({cart, onDelete}: CartListProps) => {
  return (
    <Container
      data={cart}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <CartCard
          id={item.id}
          name={item.name}
          description={item.about}
          price={item.price}
          image={item.file?.file_url}
          onDelete={() => onDelete(item.id)}
          counter={item.counter}
        />
      )}
      ListEmptyComponent={
        <TextButton>
          {translate(LanguagePaths.GENERAL_NOTHING_TO_SEE)}
        </TextButton>
      }
    />
  );
};
