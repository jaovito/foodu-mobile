import {fireEvent, render} from '@test-utils';
import {mock} from '@test/mocks';
import {FoodColumnList} from './food-column-list';

describe('organism/FoodColumnList Tests', () => {
  it('should be defined', () => {
    const list = render(
      <FoodColumnList onPress={mock.foodColumnList.onPress} />,
    );

    expect(list).toBeDefined();
  });

  it('should be able to find some food inside the list', async () => {
    const {findByText} = render(
      <FoodColumnList
        onPress={mock.foodColumnList.onPress}
        foods={mock.foodColumnList.foods}
      />,
    );

    const food = await findByText(mock.foodColumnList.foods[0].name);

    expect(food).toBeTruthy();
  });

  it('should not be able to find some food inside the list', async () => {
    const {queryByText} = render(
      <FoodColumnList onPress={mock.foodColumnList.onPress} />,
    );

    const food = queryByText(mock.foodColumnList.foods[0].name);

    expect(food).toBeFalsy();
  });

  it('should not be able to click in some food', async () => {
    const {findByText} = render(
      <FoodColumnList
        onPress={mock.foodColumnList.onPress}
        foods={mock.foodColumnList.foods}
      />,
    );

    const food = await findByText(mock.foodColumnList.foods[0].name);
    fireEvent.press(food);

    expect(mock.foodColumnList.onPress).toHaveBeenCalled();
  });

  it('should match snapshot with foods', async () => {
    const list = render(
      <FoodColumnList
        onPress={mock.foodColumnList.onPress}
        foods={mock.foodColumnList.foods}
      />,
    ).toJSON();

    expect(list).toMatchSnapshot();
  });

  it('should match snapshot without foods', async () => {
    const list = render(
      <FoodColumnList onPress={mock.foodColumnList.onPress} />,
    ).toJSON();

    expect(list).toMatchSnapshot();
  });
});
