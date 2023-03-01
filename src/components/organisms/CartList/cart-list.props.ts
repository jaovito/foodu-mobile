import {IFoodModel} from '@store/cart';

export interface CartListProps {
  cart: IFoodModel[];
  onDelete: (id: string) => void;
}
