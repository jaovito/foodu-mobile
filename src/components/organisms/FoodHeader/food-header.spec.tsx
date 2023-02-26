import {fireEvent, render} from '@test-utils';
import {mock} from '@test/mocks';
import {FoodHeader} from './food-header';

describe('<FoodHeader /> tests', () => {
  it('should be defined', () => {
    const header = render(
      <FoodHeader
        foodId={mock.foodHeader.foodId}
        onFavorite={mock.foodHeader.onFavorite}
        onGoBack={mock.foodHeader.onGoBack}
      />,
    );

    expect(header).toBeDefined();
  });

  it('should be able to click into goBack', async () => {
    const {findByTestId} = render(
      <FoodHeader
        foodId={mock.foodHeader.foodId}
        onFavorite={mock.foodHeader.onFavorite}
        onGoBack={mock.foodHeader.onGoBack}
      />,
    );

    const button = await findByTestId(mock.foodHeader.testIds[0]);
    fireEvent.press(button);

    expect(mock.foodHeader.onGoBack).toHaveBeenCalled();
  });

  it('should be able to click into favorite button', async () => {
    const {findByTestId} = render(
      <FoodHeader
        foodId={mock.foodHeader.foodId}
        onFavorite={mock.foodHeader.onFavorite}
        onGoBack={mock.foodHeader.onGoBack}
      />,
    );

    const button = await findByTestId(mock.foodHeader.testIds[1]);
    fireEvent.press(button);

    expect(mock.foodHeader.onFavorite).toHaveBeenCalled();
  });

  it('should be able to match with snapshot', () => {
    const header = render(
      <FoodHeader
        foodId={mock.foodHeader.foodId}
        onFavorite={mock.foodHeader.onFavorite}
        onGoBack={mock.foodHeader.onGoBack}
      />,
    ).toJSON();

    expect(header).toMatchSnapshot();
  });
});
