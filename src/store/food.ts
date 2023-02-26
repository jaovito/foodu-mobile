import {Instance, SnapshotIn, SnapshotOut, types} from 'mobx-state-tree';

export const FoodModel = types
  .model({
    counter: types.optional(types.number, 1),
  })
  .actions(self => ({
    incrementCounter: () => {
      self.counter++;
    },
    decrementCounter: () => {
      if (self.counter - 1 <= 0) {
        self.counter = 1;
      } else {
        self.counter = self.counter - 1;
      }
    },
    setFood: (food: IFoodSnapshotOut) => {
      self = food;
    },
  }));

export interface IFood extends Instance<typeof FoodModel> {}
export interface IFoodSnapshotIn extends SnapshotIn<typeof FoodModel> {} // => { name?: string }
export interface IFoodSnapshotOut extends SnapshotOut<typeof FoodModel> {} // => { name: string }
