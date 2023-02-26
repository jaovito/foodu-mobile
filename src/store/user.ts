import {Instance, SnapshotIn, SnapshotOut, types} from 'mobx-state-tree';

export const UserModel = types.model({
  id: types.identifier,
  name: types.string,
  email: types.string,
  cel: types.string,
  file_id: types.maybeNull(types.string),

  latitude: types.maybeNull(types.number),
  longitude: types.maybeNull(types.number),

  doccument: types.maybeNull(types.string),

  created_at: types.string,
  updated_at: types.string,
});

export interface IUser extends Instance<typeof UserModel> {}
export interface IUserSnapshotIn extends SnapshotIn<typeof UserModel> {} // => { name?: string }
export interface IUserSnapshotOut extends SnapshotOut<typeof UserModel> {} // => { name: string }
