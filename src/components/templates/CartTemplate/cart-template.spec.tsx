import {mock} from '@test/mocks';
import {fireEvent, render} from '@test/utils/test-utils';
import {LanguagePaths} from '@translations/enumns/LanguagePaths';
import {translate} from '@translations/index';
import {CartTemplate} from './';

describe('<CartTemplate />', () => {
  it('should be defined', () => {
    const cartList = render(
      <CartTemplate
        onSave={mock.cartTemplate.onSave}
        cart={mock.cartTemplate.cart}
        onDelete={mock.cartTemplate.onDelete}
      />,
    );

    expect(cartList).toBeDefined();
  });

  it('should be able to find some food', async () => {
    const {findByText} = render(
      <CartTemplate
        onSave={mock.cartTemplate.onSave}
        cart={mock.cartTemplate.cart}
        onDelete={mock.cartTemplate.onDelete}
      />,
    );

    const cart = await findByText(mock.cartTemplate.cart[1].name);

    expect(cart).toBeTruthy();
  });

  it('should be able to delete some food', async () => {
    const {findAllByTestId} = render(
      <CartTemplate
        onSave={mock.cartTemplate.onSave}
        cart={mock.cartTemplate.cart}
        onDelete={mock.cartTemplate.onDelete}
      />,
    );

    const cart = await findAllByTestId(mock.cartCard.ids.DeleteCartButtonID);
    fireEvent.press(cart[0]);

    expect(mock.cartTemplate.onDelete).toHaveBeenCalled();
  });

  it('should be able to save the cart', async () => {
    const {findByText} = render(
      <CartTemplate
        onSave={mock.cartTemplate.onSave}
        cart={mock.cartTemplate.cart}
        onDelete={mock.cartTemplate.onDelete}
      />,
    );

    const button = await findByText(translate(LanguagePaths.CART_SUBMIT));
    fireEvent.press(button);

    expect(mock.cartTemplate.onSave).toHaveBeenCalled();
  });

  it('should match with snapshot', () => {
    const cartList = render(
      <CartTemplate
        onSave={mock.cartTemplate.onSave}
        cart={mock.cartTemplate.cart}
        onDelete={mock.cartTemplate.onDelete}
      />,
    ).toJSON();

    expect(cartList).toMatchSnapshot();
  });
});
