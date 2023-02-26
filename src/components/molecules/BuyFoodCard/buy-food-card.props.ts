import {TextProps} from '@components/atoms/Text/text.props';
import {ImageProps, TouchableOpacityProps} from 'react-native/types';

export interface BuyFoodCardProps extends TouchableOpacityProps {
  /**
   * This property is the name of the food, displayed in the card
   */
  name: string;

  /**
   * This property is the address of the food, displayed in the card
   */
  about: string | null | undefined;

  /**
   * This property is the image url of the food, displayed in the card
   */
  image?: string;

  /**
   * The button text is the text that will be displayed in the button, if you don`t provide, it will be displayed "See more"
   */
  buttonText?: string;

  /**
   * Is the price of the food
   */
  price: number;

  /**
   * Is the image props of the component, you can use this property to edit the image and the props of the component
   */
  imageProps?: Partial<ImageProps>;

  /**
   * Is the name props of the component, you can use this property to edit the name and the props of the component (text component)
   */
  nameProps?: Partial<TextProps>;

  /**
   * Is the about props of the component, you can use this property to edit the about and the props of the component (text component)
   */
  aboutProps?: Partial<TextProps>;
}
