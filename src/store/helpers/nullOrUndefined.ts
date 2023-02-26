import {IAnyType, types} from 'mobx-state-tree';

export function nullOrUndefined<T extends IAnyType>(type: T) {
  return types.maybe(types.maybeNull(type));
}
