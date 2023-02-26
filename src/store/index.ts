import {cast, flow, types} from 'mobx-state-tree';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {IUserSnapshotOut, UserModel} from './user';
import {addDays, isBefore} from 'date-fns';
import {FoodModel} from './food';
import {LocationModel} from './location';
import {nullOrUndefined} from './helpers/nullOrUndefined';
import {CartModel} from './cart';

const RootStore = types
  .model({
    user: nullOrUndefined(UserModel),
    token: nullOrUndefined(types.string),
    cart: CartModel,
    food: FoodModel,
    location: LocationModel,
    isLoading: types.boolean,
  })
  .actions(self => ({
    setUser(user: IUserSnapshotOut) {
      self.user = user;
    },
    setToken(token: string) {
      self.token = token;
    },
    signIn: flow(function* (login: LoginResponse) {
      try {
        self.token = login.token;
        self.user = login.user;

        const afterDay = addDays(new Date(), 1);

        yield AsyncStorage.setItem('@foodu:user', JSON.stringify(login.user));
        yield AsyncStorage.setItem('@foodu:token', login.token);
        yield AsyncStorage.setItem('@foodu:expiresIn', String(afterDay));
      } catch (err) {
        console.log(`err: ${err}`);
      }
    }),
    setLoading: (value: boolean) => {
      self.isLoading = value;
    },
    loadAsyncStorage: flow(function* () {
      const user = yield AsyncStorage.getItem('@foodu:user');
      const token = yield AsyncStorage.getItem('@foodu:token');
      const expiresIn = yield AsyncStorage.getItem('@foodu:expiresIn');
      const location = yield AsyncStorage.getItem('@foodu:location');
      const savedLocation = yield AsyncStorage.getItem(
        '@foodu:isSavedLocation',
      );
      const cart = yield AsyncStorage.getItem('@foodu:cart');

      const isBeforeExpiresIn = isBefore(new Date(), new Date(expiresIn));

      if (!isBeforeExpiresIn) {
        yield AsyncStorage.removeItem('@foodu:user');
        yield AsyncStorage.removeItem('@foodu:token');
        yield AsyncStorage.removeItem('@foodu:expiresIn');
        yield AsyncStorage.removeItem('@foodu:cart');
      }

      if (user && token && isBeforeExpiresIn) {
        self.user = JSON.parse(user);
        self.token = token;
        self.location.changeLocation(JSON.parse(location));
        savedLocation && self.location.changeIsSavedLocation(true);

        if (cart) {
          self.cart.foods = cast(JSON.parse(cart));
        }
      }
    }),
  }));

export const store = RootStore.create({
  user: null,
  token: null,
  food: {counter: 1},
  cart: {
    foods: undefined,
  },
  location: {
    longitude: null,
    latitude: null,
    isSavedLocation: false,
  },
  isLoading: true,
});
