import {FoodModel} from '@store/food';

describe('Food Store Test', () => {
  it('should be able to create a new food store', () => {
    const food = FoodModel.create({
      counter: 1,
    });

    expect(food).toBeDefined();
    expect(food).toBeTruthy();
  });

  it('should be able to find the counter inside the food store and his value be 1', () => {
    const food = FoodModel.create({
      counter: 1,
    });

    expect(food.counter).toBe(1);
  });

  it('should be able to increment the counter', () => {
    const food = FoodModel.create({
      counter: 1,
    });

    food.incrementCounter();

    expect(food.counter).toBe(2);
  });

  it('should be able to decrement the counter', () => {
    const food = FoodModel.create({
      counter: 2,
    });

    food.decrementCounter();

    expect(food.counter).toBe(1);
  });

  it('should be able to reset the counter to one if the number is less then zero', () => {
    const food = FoodModel.create({
      counter: 1,
    });

    food.decrementCounter();

    expect(food.counter).toBe(1);
  });

  it('should be able to set the state', () => {
    const food = FoodModel.create({
      counter: 1,
    });

    food.setFood({counter: 1});

    expect(food.counter).toBe(1);
  });
});
