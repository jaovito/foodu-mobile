import {fireEvent, render} from '@test-utils';
import {mock} from '../../../test/mocks';
import {RestaurantCard} from '.';

describe('RestaurantCard tests', () => {
  it('should be defined', () => {
    const card = render(
      <RestaurantCard
        name={mock.restaurantCard.name}
        address={mock.restaurantCard.address}
      />,
    );

    expect(card).toBeDefined();
  });

  it('should be able to find the name of the card', async () => {
    const {findByText} = render(
      <RestaurantCard
        name={mock.restaurantCard.name}
        address={mock.restaurantCard.address}
      />,
    );

    const cardName = await findByText(mock.restaurantCard.name);

    expect(cardName).toBeTruthy();
  });

  it('should be able to find the address text of the card', async () => {
    const {findByText} = render(
      <RestaurantCard
        name={mock.restaurantCard.name}
        address={mock.restaurantCard.address}
      />,
    );

    const cardAboutText = await findByText(mock.restaurantCard.address);

    expect(cardAboutText).toBeTruthy();
  });

  it('should be able to click on the card', async () => {
    const onPress = jest.fn();

    const {getByText} = render(
      <RestaurantCard
        name={mock.restaurantCard.name}
        address={mock.restaurantCard.address}
        onPress={onPress}
      />,
    );

    fireEvent.press(getByText(mock.restaurantCard.name));

    expect(onPress).toBeCalled();
  });

  it('should match with snapshot', async () => {
    const onPress = jest.fn();

    const card = render(
      <RestaurantCard
        name={mock.restaurantCard.name}
        address={mock.restaurantCard.address}
        onPress={onPress}
      />,
    ).toJSON();

    expect(card).toMatchSnapshot();
  });
});
