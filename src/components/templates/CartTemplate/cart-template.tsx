import React from 'react';
import {Button} from '@components/atoms/Button';
import {CartList} from '@components/organisms/CartList/cart-list';
import {LanguagePaths} from '@translations/enumns/LanguagePaths';
import {translate} from '@translations/index';
import {isTrue} from '@utils/is-true';

import {CartTemplateProps} from './cart-template.props';
import {Container} from './cart-template.styles';

export const CartTemplate = ({
  cart,
  onDelete,
  onSave,
  cartListProps,
  buttonProps,
  ...rest
}: CartTemplateProps) => {
  return (
    <Container {...rest}>
      <CartList cart={cart} onDelete={onDelete} {...cartListProps} />

      {isTrue(cart) && (
        <Button onPress={onSave} {...buttonProps}>
          {translate(LanguagePaths.CART_SUBMIT)}
        </Button>
      )}
    </Container>
  );
};
