import AsyncStorage from '@react-native-async-storage/async-storage';
import {flow, Instance, SnapshotIn, SnapshotOut, types} from 'mobx-state-tree';
import {FoodSize} from '../generated/graphql';
import {nullOrUndefined} from './helpers/nullOrUndefined';

const FoodModel = types.model({
  id: types.identifier,
  name: types.string,
  price: types.number,
  size: types.enumeration('FoodSize', [
    FoodSize.Small,
    FoodSize.Medium,
    FoodSize.Big,
  ]),
  counter: types.optional(types.number, 1),
  about: nullOrUndefined(types.string),
  created_at: types.string,
  updated_at: types.string,
  energy: types.string,
  file: nullOrUndefined(
    types.model({
      file_url: types.string,
    }),
  ),
});

const FoodModelMap = types.map(FoodModel);

export interface ICartFoodMap extends Instance<typeof FoodModelMap> {}
export interface IFoodModel extends Instance<typeof FoodModel> {}

export const CartModel = types
  .model({
    foods: types.optional(FoodModelMap, {}),
  })
  .views(self => ({
    get allFoods() {
      return Array.from(self.foods.values());
    },
  }))
  .actions(self => ({
    setFoods: flow(function* (foods: IFoodModel[]) {
      const foodObjects = foods.reduce((current, newValue) => {
        return {
          ...current,
          [newValue.id]: newValue,
        };
      }, {} as ICartFoodMap);

      self.foods = foodObjects;
      yield AsyncStorage.setItem('@foodu:cart', JSON.stringify(foodObjects));
    }),
    addToCart: flow(function* (food: IFoodModel, counter: number) {
      self.foods.set(food.id, {...food, counter});
      yield AsyncStorage.setItem('@foodu:cart', JSON.stringify(self.foods));
    }),
    removeFood: flow(function* (id: string) {
      self.foods.delete(id);
      yield AsyncStorage.setItem('@foodu:cart', JSON.stringify(self.foods));
    }),
    removeAllFoods: flow(function* () {
      self.foods.clear();
      yield AsyncStorage.removeItem('@foodu:cart');
    }),
    refreshFoods: flow(function* () {
      const foodsStr = yield AsyncStorage.getItem('@foodu:cart');
      const foods = foodsStr ? JSON.parse(foodsStr) : null;

      self.foods = foods;

      return Array.from(foods);
    }),
    updateCounterFood: flow(function* (id: string, counter: number) {
      const food = self.foods.get(id);

      if (!food) {
        return;
      }

      self.foods.set(id, {...food, counter});
      yield AsyncStorage.setItem('@foodu:cart', JSON.stringify(self.foods));
    }),
  }));

export interface ICart extends Instance<typeof CartModel> {}
export interface ICartSnapshotIn extends SnapshotIn<typeof CartModel> {} // => { name?: string }
export interface ICartSnapshotOut extends SnapshotOut<typeof CartModel> {} // => { name: string }
