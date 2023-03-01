import {CartListProps} from '@components/organisms/CartList';

export interface CartTemplateProps {
  cart: CartListProps['cart'];
  onDelete: (id: string) => void;
}
