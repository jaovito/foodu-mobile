import {CartModel} from '@store/cart';
import {mock} from '@test/mocks';

describe('Cart Store Test', () => {
  it('should be able to create a new cart store', () => {
    const foodModel = CartModel.create({
      foods: {},
    });

    expect(foodModel).toBeDefined();
    expect(foodModel).toBeTruthy();
  });

  it('should be able to add a food into cart', () => {
    const foodModel = CartModel.create({
      foods: {},
    });

    const foods = mock.cartStore.foods;

    for (const foodItem of foods) {
      foodModel.addToCart(foodItem, 1);
    }

    expect(foodModel.allFoods).toHaveLength(2);
  });

  it('should be able to set all foods into cart', () => {
    const foodModel = CartModel.create({
      foods: {},
    });

    const foods = mock.cartStore.foods;

    foodModel.setFoods(foods);

    expect(foodModel.allFoods).toHaveLength(2);
  });

  it('should be able to remove some foods of the cart', async () => {
    const foodModel = CartModel.create({
      foods: {},
    });

    const foods = mock.cartStore.foods;
    foodModel.setFoods(foods);

    await foodModel.removeFood(mock.cartStore.foods[0].id);

    expect(foodModel.allFoods).toHaveLength(1);
    expect(foodModel.allFoods[0]).toStrictEqual(mock.cartStore.foods[1]);
  });

  it('should be able to remove all foods of the cart', () => {
    const foodModel = CartModel.create({
      foods: {},
    });

    const foods = mock.cartStore.foods;
    foodModel.setFoods(foods);

    foodModel.removeAllFoods();

    expect(foodModel.allFoods).toHaveLength(0);
  });
});
