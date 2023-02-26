import {flow, Instance, SnapshotIn, SnapshotOut, types} from 'mobx-state-tree';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {nullOrUndefined} from './helpers/nullOrUndefined';

export const LocationModel = types
  .model({
    latitude: nullOrUndefined(types.number),
    longitude: nullOrUndefined(types.number),
    address: types.maybe(types.string),
    isSavedLocation: types.boolean,
  })
  .actions(self => ({
    changeLocation: flow(function* (location: ILocationParams) {
      const newLocation = {
        latitude: location.latitude ?? self.latitude,
        longitude: location.longitude ?? self.longitude,
        address: location.address ?? self.address,
      };

      self.latitude = newLocation.latitude;
      self.longitude = newLocation.longitude;
      self.address = newLocation.address;

      yield AsyncStorage.setItem(
        '@foodu:location',
        JSON.stringify(newLocation),
      );
    }),
    changeIsSavedLocation: flow(function* (value: boolean) {
      self.isSavedLocation = value;

      yield AsyncStorage.setItem(
        '@foodu:isSavedLocation',
        JSON.stringify(value),
      );
    }),
  }));

export interface ILocation extends Instance<typeof LocationModel> {}
export interface ILocationSnapshotIn extends SnapshotIn<typeof LocationModel> {} // => { latitude?: number }
export interface ILocationSnapshotOut
  extends SnapshotOut<typeof LocationModel> {} // => { latitude: number }
