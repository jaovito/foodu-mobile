import {fireEvent, render} from '@test-utils';
import {mock} from '../../../test/mocks';
import {BuyFoodCard} from '.';

describe('BuyFoodCard tests', () => {
  it('should be defined', () => {
    const card = render(
      <BuyFoodCard
        name={mock.buyFoodCard.name}
        about={mock.buyFoodCard.about}
        price={mock.buyFoodCard.price}
      />,
    );

    expect(card).toBeDefined();
  });

  it('should be able to find the name of the card', async () => {
    const {findByText} = render(
      <BuyFoodCard
        name={mock.buyFoodCard.name}
        about={mock.buyFoodCard.about}
        price={mock.buyFoodCard.price}
      />,
    );

    const cardName = await findByText(mock.buyFoodCard.name);

    expect(cardName).toBeTruthy();
  });

  it('should be able to find the about text of the card', async () => {
    const {findByText} = render(
      <BuyFoodCard
        name={mock.buyFoodCard.name}
        about={mock.buyFoodCard.about}
        price={mock.buyFoodCard.price}
      />,
    );

    const cardAboutText = await findByText(mock.buyFoodCard.about);

    expect(cardAboutText).toBeTruthy();
  });

  it('should be able to click on the card', async () => {
    const onPress = jest.fn();

    const {getByText} = render(
      <BuyFoodCard
        name={mock.buyFoodCard.name}
        about={mock.buyFoodCard.about}
        price={mock.buyFoodCard.price}
        onPress={onPress}
      />,
    );

    fireEvent.press(getByText(mock.buyFoodCard.name));

    expect(onPress).toBeCalled();
  });

  it('should match with snapshot', async () => {
    const onPress = jest.fn();

    const card = render(
      <BuyFoodCard
        name={mock.buyFoodCard.name}
        about={mock.buyFoodCard.about}
        price={mock.buyFoodCard.price}
        onPress={onPress}
      />,
    ).toJSON();

    expect(card).toMatchSnapshot();
  });
});
