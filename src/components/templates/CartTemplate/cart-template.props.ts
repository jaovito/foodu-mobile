import {ButtonProps} from '@components/atoms/Button';
import {CartListProps} from '@components/organisms/CartList';
import {ViewProps} from 'react-native';

export interface CartTemplateProps extends ViewProps {
  /**
   * It is the food in the cart list
   */
  cart: CartListProps['cart'];
  /**
   * It is the function called when the trash icon is pressed
   */
  onDelete: (id: string) => void;
  /**
   * It is the function called when the save button is pressed
   */
  onSave: () => void;

  /**
   * It is the cart list props (ScrollView)
   */
  cartListProps?: Partial<CartListProps>;
  /**
   * It is the button props (Save button)
   */
  buttonProps?: Partial<ButtonProps>;
}
