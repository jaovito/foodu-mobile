import {mock} from '@test/mocks';
import {fireEvent, render} from '@test/utils/test-utils';
import {CartList} from './';

describe('<CartList />', () => {
  it('should be defined', () => {
    const cartList = render(
      <CartList cart={mock.cartList.cart} onDelete={mock.cartList.onDelete} />,
    );

    expect(cartList).toBeDefined();
  });

  it('should be able to find some food', async () => {
    const {findByText} = render(
      <CartList cart={mock.cartList.cart} onDelete={mock.cartList.onDelete} />,
    );

    const cart = await findByText(mock.cartList.cart[1].name);

    expect(cart).toBeTruthy();
  });

  it('should be able to delete some food', async () => {
    const {findAllByTestId} = render(
      <CartList cart={mock.cartList.cart} onDelete={mock.cartList.onDelete} />,
    );

    const cart = await findAllByTestId(mock.cartCard.ids.DeleteCartButtonID);
    fireEvent.press(cart[0]);

    expect(mock.cartList.onDelete).toHaveBeenCalled();
  });

  it('should match with snapshot', () => {
    const cartList = render(
      <CartList cart={mock.cartList.cart} onDelete={mock.cartList.onDelete} />,
    ).toJSON();

    expect(cartList).toMatchSnapshot();
  });
});
