import {TextProps} from '@components/atoms/Text/props';
import {ImageProps, TouchableOpacityProps} from 'react-native/types';

export interface RestaurantCardProps extends TouchableOpacityProps {
  /**
   * This property is the name of the restaurant, displayed in the card
   */
  name: string;

  /**
   * This property is the address of the restaurant, displayed in the card
   */
  address: string;

  /**
   * This property is the image url of the restaurant, displayed in the card
   */
  image?: string;

  /**
   * The button text is the text that will be displayed in the button, if you don`t provide, it will be displayed "See more"
   */
  buttonText?: string;

  /**
   * Is the image props of the component, you can use this property to edit the image and the props of the component
   */
  imageProps?: Partial<ImageProps>;

  /**
   * Is the name props of the component, you can use this property to edit the name and the props of the component (text component)
   */
  nameProps?: Partial<TextProps>;

  /**
   * Is the address props of the component, you can use this property to edit the address and the props of the component (text component)
   */
  addressProps?: Partial<TextProps>;
}
